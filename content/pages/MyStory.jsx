"use strict";

import React, { useState } from "react";
import styles from "./MyStory.module.scss";

const LOG_CRITICAL = "LOG_CRITICAL";
const LOG_INFO = "LOG_INFO";
const LOG_VERBOSE = "LOG_VERBOSE";

const MyStory = () => {
  const [logLevel, setLogLevel] = useState(LOG_CRITICAL);

  const getCriticalClass = () => styles["critical"];
  const getInfoClass = () =>
    logLevel === LOG_CRITICAL ? styles["hidden"] : styles["info"];
  const getVerboseClass = () =>
    logLevel === LOG_VERBOSE ? styles["verbose"] : styles["hidden"];
  const getCriticalOnlyClass = () =>
    logLevel === LOG_CRITICAL ? styles["critical"] : styles["hidden"];
  const getParagraphClass = () =>
    logLevel === LOG_CRITICAL ? styles["no-spacing"] : styles["spacing"];

  return (
    <>
      <div>
        <div>Choose your log level: </div>
        <button onClick={() => setLogLevel(LOG_CRITICAL)}>Critical</button>
        <button onClick={() => setLogLevel(LOG_INFO)}>Info</button>
        <button onClick={() => setLogLevel(LOG_VERBOSE)}>Verbose</button>
      </div>

      <p className={getParagraphClass()}>
        <span className={getInfoClass()}>Hi, I'm Marek. </span>
        <span className={getCriticalClass()}>I </span>
        <span className={getInfoClass()}>live in Gdańsk, Poland and </span>
        <span className={getCriticalClass()}>
          work as a programmer since 2015
        </span>
        <span className={getInfoClass()}>.</span>
        <span className={getCriticalOnlyClass()}>:</span>
      </p>

      <p className={getParagraphClass()}>
        <span className={`${getCriticalOnlyClass()} ${styles["indent"]}`}>
          -{" "}
        </span>
        <span className={getInfoClass()}> In the beginning, during my </span>
        <span className={getCriticalClass()}>internship at Intel</span>
        <span className={getCriticalOnlyClass()}> (2015-2017)</span>
        <span className={getInfoClass()}>
          , I was wondering on what technology area I should focus. Initially, I
          thought that it will be some field related to algorithms, machine
          learning or cryptography because I was quite interested in maths.
          Surprisingly for me, it turned out that I had an even bigger passion
          that I didn't know about. At that time I was impressed the most by
          programmers that were able to build real and usable things in small
          time.
        </span>
      </p>

      <p className={getVerboseClass()}>
        First time I felt so inspired about programming was when I met my friend
        to ask him for help in a programming assignment I got to do to pass a
        semester. He said that he doesn't have much time, but he can sit there
        with me at the university corridor and write it for me, explaining
        everything on the fly. He wrote a whole application in twenty minutes,
        all of it - core logic that simulated physical system of spring and
        piston supporting weight over time, inputs for the user to give
        parameters, view that was showing an animation of how the system was
        behaving in simulated time, the possibility to export numerical output
        from simulation... I was astounded. He was exactly my age and could
        build in twenty minutes what would take me months to do. At that moment
        I decided that it's what I want to do in my life - build usable apps as
        fast as him. I wanted to become a Jquery developer because that was the
        library he was using.
      </p>

      <p className={getParagraphClass()}>
        <span className={`${getCriticalOnlyClass()} ${styles["indent"]}`}>
          -{" "}
        </span>
        <span className={getInfoClass()}>
          After a long internship at Intel Corp. I tried to find a good place
          for my career,{" "}
        </span>
        <span className={getCriticalClass()}>
          working for a couple of outsourcing companies
        </span>
        <span className={getInfoClass()}>
          , in which I've learned about problems and specifics of various types
          of web apps - small and big, old and innovative, international and
          local. I have even been partaking in a small project as a frontend
          technical lead and created a medium-sized app from scratch.
        </span>
      </p>

      <p className={getVerboseClass()}>
        Coming from an object-oriented programming paradigm, I've learned a lot
        about design patterns, UML and systems architecture, just to ditch it
        all up and move to functional programming and recently relearn how to
        achieve the same scalability and maintainability of software systems
        using functional-oriented means.
      </p>

      <p className={getParagraphClass()}>
        <span className={getCriticalOnlyClass()}>- </span>
        <span className={getCriticalClass()}>
          I'm a very passionate communicator.{" "}
        </span>
        <span className={getInfoClass()}>
          I love to teach other people, write down my thoughts and polish them
          up until they are ready to be published as a blog post. When coding,
          I'm constantly thinking if my code conveys it's meaning well enough to
          the future maintainers.
        </span>
      </p>

      <p className={getParagraphClass()}>
        <span className={getCriticalOnlyClass()}>- </span>
        <span className={getCriticalClass()}>I'm a far-sighted person. </span>
        <span className={getInfoClass()}>
          I always like to do my work from general to specific, think in the big
          picture and anticipate the future.
        </span>
      </p>

      {/* <p className={getVerboseClass()}>
        *I'm this type of man, who który po otrzymaniu zadania "zaszyfruj dwie
        kolumny w bazie danych, bo zawierają imię i nazwisko użytkowników"
        zamiast usiąść i zamknąć zadanie w kilka godzin, zacznie zadawać
        pytania: "Przed jakim typem ataku mam zabezpieczyć te dane?" "Czy tych
        danych nie będzie dało się wydobyć z systemu w inny sposób?" "Czy nie
        lepiej jest zaszyfrować całą bazę danych, chyba są do tego jakieś gotowe
        rozwiązania?" "Skąd przyszli deweloperzy będą wiedzieć które kolumny są
        zaszyfrowane a które nie?". (Po wszystkim oczywiście lubię podzielić się
        zgromadzoną wiedzą w formie posta na blogu).*
      </p> */}

      <p className={getParagraphClass()}>
        <span className={getCriticalOnlyClass()}>- </span>
        <span className={getCriticalClass()}>
          I'm experienced in improving processes in my workplace.{" "}
        </span>
        <span className={getInfoClass()}>
          I have a habit of analyzing and improving processes in my work. It can
          be internal communication in the team, work planning and evaluating
          some process or even facilitating regular and company-wide events for
          speaking and lesson sharing. I like building a culture of taking
          ownership.
        </span>
      </p>

      {/* <p className={getVerboseClass()}>
        opisać dlaczego wg mnie w agile i scrumie najważniejsze jest to, aby to
        były narzędzia pomagające zespołowi w pracy - tak jak wszystkie procesy
        trzeba je ciągle analizować pod kątem wartości dodanej i modyfikować,
        aby to one dopasowywały się do zespołu i środowiska, a nie na odwrót.
        Napisać, że większość mojej historii to ciągła walka ze złymi procesami
        dookoła mnie, bo niestety ludzie są trudni do zmiany
      </p> */}

      <p className={getParagraphClass()}>
        <span className={getCriticalOnlyClass()}>- </span>
        <span className={getInfoClass()}>
          I dream of becoming a true professional, who not only solves technical
          problems but is involved in all aspects of delivering a
          fully-functional product.{" "}
        </span>
        <span className={getCriticalClass()}>
          I like working in organizations that focus on what is most important
          to deliver value.
        </span>
        <span className={getInfoClass()}>
          I'm currently investing my career in frontend web development because
          I believe that it's the most efficient way for me to be able to
          deliver some real value out of my work. I want to avoid and prevent
          technical problems instead of taking pride in solving them.
        </span>
      </p>

      <p className={getVerboseClass()}>
        In the future I would like to try programming in ReasonML.
      </p>

      <p className={getCriticalClass()}>
        Languages, frameworks, and libraries in which I'm most experienced are:
        <div className={styles.logosContainer}>
          <img src="/media/ts-logo-text.svg" />
          <img src="/media/react-text.png" />
          <img src="/media/graphql-text.png" />
          <img src="/media/mui-text.png" />
          <img src="/media/serverless-text.png" />
          <img src="/media/cypress-text.png" />
        </div>
      </p>
    </>
  );
};

export default MyStory;
