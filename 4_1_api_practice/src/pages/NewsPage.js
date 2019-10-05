import React, { Component } from 'react';
import NewsList from '../components/NewsList';
import Categories from '../components/Categories';

class NewsPage extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    const category = match.params.category || 'all';
    return (
      <div>
        <Categories></Categories>
        <NewsList category={category}></NewsList>
      </div>
    );
  }
}

export default NewsPage;
