import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";

export default function Teknis() {
    const DataRoles = [
        {
            title: "SEP 2024",
            src_image: "/logo/sep.png",
            link: "https://docs.google.com/spreadsheets/d/1pbBV6IaBHldvOfeSb5yIikJaXB7j9ohHxLVTonhns3s/edit?usp=sharing",
            websiteType: "external",
        },
        {
            title: "Ubinan dan KSA",
            src_image: "/logo/ksa.png",
            link: "https://docs.google.com/spreadsheets/d/1CNceqkU52lWoBzmGU_cDq70ERjySnfo94CisstBJTPY/edit?usp=sharing",
            websiteType: "external",
        },
    ];

    const DataRoles2 = [
        {
            title: "Galian-URT dan Captive Power",
            src_image: "/logo/galian.png",
            link: "https://docs.google.com/spreadsheets/d/15814swCZqUxrqToqV3x1SbGODFmzcNI-zbH4hO_hA-o/edit?usp=sharing",
            websiteType: "external",
        },
        {
            title: "UDP, SKTR, dan SKTH",
            src_image: "/logo/konstruksi.png",
            link: "https://docs.google.com/spreadsheets/d/1oIzvksGmmrPvsevYLheQoTM44EBuGbMNBaPCH0yv5oc/edit?usp=sharing",
            websiteType: "external",
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
                    <Typography variant="h1">Produksi</Typography>
                    <ContentCard DataContent={DataRoles} />
                    <ContentCard DataContent={DataRoles2} />
                </Container>
            </Box>
        </div>
    );
}
