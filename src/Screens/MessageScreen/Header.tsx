import './Header.sass'
import {Dispatch, SetStateAction} from "react";
import FilterIcon from "../../Components/Icons/FilterIcon";
import {FormControl, InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from "../../Components/Icons/SearchIcon";
import {useAppDispatch, useAppSelector} from "../../store/dispatchHook";
import {messagesSelector} from "../../store/Selectors/messagesSelector";
import {searchMessages} from "../../store/requests/messageRequest";
import {searching} from "../../store/slices/messageSlice";

interface HeaderProps {
    setHideFilter: Dispatch<SetStateAction<boolean>>
    hideFilter: boolean
    setExpand: Dispatch<SetStateAction<boolean>>
    expand: boolean
}

export default function Header({setHideFilter, hideFilter, expand, setExpand}: HeaderProps) {
    const dispatch = useAppDispatch()
    const {sorter, token} = useAppSelector(messagesSelector)
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
                        onChange={e => {
                            dispatch(searching(e.target.value));
                            dispatch(searchMessages({searchData: sorter.search, refreshToken: token.refreshToken}))
                        }}
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