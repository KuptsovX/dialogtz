import './Header.sass'
import {Dispatch, SetStateAction} from "react";
import FilterIcon from "../../Components/Icons/FilterIcon";
import {FormControl, InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from "../../Components/Icons/SearchIcon";

interface HeaderProps {
    setHideFilter: Dispatch<SetStateAction<boolean>>
    hideFilter: boolean
    setExpand: Dispatch<SetStateAction<boolean>>
    expand: boolean
}

export default function Header({setHideFilter, hideFilter, expand, setExpand}: HeaderProps) {
    return (
        <div className={expand ? 'header-container-expanded' : 'header-container'}>
            {!hideFilter && <div className='header-container-filter' onClick={() => {
                setHideFilter(!hideFilter);
                setExpand(false)
            }}>
                <FilterIcon />
            </div>}
            <div className='header-container-title'>
                <span>Список фильтров</span>
                <span>/</span>
                <span>Сообщения</span>
            </div>
            <div className='header-container-search'>
                <FormControl sx={{width: "200%"}} variant="standard">
                    <OutlinedInput
                        placeholder='Поиск'
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
        </div>
    )
}