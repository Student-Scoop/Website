import NextLink from 'next/link';
import { Button } from '@nextui-org/react';

import { type Feature } from '@/types';
import FeatureCard from './_components/FeatureCard';
import { Rocket, Newspaper, ArrowDown } from 'lucide-react';

const features: Feature[] = [
	{
		emoji: '💼',
		title: 'Build your Portfolio',
		content:
			'Showcase your academic accomplishments, achievements, and clubs with your peers and students from other schools.',
		class: 'lg:grid-in-leftTop'
	},
	{
		emoji: '📰',
		title: 'Get News & Opportunities',
		content:
			'Recieve the latest news from your school, and get notified of new opportunities, events, and scholarships that match your academic profile.',
		class: 'lg:grid-in-centerTop'
	},
	{
		emoji: '🎯',
		title: 'Compete with Others',
		content:
			'Take part in comptetions with other student or schools. Competitions can consist of academic challenges, winning sports games, and more. With each competition or challenge, your school can earn points and climb the leaderboard; earning more prestigue for your school.',
		class: 'lg:grid-in-right'
	},
	{
		emoji: '💬',
		title: 'Connect with Others',
		content:
			'Find other students with similiar academic intrests, and grow your academic circle.',
		class: 'lg:grid-in-leftBottom'
	},
	{
		emoji: '🪙',
		title: 'Earn Points',
		content:
			'Earn points for your school by completing challenges, participating in school events, and more.',
		class: 'lg:grid-in-centerBottom'
	}
];

export default function Landing() {
	return (
		<>
			<div className="bg-pastel-green-100 m-12 p-24 lg:p-32 rounded-3xl">
				<header className="container mx-auto flex flex-col items-center justify-center text-center gap-6">
					<div className="bg-fern-100 border-2 border-gray-800 shadow-hot-pink-400 shadow-[0_6px_20px_-15px] rounded-3xl flex flex-row items-center justify-center gap-2 p-4 px-6">
						<Rocket size={20} />
						<p>Launching Febuary, 2024</p>
					</div>
					<h1 className="text-5xl font-extrabold md:text-6xl font-benzin">
						Built for{' '}
						<span className="text-gradient header-emphasis">Students</span>
					</h1>
					<p className="text-gray-500 leading-normal tracking-tight lg:w-1/2 md:text-base md:leading-7">
						Student Scoop is a school oriented portfolio and social-network app
						designed to make education more fun and engaging. Showcase your
						academic accomplishments, compete in school vs school competions,
						earn points for your school, and much more.
					</p>
					<div className="flex w-full flex-col items-center gap-4 lg:w-auto lg:flex-row lg:gap-6">
						<Button
							className="w-full font-semibold lg:w-auto"
							as={NextLink}
							href="/"
							color="primary"
							endContent={<Newspaper size={20} />}
							size="lg"
							radius="sm">
							Join Waitlist
						</Button>

						<Button
							className="w-full font-semibold lg:w-auto"
							as={NextLink}
							href="/"
							color="default"
							endContent={<ArrowDown size={20} />}
							size="lg"
							radius="sm">
							Tell me more
						</Button>
					</div>
				</header>
			</div>
			<section
				id="features"
				className="container mx-auto mt-24 flex flex-col gap-6 lg:mt-46">
				<h1 className="mx-auto max-w-[20ch] text-center text-5xl font-extrabold tracking-tighter text-gray-950 md:text-6xl">
					Making education more fun, engaging, and rewarding.
				</h1>
				<p className="text-gray-800 mx-auto max-w-[70ch] text-center leading-normal tracking-tight md:text-base md:leading-7">
					Student Scoop is designed to keep you enaged with your school and
					education, while also providing a platform for students to network
					with one another.
				</p>
				<div className="lg:grid-areas-featuresWide grid grid-cols-1 gap-8 lg:grid-cols-7 lg:grid-rows-2">
					{features.map((f: Feature, index: number) => (
						<FeatureCard
							key={index}
							classText={f.class}
							emoji={f.emoji}
							title={f.title}
							content={f.content}
						/>
					))}
				</div>
			</section>
			<section className="bg-pastel-green-200 text-gray-12 mt-36 py-14 lg:mt-56">
				<div className="container mx-auto flex flex-col items-start gap-6">
					<h1 className="max-w-[20ch] text-5xl font-extrabold tracking-tighter md:text-6xl">
						Make yourself and your school known
					</h1>
					<p className="font-semibold tracking-tight text-gray-800 lg:max-w-[80ch]">
						If you think Student Scoop can help you or your school stand out,
						sign up for our waitlist, and we&apos;ll notify you when we launch! We
						are working hard to deliver an innvotive and engaging experience. We
						can&apos;t wait to show you what we&apos;ve been working on.
					</p>
					<Button
						className="w-full font-semibold lg:w-auto"
						as={NextLink}
						href="/waitlist"
						color="default"
						endContent={<Newspaper size={20} />}
						size="lg"
						radius="sm">
						Join Waitlist
					</Button>
				</div>
			</section>
			<footer className="my-8">
				<p className="text-gray-11 text-center">
					&copy; Copyright Student Scoop 2023. All Rights Reserved.
				</p>
			</footer>
		</>
	);
}
