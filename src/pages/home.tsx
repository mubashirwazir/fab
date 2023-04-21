import Image from "next/image";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { Layout } from "./components";
import Slideshow from "./components/Slideshow";



export default function home(): JSX.Element {
    return (
        <Layout>
            <div className="contentWrap">
                <Slideshow/>

                <div className="h-full mx-auto  flex items-center p-12">
                    <div className="flex-1 h-[400px] p-4 ">
                        <h2 className="text-2xl font-bold mb-2">WHY<span className="customeColor"> IT COMRADE</span></h2>
                        <ul className="list-disc">
                            <li className="ml-4">15+ Years of IT Experience</li>
                            <li className="ml-4">Diverse Expertise on Technologies</li>
                            <li className="ml-4">Customer Oriented Long Term Relationship Approach</li>
                            <li className="ml-4">Onshore-Offshore Model for Cost Effective Solutions</li>
                            <li className="ml-4">Proper Hierarchy & Escalation path</li>
                            <li className="ml-4">Intellectual Property Rights Protection</li>
                            <li className="ml-4">Exceptional Quality Training and Support</li>
                        </ul>
                    </div>
                    <div className="flex-1 h-[400px] p-4 ">
                        <h2 className="text-2xl font-bold mb-2"><span className="customeColor">OUR</span> SERVICES</h2>
                        <ul className="list-disc">
                            <li className="ml-4">Software Application Design and Development</li>
                            <li className="ml-4">Web Application Development</li>
                            <li className="ml-4">Quality Assurance &amp; Testing</li>
                            <li className="ml-4">Maintenance and Support</li>
                            <li className="ml-4">Technology Consulting</li>
                            <li className="ml-4">Software Re-Engineering</li>
                            <li className="ml-4">Software Prototyping</li>
                            <li className="ml-4">Training</li>
                        </ul></div>
                    <div className="flex-1 h-[400px] p-4 ">

                        <Image
                            src="/fp-mainbody-1.jpg"
                            alt="Slideer Logo"
                           // placeholder="blur"
                            className="dark:invert w-75 "
                            width={600}
                            height={300}
                        />
                    </div>
                </div>
                <hr className="mb-2 py-4" />
                <div className="grid grid-cols-3 gap-6 p-12 ">
                    <div>
                        <h2 className="text-2xl font-bold mb-2"><span className="customeColor">OUR</span> VISION</h2>
                        <hr className="mb-2" />
                        <p className="">Help our customers thrive by delivering cost effective and highly customized software solutions.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2"><span className="customeColor">OUR</span> MISSION</h2>
                        <hr className="mb-2" />
                        <p className="">Achieve the highest level of customer satisfaction by delivering customized software solutions built with proven technologies to boost productivity, streamline workflows, and provide robust automation.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2"><span className="customeColor">OUR</span> SOLUTIONS</h2>
                        <hr className="mb-2" />
                        <p className="">Our solutions are as varied and diverse as our clients – from client/server desktop applications to complex web-based database solutions. Our strength lies in building innovative solutions offering data sharing, data management, analytical abilities and reporting.</p>
                    </div>
                </div>



            </div>
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
        </Layout>

    )
}