import { NextResponse } from "next/server";
import Comment from "@/schema/Comment";

import { CommentsType } from "@/@types/Comment";
import { connect } from "@/services/db";

export async function POST(request: Request) {
  try {
    const { text, userId } = (await request.json()) as CommentsType;

    await connect();

    const comment = new Comment({
      userId,
      text,
    });

    comment.save();

    return NextResponse.json({
      message: "Comentario criado com sucesso",
      status: 201,
    });
  } catch (err) {
    return NextResponse.json({
      err: "Erro ao criar comentario",
      status: 500,
    });
  }
}
