import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="Irefam__Navbar-Container">
        <div className="Irefam__Navbar-Logo">
          <img src="" alt="Irefam Logo" />
        </div>
        <div className="Irefam__Navbar-Links">
          <ul>
            <li>Nosotros</li>
            <li>Admisiones</li>
            <li>Programas</li>
            <li>Alumnos</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
