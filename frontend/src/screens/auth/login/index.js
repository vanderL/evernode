import { Card, Column, Section, Title, Container } from 'rbx'
import React, { Fragment } from 'react'
import Header from '../../../components/Header'
import "../../../styles/auth.scss"
import LogoImage from '../../../assets/images/logo.png'
import LoginForm from "../../../components/auth/login_form"



const Login = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>

                                <Section>
                                    <Column.Group centered>
                                        <Column size={12}>
                                            <img src={LogoImage} />
                                        </Column>
                                    </Column.Group>
                                    
                                    <Column.Group>
                                        <Column size={12}>
                                            <Title size={6} className="has-text-grey has-text-centered">
                                                Our manuals in the cloud                                            </Title>
                                        </Column>
                                    </Column.Group>
                                </Section>

                                <LoginForm />

                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default Login