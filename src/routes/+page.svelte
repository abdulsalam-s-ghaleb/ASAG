<script>
	let name = 'Mohammed Ghaleb';
	let title = 'Full Stack Developer & UI/UX Enthusiast';
	let about = `Results-driven Software Engineer with 2+ years of experience in building scalable 
  web applications and backend services using JavaScript, Node.js, and cloud-native technologies. 
  Passionate about clean code, performance optimization, and solving real-world problems.`;

	let stats = [
		{ label: 'Years Experience', value: '2+' },
		{ label: 'Projects Completed', value: '20+' },
		{ label: 'Happy Clients', value: '15+' },
		{ label: 'Certifications Earned', value: '5+' }
	];

	let experiences = [
		{
			role: 'Full Stack Developer',
			company: 'Othouba Line',
			years: '04/2024 - 04/2025',
			location: 'Saudi Arabia',
			desc: 'Developed invoicing & tax reporting platform with Nuxt, Next, and REST APIs. Improved performance by 35%.',
			stack: ['Nuxt', 'Next', 'React', 'Node.js', 'NoSQL', 'REST APIs', 'Docker']
		},
		{
			role: 'Full Stack Developer',
			company: 'Freelance',
			years: '04/2022 - Present',
			location: 'Remote',
			desc: 'Designed and deployed cross-platform apps with Flutter & Django. Built web apps with Nuxt & Next.',
			stack: ['Nuxt', 'Next', 'Flutter', 'Django', 'SQL', 'APIs']
		},
		{
			role: 'Full Stack Developer (Intern)',
			company: 'MyERP Solutions Sdn Bhd',
			years: '08/2021 - 02/2022',
			location: 'Malaysia',
			desc: 'Migrated SQL Server tables to MySQL. Automated Excel → DB integration reducing manual effort by 50%.',
			stack: ['Python', 'Qt', 'MySQL', 'MSSQL', 'PHP']
		}
	];

	let skills = [
		{ name: 'Nuxt + Vue', level: '90%' },
		{ name: 'SvelteKit + Svelte', level: '82%' },
		{ name: 'Next + React', level: '80%' },
		{ name: 'TypeScript / JavaScript', level: '85%' },
		{ name: 'Node.js', level: '80%' },
		{ name: 'Python', level: '75%' },
		{ name: 'NoSQL Database', level: '75%' },
		{ name: 'SQL/MySQL', level: '70%' },
		{ name: 'Docker', level: '65%' }
	];

	let projects = [
		{
			name: 'TaxVerge',
			desc: 'Financial management system with invoices, statements, and analytics.',
			stack: ['Nuxt', 'NoSQL', 'TailwindCSS'],
			link: 'https://taxverge.com'
		},
		{
			name: 'ResumeGit',
			desc: 'Online resume builder with customization and sharing.',
			stack: ['Next', 'Remix', 'NoSQL'],
			link: 'https://resumegit.com'
		},
		{
			name: 'BonYemeni',
			desc: 'Business event tracking with WordPress + custom PHP modules.',
			stack: ['WordPress', 'PHP', 'MySQL'],
			link: 'https://bonyemeni.com'
		}
	];
</script>

<div class="flex min-h-screen flex-col items-center bg-base-100 px-6 py-12 text-base-content">
	<!-- Hero -->
	<header class="relative w-full space-y-3 text-center">
		<!-- Background glow -->
		<div class="absolute inset-0 -z-10">
			<div
				class="absolute top-[-300px] left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
			></div>
			<div
				class="absolute top-[-200px] left-1/3 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl"
			></div>
		</div>

		<!-- Avatar / Photo -->
		<div class="avatar mb-4">
			<div class="w-32 rounded-full shadow-lg ring ring-primary ring-offset-2 ring-offset-base-100">
				<img src="/Abdulsalam_Ghaleb_DSC_03630.jpg" alt="Profile photo" />
			</div>
		</div>

		<!-- Name + Title -->
		<h1 class="text-4xl font-bold text-primary">{name}</h1>
		<p class="text-lg text-secondary">{title}</p>
		<p class="mx-auto max-w-2xl text-neutral-content">{about}</p>

		<!-- CTA buttons -->
		<div class="mt-4 flex justify-center gap-3">
			<a class="btn btn-primary" href="/cv.pdf" download>Download CV</a>
			<a class="btn btn-secondary" href="#contact">Contact Me</a>
		</div>
	</header>

	<!-- Stats -->
	<section class="mt-12 grid gap-4 text-center md:grid-cols-4">
		{#each stats as s}
			<div class="stat rounded-lg bg-base-200 shadow">
				<div class="stat-title">{s.label}</div>
				<div class="stat-value text-primary">{s.value}</div>
			</div>
		{/each}
	</section>

	<!-- Experience -->
	<section class="mt-16 w-full max-w-4xl">
		<h2 class="mb-6 text-2xl font-semibold">Experience</h2>
		<div class="space-y-6">
			{#each experiences as exp}
				<div class="card bg-base-200 p-5 shadow-md">
					<h3 class="text-lg font-bold">{exp.role} — {exp.company}</h3>
					<p class="text-sm text-neutral-content">{exp.years} · {exp.location}</p>
					<p class="mt-2">{exp.desc}</p>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each exp.stack as tech}
							<span class="badge badge-outline badge-sm">{tech}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Skills -->
	<section class="mt-16 w-full max-w-4xl">
		<h2 class="mb-6 text-2xl font-semibold">Skills</h2>
		<div class="space-y-4">
			{#each skills as skill}
				<div>
					<div class="mb-1 flex justify-between text-sm">
						<span>{skill.name}</span>
						<span>{skill.level}</span>
					</div>
					<progress class="progress w-full progress-primary" value={parseInt(skill.level)} max="100"
					></progress>
				</div>
			{/each}
		</div>
	</section>

	<!-- Projects -->
	<section class="mt-16 w-full max-w-4xl">
		<h2 class="mb-6 text-2xl font-semibold">Projects</h2>
		<div class="grid gap-4 md:grid-cols-3">
			{#each projects as proj}
				<div class="card bg-base-200 p-4 shadow-md">
					<h3 class="text-lg font-bold">{proj.name}</h3>
					<p class="text-sm text-neutral-content">{proj.desc}</p>
					<div class="mt-2 flex flex-wrap gap-1">
						{#each proj.stack as tag}
							<span class="badge badge-outline badge-sm">{tag}</span>
						{/each}
					</div>
					<a class="btn mt-3 btn-sm btn-primary" href={proj.link} target="_blank">View</a>
				</div>
			{/each}
		</div>
	</section>

	<!-- Contact -->
	<section id="contact" class="mt-16 w-full max-w-3xl text-center">
		<h2 class="mb-4 text-2xl font-semibold">Let's Connect</h2>
		<p class="mb-6 text-neutral-content">
			I'm always interested in hearing about new projects and opportunities.
		</p>
		<div class="flex justify-center gap-3">
			<a class="btn btn-primary" href="mailto:mhd.s.ghaleb@gmail.com">Email</a>
			<a class="btn btn-secondary" href="https://github.com/leaderfrank" target="_blank">GitHub</a>
			<a class="btn btn-accent" href="https://www.linkedin.com/in/mhd-ghaleb/" target="_blank"
				>LinkedIn</a
			>
		</div>
		<p class="mt-4 text-sm text-success">Available for hire</p>
	</section>

	<!-- Footer -->
	<footer class="mt-20 text-center text-sm text-neutral-content">
		© {new Date().getFullYear()}
		{name} · Built with Svelte + DaisyUI
	</footer>
</div>
