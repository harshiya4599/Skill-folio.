import React, { useEffect, useRef } from "react";
import './About1.css';

const About1f = () => {
    const spacerRef = useRef(null);

    useEffect(() => {
        const el = spacerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add('animate');
                    } else {
                        // remove if you want the animation to re-run when scrolled out/in
                        el.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.6 }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about1f-section">
            <div className="about1f-content">
                <h2>About <span className="spacers">Me</span></h2>
            </div>
            <div className="about1f-container">
                <img className="proflie-image" src="/harshiya2.jpg" alt="Profile" />
            </div>

    
            <div ref={spacerRef} className="spacer">Computer Science Student </div>

            <div className="about1f-text">
                <p>
                    My name is <span className="names">Gagguturu Harshiya</span>, and I am a third-year B.tech Computer Science and Engineering student at Sri Venkateswara College of Engineering (SVCE), a NAAC++ accredited institution. I am highly passionate about continuous learning, problem-solving, and exploring emerging technologies. Through my academic journey, I have developed strong skills in Java, HTML, CSS, JavaScript, and React, along with a solid understanding of modern web development practices. I actively participate in workshops such as AWS and Smart World Vision, which provide valuable knowledge and hands-on experience, helping me grow both intellectually and creatively. I believe that education is not just about grades—it is about curiosity, innovation, and building a meaningful future with purpose, dedication, and effective problem-solving skills. In my free time, I enjoy reading tech blogs, coding small projects, playing chess, and exploring new ideas in technology and design.
                </p>
            </div>
            <div className="about1f-buttons">
                <a href="harshiyaresumefinal😊.pdf" download className="btn btn-primary">Download Resume</a>
            </div>
        </section>
    );
}

export default About1f;
