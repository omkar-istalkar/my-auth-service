import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import "./Home.css";
import { redirect, useNavigate } from "react-router-dom";

export default function Home() {
  const features = [
    {
      title: "JWT Authentication",
      description:
        "Secure token based authentication using Spring Security.",
      icon: "🔐",
    },
    {
      title: "Role Based Access",
      description:
        "Control access with roles and permissions.",
      icon: "👥",
    },
    {
      title: "User Management",
      description:
        "Manage users from a centralized dashboard.",
      icon: "📊",
    },
    {
      title: "Multi App Support",
      description:
        "One login service for multiple applications.",
      icon: "🚀",
    },
  ];

  const techStack = [
    "⚛️ React",
    "☕ Spring Boot",
    "🗄 PostgreSQL",
    "🔐 JWT",
    "🐳 Docker",
    "☁️ Cloud",
  ];

  const navigate = useNavigate();
  

  const [isActive, setIsActive] = useState(false);
  const envMode = import.meta.env.VITE_dev;
 // console.log(envMode)
  const APP_URL = envMode === "local"?`${import.meta.env.VITE_BACKEND_LOCAL_URL}`:`${import.meta.env.VITE_BACKEND_ONLINE_URL}`;
  // console.log(APP_URL)

  const checkAvailable = async() =>{
    try{
      const response = await fetch(APP_URL)
      if (response.ok) {
        setIsActive(true)
      }
      
    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    checkAvailable()
  },[])

  return (
    <div className="home">
      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="badge">
            Authentication as a Service
          </span>

          <h1>
            Secure Authentication
            <br />
            Made Simple
          </h1>

          <p>
            Solom Services provides centralized authentication,
            authorization and user management for modern web
            applications built with React, Spring Boot and
            cloud-native technologies.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => { navigate("/register") }}>
              Get Started
            </button>

            <button className="secondary-btn" onClick={() =>
              document
                .getElementById("features")
                .scrollIntoView({
                  behavior: "smooth"
                })
            }>
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>JWT</h2>
              <span>Authentication</span>
            </div>

            <div>
              <h2>RBAC</h2>
              <span>Authorization</span>
            </div>

            <div>
              <h2>OAuth</h2>
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <h2>Features</h2>

        <div className="feature-grid">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <h2>Tech Stack</h2>

        <div className="tech-grid">
          {techStack.map((tech) => (
            <div key={tech} className="tech-card">
              {tech}
            </div>
          ))}
        </div>
      </section>

      <div className="tech-grid" style={{  "display":"flex","justifyContent":"center", "alignItems":"center","gap":"10px"}}>
        <div style={{
          width: "25px",
          height: "25px",
          border: "2px solid black",
          borderRadius: "50%",
          backgroundColor: isActive?"green":"red",
        }} 
        >
        </div>
        <div>Backend Status</div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h2>Solom Services</h2>

        <p>
          Authentication & Authorization Platform
        </p>

        <p>
          Built with React • Spring Boot • PostgreSQL
        </p>

        <p>© 2026 Solom Services</p>
      </footer>
    </div>
  );
}