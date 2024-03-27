import Item from "../../../../../schema/itemschema";
import connectDB from "../../../../../db/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    model,
    shortDescription,
    longDescription,
    size,
    brand,
    voltage,
    power,
    temperature,
    time,
    speed,
  } = await req.json();


  try {
    await connectDB();

    const alreadyExist = await Item.findOne({model})
    console.log(alreadyExist)

    if(alreadyExist){
      return NextResponse.json(
        { success: true, message: "Model already exists" },
        { status: 400}
      );
    }


    const newItem = await Item.create({
      model,
      shortDescription,
      longDescription,
      size,
      brand,
      voltage,
      power,
      temperature,
      time,
      averageSpeed: speed,
    });




    return NextResponse.json(
      { success: true, message: "Item Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create item",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
