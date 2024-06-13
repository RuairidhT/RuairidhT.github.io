import { router } from "../../main"
import { NavLinks } from "./NavLinks"

export const Navbar = () => {
    const routes = router.routes[0].children

    return (
        <div className="flex flex-col">
            <nav className="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
                <div className="flex items-center">
                    <a className="cursor-pointer">
                        <h3 className="text-2xl font-medium text-blue-500">
                            Ruairidh Taylor
                        </h3>
                    </a>
                </div>

                <div className="items-center hidden space-x-8 lg:flex">

                    {routes!.map((route) => (
                        <NavLinks route={route} />
                    ))}

                </div>
            </nav>
        </div>
    )
}
