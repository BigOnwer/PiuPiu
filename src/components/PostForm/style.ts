import styled from "styled-components";

export const PostContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

export const TextArea = styled.textarea`
    resize: none;
    height: 96px;
    padding: 8px;
    background: #121214;
    border-radius: 8px;
    border: 1px solid #0089D7;
    margin-top: 5px;
    margin-bottom: 10px;
`

export const Button = styled.button`
    height: 49px;
    width: 6.75rem;
    background: #0089D7;
    border: 0;
    border-radius: 8px;
    
`