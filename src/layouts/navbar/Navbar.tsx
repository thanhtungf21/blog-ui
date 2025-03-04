import clsx from "clsx";
import styles from "./navbar.module.css";
import NavbarMenu from "./navbar-menu/NavbarMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={clsx(styles.navbar)}>
      <div className={clsx(styles.navbar_content, "container mx-auto")}>
        <div className="flex flex-row justify-between items-center py-1">
          <Link to={"/"}>
            <img
              src="/logo/logo.png"
              className={clsx(styles.navbar_logo)}
              alt="logo"
            />
          </Link>
          <div>
            <NavbarMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
