<script lang="ts">
	import type { PageData } from './$types';
	import {
		Download,
		Mail,
		MapPin,
		Calendar,
		Briefcase,
		Code2,
		Github,
		Linkedin,
		ExternalLink,
		ChevronRight,
		Award,
		Folder,
		Send,
		Presentation,
		GraduationCap,
		BadgeCheck,
		Trophy,
		Globe,
		Phone,
		Terminal,
		Layers,
		Cpu,
		Smartphone,
		Database,
		Plug,
		Wrench,
		Brain,
		Cog,
		Sparkles
	} from '@lucide/svelte/icons';
	import { onMount, type Component } from 'svelte';

	export let data: PageData;
	const {
		name,
		title,
		focus,
		about,
		highlights,
		location,
		email,
		phone,
		stats,
		experiences,
		skillGroups,
		projects,
		education,
		certifications,
		languages,
		socials
	} = data;

	let scrollY = 0;
	let mounted = false;
	let docHeight = 0;
	let progress = 0;

	$: progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;

	onMount(() => {
		mounted = true;
		const measure = () => {
			docHeight = document.documentElement.scrollHeight - window.innerHeight;
		};
		measure();
		window.addEventListener('resize', measure);
		const timer = setTimeout(measure, 600);
		return () => {
			window.removeEventListener('resize', measure);
			clearTimeout(timer);
		};
	});

	const socialIcons: Record<string, Component> = {
		GitHub: Github,
		LinkedIn: Linkedin,
		Email: Mail,
		Website: Globe,
		Freelance: Briefcase
	};

	const skillIcons: Record<string, Component> = {
		Languages: Terminal,
		Frontend: Layers,
		Backend: Cpu,
		Mobile: Smartphone,
		Databases: Database,
		'APIs & Integrations': Plug,
		'Tools & Platforms': Wrench,
		'AI & Automation': Brain,
		Practices: Cog
	};

	const statIcons: Component[] = [Award, Presentation, BadgeCheck, Trophy];

	const navLinks = [
		{ label: 'Experience', href: '#experience' },
		{ label: 'Skills', href: '#skills' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Education', href: '#education' },
		{ label: 'Contact', href: '#contact' }
	];
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<title>{name} — {title}</title>
	<meta
		name="description"
		content="Portfolio of {name}, a Full Stack Software Engineer based in {location}, specializing in web and mobile development, TypeScript, Node.js, React, Flutter, and AI-powered applications."
	/>
	<meta name="author" content={name} />
	<meta property="og:title" content="{name} — {title}" />
	<meta
		property="og:description"
		content="Full Stack Software Engineer building web and mobile applications, from REST APIs and databases to AI-powered features."
	/>
	<meta property="og:type" content="website" />
</svelte:head>

<!-- Sticky Navigation -->
<nav
	class="fixed inset-x-0 top-0 z-50 transition-all duration-300 {scrollY > 80
		? 'border-b border-base-300 bg-base-100/80 py-2 backdrop-blur-lg'
		: 'py-4'}"
>
	<div class="mx-auto flex max-w-5xl items-center justify-between px-6">
		<a href="#top" class="text-sm font-bold tracking-tight transition-colors hover:text-primary">
			{name}
		</a>
		<div class="hidden items-center gap-1 md:flex">
			{#each navLinks as link (link.href)}
				<a
					href={link.href}
					class="rounded-full px-3 py-1.5 text-sm text-base-content/70 transition-colors hover:bg-base-200 hover:text-primary"
				>
					{link.label}
				</a>
			{/each}
		</div>
		<a
			href="/Abdulsalam_Ghaleb_ATS_Resume_2026-11.pdf"
			target="_blank"
			class="btn gap-1.5 btn-xs btn-primary"
		>
			<Download class="h-3.5 w-3.5" />
			CV
		</a>
	</div>
	<div
		class="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
		style="width: {progress}%"
	></div>
</nav>

<div id="top" class="relative min-h-screen overflow-hidden bg-base-100">
	<!-- Animated Background -->
	<div class="fixed inset-0">
		<div
			class="absolute -top-[400px] left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl transition-transform duration-1000"
			style="transform: translateY({scrollY * 0.5}px) translateX(-50%)"
		></div>
		<div
			class="absolute top-[200px] right-0 h-[600px] w-[600px] rounded-full bg-accent/20 blur-3xl transition-transform duration-1000"
			style="transform: translateY({scrollY * 0.3}px)"
		></div>
		<div
			class="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl transition-transform duration-1000"
			style="transform: translateY({-scrollY * 0.2}px)"
		></div>

		<div class="bg-grid absolute inset-0 bg-center opacity-25"></div>
	</div>

	<div class="relative z-1 flex flex-col items-center px-6 pt-24 pb-12 text-base-content">
		<!-- Hero Section -->
		<header class="w-full space-y-4 text-center {mounted ? 'animate-fade-in' : 'opacity-0'}">
			<div class="avatar mb-6 {mounted ? 'animate-bounce-in' : 'scale-0'}">
				<div
					class="relative w-36 rounded-full shadow-2xl ring-4 ring-primary ring-offset-4 ring-offset-base-100 transition-all duration-300 hover:ring-offset-8"
				>
					<img
						src="https://t60kv6b4px.ufs.sh/f/sozfFBo5NxiRkBzx6kR0LdWIUbkm56jvZqgYPMuJiBN2FolC"
						alt="Profile of {name}"
					/>
				</div>
			</div>

			<div class="space-y-3">
				<h1
					class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-5xl font-bold text-transparent {mounted
						? 'animate-slide-up'
						: 'translate-y-10 opacity-0'}"
				>
					{name}
				</h1>
				<p
					class="flex items-center justify-center gap-2 text-xl text-secondary {mounted
						? 'animate-slide-up-delay-1'
						: 'translate-y-10 opacity-0'}"
				>
					<Briefcase class="h-5 w-5" />
					{title}
				</p>
				<p
					class="text-sm font-medium tracking-wide text-accent uppercase {mounted
						? 'animate-slide-up-delay-1'
						: 'translate-y-10 opacity-0'}"
				>
					{focus}
				</p>
				<p
					class="mx-auto max-w-2xl text-base-content/80 {mounted
						? 'animate-slide-up-delay-2'
						: 'translate-y-10 opacity-0'}"
				>
					{about}
				</p>
			</div>

			<!-- Focus tags -->
			<div
				class="flex flex-wrap justify-center gap-2 {mounted
					? 'animate-slide-up-delay-2'
					: 'translate-y-10 opacity-0'}"
			>
				{#each highlights as tag (tag)}
					<span class="badge gap-1 badge-ghost badge-sm text-base-content/70">
						<Sparkles class="h-3 w-3 text-accent" />
						{tag}
					</span>
				{/each}
			</div>

			<!-- Meta -->
			<div
				class="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-base-content/60 {mounted
					? 'animate-slide-up-delay-2'
					: 'translate-y-10 opacity-0'}"
			>
				<span class="flex items-center gap-1.5">
					<MapPin class="h-4 w-4" />
					{location}
				</span>
				<a
					class="flex items-center gap-1.5 transition-colors hover:text-primary"
					href="tel:{phone}"
				>
					<Phone class="h-4 w-4" />
					{phone}
				</a>
				<a
					class="flex items-center gap-1.5 transition-colors hover:text-primary"
					href="mailto:{email}"
				>
					<Mail class="h-4 w-4" />
					{email}
				</a>
			</div>

			<div
				class="mt-6 flex flex-wrap justify-center gap-4 {mounted
					? 'animate-slide-up-delay-3'
					: 'translate-y-10 opacity-0'}"
			>
				<a
					class="group btn shadow-lg transition-all duration-300 btn-primary hover:scale-105 hover:shadow-primary/50"
					href="/Abdulsalam_Ghaleb_ATS_Resume_2026-11.pdf"
					target="_blank"
				>
					<Download class="h-4 w-4 transition-transform group-hover:translate-y-1" />
					Download CV
				</a>
				<a
					class="group btn shadow-lg transition-all duration-300 btn-outline btn-secondary hover:scale-105 hover:shadow-secondary/50"
					href="#contact"
				>
					<Send class="h-4 w-4 transition-transform group-hover:translate-x-1" />
					Contact Me
				</a>
			</div>
		</header>

		<!-- Stats -->
		<div
			class="mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 {mounted
				? 'animate-fade-in-delay'
				: 'opacity-0'}"
		>
			{#each stats as s, i (s.label)}
				{@const StatIcon = statIcons[i] ?? Award}
				<div
					class="card border border-base-300 bg-base-200/50 p-6 text-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-base-200/70 hover:shadow-xl"
					style="animation-delay: {i * 100}ms"
				>
					<div class="mb-2 flex justify-center">
						<StatIcon class="h-8 w-8 text-primary" />
					</div>
					<div class="text-sm text-base-content/70">{s.label}</div>
					<div
						class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent"
					>
						{s.value}
					</div>
				</div>
			{/each}
		</div>

		<div class="w-full max-w-5xl">
			<!-- Experience Section -->
			<section
				id="experience"
				class="mt-20 scroll-mt-24 {mounted ? 'animate-fade-in-delay' : 'opacity-0'}"
			>
				<div class="mb-8 flex items-center gap-3">
					<Briefcase class="h-6 w-6 text-primary" />
					<h2 class="text-3xl font-bold">Experience</h2>
				</div>

				<div class="space-y-6">
					{#each experiences as exp, i (exp.company)}
						<div
							class="group card border border-base-300 bg-base-200/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:translate-x-2 hover:border-primary/50 hover:shadow-xl"
							style="animation-delay: {i * 150}ms"
						>
							<div class="mb-3 flex items-start justify-between gap-4">
								<div>
									<div class="flex flex-wrap items-center gap-2">
										<h3
											class="group-hover:text-primary-focus text-xl font-bold text-primary transition-colors"
										>
											{exp.role}
										</h3>
										{#if exp.note}
											<span class="badge badge-outline badge-sm text-base-content/60">
												{exp.note}
											</span>
										{/if}
									</div>
									<p class="text-lg font-semibold">{exp.company}</p>
								</div>
								<ChevronRight
									class="mt-1 h-5 w-5 shrink-0 text-base-content/50 transition-transform group-hover:translate-x-1"
								/>
							</div>

							<div class="mb-3 flex flex-wrap items-center gap-4 text-sm text-base-content/70">
								<span class="flex items-center gap-1">
									<Calendar class="h-4 w-4" />
									{exp.years}
								</span>
								<span class="flex items-center gap-1">
									<MapPin class="h-4 w-4" />
									{exp.location}
								</span>
							</div>

							<ul class="mb-4 space-y-2">
								{#each exp.highlights as point (point)}
									<li class="flex gap-2 text-sm leading-relaxed text-base-content/80">
										<ChevronRight class="mt-0.5 h-4 w-4 shrink-0 text-primary/70" />
										<span>{point}</span>
									</li>
								{/each}
							</ul>

							<div class="flex flex-wrap gap-2">
								{#each exp.stack as tech (tech)}
									<span
										class="badge badge-outline badge-sm transition-all badge-primary hover:scale-110 hover:badge-primary"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Skills Section -->
			<section
				id="skills"
				class="mt-20 scroll-mt-24 {mounted ? 'animate-fade-in-delay' : 'opacity-0'}"
			>
				<div class="mb-8 flex items-center gap-3">
					<Code2 class="h-6 w-6 text-primary" />
					<h2 class="text-3xl font-bold">Technical Skills</h2>
				</div>

				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each skillGroups as group, i (group.title)}
						{@const Icon = skillIcons[group.title] ?? Code2}
						<div
							class="card border border-base-300 bg-base-200/50 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
							style="animation-delay: {i * 60}ms"
						>
							<div class="mb-3 flex items-center gap-2">
								<Icon class="h-4 w-4 text-accent" />
								<h3 class="text-sm font-bold tracking-wide uppercase">{group.title}</h3>
							</div>
							<div class="flex flex-wrap gap-1.5">
								{#each group.items as item (item)}
									<span class="badge badge-outline badge-sm text-base-content/75">{item}</span>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Projects Section -->
			<section
				id="projects"
				class="mt-20 scroll-mt-24 {mounted ? 'animate-fade-in-delay' : 'opacity-0'}"
			>
				<div class="mb-8 flex items-center gap-3">
					<Folder class="h-6 w-6 text-primary" />
					<h2 class="text-3xl font-bold">Projects</h2>
				</div>

				<div class="grid gap-6 md:grid-cols-2">
					{#each projects as proj, i (proj.name)}
						<div
							class="group card flex flex-col border border-base-300 bg-base-200/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl"
							style="animation-delay: {i * 100}ms"
						>
							<h3
								class="group-hover:text-primary-focus mb-2 text-xl font-bold text-primary transition-colors"
							>
								{proj.name}
							</h3>
							<p class="mb-4 flex-1 text-sm text-base-content/70">
								{proj.desc}
							</p>

							<div class="mb-4 flex flex-wrap gap-2">
								{#each proj.stack as tag (tag)}
									<span class="badge badge-ghost badge-sm">{tag}</span>
								{/each}
							</div>

							<a class="group/btn btn w-full btn-sm btn-primary" href={proj.link} target="_blank">
								View Project
								<ExternalLink
									class="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
								/>
							</a>
						</div>
					{/each}
				</div>
			</section>

			<!-- Education & Credentials -->
			<section
				id="education"
				class="mt-20 scroll-mt-24 {mounted ? 'animate-fade-in-delay' : 'opacity-0'}"
			>
				<div class="mb-8 flex items-center gap-3">
					<GraduationCap class="h-6 w-6 text-primary" />
					<h2 class="text-3xl font-bold">Education & Credentials</h2>
				</div>

				<div class="grid gap-6 lg:grid-cols-3">
					<!-- Education -->
					<div
						class="card border border-base-300 bg-base-200/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl lg:col-span-2"
					>
						<div class="flex items-start gap-4">
							<div class="shrink-0 rounded-full bg-primary/10 p-3">
								<GraduationCap class="h-6 w-6 text-primary" />
							</div>
							<div>
								<h3 class="text-xl font-bold">{education.degree}</h3>
								<p class="text-base-content/80">{education.school}</p>
								<p class="mt-1 flex items-center gap-1 text-sm text-base-content/60">
									<Calendar class="h-4 w-4" />
									{education.years}
								</p>
							</div>
						</div>

						<div class="divider my-4"></div>

						<p class="mb-3 flex items-center gap-2 font-semibold text-primary">
							<BadgeCheck class="h-5 w-5" />
							{education.honors}
						</p>

						<ul class="space-y-2">
							{#each education.awards as award (award)}
								<li class="flex items-center gap-2 text-sm text-base-content/75">
									<Trophy class="h-4 w-4 text-warning" />
									{award}
								</li>
							{/each}
						</ul>
					</div>

					<!-- Languages -->
					<div
						class="card border border-base-300 bg-base-200/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
					>
						<div class="mb-4 flex items-center gap-2">
							<Globe class="h-5 w-5 text-accent" />
							<h3 class="text-sm font-bold tracking-wide uppercase">Languages</h3>
						</div>

						<div class="space-y-4">
							{#each languages as lang (lang.name)}
								<div>
									<div class="flex items-baseline justify-between gap-2">
										<span class="font-semibold">{lang.name}</span>
										<span class="text-xs text-base-content/60">{lang.level}</span>
									</div>
									{#if lang.note}
										<p class="mt-1 text-xs text-accent">{lang.note}</p>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				</div>

				<!-- Certifications -->
				<div class="mt-6">
					<div class="mb-4 flex items-center gap-2">
						<BadgeCheck class="h-5 w-5 text-accent" />
						<h3 class="text-sm font-bold tracking-wide uppercase">Certifications</h3>
					</div>

					<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each certifications as cert, i (cert.name)}
							<div
								class="card border border-base-300 bg-base-200/50 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
								style="animation-delay: {i * 60}ms"
							>
								<div class="flex items-start gap-3">
									<BadgeCheck class="mt-0.5 h-4 w-4 shrink-0 text-accent" />
									<div>
										<p class="text-sm leading-snug font-semibold">{cert.name}</p>
										{#if cert.issuer || cert.year}
											<p class="mt-1 text-xs text-base-content/60">
												{[cert.issuer, cert.year].filter(Boolean).join(' · ')}
											</p>
										{/if}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
		</div>

		<!-- Contact Section -->
		<section
			id="contact"
			class="mt-20 scroll-mt-24 text-center {mounted ? 'animate-fade-in-delay' : 'opacity-0'}"
		>
			<h2 class="mb-4 text-3xl font-bold">Let's Connect</h2>
			<p class="mb-8 text-base-content/70">
				I'm always interested in hearing about new projects and opportunities.
			</p>

			<div class="flex justify-center gap-4">
				{#each socials as s (s.name)}
					{@const Icon = socialIcons[s.name] || ExternalLink}
					<a
						class="btn btn-circle transition-all duration-300 btn-outline btn-lg hover:scale-110 hover:shadow-lg hover:shadow-primary/50"
						href={s.url}
						target="_blank"
						aria-label={s.name}
					>
						<Icon class="h-6 w-6" />
					</a>
				{/each}
			</div>

			<div
				class="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-base-content/60"
			>
				<a
					class="flex items-center gap-1.5 transition-colors hover:text-primary"
					href="mailto:{email}"
				>
					<Mail class="h-4 w-4" />
					{email}
				</a>
				<a
					class="flex items-center gap-1.5 transition-colors hover:text-primary"
					href="tel:{phone}"
				>
					<Phone class="h-4 w-4" />
					{phone}
				</a>
				<span class="flex items-center gap-1.5">
					<MapPin class="h-4 w-4" />
					{location}
				</span>
			</div>

			<div
				class="mt-8 inline-flex items-center gap-2 rounded-full bg-success/20 px-4 py-2 text-sm text-success"
			>
				<span class="relative flex h-3 w-3">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"
					></span>
					<span class="relative inline-flex h-3 w-3 rounded-full bg-success"></span>
				</span>
				Available for hire
			</div>
		</section>

		<!-- Footer -->
		<footer class="mt-24 text-center text-sm text-base-content/50">
			© {new Date().getFullYear()}
			{name} · Built with
			<span class="text-primary">Svelte</span> +
			<span class="text-secondary">DaisyUI</span> +
			<span class="text-accent">TailwindCSS</span>
		</footer>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slide-up {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes bounce-in {
		0% {
			transform: scale(0);
			opacity: 0;
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}

	.animate-fade-in {
		animation: fade-in 0.6s ease-out forwards;
	}

	.animate-fade-in-delay {
		animation: fade-in 0.6s ease-out 0.3s forwards;
		opacity: 0;
	}

	.animate-slide-up {
		animation: slide-up 0.6s ease-out forwards;
	}

	.animate-slide-up-delay-1 {
		animation: slide-up 0.6s ease-out 0.1s forwards;
	}

	.animate-slide-up-delay-2 {
		animation: slide-up 0.6s ease-out 0.2s forwards;
	}

	.animate-slide-up-delay-3 {
		animation: slide-up 0.6s ease-out 0.3s forwards;
	}

	.animate-bounce-in {
		animation: bounce-in 0.6s ease-out forwards;
	}

	.bg-grid {
		background-image:
			repeating-linear-gradient(45deg, var(--color-primary) 0px 1px, transparent 1px 10px),
			linear-gradient(to right, var(--color-primary) 1px, transparent 1px),
			linear-gradient(var(--color-primary) 1px, transparent 1px);
		background-size: 40px 40px;
		animation: gridmove 30s linear infinite;
	}

	@keyframes gridmove {
		from {
			background-position: 0 0;
		}
		to {
			background-position: 40px 40px;
		}
	}
</style>
