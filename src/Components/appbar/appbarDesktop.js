import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {AppbarContainer, AppbarHeader, MyList} from '../../styles/appbar'
import SearchIcon from '@mui/icons-material/Search';
import Action from './action';
import { useUIContext } from '../../context/ui';

export default function AppbarDesktop({matches}){
 
        const {setSearchBox} = useUIContext();
    return(
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList  type = 'row'>
                <ListItemText  primary = "Home" />
                <ListItemText  primary = "About" />
                <ListItemText  primary = "Products" />
                <ListItemText  primary = "Contact Us" />
            </MyList>
            <ListItemButton>
            <ListItemIcon>
                <SearchIcon onClick={() => setSearchBox(true)} />
            </ListItemIcon>
            </ListItemButton>
            <Action matches={matches}/>
        </AppbarContainer>

    )
}