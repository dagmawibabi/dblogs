# A month in Better Auth

![image](../images/AmonthInBetterAuth/banner.jpg)

[Better Auth](https://www.better-auth.com/) is the most comprehensive authentication framework for Typescript. It is also one of the fastest growing open-source projects out there with 18.1k stars on [GitHub](https://github.com/better-auth/better-auth) and 2.8 million downloads on [NPM](https://www.npmjs.com/package/better-auth) and growing fast.

I got an internship at Better Auth at the start of July and it’s been a month now and it’s been so wonderful in so many different ways and this blog is just an overview of somethings I’ve learnt and discovered.

### Week 1

The first week, as you’d expect walking into a new job, was overwhelming. So many things happening at once across the board. Issues and PRs on github happening within hours, everyday. Internal tools I don’t know of, extremely talented people doing epic things everyday, and so much more. I was pretty overwhelmed but as usual I prayed about it and things got manageable afterwards.

That week I spent most of my time groing through the codebase, running demos and docs, having slack huddles with the team to understand the tools and workflow. All of this was very helpful in navigating the rest of the week. With that out of thhe way here are some of the things I learnt and built that week.

1. [Better Call](https://github.com/Bekacru/better-call)

   Better Call is a tiny web framework for creating endpoints that can be invoked as normal functions. It’s one of the primary internal tools we use to create endpoints for plugins, auth and more. Out of everything I’ve learnt Better Call is still my favorite. It is straightforward, easy and just very fun to work with. It’s open source so feel free to check it out.

   ![image](../images/AmonthInBetterAuth/image.png)

2. Database Adapters

   Better Auth uses internal adapters to deal with all the different database providers. It abstracts database specific functions and queries and unifies them all so you can focus more on building plugins and auth related things.

   ![image](../images/AmonthInBetterAuth/image1.png)

3. Typescript

   Now I have used typescript in most of my projects and at different jobs. But none of them are as strict as Better Auth when it comes to typesafety (I mean it does say end to endtyppe safety in the docs). So that led me to dig so deep into typescipt and learn so much more than I had previously did and the more I learn and use it the more I love it and now I don’t see myself building anything else without it.

   There was this one instant during the first week where I made a PR that had `var` and `any` and Beka looked at me so hard I thought I was gonna get fired lol. I was so caught up with the main task I went to the quickest solution. Never again has that happened since.

   ![image](../images/AmonthInBetterAuth/image2.png)

4. [Stripe SDK](https://docs.stripe.com/get-started/development-environment)

   This month we pushed out version 1.3 and one of the main goals we had was to make our Stripe plugin production ready and so I was assigned to squash Stripe related bugs and add improvements too. If you go and check the repo you’d find Stripe related issues often. People really want us to build an entire Stripe replacement for them but it’s not what we aim to do at this point. As this was my main task I learnt SO MUCH about stripe, it’s SDK and how it’s architecture. I see lots of people complaining about Stripe on Twitter and all the other alternatives like [Polar.sh](https://Polar.sh) and [Autumn](https://autumn.com) and also researching through how these alternatives work I came to appreciate them all.

5. [Open Telemetry](https://opentelemetry.io/)

   Open Telemetry (oTel) is an open-source, high quality, ubiquitous and portable telemetry to enable effective observability. It creates and collects telemetry from your services and software then forwards it to a variety of analysis tools. I was researching about this and one of the first plugins I made in Better Auth is oTel. You can easily plug it in and view telemetry data about your sites. It’s still in the early stages (only supports console exports) and so much needs to be added but I can’t wait till you get to use it.

   ![image](../images/AmonthInBetterAuth/image3.png)

6. Twitter Affiliates cost $7k

   I was the first intern to join Better Auth and during the interview the first thing I suggested was for us to get Twitter Affiliates and it was quiet literally during the interview that we bought the packages and linked our twitter accounts. Apart from verifying each affiliate it gives extremely bigger reach to the accounts than normal paid versions. This was good cause we haven’t hired any dev rels yet so everyone of us would help fill the gaps by posting. I took it a bit seriously and would post a lot and the views were very good for each post. So highly recommend you do this.

   ![image](../images/AmonthInBetterAuth/image4.jpg)

### Week 2

This was a good week. The feeling of being overwhelmed left and I settled and focused more into building features and improving things.

1. Middlewares in Better Auth

   Just like endpoints and database adapters, we have another internal tool we use to build middlewares. It is a very straightforward, powerful and comfortable way to implement middlewares. It abstracts things enough that you’re more concerned into the quality and function of the middleware than other things. After plugins, middlewares are one of the best ways to learn how Better Auth works. I bult a middleware earlier on to to check usage limits of Stripe customers for our upcoming Usage Based Billing feature and doing so has really helped me understand Better Auth even more.

   ![image](../images/AmonthInBetterAuth/image5.png)

2. Vitest

   If you don't need to write tests, you're most likely not doing something important. If you look through Better Auth’s repo you’ll see it’s filled with tests and this is extremely important for us. So many people and companies depend on us and tests allow us to make sure what we’ve implemented is working well and safe before it gets merged and into the hands of thousands.

   In Better Auth, it’s almost impossible to build without tests. Infact you really can’t make a good contribution without a good set of test cases invovled with it. It made me appreciate tests even more and dig deeper so I could write very effective tests to the things I contribute.

   Tests are also your bestfriends, the more you write them and the higher quality they are the more freedom you’ll get to drastically change things and trace what has been affected and not.

3. [Zod 4](https://zod.dev/v4?id=14x-faster-string-parsing)

   For version 1.3 of Better Auth we’ve migrated from Zod v3 to v4 and this has made significant performance improvements. Went from 15.2 mbs distribution size to less than half of it. (6.04mbs)

   Better Auth deals with lots of string parsings, array parsings and importantly object parsing. All which are extremely faster in the newest release of Zod. (String Parsing 14x, Array Parsing 7x, and Object Parsing 6.5x)

   ![image](../images/AmonthInBetterAuth/image6.png)

   ![image](../images/AmonthInBetterAuth/image7.png)

4. AI friendly Docs

   Was going through the docs and I thought it’d be better to make it even more AI friendly past our llm.txt file by allowing users to copy the content of a specific page in markdown or share to popular LLMs. I couldn’t implement this feature cause Stripe issues were urgent but another amazing team mate implemented it.

   What I learnt was that [Mintlify](https://mintlify.com) was the way to go but turns out [Fumadocs](https://fumadocs.dev/), the one we use for our docs, already supports it and we went ahead and used that. It’s a really wonderful contribution and in that same release we’ve released the stable version of our MCP server.

   ![image](../images/AmonthInBetterAuth/image8.png)

5. [Dosu Bot](https://dosu.dev/)

   Dosu is an absolutely wonderful service. It turns your codebase into a knowledge base and once you integrate it into your repo it would respond to users creating issues, reponds to follow up questions, shows work arounds to specific problems and takes our minds off of certain low priority things and often times users get instant answers and close issues.

   We review all these conversations and throughtout the weeks it has surprised me by how good it has been at handling these tasks.

### Week 3

This week was a blast, I got to meet everyone of the team that was located in Addis Ababa, Ethiopia. They’re some wonderful people and friends I look upto and admire. We got some merch, ate some pizzas and had a very long and technical convo about our previous experiences and everything else. It was very memorable and lovely. This week for me was focused more on expanding Stripe relates features and improvements. While encountering and learning a few things here and there.

1. [pkg.pr.new](https://pkg.pr.new)

   This is another amazing bot specially for libraries. It creates instant preview releases of your commits and PRs withouth publishing anything to NPM. Meaning you can have a draft version of Better Auth to try out and share with people without affecting everyone else. This makes our lives so easy. Specially when debugging some issues.

2. [Stripe’s Metered Billing](https://docs.stripe.com/api/billing/meter)

   Stripe allows for usage tracking through it’s metered billing end points. I was deep into Stripe’s architecture past the Sdk to understand how things worked and for Stripe Metered Billing is an independent instance. Meaning a Stripe customer doesn’t necessarily have to subscribe to a plan and the plan doesn’t necessarily have to be associated with a product and the product to a price. Simply put you can arbitrarily track usage completely independently.

3. [Polar.sh](https://Polar.sh) and [Autumn](https://autumn.com)

   These wonderful Stripe alternative both provide metered billing aka Usage Tracking in a bit of a similar way and I had to create simulations and test things out to see how advanced and better things were. Both had their pros and cons but I would really suggest using their services over defaulting to Stripe.

### Week 4

It was flu and cold season in Addis Ababa and sadly I cought it too and I wasn’t able to get up from bed and do as much work as I had planned to but I did assist in a few issues, made a few contribution and tried finilizing a few polishes.

1. Slack

   For comms we use the Business+ package of Slack and it was at this point I realized some pretty nice AI and workflow integrations within Slack. Apart from unlimited message history and unlimited app integrations. The AI integrations are wonderful. Infact that's where AI should be and it's integrated in the right way. It has AI conversation & meeting summaries, AI Recaps where you can pick channels and get summaries, AI file summaries and translations, and AI automations/workflows where you can prompt what workflow you'd want, like "Remind the team to post async every day" and it would schedule and do that for you.

   ![image](../images/AmonthInBetterAuth/image9.jpg)

   ![image](../images/AmonthInBetterAuth/image10.jpg)

2. Better Auth Users

   Plugins are what make Better Auth standout and is one of the powerful features built at it’s core. And so somethings across issues and posts I’ve noticed is that our users expect us to make a plugin for almost everything. Though using Stripe’s Sdk is straightforward and most mundane tasks can be implemented using it, users expect an entire Stripe replacement from us. At first it was basic subscriptions, then it was usage based billing, then it became one time checkout and so forth. This is true for all other things too. Users want a plugin for even their niche local finance systems.

   While I really love the fact that people have given us their trust and want to replace every other service with Better Auth plugins, it is important for you to realize that we are MOSTLY going to be focusing on building basic support around most requested plugins to get you started building instead of providing an entire replacement. There’s more to be build around auth itself and infrastructure is going to be our priority.

### Finally

Perosnally I've noticed that I am quick to implement than sit and get all the requirements rights. As good as it could be at times, I've learnt it's better to sit get requirements and scope accurately and then go into building. As a result of this I would say I have the most rejected PRs in BA in the span of just a few weeks. A benchmark I now will improve up on.

These are just a few of the many things I’ve learnt in Better Auth. So much is happening, and so much to explore and build. I’m super grateful I get to work on this and it’s been a very amazing month so far. The freedom to brainstorm, own the features from start to finish, and work with incredibly talented and helpful people is a rare thing. I’m super happy and grateful about this. Thank God!
