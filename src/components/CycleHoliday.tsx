import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");

    const HOLIDAY_TRANSITIONS_A: Record<string, string> = {
        "🦃": "🎄",
        "🎄": "🪔",
        "🪔": "🎆",
        "🎆": "🎃",
        "🎃": "🦃",
    };

    const HOLIDAY_TRANSITIONS_Y: Record<string, string> = {
        "🎄": "🎆",
        "🎆": "🪔",
        "🪔": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
    };

    function alphabetTransition(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_A[holiday];
        setHoliday(newHoliday);
    }

    function yearTransition(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_Y[holiday];
        setHoliday(newHoliday);
    }

    return (
        <span>
            <Button onClick={alphabetTransition}>Alphabet</Button>
            <Button onClick={yearTransition}>Year</Button>
            <div>Holiday: {holiday}</div>
        </span>
    );
}
