import React from "react";
import './homesection.css';

const HomeSection = () => {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <nav className="home-sections">
            <div className="content">Portfolio</div>
            <div className="links">
                <button onClick={() => scrollTo('home')} className="btn">Home</button>
                <button onClick={() => scrollTo('about')} className="btn">About</button>
                <button onClick={() => scrollTo('skills')} className="btn">Projects</button>
                <button onClick={() => scrollTo('contact')} className="btn">Contact</button>
            </div>
        </nav>
    );
}
export default HomeSection;