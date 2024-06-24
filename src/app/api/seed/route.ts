import prisma from "@/app/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany({});

  await prisma.todo.createMany({
    data: [
      { description: "Piedra de alma", complete: true },
      { description: "Buy Eggs" },
      { description: "Buy Bread" },
      { description: "Buy Milk" },
      { description: "Buy Butter" },
    ],
  });

  return NextResponse.json({ message: "Seed Executed" });
}
