import React from "react";

export default function BadgeGrid({ tryhackmeUser, credlyUser }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <a
        href={`https://tryhackme.com/p/${tryhackmeUser}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <img
          src={`https://tryhackme-badges.s3.amazonaws.com/${tryhackmeUser}.png`}
          alt="TryHackMe Profile"
          className="w-32 h-32 object-contain"
        />
        <span className="mt-2 text-center">TryHackMe Profile</span>
      </a>
      <a
        href={`https://www.credly.com/users/${credlyUser}/badges`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center"
      >
        <img
          src="https://images.credly.com/size/340x340/images/684ba59e-a7a7-4f31-8d2a-2e6a5f6f6c4e/image.png"
          alt="Credly Profile"
          className="w-32 h-32 object-contain"
        />
        <span className="mt-2 text-center">See all certifications</span>
      </a>
    </div>
  );
}