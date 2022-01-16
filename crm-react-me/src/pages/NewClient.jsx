import React from 'react'
import FormClient from '../components/FormClient'
import styled from '@emotion/styled'
const NewClient = () => {
    return (
        <>
            <Title>New Client</Title>
            <FormClient/>
        </>
    )
}
//Style
const Title = styled.h1`
    text-align: center;
    margin-bottom: 5rem;
    font-size: 4rem;
    color: var(--color-blue-ligth);
`;



export default NewClient
