"use client";
import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ContentCard from "@/components/ContentCard";
import { useRouter } from "next/navigation";

export default function distribusi() {
    const DataRoles = [
        ,
    ];

    const baris2 = [
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
                    <ContentCard DataContent={DataRoles} />
                    <Typography
                        variant="h2"
                        onClick={() => {
                            OpenWebsite("https://docs.google.com/spreadsheets/d/14fY7r3FXaX08qlgyPB67HbdFvaEfQagE0nHZcQMlj2A/edit?usp=sharing");
                        }}
                    >
                        Monitoring Distribusi
                    </Typography>
                    <iframe
                        width={1000}
                        height={800}
                        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRcJuCZXaI7l0UyV-6N88qP_ddETMNnLLOBIERIxUGJsnLl_vADgP7SwxaaVfPqpxnV0QvNF4pSJdl9/pubhtml"
                    ></iframe>
                    
                </Container>
            </Box>
        </div>
    );
}
