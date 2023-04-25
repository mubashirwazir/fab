export const Footer = () => {

    return (
        <>
                        <div className="w-[80%] mx-auto grid grid-cols-2 gap-8 p-12 ">
                    <div>
                        <h2 className="text-2xl font-bold mb-2"><span className="customeColor">CONTACT</span>  DETAILS</h2>
                        <h2 className="font-bold py-4">IT Comrade Inc.</h2>

                        <p className="py-4">
                            10432 Balls Ford Road, Suite #310
                            <br></br>

                            Manassas, VA 20109
                            <br></br>
                            <br></br>
                            Phone: 703-763-2840
                            <br></br>
                            Fax: 877-866-2107
                            <br></br>
                            <br></br>
                            Email: <a className="font-bold" href="mailto:info@itcomrade.net">info@itcomrade.net</a>
                            <br></br>
                            Web: <a className="font-bold" href="http://www.itcomrade.net">www.itcomrade.net </a>
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2"><span className="customeColor">NETWORK</span>  WITH US
                        </h2>
                        <hr className="mb-2" />
                        <p className="py-4">Connect with us via a selection of popular social media, networks and other platforms.</p>
                        <p className="">/itcomrade</p>
                        <p className="">@itComrade</p>
                    </div>
                </div>
        </>
    )
}
export default Footer;