"use client";
import { createNoise3D } from "simplex-noise";
import { useEffect, useRef, useState } from "react";

export const WavyBackground = ({
    children,
    className,
    containerClassName,
    colors,
    waveWidth,
    backgroundFill,
    blur = 10,
    speed = "fast",
    waveOpacity = 0.5,
    ...props
}) => {
    const noise = createNoise3D();
    let w, h, nt, i, x, ctx, canvas;
    const canvasRef = useRef(null);

    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    const init = () => {
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function () {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };
        render();
    };

    const waveColors = colors ?? [
        "#dc2626", // Deep red
        "#991b1b", // Dark red
        "#ffffff", // White
        "#1f1f1f", // Dark black/gray
        "#ef4444", // Bright red
        "#fee2e2", // Light red/pink
        "#000000", // Pure black
    ];
    const drawWave = (n) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = waveColors[i % waveColors.length];
            for (x = 0; x < w; x += 5) {
                var y = noise(x / 800, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.5); // Changed back to 0.5 to center the waves
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId;
    const render = () => {
        ctx.fillStyle = backgroundFill || "black";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
    };

    useEffect(() => {
        init();
        return () => {
            cancelAnimationFrame(animationId);
        };
        // eslint-disable-next-line
    }, []);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div className={`wavy-container ${containerClassName || ""}`} >
            <canvas
                ref={canvasRef}
                id="canvas"
                className="wavy-canvas"
                style={{
                    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                }}
            ></canvas>
            <div className={`wavy-content ${className || ""}`} {...props}>
                {children}
            </div>
        </div>
    );
};
