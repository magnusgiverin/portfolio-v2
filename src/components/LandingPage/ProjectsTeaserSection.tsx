"use client";
import { useState } from "react";
import { TransitionLink } from "@/src/utils/TransitonLink";
import { useQuickTransition } from "@/src/utils/QuickTransitionLink";
import { projectsSection } from "@/src/resources/text/projectsInformation";

const ProjectsTeaserSection = () => {
    const [sortAsc, setSortAsc] = useState(true);

    const sortedProjects = [...projectsSection.projects].sort((a, b) => {
        if (a.name < b.name) return sortAsc ? -1 : 1;
        if (a.name > b.name) return sortAsc ? 1 : -1;
        return 0;
    });

    const handleSortClick = () => setSortAsc((prev) => !prev);

    const quickTransition = useQuickTransition();

    return (
        <section
            id="projects"
            className="relative z-10 flex flex-col bg-white"
        >
            <span className="flex flex-row justify-between items-center">
                <h2 className="text-lg uppercase tracking-widest px-4 lg:px-32 pt-8 pb-6 text-orange-600 font-mono font-bold border-r border-neutral-200 w-full md:w-1/5 lg:w-1/4 2xl:w-1/3">
                    {projectsSection.heading}
                </h2>
                <div className="flex-1 flex justify-end">
                    <h2 className="text-lg px-4 lg:px-32 pt-8 pb-6 text-black font-mono font-bold w-full md:w-1/5 lg:w-1/4 2xl:w-1/3 text-right">
                        {projectsSection.subheading}
                    </h2>
                </div>
            </span>
            <div className="overflow-x-auto flex flex-row border-t border-neutral-200">
                <div className="hidden md:flex md:w-1/5 lg:w-1/4 2xl:w-1/3 h-auto border-r border-neutral-200 items-center justify-center"/>
                <table className="w-full md:w-4/5 lg:w-3/4 2xl:w-2/3">
                    <thead>
                        <tr className="border-b border-neutral-200">
                            <th
                                className="md:pl-8 text-left items-center flex text-xs font-bold uppercase tracking-widest text-neutral-700 py-2 px-4 cursor-pointer select-none"
                                onClick={handleSortClick}
                                title="Sort by name"
                            >
                                Name{" "}
                                <span className="material-symbols-outlined align-middle ml-2" style={{ fontSize: "20px" }}>
                                    {"swap_vert"}
                                </span>
                            </th>
                            <th className="hidden md:table-cell text-left text-xs font-bold uppercase tracking-widest text-neutral-700 py-2 px-4">
                                Description
                            </th>
                            <th className="py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProjects.map((proj) => (
                            <tr
                                key={proj.name}
                                className="pl-8 group relative overflow-hidden cursor-pointer border-b border-neutral-200"
                                tabIndex={0}
                                role="button"
                                onClick={(e) => quickTransition.handleTransition(e, proj.href)}
                                aria-label={`Go to ${proj.name}`}
                            >
                                <td className="w-[400px] 3xl:w-[600px] md:pl-8 py-3 px-4 font-semibold text-black relative z-10 group-hover:text-white transition-colors duration-300">
                                    {proj.name}
                                </td>
                                <td className="hidden md:table-cell w-[1000px] py-3 px-4 text-neutral-700 relative z-10 group-hover:text-white transition-colors duration-300">
                                    {proj.description}
                                </td>
                                <td className="py-3 px-4 relative z-10 group-hover:text-white transition-colors duration-300 items-center flex justify-end md:pr-8">
                                    <span className="material-symbols-outlined">
                                        arrow_outward
                                    </span>
                                </td>
                                {/* Shutter overlay */}
                                <td
                                    className="pointer-events-none absolute left-0 top-0 w-full h-full z-0"
                                    style={{ padding: 0 }}
                                    aria-hidden="true"
                                >
                                    <span
                                        className="block w-full h-full bg-black origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out group-hover:origin-top"
                                    />
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2} className="py-4 pl-8 py-3 px-4 text-center">
                                <TransitionLink
                                    href={projectsSection.ctaLink.href}
                                    className="relative inline-block px-8 py-2 border border-black hover:border-orange-600 bg-white text-black uppercase text-xs font-bold tracking-widest rounded-none overflow-hidden group"
                                >
                                    <span
                                        className="absolute inset-0 left-0 top-0 w-full h-full bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0"
                                        aria-hidden="true"
                                    />
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 items-center flex justify-center gap-2">
                                        {projectsSection.ctaLink.text} <span className="material-symbols-outlined">arrow_forward</span>
                                    </span>
                                </TransitionLink>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ProjectsTeaserSection;