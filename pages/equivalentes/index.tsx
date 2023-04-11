"use client";
import { verduras, frutas } from "@component/utils/helper";
import TablaAlimentos from "../../components/Table";

export default function EquivalentesPage() {
  return (
    <main className="mt-10 mx-2 md:m-10">
      <h1 className="text-xl text-center mb-10">
        Alimentos Equivalentes populares
      </h1>
      <h2 className="text-lg font-bold text-center mb-4">Verduras comunes</h2>

      <TablaAlimentos alimentos={verduras} />

      <h2 className="text-lg font-bold text-center my-4">Frutas comunes</h2>

      <TablaAlimentos alimentos={frutas} />
    </main>
  );
}
