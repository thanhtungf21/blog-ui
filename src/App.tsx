import "./App.css";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      {/* Các route con được định nghĩa trong createBrowserRouter sẽ được render ở đây */}
      <Outlet />
    </UserProvider>
  );
}

export default App;
