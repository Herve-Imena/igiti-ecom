"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";


const links = [
    { name: "Home", href: "/" },
    { name: "Kids", href: "/Kids" },
    { name: "Advanced", href: "/Advanced" },
  ];

const Navbar = () => {

  const pathname = usePathname();

  

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
      <Link href="/" className="flex items-center space-x-4">
      
      <Image
        src='/logo.svg' 
        alt="logo"
        className="object-contain"
        width={90} 
        height={90}
        priority
      />
      <h1 className="text-2xl md:text-4xl font-bold">
        Igiti<span className="text-primary">ecom</span>
      </h1>
    </Link>


        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar