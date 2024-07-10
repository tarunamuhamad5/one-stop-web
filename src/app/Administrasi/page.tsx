import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";

export default function Administrasi() {
    const row1 = [
        {
            title: "Keuangan",
            src_image: "/logo/keuangan.png",
            link: "/Administrasi/keuangan",
            websiteType: "internal",
        },
        {
            title: "Kepegawaian",
            src_image: "/logo/kepegawaian.png",
            link: "/Administrasi/kepegawaian",
            websiteType: "internal",
        },
        {
            title: "Umum",
            src_image: "/logo/umum.png",
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
                    <Typography variant="h3"
                        style={{
                            fontWeight: 'bold'
                        }}>Administrasi</Typography>
                    <ContentCard DataContent={row1} />
                </Container>
            </Box>
        </div>
    );
}
