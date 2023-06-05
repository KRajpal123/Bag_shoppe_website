import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { BannerContainer, BannerContent, BannerDiscription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/Banner";

export default function Banner(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
       <BannerContainer>
        <BannerImage src="https://raw.githubusercontent.com/grepsoft-zz/ecomm-mui/master/public/images/banner/banner.png"/>
         <BannerContent>
            <Typography variant="h6">Big Collections</Typography>
            <BannerTitle variant="h1">New HandBag's</BannerTitle>
            <BannerDiscription variant="subtitlt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium scelerisque ante, nec pellentesque lacus sagittis ut. Nulla et dolor quis diam ullamcorper rutrum in se
            </BannerDiscription>
            <BannerShopButton>Shop Now</BannerShopButton>
         </BannerContent>
       </BannerContainer>
        )
}