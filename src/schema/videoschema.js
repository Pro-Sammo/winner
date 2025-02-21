import mongoose from "mongoose";

const youtubeVideoSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/,
        "Please enter a valid YouTube URL",
      ],
    },
  },
  { timestamps: true }
);

const YouTubeVideo =
  mongoose.models.YouTubeVideo || mongoose.model("YouTubeVideo", youtubeVideoSchema);

export default YouTubeVideo;
