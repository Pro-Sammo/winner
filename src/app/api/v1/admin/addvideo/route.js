import YouTubeVideo from "@/schema/videoschema";
import connectDB from "@/db/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the request body
    const { url } = await req.json();

    console.log(url)

    // Validate input
    if (!url) {
      return NextResponse.json(
        { success: false, message: "URL is required" },
        { status: 400 }
      );
    }

    // Check if the URL already exists
    const alreadyExist = await YouTubeVideo.findOne({ url });

    if (alreadyExist) {
      return NextResponse.json(
        { success: false, message: "Video already exists" },
        { status: 400 }
      );
    }

    // Save the new YouTube video URL
    await YouTubeVideo.create({ url });

    return NextResponse.json(
      { success: true, message: "Video URL uploaded successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error uploading video URL:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to upload video URL",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
