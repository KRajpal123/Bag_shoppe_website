import { createTheme } from "@mui/material/styles"

export const colors = {
    primary: '#ffff' ,
    secondary: '#800000',
    success: "#008899",
    dark: "#FEF5E7",
    light:"#aaa",
    border:'d0dfec',
    black: "black",
    white : "#fff"

}
const theme = createTheme(
    {
        palette:{
           primary: {
            main: colors.primary
           },
           secondary:{
            main: colors.secondary
           }
        },
        components:{
            MuiButton:{
                defaultProps:{
                    disableRipple:true,
                    disableElevation:true,
                }
            }
        },
        MyShopButton:{
            styleOverrides:{
                root: {
                    color: colors.white,
                },
                primary:{
                    background: colors.success,
                    "&hover":{
                        background:colors.black
                    },
                },
                secondary:{
                    background: colors.secondary,
                    "&hover":{
                        background:colors.secondary
                    },
                }
            }
        }
    }
);

export default theme;