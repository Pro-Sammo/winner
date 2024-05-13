import Category from "../../../../../schema/categoryschema";
import connectDB from "../../../../../db/db";
import { NextResponse } from "next/server";

export async function POST(req,res) {
  try {
    connectDB();

    const allCategory = await Category.find();
    console.log(allCategory)
    if (!allCategory)
      return NextResponse.json(
        { success: false, message: "No Category Available" },
        { status: 400 }
      );
    return NextResponse.json(allCategory, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed To Fetch Category",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
