"use client";
import React from "react";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ContentTeknis = ({ DataPosition }: any) => {
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
            {DataPosition.map((item: any, index: any) => (
                <Box key={index} margin={1.5}>
                    <Image
                        width="350"
                        height="350"
                        alt={item.title}
                        src={item.src_image}
                        onClick={() => {
                            if (item.websiteType === "external") {
                                OpenWebsite(item.link);
                            } else if (item.websiteType === "internal") {
                                router.push(item.link);
                            }
                        }}
                    />
                </Box>
            ))}
        </BoxContent>
    );
};

export default ContentTeknis;
