import { useEffect, useState } from "react";

const KONAMI_CODE = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
];

export const useKonamiCode = () => {
    const [input, setInput] = useState<string[]>([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = e.key;

            setInput((prev) => {
                const newInput = [...prev, key];

                // Keep only the last N keys where N is the length of the Konami code
                if (newInput.length > KONAMI_CODE.length) {
                    newInput.shift();
                }

                // Check if the input matches the Konami code
                if (JSON.stringify(newInput) === JSON.stringify(KONAMI_CODE)) {
                    setSuccess(true);
                    // Reset success after a few seconds to allow re-triggering
                    setTimeout(() => {
                        setSuccess(false);
                        setInput([]);
                    }, 5000);
                }

                return newInput;
            });
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return success;
};
