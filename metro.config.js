// metro.config.js
//const { getDefaultConfig } = require("expo/metro-config");

//const config = getDefaultConfig(__dirname);

//module.exports = config;
const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('db'); // Si vous utilisez des bases de données SQLite

module.exports = defaultConfig;
