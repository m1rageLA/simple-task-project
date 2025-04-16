"use client";
import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";
import React from 'react';
type Props = {}
import { useRouter } from 'next/navigation';

// ✅ src/app/home/page.tsx
export default function HomePage({ }: Props) {
    const router = useRouter();
    const [displayName, setDisplayName] = useState<string | null>(null);

    useEffect(() => {
        const name = localStorage.getItem("displayName");
        setDisplayName(name);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("displayName");
        window.location.href = "/";
    };

    const handleLoginNavigation = () => {
        router.push('/');
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {displayName ? (
                    <>
                        <h2>Welcome <br />{displayName}!</h2>
                        <div className={styles.main__logout}>
                            <a onClick={handleLogout} className={styles.button}>logout</a>
                        </div>
                    </>
                ) : (
                    <>
                        <h2>Welcome, Guest!</h2>
                        <div className={styles.main__auth}>
                            <a onClick={handleLoginNavigation} className={styles.button}>Login</a>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}