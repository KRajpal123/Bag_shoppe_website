import { colors } from "../theme";
import { styled } from "@mui/material/styles";
import { Box, IconButton, List, Typography } from "@mui/material";

//container
export const AppbarContainer = styled(Box)(()=>({
    display:'flex',
    marginTop:4,
    justifyContent:'center',
    alignItems:'center',
    padding:'2px 8px',
}))

//header

export const AppbarHeader = styled(Typography)(()=>({
    padding:'4px',
    flexGrow:1,
    fontSize:'4em',
    fontFamily:'"Montez","cursive"',
    color: colors.secondary
}))


export const MyList = styled(List)(({ type })=>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow:3,
    justifyContent:'center',
    alignItems:'center'
}))

export const ActionIconsContainerDesktop = styled(Box)(()=>({
    display:'flex',
    background: colors.primary,
    position:'fixed',
    bottom:"0",
    left:"0",
    width:"100%",
    alignItems:'center',
    zIndex:99,
    border: `1px solid ${colors.border}`

}));

export const ActionIconsContainerMobile = styled(Box)(()=>({
    flexGrow:0
}));

export const DrawerCloseButton = styled(IconButton)(()=>({
    position:'absolute',
    top:10,
    left:'230px',
    zIndex:1999,
}))