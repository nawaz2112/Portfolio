import React from 'react';

const projects = [
  {
    name: "Hotel Management System",
    tech: "Python, Streamlit, SQLite",
    desc: "A full-stack hotel management system with features like user authentication, room and guest management, reservation tracking, and service handling.",
    link: "https://github.com/nawaz2112/Hotel-Management-System",
    liveLink: "", // No live link yet
  },
  {
    name: "Jobs Monitoring Dashboard",
    tech: "Python, Streamlit, PostgreSQL, Apache Airflow, Docker",
    desc: "An interactive dashboard that visualizes batch job statuses and execution metrics from Apache Airflow, with dynamic charts and automated reports.",
    link: "https://github.com/nawaz2112/Jobs-Monitoring-Dashboard",
    liveLink: "", // No live link yet
  },
  {
    name: "Password Manager Web App",
    tech: "MongoDB, Express.js, React.js, Node.js",
    desc: "A secure web application built with the MERN stack that allows users to safely store, retrieve, and manage passwords with encryption, user authentication, and an intuitive dashboard.",
    link: "https://github.com/nawaz2112/Password-Manager",
    liveLink: "https://your-password-manager-deployed-link.com", // Replace with your actual deployed URL
  }
];

const Projects = () => (
  <section className="py-8 max-w-4xl mx-auto">
    <h3 className="text-2xl font-semibold mb-4">Projects</h3>
    <div className="grid md:grid-cols-2 gap-4">
      {projects.map((proj, index) => (
        <div key={index} className="border p-4 rounded shadow dark:bg-gray-800">
          <h4 className="font-bold text-lg">{proj.name}</h4>
          <p className="text-sm italic mb-2">{proj.tech}</p>
          <p>{proj.desc}</p>
          <div className="mt-2">
            <a href={proj.link} target="_blank" className="text-blue-500 mr-4 inline-block">GitHub Repo</a>
            {proj.liveLink && (
              <a href={proj.liveLink} target="_blank" className="text-green-500 inline-block">Live Demo</a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
