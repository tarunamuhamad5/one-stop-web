import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";

export default function Teknis() {
    const DataRoles = [
        {
            title: "Susenas Maret 2024",
            body: "Developing an embedded system to solve problems.",
            src_image: "/content/sosial/susenas.png",
        },
        {
            title: "Susenas Maret 2024",
            body: "Developing an embedded system to solve problems.",
            src_image: "/content/sosial/susenas.png",
        },
        {
            title: "Susenas Maret 2024",
            body: "Developing an embedded system to solve problems.",
            src_image: "/content/sosial/susenas.png",
        },
    ];

    const DataRoles2 = [
        {
            title: "Susenas Maret 2024",
            body: "Developing an embedded system to solve problems.",
            src_image: "/content/sosial/susenas.png",
        },
        {
            title: "Susenas Maret 2024",
            body: "Developing an embedded system to solve problems.",
            src_image: "/content/sosial/susenas.png",
        },
    ];
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
                    <Typography variant="h1">Teknis Pages</Typography>
                    <ContentCard DataContent={DataRoles} />
                    <ContentCard DataContent={DataRoles2} />
                </Container>
            </Box>
        </div>
    );
}
