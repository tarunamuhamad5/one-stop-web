import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";

export default function Teknis() {
    const row1 = [
        // {
        // title: "RKAKL/POK",
        // src_image: "/logo/pok.png",
        // link: "",
        // websiteType: "internal",
        // },
        {
            title: "RPD",
            src_image: "/logo/anggaran.png",
            link: "/Administrasi/keuangan/rpd",
            websiteType: "internal",
        },
        {
            title: "Honor",
            src_image: "/logo/honor.png",
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
