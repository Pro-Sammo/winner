import Item from "../../../../../schema/itemschema";
import connectDB from "../../../../../db/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    connectDB();
    const url = req.nextUrl;
    const searchParams = url.searchParams;

    const shortDescription = searchParams.get("shortDescription");
    const category = searchParams.get("category");


    const allItem = await Item.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "categoryData",
        },
      },
      {
        $unwind: "$categoryData" 
      },
      {
        $match: {
          "categoryData.name": category
        }
      }
    ]);


    if (!allItem) {
      return NextResponse.json(
        { success: true, message: "No Item Available" },
        { status: 400 }
      );
    }

    return NextResponse.json(allItem, { status: 200 });
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
