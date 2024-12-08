"use client";

import * as React from "react";
import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes"
import {Link} from "@/i18n/routing";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import {Nav} from "@/components/Header/Nav";

const Header = () => {
    const {setTheme} = useTheme();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setTheme(isDark ? "dark" : "light");
    }, [isDark, setTheme]);

    return (
        <header className={"py-8 xl:py-12"}>
            <div className={"container mx-auto flex justify-between items-center"}>
                {/* Logo */}
                <Link href={"/"}>
                    <h1 className={"text-4xl font-semibold"}>
                        Sebastian<span className={"text-accent"}>.</span>
                    </h1>
                </Link>

                {/* Navbar */}
                <div className={ "border rounded-[0.75rem] p-1 hidden xl:flex items-center gap-8"}>
                    <Nav />
                </div>

                {/* Theme & hire me button */}
                <div className={"flex items-center gap-4"}>
                    <Button variant="link" size="icon" onClick={() => setIsDark(!isDark)}>
                        { isDark
                            ? <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            : <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/> }
                    </Button>
                    <Link href={"/contact"}>
                        <Button variant={"secondary"}>Hire me</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export {Header};