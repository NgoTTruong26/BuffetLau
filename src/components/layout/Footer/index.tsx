import styles from "./footer.module.scss"
import clsx from "clsx"

export default function Footer() {

    /*     const onClickTransferToNewTab: React.MouseEventHandler = (e: any | { target: any }) => {
            e.preventDefault();
    
            window.open(e.target.href)
        } */



    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>

                    <div className={styles.decription}>
                        <div className={styles.title}>
                            <h3>CÔNG TY</h3>
                        </div>
                        <ul className={styles.content}>
                            <li>
                                <a>Giới thiệu về BUFFET LẨU T2</a>
                            </li>
                            <li>
                                <a>Tuyển dụng</a>
                            </li>
                            <li>
                                <a>Tin tức</a>
                            </li>
                            <li>
                                <a>Chăm sóc khách hàng</a>
                            </li>
                            <li>
                                <a>Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.column}>

                    <div className={clsx(styles.decription, styles.info)}>
                        <div className={styles.title}>
                            <h3>Thông tin cửa hàng</h3>
                        </div>
                        <ul className={styles.content}>
                            <li>
                                <h4>Địa chỉ:</h4>
                                <p>670 Đ. Kim Giang, Thanh Liệt, Thanh Trì, Hà Nội, Việt Nam</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.column}>

                    <div className={styles.decription}>
                        <div className={styles.title}>
                            <h3>Kết nối với chúng tôi:</h3>
                        </div>
                        <ul className={styles.content}>
                            <li>
                                <a href="https://www.facebook.com/Buffetlaut12" target="_blank" className={clsx("fa-brands fa-facebook", styles.iconFB)}></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.map}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d586.7554298452434!2d105.8208304324329!3d20.966003183118865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2a706a64006e34c!2sBuffet%20l%E1%BA%A9u%20T12!5e0!3m2!1svi!2s!4v1651405632096!5m2!1svi!2s"
                            loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </footer>
    )
}
