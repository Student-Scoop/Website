import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "./providers";

import "../assets/stylesheets/main.css";
import "../assets/stylesheets/general.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Student Scoop",
	description:
		"A platform for students to showcase their academic accomplishments, clubs, and athletics, as well as network and compete with other students and schools.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<meta http-equiv="Content-Security-Policy" content="default-src * self blob: data: gap:; style-src * self 'unsafe-inline' blob: data: gap:; script-src * 'self' 'unsafe-eval' 'unsafe-inline' blob: data: gap:; object-src * 'self' blob: data: gap:; img-src * self 'unsafe-inline' blob: data: gap:; connect-src self * 'unsafe-inline' blob: data: gap:; frame-src * self blob: data: gap:;"></meta>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
