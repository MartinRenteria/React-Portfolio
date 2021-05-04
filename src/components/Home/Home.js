import * as React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StaticImage } from "gatsby-plugin-image";
import Author from "../../images/Author.jpg"
import Typewriter from "typewriter-effect";
import { Button } from "@material-ui/core";
import "./Home.css";


export default function IntroPage() {
  return (
    <main className="homeBackground">
    <section className="intro">
      <div className="Author">
      <StaticImage
        alt="Author"
        className="Author"
        src={Author}
        placeholder="blurred"
      />
      </div>
      <Typewriter
        options={{ delay: 50 }}
        onInit={(typewriter) => {
          typewriter.start()
            .typeString(`Hi there, I'm Martin Renteria.<br/>A JavaScript developer<br/>based in Bellevue, WA.`)
        }}
      />
      <Button
        onClick={() => scrollTo(".projects")}
        variant="outlined"
        color="white"
        size="large"
      >
        View My Portfolio
      </Button>
    </section>
    </main>
  )
}


