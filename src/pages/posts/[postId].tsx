import Layout from "../components";
import Link from "next/link";


function postDetail({ post }: any) {

    return (
        <>
            <Layout>
                <div className="contentWrap">
                    <div className="h-full mx-auto  items-center p-12">
                        
                        {
                           
                                    <div key={post.id}>

                                        <span></span>
                                        <h2 className="text-2xl font-bold mb-2"><span className="customeColor">{post.title}</span> </h2>
                                        <hr className="mb-2" />
                                        <br></br>
                                        <span>{post.body}</span>
                                        
                                    </div>
                               
                        }
                    <div className="h-[200px]"></div>
                    </div>
                </div>
                {/* footer area  */}

            </Layout>
        </>
    )
}

export default postDetail;
export async function getStaticPaths(){    
    return {
        paths: [
        {
            params: { postId: '1',}
        },
        {
            params: { postId: '2',}
        },
        {
            params: { postId: '3',}
        },
        
        ],
        fallback: false
    }
}
export async function getStaticProps(context: any) {
    const { params } = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();

    return {
        props:
        {
            post: data,
        }

    }
}