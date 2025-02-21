import YouTubeVideo from "@/schema/videoschema";
import connectDB from "@/db/db";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    // Connect to the database
    await connectDB();

    // Parse the request body
    const { url } = await req.json();

    console.log(url);

    // Validate input
    if (!url) {
      return NextResponse.json(
        { success: false, message: "URL is required" },
        { status: 400 }
      );
    }

    // Find and delete the video
    const deletedVideo = await YouTubeVideo.findOneAndDelete({ url });

    if (!deletedVideo) {
      return NextResponse.json(
        { success: false, message: "Video not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Video deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting video:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete video",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
