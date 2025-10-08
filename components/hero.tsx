import Image from "next/image"
import SocialButtons from "@/components/socialButtons"
import { About, profilePic, siteOwner } from "@/config"

export default function Hero() {
  return (
    <div className="hero min-h-[50vh] pb-24">
      <div className="hero-content w-full flex-col md:flex-row-reverse">
        {/* Image section */}
        {profilePic && (
          <div className="flex w-full justify-center md:w-3/5">
            <Image
              src={profilePic}
              alt={siteOwner}
              className="h-70 w-70 rounded-full object-cover shadow-2xl"
              width={10000}
              height={0}
              priority
            />
          </div>
        )}

        {/* About section */}
        <div className="w-full rounded-2xl shadow-xl">
          <About />

          {/* Socials */}
          <div className="my-2">
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  )
}
