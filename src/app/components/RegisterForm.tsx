"use client"

import { useState } from "react";
import styles from "../styles/auth.module.css";

type Props = {}

export default function RegisterForm({ }: Props) {
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
                <h3>Sign up</h3>
                <p>Already have an account?<a href="#">&nbsp;Log in</a></p>
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">Full name</label>
                <input type="email" name="text" placeholder="Alex Smith" required />
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder="example@gmail.com" required/>
            </div>
            <div className={styles.form__field}>
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder="*******" required/>
            </div>
            <input type="submit" value="Sign up" className={styles.form__submit} />
        </form>
    )
}