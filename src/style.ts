import { TextField } from "@radix-ui/themes";
import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
    display: flex;
    margin-top: 16px;
    flex-direction: column;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

export const HeaderContent = styled.header`
    display: flex;
    align-items: center;

    svg{
        border: 3px solid #0089D7;
        padding: 3px;
        border-radius: 8px;
        margin-right: 10px;
    }
`

export const Text = styled.div`
    width: 752px;
    margin-top: 1.3rem;
    font-size: 1rem;

    strong{
        color: #0076B8;
    }
    margin-bottom: 5px;
`

export const Comment = styled.footer`
    margin-top: 2rem;
`

export const InputContainer = styled(TextField.Root)`
    width: 100%;
    height: 3rem;
    background: #121214;
    border: 0;
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