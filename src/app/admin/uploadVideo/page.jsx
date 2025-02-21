"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

const UploadVideoPage = () => {
    const [videoURL, setVideoURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [video, setVideo] = useState([]);

    console.log(video);

    // Fetch the uploaded video URLs
    const fetchVideo = async () => {
        try {
            const response = await axios.post("/api/v1/admin/getvideo", {});
            const result = response.data;

            if (result?.length) {
                setVideo(result); // Assuming the response is an array of videos
            }
        } catch (error) {
            console.log(error);
            toast(error?.response?.data?.message || "Failed to fetch videos");
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("/api/v1/admin/addvideo", { url: videoURL }, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            setLoading(false);
            toast("Video URL Uploaded Successfully");

            setVideo([...video, { url: videoURL }]); // Update UI immediately
            setVideoURL(""); // Clear input field
        } catch (error) {
            console.log(error);
            toast(error?.response?.data?.message || "Failed to upload video");
            setLoading(false);
        }
    };

    const deleteVideo = async (url) => {
        try {
            await axios.delete("/api/v1/admin/deletevideo", {
                data: { url },
            });

            toast("Video deleted successfully");

            // Remove deleted video from state
            setVideo(video.filter((v) => v.url !== url));
        } catch (error) {
            console.log(error);
            toast(error?.response?.data?.message || "Failed to delete video");
        }
    };

    useEffect(() => {
        fetchVideo();
    }, []);

    return (
        <div className="w-full min-h-screen flex justify-center pt-24">
            <div className="flex flex-col items-center w-full md:w-96">
                <form
                    className="flex flex-col gap-4 p-4 mb-12 w-full"
                    onSubmit={submitHandler}
                >
                    <label htmlFor="videoURL">YouTube Video URL</label>
                    <input
                        type="url"
                        id="videoURL"
                        value={videoURL}
                        onChange={(e) => setVideoURL(e.target.value)}
                        className="outline-blue-200 border rounded border-blue-200 py-2 px-1"
                        placeholder="Paste YouTube Video URL"
                        required
                    />
                    <button
                        disabled={loading}
                        className="bg-blue-200 h-14 rounded"
                        type="submit"
                    >
                        {loading ? "Uploading..." : "Upload Video"}
                    </button>
                </form>

                {/* Show uploaded videos */}
                {video?.length > 0 && (
                    <div className="w-full md:w-96">
                        <h3 className="text-xl font-semibold mb-4">Uploaded Videos:</h3>
                        {video.map((v, index) => (
                            <div key={index} className="mb-6 flex flex-col items-center">
                                <div className="aspect-w-16 aspect-h-9">
                                    {/* Render the YouTube video */}
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`${v?.url}`}
                                        title={`Uploaded Video ${index + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <button
                                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                                    onClick={() => deleteVideo(v.url)}
                                >
                                    Delete Video
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadVideoPage;
