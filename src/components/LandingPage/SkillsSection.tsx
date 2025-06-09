import { skillsSection } from "@/src/resources/text/landingPageText";

const SkillsSection = () => {
    return (
        <section
            id="projects"
            className="relative z-10 flex flex-col bg-white"
        >
            <span className="flex flex-row justify-between items-center border-t md:border-t-0 border-neutral-200">
                <h2 className="text-lg uppercase tracking-widest px-4 lg:px-32 pt-8 pb-6 text-orange-600 font-mono font-bold border-r border-neutral-200 w-full md:w-1/5 lg:w-1/4 2xl:w-1/3">
                    {skillsSection.heading}
                </h2>
                <div className="flex-1 flex justify-end">
                    <h2 className="text-lg px-4 lg:px-32 pt-8 pb-6 text-black font-mono font-bold w-full md:w-1/5 lg:w-1/4 2xl:w-1/3 text-right">
                        {skillsSection.subheading}
                    </h2>
                </div>
            </span>
            <div className="overflow-x-auto flex flex-row border-t border-neutral-200">
                <div className="hidden md:flex md:w-1/5 lg:w-1/4 2xl:w-1/3 h-auto border-r border-neutral-200 pr-8 items-center justify-center">
                </div>
                {/* Table for md+ screens, list for small screens */}
                <div className="w-full md:w-4/5 lg:w-3/4 2xl:w-2/3">
                    {/* Table view for md+ */}
                    <table className="hidden md:table w-full">
                        <thead>
                            <tr className="border-b border-neutral-200">
                                <th
                                    className="md:pl-8 text-left items-center flex text-xs font-bold uppercase tracking-widest text-neutral-700 py-2 px-4"
                                    title="Sort by name"
                                >
                                    Category
                                </th>
                                <th className="text-left text-xs font-bold uppercase tracking-widest text-neutral-700 py-2 px-4">
                                    Description
                                </th>
                                <th className="text-left text-xs font-bold uppercase tracking-widest text-neutral-700 py-2 px-4">
                                    Tools
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {skillsSection.skills.map((skill) => (
                                <tr
                                    key={skill.category}
                                    className="pl-8 group relative overflow-hidden border-b border-neutral-200"
                                    tabIndex={0}
                                >
                                    <td className="w-[400px] 3xl:w-[600px] md:pl-8 py-3 px-4 font-semibold text-black relative">
                                        {skill.category}
                                    </td>
                                    <td className="py-3 px-4 text-neutral-700 relative z-10">
                                        {skill.description}
                                    </td>
                                    <td className="py-3 px-4 text-neutral-700 relative z-10">
                                        {skill.tools.join(", ")}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* List view for small screens */}
                    <ul className="md:hidden divide-y divide-neutral-200">
                        {skillsSection.skills.map((skill) => (
                            <li key={skill.category} className="py-4 px-4">
                                <div className="font-semibold text-black">{skill.category}</div>
                                <div className="text-neutral-700 text-sm mt-1">{skill.description}</div>
                                <div className="text-neutral-700 text-xs mt-1">
                                    <span className="font-bold">Tools:</span> {skill.tools.join(", ")}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;