import {useState} from "react";
import './Message.sass'
import Tag from "../Tag/Tag";
import TagIcon from "../Icons/TagIcon";
import VKIcon from "../Icons/SocialNetworksGrey/VKIcon";
import ThumbDownIcon from "../Icons/ThumbDownIcon";
import ThumbUpIcon from "../Icons/ThumbUpIcon";

interface MessageProps {
    clicked?: boolean
    title?: string
    date?: string
    text?: string
    tags?: string
    expand: boolean
}

export default function Message({ expand}: MessageProps) {
    const [isRead, setIsRead] = useState<boolean>(false)
    return (
        <div className={expand ? 'message-container-expanded' : 'message-container'} onClick={() => setIsRead(true)}>
            <div className='message-container-info'>
                <div className='message-container-info-source'>
                    <VKIcon iconType='message'/>
                    <span>26.07.2022 / 10:30</span>
                    {!isRead && <Tag text="Новое" tagType={"new"} />}
                </div>
                <div className='message-container-info-header'>Районы Москвы с хорошей экологией. Ну…с почти хорошей
                    экологией
                </div>
                {/*255 символов*/}
                <div className='message-container-info-text'>Экологическая обстановка в Москве неидеальна — не будем
                    открывать Америку. Это беда любого мегаполиса. Промышленность, свалки, загазованность, расширение
                    автодорог — с каждым годом в столице становится меньше экологически благополучных мест. Но не всё
                    так
                </div>
                <div className='message-container-info-tags'>
                    <TagIcon/>
                    <Tag tagType='message' text='Москва'/>
                    <Tag tagType='message' text='Москва'/>
                    <Tag tagType='message' text='Москва'/>
                    <Tag tagType='message' text='Москва'/>
                    <Tag tagType='message' text='Москва'/>
                </div>
                <div className='message-container-info-status'>
                    {isRead ? <p>Прочитано</p> : <p>Не прочитано</p>}
                    <div className='message-container-info-status-reaction'>
                        <ThumbDownIcon/>
                        <ThumbUpIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}