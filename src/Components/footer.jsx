import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#101111] text-white">
      {/* <div className="py-10">
        <p className="text-center text-sm text-gray-400">
          Built with ❤️ by Rashmika Perera
        </p>
      </div> */}
      <div className="sm-screen flex flex-col py-2">
        <div className="text-center gap-4">
          <p className="text-white font-light">
            © 2025 Hand-coded by{" "}
            <span className="text-[#04AA6D] font-semibold">
              Rashmika Perera
            </span>
            , with Care & Caffeine ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
