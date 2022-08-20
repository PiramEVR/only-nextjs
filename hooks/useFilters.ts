import {IOptions, IPost} from "../types";

export const useFilters = (posts: IPost[], options: IOptions) => {
    let filteredPosts: IPost[] = [...posts]

    if (options.filter.value) {
        filteredPosts = filteredPosts.filter(({description}) => {
            return description.toLowerCase().includes(options.filter.value)
        })
    }
    if (options.sort === 'DESC') {
        filteredPosts = filteredPosts.sort((a, b) => {
            return b.id - a.id
        })
    } else {
        filteredPosts = filteredPosts.sort((a, b) => {
            return a.id - b.id
        })
    }

    return filteredPosts

}
