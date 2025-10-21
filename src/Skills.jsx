 import React, { useState } from "react";
    import './Skills.css';

    const Skills = () => {
        const [videoPlaying, setVideoPlaying] = useState({
            plant: false,
            ieee: false,
            portfolio: false
        });

        const handleDemo = (project) => {
            setVideoPlaying(prev => ({
                ...prev,
                [project]: !prev[project]
            }));
        };

        return (
            <section className="skills-section">
                 <div className="about1f-content">
                    <h5>My <span class="space">Skills </span> in Action </h5>
                   <h2>in <span class="spacers">Projects</span></h2>
                    </div>
                    <div className="skills-container">
                        <div className="skill-item">
                            <img className="skill-icon" src="image.jpg" alt="Plant Spot Project" />
                            <span className="title">The plant spot</span>
                            <button className="btn btn-primary" onClick={() => handleDemo('plant')}>video</button>
                        </div>
                        <div className="skill-item">
                            <img className="skill-icon" src="/ieee.jpg" alt="IEEE Website" />
                            <span className="title">IEEE website</span>
                            <button className="btn btn-primary" onClick={() => handleDemo('ieee')}>video</button>
                        </div>
                        <div className="skill-item">
                            <img className="skill-icon" src="/portofolio.jpg" alt="Portfolio" />
                            <span className="title">Responsive Portfolio</span>
                            <button className="btn btn-primary" onClick={() => handleDemo('portfolio')}>video</button>
                        </div>
                        
                        {/* Video Modal */}
                        {(videoPlaying.plant || videoPlaying.ieee || videoPlaying.portfolio) && (
                            <div className="modal-overlay">
                                <div className="video-container">
                                    {videoPlaying.plant && (
                                        <video 
                                            width="800"
                                            height="450"
                                            controls 
                                            autoPlay
                                            onEnded={() => setVideoPlaying(prev => ({ ...prev, plant: false }))}
                                        >
                                            <source src="/plant-spot.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                    {videoPlaying.ieee && (
                                        <video 
                                            width="800"
                                            height="450"
                                            controls 
                                            autoPlay
                                            onEnded={() => setVideoPlaying(prev => ({ ...prev, ieee: false }))}
                                        >
                                            <source src="/ieee-website.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                    {videoPlaying.portfolio && (
                                        <video 
                                            width="800"
                                            height="450"
                                            controls 
                                            autoPlay
                                            onEnded={() => setVideoPlaying(prev => ({ ...prev, portfolio: false }))}
                                        >
                                            <source src="/portfolio-demo.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}
                                    <button 
                                        className="btn btn-primary close-btn"
                                        onClick={() => setVideoPlaying({
                                            plant: false,
                                            ieee: false,
                                            portfolio: false
                                        })}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                        
                        </div>
                    
                 
            </section>
        );
    }
    export default Skills;
