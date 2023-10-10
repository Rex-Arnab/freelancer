import dbConnect from "@/lib/mongo";
import { DeleteTodo, NewTodo, UpdateTodo, listAllTodo } from "@/lib/todolist";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  await dbConnect();

  const body = await req.json();
  const { title } = body;
  const new_todo = await NewTodo(title);

  return NextResponse.json(new_todo);
}

export async function GET() {
  await dbConnect();

  const todos = await listAllTodo();

  return NextResponse.json(todos);
}

export async function PUT(req: any) {
  await dbConnect();

  const body = await req.json();
  const { id, title } = body;

  const updated_todo = await UpdateTodo(id, title);

  return NextResponse.json(updated_todo);
}

export async function DELETE(req: any) {
  await dbConnect();

  const body = await req.json();
  const { id } = body;
  const deleted_todo = await DeleteTodo(id);

  return NextResponse.json(deleted_todo);
}
