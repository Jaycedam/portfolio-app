import Button from "./Button";
import {
  AiFillGithub,
  AiFillDribbbleCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaCode } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="container mb-0
        flex min-h-[80vh] flex-col items-center justify-center gap-4 pt-14 text-center"
    >
      <header className="space-y-2">
        <h1 className="text-6xl font-bold md:text-7xl">
          Hola, soy
          <br />
          <strong
            className="gradient animate-gradient bg-clip-text text-7xl font-black text-transparent
              md:text-8xl"
          >
            Jordan Cortés.
          </strong>
        </h1>

        <p className="text-lg font-light">Software Dev / Motion Graphics.</p>
      </header>

      <Button link="#projects" text="Ver proyectos" icon={<FaCode />} />

      {/* social icons  */}
      <div
        className="
            flex gap-4 text-3xl"
      >
        <a
          target="_blank"
          href="https://github.com/Jaycedam/"
          aria-label="GitHub Link"
          className="social-icon"
        >
          <AiFillGithub />
        </a>

        <a
          target="_blank"
          href="https://dribbble.com/Jaycedam"
          aria-label="Dribbble Link"
          className="social-icon"
        >
          <AiFillDribbbleCircle />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/jaycedam"
          aria-label="Linkedin Link"
          className="social-icon"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </section>
  );
}
