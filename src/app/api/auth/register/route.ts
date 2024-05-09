import prisma from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

interface ResponseData {
	message: string;
}

interface UserData {
	name: string;
	email: string;
	password: string;
}

export async function POST(req: NextRequest, res: NextResponse<ResponseData>) {
	const { name, email, password }: UserData = await req.json();

	const userAlreadyRegistered = await prisma.user.findUnique({ where: { email } });

	if (userAlreadyRegistered) {
		return NextResponse.json({ message: 'Usuário já está cadastrado!' });
	}

	await prisma.user.create({
		data: {
			name,
			email,
			password,
		},
	});

	return NextResponse.json({ message: 'Usuário cadastrado!' });
}
