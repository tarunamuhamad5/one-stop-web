"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function neraca() {
    const DataRoles = [
        {
            title: "Alokasi dan Monitoring Neraca Pengeluaran",
            src_image: "/logo/neraca.png",
            link: "https://docs.google.com/spreadsheets/d/1ZtXb_3ureB0LW434Ueq66h5lqcjMabZ9/edit?g",
            websiteType: "external",
        },
        {
            title: "Data Pendukung PDRB",
            src_image: "/logo/pdrb.png",
            link: "https://docs.google.com/spreadsheets/d/12qaCViP2wEuosXrAK_AsAr53z3swdU8D/edit?g",
            websiteType: "external",
        },
    ];

    const OpenWebsite = (link: string) => {
        window.open(link, "_blank");
    };

    const router = useRouter();

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
                    <Typography
                        variant="h3"
                        style={{
                            fontWeight: 'bold'
                        }}>
                        Neraca
                    </Typography>

                    <ContentCard DataContent={DataRoles} />
                    <Typography
                        variant="h3"
                        style={{
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            OpenWebsite(
                                "https://docs.google.com/spreadsheets/d/14fY7r3FXaX08qlgyPB67HbdFvaEfQagE0nHZcQMlj2A/edit?usp=sharing"
                            );
                        }}
                    >
                        Snapshot Perekonomian
                    </Typography>


                    <iframe
                        width={1200}
                        height={800}
                        src="https://docs.google.com/spreadsheets/d/1u4OU-1Mn5moyCi755ttz7chxbBbhgS7v/edit?usp=sharing"
                    ></iframe>

                </Container>
            </Box>
        </div>
    );
}
