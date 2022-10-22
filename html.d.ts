declare module '@vue/runtime-dom' {
	interface HTMLAttributes {
		[key: string]: any;
	}
}
declare module '@vue/runtime-core' {
	interface AllowedComponentProps {
		[key: string]: any;
	}
}
declare module '@nuxt/schema' {
	interface NuxtConfig {
		GoogleFonts?: GoogleFonts;
	}
	interface RuntimeConfig {
		public: {
			movieKey: string;
			apiUrl: string;
		};
	}
}
declare module 'vue3-a11y-modal'{
	interface vue3a11yModal{
	}
}
// It is always important to ensure you import/export something when augmenting a type
export {};