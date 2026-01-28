// import Home from "./components/dashboard/Home"
import { Outlet } from "react-router"
import Header from "./components/shared/Header"
import Sidebar from "./components/shared/Sidebar"


const App = () => {
  return (
    <div>
      <Header />
      <div className=" mx-4 md:ml-70 md:mr-6 mt-24">
        <Outlet />
      </div>
      <Sidebar />
    </div>
  )
}

export default App
