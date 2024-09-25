import Link from "next/link"
import MaxWidthWrapper from "./maxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Toggletheme from "./Toggeltheme"

const Navbar = () => {
 const user = false
 const isAdmin = false

 return (
  <nav className=" sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 dark:border-gray-900  bg-white/30 dark:bg-indigo-950/30 backdrop-blur-lg transition-all">
   <MaxWidthWrapper>
    <div className=" flex h-14 items-center justify-between ">
     <div className=" flex gap-4 items-center justify-center">
      <Link href={"/"} className=" flex z-40 font-extrabold text-lg text-gray-500 dark:text-gray-50">
       case <span className=" text-violet-600 "> cobra</span>
      </Link>
      <Toggletheme />
     </div>
     <div className=" h-full flex items-center space-x-4 *:text-gray-900 *:dark:text-gray-50 *:font-bold">
      {user ? (
       <>
        <Link href={"/api/auth/logout"}
         className={buttonVariants({ size: "sm", variant: "ghost" })}>
         Sign out
        </Link>
        {isAdmin ? (
         <Link href={"/api/auth/logout"}
          className={buttonVariants({ size: "sm", variant: "ghost" })}>
          Dashboard ✨
         </Link>
        ) : null}
        {/* <Link href={"/configure/upload"}
         className={buttonVariants({ size: "sm", className: " hidden sm:flex items-center gap-1" })}>
         Create case
         <ArrowRight className=" ml-1.5 h-5 w-5" />
        </Link> */}
        <Link href={"/configure/upload"} className=" btn btn-sm btn-outline hidden sm:flex">
         Create case
         <ArrowRight className=" ml-1.5 h-5 w-5" />
        </Link>
       </>
      ) : (
       <>
        <Link href={"/api/auth/register"}
         className={buttonVariants({ size: "sm", variant: "ghost" })}>
         Sign up
        </Link>
        <Link href={"/api/auth/login"}
         className={buttonVariants({ size: "sm", variant: "ghost" })}>
         Login
        </Link>
        <div className=" h-8 w-px bg-zinc-200 hidden sm:block" />
        {/* <Link href={"/configure/upload"}
         className={buttonVariants({ size: "sm", className: " !text-gray-50 hidden sm:flex items-center gap-1" })}>
         Create case
         <ArrowRight className=" ml-1.5 h-5 w-5" />
        </Link> */}
        <Link href={"/configure/upload"} className=" btn btn-sm btn-outline hidden sm:flex">
         Create case
         <ArrowRight className=" ml-1.5 h-5 w-5" />
        </Link>
       </>)}
     </div>
    </div>
   </MaxWidthWrapper>
  </nav>
 )
}

export default Navbar
