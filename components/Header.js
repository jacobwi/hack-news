import React, { Component } from 'react';
import { Header as Head, Icon } from 'semantic-ui-react';

export default class Header extends Component {
    render() {
        return (
            <Head as='h2'>
                <Icon name='clipboard' />
                <Head.Content>
                    Hacker News
                <Head.Subheader>Latest Stories</Head.Subheader>
                </Head.Content>
            </Head>
        )
    }
}
