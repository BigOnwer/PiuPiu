import { GlobalStyle, SeparatorLine } from "./styles/globals"
import { Header } from "./components/Header"
import { PostForm } from "./components/PostForm"
import separator from './assets/separator.svg'
import { PaperPlaneTilt, User } from "phosphor-react"
import { Comment, Container, HeaderContent, Input, InputContainer, Text } from "./style"
import { PostContext, PostsProvider } from "./context/PostContext"
import { useContext } from "react"

function App() {
  const {posts} = useContext(PostContext)
  console.log(typeof posts);

  return (
    <div>
      <PostsProvider>
        <GlobalStyle/>
        <Header/>
        <br /><br />
        <PostForm/>
        <br />
        <SeparatorLine src={separator} alt="Linha Horizontal Cinza"/>
      <Container>
        
      </Container>
      </PostsProvider>
    </div>
      
  )
}

export default App
