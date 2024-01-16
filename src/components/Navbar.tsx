import { cn } from "-/lib/utils";
import Link from "next/link";

import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="py-4 border-b">
      <section className="container flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "link",
            }),
            "font-bold py-0 text-xl"
          )}
        >
          shuffler;
        </Link>

        <Button variant="ghost">sign in</Button>
      </section>
    </nav>
  );
};

export default Navbar;
