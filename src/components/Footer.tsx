"use client";
import React from "react";
import { Typography, Link, Box, styled, Container } from "@mui/material";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();

    const FooterBox = styled(Box)(({ theme }) => ({
        width: "flex",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(2.1),
        backgroundColor: "#212121",
        left: 0,
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
    }));
    return <FooterBox>test</FooterBox>;
};

export default Footer;
