import connectDB from "@/db/db";
import Item from "@/schema/itemschema";
import { NextResponse } from "next/server";

export async function GET(req, params) {
  try {
    connectDB();
    const id = params.params.id;
    const foundItem = await Item.findById({ _id: id });
    return NextResponse.json(foundItem, { status: 201 });
  } catch (error) {
    return NextResponse.json({message:"Image upload failed"},{status:400})
  }
}
