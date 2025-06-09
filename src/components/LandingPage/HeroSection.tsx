"use client";
import { heroSection } from "@/src/resources/text/landingPageText";
import { useQuickTransition } from "@/src/utils/QuickTransitionLink";
import Image from "next/image";
import { useEffect, useRef } from "react";

const buttons = [
    {
        href: "#projects",
        className: "cursor-pointer hidden md:relative overflow-hidden justify-center items-center flex px-8 py-2 bg-white text-black uppercase text-sm font-bold tracking-widest rounded-none transition-colors duration-150 shadow-xl group",
        content: (
            <>
                <span className="relative z-10 flex items-center">
                    View Projects <span className="ml-2 flex material-symbols-outlined">arrow_forward</span>
                </span>
                <span
                    className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"
                    aria-hidden="true"
                />
                <span
                    className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center z-10"
                    aria-hidden="true"
                >
                    View Projects <span className="ml-2 flex material-symbols-outlined">arrow_forward</span>
                </span>
            </>
        ),
        label: undefined,
    },
    {
        href: "/documents/CV.pdf",
        className: "cursor-pointer relative overflow-hidden justify-center items-center flex w-12 h-12 bg-white text-black rounded-none transition-colors duration-150 shadow-xl group",
        content: (
            <>
                <span className="material-symbols-outlined text-2xl z-10">description</span>
                <span
                    className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"
                    aria-hidden="true"
                />
                <span
                    className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center z-10"
                    aria-hidden="true"
                >
                    <span className="material-symbols-outlined text-2xl">description</span>
                </span>
            </>
        ),
        label: "CV",
    },
    {
        href: "https://github.com/magnusgiverin",
        className: "cursor-pointer relative overflow-hidden justify-center items-center flex w-12 h-12 bg-white text-black rounded-none transition-colors duration-150 shadow-xl group",
        content: (
            <>
                <span className="material-symbols-outlined text-2xl z-10">code</span>
                <span
                    className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"
                    aria-hidden="true"
                />
                <span
                    className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center z-10"
                    aria-hidden="true"
                >
                    <span className="material-symbols-outlined text-2xl">code</span>
                </span>
            </>
        ),
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/magnus-giverin-5344b5188/",
        className: "cursor-pointer relative overflow-hidden justify-center items-center flex w-12 h-12 bg-white text-black rounded-none transition-colors duration-150 shadow-xl group",
        content: (
            <>
                <span className="material-symbols-outlined text-2xl z-10">person</span>
                <span
                    className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"
                    aria-hidden="true"
                />
                <span
                    className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center z-10"
                    aria-hidden="true"
                >
                    <span className="material-symbols-outlined text-2xl">person</span>
                </span>
            </>
        ),
        label: "LinkedIn",
    },
    {
        href: "#contact",
        className: "cursor-pointer relative overflow-hidden justify-center items-center flex px-8 py-2 bg-orange-600 text-white uppercase text-sm font-bold tracking-widest rounded-none transition-colors duration-150 shadow-xl group",
        content: (
            <>
                <span className="relative z-10 flex items-center">
                    Contact
                </span>
                <span
                    className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"
                    aria-hidden="true"
                />
                <span
                    className="absolute inset-0 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center z-10"
                    aria-hidden="true"
                >
                    Contact
                </span>
            </>
        ),
        label: undefined,
    },
]

const HeroSection = () => {
    const parallaxRefs = useRef<Array<HTMLImageElement | null>>([]);

    useEffect(() => {
        const parallaxFactors = [0.05, 0.08, 0.11, 0.14, 0.17, 0.20, 0.23, 0.26, 0.7]; // 9 (bg) to 1 (fg)
        const section = document.querySelector('section');
        let ticking = false;

        const isInView = () => {
            if (!section) return false;
            const rect = section.getBoundingClientRect();
            return rect.bottom > 0 && rect.top < window.innerHeight;
        };

        const handleScroll = () => {
            if (!isInView()) return;
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;
                parallaxRefs.current.forEach((img, i) => {
                    if (img) {
                        const scale = 1 + scrolled * parallaxFactors[i] * 0.001;

                        const centerX = window.innerWidth / 2;
                        const centerY = window.innerHeight / 2;

                        const rect = img.getBoundingClientRect();
                        const imgCenterX = rect.left + rect.width / 2;
                        const imgCenterY = rect.top + rect.height / 2;

                        const dx = (centerX - imgCenterX) * parallaxFactors[i] * 0.03;
                        const dy = (centerY - imgCenterY) * parallaxFactors[i] * 0.03;
                        img.style.transform = `scale(${scale}) translate(${dx}px, ${dy}px)`;
                    }
                });
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const timeoutText = setTimeout(() => {
            const el = document.getElementById('hero-text');
            if (el) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        }, 500);

        const timeoutInfo = setTimeout(() => {
            const el = document.getElementById('hero-info');
            if (el) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        }, 800);

        const timeoutGiverin = setTimeout(() => {
            const el = document.getElementById('hero-giverin');
            if (el) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0) scale(1)';
            }
        }, 600);

        return () => {
            clearTimeout(timeoutText);
            clearTimeout(timeoutInfo);
            clearTimeout(timeoutGiverin);
        };
    }, []);
    
    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const el = document.getElementById('hero-btn-' + i);
                if (el) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0)';
                }
            }, 100 + i * 150);
        }
    }, []);

    const quickTransition = useQuickTransition();
    
    return (
        <section
            className="bg relative z-0 flex flex-col items-center justify-center min-h-screen px-6 pb-20 md:pb-0"
            style={{ backgroundColor: "rgb(32, 15, 27)" }}
        >
            <div
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
                aria-hidden="true"
            >
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    {[...Array(9)].map((_, i) => (
                        <Image
                            key={i}
                            ref={el => { parallaxRefs.current[i] = el; }}
                            src={`/landscape/Layer${9 - i}.svg`}
                            alt=""
                            fill
                            className="object-cover"
                            priority
                            style={{
                                willChange: "transform, opacity",
                                zIndex: i + 1,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                opacity: 0,
                                transform: `translateY(${10 + i * 10}px) scale(1.05)`,
                                transition: `opacity 0.8s ${(9 - i) * 0.08 + 0.2}s, transform 0.9s cubic-bezier(0,.47,.59,1) ${(9 - i) * 0.08 + 0.2}s`,
                            }}
                            onLoadingComplete={img => {
                                img.style.opacity = "1";
                                img.style.transform = "translateY(0px) scale(1)";
                            }}
                        />
                    ))}
                </div>
            </div>
            <div
                className="relative md:absolute md:ml-20 md:right-60 lg:right-50 md:top-40 z-10 flex flex-col">
                <h1
                    className="text-3xl md:text-7xl font-extrabold tracking-tight leading-tight uppercase text-black mb-6 whitespace-pre-line"
                    style={{
                        opacity: 0,
                        transform: "translateY(40px)",
                        transition: "opacity 0.8s 0.9s, transform 0.9s cubic-bezier(0,.47,.59,1) 0.9s",
                    }}
                    id="hero-text"
                >
                    Magnus Andreas{" "}
                    <span
                        className="text-orange-600 inline-block"
                        style={{
                            opacity: 0,
                            transform: "translateY(50px) scale(1.2)",
                            transition:
                                "opacity 0.9s 0.9s, transform 0.8s cubic-bezier(0,.47,.59,1) 0.9s",
                        }}
                        id="hero-giverin"
                    >
                        Giverin
                    </span>
                </h1>
                <p className="text-md md:text-xl text-neutral-700 font-mono tracking-wide max-w-[750px] mb-10 self-end text-left"
                    style={{
                        opacity: 0,
                        transform: "translateY(40px)",
                        transition: "opacity 0.8s 0.9s, transform 0.9s cubic-bezier(0,.47,.59,1) 0.9s",
                    }}
                    id="hero-info">
                    {heroSection.subtitle}
                </p>
            </div>
            <div className="w-full items-left relative md:absolute md:left-20 md:bottom-20 z-10 flex flex-row gap-2">
                {buttons.map((btn, i) => (
                    <a
                        key={i}
                        onClick={(e) => quickTransition.handleTransition(e, btn.href)}
                        className={btn.className}
                        aria-label={btn.label}
                        style={{
                            opacity: 0,
                            transform: "translateX(-20px)",
                            transition: `opacity 0.7s ${1 + i * 0.15}s, transform 0.7s cubic-bezier(0,.47,.59,1) ${1 + i * 0.15}s`,
                        }}
                        id={`hero-btn-${i}`}
                    >
                        {btn.content}
                    </a>
                ))}
            </div>
        </section>
    )
}

export default HeroSection;