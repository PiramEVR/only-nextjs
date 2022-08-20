import type {GetStaticProps, NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {IOptions, IPost} from "../types";
import {useFilters} from "../hooks/useFilters";
import {Input} from "../components/Input";
import {useCallback, useState} from "react";
import {Button} from "../components/Button";

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/posts')
    const data = await res.json()
    return {
        props: {posts: data},
    }
}

interface IHomeProps {
    posts: IPost[]
}


const Home: NextPage<IHomeProps> = ({posts}) => {

    const [options, setOptions] = useState<IOptions>({
        sort: 'ASC',
        filter: {
            name: '',
            value: '',
        }
    })

    const getInputValue = useCallback((value: string) => {
        setOptions(() => ({
            ...options,
            filter: {
                ...options.filter,
                value: value
            }
        }))
    }, [options.filter.value])

    const sortASC = useCallback(() => {
        setOptions(() => ({
            ...options,
            sort: 'ASC'
        }))
    }, [options.sort])

    const sortDESC = useCallback(() => {
        setOptions(() => ({
            ...options,
            sort: 'DESC'
        }))
    }, [options.sort])

    let processedPosts: IPost[] = useFilters(posts, options)

    return (
        <div className={styles.container}>
            <div className={styles.controlUnit}>
                <Input value={options.filter.value} onChangeHandler={getInputValue}/>
                <Button isActive={options.sort === "ASC"} onClickHandler={sortASC}>↑</Button>
                <Button isActive={options.sort === 'DESC'} onClickHandler={sortDESC}>↓</Button>
            </div>

            <ul className={styles.list}>
                {processedPosts.map(({id, title, description, image}) => (
                    <li className={styles.listItem} key={id}>
                        <h2 className={styles.title}>{title}</h2>
                        <div className={styles.img}>
                            <img width={600} height={400} src={image} alt=""/>
                        </div>
                        <p className={styles.description}>{description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
