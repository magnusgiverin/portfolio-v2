'use client';
import { careerSection } from "@/src/resources/text/careerInformation";

const CareerSection = () => {

    return (
        <section
            id="projects"
            className="relative z-10 flex flex-col bg-white"
        >
            <span className="flex flex-row justify-between items-center border-t md:border-t-0 border-neutral-200">
                <h2 className="text-lg uppercase tracking-widest px-4 lg:px-32 pt-8 pb-6 text-orange-600 font-mono font-bold border-r border-neutral-200 w-full md:w-1/5 lg:w-1/4 2xl:w-1/3">
                    {careerSection.heading}
                </h2>
                <div className="flex-1 flex justify-end">
                    <h2 className="text-lg px-4 lg:px-32 pt-8 pb-6 text-black font-mono font-bold w-full md:w-1/5 lg:w-1/4 2xl:w-1/3 text-right">
                        {careerSection.subheading}
                    </h2>
                </div>
            </span>
            <div className="overflow-x-auto flex flex-row border-t border-neutral-200">
                <div className="hidden md:flex md:w-1/5 lg:w-1/4 2xl:w-1/3 h-auto border-r border-neutral-200 pr-8 items-center justify-center">
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-full md:w-4/5 lg:w-3/4 2xl:w-2/3">
                    {[...careerSection.positions]
                        .sort((a, b) => new Date(b.dates.from).getTime() - new Date(a.dates.from).getTime())
                        .map((pos, i) => {
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
                                    className={`h-[150px] relative p-2 bg-white flex flex-col justify-between hover:bg-black transition-colors duration-300 ease-in-out cursor-pointer group ${borderClasses}`}
                                >
                                    <span className="absolute top-1 right-2 text-xs text-gray-400 font-mono">
                                        {i < 9 ? `0${i + 1}` : i + 1}
                                    </span>
                                    <div className="mb-2 font-bold text-sm group-hover:text-white">{pos.title}</div>
                                    <span className="flex flex-col gap-1 items-end">
                                        <div className="text-xs text-gray-600 group-hover:text-gray-200">{pos.company}</div>
                                        <div className="text-xs text-gray-400 group-hover:text-gray-300">{pos.dates.from + " - " + pos.dates.to}</div>
                                    </span>
                                </div>
                            );
                        })}
                </div>
            </div>

        </section>
    );
};

export default CareerSection;


