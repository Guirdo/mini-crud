import { Outlet } from "react-router-dom";
import MyNavbar from "./Navbar";

export default function Dashboard(){
  return(
    <>
      <MyNavbar/>

      <main className="p-3">
        <Outlet></Outlet>
      </main>
    </>
  )
}