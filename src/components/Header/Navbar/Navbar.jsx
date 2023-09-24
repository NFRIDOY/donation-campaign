import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
        <div className="px-20 py-7 text-2xl">
            <div className="flex justify-between">
                <div>
                    <NavLink
                        to="/"
                        className={"font-black"}
                    >
                        Logo
                    </NavLink>

                </div>
                <nav>
                    <ul className="flex gap-12">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 italic font-black" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/favorites"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 italic font-black" : ""
                                }
                            >
                                Favorites
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-600 italic font-black" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}
