"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Brand",
    href: "/brand",
    items: [
      {
        title: "Sarah",
        href: "/brand/sarah",
        description: "Quality food products for your family",
      },
      {
        title: "Nippon Oil",
        href: "/brand/nippon-oil",
        description: "Pure and natural groundnut oil",
      },
    ],
  },
  {
    title: "Find a Retailer",
    href: "/find-retailer",
  },
  {
    title: "Partner with Us",
    href: "/partner",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

// Login menu item is separate so we can conditionally show it
const loginMenuItem = {
  title: "Login",
  href: "/admin/login",
}

export function MainNav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  
  // Check if current path is blog or blog related
  const isBlogPage = pathname === '/blog' || pathname.startsWith('/blog/')

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#28406c] text-white backdrop-blur supports-[backdrop-filter]:bg-[#28406c]/95">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/nippon_logo.png"
                alt="Nippon Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isMobileMenuOpen ? "hidden" : "block h-6 w-6"}
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isMobileMenuOpen ? "block h-6 w-6" : "hidden"}
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu className="text-white">
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.items ? (
                      <>
                        <NavigationMenuTrigger className="text-base font-normal text-white hover:text-white/80 focus:text-white/80 transition-all duration-200 bg-transparent hover:bg-white/10 focus:bg-white/10">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50 bg-[#28406c]">
                          <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 text-white hover:text-white/80 focus:bg-white/10 focus:text-white/80",
                                      pathname === subItem.href && "bg-white/10 text-white"
                                    )}
                                  >
                                    <div className="text-base font-medium leading-none">
                                      {subItem.title}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-white/70 mt-1">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(
                            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-normal transition-colors hover:bg-white/10 hover:text-white/80 focus:bg-white/10 focus:text-white/80 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10",
                            pathname === item.href 
                              ? "text-white bg-white/10" 
                              : "text-white hover:text-white/80"
                          )}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
                
                {/* Conditionally show Login button on blog pages */}
                {isBlogPage && (
                  <NavigationMenuItem>
                    <Link href={loginMenuItem.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-base font-normal transition-colors hover:bg-white/10 hover:text-white/80 focus:bg-white/10 focus:text-white/80 disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-white/10 data-[state=open]:bg-white/10",
                          pathname === loginMenuItem.href 
                            ? "text-white bg-white/10" 
                            : "text-white hover:text-white/80"
                        )}
                      >
                        {loginMenuItem.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} py-4`}>
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.items ? (
                  <div className="space-y-2">
                    <div className="font-normal px-3 text-white">{item.title}</div>
                    <div className="pl-4 border-l-2 border-white/20 ml-3 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className={cn(
                            "block py-2 text-sm hover:text-white/80",
                            pathname === subItem.href ? "text-white font-medium" : "text-white/70"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-2 px-3 font-normal hover:text-white/80 transition-colors",
                      pathname === item.href ? "text-white" : "text-white/90"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Conditionally show Login button on blog pages in mobile menu */}
            {isBlogPage && (
              <Link
                href={loginMenuItem.href}
                className={cn(
                  "block py-2 px-3 font-normal hover:text-white/80 transition-colors",
                  pathname === loginMenuItem.href ? "text-white" : "text-white/90"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {loginMenuItem.title}
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
} 