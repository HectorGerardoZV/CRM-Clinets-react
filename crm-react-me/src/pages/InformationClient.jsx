import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import { useParams, useNavigate } from 'react-router-dom';
import axiosClient from '../config/axiosClient';


const InformationClient = () => {
    const { id } = useParams();
    let navigate = useNavigate();

    const [client, setClient] = useState({});

    const back = () => {
        navigate("/clients");
    }
    const queryClient = async () => {
        try {
            const response = await axiosClient.get(`/clients/${id}`);
            const { data } = response;
            setClient(data);
        } catch (error) {

        }
    }
    useEffect(() => {
        queryClient();
    });
    return (
        <>
            <Title>Client Information</Title>
            {Object.keys(client).length > 0 ? (

                <ClientCard>
                    <Data><span>Name: </span>{client.name}</Data>
                    <Data><span>Company: </span>{client.company}</Data>
                    <Data><span>Phone Number: </span>{client.phoneNumber}</Data>
                    <Data><span>E-Mail: </span>{client.email}</Data>
                    <Data className='area'><span>Notes: </span>{client.notes}</Data>
                    <button
                        onClick={back}
                    >
                        back
                    </button>
                </ClientCard>
            ) : null}
        </>
    )
}

const Title = styled.h1`
    text-align: center;
    margin-bottom: 5rem;
    font-size: 4rem;
    color: var(--color-blue-ligth);
`;
const ClientCard = styled.section`
    background-color: var(--color-white);
    width: 50%;
    margin: 0 auto;
    padding: 3rem 5rem; 
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    button{
        margin-top: 5rem;
        border: none;
        padding: 2rem;
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-white);
        text-transform: uppercase;
        background-color: var(--color-blue-ligth);
        cursor: pointer;
        transition: .2s ease;
    }
    button:hover{
        background-color: var(--color-blue-strong);

    }

`;
const Data = styled.p`
    background-color: var(--color-bg);
    padding: 1.5rem;
    font-size: 2rem;
    color: var(--color-blue-ligth);
    span{
        color: var(--color-blue-strong);

    }
`;


export default InformationClient
