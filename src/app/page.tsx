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
        I&apos;m a Junior Data Analyst who loves{" "}
        <Highlight>turning raw data</Highlight> into useful insights.
        With a background in statistics and a passion for problem-solving, I enjoy exploring datasets to find trends and patterns that drive smart decisions.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m skilled in{" "}
        <Highlight>Python, SQL,</Highlight> and data visualization tools like
        <Highlight>Tableau</Highlight>.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
      When I&apos;m not working with data, I&apos;m exploring new tech trends or working on personal data projects. Let&apos;s connect and make data meaningful! 🚀
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
