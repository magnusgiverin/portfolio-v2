"use client";
import { figuresSection } from "@/src/resources/text/landingPageText";

const FiguresSection = () => {

    return (
        <section
            id="projects"
            className="relative z-10 flex flex-col bg-white"
        >
            <span className="flex flex-row justify-between items-center border-t md:border-t-0 border-neutral-200">
                <h2 className="text-lg uppercase tracking-widest px-4 lg:px-32 pt-8 pb-6 text-orange-600 font-mono font-bold border-r border-neutral-200 w-full md:w-1/5 lg:w-1/4 2xl:w-1/3">
                    {figuresSection.heading}
                </h2>
                <div className="flex-1 flex justify-end">
                    <h2 className="text-lg px-4 lg:px-32 pt-8 pb-6 text-black font-mono font-bold w-full md:w-1/5 lg:w-1/4 2xl:w-1/3 text-right">
                        {figuresSection.subheading}
                    </h2>
                </div>
            </span>
            <div className="overflow-x-auto flex flex-row border-t border-neutral-200">
                <div className="hidden md:flex md:w-1/5 lg:w-1/4 2xl:w-1/3 h-auto border-r border-neutral-200 pr-8 items-center justify-center">
                </div>
                <table className="w-full md:w-4/5 lg:w-3/4 2xl:w-2/3">
                    <thead>
                        <tr className="border-b border-neutral-200">
                            <th
                                className="md:pl-8 text-left items-center flex text-xs font-bold uppercase tracking-widest text-neutral-700 py-2 px-4"
                                title="Sort by name"
                            >
                                Figure
                            </th>
                            <th className="text-left text-xs font-bold uppercase tracking-widest text-neutral-700 py-2 px-4">
                                Description
                            </th>
                            <th className="hidden md:table-cell py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {figuresSection.figures.map((fig) => (
                            <tr
                                key={fig.number + fig.description}
                                className="pl-8 group relative overflow-hidden border-b border-neutral-200"
                                tabIndex={0}
                            >
                                <td className="w-[100px] md:w-[400px] 3xl:w-[600px] md:pl-8 py-3 px-4 text-5xl md:text-7xl text-black relative z-10">
                                    {fig.number}
                                </td>
                                <td className="py-3 px-4 text-neutral-700 relative z-10 w-[1000px]">
                                    {fig.description}
                                </td>
                                <td className="hidden md:flex py-3 px-4 h-full relative z-10 text-6xl items-center justify-end md:pr-8">
                                    &bull;
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default FiguresSection;