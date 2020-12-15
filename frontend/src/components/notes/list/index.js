import React, {Fragment} from 'react';
import{ Button, Column, Tag, Title, List } from 'rbx'
import Moment from 'moment'

function ListNotes(props) {
    return (
        <Fragment>
            <Column.Group breakpoint="mobile">
                <Column size={6} offset={1}>
                    <Title size={6}>
                        {props.notes.length} Notes
                    </Title>
                </Column>
            </Column.Group>
        </Fragment>
    )
}