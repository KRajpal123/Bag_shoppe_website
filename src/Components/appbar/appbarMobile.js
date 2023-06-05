import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from '@mui/icons-material/Menu';
import { Search } from "@mui/icons-material";
import Action from "./action";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({matches}){

    const {setDrawerOpen,setSearchBox} = useUIContext()
    return(
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={'center'} variant ="h4">
                My Bags
            </AppbarHeader>
            <IconButton>
                <Search onClick={() => setSearchBox(true)} />
            </IconButton>
            <Action matches={matches}/>
        </AppbarContainer>
    )
}