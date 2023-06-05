import { Facebook, Instagram, Send, Twitter } from "@mui/icons-material";
import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, Sub } from "../../styles/footer";
import { colors } from "../../styles/theme";

export default function Footer(){
   return(
    <Box
    sx={{
        background:colors.secondary,
        color: colors.white,
        p: {xs:4, md:10},
        pt: 12,
        pb:12,
        fontSize:{xs:'12px',md:'14px'},
    }}
    >
        <Grid container spacing={2} justifyContent='center'>
            <Grid item md={6} lg={4}>
               <FooterTitle variant="body1">About Us</FooterTitle>
               <Typography variant="caption2">
               It's a body of written work, in various forms and structures,
             that can be words, phrases and sentences that piece together a passage of written work.
               </Typography>
               <Box
               sx={{
                mt:4,
                color:'white'
               }}
               >
                <Facebook sx={{mr:1}} />
                <Twitter sx={{mr:1}} />
                <Instagram />
               </Box>
            </Grid>
            <Grid item md={6} lg={2}>
                <FooterTitle variant="body1"> information </FooterTitle>
                <List>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>About Us</Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>Order Tracking</Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>Privacy &amp; Policy</Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>Terms &amp; Conditions</Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>Contact Us</Typography>
                    </ListItemText>
                </List>
            </Grid>
            <Grid item md={6} lg={2}>
            <FooterTitle variant="body1"> My Account </FooterTitle>
            <List>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>Login</Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>My Account</Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>My Cart</Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>WhishList</Typography>
                    </ListItemText>
                    <ListItemText>
                    <Typography lineHeight={2} variant='caption2'>Log Out</Typography>
                    </ListItemText>
                </List>
            </Grid>

            <Grid md={6} lg={4}>
            <FooterTitle variant="body1"> News Letter </FooterTitle>
            <Stack sx={{background:''}}>
               <Sub color=""
               label='Email Address'
               variant="standard"
               sx={{}} />
               <Button
               startIcon= {<Send sx={{color:colors.secondary}} />}
               sx={{mt:4,mb:4}}
               variant='contained'>
                Subscribe
               </Button>
            </Stack>
            </Grid>
        </Grid>
    </Box>
   )
}