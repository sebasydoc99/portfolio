import {NavItem} from "@/components/Header/NavItem";
import { House, Info, FolderKanban, Layers, AtSign } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface NavItemObject {
    route: string;
    name: string;
    icon: any;
}

const Nav = () => {
    const t = useTranslations("Nav");

    const navItems: Array<NavItemObject> = [
        {
            route: "/",
            name: t("home"),
            icon: <House className={"h-[1.2rem] w-[1.2rem]"}/>,
        },
        {
            route: "/about",
            name: t("about"),
            icon: <Info className={"h-[1.2rem] w-[1.2rem]"}/>
        },
        {
            route: "/services",
            name: t("services"),
            icon: <Layers className={"h-[1.2rem] w-[1.2rem]"}/>
        },
        {
            route: "/projects",
            name: t("work"),
            icon: <FolderKanban className={"h-[1.2rem] w-[1.2rem]"}/>
        },
        {
            route: "/contact",
            name: t("contact"),
            icon: <AtSign className={"h-[1.2rem] w-[1.2rem]"}/>
        }
    ];

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