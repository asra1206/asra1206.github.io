// All content comes from your CV. Edit here to update the website.
export const profile = {
  name: "A. Paththima Asra",
  title: "HNDIT Undergraduate",
  tagline: "Seeking Industrial Training Placement",
  summary:
    "I am a motivated and hardworking individual with a strong willingness to learn and grow. I enjoy taking on new challenges and always strive to give my best in everything I do. I value teamwork, responsibility, and continuous self-improvement, and I'm always open to gaining new experiences that help me develop both personally and professionally.",
  phone: "+94 75 65 78 488",
  email: "aafasra2022@gmail.com",
  location: "182/A, Mancholai Road, Nadutheewu, Mutur, 07",
  github: "https://github.com/asra1206/asra",
  photo: "/profile.jpg",   // put your photo in /public
  cv: "/Asra-CV.pdf",      // put your CV PDF in /public
};

export const technical = ["HTML", "CSS", "JavaScript", "Java", "PHP", "MySQL", "Microsoft Office"];
export const soft = ["Communication", "Problem Solving", "Time Management", "Leadership", "Teamwork"];

export const education = [
  {
    title: "Higher National Diploma in Information Technology (HNDIT)",
    place: "SLIATE - Advanced Technological Institute (ATI), Trincomalee",
    period: "2024 - 2027",
    details: [],
  },
  {
    title: "G.C.E. Advanced Level (A/L)",
    place: "T/Mu/Sinhala Maha Vidyalaya Mutur",
    period: "2022 (2023)",
    details: ["Stream: Arts", "Sinhala: B", "History: C", "Media: C"],
  },
  {
    title: "G.C.E. Ordinary Level (O/L)",
    place: "T/Mu/Sinhala Maha Vidyalaya Mutur",
    period: "2018",
    details: ["B, C, 4, S4 (Mathematics C, English S)"],
  },
];

// Add a link below (live site or GitHub repo). Buttons only appear when a link is filled in.
export const projects = [
  {
    title: "Road Traffic Management System",
    points: [
      "Developed a web-based traffic management system",
      "Implemented real-time traffic monitoring using Google Maps API",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Land Selling and Buying Web System",
    points: [
      "Developed a web application for buying and selling land",
      "Enabled users to view and manage property listings",
      "Buyer inquiry form, using latitude and longitude",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "",
    githubUrl: "",
  },
];

export const experience = {
  company: "Mubeen Studio",
  role: "Graphic Designer / Computer Operator",
  period: "August 2023 - December 2023",
  points: [
    "Designed posters, banners, and social media graphics.",
    "Edited photos and prepared designs based on customer requirements.",
    "Assisted customers and ensured timely project delivery.",
  ],
};

export const creativeSkills = [
  "Promotional Poster Design", "Social Media Post Design", "Graphic Design", "Canva", "Figma", "Photo Editing",
];

// Add your images to /public/designs/ and match the file names here.
export const designs = [
  { title: "Promotional Poster 1", type: "Poster", img: "/designs/poster1.jpeg" },
  { title: "Promotional Poster 2", type: "Poster", img: "/designs/poster2.jpeg" },
  { title: "Social Media Post 1", type: "Social media", img: "/designs/social1.jpeg" },
  { title: "Social Media Post 2", type: "Social media", img: "/designs/social2.jpeg" },

];

export const languages = [
  { name: "Tamil", level: "Native Proficiency", pct: 100 },
  { name: "Sinhala", level: "Advanced Proficiency", pct: 100 },
  { name: "English", level: "Intermediate Proficiency", pct: 80 },
];
