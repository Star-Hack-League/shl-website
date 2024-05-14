import { useEffect, useRef } from "react";
// import Image from "next/image";
import styles from "../../styles/Home.module.scss";

export default function Mysection({
  image
}) {
  return (
    <div className={styles.section}>
      <div className={styles.copy}>
      </div>
      <img src={image} layout="fill"/>
    </div>
  );
}
