"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function mitra() {
    const DataRoles = [
        ,
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
                        style={{
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/19pb8YGtJ4yWQ6RZpm0WPGprYgf_gkU-HCu4SZeveVR8/edit?g");
                        }}
                    >
                        Alokasi Mitra 2024
                    </Typography>
                    <iframe
                        width={1000}
                        height={800}
                        src="https://docs.google.com/spreadsheets/d/19pb8YGtJ4yWQ6RZpm0WPGprYgf_gkU-HCu4SZeveVR8/edit?g"
                    ></iframe>

                </Container>
            </Box>
        </div>
    );
}
