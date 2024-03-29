import { NextResponse } from "next/server";
import connectDB from "../../../../../../db/db";
import Category from "../../../../../../schema/categoryschema";


export async function DELETE(req,params){
try {
    connectDB()
    const id = params.params.id
   const newcategory = await Category.findByIdAndDelete(id)
    return NextResponse.json({message:"Category Deleted Successfully"},{status:201})
} catch (error) {
    return NextResponse.json({message:"Failed To Delete Category"},{status:400})
}
}