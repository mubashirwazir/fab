import Image from "next/image";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { Layout } from "../components";
import Slideshow from "../components/Slideshow";
import Link from "next/link";



export default function posts({ posts }: any): JSX.Element {
    return ( 
        <Layout>
            <div className="contentWrap">
            <div className="h-full mx-auto  items-center p-12">
            <h2 className="text-2xl font-bold mb-2"><span className="customeColor">OUR</span> BLOGS</h2>
            <hr className="mb-2" />
            {
                posts.map((post: any) => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`}>
                            <span>{post.title}</span>
                            </Link>
                        {/* <span>{post.id}</span> */}
                        
                        <hr className="mb-1" />
                    </div>
                    )
                })
            }

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


        </Layout>

    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}

