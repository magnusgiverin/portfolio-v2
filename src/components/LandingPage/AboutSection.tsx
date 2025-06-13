"use client";
import { aboutSection } from "@/src/resources/text/landingPageText";
import { useQuickTransition } from "@/src/utils/QuickTransitionLink";
import { useEffect, useState } from "react";
import { useRef } from "react";

const AboutSection = () => {
    const linksRef = useRef<HTMLUListElement>(null);

    const [hoveredText, setHoveredText] = useState<string | null>(null);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting) {
                for (let i = 0; i < aboutSection.links.length; i++) {
                    setTimeout(() => {
                        const el = document.getElementById('btn-' + i);
                        if (el) {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }
                    }, i * 150);
                }
                observer.disconnect();
            }
        };

        const observer = new window.IntersectionObserver(handleIntersection, {
            threshold: 0.2,
        });

        if (linksRef.current) {
            observer.observe(linksRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const quickTransition = useQuickTransition();

    return (
        <section
            id="about"
            className="relative z-10 flex flex-col bg-white"
        >
            <span className="flex flex-row justify-between items-center">
                <h2 className="text-lg uppercase tracking-widest px-4 lg:px-32 pt-8 pb-6 text-orange-600 font-mono font-bold border-r border-neutral-200 w-full md:w-1/5 lg:w-1/4 2xl:w-1/3">
                    {aboutSection.heading}
                </h2>
                <div className="flex-1 flex justify-end">
                    <h2 className="text-lg px-4 lg:px-32 pt-8 pb-6 text-black font-mono font-bold w-full md:w-1/5 lg:w-1/4 2xl:w-1/3 text-right">
                        {aboutSection.subheading}
                    </h2>
                </div>
            </span>
            <div className="overflow-x-auto flex flex-row border-t border-neutral-200">
                <div className="hidden md:flex md:w-1/5 lg:w-1/4 2xl:w-1/3 h-auto border-r border-neutral-200 items-center justify-end">
                    <div className="flex flex-col w-full h-full items-end justify-end mt-auto">
                        <span
                            className={`h-16 justify-center items-center flex text-2xl text-black font-bold uppercase tracking-widest px-4 lg:px-8 transition-transform transition-opacity duration-500 ease-out
                                ${hoveredText ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-50"}`}
                        >
                            {hoveredText}
                        </span>
                    </div>
                </div>
                <div className="w-full md:w-4/5 lg:w-3/4 2xl:w-2/3 flex flex-col border-b border-neutral-200">
                    {/* Info Boxes */}
                    <div className="flex flex-col md:flex-row border-b border-neutral-200">
                        <div className="flex-1 bg-white border-b md:border-b-0 md:border-r border-neutral-200 p-4 pb-8">
                            <h3 className="text-black text-xl font-semibold mb-4">{aboutSection.infoBoxes[0].title}</h3>
                            <p className="text-neutral-700">{aboutSection.infoBoxes[0].content}</p>
                        </div>
                        <div className="flex-1 bg-white p-4 pb-8">
                            <h3 className="text-black text-xl font-semibold mb-4">{aboutSection.infoBoxes[1].title}</h3>
                            <p className="text-neutral-700">{aboutSection.infoBoxes[1].content}</p>
                        </div>
                    </div>
                    {/* Links Section */}
                    <ul
                        className="flex w-full xl:w-1/2 justify-between overflow-x-auto md:overflow-visible whitespace-nowrap scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent"
                        ref={linksRef}
                        style={{
                            scrollbarWidth: "none", // Firefox
                            msOverflowStyle: "none", // IE and Edge
                        }}
                    >
                        {/* Hide scrollbar for Webkit browsers */}
                        <style>
                            {`
                                ul::-webkit-scrollbar {
                                    display: none;
                                }
                            `}
                        </style>
                        {aboutSection.links.map((link: { label: string; href: string; icon: string; }, i) => (
                            <li key={link.href} className="flex-shrink-0">
                                <a
                                    onClick={(e) => quickTransition.handleTransition(e, link.href)}
                                    className={`cursor-pointer relative overflow-hidden justify-center items-center flex w-16 h-16 bg-white text-black rounded-none transition-colors duration-150 group ${i > 0 ? "border-x border-neutral-200" : "border-r border-neutral-200"
                                        }`}
                                    aria-label={link.label}
                                    style={{
                                        opacity: 0,
                                        transform: "translateY(-20px)",
                                        transition: `opacity 0.7s ${1 + i * 0.15}s, transform 0.7s cubic-bezier(0,.47,.59,1) ${1 + i * 0.15}s`,
                                    }}
                                    id={`btn-${i}`}
                                    onMouseEnter={() => setHoveredText(link.label)}
                                    onMouseLeave={() => setHoveredText(null)}

                                >
                                    <span className="material-symbols-outlined text-2xl z-10">{link.icon}</span>
                                    <span
                                        className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"
                                        aria-hidden="true"
                                    />
                                    <span
                                        className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center z-10"
                                        aria-hidden="true"
                                    >
                                        <span className="material-symbols-outlined text-2xl">{link.icon}</span>
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;