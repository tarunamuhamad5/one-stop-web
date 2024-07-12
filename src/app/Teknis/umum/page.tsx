"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function umum() {
    const row1 = [
        {
            title: "Hubungan Masyarakat",
            src_image: "/logo/humas.png",
            link: "/Teknis/umum/humas",
            websiteType: "internal",
        },
        {
            title: "Pembinaan Statistik Sektoral",
            src_image: "/logo/sdi.png",
            link: "/Teknis/umum/pss",
            websiteType: "internal",
        },
    ];
    const row2 = [
        {
            title: "Desa Cinta Statistik",
            src_image: "/logo/descan.png",
            link: "/Teknis/umum/descan",
            websiteType: "internal",
        },
        {
            title: "Zona Integritas",
            src_image: "/logo/zi.png",
            link: "/Teknis/umum/zi",
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
                mt={10}
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
                        style={{ fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/14fY7r3FXaX08qlgyPB67HbdFvaEfQagE0nHZcQMlj2A/edit?usp=sharing");
                        }}
                    >
                        Umum
                    </Typography>

                    <ContentCard DataContent={row1} />
                    <ContentCard DataContent={row2} />
                </Container>
            </Box>
        </div>
    );
}
