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
    tags: ["hello", "world"],
  },
  {
    title: "Noto App",
    description: "Notes + todo taking application",
    image: noto_app,
    slug: "noto-app",
    tags: ["hello", "world"],
  },
  {
    title: "Facial Emotion Recognition",
    description: "Final year college project",
    image: fer,
    slug: "fer",
    tags: ["hello", "world"],
  },
  {
    title: "Image Processing",
    description: "BMP image processing in C++",
    image: image_processing,
    slug: "image-processing",
    tags: ["hello", "world"],
  },
  {
    title: "Amazon Clone",
    description: "UI & basic functionality clone of real Amazon",
    image: amazon_clone,
    slug: "amazon-clone",
    tags: ["hello", "world"],
  },
  {
    title: "useDaily",
    description: "Productivity app for everyone",
    image: experiment,
    slug: "experiment",
    experiment: true,
    tags: ["hello", "world"],
  },
];

export default data;
