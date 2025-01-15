import React, { useEffect, useRef, useState } from "react";
import "./Style.css";

const TitleContainer = (props) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { root: null, threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className="title-container" ref={containerRef}>
            <div className="title">
                <small>{props.subtitle}</small>
                <h1>{props.title}</h1>
                <div className={`${isVisible ? `longer ${props.color}` : `bar ${props.color}`}`}/>
            </div>
        </div>
    );
};

export default TitleContainer;