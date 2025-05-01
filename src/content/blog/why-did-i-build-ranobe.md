---
title: "why did i build ranobe?"
description: "ranobe is a free light novel reader app designed for android. it's open-source and free to use forever."
date: "30 Apr 2025"
keywords: "ranobe, light-novel reader, free light novel reader"
tags: ["ranobe", "android", "tech"]
---

## what even is ranobe anyway

[Ranobe](https://github.com/ranobe-org/ranobe) is an open-source light novel reader. A light novel is a short story consisting of small chapters, it can be visualized as a small novel. These originates from japanese culture, from where manga, and anime was born. Popular light novels are adapted into manga and then into anime.

## so,

There's a very big audience for light novels on the internet, several sites list hundrends of novels for people to read for free or at a very little cost. These sites serve huge amount of traffic and probably earn a lot.

There were lot of open source apps on github which were free and was used by a whole lot of people. One of the famous one was `tachiyomi`, which had tons of contributors writting hundreds lines of kotlin code.

I wanted to build something similar hoping to get people to use it and have dev to contribute to. I didn't knew Kotlin so I went with Java. I started with manga reader app, named it mangatain(_manga_ + enter*tain*). It built out to be a good app, some people used it. 

See, pages in manga are actually images, so I needed my app to support image manipulation and cropping; that kind of thing, but I didn't knew how to do that effectively. Hence, I dropped the project.

I wanted to build something simpler, something that won't involve complex image manipulation. So I thought of building a reader for light novels. Light novels are only/mostly text, you can easily read and manipulate text in android.

So I started to build the UI, quite similar to tachiyomi, since most of the targeted audience is familiar with this kind of setup, the UI needs to be simple and easy to use. During those time I was very consicious about the android code I built and I wanted the app to be as small as possible.

I built the initial app with a single source; i will get to the source part later; the UI was simple, not a lot of external libraries, and the app was about 1.5MB and it worked smooth and looked good enough.

I created a github org, published the code and the app, I was able to get good numbers of downloads and continued working on it for some time.

## what are sources?

So, the content for the app is not something I own, or keep in store. The content is scraped from sites that publish them. I wrote a scraper interface for other devs to add new sources to the app easily. So adding a new source was basically going to the destination site and scraping data off that site.

Right now the app has several sources, one site I remember in particular, neovel.io; which was a paid to read site, but I was able to write a scraper to read it for free, reason being that the way neovel coded the app was really bad, I could build an url for a specific chapter, it would respond with bunch of json with full content with just a flag saying whether its premium or not.

But since, I was able to read the json, I didn't need to respect the flag value. The app was able to read all the chapters for free, rather than paying for the chapters.

What happened to the site? did they sue me? No, the site is no longer active, I didn't know why. Actually, I wrote to the owners letting them know about their fault in their system, that my app was able to read their content for free without me paying for anything, well they never replied; probably the reason for their death.

## why i love ranobe?

Well, we got a discord server with around 70 people, who claim to use the app; no way for me to tell. I like that the app has a community, and the code is easy to read and update. I keep updating the app when I get some time, I add new sources, new fixes if some sources need attention.

Recently, I updated the code by going through each source and checking if it all works, some sources are down, some did update few things, which is nice.

## play store?

Since, I don't own the content on the app, I can't officially publish this app on the play store; its violation of their policy, but I figured out how they identify that. When they run the app, they check for external site calls, if they identify external sites and data fetching they block it; that's my overall impression.

So, I wrote another app, ranobe [downloader](https://play.google.com/store/apps/details?id=org.ranobe.ranobe), this app does the same thing, but instead of allowing users to read it, you can dowload the entire novel as an epub. I updated the existing app, added a search bar instead of directly browsing everything.

This allowed me to publish the app without being suspected for content violation. Not only that, but I was able to add Advertisement to the app.

## how much did i earn?

From ranobe; zero bucks!

From downloader; well its like 1$ in 2 months, the payout threshold is $100, it would take me years to make $100 dollars from the app, may be less if I get more users.

## what's next

Well I wanted other devs to come and contribute to the app, I do think if the app was developed is Kotlin, more devs would have shown interest in it.

I will keep on updating it with new build versions and updated libraries, fix what is broken for the sake of the community. It's my personal project and I do enjoy working on it; also I sometimes [stream](https://www.twitch.tv/atultv) the development of the app.

I also have other personal projects which also needs attention. I wish I could only work on my personal projects, but that will only happen if I make money out of it and I could leave my current job. (that's probably not gonna happen soon!)

well; thanks for reading!
