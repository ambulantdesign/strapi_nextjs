"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { parseMultipartData, sanitize } = require("@strapi/utils");

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  // Create event with linked user
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.user = ctx.state.user.id;
      entity = await strapi.service("api::event.event").create(data, { files });
    } else {
      ctx.request.body.data.user = ctx.state.user;
      entity = await strapi
        .service("api::event.event")
        .create(ctx.request.body);
    }
    const sanitizedEntity = await sanitize.contentAPI.output(entity);
    return { data: sanitizedEntity };
  },

  async update(ctx) {
    const { id } = ctx.request.params;

    await strapi.entityService.update("api::event.event", id, {
      data: {},
    });
    let entity;

    const events = await strapi.db.query("api::event.event").findOne({
      id: ctx.params.id,
      "user.id": ctx.state.user.id,
    });

    if (!events) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);

      entity = await strapi.entityService.update("api::event.event", id, {
        data: {
          files,
        },
      });
    } else {
      entity = await strapi.entityService.update(
        "api::event.event",
        id,
        ctx.request.body
      );
    }
    const sanitizedEntity = await sanitize.contentAPI.output(entity);
    return { data: sanitizedEntity };
  },

  // Get logged in users
  async me(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { message: "No authorization header was found" },
      ]);
    }

    const data = await strapi.db.query("api::event.event").findMany({
      where: {
        user: { id: user.id },
      },
      populate: { user: true, image: true },
    });
    if (!data) {
      return ctx.notFound();
    }

    const res = await this.sanitizeOutput(data, ctx);
    return res;
  },
}));
