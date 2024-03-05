import React from "react";
import ProjectImg from "../public/project_img.png";
import FoodBlog from "../public/food_blog.png";
import JsQuiz from "../public/js_quiz.png";
import {
  PiBriefcaseLight,
  PiCoatHangerLight,
  PiGraduationCapLight,
  PiCodeLight,
  PiAirplaneTiltLight,
  PiMapPinLineLight,
  PiShoppingCartLight,
} from "react-icons/pi";

export const links = [
  {
    name: "Home",
    hashtag: "#home",
  },
  {
    name: "About Me",
    hashtag: "#aboutme",
  },
  {
    name: "Projects",
    hashtag: "#projects",
  },
  {
    name: "Skills",
    hashtag: "#skills",
  },
  {
    name: "Experience",
    hashtag: "#experience",
  },
  {
    name: "Contact Me",
    hashtag: "#contactme",
  },
] as const;

export const projectData = [
  {
    title: "Polaroid",
    description:
      "An image sharing, social media site where users can explore, share and manage posts from their every day lives. Features include the ability to pin posts, leave comments and follow different users. The application is connected to a custom backend API which implements full CRUD capabilities and user authentication.",
    image: "HarryPotterMp3_pxytm5",
    tags: ["ReactJS", "Django", "Rest API", "Bootstrap", "CSS", "PostgreSQL"],
    liveUrl: "https://pp5-frontend-social-app.herokuapp.com/",
    repoUrl: "https://github.com/dantaylor28/polaroid-social-media-frontend",
  },
  {
    title: "Harry Potter Quiz",
    description:
      "An interactive quiz game, developed using vanilla Javascript, HTML and custom CSS. Some of the game's main features include sound effects, a timeline counter and smooth page transitions while you answer 20 Harry Potter themed questions.",
    image: "HarryPotterMp3_pxytm5",
    tags: ["Javascript", "HTML", "CSS"],
    liveUrl: "https://dantaylor28.github.io/harry_potter_quiz/",
    repoUrl: "https://github.com/dantaylor28/harry_potter_quiz.git",
  },
  {
    title: "The Food Blog",
    description:
      "The Food Blog is a Django full-stack application where users can discover and share recipes along with other general culinary posts. Features include the capability to filter through posts by category, the ability to like posts and leave comments and a fully integrated admin panel where blog data can be managed and monitored.",
    image: "HarryPotterMp3_pxytm5",
    tags: ["Python", "Django", "Bootstrap", "HTML", "CSS", "PostgreSQL"],
    liveUrl: "https://pp4-food-blog.herokuapp.com/",
    repoUrl: "https://github.com/dantaylor28/the-food-blog",
  },
] as const;

export const frontendSkills = [
  { icon: "icon-[logos--react] text-[2.2rem]", language: "React.js" },
  { icon: "icon-[logos--nextjs-icon] text-[2.4rem]", language: "Next.js" },
  { icon: "icon-[logos--javascript] text-[2rem]", language: "Javascript" },
  { icon: "icon-[logos--typescript-icon] text-[2rem]", language: "Typescript" },
  { icon: "icon-[logos--html-5] text-[2.3rem]", language: "HTML5" },
  { icon: "icon-[logos--css-3] text-[2.3rem]", language: "CSS3" },
  { icon: "icon-[logos--python] text-[2.3rem]", language: "Python" },
  { icon: "icon-[logos--django-icon] text-[2rem]", language: "Django" },
  { icon: "icon-[logos--bootstrap] text-[2rem]", language: "Bootstrap" },
  {
    icon: "icon-[logos--tailwindcss-icon] text-[1.7rem]",
    language: "TailwindCSS",
  },
] as const;

export const backendSkills = [
  { icon: "icon-[logos--nodejs-icon] text-[2.4rem]", language: "Node.js" },
  { icon: "icon-[logos--postgresql] text-[2.2rem]", language: "PostgreSQL" },
  { icon: "icon-[logos--mysql-icon] text-[2.1rem]", language: "MySQL" },
  { icon: "icon-[logos--mongodb-icon] text-[2.5rem]", language: "MongoDB" },
  { icon: "icon-[logos--docker-icon] text-[2rem]", language: "Docker" },
  { icon: "icon-[logos--git-icon] text-[2.5rem]", language: "Git" },
  { icon: "icon-[logos--github-icon] text-[2.4rem]", language: "Github" },
  {
    icon: "icon-[logos--visual-studio-code] text-[2.2rem]",
    language: "VSCode",
  },
  { icon: "icon-[logos--heroku-icon] text-[2rem]", language: "Heroku" },
  { icon: "icon-[logos--vercel-icon] text-[1.8rem]", language: "Vercel" },
  { icon: "icon-[logos--prettier] text-[2rem]", language: "Prettier" },
  { icon: "icon-[logos--eslint] text-[2.2rem]", language: "ESLint" },
  { icon: "icon-[logos--xcode] text-[2.3rem]", language: "Xcode" },
] as const;

export const experienceData = [
  {
    title: "Open For Opportunities",
    description:
      "I am now looking to join an exciting development team to work alongside, and gain more real world experience.",
    location: "Göteborg, Sweden",
    date: "2024",
    icon: React.createElement(PiBriefcaseLight),
  },
  {
    title: "Graduated From Bootcamp",
    description:
      "After a year of study, I graduated from Code Institute with a certificate in Full-Stack Web Development.",
    location: "Dublin, Ireland",
    date: "2023",
    icon: React.createElement(PiGraduationCapLight),
  },
  {
    title: "Sales & Operational Keyholder | Superdry",
    description:
      "Here I am responsible for all operational duties in store, alongside providing great customer service & helping the team to achieve store sales targets and KPIs.",
    location: "Göteborg, Sweden",
    date: "April 2017 - Current",
    icon: React.createElement(PiCoatHangerLight),
  },
  {
    title: "Hello, World!",
    description:
      "After discovering the wealth of online learning material, this is when I wrote my first ever line of HTML code.",
    location: "Stockholm, Sweden",
    date: "September 2021",
    icon: React.createElement(PiCodeLight),
  },
  {
    title: "Moved to Sweden",
    description: 
      "The day I packed up my life in the UK and made the move to my new home in Gothenburg, Sweden.",
    location: "UK -> Sweden",
    date: "March 2017",
    icon: React.createElement(PiAirplaneTiltLight),
  },
  {
    title: "Career Break To Travel",
    description:
      "Backpacked my way through 19 countries, starting in Thailand and ending 9 months later in the Caribbean.",
    location: "SE Asia -> Europe -> Central America",
    date: "2016",
    icon: React.createElement(PiMapPinLineLight),
  },
  {
    title: "Team Leader | Co-Operative",
    description:
      "Led the team responsible for store & delivery logistics, while helping to create an inspiring work environment & encouraging open communication with my positive attitude & passion.",
    location: "Wolverhampton, England",
    date: "2012 - 2017",
    icon: React.createElement(PiShoppingCartLight),
  },
] as const;
