import React from "react";
import BadgeGrid from "../components/BadgeGrid";

export default function Certifications() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Certifications & Badges</h2>
      <ul className="list-disc ml-6 text-gray-300 mb-8">
        <li>CompTIA Security+ <span className="italic">(Jan 2025)</span></li>
        <li>Google Cybersecurity Professional Certificate <span className="italic">(Mar 2024)</span></li>
        <li>Cybersecurity Roles, Processes Operating System Security (IBM, Oct 2020)</li>
        <li>Palo Alto Networks Academy Cybersecurity Foundation (Nov 2020)</li>
      </ul>
      <BadgeGrid tryhackmeUser="smruti1056" credlyUser="smruti-ranjan-dash" />
    </div>
  );
}