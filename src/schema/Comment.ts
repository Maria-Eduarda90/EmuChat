import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const modelName =
  mongoose.models.Comment || mongoose.model("Comment", userSchema);

export default modelName;
