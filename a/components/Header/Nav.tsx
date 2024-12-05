import {NavItem} from "@/components/Header/NavItem";
import { House, Info, FolderKanban, Layers, AtSign } from 'lucide-react';

interface NavItemObject {
    route: string;
    name: string;
    icon: any;
}

const navItems: Array<NavItemObject> = [
    {
        route: "/",
        name: "Home",
        icon: <House className={"h-[1.2rem] w-[1.2rem]"}/>,

    },
    {
        route: "/about",
        name: "About me",
        icon: <Info className={"h-[1.2rem] w-[1.2rem]"}/>
    },
    {
        route: "/services",
        name: "Services",
        icon: <Layers className={"h-[1.2rem] w-[1.2rem]"}/>
    },
    {
        route: "/projects",
        name: "Work",
        icon: <FolderKanban className={"h-[1.2rem] w-[1.2rem]"}/>
    },
    {
        route: "/contact",
        name: "Contact",
        icon: <AtSign className={"h-[1.2rem] w-[1.2rem]"}/>
    }
];

const Nav = () => {
    return (
        <nav>
            <ul className={"container mx-auto flex justify-between items-center gap-2"}>
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        title={item.name}
                        route={item.route}
                        icon={item.icon}
                    />
                ))}
            </ul>
        </nav>
    );
}

export {Nav};