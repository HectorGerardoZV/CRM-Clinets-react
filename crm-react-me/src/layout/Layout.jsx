import React from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import styled from '@emotion/styled'


const Layout = () => {

    const location = useLocation().pathname;
    return (
        <Area>
            <Navegation>
                <h2>Clients - CRM</h2>
                <div className="separator"></div>
                <Nav>
                    <Link
                        to={"/clients"}
                        className={location==="/clients"? "selected": ""}
                    >Panel</Link>
                    <Link
                        to={"/clients/newClient"}
                        className={location==="/clients/newClient"? "selected": ""}
                    >New Client</Link>
                </Nav>
            </Navegation>
            <MainArea>
                <Outlet/>
            </MainArea>
        </Area>
    )
}

//Style
const Area = styled.section`
    display: grid;
    grid-template-columns: 1fr 4fr;
    height: 100vh;

    @media(max-width: 900px) {
        grid:none
    }

`;
const Navegation = styled.div`
    background-color: var(--color-edit);
    overflow: hidden;

    h2{
        text-align: center;
        margin-top: 5rem;
        font-size: 4rem;
        color: var(--color-white)
    }

    .separator{
        height: .8rem;
        background-color: var(--color-white);
        width: 85%;
        margin: 0 auto;
        margin-top: 2rem;
        border-radius: 1rem;
    }


`;
const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    a{
        text-decoration: none;
        color: var(--color-white);
        width: 100%;
        padding: 2rem 3rem;
        font-size: 2rem;
        cursor: pointer;
        transition: .2s ease;
    }
    a:hover{
        background-color: var(--color-blue-strong);
    }
    a.selected{
        background-color: var(--color-blue-strong);
    }
`;
const MainArea = styled.main`
    background-color: var(--color-bg);
    padding: 5rem;
    overflow: scroll;
`;

export default Layout
