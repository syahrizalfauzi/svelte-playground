<script lang="ts">
	import { locale, loadTranslations } from '$lib/translations';
	import { onMount } from 'svelte';

	const defaultLocale = 'en';
	const changeLocale = (newLocale: string) => {
		$locale = newLocale;
		localStorage.setItem('locale', newLocale);
	};

	onMount(async () => {
		const initLocale = localStorage.getItem('locale') || defaultLocale; // set default if no locale already set await
		await loadTranslations(initLocale);
	});
</script>

<nav>
	<p>ceritanya navbar</p>
	<a href="/">Home</a>
	<a href="/bruh">Bruh</a>
	<button on:click={() => changeLocale('id')}>ID</button>
	<button on:click={() => changeLocale('en')}>EN</button>
</nav>
<slot />
