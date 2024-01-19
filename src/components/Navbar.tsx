import { Button, buttonVariants } from "-/components/ui/button";
import { cn } from "-/lib/utils";
import Link from "next/link";
import { FaQuestion } from "react-icons/fa6";

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

        <Link
          href="/about"
          className={buttonVariants({
            variant: "outline",
            className: "group flex items-center gap-2",
          })}
        >
          about <FaQuestion className="group-hover:text-primary" />
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
