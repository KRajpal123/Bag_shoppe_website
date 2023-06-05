import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { colors } from "../theme";


export const FooterTitle = styled(Typography)(() => ({
textTransform:'uppercase',
marginBottom:'1em',
}));

export const Sub = styled(TextField)(() => ({
'.MuiInputLable-root':{
    color: colors.secondary,
},
'.MuiInputLable-root::before' : {
    borderBottom:`1px solid ${colors.success}`
}
}));