import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import axiosClient from "../config/axiosClient";
import FormClient from '../components/FormClient';

const EditClinet = () => {
    const { id } = useParams();
    const [client, setClient] = useState({});

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
    }, []);
    return (
        <>
            <Title>Edit Client</Title>
            {Object.keys(client).length > 0 ? (<FormClient
                client={client}
                edit={true}
            />) : null}
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
export default EditClinet
