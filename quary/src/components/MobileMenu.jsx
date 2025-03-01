import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderItems} from "../constants/Data";

const MobileMenu = ({ closeMobileMenu }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState("home");

    const handleScroll = (section) => {
        navigate(`/?scrollTo=${section}`);
        closeMobileMenu();
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        closeMobileMenu();
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        const path = location.pathname;
        const link = path.includes("home")
            ? "home"
            : path.includes("aboutus")
                ? "aboutus"
                : path.includes("projects")
                    ? "projects"
                    : path.includes("services")
                        ? "services"
                        : path.includes("contactus")
                            ? "contactus"
                            : "home";
        setActiveLink(link);
    }, [location.pathname]);

    return (
        <div className="fixed p-[24px] z-10 bg-[#0E0B44] bg-opacity-75 justify-start items-start mt-[80px] w-full h-full flex">
            <div className="flex flex-col gap-[20px] items-center">
                {/* Menu Items */}
                <div className="flex flex-col gap-[4px]">
                    {HeaderItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="py-[15px] px-[20px] font-normal items-center flex gap-[8px] transition duration-300 hover:shadow-lg hover:shadow-[#DA0C16]/50 rounded-lg"
                            onClick={() => handleLinkClick(item.path)}
                        >
                            <p
                                className={`cursor-pointer text-[16px] font-Raleway transition duration-300 ${activeLink === item.path ? "text-[#DA0C16]" : "text-white"
                                    } hover:text-[#DA0C16]`}
                            >
                                {item.label}
                            </p>
                        </Link>
                    ))}
                </div>

               
            </div>
        </div>
    );
};

export default MobileMenu;
