type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "kelsie@kelsiesmurphy.com",
  title: "Hi, I'm Kelsie!",
  profile: "/profile.webp",
  description:
    "Hello! My name is Kelsie and I enjoy designing and building software and websites with a focus on user experience. Since June 2023 I have been working for BJSS as a software engineer.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/kelsiesmurphy",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/kelsiesmurphy/",
    },
    {
      label: "Github",
      link: "https://github.com/kelsiesmurphy",
    },
  ],
};

export default presentation;
