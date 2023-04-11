import { Table } from "@nextui-org/react";
import { useId } from "react";

interface Props {
  alimentos?: { nombre: string; equivalente: string; gramos: number }[];
}

export default function TablaAlimentos(prop: Props = {}) {
  let tableID = useId();
  return (
    <Table
      id={tableID}
      aria-label="Alimentos equivalentes del Sistema Mexicano de Equivalencias"
      selectionMode="single"
      css={{
        height: "auto",
        fontSize: "$sm",
      }}
    >
      <Table.Header>
        <Table.Column>ALIMENTO</Table.Column>
        <Table.Column>EQUIVALENTE</Table.Column>
        <Table.Column>GRAMOS</Table.Column>
      </Table.Header>
      <Table.Body>
        {prop.alimentos !== undefined ? (
          prop.alimentos.map((alimento, key) => (
            <Table.Row key={key}>
              <Table.Cell>{alimento.nombre}</Table.Cell>
              <Table.Cell>{alimento.equivalente}</Table.Cell>
              <Table.Cell>{alimento.gramos}</Table.Cell>
            </Table.Row>
          ))
        ) : (
          <Table.Row>
            <Table.Cell>Sin alimento</Table.Cell>
            <Table.Cell>NA</Table.Cell>
            <Table.Cell>NA</Table.Cell>
          </Table.Row>
        )}
      </Table.Body>
      <Table.Pagination
        // shadow
        noMargin
        align="center"
        rowsPerPage={5}
        // onPageChange={(page) => console.log({ page })}
      />
    </Table>
  );
}
