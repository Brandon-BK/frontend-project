import React from "react";
import { Box, Button, Grid, Typography,useMediaQuery } from "@mui/material";
import Link from "next/link";

const Main = () => {
  const minWidth600px = useMediaQuery("(min-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid red",
        mb: 7,
        paddingLeft: minWidth600px ? 8 : 4,
        paddingRight: minWidth600px ? 8 : 4,
      }}
    >
        <Box sx={{background:'#222',width:'100%', borderRadius:'20px',pt:5}}>
            <Box sx={{width:'100%',height:'50px',display:'flex',justifyContent:'center'}}>
                <Box sx={{height:'100%',width:'50px',background:'white',borderRadius:'10px'}}></Box>
            </Box>

            <Box sx={{width:'100%',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',mt:8}}>
                <Typography variant="h3" fontWeight="700" color="white">Largest UI library <br /> for Tailwind CSS</Typography>
                
            </Box>

            <Box sx={{width:'100%',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',mt:8}}>
                <Typography fontSize="14" color="gray">The largest set of UI components will allow you to find the right desgn for any <br /> purpose. Its components come together seemlessly to give you a solid design</Typography>
                
            </Box>




            <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',pl:5}}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12} md={3}>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                  <Box sx={{width:'90%',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>

                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>

                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Box sx={{display:'flex', flexDirection:'column'}}>
                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>

                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>

                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Box sx={{display:'flex', flexDirection:'column'}}>
                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>

                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>

                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={3}>
              <Box sx={{display:'flex', flexDirection:'column'}}>
                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>

                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>

                  <Box sx={{width:'200px',height:'200px',borderRadius:'20px',background:'white',mb:5,boxShadow:8}}></Box>
                </Box>
              </Grid>
              </Grid>
            </Box>










            <Box sx={{width:'100%',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',mt:8}}>
                <Typography variant="h5" fontWeight="700" color="white">And we'll give you even more</Typography>
            </Box>

                
            <Box sx={{width:'100%',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',mt:3}}>
                <Typography fontSize="14" color="gray">All of this just the first part of the kit - for building a landing page. We still have the</Typography>

                <Typography fontSize="14" color="gray">E-commerce and Dashboard kit in the pipeline. You'l get them as an upgrade to your</Typography>

                <Typography fontSize="14" color="gray">subscribe, at no extra cost</Typography>
            </Box>

            
            <Box sx={{width:'100%',height:'50px',display:'flex',justifyContent:'center',alignItems:'center',mt:3,boxShadow:8}}>
              <Button sx={{margin:'0px auto',background:"rgb(66, 168, 66) !important"}} variant="contained">Start creating with Flex</Button>
            </Box>

        </Box>

    </Box>
  );
};

export default Main;
