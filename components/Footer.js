import React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

export const Footer = () => {
  const minWidth600px = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        background: "#fff",
        paddingLeft: minWidth600px ? 8 : 4,
        // paddingRight: minWidth600px ? 8 : 4,
        color: "#111",
      }}
    >
      <Grid
        container
        spacing={2}
        columns={16}
        sx={{
          height: "100%",
          width: "100%",
          pb: 4,
        }}
      >
        <Grid item xs={12} md={4}>
          <Box sx={{ pt: 1, pb: 0.5, fontWeight: 700, mb: 1, display: "flex" }}>
            <img src="./logo.jpeg" height="40px" />
            <Typography fontSize="25px" fontWeight="700" sx={{ ml: 2 }}>
              Shuffle
            </Typography>
          </Box>
          <Box>
            <Link href="/#about">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "15px",
                  display: "block",
                }}
              >
                An online editor for busy developers
              </a>
            </Link>
          </Box>

          <Box sx={{ mt: "15px", display: "flex" }}>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  display: "block",
                  marginRight: "10px",
                  color: "gray",
                }}
              >
                <FacebookIcon />
              </a>
            </Link>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  display: "block",
                  marginRight: "10px",
                  color: "gray",
                }}
              >
                <TwitterIcon />
              </a>
            </Link>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  display: "block",
                  marginRight: "10px",
                  color: "gray",
                }}
              >
                <InstagramIcon />
              </a>
            </Link>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  display: "block",
                  marginRight: "10px",
                  color: "gray",
                }}
              >
                <GitHubIcon />
              </a>
            </Link>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  display: "block",
                  color: "gray",
                }}
              >
                <SportsBasketballIcon />
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ pt: 2, pb: 1, fontWeight: 700, mb: 3 }}>PRODUCTS</Box>
          <Box>
            <Link href="/products">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Visual Editor for Tailwind
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/products">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Visual Editor for Bootstrap
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/products">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Visual Editor for Bulma
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/products">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Visual Editor for Material-UI
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/products">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Extenstion for Visual Studio Code
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box sx={{ pt: 2, pb: 1, fontWeight: 700, mb: 3 }}>Company</Box>
          <Box>
            <Link href="/products">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                About
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/products">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Blog
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/products">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Support
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/products">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Become an affiliate
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/contact">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Start your editor
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
          <Box sx={{ pt: 2, pb: 1, fontWeight: 700, mb: 3 }}>Usage</Box>
          <Box>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Explore
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Individuals
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Freelancers
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Teams
              </a>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={2}>
          <Box sx={{ pt: 2, pb: 1, fontWeight: 700, mb: 3 }}>Legal</Box>
          <Box>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Terms of Service
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Cookie Policy
              </a>
            </Link>
          </Box>
          <Box>
            <Link href="/">
              <a
                style={{
                  pt: "2px",
                  opacity: 0.8,
                  fontSize: "14px",
                  marginTop: "20px",
                  display: "block",
                }}
              >
                Licenses
              </a>
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 5,
          fontSize: "11px",
          width: "87%",
          display: "fex",
          alignItems: "center",
          justifyContent: "center",
          pb: "20px",
        }}
      >
        Copyright {new Date().getFullYear()}. All Rights reserved by{" "}
        <span style={{ color: "blue" }}>Shuffle.</span>
      </Box>
    </Box>
  );
};
