import './uploader.css';
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";

import { Videos, Sidebar } from "./";
import { AiFillFileImage } from 'react-icons/ai';
import {MdCloudUpload, MdDelete} from "react-icons/md";

function Uploader() {
    const [video, setVideo] = useState(null);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No file selected");
    const [fileChunks, setFileChunks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);
    const [videoName, setVideoName] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [description, setDescription] = useState("");

    const uploadFileChunks = async () => {
        const chunkSize = 64 * 1000 * 1000;
        const totalChunks = Math.ceil(video.size / chunkSize);
        const chunkPromises = [];

        for (let i = 0; i < totalChunks; i++) {
            const start = i * chunkSize;
            const end = Math.min(video.size, start + chunkSize);
            const chunk = video.slice(start, end);
            chunkPromises.push(
                axios.post("your-server-endpoint", chunk, {
                    headers: {
                        "Content-Type": "application/octet-stream",
                    },
                })
            );
        }

        try {
            const responses = await Promise.all(chunkPromises);
            console.log("File chunks uploaded successfully:", responses);
        } catch (error) {
            console.error("Error uploading file chunks:", error);
        }
    };

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
                    _____________________________________
                </Typography>
            </Box>
            <main id="app-body-uploader" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '20px' }}>
                    <form>
                        <input
                            id="uploader-form-3"
                            type="text"
                            placeholder="Enter Video Name"
                            value={videoName}
                            onChange={(e) => setVideoName(e.target.value)}
                        />
                        <input
                            id="uploader-form-4"
                            type="text"
                            placeholder="Enter Thumbnail URL"
                            value={thumbnailUrl}
                            onChange={(e) => setThumbnailUrl(e.target.value)}
                        />
                        <textarea
                            id="uploader-form-5"
                            placeholder="Enter Video Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </form>
                    <form id="uploader-form" onClick={() => document.querySelector(".input-field-upload").click()}>
                        <input
                            type="file"
                            accept='video/*'
                            className='input-field-upload'
                            hidden
                            onChange={({ target: { files } }) => {
                                const selectedVideo = files[0];
                                if (selectedVideo) {
                                    setFileName(selectedVideo.name);
                                    setImage(URL.createObjectURL(selectedVideo));
                                    setVideo(selectedVideo);
                                }
                            }}
                        />
                        {image ? (
                            <img src={image} width={150} height={150} alt={fileName} />
                        ) : (
                            <>
                                <MdCloudUpload color='#1475cf' size={60} />
                                <p>Browse Files to Upload</p>
                            </>
                        )}
                    </form>
                    <section id='uploaded-row'>
                        <AiFillFileImage color='#1475cf' />
                        <span id='upload-content'>
                            {fileName}
                            <MdDelete
                                onClick={() => {
                                    setFileName("No file selected");
                                    setImage(null);
                                    setVideo(null); // Clear selected video
                                }}
                            />
                        </span>
                    </section>
                </div>
                <div id="upload-button">
                    {video && (
                        <button onClick={uploadFileChunks}>Upload Video</button>
                    )}
                </div>
            </main>
        </Stack>
    );
}

export default Uploader;