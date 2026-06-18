import React, { useState } from 'react'
import Header from "../Components/Header"
import { Link } from 'react-router-dom';

export default function Register() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "User"
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        console.log(formData);
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
                    paddingTop: "50px"
                }}
            >
                <div
                    style={{
                        width: "450px",
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
                        Create Account
                    </h1>

                    <p
                        style={{
                            textAlign: "center",
                            color: "#cbd5e1",
                            marginBottom: "30px"
                        }}
                    >
                        Join Solom Services today
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
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
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
                            type="email"
                            name="email"
                            placeholder="Email Address"
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
                            placeholder="Password"
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
                            name="confirmPassword"
                            placeholder="Confirm Password"
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
                            Create Account
                        </button>
                    </form>

                    <p
                        style={{
                            textAlign: "center",
                            marginTop: "20px",
                            color: "#cbd5e1"
                        }}
                    >
                        Already have an account?{" "}
                        <Link to="/login"
                            style={{
                                color: "#60a5fa",
                                cursor: "pointer",
                                fontWeight: "bold"
                            }}
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}