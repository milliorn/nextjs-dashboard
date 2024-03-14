/**
 * This file contains the authentication logic using NextAuth.
 */

import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';

/**
 * The authentication object, containing the authentication configuration and methods.
 */
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [ Credentials({}) ],
});