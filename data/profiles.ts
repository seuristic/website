import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@/ui/icons";
import { TProfile } from "@/utils/types";

const profiles: TProfile[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mshahanwaz/",
    icon: LinkedinLogo,
  },
  {
    name: "GitHub",
    link: "https://github.com/mshahanwaz",
    icon: GithubLogo,
  },
  // {
  //   name: "CodePen",
  //   link: "https://codepen.io/mshahanwaz",
  //   icon: CodepenLogo,
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/imshahanwaz/",
    icon: InstagramLogo,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/_mshahanwaz",
    icon: TwitterLogo,
  },
];

export default profiles;
