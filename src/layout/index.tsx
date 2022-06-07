import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header/header"
import styles from "./app.module.scss"

interface Children {
    children: ReactNode
}

export default function index({ children }: Children) {
    return (
        <div className={styles.app}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
