import React from 'react'
import styles from "../styles/auth.module.css";
import LoginForm from '../components/LoginForm';

type Props = {}

export default function LoginPage({ }: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <div className={styles.login_content}>
          <LoginForm />
        </div>
        <div className={styles.login_sideImage}></div>
      </div>
    </div>
  )
}