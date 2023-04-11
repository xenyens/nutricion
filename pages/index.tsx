import Image from "next/image";
import { Waterfall } from "next/font/google";

const waterfall = Waterfall({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="
        flex
        min-h-screen
        flex-col
        items-center
        p-24"
    >
      <h1 className="text-sm md:text-xl">NUTRICIÓN CLÍNICA</h1>
      <h1
        className={`
          ${waterfall.className}
          text-4xl
          md:text-7xl         
        `}
      >
        Ana Karen Juárez
      </h1>
    </main>
  );
}
