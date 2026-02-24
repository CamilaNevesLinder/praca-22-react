import { useEffect, useState } from "react";

function Hero() {
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
    <section className="relative pt-24">
      <img
        src="public/ChatGPT Image 23 de fev. de 2026, 15_27_43.png"
        className="w-full h-full"
      />

      <div
        className={`absolute inset-0 flex  justify-center ${
          scrolled ? "bg-black/50 transition-all duration-300 " : ""
        }`}
      >
        <div className="flex flex-col mt-30 items-center">
          <h1 className="flex mb-4  text-5xl uppercase tracking-tight font-bold text-blue-700 ">
            Sua jornada musical começa aqui
          </h1>
          <p className="font-bold tracking-tight uppercase text-orange-500">
            Aprenda com professores experientes, desenvolva seu talento e viva a
            experiência da música na Praça 22.
          </p>
          <button
            className={` mt-80 border-solid bg-orange-500 p-7 rounded-3xl text-5xl font-bold text-white hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-blue-700 ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "}
               `}
          >
            Comece já
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
