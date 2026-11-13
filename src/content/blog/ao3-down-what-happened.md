---
title: "ao3 is down: what actually happened"
description: "a clear timeline of the november 2026 archive of our own outage, what the otw has confirmed about the security incident, and what it means for your account."
date: "13 Nov 2026"
keywords: "ao3 down, archive of our own outage, ao3 security incident, otw status, is ao3 down"
tags: ["ao3", "fanfiction", "reading"]
---

> **Note:** This post reflects what was publicly known as of 13 November 2026. Things are moving, so always check the official [OTW status page](https://www.otwstatus.org/) for the latest.

If you tried to open [Archive of Our Own](https://archiveofourown.org) in the last two weeks and got a maintenance page, you're not alone. AO3, home to more than 18 million fanworks, has been offline since 29 October 2026. Here is what happened, what is confirmed, what is still unknown, and what you should do about it.

## the short version

- AO3 was taken offline by the **Organization for Transformative Works (OTW)**, the non-profit that runs it, on **29 October 2026**.
- The next day, the OTW confirmed it had found evidence of a **security incident**.
- The OTW says **no works, bookmarks or kudos have been deleted**.
- It has **not ruled out** that account data (usernames, email addresses, IP addresses and hashed passwords) may have been accessed.
- The estimated downtime is **at least two weeks, possibly up to four**, and the site may first come back in a limited, read-only form.

## timeline

All times are UTC, taken from the OTW status page and press coverage.

**29 October, 07:13.** AO3 goes offline. The status page marks it as "Investigating" and "down for maintenance". At this point most people assume it's a routine hiccup. AO3 has had slow days and short outages before, especially during traffic spikes and DDoS attacks in 2023.

**29 October, 09:03.** The OTW says to expect at least 12 hours of downtime. That's already unusually long.

**29 October, 17:41.** The estimate jumps to roughly **two weeks, possibly up to four**. This is the moment the fandom realised this was not a normal outage.

**30 October, 01:27.** The OTW states that it has found evidence of a **security incident** and is still working out how far it reaches.

**6 November.** A status update says that restoration work is "ongoing and proceeding well". Coverage from outlets like [VICE](https://www.vice.com/en/article/what-happened-to-ao3-everything-we-know-about-the-fanfiction-sites-massive-outage/) and [Yahoo News](https://www.yahoo.com/news/us/articles/ao3-down-fanfic-readers-survival-221224422.html) explains the two-week target with a four-week buffer.

**13 November (today).** AO3 is still not back with a confirmed date. Going by the original estimate, the realistic window for a return is somewhere between mid and late November.

## what was affected?

The OTW has been careful not to overstate or understate anything. Here's how it breaks down.

### your works, bookmarks and kudos

The OTW says that **no AO3 data has been deleted**. Your fics, bookmarks, kudos, comments and collections should all be there when the site returns. This was the first fear for most writers, and so far it looks unfounded.

### your account details

This is the uncertain part. The OTW does not currently believe the user database was taken, but it **has not ruled it out**. If it was, the exposed data could include:

- usernames
- email addresses
- IP addresses
- **hashed** passwords (not plain text, but weak passwords can still be cracked)

AO3 doesn't ask for real names, so those aren't at risk.

### donations and payment info

Donations to the OTW are handled by a separate system that the OTW says is "never linked to AO3" and was not exposed. Your card details are not part of this.

### what we still don't know

Who did it, how they got in, and which vulnerability they used have not been disclosed. That's normal while an investigation is going on. Publishing details before the hole is fixed would just invite more attacks.

## why it's taking so long

People keep asking why a website can't just be "turned back on". After a real intrusion, you can't simply restart the servers. A responsible recovery usually looks like this:

1. **Contain**: take everything offline so the attacker can't keep going.
2. **Investigate**: work out how they got in, what they touched and how long they had access.
3. **Rebuild**: often from clean, known-good systems, instead of trusting machines that may have been tampered with.
4. **Rotate secrets**: change every key, token and credential the attacker might have seen.
5. **Restore carefully**: bring features back one by one, often starting read-only.

AO3 is also run largely by volunteers on a non-profit budget, at a scale that would be hard for a funded company. Two to four weeks for that process is honestly reasonable.

## what you should do right now

1. **If you reused your AO3 password anywhere, change it there now.** Start with your email, then banking and anything else important.
2. **Change your AO3 password when the site returns.** You can't do it while the site is offline.
3. **Use a password manager** so every site gets its own unique password.
4. **Turn on two-factor sign-in**, especially for your email account.
5. **Watch out for phishing.** Expect fake "AO3 security alert, verify your account" emails. Don't click links in them. Type `archiveofourown.org` into your browser yourself.
6. **Ignore "AO3 mirror" sites.** At least one AI-generated site that scraped fanfic popped up during the outage and was taken down after backlash. Unofficial mirrors are at best copyright-sketchy and at worst phishing traps.

## the fandom response

The community response has been the best part of a bad situation. The r/AO3 subreddit set up megathreads for sharing downloaded copies, writers started posting new chapters on Tumblr, and readers built shared Google Drive libraries like the "Fanfic Emergency Fund". One writer quoted by Yahoo summed up the mood: *"The horrors may persist, but so do we."*

In the next two posts I'll cover [the best alternatives to AO3](/blog/ao3-alternatives) while it's down, and [what to read and how to keep your library safe](/blog/what-to-read-while-ao3-is-down) so this never catches you off guard again.

## sources

- [OTW status page](https://www.otwstatus.org/)
- [Fanlore: 2026 AO3 Major Outage](https://fanlore.org/wiki/2026_AO3_Major_Outage)
- [VICE: What happened to AO3?](https://www.vice.com/en/article/what-happened-to-ao3-everything-we-know-about-the-fanfiction-sites-massive-outage/)
- [Yahoo News: With AO3 down, fanfic readers are in survival mode](https://www.yahoo.com/news/us/articles/ao3-down-fanfic-readers-survival-221224422.html)
- [Online Tech Tips: AO3 offline after security incident](https://www.online-tech-tips.com/archive-of-our-own-offline-security-incident/)
