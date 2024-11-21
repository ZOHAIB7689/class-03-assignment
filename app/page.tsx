import Home from "./home/page";
import Link from "next/link";
export default function child() {
  return (<div className="flex justify-evenly items-center h-screen flex-col lg:flex-row">
    <Link href={"/home"}>
    <div className="text-3xl rounded-lg p-5 hover:shadow-lg hover:shadow-pink-300/30 duration-200 hover:scale-105">
   Home    </div></Link>
   
    <Link href={"/about"}>
    <div className="text-3xl p-5 rounded-lg hover:shadow-lg hover:shadow-teal-300/30 duration-200 hover:scale-105">
   About </div></Link>
    <Link href={"/navbar"}>
    <div className="text-3xl p-5 rounded-lg hover:shadow-lg hover:shadow-sky-300/30 duration-200 hover:scale-105">
   Navbar  </div></Link>
<Link href={"/contact"}>
    <div className="text-3xl p-5 rounded-lg hover:shadow-lg hover:shadow-rose-300/30 duration-200 hover:scale-105">
   Contact </div></Link>
<Link href={"/footer"}>
    <div className="text-3xl p-5 rounded-lg hover:shadow-lg hover:shadow-amber-300/30  duration-200 hover:scale-105">
   Footer </div></Link>




  </div>  
  );
}
