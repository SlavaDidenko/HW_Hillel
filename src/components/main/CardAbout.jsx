import React from "react";
import style from "./CardAbout.module.css";

export default function CardAbout({ text, img, number }) {
  console.log(text)
  return (
    <li className={style.card}>
      <div className={style.img}>
        <img
          src={img}
          height="30"
          width="30"
          alt="fire"
        />
      </div>
      <div className={style.textWrapper}>
        <p className={style.text}>{text}</p>
        <p className={style.number}>{number}</p>
      </div>
    </li>
  )
}