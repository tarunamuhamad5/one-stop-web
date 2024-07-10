"use client";
import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function rpd() {
    const DataRoles = [
        ,
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
                    <ContentCard DataContent={DataRoles} />
                    <Typography
                        variant="h3"
                        style={{
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/1weVRx6QQtkQFTT5TulIegZYO0-Ruxct9/edit?usp=sharing&ouid=118011472020255728204&rtpof=true&sd=true");
                        }}
                    >
                        Rencana Penarikan Dana 2024
                    </Typography>
                    <iframe
                        width={1000}
                        height={800}
                        src="https://docs.google.com/spreadsheets/d/1weVRx6QQtkQFTT5TulIegZYO0-Ruxct9/edit?usp=sharing&ouid=118011472020255728204&rtpof=true&sd=true"
                    ></iframe>

                </Container>
            </Box>
        </div>
    );
}
