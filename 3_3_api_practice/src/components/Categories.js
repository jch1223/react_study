import React from 'react';
import styled from 'styled-components';

const CategoriesBlock = styled.div`
	padding-bottom: 3rem;
	width: 960px;
	margin: 0 auto;
	margin-top: 1rem;

	ul {
		overflow: hidden;
		padding: 0;
		margin: 0;
	}
`;

const Category = styled.li`
	float: left;
	list-style-type: none;
	color: inherit;
	text-decoration: none;

	span {
		display: block;
		padding: 0.25rem 0.5rem;
	}
`;

const Categories = ({ onSelect, category }) => {
	return <CategoriesBlock />;
};

export default Categories;
