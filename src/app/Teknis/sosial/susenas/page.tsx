"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function Teknis() {
    const DataRoles = [
        {
            title: "Alokasi",
            src_image: "/logo/susenas.png",
            link: "https://docs.google.com/spreadsheets/d/1Dkf27FBjbG0gdOeHn5EWp1yXgqcfxRXtMq9cKfW2Ti0/edit?usp=sharing",
            websiteType: "external",
        },
        {
            title: "Monitoring",
            src_image: "/logo/monitoring.png",
            link: "https://docs.google.com/spreadsheets/d/1i_4pH_LobC6fQpWkL9vt7fLDaed5vobI_pvcuGyuzEI/edit?usp=sharing",
            websiteType: "external",
        },
        {
            title: "Anomali",
            src_image: "/logo/anomali.png",
            link: "https://drive.google.com/drive/folders/14LDCIS-DsmlOk91r88gZdx52whMuDypK?usp=sharing",
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
                        Susenas Maret 2024
                    </Typography>
                    <ContentCard DataContent={DataRoles} />

                </Container>
            </Box>
        </div>
    );
}
