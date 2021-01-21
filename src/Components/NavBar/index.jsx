import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://www.fleet.co">
          <img
            src="https://res.cloudinary.com/secretsaas/image/upload/c_pad,f_auto,q_auto/v1591200519/logo/Fleet.png"
            alt="Fleet simplifie la location, la gestion et le renouvellement d'ordinateurs portables et fixes pour votre entreprise."
            width="112"
            height="28"
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
