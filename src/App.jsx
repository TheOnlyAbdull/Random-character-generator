import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RandomUser from "./Pages/RandomUser";

const router = createBrowserRouter([
  {
    path : "/",
    element: <HomePage/>
  },
  {
    path: "RandomUser",
    element: <RandomUser/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
