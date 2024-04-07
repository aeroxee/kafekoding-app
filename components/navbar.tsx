"use client";

import Image from "next/image";

import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import LoginDialog from "./login-dialog";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const pathname = usePathname();

  const sideNavRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    window.onscroll = () => {
      if (window.scrollY > 60) {
        navRef.current?.classList.add("border-b");
      } else {
        navRef.current?.classList.remove("border-b");
      }
    };
  });

  useEffect(() => {
    if (!sideNavRef.current) return;

    // handle click outside
    const handleClickOutside = (e: Event) => {
      if (!sideNavRef.current?.contains(e.target as Element)) {
        setShow(false);
      }
    };

    document.documentElement.addEventListener("click", handleClickOutside);
  });

  return (
    <>
      {pathname.startsWith("/register") || pathname.startsWith("/login") ? (
        ""
      ) : (
        <nav
          ref={navRef}
          className="fixed z-20 top-0 left-0 right-0 w-full p-3 bg-background/70 filter backdrop-blur-lg"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="logo kafekoding"
                  width={25}
                  height={25}
                />
                <span className="text-sky-700 font-extrabold">Kafe Koding</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="md:hidden">
                  <ModeToggle />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setShow(true)}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div
              ref={sideNavRef}
              className={`flex items-start md:items-center flex-col md:flex-row gap-5 md:gap-0 absolute md:static top-0 ${
                show ? "left-0" : "-left-[1000px]"
              } p-5 md:p-0 bg-background md:bg-inherit w-[50%] md:w-auto min-h-screen md:min-h-0 border-r md:border-r-0 transition-all duration-200 ease-in-out`}
            >
              <div className="md:hidden flex items-center justify-between w-full">
                <span className="text-xl font-extrabold text-sky-700">
                  Kafe Koding
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setShow(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex items-start md:items-center flex-col md:flex-row gap-4 md:me-10">
                <Link
                  href="/"
                  className="font-normal text-gray-500 hover:text-sky-600"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="font-normal text-gray-500 hover:text-sky-600"
                >
                  Tentang Kami
                </Link>
                <Link
                  href="#classLists"
                  className="font-normal text-gray-500 hover:text-sky-600"
                >
                  Kelas
                </Link>
                <Link
                  href="#articles"
                  className="font-normal text-gray-500 hover:text-sky-600"
                >
                  Blog
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden md:block">
                  <ModeToggle />
                </div>
                <Link href="/register" legacyBehavior>
                  <Button variant="outline">Daftar</Button>
                </Link>
                <div className="w-[1px] h-[40px] border"></div>
                <LoginDialog />
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
