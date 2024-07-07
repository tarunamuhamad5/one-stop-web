import React from "react";
import { Typography, Box, Container } from "@mui/material";

export default function Teknis() {
    return (
        <div>
            <Box
                minHeight={"100vh"}
                minWidth={"100%"}
                sx={{
                    alignContent: "center",
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                <Container
                    sx={{
                        textAlign: "center",
                        left: 0,
                        top: 0,
                    }}
                >
                    <Typography variant="h1">Kepegawaian</Typography>
                </Container>
            </Box>
        </div>
    );
}
