"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.productName}>
          DevZone
        </div>
        <div style={{ paddingRight:'10px' }}>
          <Link href={`/login`} style={{ fontFamily: 'monospace', fontSize: '20px', textDecoration: 'none' }}>Login &nbsp;</Link>
          <Link href={`/signup`} style={{ fontFamily: 'monospace', fontSize: '20px', textDecoration: 'none'  }}>Sign-Up</Link>
        </div>
      </div>
    </>
  );
}
