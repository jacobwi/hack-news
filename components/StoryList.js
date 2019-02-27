import React from "react";
import { Label, List, Icon } from "semantic-ui-react";
import styled from "styled-components";
import Link from "next/link";

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
      stories.map(item => {
        return (
          <List.Item key={item.id}>
            <List.Content floated="right">
              <Points>
                <Icon name="thumbs up outline" />
                <p>{item.points === null ? 0 : item.points}</p>
              </Points>
            </List.Content>
            <List.Content>
              <a href={item.url}>{item.title}</a>
            </List.Content>
            <List.Description>{item.time_ago}</List.Description>
            <List.Description>
              Posted by <em>{item.user}</em>
            </List.Description>
            <List.Description>
              <Link href={`/story?id=${item.id}`}>
                <Label as="a" size="mini">
                  <Icon name="comment" /> {item.comments_count}
                </Label>
              </Link>
            </List.Description>
          </List.Item>
        );
      })}
  </List>
);
export default StoryList;
