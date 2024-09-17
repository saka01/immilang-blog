"use client";

import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown,Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";


const ImmilangNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
		<>
			<nav className="fixed left-0 right-0 top-0 z-50 h-16 bg-blue-400 px-4 shadow-lg hover:shadow-md">
				<div className="container mx-auto flex h-full items-center justify-between">
					{/* Logo Section */}
					<Link href="https://www.immilang.com" className="flex gap-2">
						<Image
							className="h-8 w-auto object-contain lg:h-10"
							src={'/assets/transparentlogo.png'}
							width={40}
							height={40}
							alt={'ImmiLang Logo'}
							loading="lazy"
						/>
						<p className="mt-1 text-xl font-bold text-white md:text-3xl lg:text-3xl xl:text-3xl">
							ImmiLang
						</p>
					</Link>

					{/* Hamburger Icon */}
					<div className="flex items-baseline lg:hidden ">
						<button onClick={toggleMenu} className="text-xl font-bold focus:outline-none">
							<Menu color="white" />
						</button>
					</div>

					{/* Navigation Menu */}
					<div
						className={`${
							isOpen ? 'flex' : 'hidden'
						} fixed inset-0 top-16 z-50 flex-col items-center justify-center bg-blue-400 lg:static lg:flex lg:w-full lg:flex-row lg:justify-between lg:bg-transparent`}
					>
						{/* Main navigation links */}
						<div className="lg:flex-1"></div> {/* Spacer */}
						<div className="flex flex-col items-center lg:flex-1 lg:flex-row lg:items-center lg:justify-center">
							<Link
								href="https://www.immilang.com"
								className={`${menuItemStyles}`}
								onClick={closeMenu}
							>
								Home
							</Link>
							<Link
								href="https://www.immilang.com/copilot"
								className={`${menuItemStyles} text-nowrap`}
								onClick={closeMenu}
							>
								NEW! Co-Pilot
							</Link>

							<DropdownMenu>
								<DropdownMenuTrigger className={`${menuItemStyles} flex items-center`}>
									Tools <ChevronDown className="ml-1 h-4 w-4" />
								</DropdownMenuTrigger>
								<DropdownMenuContent className="bg-muted w-fit rounded-lg p-4">
									<DropdownMenuItem className={dropdownMenuItemStyles}>
										<Link
											href="https://www.immilang.com/copilot"
											className="w-full"
											onClick={closeMenu}
										>
											USE! AI Co-Pilot
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem className={dropdownMenuItemStyles}>
										<Link
											href="https://www.immilang.com/explore"
											className="w-full"
											onClick={closeMenu}
										>
											Find A Verified Consultant
										</Link>
									</DropdownMenuItem>
									<DropdownMenuItem className={dropdownMenuItemStyles}>
										<Link
											href="https://ircc.canada.ca/english/immigrate/skilled/crs-tool.asp"
											className="w-full"
											onClick={closeMenu}
										>
											CRS Calculator
										</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<Link href="/" className={`${menuItemStyles}`} onClick={closeMenu}>
								Blog
							</Link>

							<Link href="/newsletter" className={`${menuItemStyles}`} onClick={closeMenu}>
								NewsLetter
							</Link>
						</div>
					</div>
				</div>
			</nav>
			<div className="h-16"></div>
		</>
	);
};

const menuItemStyles =
  "underline focus:bg-blue-300 text-white px-6 sm:text-sm p-2 hover:bg-blue-400 rounded-full";

const dropdownMenuItemStyles = " p-2 rounded-lg hover:bg-blue-400 text-sm";

export default ImmilangNav;