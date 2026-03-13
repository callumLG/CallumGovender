"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus({
        type: "success",
        message: data.message || "Message sent successfully.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
        company: "",
        website: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto bg-[#111111] text-white py-24 px-6"
    >
      <h1 className="text-5xl font-bold text-center mb-12">Contact</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-300 mb-6">
            I'm currently open to new opportunities and collaborations. Whether
            you have a project in mind or just want to connect, feel free to
            reach out!
          </p>

          <a
            href="mailto:callumlevigovender@gmail.com"
            className="text-[#A8C5E8] hover:underline"
          >
            callumlevigovender@gmail.com
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot fields */}
          <div className="hidden">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
            />
          </div>

          <div className="hidden">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
              tabIndex="-1"
            />
          </div>

          <div>
            <label htmlFor="name" className="block mb-2 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#333333] focus:border-[#A8C5E8] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#333333] focus:border-[#A8C5E8] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0B] border border-[#333333] focus:border-[#A8C5E8] focus:outline-none resize-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-[#A8C5E8] text-[#0B0B0B] hover:bg-[#8FB3D9] transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
            <Send className="w-4 h-4" />
          </button>

          {status.message && (
            <p
              className={`text-sm ${
                status.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
