import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import MailIcon from "@mui/icons-material/Mail";
import FaxIcon from "@mui/icons-material/Fax";

const logoStyle = {
    width: "140px",
    height: "auto",
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {"Copyright © "}
            <Link href="#">Alya Safadella&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {
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
                            Jl. Lintas Sumatera No. 35 Kecamatan Tebing Tinggi
                            Kabupaten Empat Lawang Sumatera Selatan
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
                            : (0702) 7321262
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
                            : bps1611@bps.go.id
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
