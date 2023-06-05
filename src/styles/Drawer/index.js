import { Close } from "@mui/icons-material";
import { Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton } from "../appbar";

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;

export default function AppDrawer(){
    const {openDrawer,setDrawerOpen} = useUIContext();
    return(
        <>
          {openDrawer && (<DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                <Close sx={{
                    fontSize:'2.5rem',
                    color:'white'
                }}/>
                
            </DrawerCloseButton>)}

        <Drawer open={openDrawer}>
            <List>
                <ListItemButton>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>Catagories</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>Products</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>About Us</ListItemText>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                    <ListItemText>Contact Us</ListItemText>
                </ListItemButton>
                <MiddleDivider />
            </List>
        </Drawer>
        </>
    )
}