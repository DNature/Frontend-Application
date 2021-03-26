import React from 'react';
import { css } from '@emotion/css';
import { Link } from '@reach/router';

const header = css`
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 10;
	background-color: #272e71;
	padding: 1rem 0;
	display: flex;
	justify-content: center;
	.logo {
		width: 150px;
	}
`;

export const Header: React.FC = () => {
	return (
		<div className={header}>
			<Link to='/'>
				<img src='/images/logo.svg' alt='innoloft' className={'logo'} />
			</Link>
		</div>
	);
};
