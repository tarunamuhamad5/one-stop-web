"use client";
import { Box, Container, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [enableScrollTransition, setEnableScrollTransition] = useState(true);

    const pathname = usePathname();

    const router = useRouter();

    useEffect(() => {
        if (pathname === "/") {
            setEnableScrollTransition(true);
            return;
        }
        setEnableScrollTransition(false);
    }, [pathname]);

    useEffect(() => {
        if (!enableScrollTransition) {
            setIsScrolled(true);
            return;
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        setIsScrolled(false);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [enableScrollTransition]);

    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
        overflow: "hidden",
    }));

    const NavBarBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
    }));

    const NavBarButton = styled(Typography)({
        fontSize: "18px",
        color: "white",
        cursor: "pointer",
        "&:hover": {
            color: "orange",
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
        color: "white",
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
                    display: "flex",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        marginTop: "1%",
                        marginRight: "2%",
                        marginLeft: "2%",
                        marginBottom: "1%",
                    }}
                >
                    <NavBarLogoBox>
                        <Image
                            src="/logo/bps.png"
                            alt="Logo"
                            height={50}
                            width={50}
                            style={{
                                cursor: "pointer",
                                fontStyle: "italic",
                            }}
                            onClick={() => router.push("/")}
                        />
                        <LogoText
                            style={{ fontStyle: "italic", fontWeight: "bold" }}
                            onClick={() => router.push("/")}
                        >
                            BADAN PUSAT STATISTIK
                            <br />
                            KABUPATEN EMPAT LAWANG
                        </LogoText>
                    </NavBarLogoBox>
                    <NavBarBox>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("/")}
                        >
                            Home
                        </NavBarButton>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("/Teknis")}
                        >
                            Teknis
                        </NavBarButton>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("/Administrasi")}
                        >
                            Administrasi
                        </NavBarButton>
                        <NavBarButton
                            variant="body2"
                            onClick={() => router.push("/Contacts")}
                        >
                            Hubungi Kami
                        </NavBarButton>
                    </NavBarBox>
                </Box>
            </Box>
        </div>
    );
};

export default Header;
