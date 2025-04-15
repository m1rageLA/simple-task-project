import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom';
import React from "react";

//mock Next.js router
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: vi.fn(),
    }),
}));

vi.mock('firebase/auth', async () => {
    const actual = await vi.importActual<typeof import('firebase/auth')>('firebase/auth');

    return {
        ...actual,
        getAuth: vi.fn(() => ({
            currentUser: {
                uid: 'test-user',
                email: 'test@example.com',
            }
        })),
        createUserWithEmailAndPassword: vi.fn(() =>
            Promise.resolve({ user: { uid: 'test-uid', email: 'test@example.com' } })
        ),
        signInWithEmailAndPassword: vi.fn(() =>
            Promise.resolve({ user: { uid: 'test-uid', email: 'test@example.com' } })
        ),
        updateProfile: vi.fn(() => Promise.resolve()),
    };
});


describe('LoginForm component', () => {
    it("rendres login", () => {
        render(<LoginForm />);
        expect(screen.getByRole("heading", { name: /Log in/i })).toBeInTheDocument();
    })
});