import React from 'react';
import './Projects.css';
import GrocerHub from '../../assets/Screenshot (1163).png';
import Myntra from '../../assets/Screenshot (1094).png';
import Travel from '../../assets/Screenshot (984).png';
import Chat from '../../assets/Screenshot (979).png';
import Covid from '../../assets/Screenshot (1171).png';
import Disney from '../../assets/Screenshot (1103).png';
import Food from '../../assets/Screenshot (948).png';

function Projects() {
  const projects = [
    {
      title: "SMVDU GrocerHub",
      img: GrocerHub,
      description: "A full-stack grocery application built with the MERN stack for students to order groceries from the campus store.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "PayPal API", "Google AI-Model", "Tailwind css"],
      link: "https://github.com/Singhjyoti24/SMVDU-GrocerHub",
    },
    {
      title: "ChatBridge",
      img: Chat,
      description: "A chat application that allows real-time messaging and notifications.",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Singhjyoti24/ChatBridge",
    },
    {
      title: "Covid-19 Tracker",
      img: Covid,
      description: "The main purpose of a COVID-19 tracker is to keep the public informed about the current status of the pandemic at local, national, and global levels",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://github.com/Singhjyoti24/Covid-19-Tracker",
    },
    {
      title: "Travel-Tales",
      img: Travel,
      description: "Travel Tales helps you to post and see different places where you can plan your trip according to your budget.",
      technologies: ["React", "JavaScript", "CSS", "Nodejs", "Expressjs", 'MongoDB'],
      link: "https://github.com/Singhjyoti24/Travel-Tales",
    },
    {
      title: "Mynta-Clone",
      img: Myntra,
      description: "Simple Myntra Clone to practice my react skills",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://github.com/Singhjyoti24/Myntra-clone",
    },
    {
      title: "Disney+Clone",
      img: Disney,
      description: "Disney Clone to practice my react skills",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://github.com/Singhjyoti24/Disney-Plus-Clone",
    },
    {
      title: "Magic Memory",
      img: Disney,
      description: "Simple React memory game",
      technologies: ["React", "JavaScript", "CSS"],
      link: "https://github.com/Singhjyoti24/Magic-memory-Challenge",
    },
    {
      title: "Bay Restaurant",
      img: Food,
      description: "Introducing the Restaurant App, a visually stunning and user-friendly application designed to enhance your dining experience. Although it currently focuses solely on the frontend, this app showcases a sleek and intuitive interface that promises to captivate users from the moment they launch it.",
      technologies: ["HTML", "JavaScript", "CSS", "Nodejs", "EJS"],
      link: "https://github.com/Singhjyoti24/Bay-Restaurant",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <img src={project.img} alt="" />
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
