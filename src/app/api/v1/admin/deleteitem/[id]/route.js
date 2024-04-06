import { NextResponse } from "next/server";
import connectDB from "../../../../../../db/db";
import Item from "../../../../../../schema/itemschema";


export async function DELETE(req,params){
try {
    connectDB()
    let id = params.params.id
   const deletedItem = await Item.findByIdAndDelete(id)

    return NextResponse.json({message:"Item Deleted Successfully"},{status:201})
} catch (error) {
    return NextResponse.json({message:"Failed To Delete Item"},{status:400})
}
}