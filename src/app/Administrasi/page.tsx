import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";

export default function Teknis() {
    const row1 = [
        {
            title: "Keuangan",
            src_image: "",
            link: "/Administrasi/keuangan",
            websiteType: "internal",
        },
        {
            title: "Kepegawaian",
            src_image: "/",
            link: "/Administrasi/kepegawaian",
            websiteType: "internal",
        },
        {
            title: "Umum",
            src_image: "/",
            link: "/Administrasi/umum",
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
                    <Typography variant="h1">Administrasi</Typography>
                    <ContentCard DataContent={row1} />
                </Container>
            </Box>
        </div>
    );
}
