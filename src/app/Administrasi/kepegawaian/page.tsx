"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function kepegawaian() {

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
                        style={{
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/13rG2Bz5c4szbGcq5N0azLEuHdd2Yq9Rf/edit?usp=sharing&ouid=118011472020255728204&rtpof=true&sd=true");
                        }}
                    >
                        Matriks Perjalanan Dinas 2024
                    </Typography>
                    <iframe
                        width={1200}
                        height={800}
                        src="https://docs.google.com/spreadsheets/d/13rG2Bz5c4szbGcq5N0azLEuHdd2Yq9Rf/edit?usp=sharing&ouid=118011472020255728204&rtpof=true&sd=true"
                    ></iframe>

                </Container>
            </Box>
        </div>
    );
}
