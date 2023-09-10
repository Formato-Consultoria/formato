'use client';

import { useEffect, useState } from "react";
import formatDateTime from "@/utils/format-date-time";

export function Time({ time }: { time: Date }) {
    const [updatedDateAt, setUpdatedDateAt] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setUpdatedDateAt(formatDateTime(time));
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    return <time>{updatedDateAt}</time>
}