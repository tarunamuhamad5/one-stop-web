"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function Teknis() {
    const DataRoles = [
        {
            
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
                        variant="h2"
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/14fY7r3FXaX08qlgyPB67HbdFvaEfQagE0nHZcQMlj2A/edit?usp=sharing");
                        }}
                    >
                        Humas Content Planning
                    </Typography>
                    <iframe
                        width={1000}
                        height={800}
                        src="https://docs.google.com/spreadsheets/d/1TKFUun52ZWBSPynr3Kibfot0xXIKvlds/edit?usp=sharing&ouid=118011472020255728204&rtpof=true&sd=true"
                    ></iframe>
                    

                </Container>
            </Box>
        </div>
    );
}
