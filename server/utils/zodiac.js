const getZodiacSign = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // 1-12

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
  
  return "Unknown";
};

const personas = {
  Aries: {
    title: "The Energetic Trailblazer",
    description: "You're a ball of fire! Always ready for an adventure, you lead with your heart and have courage for days. Your enthusiasm is contagious, and you're not afraid to pave your own way.",
    keywords: ["Bold", "Passionate", "Confident"],
    color: "#FFB3BA" // Pastel Red/Pink
  },
  Taurus: {
    title: "The Chill Connoisseur",
    description: "You love the finer things in life—good food, cozy blankets, and serene vibes. You're dependable, grounded, and give the best hugs. Slow and steady wins your race.",
    keywords: ["Reliable", "Patient", "Devoted"],
    color: "#BAFFC9" // Pastel Green
  },
  Gemini: {
    title: "The Social Butterfly",
    description: "You're the life of the party and the master of conversation. Witty and curious, you can talk to anyone about anything. Boredom is your only enemy!",
    keywords: ["Adaptable", "Outgoing", "Intelligent"],
    color: "#FFFFBA" // Pastel Yellow
  },
  Cancer: {
    title: "The Moon Child",
    description: "You feel deeply and love fiercely. Home is your happy place, and you have an incredible intuition. You take care of everyone around you with your gentle soul.",
    keywords: ["Loyal", "Emotional", "Sympathetic"],
    color: "#E0BBE4" // Pastel Purple
  },
  Leo: {
    title: "The Radiant Star",
    description: "You were born to shine! Charismatic and warm-hearted, you light up every room you walk into. You're generous with your love and have a creative spark that never fades.",
    keywords: ["Creative", "Passionate", "Generous"],
    color: "#FFDFBA" // Pastel Orange
  },
  Virgo: {
    title: "The Perfect Helper",
    description: "You have an eye for detail that no one else has. You're kind, hardworking, and always there to lend a hand. You bring order to chaos with your practical magic.",
    keywords: ["Loyal", "Analytical", "Kind"],
    color: "#D4F0F0" // Pastel Teal
  },
  Libra: {
    title: "The Charming Peacemaker",
    description: "Balance is your middle name. You love harmony, beauty, and fairness. You're a natural diplomat who makes everyone feel heard and appreciated.",
    keywords: ["Diplomatic", "Gracious", "Fair-minded"],
    color: "#B5EAD7" // Pastel Mint
  },
  Scorpio: {
    title: "The Mystic Soul",
    description: "You're full of mystery and depth. Passionate and resourceful, you see the world in ways others miss. You're a fiercely loyal friend who keeps secrets like a vault.",
    keywords: ["Resourceful", "Brave", "Passionate"],
    color: "#C7CEEA" // Pastel Blue/Indigo
  },
  Sagittarius: {
    title: "The Happy Wanderer",
    description: "Freedom is your fuel! You're optimistic, funny, and always planning your next trip. Your honest and philosophical nature makes you a joy to be around.",
    keywords: ["Generous", "Idealistic", "Great sense of humor"],
    color: "#FFC3A0" // Pastel Peach
  },
  Capricorn: {
    title: "The Ambitious Achiever",
    description: "You're the CEO of your own life. Disciplined and responsible, you climb every mountain with grace. Your dry wit and reliability make you a rock for your friends.",
    keywords: ["Responsible", "Disciplined", "Self-control"],
    color: "#E2F0CB" // Pastel Lime
  },
  Aquarius: {
    title: "The Unique Visionary",
    description: "You dance to the beat of your own drum. Innovative and humanitarian, you want to make the world a better place. You're a true original with a brilliant mind.",
    keywords: ["Progressive", "Original", "Independent"],
    color: "#A0E6FF" // Pastel Sky Blue
  },
  Pisces: {
    title: "The Dreamy Artist",
    description: "You live in a world of imagination and empathy. You're compassionate, artistic, and deeply intuitive. You feel the vibes before anyone else does.",
    keywords: ["Compassionate", "Artistic", "Intuitive"],
    color: "#FFB7B2" // Pastel Coral
  },
  Unknown: {
    title: "The Mystery Guest",
    description: "The stars are cloudy... we couldn't quite read your date. Try again!",
    keywords: ["Mystery", "Unknown", "?"],
    color: "#E0E0E0" // Gray
  }
};

module.exports = { getZodiacSign, personas };
