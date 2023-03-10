import Head from "next/head"
import Link from "next/link"

    export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return{
        props:{
            users: data,
        }
    }
    }
    function blog({users}) {
    return(
        <>
           <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {
           users && users.map((user) => {
                return(
                    <>
                    <Link href={`blog/${user.id}`} key={user.id} style={{textDecoration:'none', color:'black'}}>
                    <h1>{user.name}</h1>
                    </Link>
                    <hr/>
                </> 
                )
            })
        }
        </>
    )
}
export default blog