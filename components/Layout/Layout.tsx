import React from 'react';
import { Header } from '../';

interface Props {
	children?: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};

export default Layout;
