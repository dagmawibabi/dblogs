import { config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    homepage: singleton({
      label: "Config",
      path: "public/config",
      format: { data: "json" },
      schema: {
        username: fields.text({ label: "Username" }),
        introduction: fields.text({ label: "Introduction" }),
        footer: fields.text({ label: "Footer" }),
        socials: fields.object({
          telegram: fields.text({ label: "Telegram" }),
          instagram: fields.text({ label: "Instagram" }),
          tiktok: fields.text({ label: "Tiktok" }),
          linkedin: fields.text({ label: "Linkedin" }),
          github: fields.text({ label: "Github" }),
        }),
        blogs: fields.array(
          fields.object({
            category: fields.text({ label: "Category" }),
            blogs: fields.array(
              fields.object({
                date: fields.text({ label: "Date" }),
                title: fields.text({ label: "Title" }),
                description: fields.text({ label: "Description" }),
              }),
              {
                label: "Blogs",
                itemLabel: (props) => props.fields.title.value,
              }
            ),
          }),
          {
            label: "Blogs",
            itemLabel: (props) => props.fields.category.value,
          }
        ),
      },
    }),
  },
});
