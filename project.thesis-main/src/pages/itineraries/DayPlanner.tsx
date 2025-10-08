import { useEffect } from "react";

function DayPlanner() {
    useEffect(() => {
        document.title = "Day Planner - Albay Travel";
    }, [])

    return (
        <h1>Day Planner</h1>
    )
}

export default DayPlanner;

