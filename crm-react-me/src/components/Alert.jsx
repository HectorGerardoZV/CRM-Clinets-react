import React from 'react'
import styled from '@emotion/styled'


const Alert = ({ message, type }) => {
    return (
        type === "error" ? (
            <Error>
                {message}
            </Error>
        ) : (
            <Success>
                {message}
            </Success>
        )

    )
}

const Error = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1rem;
    text-transform: uppercase;
    color: var(--color-white);
    width: 100%;
    text-align: center;
    background-color: var(--color-delete);
`;
const Success = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--color-white);
    width: 100%;
    text-align: center;
    background-color: var(--color-look);
    margin-bottom: 3rem;
`;



export default Alert
