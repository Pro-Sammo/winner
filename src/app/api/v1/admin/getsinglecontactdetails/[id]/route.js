import { NextResponse } from "next/server";
import connectDB from "../../../../../../db/db";
import Contact from "../../../../../../schema/contactschema";


export async function GET(req,params){
try {
    connectDB()
    const id = params.params.id
   const details = await Contact.findById(id)
   console.log(details)
    return NextResponse.json(details,{status:201})
} catch (error) {
    return NextResponse.json({message:"Failed To Fetch Single Details"},{status:400})
}
}