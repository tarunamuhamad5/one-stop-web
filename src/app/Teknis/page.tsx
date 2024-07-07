import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import ContentTeknis from "@/components/ContentTeknis";

export default function Teknis() {
    const row1 = [
        {
            title: "Ketua BPS",
            src_image: "/team/kepala-bps.png",
            link: "/Teknis",
            websiteType: "internal",
        },
    ];

    const row2 = [
        {
            title: "Sub-Bagian Umum",
            src_image: "/team/subag.png",
            link: "/Teknis/umum",
            websiteType: "internal",
        },
        {
            title: "IPDS",
            src_image: "/team/ipds.png",
            link: "/Teknis/ipds",
            websiteType: "internal",
        },
        {
            title: "sosial",
            src_image: "/team/sosial.png",
            link: "/Teknis/sosial",
            websiteType: "internal",
        },
    ];

    const row3 = [
        {
            title: "Produksi",
            src_image: "/team/produksi.png",
            link: "/Teknis/produksi",
            websiteType: "internal",
        },
        {
            title: "Neraca",
            src_image: "/team/neraca.png",
            link: "/Teknis/neraca",
            websiteType: "internal",
        },
        {
            title: "Distribusi",
            src_image: "/team/distribusi.png",
            link: "/Teknis/distribusi",
            websiteType: "internal",
        },
    ];
    const row4 = [
        {
            title: "Lainnya",
            src_image: "/team/lainnya.png",
            link: "/",
            websiteType: "internal",
        },
    ];

    return (
        <div>
            <Box
                mt={15}
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
                    <Typography variant="h1">Teknis</Typography>
                    <ContentTeknis DataPosition={row1} />
                    <ContentTeknis DataPosition={row2} />
                    <ContentTeknis DataPosition={row3} />
                    <ContentTeknis DataPosition={row4} />
                </Container>
            </Box>
        </div>
    );
}
