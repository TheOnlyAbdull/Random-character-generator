import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RandomUser, {loader as profileLoader} from "./Pages/RandomUser";

const router = createBrowserRouter([
  {
    path : "/",
    element: <HomePage/>
  },
  {
    path: "RandomUser",
    element: <RandomUser/>,
    loader: profileLoader,
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
