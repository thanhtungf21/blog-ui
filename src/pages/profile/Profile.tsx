import clsx from "clsx";
import { useRef, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaVolumeUp,
  FaVolumeMute,
  FaYoutube,
  FaFacebookF,
  FaDiscord,
  FaGithub,
  FaTiktok,
  FaMusic,
  FaHeadphones,
} from "react-icons/fa";

interface SocialLink {
  link: string;
  icon: React.ElementType;
  text: string;
  alt: string;
  color?: string; // Thêm màu đặc trưng cho từng mxh nếu muốn
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
    link: "https://github.com/",
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
  const [volume, setVolume] = useState(0.5);
  const [isVolumeHovered, setIsVolumeHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlay = useCallback(() => {
    if (videoRef.current && audioRef.current) {
      videoRef.current.play().catch((e) => console.log("Video play failed", e));
      audioRef.current.play().catch((e) => console.log("Audio play failed", e));
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const handleVolumeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(event.target.value);
      setVolume(newVolume);
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
        if (newVolume > 0 && audioRef.current.muted) {
          setIsMuted(false);
          audioRef.current.muted = false;
        } else if (newVolume === 0 && !audioRef.current.muted) {
          setIsMuted(true);
          audioRef.current.muted = true;
        }
      }
    },
    []
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
          as="fetch"
          type="video/mp4"
        />
        <link
          rel="preload"
          href={"/music-background/laviai.mp3"}
          as="fetch"
          type="audio/mpeg"
        />
        <title>Tungnt Profile | Bio Link</title>
        <meta
          name="description"
          content="This is Tungnt2 profile, connect with me here."
        />
      </Helmet>

      <div className="relative h-screen w-screen overflow-hidden font-inter text-white bg-black">
        {/* --- Màn hình chờ (Overlay) --- */}
        {/* --- CẢI THIỆN OVERLAY (MÀN HÌNH CHỜ) --- */}
        <div
          className={clsx(
            "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black",
            "transition-all duration-1000 ease-in-out",
            isStart
              ? "opacity-0 invisible pointer-events-none"
              : "opacity-100 visible"
          )}
        >
          {/* Background Gradient mờ ảo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#050505] to-black pointer-events-none"></div>

          {/* --- TRUNG TÂM: LOGO & NÚT BẤM --- */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Glow Effect */}
            <div className="mb-12 relative group">
              <div className="absolute inset-0 bg-blue-600 blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
              <img
                src="/logo/penguin_avatar.png"
                alt="Logo"
                className="w-32 h-32 rounded-full relative z-10 border border-white/10 grayscale opacity-90 shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Nút bấm chính - Minimalist Style */}
            <button
              onClick={() => {
                handlePlay();
                setIsStart(true);
              }}
              className="relative group cursor-pointer"
            >
              {/* Đường viền chạy chạy (Optional: tạo hiệu ứng tech) */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-50 blur group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>

              {/* Nút thực */}
              <div className="relative flex items-center gap-4 px-12 py-5 bg-black rounded-full leading-none border border-white/10 group-hover:border-white/30 transition-colors duration-300">
                <span className="text-xl font-bold tracking-[0.3em] text-white uppercase group-hover:text-blue-100 transition-colors">
                  Enter Space
                </span>
              </div>
            </button>
          </div>

          {/* --- FOOTER CỦA OVERLAY: HEADPHONE BADGE --- */}
          {/* Di chuyển xuống dưới đáy để không tranh chấp với nút bấm */}
          <div className="absolute bottom-12 z-10 animate-bounceIn">
            <div className="flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/5 shadow-lg">
              <div className="relative flex items-center justify-center">
                {/* Sóng nhạc giả lập */}
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-20 delay-75"></span>
                <FaHeadphones className="text-blue-400 text-lg relative z-10" />
              </div>
              <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
                Headphones Recommended
              </span>
            </div>
          </div>
        </div>
        {/* --- HẾT PHẦN OVERLAY --- */}

        {/* --- Video Background --- */}
        <video
          ref={videoRef}
          muted
          playsInline
          loop
          className={clsx(
            "absolute inset-0 w-full h-full object-cover z-0 transition-all duration-1000",
            isStart ? "scale-100 blur-0" : "scale-110 blur-md" // Hiệu ứng zoom nhẹ khi vào
          )}
        >
          <source src="/music-background/koi_video.mp4" type="video/mp4" />
        </video>
        <audio src="/music-background/laviai.mp3" ref={audioRef} loop></audio>

        {/* Lớp phủ tối để nội dung dễ đọc hơn */}
        <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>

        {/* --- Main Profile Card --- */}
        <div
          className={clsx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10",
            "w-[90%] max-w-md p-8 sm:p-10",
            "bg-black/20 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl",
            "flex flex-col items-center text-center",
            "transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)", // Ease out đẹp
            isStart
              ? "opacity-100 translate-y-[-50%] scale-100"
              : "opacity-0 translate-y-[-40%] scale-95"
          )}
        >
          {/* Avatar với hiệu ứng Glow */}
          <div className="relative w-32 h-32 mb-6 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
            <img
              src="/logo/penguin_avatar.png"
              className="relative w-full h-full rounded-full border-4 border-white/10 object-cover z-10 transition-transform duration-500 group-hover:scale-105"
              alt="avatar"
            />
            <img
              src="/logo/angry_1.gif"
              className="absolute top-0 right-0 w-full h-full z-20 drop-shadow-lg"
              alt="border-gif"
            />
          </div>

          {/* Tên và Bio */}
          <div className="mb-8 space-y-2">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-sm">
              Tùng Nguyễn
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium px-3 py-1 bg-white/5 rounded-full border border-white/5 w-fit mx-auto">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-300">Fullstack Developer</span>
            </div>
            <p className="text-gray-200 text-sm max-w-[250px] mx-auto leading-relaxed">
              Welcome to my personal space.
              <br /> Exploring tech & loving penguins 🐧
            </p>
          </div>

          {/* Social Links với hiệu ứng Glass */}
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {socials.map((social, index) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.text}
                className={clsx(
                  "group p-3.5 rounded-2xl transition-all duration-300",
                  "bg-white/5 hover:bg-white/20 border border-white/5 hover:border-white/30",
                  "hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                )}
                style={{ animationDelay: `${index * 100}ms` }} // Stagger animation nếu cần
              >
                <social.icon
                  size={24}
                  className="text-gray-300 group-hover:text-white transition-colors"
                />
              </a>
            ))}
          </div>
        </div>

        {/* --- Enhanced Volume Control Widget --- */}
        {isStart && (
          <div className="fixed bottom-6 right-6 z-50 animate-fadeInUp">
            <div
              className={clsx(
                "flex items-center gap-3 p-2 pr-3 bg-black/40 backdrop-blur-md rounded-full border border-white/10 shadow-xl hover:bg-black/60 transition-all duration-300 group"
              )}
              onMouseEnter={() => setIsVolumeHovered(true)}
              onMouseLeave={() => setIsVolumeHovered(false)}
            >
              {/* Music Icon decoration */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/5">
                <FaMusic
                  className={clsx(
                    "text-xs text-white/70",
                    !isMuted && volume > 0 && "animate-spin-slow"
                  )}
                />
              </div>

              {/* Volume Slider Container - Mở rộng khi hover */}
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-500 ease-out flex items-center",
                  isVolumeHovered
                    ? "max-w-[120px] opacity-100 mr-2"
                    : "max-w-0 opacity-0 mr-0"
                )}
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white hover:accent-blue-400"
                />
              </div>

              {/* Mute Toggle Button */}
              <button
                onClick={toggleMute}
                title={isMuted ? "Unmute" : "Mute"}
                className="text-white/80 hover:text-white focus:outline-none transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <FaVolumeMute size={20} />
                ) : (
                  <FaVolumeUp size={20} />
                )}
              </button>
            </div>
          </div>
        )}

        {/* Copyright footer nhỏ */}
        {isStart && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/20 text-xs z-10 animate-fadeIn">
            © {new Date().getFullYear()} Tung Nguyen
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
