import React from "react";
import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.menuContainer}>
      <ActiveLink href="/" label={"Home"} />
      <ActiveLink href="/about" label={"About"} />
      <ActiveLink href="/contact" label={"Contact"} />
    </nav>
  );
};

export default Navbar;
