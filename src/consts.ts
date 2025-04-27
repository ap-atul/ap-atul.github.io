import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  NAME: "atul",
  EMAIL: "atulpatare99@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "personal website of atul patare, full stack developer.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter",
    HREF: "https://x.com/atul_patare",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/ap-atul"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/atul-patare-a768a3165",
  },
  {
    NAME: "twitch",
    HREF: "https://www.twitch.tv/atultv",
  },
  {
    NAME: "youtube",
    HREF: "https://www.youtube.com/@ap-atul",
  }
];

export const headers = [
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "work",
    href: "/work",
  },
  {
    name: "projects",
    href: "/projects",
  },
];
