import React, { Fragment } from 'react'
import Header from '../../../components/Header'
import { Column, Section, Title, Container, Card } from 'rbx'
import LogoImage from '../../../assets/images/logo.png'
import "../../../styles/auth.scss"

const Register = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>
                                oi
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default Register