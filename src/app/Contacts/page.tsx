import React from "react";
import { Typography, Box, Container } from "@mui/material";
import Stack from "@mui/material/Stack";

import MailIcon from "@mui/icons-material/Mail";
import FaxIcon from "@mui/icons-material/Fax";

export default function Teknis() {
    return (
        <div>
            <Box
                minHeight={"110vh"}
                width={"100%"}
                sx={{
                    alignContent: "center",
                    display: "flex",
                    flexWrap: "wrap",
                    textAlign: "center",
                }}
            >
                <Container>
                    <Typography variant="h2">Hubungi Kami</Typography>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5631.260834729199!2d103.10682223644798!3d-3.6097302463863556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e30cb0a49b56b87%3A0x84cfd2ea02e9f1c5!2sBPS%20Kabupaten%20Empat%20Lawang!5e0!3m2!1sen!2sid!4v1720333302252!5m2!1sen!2sid"
                        width="600"
                        height="600"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Container>
            </Box>
        </div>
    );
}
