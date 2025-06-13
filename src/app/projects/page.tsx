import { projectsSection } from "@/src/resources/text/projectsInformation";
import React from "react";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col items-center py-16 min-h-screen bg-gray-50">
            <div className="w-full max-w-3xl px-4">
                <div className="flex flex-col items-center mb-10">
                    <span className="text-sm text-gray-400 tracking-widest uppercase">{projectsSection.subheading}</span>
                    <h1 className="text-4xl font-bold mb-2">{projectsSection.heading}</h1>
                    <a
                        href={projectsSection.ctaLink.href}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        {projectsSection.ctaLink.text}
                    </a>
                </div>
                <div className="space-y-8">
                    {projectsSection.projects.map((project) => (
                        <div
                            key={project.name}
                            className="bg-white rounded-lg shadow p-6 flex flex-col gap-2"
                            id={project.href.replace("/projects#", "")}
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-semibold">{project.name}</h2>
                                <div className="flex gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-black"
                                            title="GitHub"
                                        >
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .321.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </a>
                                    )}
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-500 hover:text-black"
                                            title="Website"
                                        >
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-.325.217l-5 2a1 1 0 01-1.302-1.302l2-5a1 1 0 01.217-.325l8.5-8.5zM15 7l-2-2 1.293-1.293 2 2L15 7z"/>
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="text-gray-700">{project.description}</p>
                            <details className="mt-2">
                                <summary className="cursor-pointer text-blue-600 hover:underline text-sm">Read more</summary>
                                <p className="mt-2 text-gray-600">{project.longDescription}</p>
                                {project.links && (
                                    <div className="mt-2 flex flex-col gap-1">
                                        {project.links.map((link) => (
                                            <a
                                                key={link.link}
                                                href={link.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-500 hover:underline text-sm"
                                            >
                                                {link.text}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;