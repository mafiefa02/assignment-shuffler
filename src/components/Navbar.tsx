import { cn } from "-/lib/utils";
import Link from "next/link";

import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="border-b py-4">
      <section className="container flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            buttonVariants({
              variant: "link",
            }),
            "py-0 text-xl font-bold",
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
