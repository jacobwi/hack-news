import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import styled from "styled-components";
import Header from "../components/Header";
import { Header as Head, List, Image } from "semantic-ui-react";

const Main = styled.div`
  padding: 20px;
  margin: 10px auto;
  max-width: 900px;
  background-color: rgba(113, 149, 206, 0.2);
  border-radius: 10px;
`;

export default class Story extends Component {
  static async getInitialProps({ req, res, query }) {
    let story;
    try {
      const id = query.id;
      const result = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`);
      story = await result.json();
    } catch (error) {
      console.log(error);
      story = null;
    }

    return { story };
  }
  render() {
    const { story } = this.props;

    if (!story) {
      return <Error statusCode={503} />;
    }
    return (
      <Main>
        <Header />
        <Head as="h2" attached="top">
          <a href={story.url}>{story.title}</a>
        </Head>
        <Head as="h4" attached="top">
          Comments
        </Head>
        <List>
          {story.comments &&
            story.comments.map(item => {
              return (
                <List.Item>
                  <Image
                    avatar
                    src={`https://ui-avatars.com/api/?name=${item.user}`}
                  />
                  <Head as="h5">{item.user}</Head>
                  <List.Content>
                    <List.Header as="em">Posted {item.time_ago}</List.Header>
                    <List.Description
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </List.Content>
                </List.Item>
              );
            })}
        </List>
      </Main>
    );
  }
}
