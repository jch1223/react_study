import React from 'react';
import qs from 'qs';

const Sub = ({ location }) => {
  const { detail } = qs.parse(location.search.substr(1));
  const info = detail === 'true';
  console.log(detail);
  return (
    <div>
      <h2>sub page</h2>
      {info && <p>추가 적인 내용</p>}
    </div>
  );
};

export default Sub;
