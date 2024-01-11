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

export const skillsData = [
  {
    icon: "icon-[logos--react] text-[2.2rem]",
    language: "React.js",
  },
  {
    icon: "icon-[logos--nextjs-icon] text-[2.4rem]",
    language: "Next.js",
  },
  {
    icon: "icon-[logos--html-5] text-[2.3rem]",
    language: "HTML5",
  },
  {
    icon: "icon-[logos--css-3] text-[2.3rem]",
    language: "CSS3",
  },
  {
    icon: "icon-[logos--python] text-[2.3rem]",
    language: "Python",
  },
  {
    icon: "icon-[logos--docker-icon] text-[2rem]",
    language: "Docker",
  },
  {
    icon: "icon-[logos--django-icon] text-[2rem]",
    language: "Django",
  },
  {
    icon: "icon-[logos--bootstrap] text-[2rem]",
    language: "Bootstrap",
  },
  {
    icon: "icon-[logos--nodejs-icon] text-[2.4rem]",
    language: "Node.js",
  },
  {
    icon: "icon-[logos--typescript-icon] text-[2rem]",
    language: "Typescript",
  },
  {
    icon: "icon-[logos--tailwindcss-icon] text-[1.7rem]",
    language: "TailwindCSS",
  },
  {
    icon: "icon-[logos--git-icon] text-[2.5rem]",
    language: "Git",
  },
  {
    icon: "icon-[logos--postgresql] text-[2.2rem]",
    language: "PostgreSQL",
  },
  {
    icon: "icon-[logos--mongodb-icon] text-[2.5rem]",
    language: "MongoDB",
  },
  {
    icon: "icon-[logos--mysql-icon] text-[2.1rem]",
    language: "MySQL",
  },
  {
    icon: "icon-[logos--visual-studio-code] text-[2.2rem]",
    language: "VSCode",
  },
  {
    icon: "icon-[logos--heroku-icon] text-[2rem]",
    language: "Heroku",
  },
  {
    icon: "icon-[logos--prettier] text-[2rem]",
    language: "Prettier",
  },
  {
    icon: "icon-[logos--eslint] text-[2.2rem]",
    language: "ESLint",
  },
  {
    icon: "icon-[logos--xcode] text-[2.3rem]",
    language: "Xcode",
  },
] as const;
