// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "./components/HomeLayout.jsx";
import LoginLayout from "./components/LoginLayout.jsx";
import SignupLayout from "./components/SignupLayout.jsx";
import Timetable from "./components/Dashboard.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AddClassroomLayout from "./components/AddClassroomLayout.jsx";
import AddTeacherLayout from "./components/AddTeacherLayout.jsx";
import ShowTeachers from "./components/ShowTeachers.jsx";
let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "login",
        element: <LoginLayout />,
      },
      {
        path: "signup",
        element: <SignupLayout />,
      },
      {
        path: "timetable",
        element: <Dashboard />,
      },
      {
        path: "addclassroom",
        element: <AddClassroomLayout />,
      },
      {
        path: "addteachers",
        element: <AddTeacherLayout />,
      },
      {
        path: "showteachers",
        element: <ShowTeachers />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>
);
