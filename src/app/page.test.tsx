import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HomePage from "./page";

//mock Next.js router
const pushMock = vi.fn();
vi.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock,
    }),
}));

describe('page', () => {
    it("hides side image when screen width is 900px or less", () => {
        window.innerWidth = 899;
        window.dispatchEvent(new Event("resize"));
        render(<HomePage />);
        expect(screen.queryByTestId("sideImage")).not.toBeInTheDocument();
    });
    it("shows side image when screen width is more than 900px", () => {
        window.innerWidth = 1000;
        window.dispatchEvent(new Event("resize"));
        render(<HomePage />);
        expect(screen.queryByTestId("sideImage")).toBeInTheDocument();
    });    
});