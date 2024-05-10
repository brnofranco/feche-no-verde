import prisma from '@/src/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

interface MovementData {
	title: string;
	value: number;
	isExpense: boolean;
	isFixed: boolean;
	finishedAt?: Date;
	categoryId: number;
	userId: string; //TODO: get user by token
}

export async function GET(req: NextRequest, res: NextResponse) {
	//TODO: get only by user
	const data = await prisma.movement.findMany();

	return NextResponse.json(data);
}

export async function POST(req: NextRequest, res: NextResponse) {
	const { title, value, isExpense, isFixed, finishedAt, categoryId, userId }: MovementData = await req.json();

	const data = await prisma.movement.create({
		data: {
			title,
			value,
			isExpense,
			isFixed,
			finishedAt,
			categoryId,
			userId,
		},
	});

	return NextResponse.json(data);
}
