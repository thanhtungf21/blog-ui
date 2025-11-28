// src/pages/landing/components/LandingHeader.tsx
import { useState, useEffect } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react";
import clsx from "clsx";
import blackLogo from "@/assets/imgs/logo/logo_black.png";
import whiteLogo from "@/assets/imgs/logo/logo_white.png";

const LandingHeader = () => {
  const navigate = useNavigate();
  const lenis = useLenis(); // Hook để điều khiển cuộn
  const [isScrolled, setIsScrolled] = useState(false);

  const textCss = isScrolled ? "text-gray-900" : "text-white";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id, { offset: -80 }); // Offset để trừ chiều cao header
    } else {
      // Fallback nếu Lenis chưa load kịp
      const element = document.querySelector(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Tính năng", id: "#features" },
    { label: "Profile", id: "#profile-showcase" },
    { label: "Cách hoạt động", id: "#how-it-works" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
        isScrolled
          ? "py-3 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => lenis?.scrollTo("#hero")}
        >
          <img
            src={isScrolled ? blackLogo : whiteLogo}
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span
            className={clsx(
              "text-xl font-bold transition-colors hidden md:block",
              textCss
            )}
          >
            Fe2b Blog
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-blue-500",
                isScrolled ? "text-gray-600" : "text-gray-300!"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            type="text"
            color="default"
            className={clsx(
              "font-medium",
              isScrolled ? "text-gray-600" : "text-white!"
            )}
            onClick={() => navigate("/login")}
          >
            Đăng nhập
          </Button>
          <Button
            type="primary"
            className="bg-blue-600 hover:!bg-blue-500 border-none font-semibold shadow-lg shadow-blue-500/30"
            onClick={() => navigate("/register")}
          >
            Bắt đầu ngay
          </Button>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
