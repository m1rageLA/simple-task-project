"use client"
import { useEffect, useState } from "react";

type Props = {}

// ✅ src/app/home/page.tsx
export default function HomePage({ }: Props) {
    const [displayName, setDisplayName] = useState<string | null>(null);

    useEffect(() => {
        const name = localStorage.getItem("displayName");
        setDisplayName(name);
    }, []);

    return (
        <main>
            <h1>Welcome <br />{displayName}</h1>
        </main>
    );
}