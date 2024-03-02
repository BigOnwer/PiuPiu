import { ReactNode, createContext, useEffect, useState } from "react"
import { API } from "../lib/axios"

interface Post {
    id: number,
    content: string,
    createdAt: string;
}

interface createPostInput{
    content: string
}

interface PostsContextType{
    posts: Post[]
    createPosts: (data: createPostInput) => Promise<void>
}

interface PostProviderProps{
    children: ReactNode
}

export const PostContext = createContext({} as PostsContextType)

export function PostProvider({children}: PostProviderProps) {
    const [posts, setPosts] = useState<Post[]>([])

    async function fetchPosts(query?: string) {
        const response = await API.get('/posts', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })
        

        setPosts(response.data)
    }

    async function createPosts(data: createPostInput){
        const {content} = data

        const response = await API.post('/posts', {
            content,
            createdAt: new Date(),
        })

        setPosts(state => [response.data, ...state])
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return(
        <PostContext.Provider
            value={{
            posts,
            createPosts,
        }}
        >
            {children}
        </PostContext.Provider>
    )
}