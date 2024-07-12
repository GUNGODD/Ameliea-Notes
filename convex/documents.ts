// to put some data  to convex db
// mutiation

import { useQuery } from "convex/react";
import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

// define the args for backend  to store the data
// eg . name , title , content , author

export const getDocuments = query({
  async handler(ctx) {
    //  to get all the documents from convex db
    const documents = await ctx.db.query("documents").collect();
    return documents;
  },
});

export const creteDocument = mutation({
  args: {
    title: v.string(),
  },

  async handler(ctx, args) {
    //
    // ------check if  the user is authenticated or not
    const userId = (await ctx.auth.getUserIdentity())?.tokenIdentifier;

    if (!userId) {
      throw new ConvexError("Not Authenticated ");
    }

    await ctx.db.insert("documents", {
      // inside the doc-> what we gonna store
      // now it explain that we have table called documents and then properteis inside it
      title: args.title,
    });
  },
});
