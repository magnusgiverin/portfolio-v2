'use client';
import React, { useRef, useEffect, useState } from "react";

const svgPath =
    "M0,160 C150,220 350,100 500,160 C650,220 850,100 1000,160 L1000,00 L0,0 Z";

const SplitSection: React.FC = () => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!svgRef.current) return;
            const rect = svgRef.current.getBoundingClientRect();
            // Parallax effect: adjust offset based on scroll position
            setOffset(rect.top * 0.2);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative overflow-hidden w-full h-[120px] shadow-lg border-y border-neutral-200">
            <svg
                ref={svgRef}
                className="w-full h-[40px] block"
                style={{
                    transform: `translateY(${offset}px)`,
                    transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
                }}
                viewBox="0 0 1000 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path d={svgPath} fill="#fff" fillOpacity="0.8" />
                {/* Add more SVG elements for extra coolness if desired */}
            </svg>
        </section>
    );
};

export default SplitSection;