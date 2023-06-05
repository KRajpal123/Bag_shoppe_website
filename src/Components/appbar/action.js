import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { MyList } from "../../styles/appbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Person } from "@mui/icons-material";
import { ActionIconsContainerDesktop,ActionIconsContainerMobile } from '../../styles/appbar';

export default function Action({matches}){
    const Component = matches
    ? ActionIconsContainerDesktop
    : ActionIconsContainerMobile;
    return(
      <Component>
         <MyList type = 'row'>
            <ListItemButton
            sx={{
                justifyContent:'center',
            }}
            >
                <ListItemIcon
                sx={{
                    display:'flex',
                    justifyContent:'center'
                }}
                >
                    <ShoppingCartIcon />
                </ListItemIcon>  
            </ListItemButton>
                <Divider orientation="vertical" flexItem />

            <ListItemButton
              sx={{
                justifyContent:'center',
            }}
            >
                <ListItemIcon
                 sx={{
                    display:'flex',
                    justifyContent:'center'
                }}
                >
                    <FavoriteIcon />
                </ListItemIcon>
            </ListItemButton>
  <Divider orientation="vertical" flexItem />

            <ListItemButton
              sx={{
                justifyContent:'center',
            }}
            >
                <ListItemIcon
                 sx={{
                    display:'flex',
                    justifyContent:'center'
                }}
                >
                   <Person />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
        </MyList>
        </Component>
    )
}