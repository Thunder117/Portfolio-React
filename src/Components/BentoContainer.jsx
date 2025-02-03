import React, { useState } from "react";
import "./Style.css";
import BentoItem from './BentoItem';

const details = {
    1: 
    {
        title: "Rogue-like Unity Game",
        description: "A 2D pixel art rogue-like game developed in Unity, featuring a player-controlled character, weapon system, and dynamic enemy interactions. This project showcases my skills in game development and C# programming.",
        gif: "./imgs/bento-duck.gif", 
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Player-controlled character with smooth movement and attack mechanics.</li>
            <li>Weapon aiming based on mouse position for precise combat.</li>
            <li>Dynamic camera shake effect during combat for enhanced game feel.</li>
            <li>Pixel art environment and character designs, creating a retro aesthetic.</li>
            <li>Basic enemy AI with patrolling, attacking, and health management behaviors.</li>
        </ul>
        `,
        technologies_used:
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Game Engine:</b> Unity (C#).</li>
            <li><b>Art:</b> Pixel art created using Aseprite.</li>
            <li><b>Development:</b> C# for scripting player movement, enemy AI, and game mechanics.</li>
            <li><b>Physics:</b> Unity’s built-in physics engine for collision detection and interaction.</li>
        </ul>
        `,
        conclusion: "This project highlights my passion for game development, focusing on core gameplay mechanics, smooth animations, and a cohesive visual style and color palette."
    },
    2: 
    {
        title: "Book Club Web App",
        description: "A full-featured web application for managing book clubs, allowing users to create clubs, invite other members, and manage book collections within clubs.",
        gif: "./imgs/bento-bookclub.gif", 
        link: "https://bookclubplus.netlify.app/",
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Users can create and manage book clubs, adding or removing books with a smooth modal interface.</li>
            <li>Real-time search functionality to find users by their username and invite them to join book clubs.</li>
            <li>Responsive design with dynamic modals for adding books to existing clubs.</li>
        </ul>
        `,
        technologies_used:
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Frontend:</b> React, HTML5, JSX.</li>
            <li><b>Backend:</b> Node.js, Express, JavaScript (ES6+).</li>
            <li><b>Database:</b> MongoDB for storing user and book club data.</li>
            <li><b>User Authentication:</b> JSON Web Tokens (JWT) for secure login and session management.</li>
            <li><b>Styling and UI:</b> Tailwind CSS, and animations for seamless transitions in modals.</li>
            <li><b>Deployment:</b> Hosted using Netlify and Render for performance.</li>
        </ul>
        `,
        conclusion: "This project demonstrates my ability to build interactive, scalable, and user-friendly web applications with both frontend and backend technologies."
    },
    3: 
    {
        title: "Activity Tracker App",
        description: "A simple React Native app that allows users to create activities linked to specific dates, providing an easy way to track tasks and mark them as done or not done.",
        gif: "./imgs/bento-calendar.gif", 
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Users can select a date and create multiple activities for that day.</li>
            <li>Each activity has a toggle option to mark it as 'Done' or 'Not Done.'</li>
            <li>Visual indicators (such as checkmarks) display task completion status.</li>
            <li>Clean and minimal UI for easy navigation and usage.</li>
        </ul>
        `,
        technologies_used: 
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Frontend:</b> React Native, JSX.</li>
            <li><b>Backend:</b> JavaScript (ES6+).</li>
            <li><b>Styling and UI:</b> CSS mobile-first design.</li>
            <li><b>Deployment:</b> Project made for personal use, using GitHub for version control.</li>
        </ul>
        `,
        conclusion: "This project showcases my ability to build simple and intuitive mobile applications that improve productivity by helping users manage their daily tasks effectively."
    },
    4: 
    {
        title: "Supermarket List App",
        description: `A mobile application that helps users create and organize supermarket shopping lists, allowing them to easily track and add products for a more efficient shopping experience.`,      
        gif: "./imgs/bento-supermarket.gif",  
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Create multiple shopping lists, each tailored to different shopping needs.</li>
            <li>Add various products like groceries, produce, and household items to specific lists.</li>
            <li>Add products to the database so they can be added to a list.</li>
            <li>Edit or remove items from lists to keep them up-to-date and organized.</li>
            <li>Responsive mobile design, ensuring a seamless user experience.</li>
        </ul>
        `,
        technologies_used:
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Frontend:</b> React Native, JSX.</li>
            <li><b>Backend:</b> JavaScript (ES6+).</li>
            <li><b>Styling and UI:</b> CSS mobile-first design.</li>
            <li><b>Deployment:</b> Project made for personal use, using GitHub for version control.</li>
        </ul>
        `,
        conclusion: "This project showcases my ability to build user-focused mobile applications with dynamic functionality and an intuitive user interface."
    },
    5: 
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects and skills, featuring a responsive design and smooth user experience.",
        gif: "./imgs/bento-portfolio.gif",
        key_features: 
        `
        <b>Key Features:</b>
        <ul>
            <li>Clean and modern design with intuitive navigation for showcasing various projects.</li>
            <li>Interactive modals to display detailed information about each project.</li>
            <li>Responsive layout that adapts to different screen sizes for optimal viewing on any device.</li>
        </ul>
        `,
        technologies_used:
        `
        <b>Technologies Used:</b>
        <ul>
            <li><b>Frontend:</b> React, HTML5, JSX.</li>
            <li><b>Backend:</b> JavaScript (ES6+).</li>
            <li><b>Styling and UI:</b> CSS3 with animations for a smooth user experience.</li>
            <li><b>Deployment:</b> Hosted using Netlify.</li>
        </ul>
        `,
        conclusion: "This project demonstrates my skills in building responsive and user-friendly websites, showcasing my work and abilities as a web developer."
    }
};

const BentoContainer = () => {
    const [modalData, setModalData] = useState(null);
    
    const openModal = (id) => {
        if (details[id]) {
          setModalData(details[id]);
        }
    };

    const closeModal = () => {
        setModalData(null);
    };

    return(
        <div className="bento-container">

            {Object.keys(details).map((id) => (
                <BentoItem
                    key={id}
                    gif={details[id].gif}
                    onClick={() => openModal(id)}
                />
            ))}


            {modalData && (
            <div id="myModal" className="modal " onClick={closeModal}>

                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2 className="title" id="modalTitle">{modalData.title}</h2>
                    </div>
                    <div className="modal-body">
                        <p id="modalDescription">{modalData.description}</p>
                        {modalData.link && (
                        <a
                            id="link"
                            href={modalData.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-project"
                        >
                            View Project
                        </a>
                        )}
                        <div
                            id="keyFeatures"
                            dangerouslySetInnerHTML={{ __html: modalData.key_features }}
                            >
                        </div>
                        <div
                            id="technologiesUsed"
                            dangerouslySetInnerHTML={{
                                __html: modalData.technologies_used,
                            }}
                        >
                        </div>
                        <p id="conclusion">{modalData.conclusion}</p>
                    </div>
                </div>
                
            </div>
            )}
        </div>
    );
};

export default BentoContainer;