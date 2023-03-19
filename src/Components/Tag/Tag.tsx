import './Tag.sass'

interface TagProps {
    text: string
    tagType: "new" | "message" | "expanded"
}

export default function Tag({text, tagType}: TagProps) {
    return (
        <div style={tagType === "new" ? {
            background: "#34D348",
            height: "22px",
            marginLeft: "427px"
        } : tagType === "message" ? {background: "#C9D1D9", height: "26px"} : {background: "#F0F6FC", height: "24px"}}
             className='tag-container'>
            <span
                style={tagType === "new" ? {color: "#FFFFFF"} : tagType === "message" ? {color: "#484F58"} : {color: "#AFBAC5"}}>{text}</span>
        </div>
    )
}