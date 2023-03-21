import {Dispatch, SetStateAction, useState} from "react";
import './Message.sass'
import Tag from "../Tag/Tag";
import TagIcon from "../Icons/TagIcon";
import VKIcon from "../Icons/SocialNetworksGrey/VKIcon";
import ThumbDownIcon from "../Icons/ThumbDownIcon";
import ThumbUpIcon from "../Icons/ThumbUpIcon";
import OKIcon from "../Icons/SocialNetworksGrey/OKIcon";
import InstagramIcon from "../Icons/SocialNetworksGrey/InstagramIcon";
import TelegramIcon from "../Icons/SocialNetworksGrey/TelegramIcon";
import YouTubeIcon from "../Icons/SocialNetworksGrey/YouTubeIcon";
import EyeIcon from "../Icons/EyeIcon";
import ClosedEyeIcon from "../Icons/ClosedEyeIcon";

interface MessageProps {
    id: number,
    date: string,
    title: string,
    content: string,
    imageUrl: string,
    filters: [
        {
            id: number,
            title: string
        }
    ],
    platform: {
        id: number,
        name: string,
        code: string
    },
    read: boolean,
    reaction: string,
    isNew: boolean
    expand: boolean
    setClickToExpand: Dispatch<SetStateAction<number>>
}

export default function Message({
                                    expand,
                                    title,
                                    content,
                                    date,
                                    isNew,
                                    filters,
                                    id,
                                    platform,
                                    setClickToExpand
                                }: MessageProps) {
    const [isRead, setIsRead] = useState<boolean>(false)
    return (
        <div className={expand ? 'message-container-expanded' : 'message-container'} onClick={() => {
            setIsRead(true);
            setClickToExpand(id)
        }}>
            <div className='message-container-info'>
                <div className={expand ? 'message-container-info-source-expanded' : 'message-container-info-source'}>
                    <div className='message-container-info-icon'>
                    {platform.code === 'vk' ? <VKIcon iconType='message'/> : platform.code === 'ok' ?
                        <OKIcon iconType='message' /> : platform.code === 'ig' ? <InstagramIcon iconType='message'/> : platform.code === 'tg' ?
                            <TelegramIcon iconType='message'/> : <YouTubeIcon iconType='message'/>}
                    </div>

                    <span>{date}</span>
                    {!isRead && <div
                        className={expand ? 'message-container-info-source-new-expanded' : 'message-container-info-source-new'}>
                        {isNew && <Tag text="Новое" tagType={"new"}/>}</div>}
                </div>
                <div className='message-container-info-header'>{title}
                </div>
                {/*255 символов*/}
                <div className='message-container-info-text'>
                    {content.slice(0, 239) + '...'}
                </div>
                <div className='message-container-info-tags'>
                    <TagIcon/>
                    {filters.map((tag) => <Tag text={tag.title.slice(0 - 7)} tagType='message'
                                               key={tag.id}/>).slice(0 - 3)}
                </div>
                <hr className='break-line'></hr>
                <div className='message-container-info-status'>
                    {/*Я так понял, что если новость не новая, то уже прочитана, поэтому объединил isNew и isRead  в одну логику*/}
                    {isRead || !isNew ?
                        <>
                            <EyeIcon />
                        <p>Прочитано</p>
                        </>
                        :
                        <>
                            <ClosedEyeIcon />
                        <p>Не прочитано</p>
                        </>}
                    <div className={expand ? 'message-container-info-status-reaction-expand' : 'message-container-info-status-reaction'}>
                        <ThumbDownIcon/>
                        <ThumbUpIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}