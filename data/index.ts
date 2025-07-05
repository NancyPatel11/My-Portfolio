export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I thrive in collaborative, feedback-driven environments",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Comfortable collaborating across global time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actively refining my expertise in Java, Spring Boot, and React JS",
    description: "Full-Stack in Action",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in starting a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bookademia Student",
    des: "A user-friendly portal for students to browse, borrow, and manage books seamlessly. Bookademia Student offers real-time book availability, personalized borrowing history, and due date reminders—empowering students with a smarter and more accessible library experience.",
    img: "/p1_1.png",
    iconLists: ["/vite.png", "/react.svg", "/java.png", "/springboot.png", "/mongo.png", "/tailwind.png", "figma.png"],
    link: "https://bookademia.onrender.com/",
  },
  {
    id: 12,
    title: "Bookademia Admin",
    des: "A powerful admin dashboard designed to simplify library management tasks. Bookademia Admin allows librarians to manage inventory, approve requests, monitor overdue returns, and send automated email alerts—enabling full control and visibility into library operations.",
    img: "/p1_2.png",
    iconLists: ["/vite.png", "/react.svg", "/java.png", "/springboot.png", "/mongo.png", "/tailwind.png", "figma.png"],
    link: "https://bookademia.onrender.com/",
  },
  {
    id: 2,
    title: "LiveBox",
    des: "A market analysis platform built to simplify financial decision-making by providing real-time, sentiment-driven insights.",
    img: "/p2.png",
    iconLists: ["/python.png", "ollama.png", "/react.svg", "/mongo.png", "/bootstrap.png"],
    link: "http://livebox.in/",
  },
  {
    id: 3,
    title: "Xpense Tracker",
    des: "A platform to revolutionize the way businesses manage and track employee expenses. This cutting-edge expense management platform offers a seamless and efficient solution for businesses of all sizes to effortlessly monitor and control employee expenditures.",
    img: "/p3.png",
    iconLists: ["/react.svg", "/express.png", "node.png", "/mongo.png", "/bootstrap.png", "figma.png"],
    link: "https://xpensetracker.vercel.app",
  },
];

export const companies = [
  {
    id: 1,
    name: "Goldman Sachs",
    img: "/goldmanlogo.png"
  },
  {
    id: 2,
    name: "STP Web Hosting",
    img: "/stpweblogo.png"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Summer Analyst",
    desc: "Assisted in the development of a cloud-based platform using Java, SpringBoot and ReactJS.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Jr. Software Developer",
    desc: "Designed and developed web app for stock market analysis using Python, MongoDB and Gen AI.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/NancyPatel11"
  },
  {
    id: 2,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/nancy-patel-54b278237"
  },
];
