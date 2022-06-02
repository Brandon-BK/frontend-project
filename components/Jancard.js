import React from 'react'
import Grid from '@mui/material/Grid';
import { borderRadius } from '@mui/system';


const Jancard = () => {
  return (
    <div style={
      {
        // border: 'red 1px solid',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '70px',
        marginBottom: 200
      }
    }>
      <Grid container spacing={7} columns={12} sx={{padding:'0 65px'}}>
        <Grid item xs={12} md={4}>
          <div style={{ width: '110%', height: '110%', background: 'white',borderRadius:'20px',margin:'0 0 0 -20px' }}>
          <img style={
            {
              width:'100%',
              borderRadius:'20px',
           
            }
          } src='Plain.png' /><h1 style={
            {
              margin:'40px 0 0 40px',
            }
          }>Plain UI for Bulma,
            Bootstrap & Tailwind
          </h1>
          <p style={
            {
              padding:'0 40px'
            }
          }>We've added a set of components that doesn't dictate style, Plain UI allows you to start with a minimalist design and customize it in no time</p>
          <h2 style={
            {
              padding:'0 40px',
              margin:'0px 0 0 0',
              fontSize:'15px',
              color:'blue'
            }
          }>Read more</h2>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ width: '110%',margin:'0 0 0 -20px', height: '110%', background: 'white',borderRadius:'20px' }}>
          <img style={
            {
              width:'100%',
              borderRadius:'20px',
            }
          } src='Effects.jpg' /><h1 style={
            {
              margin:'40px 0 0 40px'
            }
          }>CSS Filters 
            and Transitions
          </h1>
          <p style={
            {
              padding:'0 40px'
            }
          }>You can play with components and graphics easily with the tools added in the right menu. We are consistently expanding the editor's capabilities.</p>
          <h2 style={
            {
              padding:'0 40px',
              margin:'20px 0 0 0',
              fontSize:'15px',
              color:'blue'
            }
          }>Read more</h2>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div style={{ width: '110%',margin:'0 0 0 -20px', height: '110%', background: 'white',borderRadius:'20px' }}>
          <img style={
            {
              width:'100%',
              borderRadius:'20px',
              
            }
          } src='Fixes backend.png' /><h1 style={
            {
              margin:'40px 0 0 40px'
            }
          }>Fixes improving backend structure</h1>
          <p style={
            {
              padding:'0 40px'
            }
          }>Work you can't see, but it's there. We are improving our backend to be able to seemlessly add new functionality</p>
         
          </div>
        </Grid>
      </Grid>

    </div>
  )
}

export default Jancard