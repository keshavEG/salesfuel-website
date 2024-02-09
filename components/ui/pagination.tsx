"use client"

import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange?: (page: number) => void;
}

const classes = "flex items-center justify-center px-4 h-10 text-base  text-color-4 bg-white hover:bg-gray-200 cursor-pointer border border-color-4 "

export default function Pagination({
    totalPages,
    currentPage,
    onPageChange,
}: PaginationProps) {
    const hasPreviousPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const _searchParams = new URLSearchParams(searchParams);
    _searchParams.set("page", String(currentPage + 1));

    const nextPageUrl = `${pathname}?${_searchParams.toString()}`;
    _searchParams.set("page", String(currentPage - 1));
    const previousPageUrl = `${pathname}?${_searchParams.toString()}`;


    return (
        <div className="flex items-center justify-between mt-8">
            {/* <div>
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{currentPage}</span> to{" "}
                    <span className="font-medium">{totalPages}</span> of{" "}
                    <span className="font-medium">{totalCount}</span> results
                </p>
            </div> */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <PrevButton onClick={onPageChange ? () => onPageChange(currentPage - 1) : false} disabled={!hasPreviousPage} previousPageUrl={previousPageUrl} />

                    <NextButton onClick={onPageChange ? () => onPageChange(currentPage + 1) : false} disabled={!hasNextPage} nextPageUrl={nextPageUrl} />
                </div>
            </div >
        </div >
    );
}


const PrevButton = ({ onClick, disabled, previousPageUrl }: any) => {
    const attributes: any = {
        disabled,
        className:
            cn(classes, "rounded-l ", {
                "opacity-50 cursor-not-allowed": disabled,
            }),
        href: previousPageUrl
    }
    if (onClick) {
        attributes['onClick'] = onClick
        delete attributes.href
    }
    if (disabled) delete attributes.href
    return (<a {...attributes}>
        <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
        </svg>
        Prev
    </a>)
}

const NextButton = ({ onClick, disabled, nextPageUrl }: any) => {
    const attributes: any = {
        disabled,
        className:
            cn(classes, "rounded-r border-l-0", {
                "opacity-50 cursor-not-allowed": disabled,
            }),
        href: nextPageUrl
    }

    if (onClick) {
        attributes['onClick'] = onClick
        delete attributes.href
    }
    if(disabled) delete attributes.href

    return (
        <a {...attributes} >
            Next
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>
    )
}

