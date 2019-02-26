import React, { Component } from 'react'
import { Button, Image, List, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const Points = styled.div`
    width: 54px;
    text-align: center;
    
    & i {
        float: left;
    }

    :hover {
        color: blue;
        cursor: pointer;
    }
`


export default class StoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stories: this.props.stories
        }
    }
  render() {
    return (
    <List divided verticalAlign='middle'>
    
        { this.state.stories && this.state.stories.map((item, key) => {
            return  <List.Item key={key}>
                <List.Content floated='right'>
                
                <Points>
                    <Icon name='thumbs up outline' />
                    <p>{item.points === null ? 0 : item.points}</p>
                </Points>
                </List.Content>
                <List.Content>{item.title}</List.Content>
            </List.Item>
        })}
    </List>
    )
  }
}
