import clsx from "clsx";
import styles from "./profile.module.css";
import discord_icon from "/icon/discord_icon.svg";
import facebook_icon from "/icon/facebook_icon.svg";
import youtube_icon from "/icon/youtube_icon.svg";
import github_icon from "/icon/github_icon.svg";
import tiktok_icon from "/icon/tiktok_icon.svg";
import { useEffect, useRef } from "react";

const Profile = () => {
  const socialsLink = [
    {
      link: "https://www.youtube.com/",
      image: youtube_icon,
      text: "",
    },
    {
      link: "https://www.facebook.com/",
      image: facebook_icon,
      text: "",
    },
    {
      link: "https://discord.com/",
      image: discord_icon,
      text: "",
    },
    {
      link: "https://github.com/thanhtungf21",
      image: github_icon,
      text: "",
    },
    {
      link: "https://www.tiktok.com/",
      image: tiktok_icon,
      text: "",
    },
  ];

  const iframeRef: React.RefObject<null> = useRef(null);

  useEffect(() => {
    // const iframe: any = iframeRef.current;
    // if (iframe) {
    //   iframe.onload = () => {
    //     try {
    //       iframe.contentWindow.postMessage("play", "*");
    //     } catch (error) {
    //       console.error("Autoplay failed:", error);
    //     }
    //   };
    // }

    window.addEventListener("message", (event) => {
      const audio: any = document.getElementById("iframeAudio");
      if (audio && event.data === "play") {
        audio.play();
      }
    });
  }, []);

  return (
    <div className={clsx("")}>
      <video
        autoPlay
        muted
        loop
        // src={""}
        className={clsx(styles.video_background)}
      >
        <source src="/music-background/goku2.mp4" type="video/mp4" />
      </video>
      <iframe
        ref={iframeRef}
        src="/music-background/laviai.mp3"
        allow="autoplay"
        className="d-none"
        id="iframeAudio"
      ></iframe>
      <div
        className={clsx(
          "max-w-sm rounded-lg overflow-hidden bg-black-500 shadow-lg shadow-black-500/50 p-8",
          styles.center_card
        )}
      >
        <div className="flex justify-center items-center">
          <div className={styles.avatar_frame}>
            <img
              src="/logo/penguin_avatar.png"
              className={styles.avatar_content}
              alt=""
            />
            <img
              src="/logo/angry_1.gif"
              className={clsx(styles.avatar_decor)}
              alt=""
            />
          </div>
        </div>
        <div className={clsx(styles.typewriter, "mt-10")}>
          <h1 className={clsx(styles.cursor, styles.typewriter_animation)}>
            Hello world ! Welcome to {location.hostname}
          </h1>
        </div>
        <div className="mt-6 flex justify-center items-center gap-3">
          {socialsLink.map((social, index) => (
            <a
              key={index}
              target="blank"
              title={social.text || social.link}
              href={social.link}
            >
              <img
                src={social.image}
                className={clsx(styles.social_icon)}
                alt="youtube"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
