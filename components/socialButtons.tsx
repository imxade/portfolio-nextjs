import parse from "html-react-parser"
import { getSocials, type socialsType } from "@/config"

export default function SocialButtons() {
  const socials: socialsType[] = getSocials({ exclude: "Mail" })

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 p-2 sm:grid-cols-4">
      {socials.map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline justify-space-between gap-3"
        >
          <span className={social.class ?? ""}>{parse(social.icon)}</span>
          <p>{social.display}</p>
        </a>
      ))}
    </div>
  )
}
