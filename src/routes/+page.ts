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

interface SkillGroup {
	title: string;
	items: string[];
}

interface Project {
	name: string;
	desc: string;
	stack: string[];
	link: string;
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
		{ label: 'Years Experience', value: '2+' },
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
				'Develop the company’s smart POS platform end to end, covering device software and a back-office web application using TypeScript, Node.js, and React.',
				'Build REST API integrations between POS terminals, payment devices, printers, and the accounting backend — synchronizing 30+ devices and reducing synchronization failures by approximately 40%.',
				'Lead ZATCA Phase 2 (Integration Phase) compliance by generating UBL 2.1 XML e-invoices with cryptographic stamps and TLV/QR encoding, and integrating clearance and reporting APIs through the Fatoora SDK — achieving 100% compliant e-invoicing.',
				'Develop accounts management modules covering journal entries, 15% VAT calculation, invoice reconciliation, and financial reporting, saving the finance team approximately 10 hours per week.'
			],
			stack: [
				'TypeScript',
				'JavaScript',
				'Node.js (Express)',
				'React',
				'PostgreSQL',
				'SQL Server',
				'REST APIs',
				'XML / UBL 2.1',
				'Docker',
				'Git'
			]
		},
		{
			role: 'Software Engineer',
			company: 'Koprey',
			note: 'Self-employed',
			years: '09/2022 - Present',
			location: 'Jeddah, Saudi Arabia · Remote',
			highlights: [
				'Develop full-stack web and mobile applications for e-commerce, social media, and education domains using Next.js, React, Django, Python, and Flutter.',
				'Design, develop, test, and deploy software solutions based on client requirements, focusing on usability and functionality.',
				'Gather and document user requirements and translate them into logical and technical specifications.',
				'Develop data, process, and network models to support application architecture, then assess design performance and reliability.',
				'Test, troubleshoot, document, upgrade, and maintain application software and related operating environments.',
				'Collaborate with engineers, project managers, and graphic designers to deliver software products that meet client requirements.'
			],
			stack: [
				'Next.js',
				'React',
				'Django',
				'Python',
				'Node.js',
				'REST APIs',
				'MySQL',
				'PostgreSQL',
				'Stripe',
				'WordPress',
				'PHP',
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
				'Architected and built responsive, SEO-optimized web applications using React and Next.js.',
				'Developed and integrated RESTful APIs with Appwrite as a comprehensive backend.',
				'Implemented CI/CD pipelines to automate testing and deployment.'
			],
			stack: ['React', 'Next.js', 'Appwrite', 'NoSQL', 'REST APIs', 'CI/CD']
		},
		{
			role: 'Web Scraping / Software Developer',
			company: 'Fresh Futures Australia PTY LTD',
			years: '06/2022 - 09/2022',
			location: 'Remote',
			highlights: [
				'Developed web scraping and automation tools using Python, BeautifulSoup, and Selenium.',
				'Increased data processing efficiency by 10x through multiprocessing.'
			],
			stack: ['Python', 'BeautifulSoup', 'Selenium', 'Multiprocessing']
		}
	];

	const skillGroups: SkillGroup[] = [
		{
			title: 'Languages',
			items: ['TypeScript', 'JavaScript', 'Python', 'Dart', 'PHP', 'Java', 'C#']
		},
		{
			title: 'Frontend',
			items: ['React', 'Next.js', 'Vue.js', 'Nuxt.js', 'Svelte', 'HTML5', 'CSS3', 'Tailwind CSS']
		},
		{ title: 'Backend', items: ['Node.js', 'Express.js', 'Django'] },
		{ title: 'Mobile', items: ['Flutter', 'React Native'] },
		{
			title: 'Databases',
			items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Firebase', 'Appwrite']
		},
		{
			title: 'APIs & Integrations',
			items: ['REST APIs', 'Stripe', 'XML', 'UBL 2.1', 'ZATCA Fatoora SDK']
		},
		{
			title: 'Tools & Platforms',
			items: ['Docker', 'Git', 'DigitalOcean', 'Google Cloud Platform']
		},
		{
			title: 'AI & Automation',
			items: ['TensorFlow', 'OpenCV', 'BeautifulSoup', 'Selenium']
		},
		{ title: 'Practices', items: ['Agile Methodologies', 'CI/CD'] }
	];

	const projects: Project[] = [
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
			desc: 'A cross-platform AI-powered chat assistant for Android, iOS, and the web.',
			stack: ['Flutter', 'Dart', 'Provider', 'GetX', 'REST APIs'],
			link: '/GPTMana.png'
		}
	];

	const education: Education = {
		degree: 'B.Sc. Computer Science & Software Engineering',
		school: 'INTI International University & Coventry University',
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
		about: `Full Stack Software Engineer with 2+ years of experience developing web and mobile applications and delivering end-to-end software solutions. First-Class Honors graduate in Computer Science and Software Engineering, with hands-on experience across requirements analysis, frontend and backend development, REST API integration, database management, testing, deployment, and maintenance — and a growing focus on AI-powered applications.`,
		highlights: ['TypeScript', 'Node.js', 'React', 'Flutter', 'Django', 'AI Applications'],
		socials,
		stats,
		experiences,
		skillGroups,
		projects,
		education,
		certifications,
		languages
	};
};
