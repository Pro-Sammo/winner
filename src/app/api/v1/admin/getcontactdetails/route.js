import { NextResponse } from "next/server";
import connectDB from "../../../../../db/db";
import Contact from "../../../../../schema/contactschema";

export async function GET(req) {
  try {
    connectDB();
    const contactDetails = await Contact.find();
    return NextResponse.json(contactDetails, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed To Fetch",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
