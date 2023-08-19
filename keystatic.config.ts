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
        metadatatitle: fields.text({ label: "Metadata Title" }),
        metadatadescription: fields.text({ label: "Metadata Description" }),
        website: fields.text({ label: "Website" }),
        loglibid: fields.text({ label: "LogLib ID" }),
        loglibapikey: fields.text({ label: "LogLib API Key" }),
        socials: fields.object({
          telegram: fields.text({ label: "Telegram" }),
          instagram: fields.text({ label: "Instagram" }),
          tiktok: fields.text({ label: "Tiktok" }),
          linkedin: fields.text({ label: "Linkedin" }),
          github: fields.text({ label: "Github" }),
          reddit: fields.text({ label: "Reddit" }),
          discord: fields.text({ label: "Discord" }),
          facebook: fields.text({ label: "Facebook" }),
          twitter: fields.text({ label: "Twitter" }),
          whatsapp: fields.text({ label: "Whatsapp" }),
          twitch: fields.text({ label: "Twitch" }),
          youtube: fields.text({ label: "YouTube" }),
          itchio: fields.text({ label: "ItchIO" }),
          behance: fields.text({ label: "Behance" }),
          bitcoin: fields.text({ label: "Bitcoin" }),
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
