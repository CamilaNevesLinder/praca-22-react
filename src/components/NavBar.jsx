import { Search } from "lucide-react";
import { TextAlignJustify } from "lucide-react";
import { useEffect, useState } from "react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-100 w-full top-0 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="  flex flex-row justify-center gap-1.5">
        <h1 className="uppercase font-light text-4xl text-blue-500 tracking-tight  ">
          praça
        </h1>
        <h1 className="uppercase font-extrabold text-4xl text-orange-500 tracking-tight">
          22
        </h1>
      </div>

      <div></div>
    </nav>
  );
}

export default NavBar;
