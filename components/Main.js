import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "@mui/system";

const Main = () => {
  const minWidth600px = useMediaQuery("(min-width:600px)");
  const maxWidth180px = useMediaQuery("(max-width:180px)");

  return (
    <Box
      sx={{
        width: "100%",
        mb: 7,
        paddingLeft: minWidth600px ? 8 : 4,
        paddingRight: minWidth600px ? 8 : 4,
      }}
    >
      <Box
        sx={{
          background: "hsl(218deg 23% 22%)",
          width: "100%",
          borderRadius: "20px",
          pt: 7,
          pb: 7,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "50px",
              background: "white",
              borderRadius: "10px",
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 8,
          }}
        >
          <Typography variant="h3" fontWeight="700" color="white">
            Largest UI library <br /> for Tailwind CSS
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 8,
          }}
        >
          <Typography fontSize="14" color="hsl(216deg 17% 60%)">
            The largest set of UI components will allow you to find the right
            desgn for any <br /> purpose. Its components come together
            seemlessly to give you a solid design
          </Typography>
        </Box>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          centeredSlides={false}
          slidesPerView={maxWidth180px ? 1 : 3}
          autoplay={true}
          speed={3000}
          loop={true}
          style={{marginTop:50,marginBottom:50}}
        >
          <SwiperSlide
            style={{
              height: 60,
              width: '180px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:'hsl(168deg 32% 24%)',
              borderRadius: '27px',
            }}
          >
            <Typography fontSize="15px" fontWeight= " 100px" color="white" sx={{opacity: 0.7}}>
                CONTACT
            </Typography>
          </SwiperSlide>

          <SwiperSlide
            style={{
              height: 60,
              width: '180px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: '27px',
              background:'hsl(168deg 32% 24%)',
              cursor:'pointer'
            }}
          >
            <Typography fontSize="15px" fontWeight= " 100px" color="white" sx={{opacity: 0.7}}>
                APPLICATIONS
            </Typography>
          </SwiperSlide>

          <SwiperSlide
            style={{
              height: 60,
              width: '180px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:'hsl(168deg 32% 24%)',
              borderRadius: '27px',
            }}
          >
            <Typography fontSize="15px" fontWeight= " 100px" color="white" sx={{opacity: 0.7}}>
                CONTENT
            </Typography>
          </SwiperSlide>

          <SwiperSlide
            style={{
              height: 60,
              width: '180px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:'hsl(168deg 32% 24%)',
              borderRadius: '27px',
            }}
          >
            <Typography fontSize="15px" fontWeight= " 100px" color="white" sx={{opacity: 0.7}}>
                HERO SECTIONS
            </Typography>
          </SwiperSlide>

          <SwiperSlide
            style={{
              height: 60,
              width: '180px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:'hsl(168deg 32% 24%)',
              borderRadius: '27px',
            }}
          >
            <Typography fontSize="15px" fontWeight= " 100px" color="white" sx={{opacity: 0.7}}>
                PRICING
            </Typography>
          </SwiperSlide>

          <SwiperSlide
            style={{
              height: 60,
              width: '180px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:'hsl(168deg 32% 24%)',
              borderRadius: '27px',
            }}
          >
            <Typography fontSize="15px" fontWeight= " 100px" color="white" sx={{opacity: 0.7}}>
                TABLES
            </Typography>
          </SwiperSlide>

          <SwiperSlide
            style={{
              height: 60,
              width: '180px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:'hsl(168deg 32% 24%)',
              borderRadius: '27px',
            }}
          >
            <Typography fontSize="15px" fontWeight= " 100px" color="white" sx={{opacity: 0.7}}>
                LOGO CLOUDS
            </Typography>
          </SwiperSlide>
        </Swiper>






        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pl: 5,
            mt: 5,
          }}
        >
          <Grid container spacing={2} columns={12}>
            <Grid item xs={12} md={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                className="box-shadow"
                  sx={{
                    width: "95%",
                    height: "160px",
                    borderRadius: "20px",
                    background: "white",
                    mb: 5,
                    // boxShadow: 8,
                  }}
                ></Box>

                <Box
                className="box-shadow"
                  sx={{
                    width: "95%",
                    height: "180px",
                    borderRadius: "20px",
                    background: "white",
                    mb: 5,
                    // boxShadow: 8,
                  }}
                ></Box>

                <Box
                className="box-shadow"
                  sx={{
                    width: "95%",
                    height: "170px",
                    borderRadius: "20px",
                    background: "hsl(218deg 22% 21%)",
                    mb: 5,
                    // boxShadow: 8,
                  }}
                ></Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    width: "95%",
                    height: "240px",
                    borderRadius: "20px",
                    background: "white",
                    mb: 5,
                    boxShadow: 8,
                  }}
                ></Box>

                <Box
                className="box-shadow"
                  sx={{
                    width: "95%",
                    height: "140px",
                    borderRadius: "20px",
                    background: "hsl(217deg 16% 26%)",
                    mb: 5,
                    // boxShadow: 8,
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "95%",
                    height: "140px",
                    borderRadius: "20px",
                    background: "white",
                    mb: 5,
                    boxShadow: 8,
                  }}
                ></Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                className="box-shadow"
                  sx={{
                    width: "95%",
                    height: "140px",
                    borderRadius: "20px",
                    background: "hsl(217deg 21% 21%)",
                    mb: 5,
                    // boxShadow: 8,
                  }}
                ></Box>

                <Box
                className="box-shadow"
                  sx={{
                    width: "95%",
                    height: "180px",
                    borderRadius: "20px",
                    background: "white",
                    mb: 5,
                    // boxShadow: 8,
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "95%",
                    height: "140px",
                    borderRadius: "20px",
                    background: "white",
                    mb: 5,
                    boxShadow: 8,
                  }}
                ></Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                className="box-shadow"
                  sx={{
                    width: "95%",
                    height: "140px",
                    borderRadius: "20px",
                    background: "hsl(217deg 16% 26%)",
                    mb: 5,
                    // boxShadow: 8,
                  }}
                ></Box>

                <Box
                  sx={{
                    width: "95%",
                    height: "180px",
                    borderRadius: "20px",
                    background: "white",
                    mb: 5,
                    boxShadow: 8,
                  }}
                ></Box>

                <Box
                className="box-shadow"
                  sx={{
                    width: "95%",
                    height: "140px",
                    borderRadius: "20px",
                    background: "hsl(218deg 22% 21%)",
                    mb: 5,
                    // boxShadow: 8,
                  }}
                ></Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 8,
          }}
        >
          <Typography variant="h5" fontWeight="700" color="white">
            And we'll give you even more
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 2,
          }}
        >
          <Typography fontSize="14" color="hsl(216deg 17% 60%)" sx={{ mt: 2 }}>
            All of this just the first part of the kit - for building a landing
            page. We still have the
          </Typography>

          <Typography fontSize="14" color="hsl(216deg 17% 60%)" sx={{ m: 1 }}>
            E-commerce and Dashboard kit in the pipeline. You'l get them as an
            upgrade to your
          </Typography>

          <Typography fontSize="14" color="hsl(216deg 17% 60%)">
            subscribe, at no extra cost
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}
        >
          <Button
            sx={{
              margin: "0px auto",
              background: "hsl(142deg 71% 45%) !important",
              borderRadius: "20px",
              height: "45px",
            }}
            variant="contained"
          >
            Start creating with Flex
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
