'use client';

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
    children: ReactNode;
    href: string;
    className?: string;
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const TransitionLink = ({
    children,
    href,
    className,
    ...props
}: TransitionLinkProps) => {
    const router = useRouter();

    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.preventDefault();

        const body = document.querySelector("body")
        body?.classList.add("page-transition");

        await sleep(500)
        router.push(href)
        await sleep(500)

        body?.classList.remove("page-transition");
    }

    return (
        <Link
            onClick={handleTransition}
            href={href}
            className={className}
            {...props}
        >
            {children}
        </Link>
    )
}