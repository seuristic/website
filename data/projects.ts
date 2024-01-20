import portfolio_v5 from "@/public/assets/projects/portfolio-v5.png";
import image_processing from "@/public/assets/projects/image-processing.png";
import noto_app from "@/public/assets/projects/noto-app.png";
import amazon_clone from "@/public/assets/projects/amazon-clone.png";
import fer from "@/public/assets/projects/fer.png";
import experiment from "@/public/assets/projects/experiment.png";

const data = [
  {
    title: "Portfolio v5",
    description: "Personal portfolio website version 5",
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
    experiment: true
  }
];

export default data;
