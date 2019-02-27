import React, { Component } from "react";
import { Button, Label, List, Icon } from "semantic-ui-react";
import styled from "styled-components";
import moment from "moment";

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
`;

const StoryList = ({ stories }) => (
  <List divided verticalAlign="middle">
    {stories &&
      stories.map((item, key) => {
        return (
          <List.Item key={key}>
            <List.Content floated="right">
              <Points>
                <Icon name="thumbs up outline" />
                <p>{item.points === null ? 0 : item.points}</p>
              </Points>
            </List.Content>
            <List.Content>{item.title}</List.Content>
            <List.Description>{item.time_ago}</List.Description>
            <List.Description>
              <Label as="a" size="mini">
                <Icon name="comment" /> {item.comments_count}
              </Label>
            </List.Description>
          </List.Item>
        );
      })}
  </List>
);
export default StoryList;
