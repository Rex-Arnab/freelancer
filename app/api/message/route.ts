import dbConnect from "@/lib/mongo";
import {
  newMessage,
  listAllMessages,
  UpdateMessage,
  DeleteMessage,
} from "@/lib/message";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  await dbConnect();

  const body = await req.json();
  const { message } = body;
  const new_message = await newMessage(message);

  return NextResponse.json(new_message);
}

export async function GET() {
  await dbConnect();

  const messages = await listAllMessages();

  return NextResponse.json(messages);
}

export async function PUT(req: any) {
  await dbConnect();

  const body = await req.json();
  const { id, message } = body;

  const updated_message = await UpdateMessage(id, message);

  return NextResponse.json(updated_message);
}

export async function DELETE(req: any) {
  await dbConnect();

  const body = await req.json();
  const { id } = body;
  const deleted_message = await DeleteMessage(id);

  return NextResponse.json(deleted_message);
}
