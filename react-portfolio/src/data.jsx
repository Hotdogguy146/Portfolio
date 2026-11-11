import itayoImage from "./assets/itayo.png";
import cnnImage from "./assets/cnn-classification.png";
import laravelImage from "./assets/laravel-app.png";
import portfolioImage from "./assets/portfolio.png";

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Damianne Alistair T. Pakkal",
  role: "IT Student • Web Developer • Research Enthusiast",
  address: "#193 J. Peralta Street, Poblacion, Balungao, Pangasinan",
  email: "pakkaldamianne146@gmail.com",
  phone: "+63 945 622 6214",
  school: "Central Luzon State University",
  focus: "Web development, AI applications, and practical IT solutions",
};

export const HIGHLIGHTS = [
  { label: "Projects", value: "4+" },
  { label: "Awards", value: "5" },
  { label: "Experience", value: "3" },
  { label: "School", value: "CLSU" },
];

export const SKILLS = [
  "React", "JavaScript", "PHP", "Laravel", "jQuery", "AJAX",
  "MySQL", "HTML/CSS", "Python", "Machine Learning",
];

export const SOFT_SKILLS = [
  "Web Developer and IOT Builder",
  "Adaptive Problem-Solving",
  "Strong Leadership and Teamwork Coordination",
  "Interpersonal Communication & Relationship Building",
];

export const RESUME = {
  education: [
    {
      period: "2023 – Present",
      title: "Bachelor of Science in Science and Technology",
      detail: "Central Luzon State University – Science City of Muñoz, Nueva Ecija",
    },
    {
      period: "2021 – 2023",
      title: "Science, Technology, Engineering, and Mathematics - Senior High School Education",
      detail: "Rosales National High School – Coloma St., Don Antonio Village, Rosales",
    },
  ],
  experience: [
    {
      period: "2026",
      title: "International Research Conference on Information Technology Education",
      detail: "Participated in the conference and earned 1st Runner Up for AI video content creation.",
    },
    {
      period: "2023",
      title: "Work Immersion at Conrado F. Estrella Regional Medical and Trauma Center",
      detail: "Completed practical training in a professional environment while strengthening real-world workplace discipline.",
    },
    {
      period: "2026",
      title: "ComDesk Associate",
      detail: "Worked on IT-related tasks in a commission-based digital service environment, covering support and productivity work.",
    },
  ],
  certificates: [
    "AWS Academy Graduate - Cloud Foundations Trainee",
    "IRCTE Participation Certificate",
    "Certificate of Merit for being an Academic Scholar",
    "Certificate of Commendation for Exceptional Service and Commitment as a Student Leader",
  ],
  seminars: [
    { period: "August 2026", title: "Building a Privacy-Aware Community: Understanding the Data Privacy Act of 2012" },
    { period: "August 2026", title: "Character Power: Building the Best You Seminar" },
  ],
  organizations: [
    {
      name: "Builders of Information Technology Society",
      roles: [
        "Treasurer (2nd year, 2nd semester, 2025)",
        "Vice President Internal (3rd year, both semesters, 2025)",
        "President (4th year, 1st semester, 2026)",
      ],
    },
  ],
  awards: [
    "Award: President's List Scholar (3rd year, 2nd semester)",
    "Award: University Scholar (1st year, 1st semester; 2nd year, both semesters; 3rd year, both semesters)",
    "Award: College Scholar (1st year, 2nd semester)",
  ],
};

export const PROJECTS = [
  {
    year: "2026",
    name: "ITayo",
    category: "Product",
    image: itayoImage,
    desc: "A business proposal for an ICT learning platform, created to address digital learning needs with a clear product pitch and visual storytelling.",
    tags: ["Product", "Pitch Deck", "Research"],
    detail: "ITayo explores a practical digital learning platform concept designed to support students and learners with accessible ICT-focused education. The project combined problem identification, user-value framing, and presentation materials to show how an online solution can improve learning outcomes and digital readiness.",
  },
  {
    year: "2026",
    name: "Incident Classification Research",
    category: "Research",
    image: cnnImage,
    desc: "A CNN-based model for classifying emergency incidents, developed for academic research and defense presentation.",
    tags: ["Research", "CNN", "Python"],
    detail: "This study focuses on building a machine learning workflow for incident classification, using image-based inputs to detect and categorize emergency situations. It demonstrates practical work in model design, evaluation, and presenting technical findings in a research setting.",
  },
  {
    year: "2025",
    name: "Laravel Web App",
    category: "Web",
    image: laravelImage,
    desc: "A full-stack web application built with Laravel, structured around real-world data handling and operational workflows.",
    tags: ["Laravel", "PHP", "MySQL"],
    detail: "The project highlights backend development, database integration, and deployment preparation. It focuses on building a usable system with maintainable architecture, user flows, and reliable data operations for a real-world business or organizational use case.",
  },
  {
    year: "2026",
    name: "React Portfolio",
    category: "Web",
    image: portfolioImage,
    desc: "A personal portfolio site built with React to present my profile, work, achievements, and contact details in a clean format.",
    tags: ["React", "JavaScript", "Portfolio"],
    detail: "This portfolio is designed as a single-page experience with sections for home, projects, about, and contact. It combines reusable components, responsive layout styling, and structured information to present my academic and technical background clearly.",
  },
];

export const TIMELINE = [
  { when: "Current", what: "IT Student, CLSU", where: "Focused on web development, research, and applied solutions" },
  { when: "Ongoing", what: "Student Leader", where: "Active in Information Technology student organizations and service initiatives" },
  { when: "Ongoing", what: "Research & Project Builder", where: "Creating practical work across software, ML, and academic projects" },
];
