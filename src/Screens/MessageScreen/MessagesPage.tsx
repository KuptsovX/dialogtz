import FilterBar from "./FilterBar";
import './MessagePage.sass'
import Header from "./Header";
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../store/dispatchHook";
import {getMessages} from "../../store/requests/messageRequest";
import Message from "../../Components/Message/Message";
import ExpandedMessage from "../../Components/Message/ExpandedMessage/ExpandedMessage";

export default function MessagePage() {
    const [expand, setExpand] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMessages())
    })

    const [hideFilter, setHideFilter] = useState<boolean>(true)
    return (
        <div className='message-page-container'>
            <Header expand={expand} setExpand={setExpand} hideFilter={hideFilter} setHideFilter={setHideFilter}/>
            {hideFilter && <FilterBar expand={expand} setExpand={setExpand} hideFilter={hideFilter} setHideFilter={setHideFilter}/>}
            <div className={expand ? 'message-page-container-message-area-expanded' :'message-page-container-message-area'}>
                <Message expand={expand}/>
                <Message expand={expand}/>
                <Message expand={expand}/>
                <Message expand={expand}/>
                <Message expand={expand}/>
                <Message expand={expand}/>
            </div>
            <div className='message-page-container-expanded-message-area'>
                <ExpandedMessage />
            </div>
        </div>
    )
}