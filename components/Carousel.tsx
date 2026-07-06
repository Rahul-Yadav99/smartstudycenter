"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    role: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote:
            "The customized study plan at Smart Study Center completely transformed my approach to Physics. I went from struggling with concepts to topping my class within three months.",
        name: "Sarah Jenkins",
        role: "Pre-Engineering Student",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 2,
        quote:
            "Smart Study Center gave me the tools and confidence I needed to ace my board exams. The mentors here genuinely care about every student's progress.",
        name: "Arjun Mehta",
        role: "Class XII Science Student",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 3,
        quote:
            "I struggled with Mathematics for years, but the step-by-step approach taught here made everything click. My grades improved dramatically in just two months.",
        name: "Priya Sharma",
        role: "Competitive Exam Aspirant",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        id: 4,
        quote:
            "The doubt-clearing sessions are incredibly helpful. No question is too small here. I finally feel confident walking into any exam.",
        name: "Rohan Gupta",
        role: "JEE Aspirant",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);

    const goTo = useCallback(
        (index: number) => {
            if (animating) return;
            setAnimating(true);
            setTimeout(() => {
                setCurrent(index);
                setAnimating(false);
            }, 300);
        },
        [animating]
    );

    const prev = () =>
        goTo((current - 1 + testimonials.length) % testimonials.length);
    const next = () => goTo((current + 1) % testimonials.length);

    useEffect(() => {
        const timer = setInterval(() => {
            goTo((current + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [current, goTo]);

    const t = testimonials[current];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Heading */}
                <h2 className="font-semibold"
                    style={{
                        fontFamily: "'Inter', 'Segoe UI', sans-serif",
                        // fontWeight: 700,
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        color: "#111827",
                        marginBottom: "2rem",
                    }}
                >
                    What Our Students Says
                </h2>

                {/* Avatar */}
                <div
                    style={{
                        transition: "opacity 0.3s ease",
                        opacity: animating ? 0 : 1,
                    }}
                >
                    <div
                        style={{
                            width: 72,
                            height: 72,
                            borderRadius: "50%",
                            border: "3px solid #1e3a8a",
                            padding: 3,
                            marginBottom: "1.5rem",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={t.avatar}
                            alt={t.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>

                {/* Quote */}
                <blockquote
                    style={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        fontStyle: "italic",
                        fontWeight: 600,
                        fontSize: "clamp(1rem, 2vw, 1.15rem)",
                        lineHeight: 1.75,
                        color: "#1f2937",
                        maxWidth: 620,
                        marginBottom: "1.5rem",
                        transition: "opacity 0.3s ease",
                        opacity: animating ? 0 : 1,
                    }}
                >
                    &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Name & Role */}
                <div
                    style={{
                        transition: "opacity 0.3s ease",
                        opacity: animating ? 0 : 1,
                        marginBottom: "2rem",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "'Inter', 'Segoe UI', sans-serif",
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: "#111827",
                            margin: 0,
                        }}
                    >
                        {t.name}
                    </p>
                    <p
                        style={{
                            fontFamily: "'Inter', 'Segoe UI', sans-serif",
                            fontWeight: 400,
                            fontSize: "0.875rem",
                            color: "#6b7280",
                            margin: 0,
                        }}
                    >
                        {t.role}
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div style={{ display: "flex", gap: "0.75rem" }}>
                    {[
                        { icon: <ChevronLeft size={18} />, action: prev, label: "Previous" },
                        { icon: <ChevronRight size={18} />, action: next, label: "Next" },
                    ].map(({ icon, action, label }) => (
                        <button
                            key={label}
                            aria-label={label}
                            onClick={action}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: "50%",
                                border: "1.5px solid #d1d5db",
                                background: "transparent",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#374151",
                                transition: "border-color 0.2s, background 0.2s, color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.background =
                                    "#1e3a8a";
                                (e.currentTarget as HTMLButtonElement).style.borderColor =
                                    "#1e3a8a";
                                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLButtonElement).style.background =
                                    "transparent";
                                (e.currentTarget as HTMLButtonElement).style.borderColor =
                                    "#d1d5db";
                                (e.currentTarget as HTMLButtonElement).style.color = "#374151";
                            }}
                        >
                            {icon}
                        </button>
                    ))}
                </div>

                {/* Dot indicators */}
                <div style={{ display: "flex", gap: "0.4rem", marginTop: "1.25rem" }}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => goTo(i)}
                            style={{
                                width: i === current ? 20 : 8,
                                height: 8,
                                borderRadius: 9999,
                                background: i === current ? "#1e3a8a" : "#d1d5db",
                                border: "none",
                                cursor: "pointer",
                                padding: 0,
                                transition: "width 0.3s ease, background 0.3s ease",
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;