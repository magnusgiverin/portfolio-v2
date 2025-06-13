"use client";
import Image from "next/image";

const ImageSection = () => {
    return (
        <section
            id="about"
            className="relative z-10 flex flex-col bg-white"
        >
            <div className="flex flex-row justify-between items-center" />
            <div className="flex flex-row border-t border-neutral-200 overflow-x-auto">
                {/* Sidebar (hidden on small screens) */}
                <aside className="hidden md:block md:w-1/5 lg:w-1/4 2xl:w-1/3 h-auto border-r border-neutral-200" />
                {/* Main Content */}
                <main className="w-full md:w-4/5 lg:w-3/4 2xl:w-2/3 flex flex-col border-b border-neutral-200">
                    <div className="flex flex-col md:flex-row border-b border-neutral-200">
                        {/* Image */}
                        <figure className="w-full md:max-w-1/2 flex-1 bg-white border-b md:border-b-0 md:border-r border-neutral-200 p-4">
                            <Image
                                src="/me/group.JPG"
                                alt="Group photo"
                                width={1000}
                                height={500}
                                style={{ width: "100%", height: "auto" }}
                            />
                        </figure>
                        {/* Description */}
                        <section className="flex-1 bg-white p-4 pt-0 flex flex-col justify-between max-w-sm ">
                            <span className="text-6xl text-black self-start justify-start items-start mb-2">&bull;</span>
                            <p className="text-neutral-700 self-start">
                                - This image was taken at my summer internship in 2024 as an OSS engineer at Telenor, Fornebu, Oslo.
                            </p>
                             <p className="text-neutral-700 self-start">
                               (I am in the middle)
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default ImageSection;

