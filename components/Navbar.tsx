import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";

const rutas = [
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Equivalentes",
    path: "/equivalentes",
  },
  {
    label: "Enfermedades",
    path: "/enfermedades",
  },
];

export const Navbar = () => {
  return (
    <nav
      className="
      flex 
      flex-col
      items-center
      md:flex-row
      md:justify-between      
      uppercase
      text-sm 
      p-6
      bg-primary 
      font-bold 
      text-white
      shadow-xl
      "
    >
      <nav>
        <Image
          src={Logo}
          alt="logotipo de empresa"
          className="w-[200px] h-[200px]"
        />
      </nav>
      <nav
        className="
        flex
        flex-col
        items-center
        space-y-2
        md:space-y-0
        md:flex-row 
        md:space-x-2
        "
      >
        {rutas.map((ruta, key) => (
          <h1 key={key}>
            <Link href={ruta.path}>{ruta.label}</Link>
          </h1>
        ))}
      </nav>

      <nav className="w-full flex justify-center md:mr-5 md:w-[180px]">
        <Link href={"/contacto"}>
          <button
            className="
                    mt-2
                    w-32
                    p-2
                  bg-secondary 
                    rounded-md
                  hover:bg-green-500
                    cursor-pointer
                    uppercase
                    "
          >
            Contacto
          </button>
        </Link>
      </nav>
    </nav>
  );
};
