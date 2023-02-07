"use strict";

/**
 * custom router.
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events/me",
      handler: "event.me",
      config: {},
    },
    {
      method: "PUT",
      path: "/events/:id",
      handler: "event.update",
      config: {},
    },
  ],
};
