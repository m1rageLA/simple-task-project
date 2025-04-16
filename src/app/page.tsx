"use client"
import React, { useEffect, useState } from 'react'
import styles from './styles/auth.module.css'
import LoginForm from './components/LoginForm';


type Props = {}

//====-Login Page-====//
export default function Home({ }: Props) {
  const [showImage, setShowImage] = useState(
    typeof window !== 'undefined' ? window.innerWidth > 900 : true
  );
  useEffect(() => {
    const handleResize = () => setShowImage(window.innerWidth > 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={styles.page}>
      <div className={styles.login}>
        <div className={styles.login_content}>
          <LoginForm />
        </div>
        {showImage && (
          <div className={styles.login_sideImage} data-testid="sideImage" />
        )}
      </div>
    </div>
  )
}