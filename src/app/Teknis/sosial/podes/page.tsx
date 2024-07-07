"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function Teknis() {
    const DataRoles = [
        {
            title: "Alokasi dan Monitoring",
            src_image: "",
            link: "https://docs.google.com/spreadsheets/d/1JwdMwj24RbHtx6g89diIpiB1eep9H1N2blY0WjhcPAM/edit?usp=sharing",
            websiteType: "external",
        },
        {
            title: "Anomali",
            src_image: "",
            link: "https://docs.google.com/spreadsheets/d/1EKHP9ao6YMl-H7UNnZlDOAQdMCY7Nh7YXYUbRGALZMw/edit?usp=sharing",
            websiteType: "external",
        },
        {
            title: "Analisis IKG dan ID",
            src_image: "",
            link: "https://docs.google.com/spreadsheets/d/1TIFCju_9meaSVPpSk2btttHOVuqWW6QlduLNgNWJc3E/edit?usp=sharing",
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
                    <Typography variant="h2">
                        PODES 2024
                    </Typography>
                    <ContentCard DataContent={DataRoles} />

                </Container>
            </Box>
        </div>
    );
}
