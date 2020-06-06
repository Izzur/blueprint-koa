'use strict';

const Joi = require('@hapi/joi');

/**
 * Generate a validation schema using joi to check the type of your environment variables
 */
const envSchema = Joi.object({
  DB_USER: Joi.string(),
  DB_HOST: Joi.string(),
  DB_PASSWORD: Joi.string().optional().empty(''),
  DB_DATABASE: Joi.string(),
  DB_PORT: Joi.number(),
})
  .unknown()
  .required();

/**
 * Validate the env variables using joi.validate()
 */
const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  databaseConfig: {
    user: envVars.DB_USER,
    host: envVars.DB_HOST,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_DATABASE,
    port: envVars.DB_PORT,
  },
};

module.exports = config;
