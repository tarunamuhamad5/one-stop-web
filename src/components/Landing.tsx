"use client";
import React from "react";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";

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
                left: 0,
                top: 0,
                // backgroundImage:
                //     "linear-gradient(rgba(0,0,0,0.6), rgb(0,0,0,0.6))),url(/background/kantor.jpeg)",
                // backgroundPosition: "center center",
                // backgroundRepeat: "no-repeat",
                // backgroundAttachment: "fixed",
                // backgroundSize: "cover",
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
