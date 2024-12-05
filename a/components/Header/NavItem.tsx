import {Badge} from "@/components/ui/badge";
import {Link} from "@/i18n/routing";

let NavItem = (props: { title: string, route: string; icon: string }) => {

    const { title, route, icon } = props;

    return (
        <Badge
            variant={"secondary"}
            className={"container flex-row justify-around items-center px-4 py-2 w-auto gap-2"}
        >
            {icon}<Link href={route}>{ title }</Link>
        </Badge>
    );
}

export { NavItem }