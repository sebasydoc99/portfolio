import {NavItem} from "@/components/Header/NavItem";
import { House, CircleUserRound, FolderKanban, Layers, AtSign } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {ReactNode} from "react";

interface NavItemObject {
    route: string;
    name: string;
    icon: ReactNode;
}

const Nav = () => {
    const t = useTranslations("Nav");

    const navItems: Array<NavItemObject> = [
        {
            route: "/",
            name: t("home"),
            icon: <House className={"h-[1rem] w-[1rem]"}/>,
        },
        {
            route: "/about",
            name: t("about"),
            icon: <CircleUserRound className={"h-[1rem] w-[1rem]"}/>
        },
        {
            route: "/services",
            name: t("services"),
            icon: <Layers className={"h-[1rem] w-[1rem]"}/>
        },
        {
            route: "/work",
            name: t("work"),
            icon: <FolderKanban className={"h-[1rem] w-[1rem]"}/>
        },
        {
            route: "/contact",
            name: t("contact"),
            icon: <AtSign className={"h-[1rem] w-[1rem]"}/>
        }
    ];

    return (
        <nav>
            <ul className={"container mx-auto flex justify-between items-center gap-1"}>
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