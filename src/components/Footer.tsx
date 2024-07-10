"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import MailIcon from "@mui/icons-material/Mail";
import FaxIcon from "@mui/icons-material/Fax";
import { Button, styled } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const logoStyle = {
    width: "140px",
    height: "auto",
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {"Copyright © "}
            <Link href="https://www.instagram.com/alyspal_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                Alya Safadella&nbsp;
            </Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
    const CustomButton = styled(Button)({
        borderColor: "orange",
        color: "orange",
        backgroundColor: "white",
        boxShadow: "none",
        border: "1px solid",
        "&:hover": {
            color: "white",
            borderColor: "white",
            backgroundColor: "orange",
            border: "1px solid",
            boxShadow: "none",
        },
    });

    const router = useRouter();
    const pathname = usePathname();

    const [isHomePath, setIsHomePath] = useState(pathname === "/");

    useEffect(() => {
        if (pathname === "/") {
            setIsHomePath(true);
            return;
        }
        setIsHomePath(false);
    }, [pathname]);

    if (isHomePath) {
        return (
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: 3, sm: 2 },
                    py: { xs: 3, sm: 2 },
                    textAlign: { sm: "center", md: "left" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            minWidth: { xs: "100%", sm: "60%" },
                        }}
                    >
                        <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                gutterBottom
                            >
                                Badan Pusat Statistik Kabupaten Empat Lawang
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                mb={2}
                            >
                                Jl. Lintas Sumatera No. 35 Kecamatan Tebing
                                Tinggi Kabupaten Empat Lawang Sumatera Selatan
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Contact Us :
                        </Typography>

                        <Stack
                            direction="row"
                            justifyContent="left"
                            alignContent={"center"}
                            spacing={2}
                            useFlexGap
                            sx={{
                                color: "text.secondary",
                                textAlign: "center",
                            }}
                        >
                            <FaxIcon />
                            <Typography variant="body2" fontWeight={700}>
                                :
                            </Typography>
                            <Typography
                                variant="body2"
                                fontWeight={700}
                                style={{ cursor: "pointer" }}
                                sx={{
                                    "&:hover": {
                                        color: "blue",
                                    },
                                }}
                            >
                                (0702) 7321262
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="left"
                            alignContent={"center"}
                            spacing={2}
                            useFlexGap
                            sx={{
                                color: "text.secondary",
                                textAlign: "center",
                            }}
                        >
                            <MailIcon />
                            <Typography variant="body2" fontWeight={700}>
                                :
                            </Typography>
                            <Typography
                                variant="body2"
                                fontWeight={700}
                                style={{ cursor: "pointer" }}
                                sx={{
                                    "&:hover": {
                                        color: "blue",
                                    },
                                }}
                            >
                                bps1611@bps.go.id
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pt: { xs: 4, sm: 2 },
                        width: "100%",
                        borderTop: "2px solid",
                        borderColor: "divider",
                    }}
                >
                    <div>
                        <Copyright />
                    </div>
                </Box>
            </Container>
        );
    } else {
        return (
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: 3, sm: 2 },
                    py: { xs: 3, sm: 2 },
                    textAlign: { sm: "center", md: "left" },
                }}
            >
                <CustomButton
                    variant="contained"
                    size="large"
                    sx={{ borderColor: "orange" }}
                    onClick={() => router.push("./")}
                >
                    Back
                </CustomButton>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            minWidth: { xs: "100%", sm: "60%" },
                        }}
                    >
                        <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                gutterBottom
                            >
                                Badan Pusat Statistik Kabupaten Empat Lawang
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                mb={2}
                            >
                                Jl. Lintas Sumatera No. 35 Kecamatan Tebing
                                Tinggi Kabupaten Empat Lawang Sumatera Selatan
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "flex" },
                            flexDirection: "column",
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" fontWeight={600}>
                            Contact Us :
                        </Typography>

                        <Stack
                            direction="row"
                            justifyContent="left"
                            alignContent={"center"}
                            spacing={2}
                            useFlexGap
                            sx={{
                                color: "text.secondary",
                                textAlign: "center",
                            }}
                        >
                            <FaxIcon />
                            <Typography variant="body2" fontWeight={700}>
                                :
                            </Typography>
                            <Typography
                                variant="body2"
                                fontWeight={700}
                                style={{ cursor: "pointer" }}
                                sx={{
                                    "&:hover": {
                                        color: "blue",
                                    },
                                }}
                            >
                                (0702) 7321262
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="left"
                            alignContent={"center"}
                            spacing={2}
                            useFlexGap
                            sx={{
                                color: "text.secondary",
                                textAlign: "center",
                            }}
                        >
                            <MailIcon />
                            <Typography variant="body2" fontWeight={700}>
                                :
                            </Typography>
                            <Typography
                                variant="body2"
                                fontWeight={700}
                                style={{ cursor: "pointer" }}
                                sx={{
                                    "&:hover": {
                                        color: "blue",
                                    },
                                }}
                            >
                                bps1611@bps.go.id
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pt: { xs: 4, sm: 2 },
                        width: "100%",
                        borderTop: "2px solid",
                        borderColor: "divider",
                    }}
                >
                    <div>
                        <Copyright />
                    </div>
                </Box>
            </Container>
        );
    }
}
