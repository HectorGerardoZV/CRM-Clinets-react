import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import * as Yup from "Yup";
import Alert from './Alert';
import axiosClient from '../config/axiosClient.js';

const FormClient = ({ client, edit }) => {
    let navigate = useNavigate();
    const clientHelper = client;

    //Validation Schema
    const validation = Yup.object().shape({
        name:
            Yup.string()
                .min(3, "Short Name")
                .max(50, "Long Name")
                .required("Client name is required"),
        phoneNumber:
            Yup.number()
                .positive("Invalid number")
                .integer("Invalid number")
                .typeError("Invalid number"),
        email:
            Yup.string()
                .email("Invalid email")
                .required("E-Mail is required"),
        company:
            Yup.string()
                .required("Client company is required"),
    });

    //State
    const [success, setSuccess] = useState(false);
    const [messageSuccess, setMessageSuccess] = useState("");
    const [failed, setFailed] = useState(false);
    const [messageFailed, setMessageFailed] = useState("");


    const action = async (client, { resetForm }) => {
        try {
            if (!edit) {
                const response = await axiosClient.post("/clients", client);
                const { data } = response;
                if (data.message) {
                    setSuccess(true);
                    setMessageSuccess(data.message);
                    resetForm();

                    setTimeout(() => {
                        navigate("/clients");
                    }, 1000);
                } else {
                    setFailed(true);
                    setMessageFailed(data.error);
                }
            } else {
                const response = await axiosClient.put(`/clients/${clientHelper._id}`, client);
                const { data } = response;
                if (data.message) {
                    setSuccess(true);
                    setMessageSuccess(data.message);
                    setTimeout(() => {
                        navigate("/clients");
                    }, 1000);
                } else {
                    setFailed(true);
                    setMessageFailed(data.error);
                }
            }

        } catch (error) {
            setFailed(true);
            if (!edit) {
                setMessageFailed("Error while adding client");
            } else {
                setMessageFailed("Error while editing client");
            }
        }

    }
    return (
        <>
            <FromStyle>
                <Formik
                    initialValues={{
                        name: client?.name ?? "",
                        phoneNumber: client?.phoneNumber ?? "",
                        email: client?.email ?? "",
                        company: client?.company ?? "",
                        notes: client?.notes ?? ""
                    }}
                    onSubmit={action}
                    enableReinitialize={true}
                    validationSchema={validation}
                >
                    {({ errors, touched }) => {
                        return (
                            <Form>
                                {success ? (<Alert message={messageSuccess} type={"success"} />) : null}
                                <DobleInput>
                                    <Input>
                                        <label htmlFor="name">Name</label>
                                        <Field
                                            id={"name"}
                                            type={"text"}
                                            name={"name"}
                                        />
                                        {errors.name && touched.name ?
                                            (<Alert message={errors.name} type={"error"} />) : null}
                                    </Input>
                                    <Input>
                                        <label htmlFor="phoneNumber">Phone Number</label>

                                        <Field
                                            id={"phoneNumber"}
                                            type={"tel"}
                                            name={"phoneNumber"}
                                        />
                                        {errors.phoneNumber && touched.phoneNumber ?
                                            (<Alert message={errors.phoneNumber} type={"error"} />) : null}
                                    </Input>

                                </DobleInput>
                                <Input>
                                    <label htmlFor="email">E-Mail</label>

                                    <Field
                                        id={"email"}
                                        type={"email"}
                                        name={"email"}
                                    />
                                    {errors.email && touched.email ?
                                        (<Alert message={errors.email} type={"error"} />) : null}
                                </Input>
                                <Input>
                                    <label htmlFor="company">Company</label>

                                    <Field
                                        id={"company"}
                                        type={"text"}
                                        name={"company"}
                                    />
                                    {errors.company && touched.company ?
                                        (<Alert message={errors.company} type={"error"} />) : null}
                                </Input>
                                <Input>
                                    <label htmlFor="notes">Notes</label>

                                    <Field
                                        id={"notes"}
                                        as={"textarea"}
                                        name={"notes"}
                                    />
                                </Input>
                                <Input>

                                    <Field
                                        id={"submit"}
                                        name={"submit"}
                                        type={"submit"}
                                        value={edit ? "save changes" : "add client"}
                                    />
                                </Input>
                                {failed ? (<Alert message={messageFailed} type={"error"} />) : null}
                            </Form>
                        )

                    }}
                </Formik>
            </FromStyle>
        </>
    )
}

//Style
const FromStyle = styled.section`
    background-color: var(--color-white);
    width: 75rem;
    margin: 0 auto;
    padding: 5rem 10rem;
    box-shadow: var(--shadow);

`;
const Input = styled.div`
    margin-bottom: 2rem;
    input,textarea{
        width: 100%;
        border: none;
        padding: 1.5rem;
        background-color: var(--color-bg);
        transition: .2s ease;
        outline: none;
        font-size: 2rem;
        color: var(--color-blue-ligth);
        font-weight: bold;

    }
    textarea{
        height: 15rem;
        resize: none;
    }
    label{
        display: block;
        margin-bottom: 1rem;
        font-size: 2rem;
        color: var(--color-blue-ligth);
        text-transform: uppercase;

    }
    input:hover{
        box-shadow: var(--shadow);
    }
    textarea:hover{
        box-shadow: var(--shadow);
    }
    input:focus{
        box-shadow: var(--shadow);

    }
    textarea:focus{
        box-shadow: var(--shadow);
    }
    input[type="submit"]{
        background-color: var(--color-blue-ligth);
        color: var(--color-white);
        text-transform: uppercase;
        font-size: 2rem;
        cursor: pointer;
    }
    input[type="submit"]:hover{
        background-color: var(--color-blue-strong);
        box-shadow: none;
        
    }

`;
const DobleInput = styled.div`
    width: 100%;
    display: flex;
    gap: 3rem;
    div{
        width: 100%;
    }

`;
FormClient.defaultPorps = {
    client: {},
    load: false,
    edit: false
};



export default FormClient
