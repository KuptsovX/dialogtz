import FilterBar from "./FilterBar";
import './MessagePage.sass'
import Header from "./Header";
import {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/dispatchHook";
import {getMessages} from "../../store/requests/messageRequest";
import Message from "../../Components/Message/Message";
import ExpandedMessage from "../../Components/Message/ExpandedMessage/ExpandedMessage";
import {messagesSelector} from "../../store/Selectors/messagesSelector";
import {Pagination} from "@mui/material";

export default function MessagePage() {
    const [expand, setExpand] = useState(false)
    const [hideFilter, setHideFilter] = useState<boolean>(true)
    const [clickToExpand, setClickToExpand] = useState<number>(0)
    const [page, setPage] = useState<number>(1)
    const dispatch = useAppDispatch()
    const {messages, token} = useAppSelector(messagesSelector)

    const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value)
        dispatch(getMessages({pageNumber: page, token: token.accessToken, pageSize: 10}))
    }

    useEffect(() => {
        dispatch(getMessages({token: token.accessToken, pageNumber: 1, pageSize: 10}))
    },[dispatch, token.accessToken])

    return (
        <div className='message-page-container'>
            <Header expand={expand} setExpand={setExpand} hideFilter={hideFilter} setHideFilter={setHideFilter}/>
            {hideFilter && <FilterBar expand={expand} setExpand={setExpand} hideFilter={hideFilter}
                                      setHideFilter={setHideFilter}/>}
            <div
                className={expand ? 'message-page-container-message-area-expanded' : 'message-page-container-message-area'}>
                {messages?.data.map((mes) => (
                    <Message setClickToExpand={setClickToExpand} expand={expand} title={mes.title} content={mes.content}
                             date={mes.date} filters={mes.filters}
                             read={mes.isRead} id={mes.id} isNew={mes.isNew}
                             platform={mes.platform} reaction={mes.reaction} key={mes.id} imageUrl={mes.imageUrl}/>))}
                <Pagination page={page} onChange={handlePageChange} count={10}/>
            </div>
            <div className='message-page-container-expanded-message-area'>
                {messages.data.filter(mesId => mesId.id === clickToExpand).map(el => <ExpandedMessage id={el.id}
                                                                                                      title={el.title}
                                                                                                      filters={el.filters}
                                                                                                      read={el.isRead}
                                                                                                      isNew={el.isNew}
                                                                                                      platform={el.platform}
                                                                                                      reaction={el.reaction}
                                                                                                      imageUrl={el.imageUrl}
                                                                                                      date={el.date}
                                                                                                      content={el.content}/>)}
            </div>
        </div>
    )
}