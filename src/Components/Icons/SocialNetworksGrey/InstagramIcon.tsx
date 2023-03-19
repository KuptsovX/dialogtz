import {useState} from "react";

export default function InstagramIcon() {
    const [clicked, setClicked] = useState<boolean>(false)
    return (
        <>
        {
            clicked ?
                <svg onClick={() => setClicked(!clicked)} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 11.95C0.75 8.02963 0.75 6.06945 1.51295 4.57207C2.18407 3.25493 3.25493 2.18407 4.57207 1.51295C6.06945 0.75 8.02963 0.75 11.95 0.75H14.05C17.9704 0.75 19.9306 0.75 21.4279 1.51295C22.7451 2.18407 23.8159 3.25493 24.487 4.57207C25.25 6.06945 25.25 8.02963 25.25 11.95V14.05C25.25 17.9704 25.25 19.9306 24.487 21.4279C23.8159 22.7451 22.7451 23.8159 21.4279 24.487C19.9306 25.25 17.9704 25.25 14.05 25.25H11.95C8.02963 25.25 6.06945 25.25 4.57207 24.487C3.25493 23.8159 2.18407 22.7451 1.51295 21.4279C0.75 19.9306 0.75 17.9704 0.75 14.05V11.95Z" fill="url(#paint0_radial_144_5845)"/>
                    <path d="M0.75 11.95C0.75 8.02963 0.75 6.06945 1.51295 4.57207C2.18407 3.25493 3.25493 2.18407 4.57207 1.51295C6.06945 0.75 8.02963 0.75 11.95 0.75H14.05C17.9704 0.75 19.9306 0.75 21.4279 1.51295C22.7451 2.18407 23.8159 3.25493 24.487 4.57207C25.25 6.06945 25.25 8.02963 25.25 11.95V14.05C25.25 17.9704 25.25 19.9306 24.487 21.4279C23.8159 22.7451 22.7451 23.8159 21.4279 24.487C19.9306 25.25 17.9704 25.25 14.05 25.25H11.95C8.02963 25.25 6.06945 25.25 4.57207 24.487C3.25493 23.8159 2.18407 22.7451 1.51295 21.4279C0.75 19.9306 0.75 17.9704 0.75 14.05V11.95Z" fill="url(#paint1_radial_144_5845)"/>
                    <path d="M0.75 11.95C0.75 8.02963 0.75 6.06945 1.51295 4.57207C2.18407 3.25493 3.25493 2.18407 4.57207 1.51295C6.06945 0.75 8.02963 0.75 11.95 0.75H14.05C17.9704 0.75 19.9306 0.75 21.4279 1.51295C22.7451 2.18407 23.8159 3.25493 24.487 4.57207C25.25 6.06945 25.25 8.02963 25.25 11.95V14.05C25.25 17.9704 25.25 19.9306 24.487 21.4279C23.8159 22.7451 22.7451 23.8159 21.4279 24.487C19.9306 25.25 17.9704 25.25 14.05 25.25H11.95C8.02963 25.25 6.06945 25.25 4.57207 24.487C3.25493 23.8159 2.18407 22.7451 1.51295 21.4279C0.75 19.9306 0.75 17.9704 0.75 14.05V11.95Z" fill="url(#paint2_radial_144_5845)"/>
                    <path d="M19.125 8.1875C19.125 8.91237 18.5374 9.5 17.8125 9.5C17.0876 9.5 16.5 8.91237 16.5 8.1875C16.5 7.46263 17.0876 6.875 17.8125 6.875C18.5374 6.875 19.125 7.46263 19.125 8.1875Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13 17.375C15.4162 17.375 17.375 15.4162 17.375 13C17.375 10.5838 15.4162 8.625 13 8.625C10.5838 8.625 8.625 10.5838 8.625 13C8.625 15.4162 10.5838 17.375 13 17.375ZM13 15.625C14.4497 15.625 15.625 14.4497 15.625 13C15.625 11.5503 14.4497 10.375 13 10.375C11.5503 10.375 10.375 11.5503 10.375 13C10.375 14.4497 11.5503 15.625 13 15.625Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.25 12.65C4.25 9.70972 4.25 8.23959 4.82222 7.11655C5.32555 6.1287 6.1287 5.32555 7.11655 4.82222C8.23959 4.25 9.70972 4.25 12.65 4.25H13.35C16.2903 4.25 17.7604 4.25 18.8834 4.82222C19.8713 5.32555 20.6744 6.1287 21.1778 7.11655C21.75 8.23959 21.75 9.70972 21.75 12.65V13.35C21.75 16.2903 21.75 17.7604 21.1778 18.8834C20.6744 19.8713 19.8713 20.6744 18.8834 21.1778C17.7604 21.75 16.2903 21.75 13.35 21.75H12.65C9.70972 21.75 8.23959 21.75 7.11655 21.1778C6.1287 20.6744 5.32555 19.8713 4.82222 18.8834C4.25 17.7604 4.25 16.2903 4.25 13.35V12.65ZM12.65 6H13.35C14.849 6 15.868 6.00136 16.6557 6.06571C17.4229 6.1284 17.8153 6.24202 18.089 6.38148C18.7475 6.71703 19.283 7.25247 19.6185 7.91103C19.758 8.18473 19.8716 8.57709 19.9343 9.34432C19.9986 10.132 20 11.151 20 12.65V13.35C20 14.849 19.9986 15.868 19.9343 16.6557C19.8716 17.4229 19.758 17.8153 19.6185 18.089C19.283 18.7475 18.7475 19.283 18.089 19.6185C17.8153 19.758 17.4229 19.8716 16.6557 19.9343C15.868 19.9986 14.849 20 13.35 20H12.65C11.151 20 10.132 19.9986 9.34432 19.9343C8.57709 19.8716 8.18473 19.758 7.91103 19.6185C7.25247 19.283 6.71703 18.7475 6.38148 18.089C6.24202 17.8153 6.1284 17.4229 6.06571 16.6557C6.00136 15.868 6 14.849 6 13.35V12.65C6 11.151 6.00136 10.132 6.06571 9.34432C6.1284 8.57709 6.24202 8.18473 6.38148 7.91103C6.71703 7.25247 7.25247 6.71703 7.91103 6.38148C8.18473 6.24202 8.57709 6.1284 9.34432 6.06571C10.132 6.00136 11.151 6 12.65 6Z" fill="white"/>
                    <defs>
                        <radialGradient id="paint0_radial_144_5845" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.5 19.125) rotate(-55.3758) scale(22.3297)">
                            <stop stopColor="#B13589"/>
                            <stop offset="0.79309" stopColor="#C62F94"/>
                            <stop offset="1" stopColor="#8A3AC8"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_144_5845" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.625 26.125) rotate(-65.1363) scale(19.77)">
                            <stop stopColor="#E0E8B7"/>
                            <stop offset="0.444662" stopColor="#FB8A2E"/>
                            <stop offset="0.71474" stopColor="#E2425C"/>
                            <stop offset="1" stopColor="#E2425C" stopOpacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint2_radial_144_5845" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.562499 1.625) rotate(-8.1301) scale(34.0295 7.27856)">
                            <stop offset="0.156701" stopColor="#406ADC"/>
                            <stop offset="0.467799" stopColor="#6A45BE"/>
                            <stop offset="1" stopColor="#6A45BE" stopOpacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
                :
                <svg onClick={() => setClicked(!clicked)} width="26" height="25" viewBox="0 0 26 25" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.75 11.2C0.75 7.27963 0.75 5.31945 1.51295 3.82207C2.18407 2.50493 3.25493 1.43407 4.57207 0.762954C6.06945 0 8.02963 0 11.95 0H14.05C17.9704 0 19.9306 0 21.4279 0.762954C22.7451 1.43407 23.8159 2.50493 24.487 3.82207C25.25 5.31945 25.25 7.27963 25.25 11.2V13.3C25.25 17.2204 25.25 19.1806 24.487 20.6779C23.8159 21.9951 22.7451 23.0659 21.4279 23.737C19.9306 24.5 17.9704 24.5 14.05 24.5H11.95C8.02963 24.5 6.06945 24.5 4.57207 23.737C3.25493 23.0659 2.18407 21.9951 1.51295 20.6779C0.75 19.1806 0.75 17.2204 0.75 13.3V11.2Z"
                        fill="#A8B4BD"/>
                    <path
                        d="M0.75 11.2C0.75 7.27963 0.75 5.31945 1.51295 3.82207C2.18407 2.50493 3.25493 1.43407 4.57207 0.762954C6.06945 0 8.02963 0 11.95 0H14.05C17.9704 0 19.9306 0 21.4279 0.762954C22.7451 1.43407 23.8159 2.50493 24.487 3.82207C25.25 5.31945 25.25 7.27963 25.25 11.2V13.3C25.25 17.2204 25.25 19.1806 24.487 20.6779C23.8159 21.9951 22.7451 23.0659 21.4279 23.737C19.9306 24.5 17.9704 24.5 14.05 24.5H11.95C8.02963 24.5 6.06945 24.5 4.57207 23.737C3.25493 23.0659 2.18407 21.9951 1.51295 20.6779C0.75 19.1806 0.75 17.2204 0.75 13.3V11.2Z"
                        fill="#A8B4BD"/>
                    <path
                        d="M0.75 11.2C0.75 7.27963 0.75 5.31945 1.51295 3.82207C2.18407 2.50493 3.25493 1.43407 4.57207 0.762954C6.06945 0 8.02963 0 11.95 0H14.05C17.9704 0 19.9306 0 21.4279 0.762954C22.7451 1.43407 23.8159 2.50493 24.487 3.82207C25.25 5.31945 25.25 7.27963 25.25 11.2V13.3C25.25 17.2204 25.25 19.1806 24.487 20.6779C23.8159 21.9951 22.7451 23.0659 21.4279 23.737C19.9306 24.5 17.9704 24.5 14.05 24.5H11.95C8.02963 24.5 6.06945 24.5 4.57207 23.737C3.25493 23.0659 2.18407 21.9951 1.51295 20.6779C0.75 19.1806 0.75 17.2204 0.75 13.3V11.2Z"
                        fill="#A8B4BD"/>
                    <path
                        d="M19.125 7.4375C19.125 8.16237 18.5374 8.75 17.8125 8.75C17.0876 8.75 16.5 8.16237 16.5 7.4375C16.5 6.71263 17.0876 6.125 17.8125 6.125C18.5374 6.125 19.125 6.71263 19.125 7.4375Z"
                        fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M13 16.625C15.4162 16.625 17.375 14.6662 17.375 12.25C17.375 9.83375 15.4162 7.875 13 7.875C10.5838 7.875 8.625 9.83375 8.625 12.25C8.625 14.6662 10.5838 16.625 13 16.625ZM13 14.875C14.4497 14.875 15.625 13.6997 15.625 12.25C15.625 10.8003 14.4497 9.625 13 9.625C11.5503 9.625 10.375 10.8003 10.375 12.25C10.375 13.6997 11.5503 14.875 13 14.875Z"
                          fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M4.25 11.9C4.25 8.95972 4.25 7.48959 4.82222 6.36655C5.32555 5.3787 6.1287 4.57555 7.11655 4.07222C8.23959 3.5 9.70972 3.5 12.65 3.5H13.35C16.2903 3.5 17.7604 3.5 18.8834 4.07222C19.8713 4.57555 20.6744 5.3787 21.1778 6.36655C21.75 7.48959 21.75 8.95972 21.75 11.9V12.6C21.75 15.5403 21.75 17.0104 21.1778 18.1334C20.6744 19.1213 19.8713 19.9244 18.8834 20.4278C17.7604 21 16.2903 21 13.35 21H12.65C9.70972 21 8.23959 21 7.11655 20.4278C6.1287 19.9244 5.32555 19.1213 4.82222 18.1334C4.25 17.0104 4.25 15.5403 4.25 12.6V11.9ZM12.65 5.25H13.35C14.849 5.25 15.868 5.25136 16.6557 5.31571C17.4229 5.3784 17.8153 5.49202 18.089 5.63148C18.7475 5.96703 19.283 6.50247 19.6185 7.16103C19.758 7.43473 19.8716 7.82709 19.9343 8.59432C19.9986 9.38197 20 10.401 20 11.9V12.6C20 14.099 19.9986 15.118 19.9343 15.9057C19.8716 16.6729 19.758 17.0653 19.6185 17.339C19.283 17.9975 18.7475 18.533 18.089 18.8685C17.8153 19.008 17.4229 19.1216 16.6557 19.1843C15.868 19.2486 14.849 19.25 13.35 19.25H12.65C11.151 19.25 10.132 19.2486 9.34432 19.1843C8.57709 19.1216 8.18473 19.008 7.91103 18.8685C7.25247 18.533 6.71703 17.9975 6.38148 17.339C6.24202 17.0653 6.1284 16.6729 6.06571 15.9057C6.00136 15.118 6 14.099 6 12.6V11.9C6 10.401 6.00136 9.38197 6.06571 8.59432C6.1284 7.82709 6.24202 7.43473 6.38148 7.16103C6.71703 6.50247 7.25247 5.96703 7.91103 5.63148C8.18473 5.49202 8.57709 5.3784 9.34432 5.31571C10.132 5.25136 11.151 5.25 12.65 5.25Z"
                          fill="white"/>
                </svg>

        }
        </>
    )
}