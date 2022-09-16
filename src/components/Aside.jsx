import React from "react";
import styles from "./Aside.module.css";
import user from "../img/user.png"
import svg from "../img/inst.svg"
const arr = [svg, svg, svg, svg];

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.img}>
        <img
          src={user}
          alt="user"
          height="163"
          width="163"
        />
      </div>
      <div className={styles.nameJob}>
        <h3 className={styles.name}>Snicks Picky</h3>
        <p className={styles.position}>Frontend Developer</p>
      </div>
      <p className={styles.text}>High level  experience in web design and development knowledge.</p>
      <ul className={styles.contactIcons}>
        { arr.map((el , index) => {
          return (
            <li key={index} className={styles.contacItem}>
              <a href="./">
                  <img src={el} alt="icon" />
              </a>
            </li>
          )
        })}
      </ul>
      <a className={styles.btn} href="./">Contact Me</a>
    </aside>
  )
}