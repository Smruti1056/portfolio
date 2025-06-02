import { useEffect, useState } from 'react'

// TryHackMe public badges
// For Credly, you need to register for the API and get a token. For now, we use public badge URLs.

export default function BadgeGrid({ tryhackmeUser, credlyUser }) {
  const [thmBadges, setThmBadges] = useState([])
  const [credlyBadges, setCredlyBadges] = useState([])

  // TryHackMe badge images (publicly accessible)
  useEffect(() => {
    if (!tryhackmeUser) return
    setThmBadges([
      {
        name: "TryHackMe Profile",
        img: `https://tryhackme-badges.s3.amazonaws.com/${tryhackmeUser}.png`,
        url: `https://tryhackme.com/p/${tryhackmeUser}`
      }
    ])
  }, [tryhackmeUser])

  // Credly badges via public profile (API requires key, so we fallback to public link)
  useEffect(() => {
    if (!credlyUser) return
    setCredlyBadges([
      {
        name: "See all certifications",
        img: "https://images.credly.com/size/340x340/images/684ba59e-a7a7-4f31-8d2a-2e6a5f6f6c4e/image.png",
        url: `https://www.credly.com/users/${credlyUser}/badges`
      }
    ])
  }, [credlyUser])

  return (
    <div className="grid grid-cols-2 gap-4">
      {thmBadges.map(b => (
        <a href={b.url} key={b.name} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <img src={b.img} alt={b.name} className="w-32 h-32 object-contain" />
          <span className="mt-2 text-center">{b.name}</span>
        </a>
      ))}
      {credlyBadges.map(b => (
        <a href={b.url} key={b.name} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <img src={b.img} alt={b.name} className="w-32 h-32 object-contain" />
          <span className="mt-2 text-center">{b.name}</span>
        </a>
      ))}
    </div>
  )
}