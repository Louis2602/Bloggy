import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';

interface Props {
	posts: [
		post: {
			node: {
				author: {
					name: string;
					photo: {
						url: string;
					};
				};
				title: string;
				excerpt: string;
				featuredImage: {
					url: string;
				};
				slug: string;
				createdAt: string;
			};
		}
	];
}
const Home: NextPage<Props> = ({ posts }) => {
	return (
		<div className='container mx-auto px-10 mb-8'>
			<Head>
				<title>Bloggy</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<FeaturedPosts />
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
				<div className='lg:col-span-8 col-span-1'>
					{posts.map((post) => (
						<PostCard post={post.node} key={post.node.title} />
					))}
				</div>
				<div className='lg:col-span-4 col-span-1'>
					<div className='lg:sticky relative top-8'>
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const posts = (await getPosts()) || [];
	return {
		props: { posts },
	};
}
