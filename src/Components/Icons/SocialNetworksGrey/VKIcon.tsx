import {useState} from "react";

//Написал здесь интерфейс на экспорт, чтобы не дублировать код в остальных иконках
export interface IconPropsType {
    iconType: "filter" | "message"
}
export default function VKIcon({iconType}: IconPropsType) {
    const [clicked, setClicked] = useState<boolean>(false)
    return (
        <>
        {
            iconType === "filter" ?
                <>
                    {clicked ?
                        <svg onClick={() => setClicked(!clicked)} width="28" height="28" viewBox="0 0 28 28" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.75 12.95C1.75 9.02963 1.75 7.06945 2.51295 5.57207C3.18407 4.25493 4.25493 3.18407 5.57207 2.51295C7.06945 1.75 9.02963 1.75 12.95 1.75H15.05C18.9704 1.75 20.9306 1.75 22.4279 2.51295C23.7451 3.18407 24.8159 4.25493 25.487 5.57207C26.25 7.06945 26.25 9.02963 26.25 12.95V15.05C26.25 18.9704 26.25 20.9306 25.487 22.4279C24.8159 23.7451 23.7451 24.8159 22.4279 25.487C20.9306 26.25 18.9704 26.25 15.05 26.25H12.95C9.02963 26.25 7.06945 26.25 5.57207 25.487C4.25493 24.8159 3.18407 23.7451 2.51295 22.4279C1.75 20.9306 1.75 18.9704 1.75 15.05V12.95Z"
                                fill="#2789F6"/>
                            <path
                                d="M20.0579 16.0423C19.8694 15.7866 19.8272 15.5277 19.9302 15.2654C20.1872 14.5655 23.9307 10.1204 22.3712 10.1204C21.2996 10.1346 20.0109 10.1204 18.9835 10.1204C18.7928 10.1668 18.6694 10.2669 18.5922 10.4705C17.9914 11.8558 17.2562 13.5463 16.1788 14.6328C16.0371 14.747 15.9487 14.7422 15.7872 14.6999C15.0314 13.9042 15.8373 11.1782 15.3777 10.101C15.2871 9.8902 15.0888 9.79497 14.886 9.74134C13.8599 9.4968 11.5165 9.64236 11.1341 10.1346C11.0248 10.2753 11.0096 10.3521 11.0885 10.3647C11.4528 10.4222 11.7107 10.5597 11.8625 10.7771C12.1488 11.4077 12.3599 14.7669 11.5165 14.7669C10.6731 14.7669 9.31309 11.4702 8.93947 10.5563C8.84005 10.2811 8.58695 10.1234 8.32026 10.0768L5.82513 10.0959C5.38655 10.0959 5.14143 10.3123 5.29689 10.7481C6.59645 13.974 9.44035 20.2268 13.8022 20.0703C14.2391 20.0703 14.9908 20.238 15.3321 19.8592C15.8011 19.2371 15.2291 18.129 16.0333 17.7064C16.2361 17.5985 16.4463 17.6889 16.6205 17.8216C17.515 18.5027 17.9899 19.6982 19.093 20.0611C19.287 20.125 19.4569 20.141 19.6028 20.109L21.9339 20.0707C22.3667 20.0707 22.7931 19.8782 22.7035 19.3608C22.3637 18.2512 21.0094 17.1106 20.0579 16.0423Z"
                                fill="white"/>
                        </svg> :

                        <svg onClick={() => setClicked(!clicked)} width="28" height="28" viewBox="0 0 28 28" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.75 12.95C1.75 9.02963 1.75 7.06945 2.51295 5.57207C3.18407 4.25493 4.25493 3.18407 5.57207 2.51295C7.06945 1.75 9.02963 1.75 12.95 1.75H15.05C18.9704 1.75 20.9306 1.75 22.4279 2.51295C23.7451 3.18407 24.8159 4.25493 25.487 5.57207C26.25 7.06945 26.25 9.02963 26.25 12.95V15.05C26.25 18.9704 26.25 20.9306 25.487 22.4279C24.8159 23.7451 23.7451 24.8159 22.4279 25.487C20.9306 26.25 18.9704 26.25 15.05 26.25H12.95C9.02963 26.25 7.06945 26.25 5.57207 25.487C4.25493 24.8159 3.18407 23.7451 2.51295 22.4279C1.75 20.9306 1.75 18.9704 1.75 15.05V12.95Z"
                                fill="#2789F6"/>
                            <path
                                d="M20.0579 16.0423C19.8694 15.7866 19.8272 15.5277 19.9302 15.2654C20.1872 14.5655 23.9307 10.1204 22.3712 10.1204C21.2996 10.1346 20.0109 10.1204 18.9835 10.1204C18.7928 10.1668 18.6694 10.2669 18.5922 10.4705C17.9914 11.8558 17.2562 13.5463 16.1788 14.6328C16.0371 14.747 15.9487 14.7422 15.7872 14.6999C15.0314 13.9042 15.8373 11.1782 15.3777 10.101C15.2871 9.8902 15.0888 9.79497 14.886 9.74134C13.8599 9.4968 11.5165 9.64236 11.1341 10.1346C11.0248 10.2753 11.0096 10.3521 11.0885 10.3647C11.4528 10.4222 11.7107 10.5597 11.8625 10.7771C12.1488 11.4077 12.3599 14.7669 11.5165 14.7669C10.6731 14.7669 9.31309 11.4702 8.93947 10.5563C8.84005 10.2811 8.58695 10.1234 8.32026 10.0768L5.82513 10.0959C5.38655 10.0959 5.14143 10.3123 5.29689 10.7481C6.59645 13.974 9.44035 20.2268 13.8022 20.0703C14.2391 20.0703 14.9908 20.238 15.3321 19.8592C15.8011 19.2371 15.2291 18.129 16.0333 17.7064C16.2361 17.5985 16.4463 17.6889 16.6205 17.8216C17.515 18.5027 17.9899 19.6982 19.093 20.0611C19.287 20.125 19.4569 20.141 19.6028 20.109L21.9339 20.0707C22.3667 20.0707 22.7931 19.8782 22.7035 19.3608C22.3637 18.2512 21.0094 17.1106 20.0579 16.0423Z"
                                fill="white"/>
                            <path
                                d="M1.75 12.95C1.75 9.02963 1.75 7.06945 2.51295 5.57207C3.18407 4.25493 4.25493 3.18407 5.57207 2.51295C7.06945 1.75 9.02963 1.75 12.95 1.75H15.05C18.9704 1.75 20.9306 1.75 22.4279 2.51295C23.7451 3.18407 24.8159 4.25493 25.487 5.57207C26.25 7.06945 26.25 9.02963 26.25 12.95V15.05C26.25 18.9704 26.25 20.9306 25.487 22.4279C24.8159 23.7451 23.7451 24.8159 22.4279 25.487C20.9306 26.25 18.9704 26.25 15.05 26.25H12.95C9.02963 26.25 7.06945 26.25 5.57207 25.487C4.25493 24.8159 3.18407 23.7451 2.51295 22.4279C1.75 20.9306 1.75 18.9704 1.75 15.05V12.95Z"
                                fill="#A8B4BD"/>
                            <path
                                d="M20.0579 16.0423C19.8694 15.7866 19.8272 15.5277 19.9302 15.2654C20.1872 14.5655 23.9307 10.1204 22.3712 10.1204C21.2996 10.1346 20.0109 10.1204 18.9835 10.1204C18.7928 10.1668 18.6694 10.2669 18.5922 10.4705C17.9914 11.8558 17.2562 13.5463 16.1788 14.6328C16.0371 14.747 15.9487 14.7422 15.7872 14.6999C15.0314 13.9042 15.8373 11.1782 15.3777 10.101C15.2871 9.8902 15.0888 9.79497 14.886 9.74134C13.8599 9.4968 11.5165 9.64236 11.1341 10.1346C11.0248 10.2753 11.0096 10.3521 11.0885 10.3647C11.4528 10.4222 11.7107 10.5597 11.8625 10.7771C12.1488 11.4077 12.3599 14.7669 11.5165 14.7669C10.6731 14.7669 9.31309 11.4702 8.93947 10.5563C8.84005 10.2811 8.58695 10.1234 8.32026 10.0768L5.82513 10.0959C5.38655 10.0959 5.14143 10.3123 5.29689 10.7481C6.59645 13.974 9.44035 20.2268 13.8022 20.0703C14.2391 20.0703 14.9908 20.238 15.3321 19.8592C15.8011 19.2371 15.2291 18.129 16.0333 17.7064C16.2361 17.5985 16.4463 17.6889 16.6205 17.8216C17.515 18.5027 17.9899 19.6982 19.093 20.0611C19.287 20.125 19.4569 20.141 19.6028 20.109L21.9339 20.0707C22.3667 20.0707 22.7931 19.8782 22.7035 19.3608C22.3637 18.2512 21.0094 17.1106 20.0579 16.0423Z"
                                fill="white"/>
                        </svg>}
                </> :
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1.75 12.95C1.75 9.02963 1.75 7.06945 2.51295 5.57207C3.18407 4.25493 4.25493 3.18407 5.57207 2.51295C7.06945 1.75 9.02963 1.75 12.95 1.75H15.05C18.9704 1.75 20.9306 1.75 22.4279 2.51295C23.7451 3.18407 24.8159 4.25493 25.487 5.57207C26.25 7.06945 26.25 9.02963 26.25 12.95V15.05C26.25 18.9704 26.25 20.9306 25.487 22.4279C24.8159 23.7451 23.7451 24.8159 22.4279 25.487C20.9306 26.25 18.9704 26.25 15.05 26.25H12.95C9.02963 26.25 7.06945 26.25 5.57207 25.487C4.25493 24.8159 3.18407 23.7451 2.51295 22.4279C1.75 20.9306 1.75 18.9704 1.75 15.05V12.95Z"
                        fill="#2789F6"/>
                    <path
                        d="M20.0579 16.0423C19.8694 15.7866 19.8272 15.5277 19.9302 15.2654C20.1872 14.5655 23.9307 10.1204 22.3712 10.1204C21.2996 10.1346 20.0109 10.1204 18.9835 10.1204C18.7928 10.1668 18.6694 10.2669 18.5922 10.4705C17.9914 11.8558 17.2562 13.5463 16.1788 14.6328C16.0371 14.747 15.9487 14.7422 15.7872 14.6999C15.0314 13.9042 15.8373 11.1782 15.3777 10.101C15.2871 9.8902 15.0888 9.79497 14.886 9.74134C13.8599 9.4968 11.5165 9.64236 11.1341 10.1346C11.0248 10.2753 11.0096 10.3521 11.0885 10.3647C11.4528 10.4222 11.7107 10.5597 11.8625 10.7771C12.1488 11.4077 12.3599 14.7669 11.5165 14.7669C10.6731 14.7669 9.31309 11.4702 8.93947 10.5563C8.84005 10.2811 8.58695 10.1234 8.32026 10.0768L5.82513 10.0959C5.38655 10.0959 5.14143 10.3123 5.29689 10.7481C6.59645 13.974 9.44035 20.2268 13.8022 20.0703C14.2391 20.0703 14.9908 20.238 15.3321 19.8592C15.8011 19.2371 15.2291 18.129 16.0333 17.7064C16.2361 17.5985 16.4463 17.6889 16.6205 17.8216C17.515 18.5027 17.9899 19.6982 19.093 20.0611C19.287 20.125 19.4569 20.141 19.6028 20.109L21.9339 20.0707C22.3667 20.0707 22.7931 19.8782 22.7035 19.3608C22.3637 18.2512 21.0094 17.1106 20.0579 16.0423Z"
                        fill="white"/>
                </svg>
}
        </>
    )
}