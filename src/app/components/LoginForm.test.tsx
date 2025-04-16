import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen } from '@testing-library/react';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom';
import React, { act } from "react";
import { beforeEach } from 'node:test';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

//mock Next.js router
const pushMock = vi.fn();
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock,
    }),
}));

vi.mock('firebase/auth', async () => {
    const actual = await vi.importActual<typeof import('firebase/auth')>('firebase/auth');

    return {
        ...actual,
        getAuth: vi.fn(() => ({ currentUser: null })),
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
    beforeEach(() => {
        vi.clearAllMocks();
    });

    //===COMPONENTS===//
    it("rendres login", () => {
        render(<LoginForm />);
        expect(screen.getByRole("heading", { name: /Log in/i })).toBeInTheDocument();
    });
    it("renders register", async () => {
        render(<LoginForm />);
        const registerLink = screen.getByText(/Create now/i);
        expect(registerLink).toBeInTheDocument();
        await userEvent.click(registerLink);
        expect(await screen.findByRole("heading", { name: /Register/i })).toBeInTheDocument();
        expect(await screen.getByText(/Already have an account?/i)).toBeInTheDocument();
    });

    //===FireBase===//
    it("calls createUserWithEmailAndPassword", async () => {
        render(<LoginForm />);
        await userEvent.click(screen.getByText(/Create now/i));
        await screen.findByRole("heading", { name: /Register/i });
        await userEvent.type(screen.getByPlaceholderText(/Alex Smith/i), 'New User');
        await userEvent.type(screen.getByPlaceholderText(/example@gmail.com/i), 'newUser@gmail.com');
        await userEvent.type(screen.getByPlaceholderText(/\*+/), 'securepass');
        await act(() => {
            fireEvent.submit(screen.getByRole('form'));
        });
        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
            expect.anything(),
            'newUser@gmail.com',
            'securepass'
        );
        expect(updateProfile).toHaveBeenCalledWith(
            expect.objectContaining({ uid: 'test-uid' }),
            { displayName: 'New User' }
        );
        expect(pushMock).toHaveBeenCalledWith('/home');
    });

    it("calls signInWithEmailAndPassword", async () => {
        render(<LoginForm />);
        await userEvent.type(screen.getByPlaceholderText(/Alex Smith/i), 'New User');
        await userEvent.type(screen.getByPlaceholderText(/example@gmail.com/i), 'newUser@gmail.com');
        await userEvent.type(screen.getByPlaceholderText(/\*+/), 'securepass');
        await act(() => {
            fireEvent.submit(screen.getByRole('form'));
        });
        expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
            expect.anything(),
            'newUser@gmail.com',
            'securepass'
        );
        expect(pushMock).toHaveBeenCalledWith('/home');
    });
});