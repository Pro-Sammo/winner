import Category from "../../../../../schema/categoryschema";
import connectDB from "../../../../../db/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name } = await req.json();
    connectDB();
    const categoryExist = await Category.findOne({ name: name });
    if (categoryExist)
      return NextResponse.json(
        { success: false, message: "Category already exists" },
        { status: 400 }
      );
     await Category.create({ name });

   return NextResponse.json(
        { success: true, message: "Category Created Successfully" },
        { status: 201}
      );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed To Create Category",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
