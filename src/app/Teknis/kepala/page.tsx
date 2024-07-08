import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";

export default function kepala() {
    const row1 = [
        {
            title: "Matriks Peran Hasil",
            src_image: "/logo/.png",
            link: "https://docs.google.com/spreadsheets/d/1ND3NMhDVxibE8ySotzhqWGDzP5P2hHs_r6AflllD3fk/edit?usp=sharing",
            websiteType: "external",
        },
        {
            title: "Form Rencana Aksi",
            src_image: "/logo/.png",
            link: "https://docs.google.com/spreadsheets/d/1vbM7PaTAfMyaWzyHLwrY67suIBx7MZNl/edit?usp=sharing&ouid=118011472020255728204&rtpof=true&sd=true",
            websiteType: "external",
        },
        // {
        //     title: "Umum",
        //     src_image: "/logo/umum.png",
        //     link: "/Administrasi/umum",
        //     websiteType: "internal",
        // },
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
                    <ContentCard DataContent={row1} />
                </Container>
            </Box>
        </div>
    );
}
