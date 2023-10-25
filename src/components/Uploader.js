// uploader.js
import './uploader.css'; // Updated CSS file path
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";
import { AiFillFileImage } from 'react-icons/ai';



function Uploader() {
    const [video, setVideo] = useState(null);
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No file selected");

    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);

        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (

        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
                    _____________________________________
                </Typography>
            </Box>
            <main id="app-body">
                <div>
                    <form
                        id="uploader-form" // Updated form ID
                        onClick={() => document.querySelector(".input-field-upload").click()}
                    >
                        <input type="file" accept='video/*' className='input-field-upload' hidden
                            onChange={({ target: { files } }) => {
                                files[0] && setFileName(files[0].name);
                                if (files) {
                                    setImage(URL.createObjectURL(files[0]))
                                }
                            }}
                        />

                        {image ?
                            <img src={image} width={150} height={150} alt={fileName} />
                            :
                            <>
                                <MdCloudUpload color='#1475cf' size={60} />
                                <p>Browse Files to Upload</p>
                            </>
                        }

                    </form>
                    <section id='uploaded-row'> {/* Updated section ID */}
                        <AiFillFileImage color='#1475cf' />
                        <span id='upload-content'> {/* Updated span ID */}
                            {fileName}
                            <MdDelete
                                onClick={() => {
                                    setFileName("No file selected");
                                    setImage(null);
                                }}
                            />
                        </span>
                    </section>
                </div>
            </main>
        </Stack>
    );
}

export default Uploader;
