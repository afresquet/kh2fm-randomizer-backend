declare namespace NodeJS {
	export interface ProcessEnv {
		PORT: string;
		MONGO_DB_URL: string;
		CORS_CLIENT_ORIGIN: string;
		COOKIE_SESSION_KEY: string;
		JWT_SECRET: string;
		PATREON_CLIENT_ID: string;
		PATREON_CLIENT_SECRET: string;
		TWITCH_CLIENT_ID: string;
		TWITCH_CLIENT_SECRET: string;
		DISCORD_CLIENT_ID: string;
		DISCORD_CLIENT_SECRET: string;
	}
}
