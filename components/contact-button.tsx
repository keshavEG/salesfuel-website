"use client"
import { cn } from '@/lib/utils';
import { useState } from 'react';
import LimitExceededPopup from './limit-exceeded-popup';

interface IContactButtonProps {
    href: string;
    className?: string;
    target?: HTMLAnchorElement["target"];
    user?: boolean;
    children?: React.ReactNode;
    message?: string;
}
export default function ContactButton({ href, className = "", target, user, children, message }: IContactButtonProps) {
    const [show, setShow] = useState(false)

    const handleClick = () => {
        if (!user) setShow(true)
    }
    const classNames = cn("primary-button px-12 py-3 m-auto  block w-fit md:m-0 mt-4", className)

    if (!user) return (
        <div className='mt-2'>
            <button
                className={classNames}
                onClick={handleClick}
            >
                {children || "Contact"}
            </button>
            <LimitExceededPopup show={show} setShow={setShow} goBack={false} infoMessage={message} />
        </div>
    )

    return (
        <div className='mt-2'>
            <a href={href} className={classNames} target={target}>
                {children || "Contact"}
            </a>
        </div>
    )
}
