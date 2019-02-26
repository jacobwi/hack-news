import React, { Component } from 'react';
import { Header as Head, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: rgba(113, 149, 206, 0.6);
    padding: 40px;
    border-radius: 40px;
`

export default class Header extends Component {
    render() {
        return (
            <Container>
                <Head as='h2'>
                    <Icon name='clipboard' />
                    <Head.Content>
                        Hacker News
                    <Head.Subheader>Latest Stories</Head.Subheader>
                    </Head.Content>
                </Head>
            </Container>
        )
    }
}
