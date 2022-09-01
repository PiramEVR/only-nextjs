import {IOptions, IPost} from "../types";
import {MutableRefObject, useMemo, useRef} from "react";

export const useFilters = (posts: IPost[], options: IOptions) => {

    const filteredPosts = useRef<IPost[]>(posts)

    filteredPosts.current = useMemo(() => {
        return posts.filter(({description}) => {
            return description.toLowerCase().includes(options.filter.value.toLowerCase());
        })
    }, [options.filter])

    useMemo(() => {
        if (options.sort === 'DESC') {
            filteredPosts.current.sort((a, b) => b.id - a.id)
        } else {
            filteredPosts.current.sort((a, b) => a.id - b.id)
        }
    }, [options.sort])

    return filteredPosts.current

}
