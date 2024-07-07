import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";

export default function Teknis() {
    const row1 = [
        {
            title: "Beban Kerja",
            src_image: "/",
            link: "",
            websiteType: "internal",
        },
        {
            title: "Surat Dinas",
            src_image: "/",
            link: "",
            websiteType: "internal",
        },
        {
            title: "Caput",
            src_image: "/",
            link: "",
            websiteType: "internal",
        },
        {
            title: "Link Terkait",
            src_image: "/",
            link: "",
            websiteType: "internal",
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
                    <Typography variant="h1">Umum</Typography>
                    <ContentCard DataContent={row1} />
                </Container>
            </Box>
        </div>
    );
}
