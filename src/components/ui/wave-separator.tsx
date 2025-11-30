import { cn } from "@/lib/utils";

interface WaveSeparatorProps {
    position?: "top" | "bottom";
    variant?: "primary" | "secondary" | "white" | "muted";
    className?: string;
    flip?: boolean;
}

const WaveSeparator = ({
    position = "bottom",
    variant = "white",
    className,
    flip = false
}: WaveSeparatorProps) => {
    const getColor = () => {
        switch (variant) {
            case "primary": return "text-primary";
            case "secondary": return "text-secondary";
            case "white": return "text-background"; // Using background variable which is usually white/light
            case "muted": return "text-secondary/10";
            default: return "text-background";
        }
    };

    return (
        <div
            className={cn(
                "absolute left-0 w-full overflow-hidden leading-[0]",
                position === "top" ? "top-0 rotate-180" : "bottom-0",
                flip && "transform scale-x-[-1]",
                className
            )}
            style={{ zIndex: 10 }}
        >
            <svg
                className={cn("relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]", getColor(), className)}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
            </svg>
        </div>
    );
};

export default WaveSeparator;
