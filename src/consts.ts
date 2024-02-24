// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://astrostarter.zank.studio";
export const SITE_TITLE: string = "Astro Blog";
export const SITE_DESCRIPTION: string = "Welcome to my website!";

// SEO metadata
export const TWITTER_CREATOR: string = "@xxx";

// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	// {
	// 	title: "Home",
	// 	href: "/",
	// },
	// {
	// 	title: "Blog",
	// 	href: "/blog",
	// },
	{
		title: "Hotjar Documentation",
		href: "/hotjar-documentation",
	},
	// {
	// 	title: "Hotjar Courses",
	// 	href: "/hotjar-courses",
	// },
	{
		title: "Hotjar Videos",
		href: "/hotjar-videos",
	},
	{
		title: "Content Strategy and Planning",
		href: "/content-strategy-and-planning",
	},
	{
		title: "Information Architecture ",
		href: "/information-architecture",
	},
	{
		title: "Metrics and Analysis",
		href: "/metrics-and-analysis",
	},
	{
		title: "About Me",
		href: "/about-me",
	},
];

// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
	it: "it",
};
