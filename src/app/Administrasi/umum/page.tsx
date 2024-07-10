"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function umum() {
    const row1 = [
        {
            title: "Surat Dinas",
            src_image: "/logo/suratdinas.png",
            link: "https://docs.google.com/spreadsheets/d/1gyudWi6NiBg7rn16JAtVmwYtPth73LFgufUWzbLyhF4/edit?usp=sharing",
            websiteType: "external",
        },
        {
            title: "Nota Dinas",
            src_image: "/logo/notadinas.png",
            link: "/Administrasi/umum/notadinas",
            websiteType: "internal",
        },
        {
            title: "Caput",
            src_image: "/logo/caput.png",
            link: "/Administrasi/umum/caput",
            websiteType: "internal",
        },
    ];
    const row2 = [
        {
            title: "Mitra",
            src_image: "/logo/mitra.png",
            link: "/Administrasi/umum/mitra",
            websiteType: "internal",
        },
        {
            title: "Link Terkait",
            src_image: "/logo/linkterkait.png",
            link: "/Administrasi/umum/linkterkait",
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
                    <Typography
                        variant="h3"
                        style={{
                            fontWeight: 'bold'
                        }}>
                        Umum</Typography>
                    <ContentCard DataContent={row1} />
                    <ContentCard DataContent={row2} />
                </Container>
            </Box>
        </div>
    );
}
