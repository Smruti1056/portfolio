import React from "react";

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>
      <div>
        <b>AWS Cloud Security Assessment for a Startup</b> <span className="italic">(Aug 2024 – Nov 2024)</span>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Conducted a security assessment of AWS configurations using ScoutSuite, identified and remediated misconfigurations, and verified system stability.</li>
        </ul>
      </div>
      {/* Add more projects here as needed */}
    </div>
  );
}