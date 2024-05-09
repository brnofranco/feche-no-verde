import prisma from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

interface CategoryData {
	title: string;
}

export async function GET(req: NextRequest, res: NextResponse) {
	const data = await prisma.category.findMany();

	return NextResponse.json(data);
}

export async function POST(req: NextRequest, res: NextResponse) {
	const { title }: CategoryData = await req.json();

	const category = await prisma.category.findUnique({ where: { title } });
	const categoryAlreadyExists = category?.title.toLowerCase().trim() === title.toLowerCase().trim();

	if (categoryAlreadyExists) {
		return NextResponse.json({ message: 'Categoria já existe!' });
	}

	const data = await prisma.category.create({
		data: {
			title,
		},
	});

	return NextResponse.json(data);
}
