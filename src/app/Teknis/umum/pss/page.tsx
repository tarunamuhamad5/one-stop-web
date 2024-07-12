"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function umum() {
    const DataRoles = [
        {
            title: "Pelaksanaan PSS",
            src_image: "/logo/pss.png",
            link: "https://drive.google.com/drive/folders/125um0A2_oXtZXFxezKfPlMLQh0cE3n20?usp=sharing",
            websiteType: "external",
        },
        {
            title: "EPSS",
            src_image: "/logo/epss.png",
            link: "https://drive.google.com/drive/folders/1jEZKSs64cfvDw_V450Nrb_5t-MdMzHl0?usp=sharing ",
            websiteType: "external",
        },
    ];

    const OpenWebsite = (link: string) => {
        window.open(link, "_blank");
    };

    const router = useRouter();

    return (
        <div>
            <Box
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
                        style={{ fontWeight: 'bold'}}
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/14fY7r3FXaX08qlgyPB67HbdFvaEfQagE0nHZcQMlj2A/edit?usp=sharing");
                        }}
                    >
                        Pembinaan Statistik Sektoral
                    </Typography>

                    <ContentCard DataContent={DataRoles} />
                </Container>
            </Box>
        </div>
    );
}
