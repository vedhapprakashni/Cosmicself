import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Star, Calendar } from 'lucide-react';

interface Persona {
  sign: string;
  title: string;
  description: string;
  keywords: string[];
  color: string;
}

function App() {
  const [date, setDate] = useState('');
  const [persona, setPersona] = useState<Persona | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;

    setLoading(true);
    setError('');
    setPersona(null);

    try {
      // In production, this URL should be dynamic or relative if served from same origin
      const apiUrl = import.meta.env.PROD 
        ? '/api/persona' 
        : 'http://localhost:5000/api/persona';
        
      const response = await axios.post(apiUrl, { date });
      setPersona(response.data);
    } catch (err) {
      console.error(err);
      setError('Oops! The stars are aligned against us right now. Try again later!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-pink via-white to-pastel-blue flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-10 left-10 text-pastel-yellow opacity-50 animate-float">
        <Star size={48} fill="currentColor" />
      </div>
      <div className="absolute bottom-20 right-10 text-pastel-purple opacity-50 animate-float" style={{ animationDelay: '2s' }}>
        <Heart size={48} fill="currentColor" />
      </div>
      <div className="absolute top-1/2 left-5 text-pastel-mint opacity-50 animate-float" style={{ animationDelay: '1s' }}>
        <Sparkles size={32} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 border-4 border-white z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <Star className="text-pastel-orange" fill="currentColor" />
            AstroPuff
            <Star className="text-pastel-orange" fill="currentColor" />
          </h1>
          <p className="text-gray-500">Discover your cute cosmic persona ✨</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-1 pl-1">
              When were you born?
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Calendar size={18} />
              </div>
              <input
                type="date"
                id="birthdate"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border-2 border-pastel-blue rounded-xl focus:ring-0 focus:border-pastel-purple transition-colors bg-white text-gray-700 outline-none"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-pastel-purple hover:bg-pastel-pink text-white font-bold py-3 px-4 rounded-xl shadow-md transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Sparkles className="animate-spin" /> Reading the stars...
              </span>
            ) : (
              <span>Reveal My Persona! 💖</span>
            )}
          </motion.button>
        </form>

        {error && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 p-4 bg-red-50 text-red-500 rounded-xl text-center border border-red-100"
          >
            {error}
          </motion.div>
        )}

        <AnimatePresence>
          {persona && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="mt-8 p-6 rounded-2xl border-4 border-white shadow-lg relative overflow-hidden"
              style={{ backgroundColor: persona.color }}
            >
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Sparkles size={64} />
              </div>
              
              <div className="relative z-10 text-gray-800">
                <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">
                  You are a
                </div>
                <h2 className="text-3xl font-bold mb-1">{persona.sign}</h2>
                <h3 className="text-lg font-semibold opacity-90 mb-4">{persona.title}</h3>
                
                <p className="mb-4 leading-relaxed bg-white/40 p-3 rounded-lg backdrop-blur-sm">
                  {persona.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {persona.keywords.map((keyword, i) => (
                    <span 
                      key={i} 
                      className="bg-white/60 px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <div className="mt-8 text-center text-gray-400 text-sm">
        Made with 💖 by AstroPuff
      </div>
    </div>
  );
}

export default App;
