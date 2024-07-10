"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function sakernas() {
    const DataRoles = [
        {
            title: "Alokasi dan Monitoring",
            src_image: "/logo/monitoring.png",
            link: "https://docs.google.com/spreadsheets/d/16dLfTVDFFEREyk7WOESDmR2r2Q0UxyH6jnUnWgx6aWE/edit?usp=sharing",
            websiteType: "external",
        },
        {
            title: "Anomali",
            src_image: "/logo/anomali.png",
            link: "https://docs.google.com/spreadsheets/d/1z106TF_1iqVqXASNOAG3txtTMWc1BAon8zeY3hCio_k/edit?usp=sharing",
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
                    <Typography
                        variant="h3"
                        style={{ fontWeight: 'bold' }}>
                        Sakernas Februari 2024
                    </Typography>
                    <ContentCard DataContent={DataRoles} />

                </Container>
            </Box>
        </div>
    );
}
