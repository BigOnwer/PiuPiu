import logo from '../../assets/logoText.svg'
import { ButtonsAccount, HeaderContainer, HeaderContent, Input, InputContainer } from './style'
import { MagnifyingGlass } from 'phosphor-react'

export function Header() {
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logo}/>

                
                <InputContainer>
                    <Input placeholder="Pesquise por um usuario ou conteudo..." />
                    <a href="#"><MagnifyingGlass size={22} color='#ffff' cursor="default"/></a>
                </InputContainer>

                <div>
                    <ButtonsAccount variant='income'>Entrar</ButtonsAccount>
                    <ButtonsAccount variant='outcome'>Criar Conta</ButtonsAccount>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}