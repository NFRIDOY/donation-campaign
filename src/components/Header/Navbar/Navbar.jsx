import { NavLink } from "react-router-dom";
import logo from '/Logo.png'


export default function Navbar() {
    return (
        <div className="px-20 py-7 text-2xl">
            <div className="flex justify-between">
                <div>
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
                                    isPending ? "pending" : isActive ? "text-[#FF444A] italic font-black" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/donation"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] italic font-black" : ""
                                }
                            >
                                Donation
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/statistics"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#FF444A] italic font-black" : ""
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
