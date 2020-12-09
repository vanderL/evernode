import React, { Fragment, useState } from "react"
import {Control, Field, Button, Column, Section, Help, Label, Input} from "rbx"

function LoginForm(){
    return(
        <Fragment>
            <Column.Group>
                <form>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    required
                                    name="email"
                                />
                            </Control> 
                        </Field>
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default LoginForm