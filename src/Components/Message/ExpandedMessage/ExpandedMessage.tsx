import './ExpandedMessage.sass'
import VKIcon from "../../Icons/SocialNetworksGrey/VKIcon";
import Tag from "../../Tag/Tag";
import TagIcon from "../../Icons/TagIcon";
import ThumbDownIcon from "../../Icons/ThumbDownIcon";
import ThumbUpIcon from "../../Icons/ThumbUpIcon";
import {useState} from "react";

export default function ExpandedMessage() {
    const [isRead, setIsRead] = useState<boolean>(false)
    return (
        <div onClick={() => setIsRead(true)} className='expanded-message-container'>
            <div className='expanded-message-container-info'>
                <div className='expanded-message-container-info-source'>
                    <VKIcon  iconType="message"/>
                    <span>26.07.2022 / 10:30</span>
                </div>
                <div className='expanded-message-container-info-header'>Районы Москвы с хорошей экологией. Ну…с почти
                    хорошей
                    экологией
                </div>
                <div className='expanded-message-container-info-tags'>
                    <TagIcon/>
                    <Tag tagType="expanded" text='Москва'/>
                    <Tag tagType="expanded" text='Москва'/>

                </div>
                <div className='expanded-message-container-info-text'>Реконструкция стадиона «Авангард» на шоссе
                    Энтузиастов будет завершена до конца 2022 года. Об этом сообщил мэр Москвы Сергей Собянин в ходе
                    осмотра работ по комплексной реконструкции стадиона и благоустройству территории спорткомплекса.
                    «Сконцентрировали усилия, чтобы не растягивать долго ремонт, чтобы за год сделать. Это не к осени
                    будет сделано. Это - до конца года. Надеюсь, что до конца года будет построен, чтобы в следующем
                    году здесь можно было заниматься спортом», - сказал Собянин. Он напомнил, что проект реконструкции
                    был внесен на голосование на портале «Активный гражданин». «Мы сделали проект, согласовали с
                    жителями концепцию, проголосовали, 80% проголосовало «за». И приступили к реконструкции. Здесь будет
                    все и зимой, и летом. И открытые поля, и футбольное поле, спортивные площадки, детские площадки. И
                    закрытые павильоны, где будут заниматься и экстримом, и традиционными видами спорта: борьбой,
                    спортивными танцами, теннисом», - отметил мэр. По его словам, стадион будет работать в зимнее время:
                    здесь откроют пункт проката лыж, каток, будут проводить городские и районные мероприятия.

                </div>

                <div className='expanded-message-container-info-status'>
                    {isRead ? <p>Прочитано</p> : <p>Не прочитано</p>}
                    <div className='expanded-message-container-info-status-reaction'>
                        <ThumbDownIcon/>
                        <ThumbUpIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}