import clsx from "clsx";
import styles from "./error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className={clsx(
        styles.error_page,
        "flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4"
      )}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-9xl font-extrabold text-indigo-600 mb-[30px]">
          Oops!
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2">
          Trang không tồn tại
        </p>
        <p className="text-md md:text-lg text-gray-600 mb-8">
          Có vẻ như bạn đã đi vào một đường dẫn không có thật. Đừng lo, hãy quay
          lại nhé!
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          Về Trang Chủ
        </Link>
      </div>
    </div>
  );
};

export default Error;
