// Edit this file to make the portfolio your own.

import heroImage from "./assets/hero.png";
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

export const SKILLS = [
  "React", "JavaScript", "PHP", "Laravel", "jQuery", "AJAX",
  "MySQL", "HTML/CSS", "Python", "Machine Learning",
];

export const PROJECTS = [
  {
    year: "2026",
    name: "ITayo",
    image: itayoImage,
    desc: "A business proposal for an ICT learning platform, covering the pitch deck and supporting poster materials.",
    tags: ["Product", "Pitch Deck"],
    detail: "Put a longer write-up here: the problem ITayo solves, who it's for, and what you built for the pitch (poster, deck, or prototype).",
  },
  {
    year: "2026",
    name: "Incident Classification Research",
    image: cnnImage,
    desc: "A CNN-based model for classifying emergency incidents, written up for academic defense.",
    tags: ["Research", "CNN", "Python"],
    detail: "Add details on the dataset, model architecture (e.g. MobileNetV2), accuracy achieved, and what the paper argues.",
  },
  {
    year: "2025",
    name: "Laravel Web App",
    image: laravelImage,
    desc: "A full-stack web application built with Laravel, deployed on Hostinger.",
    tags: ["Laravel", "PHP", "MySQL"],
    detail: "Describe what the app does, the core features, and any deployment or file-storage challenges you solved.",
  },
  {
    year: "2026",
    name: "React Portfolio",
    image: portfolioImage,
    desc: "This site — a personal portfolio built with functional React components, state, and props.",
    tags: ["React", "JavaScript"],
    detail: "This project itself: a 4-section single-page app (Home, Projects, About, Contact) with a controlled contact form and interactive project list.",
  },
];

export const TIMELINE = [
  { when: "Now", what: "IT Student, CLSU", where: "Coursework in web development and applied ML" },
  { when: "Ongoing", what: "BITS President", where: "Information Technology Student Council" },
  { when: "Ongoing", what: "Gundam Collector", where: "Collecting and displaying Gundam models" },
];
