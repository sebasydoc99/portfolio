"use client";

import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "@/i18n/routing";

const PageTransition = ({children} : {children: React.ReactNode}) => {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay:1, duration: 0.3, ease: "easeInOut" } }}
                    className={"h-screen w-screen fixed top-0 pointer-events-none"}
                >
                    {children}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default PageTransition;