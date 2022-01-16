import React from 'react'
import styled from '@emotion/styled';
import { useNavigate} from 'react-router-dom';
const ClientActions = ({ client,deleteClient }) => {
    let navigate = useNavigate();
    const { name, email, company, _id } = client;

    const lookClient = (id) => {
        navigate(`/clients/informationClient/${_id}`);
    }
    const editclient = (id) => {
        navigate(`/clients/editClient/${_id}`);

    }
    const deleteClinetAction = (id) => {
        deleteClient(id)

    }

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{company}</td>
            <Actions>
                <button className='mg look'
                    onClick={lookClient}
                >Look</button>
                <button className='mg edit'
                    onClick={editclient}
                >Edit</button>
                <button className='delete'
                    onClick={()=>deleteClinetAction(_id)}
                >Delete</button>
            </Actions>
        </tr>
    )
}

//Style
const Actions = styled.td`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    button{
        padding: 1rem;
        border: none;
        cursor: pointer;
        font-weight: bold;
        background-color: transparent;
        font-size: 2rem;
        transition: .1s ease;
    }
    .mg{
        margin-bottom: 1rem;
    }
    .look{
        border: 3px solid var(--color-look);
        color: var(--color-look);
    }
    .edit{
        border: 3px solid var(--color-edit);
        color: var(--color-edit);
    }
    .delete{
        border: 3px solid var(--color-delete);
        color: var(--color-delete);
    }
    .look:hover{
        background-color: var(--color-look);
        color: var(--color-white);
    }
    .edit:hover{
        background-color: var(--color-edit);
        color: var(--color-white);
    }
    .delete:hover{
        background-color: var(--color-delete);
        color: var(--color-white);
    }
`;

export default ClientActions
