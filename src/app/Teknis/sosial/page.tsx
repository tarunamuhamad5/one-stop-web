"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function Teknis() {
    const DataRoles = [
        {
            title: "PODES",
            src_image: "",
            link: "/Teknis/sosial/podes",
            websiteType: "internal",
        },
        {
            title: "Susenas",
            src_image: "/content/sosial/susenas.png",
            link: "/Teknis/sosial/susenas",
            websiteType: "internal",
        },
        {
            title: "Sakernas",
            src_image: "",
            link: "/Teknis/sosial/sakernas",
            websiteType: "internal",
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
                    <Typography variant="h1">Sosial</Typography>
                    <ContentCard DataContent={DataRoles} />
                </Container>
            </Box>
        </div>
    );
}
