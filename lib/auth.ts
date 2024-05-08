import { NextAuthOptions, User, getServerSession } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';

import prisma from './prisma';

const fields = {
	name: {
		label: 'Nome/Apelido',
		type: 'text',
	},
	email: {
		label: 'Email',
		type: 'email',
		placeholder: 'example@example.com',
	},
	password: { label: 'Senha', type: 'password' },
};

export const authConfig: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'account',
			credentials: fields,
			async authorize(credentials) {
				if (!credentials || !credentials.email || !credentials.password || !credentials.name) return null;

				const user = await prisma.user.findFirst({
					where: { email: credentials.email },
				});

				//Verify Password here
				//We are going to use a simple === operator
				//In production DB, passwords should be encrypted using something like bcrypt...
				if (user && user.password === credentials.password) {
					const { password, id, ...dbUserWithoutPassword } = user;
					return dbUserWithoutPassword as User;
				}

				return null;
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
	],
};

// export async function loginIsRequiredServer() {
// 	const session = await getServerSession(authConfig);
// 	if (!session) return redirect('/');
// }

// export function loginIsRequiredClient() {
// 	if (typeof window !== 'undefined') {
// 		const session = useSession();
// 		const router = useRouter();
// 		if (!session) router.push('/');
// 	}
// }
