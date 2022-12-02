// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/*.mdx`,
  fields: {
    date: { type: "date", required: true },
    title: { type: "string", required: true },
    subtitle: { type: "string", required: false },
    tweetUrl: { type: "string", required: false }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    },
    url: {
      type: "string",
      resolve: (doc) => {
        return `https://mustafagenc.com/blog/${doc.slug}`;
      }
    },
    readingTime: {
      type: "json",
      resolve: (doc) => {
        return readingTime(doc.body.raw);
      }
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "data",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-7G5TO7GB.mjs.map
