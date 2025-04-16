// src/app/home/page.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './page';
import { describe, expect, it } from 'vitest';// vitest.setup.ts
import '@testing-library/jest-dom';

describe('HomePage', () => {
    it('renders welcome message for logged in user', () => {
        localStorage.setItem('displayName', 'Alex');
        render(<HomePage />);
        expect(screen.getByRole("heading", { name: /Welcome/i })).toBeInTheDocument();
    });
});
