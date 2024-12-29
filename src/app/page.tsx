import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Emmanuel</Heading>
      <Paragraph className="max-w-xl mt-4">
      I'm a software developer that loves building products and web apps that can impact millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m skilled in{" "}
        <Highlight>JavaScript, Typescript, Python, SQL,</Highlight> and data visualization tools like
        <Highlight>Tableau and PowerBI</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
      When I&apos;m not coding or working with data, I&apos;m exploring new tech trends or tackling personal projects.🚀
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
