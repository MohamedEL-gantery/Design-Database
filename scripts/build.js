const { execSync } = require("child_process");
const chalk = require("chalk");

// Extracting command-line arguments
const env = process.argv[2];

// Allowed environments
const allowedEnvironments = ['local', 'development', 'production'];

// Icons for better visual feedback
const icons = {
  start: '🚀',
  success: '🎉',
  building: '🔧',
  finished: '✅',
  error: '❌',
};

// Validate environment argument before proceeding
if (!env || !allowedEnvironments.includes(env)) {
  console.error(
    chalk.red(`
Missing or invalid environment.

Usage: npm run build <environment>

You must specify a valid environment such as 'local', 'development', or 'production'.

Example:
  npm run build local
`),
  );
  process.exit(1);
}

// Function to build 
function buildApi(env) {
  const buildCommand = `cross-env NODE_ENV=${env} nest build`;

  try {
    console.log(
      chalk.blue(`${icons.start} Starting build in "${env}" environment...`),
    );

    // Log the building process
    console.log(chalk.cyan(`${icons.building} Building ...`));

    execSync(buildCommand, { stdio: 'inherit' });
    console.log(
      chalk.green(
        `${icons.finished} APP built successfully in "${env}" environment.`,
      ),
    );
  } catch (error) {
    console.error(
      chalk.red(
        `${icons.error} An error occurred while building in "${env}" :`,
        error.message,
      ),
    );
    process.exit(1);
  }
}

buildApi(env);
