import { Link } from "react-router-dom"

import styles from "./footer.module.scss"

import Logo from "/logo.webp"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Link to="/">
                    <img src={Logo} alt="logo" className={styles.logo} />
                </Link>
                <p className={styles.description}>
                Stay with us and expect news in our telegram. Our official email for communication: help@nise.support
                </p>
            </div>
            <div className={styles.right}>
                <div className={styles.social}>
                    <a
                        href="https://t.me/niseapp"
                        target="_blank"
                        className={styles.socialLink}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="20"
                            viewBox="0 0 24 20"
                            fill="none"
                        >
                            <path
                                d="M21.6232 0.959021C21.6232 0.959021 23.7268 0.138839 23.5519 2.13257C23.4928 2.95275 22.9681 5.82457 22.5592 8.93157L21.1552 18.1344C21.1552 18.1344 21.0382 19.4817 19.9852 19.718C18.9333 19.952 17.3556 18.8967 17.0637 18.6615C16.8297 18.4854 12.6792 15.8487 11.2173 14.5582C10.8083 14.2072 10.3403 13.504 11.2763 12.6827L17.4135 6.82084C18.1155 6.11766 18.8175 4.47729 15.8937 6.46984L7.70962 12.0386C7.70962 12.0386 6.7748 12.6247 5.02099 12.0977L1.22026 10.9241C1.22026 10.9241 -0.18256 10.0448 2.21417 9.16557C8.06062 6.41193 15.2508 3.59802 21.6232 0.960203V0.959021Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://www.youtube.com/@NiseApp"
                        target="_blank"
                        className={styles.socialLink}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.9735 6.23596C21.8517 6.47217 22.5432 7.16818 22.778 8.05195L22.7779 8.05204C23.2044 9.65391 23.2044 12.9962 23.2044 12.9962C23.2044 12.9962 23.2044 16.3383 22.7779 17.9404C22.5431 18.8242 21.8516 19.5201 20.9734 19.7565C19.382 20.1856 13 20.1856 13 20.1856C13 20.1856 6.61805 20.1856 5.02652 19.7565C4.1484 19.52 3.45674 18.8241 3.22218 17.9403C2.79578 16.3382 2.79578 12.9961 2.79578 12.9961C2.79578 12.9961 2.79578 9.65383 3.22218 8.05195C3.45674 7.16818 4.1484 6.47217 5.02661 6.23596C6.61813 5.80668 13.0001 5.80668 13.0001 5.80668C13.0001 5.80668 19.3821 5.80668 20.9735 6.23596ZM16.2469 12.9963L10.9128 16.0306V9.96161L16.2469 12.9963Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                    <a
                        href="https://x.com/NiseApp"
                        target="_blank"
                        className={styles.socialLink}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                        >
                            <path
                                d="M9.84807 5.12199H4.33252L10.8408 13.8001L4.68707 20.8792H6.77534L11.8087 15.0894L16.1507 20.8804H21.6662L14.8826 11.8371L20.7208 5.12199H18.6325L13.9171 10.5465L9.84807 5.12199ZM16.939 19.3038L7.48443 6.69735H9.05979L18.5143 19.3038H16.939Z"
                                fill="white"
                            />
                        </svg>
                    </a>
                </div>
                <div className={styles.rights}>© 2024 All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer
