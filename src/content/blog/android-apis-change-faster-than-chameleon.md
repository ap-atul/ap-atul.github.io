---
title: "android apis are hard to keep track!"
description: "experienced android devs often face an issue, the deprecation hell! yup its so real"
date: "14 May 2025"
keywords: "android apis are shit, android api changes, api deprecated, deprecated android"
tags: ["hot-take", "android", "tech"]
---

## deprecated!

I have worked on Android for more than 5 years, and I come across deprecation warnings lot.
Every other API in the android ecosystem is either deprecated or no longer supports a flavour of your choice

## api versioning

If you take a look at android source code for an _native_ app, you will notice some `if` statements that check for the current API version, if it's some greater than API version you will see call to an `X` function with same name but different signature. _Android APIs are hell, they get deprecated when you use them 5th time or even sooner_.

Working with Android is fun, but when you come across such stupidity then its no fun, then you go on stackoverflow and search for an updated function.

## docs are crazy

Android ecosystem is huge, in terms of code I mean, there are too many utilities and to many stuff you can do. One odd thing with Android is that you cannot do anything from scratch you have to rely on some library of external function.

## permission hell

Permissions on android is difficult, so many permissions requirements and rationale and more. No good tools to even get it running. Here's an example, if you need to add read storage permission, you need to first check if the permission is granted or not, then you need to check if you need to show the need for permissio to the user, after that you write the code to get the permission.

See, Android knows what permissions requires user's input and acceptance, why not just bake it inbuild, let me do `if (!permissionGranted) askPermission()` and then attach a listerner `onPermissionGranted -> do stuff`. Such a simple interface to save time and a life.

But no, its so messy to even get a permission. There are actually libraries for this thing. lol. Wait till you encounter a deprecation for a permission!

## what to do?

Well, if you want to build for Android, you have to suffer from this, or you keep some utilities handy and always use them in your projects.

Or, you could move to other framework and not build natively, like Flutter or React-Native.

## frustration

This is frustration speaking, I'm annoyed by the Android APIs everytime I try to write some code. Either the method I know is deprecated or no longer supported. And the build system will keep throwing errors at you.

I don't even understand how build system works on Android, if I encounter a buld bug, I just `Clean project -> Rebuilt` until it works. That rant will be in some other post soon.
