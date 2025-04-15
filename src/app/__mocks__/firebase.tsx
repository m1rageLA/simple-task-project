import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { vi } from "vitest";

export const auth = {
    signInWithEmailAndPassword: vi.fn( async (email: string, password: string) => {
        return {
            user: {
                uid: "test-uid",
                email,
            }
        }
    }),
    signOut: vi.fn(() => {Promise.resolve()}),
}