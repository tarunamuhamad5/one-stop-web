import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";

export default function Teknis() {
    const row1 = [
        {
            title: "RKAKL/POK",
            src_image: "/",
            link: "",
            websiteType: "internal",
        },
        {
            title: "Anggaran",
            src_image: "/",
            link: "",
            websiteType: "internal",
        },
        {
            title: "Honor",
            src_image: "/",
            link: "",
            websiteType: "internal",
        },
        {
            title: "Mitra",
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
                    <Typography variant="h1">Keuangan</Typography>
                    <ContentCard DataContent={row1} />
                </Container>
            </Box>
        </div>
    );
}
