import User from "@/schema/User";

import { UserRegisterType } from "@/@types/UserRegister";
import { connect } from "@/services/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { name, email, password } =
      (await request.json()) as UserRegisterType;

    await connect();

    const emailExists = await User.findOne({
      email,
    });

    if (emailExists) {
      return NextResponse.json({
        message: "E-mail já cadastrado",
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    return NextResponse.json({
      message: "Usuario criado com sucesso!",
      status: 201,
    });
  } catch (err) {
    return NextResponse.json({
      err: "Erro ao cadastrar usuario",
      status: 500,
    });
  }
}
