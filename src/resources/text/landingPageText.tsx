/**
 * Landing page text content, organized by logical sections.
 * Export each section for use in components.
 */

export const heroSection = {
    subtitle: "Frontend developer crafting sharp, modern web experiences with code, creativity, and a love for detail.",
};

export const aboutSection = {
    heading: "About Me",
    subheading: "01",
    infoBoxes: [
        {
            title: "Who is Magnus?",
            content: "I am a technology-driven leader with a strong background in IT development and process improvement. I am passionate about how technology can improve work processes, and I have had the privilege of working across various sectors to deliver innovative solutions."
        },
        {
            title: "My Journey and Future Goals",
            content: "From a young age, I was captivated by technology, which sparked my interest in IT. Over the years, I've gained valuable experience through education and hands-on projects. Reflecting on my journey, I've grown both personally and professionally, and I'm now focused on using my skills to drive impactful solutions that foster efficiency and collaboration across industries."
        },
    ],
    linksHeading: "Find me online",
    links: [
        {
            href: "/documents/CV.pdf",
            icon: "description",
            label: "See CV",
        },
        {
            href: "https://github.com/magnusgiverin",
            icon: "code",
            label: "View GitHub",
        },
        {
            href: "https://www.linkedin.com/in/magnus-giverin-5344b5188/",
            icon: "person",
            label: "Open LinkedIn",
        },
        {
            href: "#contact",
            icon: "mail",
            label: "Contact Me",
        },
        {
            href: "#projects",
            icon: "folder_open", // Google Material Icon: folder_open (projects)
            label: "View my Projects",
        },
        {
            href: "#education",
            icon: "school", // Google Material Icon: school (education)
            label: "See my Education",
        },
        {
            href: "#timeline",
            icon: "timeline", // Google Material Icon: timeline (timeline)
            label: "View my Timeline",
        },
        {
            href: "#career",
            icon: "work", // Google Material Icon: work (career)
            label: "View my Career Journey",
        },
    ],
};


export const figuresSection = {
    heading: "Figures",
    subheading: "04",
    figures: [
        {
            number: 22,
            description: "I am 22 years old, bringing youthful energy and fresh perspectives to my work.",
        },
        {
            number: 5,
            description: "I have lived in 5 countries across 4 continents, gaining a broad and diverse worldview.",
        },
        {
            number: "9+",
            description: "I have spent over 9 years living abroad, adapting to new cultures and environments.",
        },
        {
            number: "5+",
            description: "I have more than 5 years of coding experience, building robust and modern web applications.",
        },
        {
            number: "10+",
            description: "I have completed over 10 projects, each contributing to my growth as a developer.",
        },
        {
            number: 3,
            description: "I speak 3 languages - Norwegian, English, and Spanish - enabling me to connect with people globally.",
        },
    ],
};

export const skillsSection = {
    heading: "Skills",
    subheading: "03",
    description: "Technologies and tools I work with:",
    skills: [
        {
            category: "Programming Languages",
            description: "Languages I have used for software development, ranging from low-level to high-level programming.",
            tools: [
                "Assembly (x86)", "C", "C++", "Java", "JavaScript", "Kafka", "Kotlin", "Oz", "Python", "TypeScript"
            ]
        },
        {
            category: "Web Technologies",
            description: "Web technologies and frameworks I use for building modern, interactive, and responsive websites.",
            tools: [
                "CSS", "HTML", "Next", "Node", "React", "Sanity CMS", "Tailwind", "TRPC", "Vercel"
            ]
        },
        {
            category: "Database Systems",
            description: "Databases I have worked with to store, manage, and query data for applications.",
            tools: [
                "Azure SQL", "FireBase", "MySql", "Prisma", "SQLite"
            ]
        },
        {
            category: "Cloud Technologies",
            description: "Cloud platforms and CI/CD tools for deploying and automating cloud-based applications.",
            tools: [
                "Azure", "Jenkins"
            ]
        },
        {
            category: "DevOps & Version Control",
            description: "Version control systems and DevOps tools for managing source code and project tracking.",
            tools: [
                "Git", "Gitea", "GitHub", "GitLab", "Jira"
            ]
        },
        {
            category: "Specialised Areas",
            description: "Specialized tools and frameworks I use for frontend web development.",
            tools: [
                "Frontend tools - HTML, React, Next, Node, Tailwind/CSS, Typescript"
            ]
        },
        {
            category: "Maths & Statistics Tools",
            description: "Tools for working with data, performing statistical analysis, and visualizing results.",
            tools: [
                "PandaDF", "MatPlotLib", "NumPy"
            ]
        }
    ]
};

export const contactSection = {
    heading: "Get In Touch",
    description: "Interested in working together or have any questions? Reach out!",
    emailCta: "Send me an email",
};
