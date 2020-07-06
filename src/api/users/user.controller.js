'use strict';

const { User } = require('../../db/models');

exports.getOne = async (ctx) => {
  const { id } = ctx.params;
  const user = await User.findOne({ where: id });
  ctx.assert(user, 404, "The requested user doesn't exist");
  ctx.status = 200;
  ctx.body = user;
};

exports.getAll = async (ctx) => {
  const allUser = await User.findAll();
  ctx.status = 200;
  ctx.body = allUser;
};

exports.createOne = async (ctx) => {
  const { name } = ctx.request.body;
  ctx.assert(name, 400, 'The user info is malformed!');
  const createdUser = await User.create({ name });
  ctx.status = 201;
  ctx.body = createdUser;
};
