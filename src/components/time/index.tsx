'use client';

import { CSSProperties, useEffect, useState } from "react";
import formatDateTime from "@/utils/format-date-time";
import cx from "clsx";

export function Time({ time, className, style }: { time: Date, className?: string, style?: CSSProperties }) {
    const [updatedDateAt, setUpdatedDateAt] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setUpdatedDateAt(formatDateTime(time));
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    return <time
        style={style}
        className={cx("w-full px-2 my-1 break-words text-sm text-[var(--black-dark-50)]", className)}
    >{updatedDateAt}</time>
}