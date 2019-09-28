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
    articles: null,
    loading: false
  };

  getNewsList = async () => {
    try {
      const res = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=9a00e0a44dd44c109340af0073fcaaeb'
      );
      console.log(res.data.articles);
      this.setState({
        articles: res.data.articles,
        loading: true
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getNewsList();
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
        {!articles && articles.map(article => <NewsItem key={article.url} article={article} />)}
      </NewsListBlock>
    );
  }
}

export default NewsList;
