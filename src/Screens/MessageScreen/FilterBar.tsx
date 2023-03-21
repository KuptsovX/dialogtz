import Button from "../../Components/Button/Button";
import './FilterBar.sass'
import ArrowLeft from "../../Components/Icons/ArrowLeft";
import InstagramIcon from "../../Components/Icons/SocialNetworksGrey/InstagramIcon";
import OKIcon from "../../Components/Icons/SocialNetworksGrey/OKIcon";
import TelegramIcon from "../../Components/Icons/SocialNetworksGrey/TelegramIcon";
import VKIcon from "../../Components/Icons/SocialNetworksGrey/VKIcon";
import YouTubeIcon from "../../Components/Icons/SocialNetworksGrey/YouTubeIcon";
import {Dispatch, SetStateAction, useState} from "react";
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
import {useAppDispatch, useAppSelector} from "../../store/dispatchHook";
import {messagesSelector} from "../../store/Selectors/messagesSelector";
import {getSortedMessages} from "../../store/requests/messageRequest";
import {
    addDateFrom,
    addDateTo,
    addPlatform,
    addReaction,
    addSort,
    addWatchState, clearFilters
} from "../../store/slices/messageSlice";
import dayjs, {Dayjs} from "dayjs";

interface FilterBarProps {
    hideFilter: boolean
    expand: boolean
    setHideFilter: Dispatch<SetStateAction<boolean>>
    setExpand: Dispatch<SetStateAction<boolean>>
}

export default function FilterBar({hideFilter, setHideFilter, setExpand}: FilterBarProps) {
    const dispatch = useAppDispatch()
    const {sorter, token} = useAppSelector(messagesSelector)
    const [dateToValue, setDateToValue] = useState<Dayjs | null>(dayjs('2022-04-17'))
    const [dateFromValue, setDateFromValue] = useState<Dayjs | null>(dayjs('2022-04-17'))

    return (
        <div className='filter-bar-container'>
            <div className='filter-bar-container-container'>
                <div className='filter-bar-container-header'>
                    <p>Фильтровать: </p>
                    <div className='filter-bar-container-header-hide' onClick={() => {
                        setHideFilter(!hideFilter)
                        setExpand(true)
                    }}>
                        <ArrowLeft/>
                        <p>Скрыть</p>
                    </div>
                </div>
                <div className='filter-bar-container-read-status'>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Состояние просмотра: </FormLabel>
                        <RadioGroup
                            name="radio-read-status"
                            onChange={(e) => dispatch(addWatchState(e.target.value))}
                        >
                            <FormControlLabel value="allMessages" control={<Radio size='small'/>}
                                              label="Все сообщения"/>
                            <FormControlLabel value="unread" control={<Radio size='small'/>} label="Не прочитано"/>
                            <FormControlLabel value="read" control={<Radio size='small'/>} label="Прочитано"/>
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='filter-bar-container-positive'>
                    <p>Тональность: </p>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox onChange={() => dispatch(addReaction('positive'))} value='positive'
                                               size='small'/>} label="Позитивная"/>
                        <FormControlLabel
                            control={<Checkbox onChange={() => dispatch(addReaction('negative'))} value='negative'
                                               size='small'/>} label="Негативная"/>
                    </FormGroup>
                </div>
                <div className='filter-bar-container-sort'>
                    <p>Сортировать: </p>
                    <Select className='filter-bar-container-sort-select' size='small' value='by-date'>
                        <MenuItem value='by-date'>По дате публикации</MenuItem>
                    </Select>
                    <FormControl>
                        <RadioGroup
                            onChange={e => dispatch(addSort(e.target.value))}
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
                            onChange={() => dispatch(addPlatform(['vk', 'ok', 'yt', 'tg', 'ig']))}
                        >
                            <FormControlLabel value="all-platforms" control={<Radio size='small'/>}
                                              label="Все платформы"/>
                        </RadioGroup>
                    </FormControl>
                    <div className='filter-bar-container-platform-icons'>
                        <InstagramIcon iconType='filter'/>
                        <OKIcon iconType='filter'/>
                        <TelegramIcon iconType='filter'/>
                        <VKIcon iconType="filter"/>
                        <YouTubeIcon iconType='filter'/>
                    </div>
                </div>
                <div className='filter-bar-container-date'>
                    <p>Дата публикации: </p>
                    <>
                        <LocalizationProvider
                            dateAdapter={AdapterDayjs} adapterLocale="ru"
                            localeText={deDE.components.MuiLocalizationProvider.defaultProps.localeText}
                        >
                            <DatePicker value={dateFromValue} onChange={(newValue) => {
                                setDateFromValue(newValue)
                                dispatch(addDateFrom(dateFromValue))
                            }} sx={{mb: 1}}/>
                            <DatePicker value={dateToValue} onChange={(newValue) => {
                                setDateToValue(newValue)
                                dispatch(addDateTo(dateToValue))
                            }
                            }/>
                        </LocalizationProvider>
                    </>
                </div>
                <Button onClick={() => dispatch(clearFilters({
                    watchState: "",
                    reaction: "",
                    sort: "",
                    platform: [""],
                    dateFrom: "",
                    dateTo: "",
                    search: ""
                }))} text='Очистить фильтры' colorful={false}/>
                <Button onClick={() => dispatch(getSortedMessages({
                    reaction: sorter.reaction,
                    platform: sorter.platform,
                    dateTo: sorter.dateTo,
                    dateFrom: sorter.dateFrom,
                    token: token.accessToken,
                    refreshToken: token.refreshToken,
                    isRead: false,
                    pageSize: 10,
                    pageNumber: 1
                }))} text='Применить фильтры' colorful={true}/>
            </div>
        </div>
    )
}