// import clsx from "clsx";
// import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div
        className={
          "container mx-auto py-3 text-center text-gray-100 text-sm md:text-md"
        }
      >
        Copyright © {new Date().getFullYear()} TungNT. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
