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
            <div className={styles.form__header}>
                <h3>Log in</h3>
                <p>Don't have an account?<a href="#">&nbsp;Create now</a></p>
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">Full name</label>
                <input type="email" name="text" placeholder="Alex Smith" required/>
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder="example@gmail.com" required/>
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder="*******" />
            </div>
            <input type="submit" value="Log in" className={styles.form__submit} required/>
        </form>
    )
}