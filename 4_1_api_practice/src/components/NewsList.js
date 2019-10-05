import React, { Component } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  padding-bottom: 3rem;
  width: 960px;
  margin: 0 auto;
`;

class NewsList extends Component {
  state = {
    loading: false,
    articles: null
  };

  loadData = async () => {
    try {
      this.setState({
        loading: true
      });

      const query = this.props.category === 'all' ? '' : `&category=${this.props.category}`;

      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9a00e0a44dd44c109340af0073fcaaeb`
      );

      this.setState({
        articles: res.data.articles
      });
    } catch (e) {
      console.log(e);
    }

    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.loadData();
    console.log(this.state.articles);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.category !== prevProps.category) {
      this.loadData();
    }
  }

  render() {
    const { loading, articles } = this.state;

    if (loading || !articles)
      return (
        <NewsListBlock>
          <div>로딩중입니다...</div>
        </NewsListBlock>
      );

    return (
      <NewsListBlock>
        {articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))}
      </NewsListBlock>
    );
  }
}

export default NewsList;
