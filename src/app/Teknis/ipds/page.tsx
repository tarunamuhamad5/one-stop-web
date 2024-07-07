"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function distribusi() {
    const DataRoles = [
        ,
    ];

    const baris2 = [
        {

        },
    ];

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
                    <ContentCard DataContent={DataRoles} />
                    <Typography
                        variant="h2"
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/1KQs9g7rForrcNxpL3Qe8FH9BZLDOMhW6iILhUyxjzM4/edit?usp=sharing");
                        }}
                    >
                        Monitoring DLS Provinsi Sumatera Selatan
                    </Typography>
                    <iframe
                        width={1000}
                        height={800}
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQPO9GXVty1XTG5yBya9_EgiH3xVNQp1cuOq8dVh0K15Ehh--P3lgkcIquVQ2p436wmm8aDx_FtvwsV/pubhtml"
                    ></iframe>
                    
                </Container>
            </Box>
        </div>
    );
}
