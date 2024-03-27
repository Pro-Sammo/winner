import Item from "../../../../../schema/itemschema";
import connectDB from "../../../../../db/db";
import { NextResponse } from "next/server";

export async function GET(res) {
 try {
  connectDB()
  const allItem = await Item.find();
  if (!allItem) {
    return NextResponse.json(
      { success: true, message: "No Item Available" },
      { status: 400 }
    );
  }
  return NextResponse.json( allItem , { status: 201 });
 } catch (error) {
  return NextResponse.json(
    {
      success: false,
      message: "Failed to fetch item",
      error: error.message,
    },
    { status: 400 }
  );
 }

 
}
