// to put some data  to convex db
// mutiation

import { mutation } from "./_generated/server";
import { v } from "convex/values";

// define the args for backend  to store the data
// eg . name , title , content , author

export const creteDocument = mutation({
  args: {
    title: v.string(),
  },

  async handler(ctx, args) {
    await ctx.db.insert("documents", {
      // inside the doc-> what we gonna store
      title: args.title,
    });
  },
});
