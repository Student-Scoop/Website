import Logo from './Logo';
import NextLink from 'next/link';
import { Link, type LinkProps } from '@nextui-org/link';

import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUiNavbar,
} from "@nextui-org/react";

import { GithubIcon } from 'lucide-react';

type MenuItems = Pick<
	LinkProps,
	'href' | 'children' | 'isExternal' | 'color'
>[];

const menuItems: MenuItems = [
	{
		href: '/#hero',
		children: 'Home'
	},
	{
		href: '/#features',
		children: 'Features'
	}
];

const mobileMenuItems: MenuItems = [
	...menuItems,
	{
		href: '/',
		children: 'Github',
		isExternal: true
	}
];

export default function Navbar(): JSX.Element {
	return (
		<NextUiNavbar>
			<NavbarContent>
				<NavbarMenuToggle className="sm:hidden" srOnlyText="Toggle menu" />
				<NavbarBrand>
					<Link
						as={NextLink}
						href="/"
						color="foreground"
						className="flex items-center gap-3">
						<Logo size={35} />
						<span className="font-semibold">Student Scoop</span>
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden gap-6 sm:flex" justify="center">
				{menuItems.map((item, index) => (
					<NavbarItem key={index}>
						<Link as={NextLink} color={item.color ?? 'foreground'} {...item} />
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent className="hidden gap-6 sm:flex" justify="end">
				<NavbarItem>
					<Link color="foreground" href="" isExternal>
						<GithubIcon size={20} />
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				{mobileMenuItems.map((item, index) => (
					<NavbarMenuItem key={index}>
						<Link as={NextLink} color={item.color ?? 'foreground'} {...item} />
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</NextUiNavbar>
	);
}
