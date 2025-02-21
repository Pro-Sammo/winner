import YouTubeVideo from "../../../../../schema/videoschema";
import connectDB from "../../../../../db/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    // Fetch all video URLs
    const allVideos = await YouTubeVideo.find();

    if (!allVideos || allVideos.length === 0) {
      return NextResponse.json(
        { success: false, message: "No videos available" },
        { status: 400 }
      );
    }

    return NextResponse.json(allVideos, { status: 200 });
  } catch (error) {
    console.error("Error fetching video URLs:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch videos", error: error.message },
      { status: 500 }
    );
  }
}
