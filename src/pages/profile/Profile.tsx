import clsx from "clsx";
import { useContext, useRef, useState, useCallback } from "react";
import { UserContext } from "@/context/UserContext";
import { Helmet } from "react-helmet-async";
import {
  FaVolumeUp,
  FaVolumeMute,
  FaYoutube,
  FaFacebookF,
  FaDiscord,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";

interface SocialLink {
  link: string;
  icon: React.ElementType; // Thay đổi từ string sang React.ElementType
  text: string;
  alt: string; // Thêm alt text cụ thể
}

const socials: SocialLink[] = [
  {
    link: "https://youtube.com/playlist?list=PLxw8W4bsccNMoLFBByPqWtkSJn7b3wsD4&si=a90plwwkRM33EbF7",
    icon: FaYoutube,
    text: "My YouTube Playlist",
    alt: "YouTube",
  },
  {
    link: "https://www.facebook.com/",
    icon: FaFacebookF,
    text: "My Facebook Profile",
    alt: "Facebook",
  },
  {
    link: "https://discord.com/",
    icon: FaDiscord,
    text: "Join our Discord",
    alt: "Discord",
  },
  {
    link: "https://github.com/thanhtungf21",
    icon: FaGithub,
    text: "My GitHub Profile",
    alt: "GitHub",
  },
  {
    link: "https://www.tiktok.com/",
    icon: FaTiktok,
    text: "My TikTok Channel",
    alt: "TikTok",
  },
];
const Profile = () => {
  const [isStart, setIsStart] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.5); // Giá trị âm lượng ban đầu (0.0 đến 1.0)
  const [isVolumeHovered, setIsVolumeHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const { user } = useContext(UserContext);
  const handlePlay = useCallback(() => {
    if (videoRef.current && audioRef.current) {
      videoRef.current?.play();
      audioRef.current?.play();
      if (audioRef.current) {
        // Đảm bảo audioRef đã được gán
        audioRef.current.volume = volume;
        audioRef.current.muted = isMuted; // Áp dụng trạng thái mute ban đầu
      }
      // console.log({ user });
    }
  }, [user, volume, isMuted]);

  const handleVolumeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
        // Automatically unmute if volume is turned up, or mute if volume is 0
        if (newVolume > 0 && audioRef.current.muted) {
          setIsMuted(false);
          audioRef.current.muted = false;
        } else if (newVolume === 0 && !audioRef.current.muted) {
          setIsMuted(true);
          audioRef.current.muted = true;
        }
      }
    },
    [] // isMuted is not needed here as we derive it from newVolume
  );

  const toggleMute = useCallback(() => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    if (audioRef.current) {
      audioRef.current.muted = newMutedState;
    }
  }, [isMuted]);

  return (
    <>
      <Helmet>
        <link
          rel="preload"
          href={"/music-background/koi_video.mp4"}
          as="video"
          type="video/mp4"
        />
        <link
          rel="preload"
          href={"/music-background/laviai.mp3"}
          as="audio"
          type="audio/mpeg"
        />
      </Helmet>
      <div className={clsx("")}>
        <div
          className={clsx(
            "fixed top-0 left-0 h-screen w-screen z-10 cursor-pointer bg-white/[.952] text-black/35 font-medium flex items-center justify-center transition-all duration-300", // Tailwind classes for hidden_background
            isStart
              ? "opacity-0 pointer-events-none animate-fadeOut"
              : "opacity-100",
            "font-bold text-2xl" // Removed redundant text-white, flex, items-center, justify-center, cursor-pointer, transition-opacity as they are covered or handled by animation
          )}
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
          className={clsx("h-screen w-screen object-cover fixed left-0 top-0")} // Tailwind classes for video_background
        >
          Your browser does not support the audio element.
          <source src="/music-background/koi_video.mp4" type="video/mp4" />
        </video>
        <audio src="/music-background/laviai.mp3" ref={audioRef} loop></audio>

        <div
          className={clsx(
            "rounded-lg grid",
            "w-[40vw] min-h-[40vh] fixed left-[30vw] top-[20vh] p-2.5 bg-black/35 shadow-[0_5px_15px_rgba(0,0,0,0.35)]", // Tailwind classes for center_card
            "max-sm:w-[90vw] max-sm:top-[30vh] max-sm:left-[5vw] max-sm:right-[5vw]", // Responsive classes for center_card
            isStart ? "opacity-100 animate-fadeInUp" : "opacity-0" // Ban đầu ẩn, sau đó fade in up
          )}
        >
          <div className="flex justify-center items-center">
            <div className="w-[100px] h-[100px] relative">
              {" "}
              {/* Tailwind classes for avatar_frame */}
              <img
                src="/logo/penguin_avatar.png"
                className="w-[100px] h-[100px] rounded-full" // Tailwind classes for avatar_content
                alt=""
              />
              <img
                src="/logo/angry_1.gif"
                className={clsx(
                  "w-[100px] h-[100px] z-10 absolute left-0 top-0"
                )} // Tailwind classes for avatar_decor
                alt=""
              />
            </div>
          </div>

          {/* Social Links Section */}
          <div className="mt-8 pt-4">
            {" "}
            {/* Ví dụ: thêm đường kẻ phân cách và padding top */}
            <div className="flex justify-center items-center gap-4">
              {" "}
              {/* Có thể tăng gap một chút */}
              {socials.map(
                (
                  social // Sử dụng social.link làm key nếu nó là duy nhất
                ) => (
                  <a
                    key={social.link} // Sử dụng link làm key
                    target="blank"
                    title={social.text}
                    href={social.link}
                    className="text-gray-300 hover:text-white transition-colors duration-200" // Hiệu ứng màu cho toàn bộ link
                  >
                    <social.icon
                      size={28} // Kích thước icon, bạn có thể điều chỉnh
                      className="transition-transform duration-200 ease-in-out hover:scale-110"
                      aria-label={social.alt} // Thêm aria-label cho accessibility
                    />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        {/* Thanh điều chỉnh âm lượng */}
        {isStart && (
          <div
            onMouseEnter={() => setIsVolumeHovered(true)}
            onMouseLeave={() => setIsVolumeHovered(false)}
            className={clsx(
              "fixed bottom-4 left-4 p-3 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg z-50 flex items-center transition-all duration-300 ease-in-out"
            )}
          >
            <button
              onClick={toggleMute}
              title={isMuted ? "Unmute" : "Mute"}
              className={clsx(
                "w-6 h-6  fill-white", // fill-white nếu SVG của bạn hỗ trợ
                "text-white p-1 focus:outline-none",
                isVolumeHovered && "mr-2" // Thêm khoảng cách nếu hover
              )}
            >
              {isMuted || volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
            <div
              className={clsx(
                "transition-all duration-300 ease-in-out overflow-hidden",
                isVolumeHovered ? "w-24 md:w-32 opacity-100" : "w-0 opacity-0"
              )}
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className={clsx(
                  // Tailwind classes for volume_slider (cursor is default for range)
                  "w-full accent-indigo-500 align-middle" // w-full để nó chiếm hết div cha, align-middle
                )}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Profile;
