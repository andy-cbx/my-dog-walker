export const paths = {	root: {		path: '/',		getHref: () => '/',	},	home: {		path: '/',		getHref: () => '/',	},	about: {		path: '/about-us',		getHref: () => '/about-us',	},	blog: {		path: '/blog',		getHref: () => '/blog',	},	sitting: {		path: '/house-sitting',		getHref: () => '/house-sitting',	},	book: {		path: '/book',		getHref: () => '/book',	},} as const;