import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled';
import ClientsTable from '../components/ClientsTable';
import axiosClient from "../config/axiosClient";
const Panel = () => {
    const [clients, setClients] = useState([]);

    const queryClients = async () => {
        try {
            const response = await axiosClient.get("/clients");
            const { data } = response;
            setClients(data);
        } catch (error) {

        }
    }
    useEffect(() => {
        queryClients();
    },[]);

    const deleteClient = async (id) => {
        const option = confirm("Dos you want to delete this client?");

        if(option){
            const newClients = clients.filter(clinet=>clinet._id!==id);
            try {
                const response = await axiosClient.delete(`/clients/${id}`);
                const {data}= response;

                if(data.message){
                    setClients(newClients);
                }
            } catch (error) {
                
            }
        }
        
    }

    return (
        <>
            <Title>Clients - Panel</Title>
            {clients.length ? (<ClientsTable
                clients={clients}
                deleteClient={deleteClient}
            />) : null}
        </>
    )
}
const Title = styled.h1`
    text-align: center;
    margin-bottom: 5rem;
    font-size: 4rem;
    color: var(--color-blue-ligth);
`;

export default Panel
