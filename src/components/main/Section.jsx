import React from "react"
import style from "./Main.module.css";

const Section = ({ title, className, children, text }) => {
  return (
    <section className={className}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{text}</p>
      {children}
    </section>
  )
}

Section.defaultProps = {
  className: "section",
}

export default Section 