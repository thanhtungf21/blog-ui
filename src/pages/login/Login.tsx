import { useContext, useState } from "react";
import styles from "./login.module.css";
import clsx from "clsx";
import { UserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

interface loginFormTypes {
  email: string;
  password: string;
}

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [loginForm, setLoginForm] = useState<loginFormTypes>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleUser = async (event: any) => {
    event.preventDefault();
    if (!loginForm.email.length || !loginForm.password.length) {
      toast("Please enter email/password", {
        type: "error",
      });
      return;
    }
    try {
      setUser(loginForm);
      toast("Login so easy!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <div
      className={clsx(styles.login_pages, "flex align-center justify-center")}
    >
      <ToastContainer />
      <div className={clsx(styles.login_form)}>
        <h2 className={clsx("text-center text-3xl font-bold mb-6")}>
          Welcome, please enter to login !
        </h2>
        <form onSubmit={handleUser}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter email"
              className="input w-full"
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter password"
              className="input w-full"
              onChange={(e) =>
                setLoginForm((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <button className="btn w-full">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
