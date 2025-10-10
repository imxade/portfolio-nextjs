// =============================
// About Section (Framework Agnostic)
// =============================
export function About() {
  return (
    <section className="mx-auto space-y-6">
      <h1 className="font-extrabold sm:text-4xl">Hi, I’m Rituraj</h1>
      <p className="text-muted-foreground leading-relaxed sm:text-lg">
        Someone who enjoys simplifying everything and creating transparent
        software. Dreaming of a world where people work not to survive, but
        because they want to. Hooked on NixOS for its declarative nature.
        Interested in game engines, GPU computing, and models like Lambda
        calculus and Interaction calculus for implicit concurrency.
      </p>
      <p className="text-muted-foreground leading-relaxed italic sm:text-lg">
        On a personal note, I still need to learn how to cook… Would love to
        walk on an Empty Beach, Someday.
      </p>
    </section>
  )
}

// =============================
// Types
// =============================
export type routesType = {
  name: string
  link: string
}

export type socialsType = {
  href: string
  icon: string // raw SVG string
  display: string
  class?: string
}

export type ProjectType = {
  title: string
  featured?: boolean
  href: string
  source?: string
  image: string
  description: string
  techstack: string[]
}

// =============================
// Site Config
// =============================
export const siteOwner = "Rituraj Basak"
export const siteUrl = "https://riturajbasak.vercel.app"
export const siteTitle = "Rituraj Basak"
export const siteImage = "/favicon.png"
export const mailId = "ycantistudy@gmail.com"
export const siteDescription = "Offline Portfolio with NextJS and DaisyUI"
export const profilePic = "/profile.jpg" // Profile Pic to display near intro.

// =============================
// Routes
// =============================
export const routes: routesType[] = [
  { name: "Posts", link: "/posts" },
  { name: "Projects", link: "/projects" },
  { name: "RSS", link: "/rss.xml" },
]

// =============================
// Socials (all icons inline SVG)
// =============================
export const socials: socialsType[] = [
  {
    href: "https://codeberg.org/xade",
    icon: `<svg fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M11.955.49A12 12 0 0 0 0 12.49a12 12 0 0 0 1.832 6.373L11.838 5.928a.187.14 0 0 1 .324 0l10.006 12.935A12 12 0 0 0 24 12.49a12 12 0 0 0-12-12 12 12 0 0 0-.045 0zm.375 6.467 4.416 16.553a12 12 0 0 0 5.137-4.213z"/></svg>`,
    display: "CodeBerg",
    class: "w-4",
  },
  {
    href: "https://github.com/imxade",
    icon: `<svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"/></svg>`,
    display: "GitHub",
    class: "w-4",
  },
  {
    href: "https://orcid.org/0009-0002-7347-7064",
    icon: `<svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 16 3 C 8.8321388 3 3 8.832144 3 16 C 3 23.167856 8.8321388 29 16 29 C 23.167861 29 29 23.167856 29 16 C 29 8.832144 23.167861 3 16 3 z M 16 5 C 22.086982 5 27 9.9130223 27 16 C 27 22.086978 22.086982 27 16 27 C 9.9130183 27 5 22.086978 5 16 C 5 9.9130223 9.9130183 5 16 5 z M 11 8 A 1 1 0 0 0 11 10 A 1 1 0 0 0 11 8 z M 10 11 L 10 22 L 12 22 L 12 11 L 10 11 z M 14 11 L 14 12 L 14 22 L 18.5 22 C 21.525577 22 24 19.525577 24 16.5 C 24 13.474423 21.525577 11 18.5 11 L 14 11 z M 16 13 L 18.5 13 C 20.444423 13 22 14.555577 22 16.5 C 22 18.444423 20.444423 20 18.5 20 L 16 20 L 16 13 z"/></svg>`,
    display: "ORCID",
    class: "w-4",
  },
  {
    href: "https://x.com/RiturajBasak",
    icon: `<svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <path d="M17 3.236c-0.626 0.27-1.305 0.464-2.007 0.539 0.723-0.431 1.273-1.11 1.532-1.919-0.669 0.399-1.424 0.69-2.211 0.841-0.636-0.68-1.542-1.1-2.545-1.1-1.931 0-3.484 1.564-3.484 3.483 0 0.27 0.033 0.54 0.086 0.799-2.891-0.15-5.469-1.531-7.184-3.646-0.302 0.517-0.475 1.111-0.475 1.759 0 1.208 0.615 2.275 1.553 2.901-0.571-0.022-1.111-0.184-1.575-0.442 0 0.010 0 0.032 0 0.043 0 1.692 1.197 3.095 2.794 3.419-0.291 0.075-0.604 0.118-0.917 0.118-0.226 0-0.442-0.021-0.657-0.054 0.442 1.381 1.726 2.384 3.257 2.417-1.198 0.938-2.697 1.488-4.326 1.488-0.291 0-0.561-0.010-0.841-0.042 1.543 0.992 3.376 1.564 5.351 1.564 6.407 0 9.913-5.307 9.913-9.912 0-0.152 0-0.302-0.010-0.454 0.678-0.496 1.271-1.112 1.746-1.802zM14.263 5.491c0 3.701-2.765 8.912-8.913 8.912-0.492 0-0.979-0.040-1.458-0.118 0.67-0.276 1.305-0.646 1.891-1.104 0.333-0.26 0.466-0.702 0.332-1.103-0.134-0.401-0.505-0.675-0.928-0.684-0.545-0.011-1.055-0.197-1.467-0.509 0.004-0.001 0.008-0.002 0.012-0.003 0.452-0.116 0.763-0.528 0.751-0.994-0.011-0.467-0.343-0.862-0.8-0.955-0.652-0.132-1.203-0.516-1.559-1.046 0.035 0.002 0.069 0.004 0.104 0.005 0.013 0 0.025 0 0.038 0 0.432 0 0.817-0.278 0.951-0.692 0.138-0.426-0.024-0.891-0.397-1.14-0.63-0.42-1.030-1.096-1.098-1.841 1.824 1.582 4.146 2.531 6.597 2.658 0.017 0.001 0.035 0.001 0.052 0.001 0.291 0 0.568-0.127 0.759-0.349 0.202-0.235 0.283-0.551 0.22-0.854-0.044-0.209-0.066-0.41-0.066-0.595 0-1.369 1.114-2.483 2.484-2.483 0.698 0 1.342 0.278 1.815 0.784 0.116 0.124 0.261 0.215 0.417 0.266-0.019 0.146-0.006 0.297 0.043 0.444 0.063 0.191 0.18 0.352 0.33 0.47-0.089 0.164-0.132 0.353-0.119 0.544 0.010 0.129 0.009 0.257 0.009 0.386z" fill="currentColor" /> </svg>`,
    display: "Twitter",
    class: "w-4",
  },
  {
    href: `mailto:${mailId}`,
    icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z" fill="currentColor"/> </svg>`,
    display: "Mail",
    class: "w-4",
  },
]

export const getSocials = ({
  exclude,
}: {
  exclude?: string
} = {}): socialsType[] => {
  if (exclude) {
    return socials.filter((social) => social.display !== exclude)
  }
  return socials
}

// =============================
// Projects
// =============================
export const projects: ProjectType[] = [
  {
    title: "My WorkSpace",
    description:
      "Explore my daily workflow setup and the array of tools I rely on for seamless productivity. Delve into details about my chosen operating system, essential tools, preferred display protocols, work environment configuration, browser preferences, office suite selection, and much more.",
    href: "https://codeberg.org/XADE/dotbin/wiki",
    source: "https://codeberg.org/XADE/dotbin",
    image: "/project/setup.png",
    techstack: ["Linux", "Virtualization", "NixOS"],
    featured: true,
  },
  {
    title: "Aunix: Linux Installer",
    description:
      "A versatile POSIX shell script designed for seamless installation of Linux distributions. Packed with features such as encryption (LUKS), LVM, and RAID support. Notably, it allows multiple installations on a single partition and offers ISO-free installation.",
    href: "https://codeberg.org/zz/sh/wiki",
    source: "https://codeberg.org/zz/sh",
    image: "/project/aunix.png",
    techstack: ["Bash", "Linux", "Virtualization"],
    featured: true,
  },
  {
    title: "PySh: Shell and Python REPL Hybrid",
    description:
      "A lightweight, cross-platform shell and Python REPL hybrid built in pure Python, supporting pipelines, redirection, tab-completion, and interactive command evaluation without external dependencies.",
    href: "https://codeberg.org/zz/pysh/wiki",
    source: "https://codeberg.org/zz/pysh",
    image: "/project/pysh.png",
    techstack: ["Linux", "Python"],
    featured: true,
  },
  {
    title: "PictoPy",
    description:
      "A simpl cross-platform gallery that can classify images and videos based on their their content.",
    href: "https://github.com/imxade/pictopyv2/wiki",
    source: "https://github.com/imxade/pictopyv2",
    image: "/project/pictopy.png",
    techstack: ["Flask", "SQLite", "Docker"],
    featured: false,
  },
  {
    title: "Sketch Classifier",
    description:
      "JavaScript application, designed to identify sketches without relying on external libraries. Leveraging the power of machine learning, it employs the Nearest Neighbor algorithm to classify sketches accurately.",
    href: "https://classifysketch.vercel.app",
    source: "https://codeberg.org/zz/classifySketch",
    image: "/project/sketchClassifier.png",
    techstack: ["Fastify", "NodeJS", "JavaScript", "Docker"],
    featured: true,
  },
  {
    title: "Pacman Strap",
    description:
      "A lightweight tool designed to generate a minimal root filesystem with a functional Pacman package manager. It focuses solely on the essentials, requiring no root privileges for execution. Additionally, it offers compatibility with Termux and is implemented in Posix shell scripting.",
    href: "https://codeberg.org/zz/PacmanStrap/wiki",
    source: "https://codeberg.org/zz/PacmanStrap",
    image: "/project/pacmanStrap.png",
    techstack: ["Bash", "Linux"],
    featured: false,
  },
  {
    title: "Snake Maze",
    description:
      "A nostalgic game inspired by the classic Nokia version, now brought to life as a Progressive Web App (PWA) with offline functionality. Players can enjoy the thrill of navigating the snake through the maze using touch controls (swipe gestures) or arrow keys. With its seamless offline capability.",
    href: "https://snakemaze.vercel.app/",
    source: "https://codeberg.org/zz/SnakeMaze",
    image: "/project/snakeMaze.png",
    techstack: ["JavaScript"],
    featured: false,
  },
  {
    title: "Student Portal",
    description:
      "User-friendly web interface developed using Flask, Openpyxl, HTML, and Docker, designed to facilitate seamless data entry for students. With intuitive design and functionality, users can effortlessly input their data. Additionally, the entered data can be conveniently downloaded in Excel format, providing a convenient way to access and organize information.",
    href: "https://basicflaskportal.vercel.app/",
    source: "https://codeberg.org/zz/FlaskBasicPortal",
    image: "/project/studentPortal.png",
    techstack: ["Python", "Flask", "Docker"],
    featured: false,
  },
]
