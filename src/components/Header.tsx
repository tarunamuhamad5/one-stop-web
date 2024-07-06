"use client";
import { Box, Container, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: theme.spacing(1.5),
        paddingTop: theme.spacing(3),
    }));

    const NavBarBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
    }));

    const NavBarButton = styled(Typography)({
        fontSize: "18px",
        color: "white", // Change button color based on scroll
        cursor: "pointer",
        "&:hover": {
            color: "red",
        },
    });

    const NavBarLogoBox = styled(Box)(({ theme }) => ({
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1.5),
    }));

    const LogoText = styled(Typography)({
        fontSize: "18px",
        color: "white", // Change text color based on scroll
        cursor: "pointer",
        fontFamily: "arial",
    });

    return (
        <div>
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: isScrolled ? "#212121" : "transparant",
                    zIndex: 1000,
                    transition: "background-color 0.5s ease",
                }}
            >
                <NavbarContainer>
                    <NavBarLogoBox>
                        <Image
                            src="/logo/bps.png"
                            alt="Logo"
                            height={40}
                            width={40}
                            style={{
                                cursor: "pointer",
                            }}
                            onClick={() => router.push("./")}
                        />
                        <LogoText>
                            Badan Pusat Statistik
                            <br />
                            Kabupaten Empat Lawang
                        </LogoText>
                    </NavBarLogoBox>
                    <NavBarBox>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("./")}
                        >
                            Home
                        </NavBarButton>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("./Teknis")}
                        >
                            Teknis
                        </NavBarButton>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("./Administrasi")}
                        >
                            Administrasi
                        </NavBarButton>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("./Contacts")}
                        >
                            Hubungi Kami
                        </NavBarButton>
                    </NavBarBox>
                </NavbarContainer>
            </Box>
        </div>
    );
};

export default Header;
