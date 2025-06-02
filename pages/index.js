import BadgeGrid from '../components/BadgeGrid'

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">Smruti Ranjan Dash</h1>
          <p className="mb-2">Cybersecurity Professional | Calgary, Alberta</p>
          <div className="flex justify-center space-x-4 text-gray-400 text-xl">
            <a href="mailto:smruti1056@gmail.com" target="_blank" rel="noopener noreferrer">📧</a>
            <a href="tel:+14039718857" target="_blank" rel="noopener noreferrer">📞</a>
            <a href="https://linkedin.com/in/smruti1056" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/smruti1056" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://tryhackme.com/p/smruti1056" target="_blank" rel="noopener noreferrer">TryHackMe</a>
          </div>
        </header>
        
        {/* Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p>
            Cybersecurity professional with 3+ years of experience in IT operations and security, specializing in PKI (Certificate management), Microsoft Purview, Endpoint security, Email security, and Secure Access Service Edge (SASE) solution (Zscaler). Proficient in data governance, incident response, and security monitoring.
          </p>
        </section>
        
        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <b>Master of Information Security & Privacy (MISP)</b> — University of Calgary, Alberta, Canada <span className="italic">(Expected: 2025)</span>
            <div className="text-gray-400 text-sm">Relevant Coursework: Governance and Risk Management, Applied Cryptography, Network Security, Ethical Hacking Laboratory, Private Data Management, Policies, Standards and Programs</div>
          </div>
          <div className="mt-2">
            <b>Bachelor of Technology (BTech) in Computer Science & Engineering</b> — IGIT Sarang, India <span className="italic">(2020)</span>
          </div>
        </section>
        
        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
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
        </section>

        {/* Project */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Relevant Project</h2>
          <div>
            <b>AWS Cloud Security Assessment for a Startup</b> <span className="italic">(Aug 2024 – Nov 2024)</span>
            <ul className="list-disc ml-6 text-gray-300">
              <li>Conducted a security assessment of AWS configurations using ScoutSuite, identified and remediated misconfigurations, and verified system stability.</li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Certifications</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>CompTIA Security+ <span className="italic">(Jan 2025)</span></li>
            <li>Google Cybersecurity Professional Certificate <span className="italic">(Mar 2024)</span></li>
            <li>Cybersecurity Roles, Processes Operating System Security (IBM, Oct 2020)</li>
            <li>Palo Alto Networks Academy Cybersecurity Foundation (Nov 2020)</li>
          </ul>
        </section>

        {/* Badges */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Badges & Certifications</h2>
          <BadgeGrid tryhackmeUser="smruti1056" credlyUser="smruti-ranjan-dash" />
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: <a href="mailto:smruti1056@gmail.com" className="underline">smruti1056@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/smruti1056" className="underline">linkedin.com/in/smruti1056</a></p>
        </section>
      </div>
    </div>
  )
}