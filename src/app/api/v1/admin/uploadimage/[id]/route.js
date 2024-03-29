import connectDB from "@/db/db";
import Item from "@/schema/itemschema";
import { NextResponse } from "next/server";

export async function POST(req, params) {
  try {
    connectDB()
    const id = params.params.id;
    const {public_id,url} =await req.json()

    const updatedItem = await Item.findByIdAndUpdate(id,{
       $push:{
        images:{
            publicId:public_id
        }
       }
    })
    
    return NextResponse.json({ message: "image upload successfully" },{status:201});
  } catch (error) {
    return NextResponse.json({message:"Image upload failed"},{status:400})
  }
}
