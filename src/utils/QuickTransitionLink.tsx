import { useRouter } from "next/navigation";
import React from "react";

export function useQuickTransition() {
    const router = useRouter();

    function sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleTransition = async (
        e: React.MouseEvent<HTMLElement>,
        href: string
    ) => {
        // Check if href is a file in the public folder (e.g., /files/doc.pdf)
        const isFile = /\.(pdf|docx?|xlsx?|pptx?|zip|rar|png|jpe?g|gif|svg|mp4|mp3|webm|txt|csv)$/i.test(href);

        // Check if href is external
        const isExternal = /^https?:\/\//i.test(href) && !href.includes(window.location.hostname);

        if (isFile || isExternal) {
            e.preventDefault();
            window.open(href, "_blank", "noopener,noreferrer");
            return;
        }

        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add("quick-transition");

        await sleep(400);
        router.push(href);
        await sleep(400);

        if (window.location.hash) {
            history.replaceState(null, "", window.location.pathname + window.location.search);
        }

        body?.classList.remove("quick-transition");
    };

    return { handleTransition };
}