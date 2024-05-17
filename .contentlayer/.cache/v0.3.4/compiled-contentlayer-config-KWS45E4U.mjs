// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// src/contentlayer/documents/post.ts
import { defineDocumentType, defineNestedType } from "contentlayer/source-files";
import readingTime from "reading-time";

// src/contentlayer/lib/categories.ts
var categories = {
  all: {
    name: "All",
    activeClass: "text-white bg-gradient-to-r from-cyan-500 to-blue-500"
  },
  guides: {
    name: "Guides",
    activeClass: "text-white bg-gradient-to-r from-green-500 to-lime-500"
  },
  engineering: {
    name: "Engineering",
    activeClass: "text-white bg-gradient-to-r from-violet-500 to-fuchsia-500"
  },
  news: {
    name: "Company News",
    activeClass: "text-white bg-gradient-to-r from-cyan-500 to-blue-500"
  }
};
var categories_default = categories;

// src/contentlayer/documents/post.ts
var Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    url: { type: "string" },
    avatar: { type: "string" }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    image: {
      type: "string",
      required: true
    },
    publishedAt: { type: "date", required: true },
    authors: {
      type: "list",
      of: Author,
      required: true
    },
    category: {
      type: "enum",
      options: Object.keys(categories_default),
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
    },
    readingTime: {
      type: "string",
      resolve: (post) => readingTime(post.body.raw).text
    }
  }
}));

// src/contentlayer/plugins/autolink-headings.ts
import rehypeAutolinkHeadings from "rehype-autolink-headings";
var autolinkHeadings = [
  rehypeAutolinkHeadings,
  {
    behavior: "append",
    headingProperties: {
      className: "group"
    },
    properties: {
      className: [
        "no-underline group-hover:after:content-['#'] after:text-gray-400 after:hover:text-gray-700 ml-1 after:p-1"
      ],
      "aria-hidden": "true"
    }
  }
];
var autolink_headings_default = autolinkHeadings;

// src/contentlayer/plugins/pretty-code.ts
import rehypePrettyCode from "rehype-pretty-code";
var prettyCode = [
  rehypePrettyCode,
  {
    theme: "github-light",
    onVisitLine(node) {
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    onVisitHighlightedLine(node) {
      node.properties.className.push("highlighted");
    },
    onVisitHighlightedWord(node) {
      node.properties.className = ["word"];
    }
  }
];
var pretty_code_default = prettyCode;

// contentlayer.config.ts
var contentlayer_config_default = makeSource({
  contentDirPath: "src/content/",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, pretty_code_default, autolink_headings_default]
  }
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-KWS45E4U.mjs.map
