import React from "react";

export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Experience</h2>
      <div>
        <b>Senior Security Analyst</b> — HCLTech, Chennai, India <span className="italic">(Oct 2020 – Jul 2024)</span>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Configured and managed data loss prevention policies in Microsoft Purview.</li>
          <li>Utilized Microsoft Cloud App Security (CASB) to monitor and safeguard cloud applications, reducing unauthorized access incidents by 25%.</li>
          <li>Resolved issues on the Security Scorecard platform, enhancing security posture by 20 points.</li>
          <li>Managed 100+ certificates, optimizing PKI infrastructure.</li>
          <li>Administered email security solutions (Proofpoint, Microsoft Threat Explorer, Abnormal Security).</li>
          <li>Managed, detected, and remediated security incidents across 200+ devices using XDR solutions.</li>
          <li>Diagnosed and resolved connectivity/security issues with Zscaler across 300+ devices and VMs.</li>
        </ul>
      </div>
      <div className="mt-4">
        <b>Summer Intern (Mobile App Developer)</b> — Hindustan Aeronautics Limited, Koraput, India <span className="italic">(Jun 2019 – Aug 2019)</span>
        <ul className="list-disc ml-6 text-gray-300">
          <li>Developed a cross-platform mobile application for food delivery using React Native, increasing user engagement by 30%.</li>
        </ul>
      </div>
    </div>
  );
}