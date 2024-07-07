import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";

export default function Teknis() {
    const DataRoles = [
        {
            title: "Susenas Maret 20241",
            body: "Developing an embedded system to solve problems.",
            src_image: "/content/sosial/susenas.png",
            link: "/",
            websiteType: "internal",
        },
        {
            title: "Susenas Maret 20242",
            body: "Developing an embedded system to solve problems.",
            src_image: "/content/sosial/susenas.png",
            link: "/",
            websiteType: "external",
        },
        {
            title: "Susenas Maret 20243",
            body: "Developing an embedded system to solve problems.",
            src_image: "/content/sosial/susenas.png",
            link: "https://www.youtube.com/",
            websiteType: "external",
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
                </Container>
            </Box>
        </div>
    );
}
