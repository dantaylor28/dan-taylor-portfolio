import ProjectImg from "../public/project_img.png";
import DrfApi from "../public/drf_api.png"
import FoodBlog from "../public/food_blog.png"

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
