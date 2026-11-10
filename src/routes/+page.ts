import type { PageLoad } from './$types';

interface Social {
	name: string;
	url: string;
	class: string;
}

interface Stat {
	label: string;
	value: string;
}

interface Experience {
	role: string;
	company: string;
	note?: string;
	years: string;
	location: string;
	highlights: string[];
	stack: string[];
}

interface EarlierRole {
	role: string;
	company: string;
	years: string;
}

interface SkillGroup {
	title: string;
	items: string[];
}

interface Project {
	name: string;
	desc: string;
	stack: string[];
	link?: string;
	image?: string;
	featured?: boolean;
}

interface Education {
	degree: string;
	school: string;
	years: string;
	honors: string;
	awards: string[];
}

interface Certification {
	name: string;
	issuer?: string;
	year?: string;
}

interface Language {
	name: string;
	level: string;
	note?: string;
}

export const load: PageLoad = () => {
	const socials: Social[] = [
		{
			name: 'Email',
			url: 'mailto:abdulsalam.s.ghaleb@gmail.com',
			class: 'btn-primary'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/abdulsalam-s-ghaleb',
			class: 'btn-secondary'
		},
		{
			name: 'LinkedIn',
			url: 'https://linkedin.com/in/salam-ghaleb',
			class: 'btn-accent'
		},
		{
			name: 'Website',
			url: 'https://asag.abdulsalam-s-ghaleb.workers.dev/',
			class: 'btn-info'
		}
	];

	const stats: Stat[] = [
		{ label: 'Years Experience', value: '4+' },
		{ label: 'Projects Delivered', value: '10+' },
		{ label: 'Certifications', value: '5' },
		{ label: 'Honors & Awards', value: '2' }
	];

	const experiences: Experience[] = [
		{
			role: 'Full Stack Engineer',
			company: 'Abdulwaheed Abdrabbo Abdulkhair Mohammed Est.',
			note: 'On-site',
			years: '01/2026 - Present',
			location: 'Jeddah, Makkah, Saudi Arabia',
			highlights: [
				'Built and launched an Arabic-language PWA business website with service showcases, filterable portfolios, direct lead conversion through WhatsApp and Google Maps, and targeted local SEO.',
				'Designed and built an edge-deployed operational CRM PWA to replace legacy paper and spreadsheet workflows, unifying customer profiles, order management, and custom client specifications into a single source of truth.',
				'Scaled the CRM to 5,000+ active customer records and 20,000+ completed orders, cutting record retrieval from 5–10 minutes down to instant search.',
				'Configured end-to-end conversion tracking with Google Tag Manager, Google Analytics, and Google Ads to measure lead acquisition and campaign performance.'
			],
			stack: [
				'SvelteKit',
				'TypeScript',
				'Tailwind CSS',
				'Vite',
				'PWA',
				'Supabase (PostgreSQL)',
				'PowerSync',
				'Cloudflare Workers',
				'Google Tag Manager',
				'Google Analytics'
			]
		},
		{
			role: 'Software Engineer',
			company: 'Koprey',
			note: 'Freelance',
			years: '09/2022 - Present',
			location: 'Jeddah, Saudi Arabia · Remote',
			highlights: [
				'Architect and deliver end-to-end digital solutions, custom web applications, and mobile products for client projects across e-commerce, social media, and education.',
				'Manage the full software development lifecycle — requirements gathering, system architecture, frontend development, API integration, deployment, and ongoing maintenance.',
				'Design secure server-side logic, SQL databases, and RESTful APIs, including Stripe payment integration for client storefronts.',
				'Build accessible, high-performance interfaces with a focus on client-side rendering, cross-browser compatibility, and mobile responsiveness.',
				'Own testing, CI/CD, cloud deployment, and performance optimization to keep application uptime and long-term scalability high.'
			],
			stack: [
				'Next.js',
				'React',
				'Svelte',
				'Nuxt.js',
				'Django',
				'Python',
				'Node.js',
				'Flutter',
				'REST APIs',
				'PostgreSQL',
				'MySQL',
				'Stripe',
				'Docker',
				'Git'
			]
		},
		{
			role: 'Full Stack Developer',
			company: 'Othouba Line',
			years: '03/2024 - 03/2025',
			location: 'Jeddah, Saudi Arabia',
			highlights: [
				'Architected and built responsive, SEO-optimized web applications with React and Next.js.',
				'Developed and integrated RESTful APIs using Appwrite as the backend.',
				'Implemented CI/CD pipelines to automate testing and deployment.'
			],
			stack: ['React', 'Next.js', 'Appwrite', 'NoSQL', 'REST APIs', 'CI/CD']
		},
		{
			role: 'Web Scraping / Software Developer',
			company: 'Fresh Futures Australia PTY LTD',
			years: '06/2022 - 09/2022',
			location: 'Petaling Jaya, Malaysia · Remote',
			highlights: [
				'Built web scraping and automation tools with Python, BeautifulSoup, and Selenium, validating extracted data against source sites and archiving results to Dropbox.',
				'Increased data processing throughput by up to 10x using multiprocessing and multithreading to parallelize scrapes across available CPU cores.',
				'Automated the Dropbox API from Python so colleagues could update daily progress without manually copying links.',
				'Researched approaches for platform features such as chatbots and automated responses.'
			],
			stack: ['Python', 'BeautifulSoup', 'Selenium', 'Multiprocessing', 'Dropbox API']
		},
		{
			role: 'Full Stack Developer',
			company: 'Fiverr',
			note: 'Freelance',
			years: '03/2021 - 06/2022',
			location: 'Remote',
			highlights: [
				'Developed multi-platform web applications with Django/Python and PHP for international clients.',
				'Designed and implemented relational databases in SQL Server and MySQL.',
				'Built responsive interfaces with Bootstrap, CSS, and JavaScript.'
			],
			stack: ['Django', 'Python', 'PHP', 'SQL Server', 'MySQL', 'Bootstrap', 'JavaScript']
		}
	];

	const earlier: EarlierRole[] = [
		{
			role: 'Secretary',
			company: 'INTI International University & Colleges',
			years: '08/2020 - 06/2022'
		},
		{
			role: 'Data Management Specialist',
			company: 'Taif Tailor',
			years: '02/2015 - 06/2018'
		}
	];

	const skillGroups: SkillGroup[] = [
		{
			title: 'Languages',
			items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'PHP', 'Java', 'C#']
		},
		{
			title: 'Frontend',
			items: [
				'React',
				'Next.js',
				'Vue.js',
				'Nuxt.js',
				'Svelte',
				'SvelteKit',
				'Vite',
				'HTML5',
				'CSS3',
				'Tailwind CSS'
			]
		},
		{ title: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'REST APIs'] },
		{ title: 'Mobile', items: ['Flutter', 'React Native'] },
		{
			title: 'Databases',
			items: [
				'PostgreSQL',
				'MySQL',
				'SQL Server',
				'MongoDB',
				'Firebase',
				'Appwrite',
				'Supabase',
				'PowerSync'
			]
		},
		{
			title: 'Cloud & DevOps',
			items: ['Cloudflare', 'Docker', 'Git', 'CI/CD', 'DigitalOcean', 'Google Cloud Platform']
		},
		{
			title: 'Analytics & Growth',
			items: [
				'Google Tag Manager',
				'Google Analytics',
				'Google Ads',
				'Google Maps API',
				'Local SEO',
				'Stripe'
			]
		},
		{
			title: 'AI & Data',
			items: ['TensorFlow', 'OpenCV', 'BeautifulSoup', 'Selenium']
		},
		{
			title: 'Practices',
			items: ['Agile / Scrum', 'System Design', 'Technical Documentation', 'Testing & Optimization']
		}
	];

	const projects: Project[] = [
		{
			name: 'Koprey Store',
			desc: 'A portfolio of mobile apps published on Google Play under the Koprey developer account — AI chat, photo editing, voice recording, password management, and everyday utility tools. Designed, built, and shipped end to end, with a focus on simplicity, performance, and clean user experience.',
			stack: ['Android', 'Google Play', 'AI Tools', 'Utilities'],
			link: 'https://play.google.com/store/apps/dev?id=7415399730246466855&pli=1',
			image: '/Koprey_play.google.com.png',
			featured: true
		},
		{
			name: 'Operational CRM Platform',
			desc: 'An edge-deployed, offline-first CRM PWA replacing paper and spreadsheet workflows — unifying customer profiles, orders, and custom client specifications. Scaled to 5,000+ customers and 20,000+ orders with instant record search.',
			stack: ['SvelteKit', 'TypeScript', 'Cloudflare Workers', 'PowerSync', 'Supabase']
		},
		{
			name: 'Arabic Business Website',
			desc: 'A localized Arabic-language PWA for a Jeddah-based service business, with service showcases, filterable portfolios, WhatsApp and Google Maps lead capture, local SEO, and full conversion tracking.',
			stack: ['SvelteKit', 'Tailwind CSS', 'Cloudflare', 'Local SEO', 'Google Tag Manager']
		},
		{
			name: 'Koprey Platform',
			desc: 'A full-stack web platform with responsive interfaces and core application functionality — frontend, backend, API integrations, and database-backed services built and maintained end to end.',
			stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'REST APIs'],
			link: 'https://koprey.kayat.site/'
		},
		{
			name: 'AI E-Commerce System',
			desc: 'An e-commerce web application that lets users search for products by text or by image, with object recognition powering the product search experience.',
			stack: ['Python', 'Django', 'TensorFlow', 'OpenCV'],
			link: 'https://github.com/abdulsalam-s-ghaleb/Web-Based-Application-E-Commerce-system-with-object-recognition-using-Neural-Network-AI'
		},
		{
			name: 'Recipify',
			desc: 'A full-stack recipe management platform with server-side rendering, advanced search, and user-generated content.',
			stack: ['Vue.js', 'Nuxt.js', 'Appwrite', 'Tailwind CSS'],
			link: 'https://recipify.pages.dev/'
		},
		{
			name: 'GPTMana',
			desc: 'A cross-platform AI-powered chat assistant for Android, iOS, and the web, published on Google Play.',
			stack: ['Flutter', 'Dart', 'Provider', 'GetX', 'REST APIs'],
			link: '/GPTMana.png'
		}
	];

	const education: Education = {
		degree: 'B.Sc. Computer Science & Software Engineering',
		school: 'INTI International University & Coventry University, UK',
		years: '2019 - 2022',
		honors: 'First-Class Honors · CGPA 3.61 / 4.0',
		awards: ["President's List Award (2020)", "Dean's List Award (2021)"]
	};

	const certifications: Certification[] = [
		{
			name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
			issuer: 'Oracle',
			year: '2025'
		},
		{
			name: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
			issuer: 'Oracle',
			year: '2025'
		},
		{ name: 'Introduction to Business Analytics' },
		{ name: 'IT Infrastructure' },
		{ name: 'Project Development Using JAVA for Beginners', year: '2022' }
	];

	const languages: Language[] = [
		{ name: 'Arabic', level: 'Native' },
		{
			name: 'English',
			level: 'Professional Working Proficiency',
			note: 'iBT TOEFL 91/120'
		}
	];

	return {
		name: 'Abdulsalam Ghaleb',
		title: 'Full Stack Software Engineer',
		focus: 'Web & Mobile Development · Artificial Intelligence',
		location: 'Jeddah, Saudi Arabia',
		email: 'abdulsalam.s.ghaleb@gmail.com',
		phone: '+966 56 946 9122',
		about: `Full Stack Software Engineer and First-Class Honors graduate in Computer Science & Software Engineering, shipping web and mobile products from requirements to deployment. Delivered a live Arabic business website with local SEO, a custom CRM, SEO-optimized applications, and an AI-powered product search. Strong in TypeScript, React/Next.js, SvelteKit, Node.js, Python/Django, Flutter, and SQL/NoSQL databases.`,
		highlights: [
			'TypeScript',
			'SvelteKit',
			'React / Next.js',
			'Node.js',
			'Flutter',
			'Django',
			'AI'
		],
		socials,
		stats,
		experiences,
		earlier,
		skillGroups,
		projects,
		education,
		certifications,
		languages
	};
};
