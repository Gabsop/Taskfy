import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserTodos from "../pages/UserTodos";
import "../styles/global.css";

const MainRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos/:id" element={<UserTodos />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainRoutes;