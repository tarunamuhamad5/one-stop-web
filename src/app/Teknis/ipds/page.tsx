"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function ipds() {
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
                        variant="h3"
                        style={{ fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/1KQs9g7rForrcNxpL3Qe8FH9BZLDOMhW6iILhUyxjzM4/edit?usp=sharing");
                        }}
                    >
                        Monitoring DLS Provinsi Sumatera Selatan
                    </Typography>
                    <iframe
                        width={1200}
                        height={800}
                        src="https://docs.google.com/spreadsheets/d/1KQs9g7rForrcNxpL3Qe8FH9BZLDOMhW6iILhUyxjzM4/edit?usp=sharing"
                    ></iframe>

                </Container>
            </Box>
        </div>
    );
}
