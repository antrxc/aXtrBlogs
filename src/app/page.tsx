import Image from "next/image";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Grid from "./sections/Grid";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Grid />
    </div>
  );
}
