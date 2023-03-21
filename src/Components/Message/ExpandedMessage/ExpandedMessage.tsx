import './ExpandedMessage.sass'
import VKIcon from "../../Icons/SocialNetworksGrey/VKIcon";
import Tag from "../../Tag/Tag";
import TagIcon from "../../Icons/TagIcon";
import ThumbDownIcon from "../../Icons/ThumbDownIcon";
import ThumbUpIcon from "../../Icons/ThumbUpIcon";
import {useState} from "react";
import OKIcon from "../../Icons/SocialNetworksGrey/OKIcon";
import InstagramIcon from "../../Icons/SocialNetworksGrey/InstagramIcon";
import TelegramIcon from "../../Icons/SocialNetworksGrey/TelegramIcon";
import YouTubeIcon from "../../Icons/SocialNetworksGrey/YouTubeIcon";
import EyeIcon from "../../Icons/EyeIcon";
import ClosedEyeIcon from "../../Icons/ClosedEyeIcon";
import picture from '../../pic.jpg'

interface ExpandedProps {
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
    read: boolean
    reaction: string,
    isNew: boolean

}

export default function ExpandedMessage({filters,isNew, date, content, title, platform}: ExpandedProps) {
    const [isRead, setIsRead] = useState<boolean>(false)
    return (
        <div onClick={() => setIsRead(true)} className='expanded-message-container'>
            <div className='expanded-message-container-info'>
                <div className='expanded-message-container-info-source'>
                    {platform.code === 'vk' ? <VKIcon iconType='message'/> : platform.code === 'ok' ?
                        <OKIcon iconType='message' /> : platform.code === 'ig' ? <InstagramIcon iconType='message' /> : platform.code === 'tg' ?
                            <TelegramIcon iconType='message'/> : <YouTubeIcon iconType='message'/>}
                    <span className="expanded-message-container-info-source-platform">{platform.name}</span>
                    <span className="expanded-message-container-info-source-date">{date}</span>
                </div>
                <div className='expanded-message-container-info-header'>
                    {title}
                </div>
                <div className='expanded-message-container-info-tags'>
                    <TagIcon/>
                    {filters.map((tag) => <Tag text={tag.title.slice(0 - 7)} tagType='expanded'
                                               key={tag.id}/>).slice(0 - 3)}

                </div>
                <img src={picture} alt='pic'/>
                <div className='expanded-message-container-info-text'>{content}

                </div>
                <hr className='break-line'></hr>
                <div className='expanded-message-container-info-status'>
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
                    <div className='expanded-message-container-info-status-reaction'>
                        <ThumbDownIcon/>
                        <ThumbUpIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}