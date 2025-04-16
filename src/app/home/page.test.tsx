// src/app/home/page.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './page';
import { describe, expect, it, vi } from 'vitest';// vitest.setup.ts
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';


const url = 'http://localhost:3000/';

vi.mock('next/navigation', () => ({
    useRouter: () => ({
      push: vi.fn(),
      prefetch: vi.fn(),
    }),
  }));
  
describe('HomePage', () => {
    it('renders welcome message for logged in user', () => {
        localStorage.setItem('displayName', 'Alex');
        render(<HomePage />);
        expect(screen.getByRole("heading", { name: /Welcome/i })).toBeInTheDocument();
    });
    it('renders welcome message for guest', () => {
        localStorage.removeItem('displayName');
        render(<HomePage />);
        expect(screen.getByRole("heading", { name: /Welcome, Guest!/i })).toBeInTheDocument();
        expect(screen.getByText(/login/i)).toBeInTheDocument();
    });
    it('logs out user', async () => {
        localStorage.setItem('displayName', 'Alex');
        render(<HomePage />);
        const logoutButton = screen.getByText(/logout/i);
        expect(logoutButton).toBeInTheDocument();
        await userEvent.click(logoutButton);
        expect(localStorage.getItem('displayName')).toBeNull();
        expect(window.location.href).toBe(url);
    });
});
