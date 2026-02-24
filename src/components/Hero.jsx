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
    <section className="relative h-screen w-full">
      <img
        src="public/ChatGPT Image 23 de fev. de 2026, 15_27_43.png"
        className=" w-full h-full object-cover lg:object-fill"
      />

      <div
        className={`absolute inset-0 flex  justify-center ${
          scrolled ? "bg-black/50 transition-all duration-300 " : ""
        }`}
      >
        <div className=" flex flex-col mt-16 lg:mt-10 items-center  ">
          <h1 className="flex text-center text-blue-700 lg:mt-7 mb-4  text-2xl uppercase tracking-tight font-bold  ">
            Sua jornada musical começa aqui
          </h1>

          <button
            className={` mt-30 text-2xl p-4 lg:mt-60 lg:text-5xl lg:p-7  border-solid bg-orange-500 rounded-3xl  font-bold text-white hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-blue-700 uppercase ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 "}
               `}
          >
            Matricule-se
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
