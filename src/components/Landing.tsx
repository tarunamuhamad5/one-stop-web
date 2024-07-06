"use client";
import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";

export default function Landing() {
    const ContainerContent = styled(Container)(({ theme }) => ({
        textAlign: "center",
        left: 0,
        top: 0,
    }));
    return (
        <Box
            minHeight={"100vh"}
            minWidth={"100%"}
            sx={{
                alignContent: "center",
                display: "flex",
                flexWrap: "wrap",
            }}
        >
            <Image
                alt="background-image"
                src="/background/kantor-darkening.jpeg"
                fill={true}
                objectFit="cover"
                style={{
                    zIndex: -1,
                }}
            />
            <ContainerContent>
                <Typography variant="h2" color={"white"}>
                    ONE STOP ADMINISTRATION SYSTEM (OSAS)
                </Typography>
            </ContainerContent>
        </Box>
    );
}
