import mangoose from "mongoose";

const bookSchema = new mangoose.Schema(
  {
    id: { type: mangoose.Types.ObjectId, ref: "Book", required: true },
    book_name: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      trim: true,
    },
    book_discripyion: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      trim: true,
    },
    book_availability: { type: Boolean, default: false },
    book_image: { data: Buffer, contentType: String },
  },
  { timestamps: true }
);
const bookModel = mangoose.model("book", bookSchema);
export default bookModel;
