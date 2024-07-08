"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function Teknis() {
    const row1 = [
        // {
        //     title: "Beban Kerja",
        //     src_image: "/logo/bebankerja.png",
        //     link: "",
        //     websiteType: "internal",
        // },
        {
            title: "Nota Dinas",
            src_image: "/logo/suratdinas.png",
            link: "/Administrasi/umum/notadinas",
            websiteType: "internal",
        },
        {
            title: "Caput",
            src_image: "/logo/caput.png",
            link: "",
            websiteType: "internal",
        },
    ];
    const row2 = [
        {
            title: "Mitra",
            src_image: "/logo/mitra.png",
            link: "https://docs.google.com/spreadsheets/d/19pb8YGtJ4yWQ6RZpm0WPGprYgf_gkU-HCu4SZeveVR8/edit?g",
            websiteType: "external",
        },
        {
            title: "Link Terkait",
            src_image: "/logo/linkterkait.png",
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
                    <ContentCard DataContent={row2} />
                </Container>
            </Box>
        </div>
    );
}
