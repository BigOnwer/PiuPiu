import { TextField } from "@radix-ui/themes";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: #121214;
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1128px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

interface ButtonsAccountType {
    variant: 'income' | 'outcome'
}

export const ButtonsAccount = styled.button<ButtonsAccountType>`
    height: 50px;
    border: ${props => props.variant === 'income' ? '2px solid' : '0'};
    border-color: #0089D7;
    background: ${props => props.variant === 'income' ? 'rgba(0,0,0,1)' : '#0089D7'};
    color: #fff;
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
    margin: 10px;
    transition: ${props => props.variant === 'income' ? 'background-color 0.2s' : 'none'};

    &:hover{
        background: ${props => props.variant === 'income' ? '#0089D7' : '#006EAC'};
        transition: background-color 0.2s;
    }
`

export const InputContainer = styled(TextField.Root)`
    width: 50%;
    height: 2rem;
    background: transparent;
    border: 2px solid #ffff;
    padding: 16px;
    border-radius: 6px;
    display: flex;
    align-items: center;
`

export const Input = styled(TextField.Input)`
    width: 100%;
    height: 2rem;
    background: transparent;
    border: 0;

    &:focus{
        outline: none;
    }
`