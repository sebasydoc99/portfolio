import {Link, usePathname} from "@/i18n/routing";
import classNames from "classnames";
import {ReactNode} from "react";

const NavItem = (props: { title: string, route: string; icon: ReactNode }) => {

    const { title, route, icon } = props;
    const path = usePathname();
    const activePath = path === route;

    const linkClasses = classNames('border rounded-lg border-none', {
        'bg-gray-300 dark:bg-gray-600': activePath,
        'hover:bg-gray-100 dark:hover:bg-gray-800': !activePath,
    });

    return (
        <Link href={route} className={linkClasses}>
            <div className={`container flex justify-around items-center px-4 py-1 w-auto gap-2`}>
                {icon}<h1 className={"text-sm"}>{ title }</h1>
            </div>
        </Link>
    );
}

export { NavItem }