import React, { useState, useEffect } from "react";
import LogoConfig from "../constants/LogoConfig";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import { HeaderItems } from "../constants/Data";

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hideHeader, setHideHeader] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleFullMenu = () => {
        closeMobileMenu();
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            const viewportHeight = window.innerHeight;
            setScrollPosition(scrollTop);
            setHideHeader(scrollTop > viewportHeight * 0.3);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="pt-[16px] pb-[16px] px-[16px] bg-white w-full transition-transform duration-300">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
                            <img
                                src={LogoConfig.src}
                                alt={LogoConfig.alt}
                                className="w-[260px] h-[65px] object-cover"
                            />
                        </Link>

                        <div className="lg:block hidden">
                            <div className="flex gap-[10px] items-center">
                                <div className="flex">
                                    {HeaderItems.map((item, index) => {
                                        const isActive = location.pathname === item.path;

                                        return (
                                            <Link
                                                key={index}
                                                to={item.path}
                                                className={`py-[15px] xl:px-[20px] lg:px-[8px] px-[20px] font-medium items-center flex gap-[48px] text-[20px] leading-[26px] 
                          ${isActive ? "text-[#DA0C16]" : "text-[#111116]"
                                                    } hover:text-[#DA0C16]`}
                                            >
                                                <p
                                                    className={`cursor-pointer text-[20px] font-Barlow 
                            ${isActive ? "text-[#DA0C16]" : "text-[#111116]"
                                                        } hover:text-[#DA0C16]`}
                                                >
                                                    {item.label}
                                                </p>
                                            </Link>
                                        );
                                    })}
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex gap-[12px] items-center lg:hidden">
                            <div className="flex justify-start h-full w-full">
                                <button
                                    className="text-black text-[36px]"
                                    onClick={toggleMobileMenu}
                                    aria-label="Open menu"
                                >
                                    {isMobileMenuOpen ? <IoCloseOutline /> : <IoIosMenu />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`fixed lg:hidden block top-0 left-0 h-full bg-[#0E0B44] z-20 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } md:w-1/2 w-[64%]`}
            >
                <MobileMenu closeMobileMenu={toggleMobileMenu} />
            </div>
        </>
    );
  
}

export default Header;
