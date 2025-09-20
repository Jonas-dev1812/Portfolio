import React from "react";

export default function NavBarContent() {
  return (
    <div className="relative z-20 w-full h-full flex items-center justify-center gap-8">
      <a href="#" className="hover:text-tigel-400">
        Home
      </a>
      <a href="#" className="hover:text-tigel-400">
        Über
      </a>
      <a href="#" className="hover:text-tigel-400">
        Projekte
      </a>
      <a href="#" className="hover:text-tigel-400">
        Kontakt
      </a>
    </div>
  );
}
