import { Button, Card, Col, Text } from "@nextui-org/react";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: "400" });

interface Props {
  title: string;
  subtitle: string;
  content: string;
  path: string;
}

export const CardComponent = ({ title, subtitle, content, path }: Props) => {
  return (
    <Card css={{ maxWidth: 400 }} className={lato.className}>
      <Card.Header css={{ backgroundColor: "#333" }}>
        <Col>
          <Text
            size={14}
            weight={"bold"}
            transform="uppercase"
            css={{ color: "$white" }}
          >
            {title}
          </Text>
          <Text size={25} css={{ color: "$white" }}>
            {subtitle}
          </Text>
        </Col>
      </Card.Header>
      <Card.Divider />
      <Card.Body className="flex flex-col">
        <Text className={`${lato.className} line-clamp-2`} size={20}>
          {content}
        </Text>
        <Link href={path}>
          <button className="w-full bg-primary hover:bg-orange-600 mt-4 text-white font-bold rounded-md p-2 text-center cursor-pointer">
            Leer más
          </button>
        </Link>
      </Card.Body>
    </Card>
  );
};
