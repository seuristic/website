import {
  portfolio_v5,
  portfolio_v5_dark,
  portfolio_v5_light,
  noto_app,
  noto_app_dark,
  noto_app_light,
  fer,
  fer_frontend,
  image_processing,
  image_processing_program,
  amazon_clone,
  amazon_clone_homepage,
  experiment,
  amazon_clone_checkout,
} from "@/ui/images";
import { TProject } from "@/utils/types";
import { ReadCvLogo } from "@/ui/icons";

const projects: TProject[] = [
  {
    title: "Portfolio v5.0",
    subtitle: "Personal portfolio website v5.0 (previously)",
    description:
      "Previous iteration of my personal portfolio website v5 showcasing about my work and deeds",
    image: portfolio_v5,
    slug: "portfolio-v5",
    tags: ["Next", "TypeScript", "Tailwind", "Vercel", "Framer Motion"],
    github: "https://github.com/mshahanwaz/portfolio-v5",
    link: "https://shahanwaz.vercel.app/",
    features: [
      "Visually Engaging Design",
      "Dynamic Animations",
      "Responsive Layout",
      "Minimalistic Design",
      "Thoughtful Color Palette",
      "Dark Mode Support",
    ],
    screenshots: [portfolio_v5_dark, portfolio_v5_light],
  },
  {
    title: "Noto App",
    subtitle: "Notes + Todo taking application",
    description:
      "Notes and todo taking productivity application with custom keyboard shortcuts to effortlessly make notes and list your todos instantly",
    image: noto_app,
    slug: "noto-app",
    tags: ["Next", "Tailwind", "Firebase", "Recoil", "NextAuth"],
    github: "https://github.com/mshahanwaz/noto-app",
    link: "https://noto-app.vercel.app/",
    features: [
      "User Authentication",
      "Notes Management",
      "Todo List Functionality",
      "Real-Time Syncing",
      "Minimalistic & Responsive Design",
      "Thoughtful Color Palette",
      "Dark Mode Support",
      "Custom Keyboard Shortcuts",
    ],
    screenshots: [noto_app_dark, noto_app_light],
  },
  {
    title: "Facial Emotion Recognition",
    subtitle: "Final year college group project",
    description:
      "Facial Emotion Recognition (FER) for rehabilitation was our final year college group project, where we concentrated on refining the accuracy of various existing ML models. We integrated the model with hardware, such as an LED grid panel through Arduino, to visualize emotions as pixelated emojis using LEDs. Additionally, we employed a MERN-based website to track the metrics of detected emotions and conduct analysis.",
    image: fer,
    slug: "fer",
    tags: [
      "Keras",
      "Tensorflow",
      "PySerial",
      "Opencv",
      "Scikit",
      "Arduino",
      "React",
      "Node",
      "Express",
      "MongoDB",
      "Figma",
    ],
    github: "https://github.com/mshahanwaz/college-project-FER-ml-program",
    link: "https://fer-frontend.vercel.app/",
    other_links: [
      {
        name: "Research Paper",
        url: "https://camps.aptaracorp.com/ACM_PMS/PMS/ACM/IC32023/82/314aaaa2-23bd-11ee-b37c-16bb50361d1f/OUT/ic32023-82.html",
        icon: ReadCvLogo,
      },
    ],
    features: [
      "Improved Accuracy of ML Model",
      "Integration with Hardware Devices",
      "Emotion Metrics Tracking",
      "Full-Stack Integration",
      "Real-Time Emotion Analysis",
      "User Interface Design",
      "Collaborative Development Process",
    ],
    screenshots: [fer_frontend],
  },
  {
    title: "Image Processing",
    subtitle: "BMP image processing program",
    description:
      "Dive into my C++ project where I built a program to handle BMP image files. Key learnings - how BMP images store data and how to change pixel details. This project is about understanding BMP files and making practical changes to images.",
    image: image_processing,
    slug: "image-processing",
    tags: ["C++", "BMP"],
    github: "https://github.com/mshahanwaz/image-processing-v2",
    features: [
      "Reading BMP Files",
      "Writing BMP Files",
      "Image Manipulation",
      "Image to Pixel Array",
      "Pixel-Level Editing",
      "Error Handling",
    ],
    screenshots: [image_processing_program],
  },
  {
    title: "Amazon Clone",
    subtitle: "Ecommerce website clone of Amazon",
    description:
      "Ecommerce website built with Next and Stripe payment functionality where I focused on integrating several technologies as per the requirements of the app",
    image: amazon_clone,
    slug: "amazon-clone",
    tags: ["Next", "Tailwind", "Redux", "NextAuth", "Stripe", "Firebase"],
    github: "https://github.com/mshahanwaz/amazon-clone",
    link: "https://amazon-clone-mshahanwaz.vercel.app/",
    features: [
      "Fully-functional SSR Amazon Clone",
      "Built with Next.js and Firebase",
      "Global State Management with Redux",
      "Efficient Checkout Process",
      "Responsive Design",
      "User Authentication",
      "Order Tracking and Management",
    ],
    screenshots: [amazon_clone_homepage, amazon_clone_checkout],
  },
  {
    title: "useDaily",
    subtitle: "Productivity app for everyone",
    description:
      "All-in-one productivity app for everyone which tracks and saves everything from notes to movies collection to reminders to more",
    image: experiment,
    slug: "usedaily",
    experiment: true,
    tags: ["Next", "Tailwind", "Firebase"],
    features: [
      "Notes Management",
      "Todo List Functionality",
      "Movies Collection",
      "more coming...",
    ],
  },
];

export default projects;
