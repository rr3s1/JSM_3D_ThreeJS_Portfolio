import React, {useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
            <a href={href} className="nav-li_a" onClick={() => {}}>
                {name}
            </a>


                </li>
                ))}
        </ul>
    )
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState();

    const toggleMenu = () =>  setIsOpen (previsOpen => !previsOpen);

    return (
        <header className="fixed top-0 left-0 right-0">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-x1 hover:text-wite transition-colors"> Adrian
                    </a>
                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle Menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>
                    <nav className="sm:flex hidden">
                    <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <nav className="p-5">
                    <NavItems/>
                </nav>
            </div>
        </header>
    )
};
export default Navbar
