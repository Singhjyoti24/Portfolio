import React from 'react';
import './Home.css';
import resumeUrl from '../../assets/Jyoti_Singh_resume.pdf'
import { FaGithub, FaLinkedin, FaLaptopCode } from 'react-icons/fa';

function Home() {
    return (
        <div className='home'>
            <div className="intro1">
                <p>Full Stack Developer | React Enthusiast | Problem Solver | Chess Player | Music Lover</p>
            </div>
            <div className="title">
                <h1>Software Engineer</h1>
            </div>
            <div className="button-container">
                <a href={resumeUrl} download>
                    <button>Resume</button>
                </a>
                <div className="social-icons">
                    <a href="https://github.com/Singhjyoti24" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/jyotisingh242003/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://leetcode.com/u/_jyoti_geek/" target="_blank" rel="noopener noreferrer">
                        <FaLaptopCode className="social-icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home