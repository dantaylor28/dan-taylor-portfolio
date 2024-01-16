import ProjectImg from "../public/project_img.png";
import DrfApi from "../public/drf_api.png";
import FoodBlog from "../public/food_blog.png";

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
      "Polaroid is a social media CRUD application developed using React.js, where users can share images and text from their everyday lives",
    image: ProjectImg,
    tags: ["ReactJS", "Bootstrap", "CSS", "Axios"],
    liveUrl: "https://pp5-frontend-social-app.herokuapp.com/",
    repoUrl: "https://github.com/dantaylor28/polaroid-social-media-frontend",
  },
  {
    title: "DRF API",
    description:
      "A social media API, where users can create, read, update and delete data. This project was developed using the Django Rest Framework",
    image: DrfApi,
    tags: ["Python", "DRF", "API", "CRUD"],
    liveUrl: "https://social-media-drf-api.herokuapp.com/",
    repoUrl: "https://github.com/dantaylor28/drf-api-backend",
  },
  {
    title: "The Food Blog",
    description:
      "The Food Blog is a Django full stack application where users can discover & share recipes and other general culinary blogs",
    image: FoodBlog,
    tags: ["Python", "Django", "Bootstrap", "HTML", "Cloudinary"],
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
    title: "Looking for job",
    description: "I am now searching for my first opportunity to work within an exciting development team.",
    location: "Göteborg, Sweden",
    date: "2024",
  },
  {
    title: "Superdry, Gothenburg",
    description: "I am currently working at the clothing store Superdry, where I am responsible for all operational & logistical duties in store.",
    location: "Gothenburg, Sweden",
    date: "April 2017 - Current",
  },
  {
    title: "Graduated from bootcamp",
    description: "After 8 months of study, I graduated from Code Institute with a certificate in full-stack web development.",
    location: "Göteborg, Sweden",
    date: "2023",
  },
  {
    title: "Moved to Stockholm",
    description: "Spent 6 months living in Stockholm with a new job before moving back to Gothenburg in February.",
    location: "Stockholm, Sweden",
    date: "September - Februrary 2022",
  },
  {
    title: "Hello, world!",
    description: "The day I wrote my first line of HTML code, after discovering the plethora of free learning material online.",
    location: "Stockholm, Sweden",
    date: "September 2021",
  },
  {
    title: "Moved to Sweden",
    description: "Packed up my life and made the move to snowy Sweden",
    location: "✈️",
    date: "March 2017",
  },
  {
    title: "Travelling the world",
    description: "Backpacked my way through 17 countries over a 9 month period starting in Bangkok and ending in the Caribbean.",
    location: "All over",
    date: "2016",
  },
  {
    title: "Co-operative Food, England",
    description: "I worked as a team leader for a supermarket chain, with responsibilities for various departments and supporting the senior management team.",
    location: "Wolverhmapton, England",
    date: "October 2012 - February 2017",
  },
]
