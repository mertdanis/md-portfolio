import React from "react";

function Header() {
  return (
    <header>
      <ul className="flex gap-6 mt-6">
        <li>
          <a href="#about">Hakkımda</a>
        </li>
        <li>
          <a href="#projects">Projeler</a>
        </li>
        <li>
          <a href="#contact">İletişim</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
