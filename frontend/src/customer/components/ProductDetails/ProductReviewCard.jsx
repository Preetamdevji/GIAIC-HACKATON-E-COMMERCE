import { Avatar, Grid } from '@mui/material'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>P</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Preetam</p>
                        <p className='opacity-70 '>April 15,  2023</p>
                    </div>
                </div>
                <Rating value={4.5} name="half-rating" readOnly precision={.5}/>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard