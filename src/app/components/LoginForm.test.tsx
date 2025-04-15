import { describe, it, expect } from 'vitest';
import { auth } from '../__mocks__/firebase';

describe('firebaseAuth', () => {
    it('Should sign in with email and password', async () => {
        const result: { user: { uid: string; email: string } } = await auth.signInWithEmailAndPassword(
            'test@gmail.com',
            'password123'
          );
          expect(result.user.uid).toBe('test-uid');
          expect(result.user.email).toBe('test@gmail.com');
    }
    );
});