"use client";
import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";

type Props = {}

// ✅ src/app/home/page.tsx
export default function HomePage({ }: Props) {
    const [displayName, setDisplayName] = useState<string | null>(null);

    useEffect(() => {
        const name = localStorage.getItem("displayName");
        setDisplayName(name);
    }, []);

    return (
        <div className={styles.page}>
            <main>
                <h1>Welcome <br />{displayName}</h1>
            </main>
        </div>

    );
}