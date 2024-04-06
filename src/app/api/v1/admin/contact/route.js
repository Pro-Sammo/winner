import { NextResponse } from "next/server";
import connectDB from "../../../../../db/db";
import Contact from "../../../../../schema/contactschema";

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, address, message } =
      await req.json();

    connectDB();

    const contactExist = await Contact.findOne({ phone: phone });

    if (contactExist)
      return NextResponse.json(
        { success: false, message: "You've Already Submited!" },
        { status: 400 }
      );

    const contact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      address,
      message,
    });
    await contact.save({ timestamps: { createdAt: true, updatedAt: false } });
    return NextResponse.json(
      { success: true, message: "Thanks For Submitting!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed To Submit",
        error: error.message,
      },
      { status: 400 }
    );
  }
}
