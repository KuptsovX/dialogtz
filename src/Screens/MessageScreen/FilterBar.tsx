import Button from "../../Components/Button/Button";
import './FilterBar.sass'
import ArrowLeft from "../../Components/Icons/ArrowLeft";
import InstagramIcon from "../../Components/Icons/SocialNetworksGrey/InstagramIcon";
import OKIcon from "../../Components/Icons/SocialNetworksGrey/OKIcon";
import TelegramIcon from "../../Components/Icons/SocialNetworksGrey/TelegramIcon";
import VKIcon from "../../Components/Icons/SocialNetworksGrey/VKIcon";
import YouTubeIcon from "../../Components/Icons/SocialNetworksGrey/YouTubeIcon";
import {Dispatch, SetStateAction} from "react";
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Checkbox,
    FormGroup,
    Select,
    MenuItem
} from "@mui/material";
import {LocalizationProvider, deDE, DatePicker} from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

interface FilterBarProps {
    hideFilter: boolean
    expand: boolean
    setHideFilter: Dispatch<SetStateAction<boolean>>
    setExpand: Dispatch<SetStateAction<boolean>>
}

export default function FilterBar({hideFilter, setHideFilter, setExpand}: FilterBarProps) {
    return (
        <div className='filter-bar-container'>
            <div className='filter-bar-container-container'>
                <div className='filter-bar-container-header'>
                    <p>Фильтровать: </p>
                    <div className='filter-bar-container-header-hide' onClick={() => {
                        setHideFilter(!hideFilter)
                        setExpand(true)
                    }}>
                        <ArrowLeft />
                        <p>Скрыть</p>
                    </div>
                </div>
                <div className='filter-bar-container-read-status'>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Состояние просмотра: </FormLabel>
                        <RadioGroup
                            defaultValue="all"
                            name="radio-read-status"
                        >
                            <FormControlLabel value="all" control={<Radio size='small' />} label="Все сообщения"/>
                            <FormControlLabel value="unread" control={<Radio size='small' />} label="Не прочитано"/>
                            <FormControlLabel value="read" control={<Radio size='small' />} label="Прочитано"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='filter-bar-container-positive'>
                    <p>Тональность: </p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox size='small' />} label="Позитивная"/>
                        <FormControlLabel control={<Checkbox size='small' />} label="Негативная"/>
                    </FormGroup>
                </div>
                <div className='filter-bar-container-sort'>
                    <p>Сортировать: </p>
                    <Select className='filter-bar-container-sort-select' size='small' value='by-date'>
                        <MenuItem value='by-date'>По дате публикации</MenuItem>
                    </Select>
                    <FormControl>
                        <RadioGroup
                            name="radio-read-sort"
                        >
                            <FormControlLabel value="ascending" control={<Radio size='small'/>} label="По возрастанию"/>
                            <FormControlLabel value="descending" control={<Radio size='small'/>} label="По убыванию"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='filter-bar-container-platform'>
                    <p>Платформа: </p>
                    <FormControl>
                        <RadioGroup
                            name="radio-platforms"
                        >
                            <FormControlLabel value="all-platforms" control={<Radio size='small' />} label="Все платформы"/>
                        </RadioGroup>
                    </FormControl>
                    <div className='filter-bar-container-platform-icons'>
                        <InstagramIcon/>
                        <OKIcon/>
                        <TelegramIcon/>
                        <VKIcon iconType="filter"/>
                        <YouTubeIcon/>
                    </div>
                </div>
                <div className='filter-bar-container-date'>
                    <p>Дата публикации: </p>
                    <>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs} adapterLocale="ru"
                            localeText={deDE.components.MuiLocalizationProvider.defaultProps.localeText}
                        >
                            <DatePicker sx={{mb: 1}} />
                            <DatePicker />
                        </LocalizationProvider>
                    </>
                </div>
                <Button text='Очистить фильтры' colorful={false}/>
                <Button text='Применить фильтры' colorful={true}/>
            </div>
        </div>
    )
}