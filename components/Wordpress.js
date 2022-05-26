import React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Wordpress = () => {
  const minWidth600px = useMediaQuery("(min-width:600px)");

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
          background: "hsl(219deg 53% 11%);",
          width: "100%",
          borderRadius: "20px",
          pt: 20,
          pb: 5,
          pl: 2.3,
        }}
      >
        <Grid
          container
          spacing={2}
          columns={12}
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Grid xs={12} md={6}></Grid>
          <Grid xs={12} md={6}></Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          columns={12}
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="wordpress-card"
              sx={{
                width: "480px",
                height: "270px",
                background: "hsl(225deg 74% 67%)",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Typography>
                We will add a new category to our frameworks
              </Typography>

              <Typography>list, from which will be able to choose </Typography>

              <Typography>
                WordPress. We will adapt some of our libraries
              </Typography>

              <Typography>as MVPs to gradually expand the list of</Typography>

              <Typography>possible designs</Typography>
            </Box>
          </Grid>

          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              balignItems: "center",
            }}
          >
            <Box
              className="wordpress-card"
              sx={{
                width: "480px",
                height: "270px",
                background: "hsl(225deg 74% 67%)",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Typography>After selecting a library, you will get a</Typography>

              <Typography>
                predefined design that you can easily change
              </Typography>

              <Typography>in our drag and drop editor. Components</Typography>

              <Typography>
                powered by Wordpress data will be specially
              </Typography>

              <Typography>
                marked so you can know what you can edit later
              </Typography>
            </Box>
          </Grid>
        </Grid>

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
          <Typography color="hsl(216deg 17% 60%)">
            When you are ready, youl will export it to a file as you do now.Just
            upload it to WordPress and viola.No need to
          </Typography>
          <Typography color="hsl(216deg 17% 60%)" sx={{ mt: 1.5 }}>
            install plugins, no software that bloats.
          </Typography>
        </Box>



        <Box sx={{width:'100%',mt:6,p:'0 30px'}}>
        <Accordion sx={{background:'hsl(219deg 41% 21%)'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight="700px" sx={{color:'white'}}>When will this be avaible?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="hsl(216deg 16% 48%)">
              Early March. W don't want to release anything that might cause problems, so we <br />
              are extensively testing our integrations.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{background:'hsl(219deg 41% 21%)'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color="white">Whats next?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="hsl(216deg 16% 48%)">
             We are working on intergrating our blocks with WP's internal editor. So that you can <br /> easily add components that you didn't inculde in the first draft.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{background:'hsl(219deg 41% 21%)'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography  sx={{color:'white'}}>What else besides WordPress?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="hsl(216deg 16% 48%)" sx={{mt:2}}>
              The update for Material-UI has already reached the final straight. Artemis UI for <br /> dashboards will arrive along with the editor refresh for the latest version of MUI.
            </Typography>

            <Typography color="hsl(216deg 16% 48%)" sx={{mt:2}}>
              Over the last three months, our Shuffel has gotten some really cool <br />improvements. Working on customs, speed of the template building and <br />
              general feeling of lightness is very important to us. Now we are collecting feedback < br /> from you and acting on it. You can expect that we will be getting better and better every month
            </Typography>


            <Typography color="hsl(216deg 16% 48%)" sx={{mt:2}}>
              <span style={{color:'white',textDecoration:'underline'}}>Read more</span> about the new tools inour year in review.
            </Typography>

            <Typography color="hsl(216deg 16% 48%)" sx={{mt:2}}>More designs. The next parts of Flex are obviuosly coming soon, but we can show <br />
            you a small preview of our newest library -
              <span style={{color:'white',textDecoration:'underline'}}>Nigodo.</span> It looks like a million great <br />
            </Typography>
          </AccordionDetails>
        </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default Wordpress;
