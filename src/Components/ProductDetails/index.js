import { Close } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from "@mui/material";
import { colors } from "../../styles/theme";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../styles/products";

function SlideTransition(props){
    return<Slide direction="down" {...props} />
}
const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display:'flex',
    padding: theme.spacing(4)
}));

const ProductDetailInfo = styled(Box)(() =>({
    display:'flex',
    flexDirection:'column',
    maxWidth:500,
    lineHeight:1.5,
}));

export default function ProductDetails(open,onClose,product){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Dialog
        TransitionComponent={SlideTransition}
        variant = 'permanat'
        open={open}
        fullScreen>

            <DialogTitle sx={{
                background:colors.secondary
            }}>
                <Box display = 'flex'
                alignItem = 'center'
                justifyContent = 'space-between'color={'white'}>
                    product title
                    <IconButton sx={{color:'white'}}>
                        <Close  onClick={onClose} />
                    </IconButton>
                </Box> 
            </DialogTitle>

            {/* <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx={{mr:4}}>
                        <ProductImage src={product.image}/>
                    </Product>
                    <ProductDetailInfo>
                        <Typography variant="subtitle1">SKU 176</Typography>
                        <Typography variant="subtitle1">Availability: 5</Typography>
                        <Typography variant="subtitle1">
                            {Product.name}
                        </Typography>
                    </ProductDetailInfo>
                </ProductDetailWrapper>
            </DialogContent> */}
        </Dialog>
    )
}