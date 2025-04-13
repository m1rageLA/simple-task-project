import React from 'react'
import styles from "../styles/page.module.css";

type Props = {}

export default function LoginPage({ }: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <div className={styles.loginContent}></div>
        <div className={styles.loginSideImage}></div>
      </div>
    </div>
  )
}