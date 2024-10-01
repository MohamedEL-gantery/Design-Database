const chalk = require('chalk');
const { execSync } = require("child_process");

// Icons for better visual feedback
const icons = {
	start: "🚀",
	success: "🎉",
	building: "🔧",
	error: "❌",
	info: "ℹ️",
	warning: "⚠️"
};

// Extracting command-line arguments
const env = process.argv[2];

// Allowed environments
const allowedEnvironments = ["local", "development","production"];


// Validate environment argument
if (!env) {
	console.error(
		chalk.red(
			`${icons.error} Missing environment: "${env}".\n\n` +
				`${icons.info} Usage: npm run start <environment>\n\n` +
				`You must specify an environment such as 'local', 'development', or 'production'.\n\n` +
				`Example:\n  npm run start local\n`
		)
	);
	process.exit(1);
}

// Check if the environment is allowed
if (!allowedEnvironments.includes(env)) {
	console.error(
		chalk.red(
			`${icons.error} Invalid environment: "${env}".\n\n` +
				`${icons.info} Usage: npm run start <environment>\n\n` +
				`You must specify an environment such as 'local', 'development', or 'production'.\n\n` +
				`Example:\n  npm run start local\n`
		)
	);
	process.exit(1);
}

// Log the start of the process
console.log(chalk.blue(`${icons.start} Starting APP in "${env}" environment...`));

// Use cross-env for cross-platform environment setting
const command = `cross-env NODE_ENV=${env} nest start --watch`;

try {
	// Execute the command
	console.log(chalk.cyan(`${icons.building} Running start command for "${env}" environment ...`));
	execSync(command, { stdio: "inherit" });
	console.log(chalk.green(`${icons.success} APP started successfully in "${env}" environment.`));
} catch (error) {
	console.error(chalk.red(`${icons.error} An error occurred while starting the APP in "${env}":`, error.message));
	process.exit(1);
}