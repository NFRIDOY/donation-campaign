import { NavLink } from "react-router-dom";
import logo from '/Logo.png'


export default function Navbar() {
    return (
        <div className="text-2xl pb-12 font-black px-3">
            <div className="flex justify-between items-center">
                <div className="hidden md:block">
                    <NavLink
                        to="/"
                        className={"font-black"}
                    >
                        <img src={logo} alt="" />
                    </NavLink>

                </div>
                <nav>
                    <ul className="flex gap-12">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-black" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-black" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] underline font-black" : ""
                                }
                            >
                                Statistics
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}
