import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en.json')).default
		},
		{
			locale: 'id',
			key: 'common',
			loader: async () => (await import('./id.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
