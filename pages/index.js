import React, { Component } from 'react'
import axios from 'axios';
import Error from 'next/error';
import Header from '../components/Header';
import styled from 'styled-components';

import 'semantic-ui-css/semantic.min.css';
import Spinner from '../components/Spinner';
import StoryList from '../components/StoryList';

const Main = styled.div`
    padding: 10px;
`

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            stories: [],
            isError: false
        }
    }
    componentDidMount() {
        axios.get("https://node-hnapi.herokuapp.com/news?page=1")
        .then(res => {
            this.setState({
                stories: res.data,
                isLoading: false,
                isError: false
            })
        })
        .catch(err => {

        })
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
            <StoryList stories={this.state.stories} />
        </Main>
        )
    }
}
