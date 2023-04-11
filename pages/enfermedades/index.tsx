import { CardComponent } from "@component/components/CardComponent";
import { Grid } from "@nextui-org/react";

export default function EnfermedadesPage() {
  return (
    <>
      <Grid.Container className="mt-16 justify-evenly">
        <Grid className="mb-3">
          <CardComponent
            title="Hipertensión"
            subtitle="Recomendaciones Nutricionales"
            content="Consumo de ácidos grasos omega-3, como la sardina, caballa, salmón varias veces a la semana, el atún debe usarse con menor frecuencia por su contenido de mercurio puede elevar la presión."
            path="/enfermedades/hipertension"
          />
        </Grid>
        <Grid className="mb-3">
          <CardComponent
            title="Colitis"
            subtitle="Recomendaciones Nutricionales"
            content="Los cambios sugeridos en la dieta incluyen menor consumo de carnes rojas, productos lácteos, endulzantes artificiales y cafeína. "
            path="/enfermedades/colitis"
          />
        </Grid>
        <Grid className="mb-3">
          <CardComponent
            title="Dislipidemias"
            subtitle="Recomendaciones Nutricionales"
            content="Controlar el consumo de grasas saturadas y trans en la dieta."
            path="/enfermedades/dislipidemia"
          />
        </Grid>
        <Grid className="mb-3">
          <CardComponent
            title="Síndrome Ovario Poliquístico"
            subtitle="Recomendaciones Nutricionales"
            content="Una dieta saludable y balanceada puede ayudarte a perder peso y reducir la resistencia a la insulina, lo que puede mejorar la regulación de la ovulación y reducir los niveles de andrógenos, lo que ayuda a reducir el exceso de vello corporal y acné."
            path="/enfermedades/ovariopoliquistico"
          />
        </Grid>
      </Grid.Container>
    </>
  );
}
