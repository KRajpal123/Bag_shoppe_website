import { Close, Search } from "@mui/icons-material";
import { IconButton, Slide } from "@mui/material";
import { useUIContext } from "../../context/ui"
import { SearchBoxContainer, SearchFeild } from "../../styles/search";

export default function SearchBox(){
    const{searchBox,setSearchBox} = useUIContext();
    return(
       <Slide
       direction="down"
       in={searchBox}
       timeout= {500}>

        <SearchBoxContainer>
            <SearchFeild color ='secondary' variant="standard" fullWidth placeholder="search..."/>
            <IconButton>
                <Search sx={{
                    fontSize:{xs:'2rem', md:'3rem'}
                }} color = 'secondary'/>
            </IconButton>

            <IconButton
            onClick={() => setSearchBox(false)}
            sx={{
                position:'absolute',
                top:10,
                right:10,
            }}>
                <Close
                sx={{
                    fontSize:'4rem'
                }} color = "secondary"/>
            </IconButton>
        </SearchBoxContainer>
       </Slide>
    )
}