import React from 'react'
import ClientActions from './ClientActions'
import styled from '@emotion/styled'
const ClientsTable = ({ clients,deleteClient }) => {
    return (
        <Table>
            <Head>
                <tr>
                    <td>Name</td>
                    <td>Contact</td>
                    <td>Company</td>
                    <td>Actions</td>
                </tr>
            </Head>
            <Body>
                {
                    clients.map(client => (
                        <ClientActions
                            key={client._id}
                            client={client}
                            deleteClient={deleteClient}
                        />
                    ))
                }
            </Body>
        </Table>
    )
}

//Style

const Table = styled.table`
    tr, td{
    border:none;
    }
    width: 80%;
    margin: 0 auto;
    background-color: var(--color-white);
    border-collapse:collapse;
    text-align: center;
    font-size: 2rem;
    border: none;
    
`;

const Head = styled.thead`
    background-color: var(--color-blue-strong);
    border: none;
    td{
        padding: 2rem;
        color: var(--color-white);
        font-size: 2rem;
    }
`;

const Body = styled.tbody`
    td{
        color: var(--color-blue-ligth);
    }
    tr{
        transition: .2s ease;
    }
    tr:hover{
        box-shadow: var(--shadow);
        background-color: var(--color-bg);
    }
`;

export default ClientsTable
