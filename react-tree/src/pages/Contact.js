import React from "react";

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p>
        <b>Email:</b>{" "}
        <a href="mailto:smruti1056@gmail.com" className="underline" target="_blank" rel="noopener noreferrer">
          smruti1056@gmail.com
        </a>
      </p>
      <p>
        <b>LinkedIn:</b>{" "}
        <a href="https://linkedin.com/in/smruti1056" className="underline" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/smruti1056
        </a>
      </p>
      {/* Add more contact options if needed */}
    </div>
  );
}