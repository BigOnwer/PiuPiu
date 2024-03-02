import { GlobalStyle, SeparatorLine } from "./styles/globals"
import { Header } from "./components/Header"
import { PostForm } from "./components/PostForm"
import separator from './assets/separator.svg'
import { PaperPlaneTilt, User } from "phosphor-react"
import { Comment, Container, HeaderContent, Input, InputContainer, Text } from "./style"

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <br /><br />
      <PostForm/>
      <br />
      <SeparatorLine src={separator} alt="Linha Horizontal Cinza"/>
      <Container>
        <HeaderContent>
          <User size={52} />
          <strong>User</strong>
        </HeaderContent>
        <Text>
          Fala pessoal 👋
          <br />
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 
          <br />
          <strong>#uiux #userexperience</strong>
        </Text>
        <SeparatorLine src={separator}/>
        <Comment>
          <strong>Deixe seu comentario</strong>
          <InputContainer>
            <Input placeholder="Search the docs…" />
            <PaperPlaneTilt size={32} color="#c2c2c2"/>
          </InputContainer>
        </Comment>
      </Container>
    </div>
      
  )
}

export default App
