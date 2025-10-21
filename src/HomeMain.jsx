import React from "react";
import './HomeMain.css';

const HomeMain = () => {
    return (
        <main className="home-main">
            <div className="intro">
                <h2 className="subtitle">Hello, it's Me</h2>
                <h1 className="name">GAGGUTURU HARSHIYA</h1>
                <p className="role">And I'm a <span className="word">Web Developer, Java Developer</span></p>

                <div className="paragraph">
                    <p>I am a passionate and dedicated web developer with a strong foundation in Java programming. I specialize in creating dynamic and responsive websites that provide an exceptional user experience. I am driven by a desire to learn and grow in the ever-evolving field of web development.</p>
                </div>

                <div className="image-container">
                    <img className="profiles-image" src="/harshiya.png" alt="Profile" />
                </div>

                <div className="buttons">
                   <a href="https://github.com/harshiya4599" target="_blank" rel="noopener noreferrer">
                    <img className="icons" src="/github (1).png" alt="GitHub" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/gagguturu-harshiya-4612b72b7" target="_blank" rel="noopener noreferrer">
                    <img className="icons" src="/linkedin.png" alt="LinkedIn" />
                    </a>
                    
                    <a href="harshiyaresumefinal😊.pdf" download className="btn btn-primary">Download Resume</a>
                </div>
                
            </div>
        </main>
    );
}
export default HomeMain;
