import mongoose from "mongoose";

export async function connect() {
  try {
    if (typeof process.env.MONGOOSE === "undefined") {
      throw new Error("");
    } else {
      await mongoose.connect(process.env.MONGOOSE);
    }
  } catch (err) {
    throw new Error(err as string);
  }
}
