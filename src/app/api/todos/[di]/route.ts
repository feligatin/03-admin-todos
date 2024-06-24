import prisma from '@/app/prisma';
import { NextResponse, NextRequest } from 'next/server'

interface Segments{
    params:{
        di:string;
    }
}

export async function GET(request: Request, {params}: Segments) { 
console.log(params);

const todo = await  prisma.todo.findUnique(({
    where:{
        id:params.di
    }
}));
console.log(todo);
if(!todo){
    return NextResponse.json({message:"No se encontro el id"},{status:404});
}
  return NextResponse.json(todo);
}