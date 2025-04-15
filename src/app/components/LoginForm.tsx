"use client"

import React, { useState } from "react";
import styles from "../styles/auth.module.css";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from 'next/navigation';

type Props = {}

export default function LoginForm({ }: Props) {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!fullName || !email || !password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            let userCredential;
            if (isNewUser) {
                userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, { displayName: fullName });
            } else {
                userCredential = await signInWithEmailAndPassword(auth, email, password);
            }

            const user = userCredential.user;
            localStorage.setItem("displayName", user.displayName ?? "");

            router.push('/home');
        } catch (error: string | any) {
            setError(error.message);
        }

    };


    return (
        <form onSubmit={handleSubmit} className={styles.form} role="form">
            <div className={styles.form__header}>
                {isNewUser ? <h3>Register</h3> : <h3>Log in</h3>}
                <p onClick={() => setIsNewUser(!isNewUser)}>
                    {isNewUser ? "Already have an account?" : "Don't have an account?"}
                    <a href="#">&nbsp;{isNewUser ? "Log in" : "Create now"}</a>
                </p>
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">Full name</label>
                <input type="text" name="full name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Alex Smith" required />
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" required />
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">Password</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="*******" />
            </div>
            <input type="submit" value={isNewUser ? 'Register' : "Log in"} className={styles.form__submit} required /><br />
            {error && <p className={styles.error}>{error}</p>}
        </form>
    )
}