// ============================================================
//  PORTFOLIO CONFIG  —  edit this file to update everything
// ============================================================

export const site = {
  name: "imnotlycky",
  title: "Developer Portfolio",
  tagline: "i build things for the web",
  description: "a developer who likes clean code and good vibes",

  // shown in the nav
  navLinks: [
    { label: "about",    href: "#about"    },
    { label: "projects", href: "#projects" },
    { label: "skills",   href: "#skills"   },
    { label: "contact",  href: "#contact"  },
  ],
};

export const about = {
  heading: "hey, i'm lycky.",
  paragraphs: [
    "i'm a developer who likes building clean, fast, and functional things for the web. i care about the details — good code, good design, good vibes.",
    "when i'm not coding i'm probably listening to music or breaking something else.",
  ],
  // optional: link to your resume PDF (put it in /public/resume.pdf)
  resumeLink: "/resume.pdf",
};

export const projects = [
  {
    title: "project one",
    description: "short description of what this project does and why it's interesting.",
    tags: ["react", "node", "postgres"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/imnotlycky/project-one",
    // optional: image path (put in /public/projects/)
    image: null,
  },
  {
    title: "project two",
    description: "another thing you built. keep the descriptions snappy — one or two lines.",
    tags: ["typescript", "next.js", "tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/imnotlycky/project-two",
    image: null,
  },
  {
    title: "project three",
    description: "a third project. add as many objects to this array as you need.",
    tags: ["python", "flask", "sqlite"],
    liveUrl: null,
    repoUrl: "https://github.com/imnotlycky/project-three",
    image: null,
  },
];

export const skills = {
  // add / remove groups as you like
  groups: [
    {
      label: "languages",
      items: ["javascript", "typescript", "python", "html", "css"],
    },
    {
      label: "frameworks",
      items: ["react", "next.js", "node.js", "express", "vite"],
    },
    {
      label: "tools",
      items: ["git", "github", "figma", "vercel", "linux"],
    },
  ],
};

export const contact = {
  email: "you@email.com",
  socials: [
    { label: "github",   url: "https://github.com/imnotlycky"         },
    { label: "twitter",  url: "https://twitter.com/imnotlycky"         },
    { label: "linkedin", url: "https://linkedin.com/in/imnotlycky"     },
  ],
};
