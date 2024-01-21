import {
  portfolio_v5,
  noto_app,
  fer,
  image_processing,
  amazon_clone,
  experiment,
} from "@/ui/images";

const data = [
  {
    title: "Portfolio v5.0",
    description: "Personal portfolio website v5.0",
    image: portfolio_v5,
    slug: "portfolio-v5",
  },
  {
    title: "Noto App",
    description: "Notes + todo taking application",
    image: noto_app,
    slug: "noto-app",
  },
  {
    title: "Facial Emotion Recognition",
    description: "Final year college project",
    image: fer,
    slug: "fer",
  },
  {
    title: "Image Processing",
    description: "BMP image processing in C++",
    image: image_processing,
    slug: "image-processing",
  },
  {
    title: "Amazon Clone",
    description: "UI & basic functionality clone of real Amazon",
    image: amazon_clone,
    slug: "amazon-clone",
  },
  {
    title: "useDaily",
    description: "Productivity app for everyone",
    image: experiment,
    slug: "experiment",
    experiment: true,
  },
];

export default data;
