import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiJsBadge,
  DiPostgresql,
  DiPython,
  DiJava,
  DiDjango,
  DiBootstrap,
} from "react-icons/di";
import {
  TbBrandNextjs,
  TbSql,
  TbBrandCSharp,
  TbBrandTailwind,
} from "react-icons/tb";
import { SiOracle } from "react-icons/si";
import Image from "next/image";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="container container-fix mx-auto
        grid gap-4
        md:grid-cols-2"
    >
      {/* text  */}
      <div className="grid gap-2">
        <header className="flex-center">
          <h1 className="title">Acerca de mí</h1>
        </header>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, quis!
          Vero, veritatis quod nisi nulla iure debitis blanditiis molestiae
          distinctio. Modi beatae consectetur eligendi, repellendus illum aut?
          Natus, necessitatibus est nisi fugit pariatur sapiente sunt, vel
          repudiandae quod excepturi ducimus ex distinctio odit molestiae sit
          nobis? Aliquam molestias facere quidem suscipit eos expedita rerum
          distinctio, quo alias illum labore?
        </p>

        {/* icons  */}
        <div className="flex flex-center flex-wrap gap-4 text-4xl">
          <DiReact />
          <DiHtml5 />
          <DiCss3 />
          <DiJsBadge />
          <TbBrandNextjs />
          <DiPostgresql />
          <SiOracle />
          <DiJavascript />
          <DiPython />
          <DiJava />
          <DiDjango />
          <DiBootstrap />
          <TbSql />
          <TbBrandCSharp />
          <TbBrandTailwind />
        </div>
      </div>

      {/* image side  */}
      <div>
        <Image
          src={profile}
          className="rounded-3xl aspect-[4/3] object-cover
            md:h-full md:aspect-auto"
          alt="about me image"
        />
      </div>
    </section>
  );
}
