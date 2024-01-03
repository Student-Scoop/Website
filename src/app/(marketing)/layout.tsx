import { type PropsWithChildren } from 'react';
import { Provider } from 'react-wrap-balancer';
import Navbar from '../../components/Navbar';

export default function MarketingLayout({ children }: PropsWithChildren) {
	return (
		<Provider>
			<main>
				<Navbar />
				{children}
			</main>
		</Provider>
	);
}
