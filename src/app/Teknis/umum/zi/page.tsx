"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function zi() {
    const OpenWebsite = (link: string) => {
        window.open(link, "_blank");
    };

    const router = useRouter();

    return (
        <div>
            <Box
                mt={15}
                minHeight={"100vh"}
                minWidth={"100%"}
                sx={{
                    alignContent: "center",
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                <Container
                    sx={{
                        textAlign: "center",
                        left: 0,
                        top: 0,
                    }}
                >
                    <Typography
                        variant="h3"
                        style={{ fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/1pQLp4MBgZLNbA7o-yPa6g2TYK6HZOF3R/edit?usp=sharing&ouid=107367123867215816683&rtpof=true&sd=true");
                        }}
                    >
                        Zona Integritas
                    </Typography>
                    <iframe
                        width={1200}
                        height={800}
                        src="https://docs.google.com/spreadsheets/d/1pQLp4MBgZLNbA7o-yPa6g2TYK6HZOF3R/edit?usp=sharing&ouid=107367123867215816683&rtpof=true&sd=true"
                    ></iframe>


                </Container>
            </Box>
        </div>
    );
}
