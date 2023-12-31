import Image from "next/image";
import React from "react";
import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex items-center justify-between gap-6">
      <a href="https://twitter.com" target="_blank">
        <Image
          alt="twitter"
          src={Twitter}
          width={20}
          height={20}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
        />
      </a>
      <a href="https://facebook.com" target="_blank">
        <Image
          alt="facebook"
          src={Facebook}
          width={20}
          height={20}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
        />
      </a>
      <a href="https://instagram.com" target="_blank">
        <Image
          alt="instagram"
          src={Instagram}
          width={20}
          height={20}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
        />
      </a>
      <a href="https://google.com" target="_blank">
        <Image
          alt="google"
          src={Google}
          width={20}
          height={20}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
        />
      </a>
      <a href="https://discord.com" target="_blank">
        <Image
          alt="discord"
          src={Discord}
          width={20}
          height={20}
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
