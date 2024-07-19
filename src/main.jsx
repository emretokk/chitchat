import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatScreen from "./pages/chatScreen/Home";

import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App socket={socket} />,
  },
  {
    path: "chat",
    element: <ChatScreen socket={socket} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
