"use client"
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { useState } from 'react';
import LimitExceededPopup from './limit-exceeded-popup';

interface IViewButtonProps {
    href: string;
    className?: string;
    target?: HTMLAnchorElement["target"];
    popup?: boolean;
    children?: React.ReactNode;
    message?: string;
}
export default function ViewButton({ href, className = "", target, popup, children,message }: IViewButtonProps) {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        if (!popup) setShow(true)
    }
    const classNames = cn("py-0.5 px-4 text-base w-fit !rounded !bg-white !text-color-4 border border-color-4 hover:!bg-color-4/10", className)

    if (!popup) return (
        <span>
            <button
                className={classNames}
                onClick={handleClick}
            >
                {children || "View"}
            </button>
            <LimitExceededPopup show={show} goBack={false} setShow={setShow} infoMessage={message} />
        </span>
    )

    return (
        <Link href={href} className={classNames} target={target}>
            {children || "View"}
        </Link>
    )
}
