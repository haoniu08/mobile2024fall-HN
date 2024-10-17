module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV", // Specify the environment variable name for selecting .env files
          moduleName: "@env", // The module from which to import environment variables
          path: ".env", // Path to your .env file
          blocklist: null, // Optionally restrict certain variables
          allowlist: null, // Optionally allow only certain variables
          blacklist: null, // DEPRECATED: Previously used for blocking
          whitelist: null, // DEPRECATED: Previously used for allowing
          safe: false, // If true, restricts to only allowlist variables
          allowUndefined: true, // If true, allows access to undefined variables without error
          verbose: false, // If true, provides logging for the loading process
        },
      ],
    ],
  };
};