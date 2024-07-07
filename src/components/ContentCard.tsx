"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import Image from "next/image";

const ContentCard = ({ DataContent }: any) => {
    const theme = useTheme();

    const ContentTitle = styled(Typography)(({ theme }) => ({
        fontWeight: "bold",
        fontSize: "20px",
        [theme.breakpoints.down("lg")]: {
            fontSize: "20px",
        },
    }));

    const CardContent = styled(Card)(({ theme }) => ({
        height: "auto",
        width: "auto",
        borderRadius: "5%",
        margin: "1%",
        [theme.breakpoints.down("md")]: {
            width: "auto",
            margin: "1%",
            borderRadius: "5%",
        },
    }));

    const BoxContent = styled(Box)(({ theme }) => ({
        display: "flex",
        [theme.breakpoints.down("md")]: {
            display: "contents",
        },
    }));

    return (
        <BoxContent justifyContent="center">
            {DataContent.map((item: any, index: any) => (
                <CardContent key={index} variant="naked">
                    <CardContent>
                        <Image
                            width="200"
                            height="200"
                            alt={item.title}
                            src={item.src_image}
                        />

                        <div>
                            <ContentTitle variant="h5" align="center">
                                {item.title}
                            </ContentTitle>
                        </div>
                    </CardContent>
                </CardContent>
            ))}
        </BoxContent>
    );
};

export default ContentCard;
