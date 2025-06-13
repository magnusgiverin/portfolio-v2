export const projectsSection = {
    heading: "Projects",
    subheading: "03",
    ctaLink: {
        text: "See all details",
        href: "/projects#",
    },
    projects: [
        {
            name: "BO Prefetcher",
            description:
                "Research on hardware prefetching using Gem5 at NTNU.",
            longDescription:
                "This project, also known as Best Offset Prefetcher, was part of the TDT4260 Computer Architecture course at NTNU. It involved implementing a hardware prefetcher in the Gem5 simulator to analyze the impact of prefetching on Instructions per Cycle (IPC) and overall system performance, specifically targeting the L2 cache memory layer. The work included a comparative study of existing prefetching techniques and was conducted in collaboration with a fellow student. The results were documented in a formal paper, providing insights into hardware-level optimizations for modern processors.",
            href: "/projects#boprefetcher",
            links: [
                {
                    text: "Read the paper",
                    link: "/documents/TDT4260_Prefetcher.pdf",
                },
            ],
        },
        {
            name: "AI Building Applications",
            description:
                "Improved Kristiansand's building application process with KartAI.",
            longDescription:
                "This academic project was a collaboration between NTNU and Norkart, focusing on leveraging AI to streamline the building application process for Kristiansand Municipality. The team worked closely with the customer, applying agile development methodologies to deliver a solution powered by KartAI, a Norkart initiative. The project marked the first official publication by NTNU for the team and emphasized the importance of customer collaboration and iterative development in AI-driven projects.",
            href: "/projects#kartai",
            github: "https://github.com/kartAI/ntnu-kpro-ai-assistant",
            links: [
                {
                    text: "Read the full publication",
                    link: "/documents/Kundestyrt_Prosjekt_Rapport.pdf",
                },
            ],
        },
        {
            name: "Portfolio Website V1",
            description:
                "Personal site built with React and Next.js.",
            longDescription:
                "The first version of my personal portfolio website was designed to showcase my skills, projects, and professional journey. Built with React and Next.js, it featured smooth navigation, subtle animations, and a responsive layout. This project was my introduction to CSS after previously relying on Tailwind CSS, expanding my front-end skillset. It served as both a creative outlet and a productive way to procrastinate during the Autumn 2024 exam period at NTNU.",
            href: "/projects#portfolio",
            github: "https://github.com/magnusgiverin/portfolio",
            website: "https://giverin.vercel.app",
        },
        {
            name: "Portfolio Website V2",
            description:
                "Updated version of my portfolio with improved design and features.",
            longDescription:
                "The second iteration of my portfolio website builds upon the foundation of V1, introducing a more refined design, enhanced features, and improved user experience. The project focuses on clean UI, accessibility, and modern web practices. It continues to serve as a living document of my growth as a developer and my evolving approach to personal branding.",
            href: "/projects#portfolio-v2",
        },
        {
            name: "Bymuseet i Levanger",
            description:
                "Website for Levanger City Museum using React and Next.js.",
            longDescription:
                "Developed for the City Museum of Levanger, this freelance project aimed to present the museum’s locations, history, and exhibits in an engaging and accessible way. The project involved close collaboration with the museum’s board, incorporating their feedback through multiple iterations to ensure the content was accurate and user-friendly. This was my first freelance experience, providing valuable insights into client communication and the delivery of user-focused web solutions.",
            href: "/projects#bymuseet",
            github: "https://github.com/magnusgiverin/bymuseet",
            website: "https://bymuseet.com",
        },
        {
            name: "Timeplaner.net",
            description:
                "Calendar tool for NTNU students. Integrates with NTNU APIs.",
            longDescription:
                "Timeplaner.net is a calendar management tool designed specifically for NTNU students, enabling them to organize and visualize their schedules by integrating multiple NTNU APIs and scraping data that was otherwise unavailable. The project refined my skills in API integration, web scraping, and caching techniques. It was also my first solo project using TypeScript and modern web frameworks, inspired by the limitations encountered in the Calone.com project.",
            href: "/projects#timeplaner",
            github: "https://github.com/magnusgiverin/timeplaner",
            website: "https://timeplaner.net",
        },
        {
            name: "Calone.com",
            description:
                "Early NTNU calendar tool using Python.",
            longDescription:
                "Calone.com was the precursor to Timeplaner.net, focusing on parsing and interpreting NTNU data using Python. The project highlighted the challenges of using Python for web development, particularly in terms of performance, and motivated a transition to a more modern tech stack. It also underscored the importance of version control and collaborative development, as creative differences and technical limitations led to the creation of an improved successor.",
            href: "/projects#calone",
            website: "https://calone.com",
        },
        {
            name: "NORSTEC web",
            description:
                "Homepage for the NORSTEC student space collective.",
            longDescription:
                "NORSTEC is a collective for students interested in space technologies in Norway. I was responsible for developing their homepage in collaboration with a designer, aiming to make NORSTEC more accessible to students and the Norwegian space industry. The project required the integration of a content management system (CMS) to allow easy updates and maintainability, and provided an opportunity to explore new technologies while delivering a visually appealing and functional website.",
            href: "/projects#norstec",
            github: "https://github.com/magnusgiverin/norstec-website",
            website: "https://norstec.no",
        },
        {
            name: "WordSea.io",
            description: "A book sharing platform.",
            longDescription:
                "WordSea.io is a platform designed to facilitate book sharing among users. The project aimed to create a community-driven environment for exchanging books, promoting reading, and reducing waste. It involved designing user flows, implementing secure transactions, and building a scalable backend to support growth.",
            href: "/projects#wordsea"
        }
    ],
};