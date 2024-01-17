import Link from "next/link";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  const date = new Date();

  return (
    <div className="flex items-center gap-4">
      <Link href="https://afief.toscamedia.net">
        <FaGlobe
          size={24}
          className="hover:cursor-pointer hover:text-primary"
        />
      </Link>

      <Link href="https://github.com/mafiefa02">
        <FaGithub
          size={24}
          className="hover:cursor-pointer hover:text-primary"
        />
      </Link>

      <Link href="https://linkedin.com/in/mafiefa">
        <FaLinkedin
          size={24}
          className="hover:cursor-pointer hover:text-primary"
        />
      </Link>

      <p className="text-sm">&copy; {date.getFullYear()} Afief Abdurrahman</p>
    </div>
  );
};

export default Socials;
