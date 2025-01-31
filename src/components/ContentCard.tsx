"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Card, styled, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
        cursor: "pointer",
        borderRadius: "5%",
        margin: "1%",
    }));

    const BoxContent = styled(Box)(({ theme }) => ({
        display: "flex",
        [theme.breakpoints.down("lg")]: {
            display: "contents",
        },
    }));

    const OpenWebsite = (link: string) => {
        window.open(link, "_blank");
    };

    const router = useRouter();

    return (
        <BoxContent justifyContent="center">
            {DataContent.map((item: any, index: any) => (
                <CardContent
                    key={index}
                    variant="elevation"
                    onClick={() => {
                        if (item.websiteType === "external") {
                            OpenWebsite(item.link);
                        } else if (item.websiteType === "internal") {
                            router.push(item.link);
                        }
                    }}
                >
                    <CardContent>
                        <Box minHeight={300} minWidth={300}>
                            <Image
                                key={index}
                                width="300"
                                height="300"
                                alt={item.title}
                                src={item.src_image}
                            />
                        </Box>

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
