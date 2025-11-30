import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "zoom-in";
    delay?: number; // in ms
    duration?: number; // in ms
}

const ScrollAnimation = ({
    children,
    className,
    animation = "slide-up",
    delay = 0,
    duration = 700
}: ScrollAnimationProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-in": return "animate-fade-in";
            case "slide-up": return "animate-slide-up"; // We might need to define this in tailwind config or css
            case "slide-left": return "animate-slide-in-left";
            case "slide-right": return "animate-slide-in-right";
            case "zoom-in": return "animate-zoom-in";
            default: return "animate-fade-in";
        }
    };

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all ease-out",
                isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : "opacity-0",
                // Initial states for transitions if we don't use keyframes but simple transitions
                !isVisible && animation === "slide-up" && "translate-y-10",
                !isVisible && animation === "slide-left" && "-translate-x-10",
                !isVisible && animation === "slide-right" && "translate-x-10",
                !isVisible && animation === "zoom-in" && "scale-95",
                className
            )}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default ScrollAnimation;
