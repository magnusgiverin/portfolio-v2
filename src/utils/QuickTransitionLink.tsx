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
        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add("quick-transition");

        await sleep(200);
        router.push(href);
        await sleep(200);

        body?.classList.remove("quick-transition");
    };

    return { handleTransition };
}