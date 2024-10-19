import { Select, styled } from "@mui/material";

const CustomSelect = styled(Select)(({ theme }) => ({
    '& .MuiSelect-select': {
      color: 'white', 
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', 
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', 
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', 
    },
    '& .MuiSelect-icon': {
      color: 'white', 
    },
}));

export default CustomSelect