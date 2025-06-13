"use client";

import { roadmapSection } from "@/src/resources/text/landingPageText";
import { useQuickTransition } from "@/src/utils/QuickTransitionLink";

const RoadmapSection = () => {

    const quickTransition = useQuickTransition();

    return (
        <section
            id="about"
            className="relative z-10 flex flex-col bg-white"
        >
            <span className="flex flex-row justify-between items-center">
                <h2 className="text-lg uppercase tracking-widest px-4 lg:px-32 pt-8 pb-6 text-orange-600 font-mono font-bold border-r border-neutral-200 w-full md:w-1/5 lg:w-1/4 2xl:w-1/3">
                    {roadmapSection.heading}
                </h2>
                <div className="flex-1 flex justify-end">
                    <h2 className="text-lg px-4 lg:px-32 pt-8 pb-6 text-black font-mono font-bold w-full md:w-1/5 lg:w-1/4 2xl:w-1/3 text-right">
                        {roadmapSection.subheading}
                    </h2>
                </div>
            </span>
            <div className="overflow-x-auto flex flex-row border-t border-neutral-200">
                <div className="hidden md:flex md:w-1/5 lg:w-1/4 2xl:w-1/3 h-auto border-r border-neutral-200 pr-8 items-center justify-center">
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full md:w-4/5 lg:w-3/4 2xl:w-2/3">
                    {[...roadmapSection.roadmap]
                        .map((page, i) => {
                            const cols = 2;
                            const lgCols = 3;
                            const xlCols = 4;
                            // Utility to determine if last column
                            const isLastCol = (index: number, cols: number) => (index + 1) % cols === 0;

                            // Responsive border logic
                            let borderClasses = "border-neutral-200";
                            if (!isLastCol(i, cols)) borderClasses += " border-r";
                            if (!isLastCol(i, lgCols)) borderClasses += " lg:border-r";
                            if (!isLastCol(i, xlCols)) borderClasses += " 2xl:border-r";

                            borderClasses += " border-b";

                            return (
                                <div
                                    key={i}
                                    className={`h-[200px] relative p-2 bg-white flex flex-col justify-between hover:bg-black transition-colors duration-300 ease-in-out cursor-pointer group ${borderClasses}`}
                                    onClick={(e) => quickTransition.handleTransition(e, page.href)}
                                >
                                    <span className="absolute top-3 right-2 text-xs text-gray-400 font-mono">
                                        {["A", "B", "C", "D", "E"][i]}
                                    </span>
                                    <div className="flex flex-col">
                                        <div className="mb-2 font-bold text-xl group-hover:text-white">{page.label}</div>
                                        <span className="flex flex-col gap-1">
                                            {page.sublinks.map((link, subIndex) => (
                                                <button
                                                    key={subIndex}
                                                    id={`navigation-btn-${i}`}
                                                    className="ml-1 md:ml-4 text-md text-neutral-700 items-center group-hover:text-white text-left flex items-center gap-1"
                                                    onClick={(e) => quickTransition.handleTransition(e, link.href)}
                                                >
                                                    <span className="group-hover:text-white material-symbols-outlined">subdirectory_arrow_right</span>
                                                    <span className="hover:underline cursor-pointer">{link.label}</span>
                                                </button>
                                            ))}
                                        </span>
                                    </div>
                                    <p className="text-sm text-neutral-700 group-hover:text-white">
                                        {page.description}
                                    </p>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;