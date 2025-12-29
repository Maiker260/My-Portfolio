import { useEffect } from "react";

function useArrowNavigation({ onLeft, onRight, enabled = true }) {
    useEffect(() => {
        if (!enabled) return;

        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") {
                onLeft?.();
            } else if (e.key === "ArrowRight") {
                onRight?.();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onLeft, onRight, enabled]);
}

export default useArrowNavigation;
