import Category from "../../../../../schema/categoryschema";
import connectDB from "../../../../../db/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {

    connectDB();
    const allCategory = await Category.find();
    if (!allCategory)
      return NextResponse.json(
        { success: false, message: "No Category Available" },
        { status: 400 }
      );

   return NextResponse.json(
        allCategory,
        { status: 201}
      );
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
