import { Button, PostContainer, TextArea } from "./style";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { PostContext } from "../../context/PostContext";

const newPostSchema = z.object({
    content: z.string()
})

type newPostInput = z.infer<typeof newPostSchema>

export function PostForm() {
    const {createPosts} = useContext(PostContext)

    const {
        register,
        handleSubmit,
        reset
    } = useForm<newPostInput>({
        resolver: zodResolver(newPostSchema),
    })

    

    async function handleNewPost(data: newPostInput) {
        const {content} = data

        await createPosts({
            content
        })

        reset()
    }


    return(
        <PostContainer onSubmit={handleSubmit(handleNewPost)}>
            <span>Conte a todos o que tem a dizer</span>
                <TextArea placeholder="Escreva sua mensagem aqui..." {...register('content')}/>
                <Button type="submit">Publicar</Button>
        </PostContainer>
    )
}