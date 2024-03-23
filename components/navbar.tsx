// imports
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar({}): any {
  return (
    <nav className="w-full backdrop-blur-mdbg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/" className="flex items-center gap-2">
        <Image
          alt="logo"
          className="cursor-pointer rounded-md"
          src="/images/picswap.svg"
          height={30}
          width={30}
        />

        <p>Pic-Swap</p>
      </Link>

      {/* <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">Home</Link>
        </Button>
      </div> */}
      <Link href="https://nrshagor.com/" target="_blank">
        <Button
          variant="default"
          className="rounded-full w-fit bg-[#8b18f1] gap-2 items-center hidden md:flex"
          size="lg"
        >
          <span>Portfolio</span>
          <span className="text-xl"></span>
        </Button>
      </Link>
    </nav>
  );
}
