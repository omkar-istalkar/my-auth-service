import React, { useState } from 'react'
import Header from "../Components/Header"
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const googleUri = "www.google.com";
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);

        localStorage.setItem("LoggedIn", "true");
        
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #1e40af, #020617)",
                color: "white"
            }}
        >
            <Header />

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "80px"
                }}
            >
                <div
                    style={{
                        width: "400px",
                        padding: "40px",
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                    }}
                >
                    <h1
                        style={{
                            textAlign: "center",
                            marginBottom: "10px"
                        }}
                    >
                        Welcome Back
                    </h1>

                    <p
                        style={{
                            textAlign: "center",
                            color: "#cbd5e1",
                            marginBottom: "30px"
                        }}
                    >
                        Login to your Solom Services account
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"
                        }}
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handleChange}
                            required
                            style={{
                                padding: "14px",
                                borderRadius: "10px",
                                border: "1px solid #475569",
                                background: "#0f172a",
                                color: "white",
                                outline: "none"
                            }}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleChange}
                            required
                            style={{
                                padding: "14px",
                                borderRadius: "10px",
                                border: "1px solid #475569",
                                background: "#0f172a",
                                color: "white",
                                outline: "none"
                            }}
                        />

                        <button
                            type="submit"
                            style={{
                                padding: "14px",
                                border: "none",
                                borderRadius: "10px",
                                background:
                                    "linear-gradient(90deg,#4f46e5,#7c3aed)",
                                color: "white",
                                fontSize: "16px",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }}
                        >
                            Login
                        </button>
                    </form>

                    <p
                        style={{
                            textAlign: "center",
                            marginTop: "20px",
                            color: "#cbd5e1"
                        }}
                    >
                        Don't have an account?{" "}
                        <Link to="/register"
                            style={{
                                color: "#60a5fa",
                                cursor: "pointer",
                                fontWeight: "bold"
                            }}
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}