import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  documents: defineTable({ title: v.string(), tokenIdentifier: v.string() }),
}).index("by_tokenIdentifier", ["tokenIdentifier"]);

{
  /*  



We've generated a schema based on the data available in your table. Schema docs
Paste this schema into the convex/schema.ts file in your codebase.
Modify the field types if the generated schema doesn’t fit your data model.

*/
}
