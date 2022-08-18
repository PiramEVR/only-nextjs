import type {GetStaticProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {IPost} from "./api/posts";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json()
    return {
        props: {posts: data},
    }
}

type HomePropsType = {
    posts: IPost[]
}


const Home: NextPage<HomePropsType> = ({posts}) => {
    return (
        <ul className={styles.container}>

        </ul>
    )
}

export default Home
