import { Box } from "@mui/system";
import {styled} from "@mui/material/styles";
import { colors } from "../theme";
import { Button, IconButton } from "@mui/material";
import { slideInBottom, slideInRight } from "../../Animations";

export const Product = styled(Box)(({theme}) => ({
    display : "flex",
    justifyContent: 'center',
    alignItems: "center",
    flexDirection:'column',
    [theme.breakpoints.up('md')] : {
        position : 'relative'
    },

}));

export const ProductImage = styled('img')(({src,theme}) => ({
    src: `url(${src})`,
    width: "300px",
    height:'300px',
    background: colors.secondary,
    padding:'10px',
    [theme.breakpoints.down('md')] : {
        width: "80%",
        padding: "24px"
    }
}));

export const ProductActionButton = styled(IconButton)(() => ({
    background: colors.success,
    margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton,{
    shouldForwardProp:(prop) => prop !=='isFav'
})(({ isFav, theme}) => ({
   color: isFav ? colors.black : colors.white,
   [theme.breakpoints.up('md')] : {
    position: 'absolute',
    right: 0,
    top: 0
   },
}));


export const ProductAddToCart  = styled(Button,{
    shouldForwardProp: (prop) => prop!=='show'
})(({show , theme})=> ({
    width:'120px',
    fontSize: '12px',
    [theme.breakpoints.up('md')] : {
        position: 'absolute',
        bottom : '2%',
        width:'300px',
        padding:'10px 5px', 
        Animation: 
        show && `${slideInBottom} 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both`
    },
    background: colors.secondary,
    color: colors.white,
    opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
padding: '4px',
display:'flex',
flexDirection:'column',
alignItems:'center',
}));

export const ProductActionWrapper = styled(Box)(({ theme, show }) => ({
    [theme.breakpoints.up('md')] : {
        display: show ? 'visible' : 'none',
        position: 'absolute',
        right: 0,
        top:'20%',
        Animation: 
        show && 
        `${slideInRight} 0.5s cubic-bezier(0.250,0.460,0.450,0.940) both` 
    },
}));