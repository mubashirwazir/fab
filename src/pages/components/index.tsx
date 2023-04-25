import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Disclaimer } from "./disclaimer";


interface Props {
    children?: ReactNode
}

export const Layout = ({children, ...props}: Props) => {
    return (
        <>
    <div className="bodyWrap">
    <Header/>
    
    <main {...props}>{children}</main>
    
    <Footer/>
    </div>
    
    <Disclaimer/>

    </>
    )
    
}
export default Layout;