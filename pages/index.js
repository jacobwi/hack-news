import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import Header from "../components/Header";
import styled from "styled-components";
import { Button, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Spinner from "../components/Spinner";
import StoryList from "../components/StoryList";
import Link from "next/link";

const Main = styled.div`
  padding: 20px;
  margin: 10px auto;
  max-width: 900px;
  background-color: rgba(113, 149, 206, 0.2);
  border-radius: 10px;
`;

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      stories: [],
      isError: false,
      currentPage: ""
    };
  }
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    let errors;
    try {
      page = Number(query.page) || 1;
      const result = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );

      stories = await result.json();
    } catch (err) {
      errors = err;
    }
    return { page, stories, errors };
  }

  componentDidMount() {
    if (this.props.stories) {
      this.setState({
        isLoading: false,
        stories: this.props.stories,
        isError: false
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isLoading: false,
      stories: nextProps.stories,
      isError: false
    });
  }
  render() {
    if (this.state.isError) {
      return <Error statusCode={503} />;
    }
    if (this.state.isLoading) {
      return <Spinner message="Posts" />;
    }
    return (
      <Main>
        <Header />
        {this.state.stories && <StoryList stories={this.props.stories} />}
        <Divider />
        <Link href={`/?page=${this.props.page + 1}`}>
          <Button content="Next" icon="right arrow" labelPosition="right" />
        </Link>
      </Main>
    );
  }
}
