import clsx from "clsx";
import styles from "./profile.module.css";
import discord_icon from "/icon/discord_icon.svg";
import facebook_icon from "/icon/facebook_icon.svg";
import youtube_icon from "/icon/youtube_icon.svg";
import github_icon from "/icon/github_icon.svg";
import tiktok_icon from "/icon/tiktok_icon.svg";
import { useContext, useRef, useState } from "react";
import { UserContext } from "@/context/UserContext";

const Profile = () => {
  const [isStart, setIsStart] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLVideoElement>(null);
  const { user } = useContext(UserContext);
  const socialsLink = [
    {
      link: "https://youtube.com/playlist?list=PLxw8W4bsccNMoLFBByPqWtkSJn7b3wsD4&si=a90plwwkRM33EbF7",
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

  const handlePlay = () => {
    if (videoRef.current && audioRef.current) {
      videoRef.current?.play();
      audioRef.current?.play();
      console.log({ user });
    }
  };

  return (
    <div className={clsx("")}>
      <div
        className={clsx(styles.hidden_background, isStart ? styles.hidden : "")}
        onClick={() => {
          handlePlay();
          setIsStart(true);
        }}
      >
        Click to enter...
      </div>
      <video
        ref={videoRef}
        // autoPlay
        muted
        playsInline
        loop
        // src={""}
        className={clsx(styles.video_background)}
      >
        Your browser does not support the audio element.
        <source src="/music-background/koi_video.mp4" type="video/mp4" />
      </video>
      <audio src="/music-background/laviai.mp3" ref={audioRef} loop></audio>
      {/* <iframe
        ref={iframeRef}
        src="/music-background/laviai.mp3"
        allow="autoplay"
        className="d-none"
        id="iframeAudio"
      ></iframe> */}
      <div className={clsx("rounded-lg grid", styles.center_card)}>
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
        {/* <div className={clsx(styles.typewriter, "my-10")}>
            <h1 className={clsx(styles.cursor, styles.typewriter_animation)}>
              Hello world ! Welcome to {location.hostname}
            </h1>
          </div> */}
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
