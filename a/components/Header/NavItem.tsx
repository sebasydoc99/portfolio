import {Badge} from "@/components/ui/badge";

let NavItem = (props: { title: string, route: string; icon: string }) => {

    const { title, route, icon } = props;

    return (
        <Badge
            variant={"secondary"}
            className={"container flex-row justify-around items-center px-4 py-2 w-auto gap-2"}
        >
            {icon}<a href={route}>{ title }</a>
        </Badge>
    );
}

export { NavItem }