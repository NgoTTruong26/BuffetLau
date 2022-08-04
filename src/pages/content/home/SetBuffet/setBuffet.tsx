import styles from "./setBuffet.module.scss"
import srcSet159 from "./Image/277356723_5190374224361404_1978612321309134065_n.jpg"
import srcSet219 from "./Image/276124313_5190374667694693_2373930496844717162_n.jpg"
import srcSet299 from "./Image/276137555_5190374801028013_8807721092422998356_n.jpg"
import clsx from "clsx"

export default function SetBuffet() {

    const menu = [{
        set: "SET",
        price: "159K",
        slogan: "Gọi thả ga, ăn thật đã",
        somon: "15 món",
        src: srcSet159
    }, {
        set: "SET",
        price: "219K",
        slogan: "-Best Seller- Thêm hải sản",
        somon: "19 món",
        src: srcSet219
    }, {
        set: "SET",
        price: "299K",
        slogan: "Special",
        somon: "23 món",
        src: srcSet299
    }]

    const handleOnMouseEnter: any = (e: { target: Element }) => {
        e.target.scrollIntoView({
            behavior: "smooth",
        })

    }

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.main} >
                    <div className={clsx({
                        [styles['col-1']]: styles['col-1']
                    })}>
                        <p className={styles.menu}>MENU</p>
                    </div>
                    {menu.map((item, index) => (
                        <div key={index} className={styles.set}>
                            <div className={styles.boxPrice}>
                                <div className={styles.setPrice}>
                                    {item.set}
                                    <span className={styles.price}>{item.price}</span>
                                </div>
                                <div className={styles.slogan}>{item.slogan}</div>
                                <div className={styles.somon}>{item.somon}</div>
                            </div>
                            <img onMouseEnter={handleOnMouseEnter} className={styles.setBuffet} src={item.src} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
