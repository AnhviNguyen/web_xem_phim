import React, { useState, useEffect, useContext } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/cinemx.png";
import { UserContext } from "../../auth/userContext";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(UserContext);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const controlNavBar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavBar);
        return () => {
            window.removeEventListener("scroll", controlNavBar);
        };
    }, [lastScrollY]);

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const closeSearch = () => {
        setShowSearch(false);
        setQuery("");
    };

    const toggleMobileMenu = () => {
        setMobileMenu((prev) => !prev);
        setShowSearch(false);
    };

    const searchQueryHandler = (event) => {
        if (event.key === 'Enter' && query.trim()) {
            navigate(`/search/${query.trim()}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const navigationHandler = (type) => {
        const path = type === "movie" ? '/explore/movie' : '/explore/tv';
        navigate(path);
        setMobileMenu(false);
    };

    const navigateToLogin = () => {
        navigate("/login");
        setMobileMenu(false);
    };

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="Cinemax Logo" />
                </div>
                <ul className="menuItems">
                    <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
                    <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
                    {user ? (
                        <li className="menuItem">Hello, {user.lastName}</li> // Hiển thị tên người dùng
                    ) : (
                        <li className="menuItem" onClick={navigateToLogin}>Login</li>
                    )}
                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>

                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={toggleMobileMenu} />
                    ) : (
                        <SlMenu onClick={toggleMobileMenu} />
                    )}
                </div>
            </ContentWrapper>
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for movie or TV show..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose onClick={closeSearch} />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
    );
};

export default Header;
