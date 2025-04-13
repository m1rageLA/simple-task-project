"use client"

import { useState } from "react";
import styles from "../styles/auth.module.css";

type Props = {}

export default function LoginForm({ }: Props) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form__field}>
                <label htmlFor="">name</label>
                <input type="email" name="email" placeholder="example@gmail.com" />
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">password</label>
                <input type="password" name="password" placeholder="*******" />
            </div>
            <input type="submit" value="Sign in " className={styles.form__submit} />
        </form>
    )
}