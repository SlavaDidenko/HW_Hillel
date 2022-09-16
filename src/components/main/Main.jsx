import React from "react";
import style from "./Main.module.css";
import CardAbout from "./CardAbout";
import Section from "./Section";
import QualificationCard from "./QualificationCard";

import cardData from "../../card-about-data.json";
import cardQualificationData from "../../qualification-data.json"

export default function Main () {
  return (
    <>
      <div className={style.mainBody}>
        <Section className={style.about} title="About" text="Web developer, with extensive knowledge and years of experience, working in web technologies and UI/UX design, delivering quality work.">
          <ul className={style.cardList}>
            {cardData.map((el, index) => {
                return < CardAbout key={index} props={el} />
            })}
          </ul>
        </Section>
        <Section title="Qualification" text="My personal journey">
          <ul className={style.qualificationList}>
            {cardQualificationData.map((el, index) => {
              return < QualificationCard key={index} props={el} />
            })}
          </ul>
        </Section>
      </div>
    </>
  )
}