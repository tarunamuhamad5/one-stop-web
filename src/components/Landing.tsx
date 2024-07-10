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
            <ContainerContent style={{ textAlign: 'right' }}>
                <Typography variant="h4" color="white">
                    Selamat Datang di
                </Typography>
                <Typography variant="h3" color="white" style={{ fontWeight: 'bold' }}>
                    ONE STOP ADMINISTRATION SYSTEM (OSAS)
                </Typography>
                <Typography variant="h4" color="white">
                    Badan Pusat Statistik Kabupaten Empat Lawang
                </Typography>
                <Typography variant="h5" color="white">
                    <br />
                    Portal web yang dikembangkan untuk mendukung budaya kerja Aparatur Sipil Negara (ASN) menuju Flexible Working Space (FWS) dan Smart Office
                </Typography>
            </ContainerContent>
        </Box>
    );
}
