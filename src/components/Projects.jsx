import React from 'react';

const projects = [
  {
    name: "Hotel Management System",
    tech: "Python, Streamlit, SQLite",
    desc: "A full-stack hotel management system with features like user authentication, room and guest management, reservation tracking, and service handling.",
    link: "https://github.com/nawaz2112/Hotel-Management-System",
  },
  {
    name: "Jobs Monitoring Dashboard",
    tech: "Python, Streamlit, PostgreSQL, Apache Airflow, Docker",
    desc: "An interactive dashboard that visualizes batch job statuses and execution metrics from Apache Airflow, with dynamic charts and automated reports.",
    link: "https://github.com/nawaz2112/Jobs-Monitoring-Dashboard",
  },
  {
    name: "Shopzee – E-commerce Website",
    tech: "React.js, Vite, JavaScript, HTML, CSS",
    desc: "A responsive and modern e-commerce website with dynamic product listings and clean UI built using React and Vite.",
    link: "https://github.com/nawaz2112/shopzee",
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
          <a href={proj.link} target="_blank" className="text-blue-500 mt-2 inline-block">GitHub Repo</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
