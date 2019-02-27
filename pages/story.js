import React, { Component } from 'react'
import fetch from 'isomorphic-fetch';
import Error from 'next/error';

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
  }
  render() {
    const { story } = this.props;

    if (!story) {
      return <Error statusCode={503} />
    }
    return (
      <div>
        {story.title}
      </div>
    )
  }
}
