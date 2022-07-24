/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "16be0dd8b703350165bb933cd973ad2f"
  },
  {
    "url": "404.png",
    "revision": "e94ce63b35a57b3e639ad0d5707a38ea"
  },
  {
    "url": "about/index.html",
    "revision": "ac69e57c0c1df0eb5a658cd13c20b7d0"
  },
  {
    "url": "about/index.png",
    "revision": "f74a094c97b261b27646ab8aa14463ef"
  },
  {
    "url": "assets/css/blog.css",
    "revision": "58072bdcf8fa52c97a84f3cd5f36133b"
  },
  {
    "url": "assets/css/help.css",
    "revision": "27f25cfb6b6eaeadf9ce69bac7eee23e"
  },
  {
    "url": "assets/css/styles.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/images/apps/chrome.png",
    "revision": "0ef1cc8531adf37d3c92d4e7e7b945f5"
  },
  {
    "url": "assets/images/apps/edge.png",
    "revision": "05939c7cd8e1a869466c1e431160b5f4"
  },
  {
    "url": "assets/images/apps/firefox.png",
    "revision": "05939c7cd8e1a869466c1e431160b5f4"
  },
  {
    "url": "assets/images/blog/4-ways-to-be-more-accessible-on-social-media/4-ways-to-be-more-accessible-on-social-media.png",
    "revision": "29f9232d896e5a82de69fff2e28bc58c"
  },
  {
    "url": "assets/images/blog/6-famous-people-with-dyslexia/6-famous-people-with-dyslexia.png",
    "revision": "1948cf2d202ac94cd271064624102638"
  },
  {
    "url": "assets/images/blog/announcing-helperbird-for-websites/announcing-helperbird-for-websites.png",
    "revision": "05dca29aef207c5fe647455534c70c27"
  },
  {
    "url": "assets/images/blog/best-careers-for-people-with-dyslexia/dyslexic-architect.jpg",
    "revision": "cc881a82644228bf0001b2204bc79f9d"
  },
  {
    "url": "assets/images/blog/best-careers-for-people-with-dyslexia/dyslexic-girl.jpg",
    "revision": "7dbe7bdeff382f340568d48b79940b87"
  },
  {
    "url": "assets/images/blog/best-careers-for-people-with-dyslexia/graphic-designer.jpg",
    "revision": "a7cff713188f24f77980473a0e7332be"
  },
  {
    "url": "assets/images/blog/extra/crash-the-cat.png",
    "revision": "07d2f577fd96de4e9cac5ccc9c802e95"
  },
  {
    "url": "assets/images/blog/extra/robert-gabriel.png",
    "revision": "40adf89bfd7961eab055fa60e45dffa8"
  },
  {
    "url": "assets/images/blog/helperbirds-winner-of-the-2021-chromebook/helperbirds-winner-of-the-2021-chromebook.jpg",
    "revision": "1ce11bf8c75498807ba2ebd53f914308"
  },
  {
    "url": "assets/images/blog/how-to-avoid-wfh-burnout-and-maximize-productivity/avoid-wfh-burnout-and-maximize-productivity.jpg",
    "revision": "a2fbe5a246e9607f0d1e2c8baa9a8dd4"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_1.png",
    "revision": "22f72b7698c21a6483ba58075e85040e"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_2.png",
    "revision": "46ed6d569c8a5647bfba6ca9d55e28ce"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_3.png",
    "revision": "b616ca17c37a0240e202d70c8b5ec962"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_4.png",
    "revision": "b16aecc43116a9ab2772d3c2176f0367"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_5.png",
    "revision": "2e9b605d38a645aac1e65ab5548b04b9"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_6.png",
    "revision": "78daa61a9868f223f1aa452e44a8b5b6"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_7.png",
    "revision": "b2a28918f6091a84591edbe08e12422f"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_8.png",
    "revision": "24d419781defd0f45228065a5f4340d9"
  },
  {
    "url": "assets/images/blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/steps_9.png",
    "revision": "4c1ec38a755de8b07d170a81222dc14b"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_1.png",
    "revision": "7f6fc9815a15daba8ee03177d571bf54"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_10.png",
    "revision": "dc49e9bd08dfca6de898ca0069b32c4b"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_2.png",
    "revision": "0d2475d94551cac7a0dbd4f737197425"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_3.png",
    "revision": "ff00ef81a7eccca2691b0b688d796364"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_4.png",
    "revision": "3c7f8a868066fc1bc9bfe35bfc791863"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_5.png",
    "revision": "d31bbc5a4cdc760dc903d08ffba67837"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_6.png",
    "revision": "e4d574e134450e7e336ac9449fd428b1"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_7.png",
    "revision": "b17c4b6fed896957f16914ef0e756af9"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_8.png",
    "revision": "a66517e66b32f2287669458133fae457"
  },
  {
    "url": "assets/images/blog/how-to-install-helperbird-in-edu-accounts/steps_9.png",
    "revision": "e5e1d02e20ffdbdde0610a0a411a0158"
  },
  {
    "url": "assets/images/blog/how-to-keep-wfh-employees-engaged-and-motivated/how-to-keep-wfh-employees-engaged-and-motivated.jpg",
    "revision": "d074ec476a9ad522137fcf142ce6fca9"
  },
  {
    "url": "assets/images/blog/how-to-use-immersive-reader-in-google-docs/highlight-the-text-in-google-docs-to-use-immersive-reader.png",
    "revision": "d4feea127680ec3423e8d96eb214ca5b"
  },
  {
    "url": "assets/images/blog/how-to-use-immersive-reader-in-google-docs/how-to-turn-on-helperbirds-google-toolbar.png",
    "revision": "1b402b9cdb3bed51128abb621566f7d7"
  },
  {
    "url": "assets/images/blog/how-to-use-immersive-reader-in-google-docs/immersive-reader-loading-in-google-docs.png",
    "revision": "0f9bf5412758d71f41c9b963c6bfe639"
  },
  {
    "url": "assets/images/blog/new-blog-2022/accessible-social-media.png",
    "revision": "1ad81c22def23c924ba63225cd7b8d4d"
  },
  {
    "url": "assets/images/blog/new-blog-2022/add-safari-extensions.png",
    "revision": "787a4d0a4a374a576ec883bd2572f174"
  },
  {
    "url": "assets/images/blog/new-blog-2022/avoid-burnout.png",
    "revision": "3df2ed5d4051a1376709ed045b1abcf3"
  },
  {
    "url": "assets/images/blog/new-blog-2022/chrome-extensions-teachers.png",
    "revision": "3300f269fc0008c5a90705aa2a1d7d48"
  },
  {
    "url": "assets/images/blog/new-blog-2022/coppa-ferpa.png",
    "revision": "c8e4b3601423f46fa8dcacd636aec158"
  },
  {
    "url": "assets/images/blog/new-blog-2022/employees-engaged.png",
    "revision": "d40a6226f981ba8941832760216233ed"
  },
  {
    "url": "assets/images/blog/new-blog-2022/film-tv-characters.png",
    "revision": "524d1a5358607e8c580130d8707c00c3"
  },
  {
    "url": "assets/images/blog/new-blog-2022/ipad-productivity-apps.png",
    "revision": "56c323103113c3260a5221dab1f03326"
  },
  {
    "url": "assets/images/blog/new-blog-2022/ipads-in-class.png",
    "revision": "abfa1c2d669f2718eb40e77c6ee43ff1"
  },
  {
    "url": "assets/images/blog/new-blog-2022/productivity-microsoft-edge.png",
    "revision": "408db99ccd55fa1d52261c7e5d05e4c7"
  },
  {
    "url": "assets/images/blog/new-blog-2022/productivity-tips.png",
    "revision": "ee374e210c63104bac6df4b32677594e"
  },
  {
    "url": "assets/images/blog/new-blog-2022/safari-extensions.png",
    "revision": "6ebc7758af27e39ac82c4d6544e2fa66"
  },
  {
    "url": "assets/images/blog/positive/GOODDAY-01.png",
    "revision": "6cdf40ef60d56452ac58b1b51cdf9164"
  },
  {
    "url": "assets/images/blog/setup/setup_1.png",
    "revision": "d40c47575bca95f8d1c6e2537ea44a41"
  },
  {
    "url": "assets/images/blog/setup/setup_2.png",
    "revision": "a9f6838346c57b342858619fc65c03d2"
  },
  {
    "url": "assets/images/blog/setup/setup_3.png",
    "revision": "a859a31c5ee09332d692e772e49c5650"
  },
  {
    "url": "assets/images/blog/setup/setup_4.png",
    "revision": "81ef29f922cc33084ca73e43a2fab1b7"
  },
  {
    "url": "assets/images/blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work.jpg",
    "revision": "b7f06a93a37f219fa474aed5d39990f3"
  },
  {
    "url": "assets/images/blog/teacher-appreciation-week-2020-dyslexia-story/teacher-appreciation-week-2020-dyslexia-story.png",
    "revision": "40701ffe353d96081bc38ba1c6c7a9d7"
  },
  {
    "url": "assets/images/blog/thanksgiving/GIVE-THANKS-01.png",
    "revision": "1b5b4ff91b67a2bafef0814241ff2dd4"
  },
  {
    "url": "assets/images/blog/top-five-features-of-helperbird-to-help-your-students-in-2021/top-five-features-of-helperbird-to-help-your-students-in-2021.png",
    "revision": "1466f018c557c71f924a0d01f48765aa"
  },
  {
    "url": "assets/images/blog/top-five/helperbird.jpg",
    "revision": "8759e3b26bc055abaec09bc8c31e37fd"
  },
  {
    "url": "assets/images/blog/top-five/kapwing.png",
    "revision": "39777f1e0d3d9fecfdca4024209520b8"
  },
  {
    "url": "assets/images/blog/top-five/speechify.jpg",
    "revision": "558be60e841b3c5a9e47a689090a7302"
  },
  {
    "url": "assets/images/blog/top-five/toucan.jpg",
    "revision": "3a89209dfb3f0b06ca86e61c4af77ea5"
  },
  {
    "url": "assets/images/blog/tv-and-movie-characters-with-dyslexia/tv-and-movie-characters-with-dyslexia.png",
    "revision": "61581883bd40c39b735b4b5a7645452f"
  },
  {
    "url": "assets/images/compare/helperbird.png",
    "revision": "92662e004feca1d86e375f24a169b336"
  },
  {
    "url": "assets/images/compare/menu/microsoft.png",
    "revision": "a3f43b8df95a40d4694b1f002cd887f3"
  },
  {
    "url": "assets/images/compare/menu/read-and-write.png",
    "revision": "5584f014369656718a21514e267c028a"
  },
  {
    "url": "assets/images/compare/menu/snap-and-read.png",
    "revision": "0065629efa6cf96e0ef12c214dbcf8d3"
  },
  {
    "url": "assets/images/compare/read.png",
    "revision": "a4daeea36491b4fd84730481ca689904"
  },
  {
    "url": "assets/images/compare/reader.png",
    "revision": "44be5c571cd236c376c414cdba7f3867"
  },
  {
    "url": "assets/images/compare/snap.png",
    "revision": "61568f08552c284359b3b6559dd976c4"
  },
  {
    "url": "assets/images/compare/snap.svg",
    "revision": "1baddbc4bbe2ebedd034613a9d0df934"
  },
  {
    "url": "assets/images/demos/readermode/helperbird-readermode-feature.png",
    "revision": "cbb60cb2332d24b8fafdaeebe97b22eb"
  },
  {
    "url": "assets/images/demos/readermode/helperbird-readermode-three.png",
    "revision": "42171677327a219b6ab8787f70e933bc"
  },
  {
    "url": "assets/images/demos/readermode/helperbird-readermode-two.png",
    "revision": "d7efd4445256129cb30b40dc79ad7c7b"
  },
  {
    "url": "assets/images/favicon.ico",
    "revision": "0b53a11c7110e4cb4ed5f0b196d88282"
  },
  {
    "url": "assets/images/graph/adjustletter.png",
    "revision": "400d4459061a30f598d837522a20e109"
  },
  {
    "url": "assets/images/graph/alt-highlighter.png",
    "revision": "26a1a29bcc9265f5922547e5f15f0194"
  },
  {
    "url": "assets/images/graph/analyze.png",
    "revision": "e30741b0bd19dc8216f1b73823fef7e6"
  },
  {
    "url": "assets/images/graph/annotate.png",
    "revision": "ddfe2e4c25360bb0b685ff3932d954e4"
  },
  {
    "url": "assets/images/graph/autoscroll.png",
    "revision": "4760f80d7f5fb3f94025a73bc5ce14d1"
  },
  {
    "url": "assets/images/graph/base.png",
    "revision": "4e81b7857caef6b9415df1ee1725684e"
  },
  {
    "url": "assets/images/graph/blindness.png",
    "revision": "9f9d5cc72a8b46a6ce0eb18a3d80cf55"
  },
  {
    "url": "assets/images/graph/bookmarks.png",
    "revision": "8ffeeed950713a10e33aa4539dc0aebf"
  },
  {
    "url": "assets/images/graph/cognitive-load.png",
    "revision": "27cde571a334078ac4c6cd81fb57e580"
  },
  {
    "url": "assets/images/graph/compare/immersive-reader-vs-helperbird.png",
    "revision": "51ce154324ff9084a971ae24341bc3b8"
  },
  {
    "url": "assets/images/graph/compare/read-and-write-vs-helperbird.png",
    "revision": "a379023e5323fa3a0c71dbce5b763277"
  },
  {
    "url": "assets/images/graph/compare/snap-and-read-vs-helperbird.png",
    "revision": "ee1ccc332ca32c424ed1d3b5182e5e6c"
  },
  {
    "url": "assets/images/graph/contrast.png",
    "revision": "4f57fcf8860d1a3aa9a0a0b1f9b1b538"
  },
  {
    "url": "assets/images/graph/cursor.png",
    "revision": "32dea256ed1eca6c608d04b909082692"
  },
  {
    "url": "assets/images/graph/dictionary.png",
    "revision": "ac1fc229696b7ee95ff027270dc66534"
  },
  {
    "url": "assets/images/graph/editor.png",
    "revision": "b0dc46356178176104323fcb3296f10f"
  },
  {
    "url": "assets/images/graph/facebook.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
  },
  {
    "url": "assets/images/graph/feature/adjust-letter.png",
    "revision": "a070e52c3f0eeaa644769a60b2ccc8a7"
  },
  {
    "url": "assets/images/graph/feature/alt.png",
    "revision": "3b7e0bd77785a0d1fe1ab313c5d66669"
  },
  {
    "url": "assets/images/graph/grayscale.png",
    "revision": "0399a7800751dae827f6840e9de29432"
  },
  {
    "url": "assets/images/graph/guide.png",
    "revision": "872d496e46137321a656d5f4d250e788"
  },
  {
    "url": "assets/images/graph/hide.png",
    "revision": "46a1e2116e2b955cb3c16e2d12f32bbc"
  },
  {
    "url": "assets/images/graph/highlight.png",
    "revision": "fd8f6451075befcaec67308afc6ea0ce"
  },
  {
    "url": "assets/images/graph/immersive.png",
    "revision": "79c48b76615d5c92808b40afa4e59716"
  },
  {
    "url": "assets/images/graph/mute.png",
    "revision": "c2e0c11b6247d7779060f0f1db69641d"
  },
  {
    "url": "assets/images/graph/notes.png",
    "revision": "3c4c158a84b0324f1128ac5e967bddea"
  },
  {
    "url": "assets/images/graph/ocr.png",
    "revision": "1e3cefa36dd6db197038944145183eb1"
  },
  {
    "url": "assets/images/graph/overlay.png",
    "revision": "fb4997716e8f120d0ca7019893f2bdfa"
  },
  {
    "url": "assets/images/graph/pdfs.png",
    "revision": "fe6f78ee3431662da026599484047fc1"
  },
  {
    "url": "assets/images/graph/print.png",
    "revision": "e01680a06a8b5e9c0a333b8d29f72c22"
  },
  {
    "url": "assets/images/graph/privacy.png",
    "revision": "9f91515b4229c35a8fefa143a2814f3d"
  },
  {
    "url": "assets/images/graph/readermode_1.png",
    "revision": "53b797b831f0d9f5cfeb90f027286ffe"
  },
  {
    "url": "assets/images/graph/readermode.png",
    "revision": "a2df2ce2d4760d12664345c7b269ad06"
  },
  {
    "url": "assets/images/graph/ruler.png",
    "revision": "06169a0f8c3e33cd5df07a3c986fd4dc"
  },
  {
    "url": "assets/images/graph/screenshot.png",
    "revision": "8f34d4d7478620d0e22102b4826e5c8b"
  },
  {
    "url": "assets/images/graph/size.png",
    "revision": "93014c802531b9caa7f61673a39a9398"
  },
  {
    "url": "assets/images/graph/translate.png",
    "revision": "47c65ee74ad18867f85dde9836d798a5"
  },
  {
    "url": "assets/images/graph/twitter.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
  },
  {
    "url": "assets/images/graph/width.png",
    "revision": "129beee362ec2b38d8f3ad21b6ba4c17"
  },
  {
    "url": "assets/images/guide/annonations/a-sticky-note-will-appear.png",
    "revision": "561ef0ea6a0853bb7c8c3af03e38c628"
  },
  {
    "url": "assets/images/guide/annonations/all-done.png",
    "revision": "1a7f3071410d1a18eb22ecde7461e2f0"
  },
  {
    "url": "assets/images/guide/annonations/highlight-the-text-you-want-use.png",
    "revision": "8cf8e34f13cb050d5fe888c7d64c9b6c"
  },
  {
    "url": "assets/images/guide/annonations/make-sure-highlight-menu-is-on.png",
    "revision": "a237aa689550e8f4df9bc3a9e7ca9646"
  },
  {
    "url": "assets/images/guide/annonations/you-can-change-the-color.png",
    "revision": "17930e4263f8ba6f322612f122ba319e"
  },
  {
    "url": "assets/images/guide/cancel/click-cancel.png",
    "revision": "594f423215f5c8b1089798263e77f7c3"
  },
  {
    "url": "assets/images/guide/cancel/click-manage.png",
    "revision": "41a7af28b3d92269dcd1eb5e8131fafa"
  },
  {
    "url": "assets/images/guide/cancel/confirm-with-cancel-button.png",
    "revision": "a0bc50a5ff1498109100f431a7d12e64"
  },
  {
    "url": "assets/images/guide/cancel/open-settings-cog-click-settings.png",
    "revision": "fac482a1c6209b2616c45dbca49647f9"
  },
  {
    "url": "assets/images/guide/cancel/you-are-now-cancel.png",
    "revision": "2cd2b061491d9029d81cec3c4b765f4f"
  },
  {
    "url": "assets/images/guide/font-changer/font-changer-turn-to-on.png",
    "revision": "f85925a65b937178e98203d98f1778dc"
  },
  {
    "url": "assets/images/guide/font-changer/open-extension.png",
    "revision": "2402b5de8f20c3b9abcf919642f3d67a"
  },
  {
    "url": "assets/images/guide/font-changer/other-fonts.png",
    "revision": "4ab49daae0206ac7c50aa88d7a87658d"
  },
  {
    "url": "assets/images/guide/menu_immersive_reader.png",
    "revision": "a2f35719cdc9a249087ee6278359ae63"
  },
  {
    "url": "assets/images/guide/readermode/open-the-helperbird-extension.png",
    "revision": "df3cf1cc2c64e4795e9bda61c369f4d8"
  },
  {
    "url": "assets/images/guide/readermode/turn-it-on.png",
    "revision": "202fa90f369280cac1e615bb4f2dc6e1"
  },
  {
    "url": "assets/images/guide/readermode/visit-website.png",
    "revision": "2980b86223f19181c35ee5e65d60fbc0"
  },
  {
    "url": "assets/images/guide/readermode/you-can-also-change-the-theme.png",
    "revision": "51c64f8b87da0290016571741a93cc86"
  },
  {
    "url": "assets/images/guide/shortcuts/input-the-keys-you-want-to-use.png",
    "revision": "dcc7d22112b556d3ca9851df84f63d68"
  },
  {
    "url": "assets/images/guide/shortcuts/open-menu-go-to-more-tools.png",
    "revision": "c638e9072cd43b281b3a9473cbb94d31"
  },
  {
    "url": "assets/images/guide/shortcuts/right-click-the-side-menu.png",
    "revision": "9f5a16e9b38d18adfac62b1dd7e97379"
  },
  {
    "url": "assets/images/home/a11y/indiehacker.png",
    "revision": "d0b24935378aec5f691617c850e24d45"
  },
  {
    "url": "assets/images/home/a11y/nocode.png",
    "revision": "cc782d98142fa32f0c23cbcb942a0b6d"
  },
  {
    "url": "assets/images/home/a11y/rte.png",
    "revision": "907851aca2598ab0cd715c9d16ffa3f9"
  },
  {
    "url": "assets/images/home/about-robert.png",
    "revision": "598d24c698a2adb99450d21e19d85330"
  },
  {
    "url": "assets/images/home/after_2.png",
    "revision": "0f4eb32a52a6393a4836751909cc6da6"
  },
  {
    "url": "assets/images/home/after-helperbird.png",
    "revision": "82b4e2a3e7811bd14d51e8ddafa1f57f"
  },
  {
    "url": "assets/images/home/after.png",
    "revision": "bccb6c7fd2d8298bac86bb54eedcf2f2"
  },
  {
    "url": "assets/images/home/before_2.png",
    "revision": "8ad390286adf0e194523a33e5d110452"
  },
  {
    "url": "assets/images/home/before-helperbird.png",
    "revision": "75c38134c2ec1084a2fad300377d2928"
  },
  {
    "url": "assets/images/home/before.png",
    "revision": "6655994f1030d3e5cb15e127822a8b3a"
  },
  {
    "url": "assets/images/home/before1.png",
    "revision": "7a427d7ee5fa0b17613f4fea4689021e"
  },
  {
    "url": "assets/images/home/before2.png",
    "revision": "761ee8ff62dfa051ebe2695f6663c25f"
  },
  {
    "url": "assets/images/home/chrome.png",
    "revision": "16b9ac116a44042bbecdb9db475fbf3a"
  },
  {
    "url": "assets/images/home/compare.png",
    "revision": "66a2fa588df60f5e63ad8d4d76e2be33"
  },
  {
    "url": "assets/images/home/docs.png",
    "revision": "ff593ec78947b52c024c05e4685abdda"
  },
  {
    "url": "assets/images/home/edge.png",
    "revision": "08216bf8bb6261c731578bed2a5e7f3f"
  },
  {
    "url": "assets/images/home/firefox.png",
    "revision": "baa382278acf877d8c345a79f533893a"
  },
  {
    "url": "assets/images/home/ios.png",
    "revision": "b6877316209da69557a0f9d3d0783074"
  },
  {
    "url": "assets/images/home/ios.webp",
    "revision": "bccc878c0766f20d061553192385553e"
  },
  {
    "url": "assets/images/home/sarfrai.png",
    "revision": "b748bd8e260420ae375777e488116071"
  },
  {
    "url": "assets/images/home/screenshots/colors.png",
    "revision": "dc5f32e8fb4d0423a33fcc36a2438fd7"
  },
  {
    "url": "assets/images/home/screenshots/define.png",
    "revision": "d60786634e5e92d5f2c4522f68568545"
  },
  {
    "url": "assets/images/home/screenshots/fonts.png",
    "revision": "85d616239d42935d4365f169ef4aca54"
  },
  {
    "url": "assets/images/home/screenshots/immersive.png",
    "revision": "d7dc21b8f20e733a931ecb7dec0d6710"
  },
  {
    "url": "assets/images/home/screenshots/notes.png",
    "revision": "86e20457016ce26df9b5a6880b77dd1b"
  },
  {
    "url": "assets/images/home/screenshots/overlay.png",
    "revision": "3263ff4dff2bb24ed4a99d60e768ac4f"
  },
  {
    "url": "assets/images/home/screenshots/reader.png",
    "revision": "e32adfec553809da0c616e62c56e4785"
  },
  {
    "url": "assets/images/home/screenshots/speech.png",
    "revision": "d1feeb34e10a464e7f12353c351aabf0"
  },
  {
    "url": "assets/images/home/screenshots/translate.png",
    "revision": "ec2ed37c42c9a04e9a0a0042cc6b2cf2"
  },
  {
    "url": "assets/images/home/slides.png",
    "revision": "5691702b1125ba1d12032b2efedee891"
  },
  {
    "url": "assets/images/logo/appsformypc.png",
    "revision": "f7f9f18050103bd19ab01564f972e0fc"
  },
  {
    "url": "assets/images/logo/cloverleafs.png",
    "revision": "0d67b0a5bc07107a9d383a2a7879c6fb"
  },
  {
    "url": "assets/images/logo/cloverleafs.svg",
    "revision": "aaad86e890035d8d9c9fe49a35b8dfd9"
  },
  {
    "url": "assets/images/logo/edlio.png",
    "revision": "5fdc9d4231ec7fb77cddb95d2e2c97f9"
  },
  {
    "url": "assets/images/logo/edutech.png",
    "revision": "41ea7192324050b6e1d10b46c7ee3238"
  },
  {
    "url": "assets/images/logo/gusto.png",
    "revision": "d19897f18bd26bddb0f41443265ae1fb"
  },
  {
    "url": "assets/images/logo/hope.jpg",
    "revision": "2dc8983c0f79228335cebd1c3f57dacc"
  },
  {
    "url": "assets/images/logo/howtogeek.png",
    "revision": "a8f74713c327c18f3a9ada9a94140b79"
  },
  {
    "url": "assets/images/logo/ilovefreesoftware.png",
    "revision": "bbbc48824a055368d91ce05e0ee92a5e"
  },
  {
    "url": "assets/images/logo/indiehackers_logo.png",
    "revision": "423d5d58b347972cc1af25fb9a817666"
  },
  {
    "url": "assets/images/logo/logo_pentahoV2.png",
    "revision": "be43d04e8ad12232daa1d457046f1b13"
  },
  {
    "url": "assets/images/logo/microsoft.png",
    "revision": "905988bf0068ecffde056777e70f904c"
  },
  {
    "url": "assets/images/logo/ncu.png",
    "revision": "519d9bda4fa58205cacf58b388c7a52d"
  },
  {
    "url": "assets/images/logo/neveda.png",
    "revision": "a1039f6a7d6b864b3194f826ddab2c09"
  },
  {
    "url": "assets/images/logo/nexus.png",
    "revision": "3644b734c2b12ecbd3d98e739d4d42a7"
  },
  {
    "url": "assets/images/logo/optologo.png",
    "revision": "59ce2f81a916e81f1c2ef767cf0399d0"
  },
  {
    "url": "assets/images/logo/producthunt.png",
    "revision": "a5bdbf158e8ce7a382b48fb20c2dedc9"
  },
  {
    "url": "assets/images/logo/rio-texas.png",
    "revision": "2d7714068d1d2abd07bfb5c6b75f7851"
  },
  {
    "url": "assets/images/logo/san.png",
    "revision": "bd0889493437ab04a2d995c98a2a0703"
  },
  {
    "url": "assets/images/logo/school.png",
    "revision": "8fdfb1d546fd298959337ac46d499ef7"
  },
  {
    "url": "assets/images/logo/smashing-magazine-logo.png",
    "revision": "db8c8d47ced753042cb9844457ecf010"
  },
  {
    "url": "assets/images/logo/softpedia.png",
    "revision": "d51adacdf6937d0ca53f6fdccd00f4fd"
  },
  {
    "url": "assets/images/logo/stars.svg",
    "revision": "1b06c8dea11c7178cdf4c4c8a592d48b"
  },
  {
    "url": "assets/images/logo/tek.png",
    "revision": "c9b28d7b85aff2f1fafd8e2347901fdb"
  },
  {
    "url": "assets/images/logo/ticbeat-logo.png",
    "revision": "6b9e2090222b2cc60c99b7b518cd8802"
  },
  {
    "url": "assets/images/logo/toronto.png",
    "revision": "7d31e06dddb8d9c9a0208c0ddd855583"
  },
  {
    "url": "assets/images/logo/ucc.png",
    "revision": "e437023f5c1a0c268ca2df94bcac38db"
  },
  {
    "url": "assets/images/logos/ accessibility-checker.png",
    "revision": "9da8b9c25b39f783c1974905f3161cb3"
  },
  {
    "url": "assets/images/logos/128.png",
    "revision": "949a368273c88974cf8df76883d19353"
  },
  {
    "url": "assets/images/logos/16.png",
    "revision": "a81778e1af8de0c00a0ccfe8321b4d99"
  },
  {
    "url": "assets/images/logos/20.png",
    "revision": "f3424fb0372aeea82877232bfc749809"
  },
  {
    "url": "assets/images/logos/24.png",
    "revision": "a43c03f448409e8b432185a389b727a3"
  },
  {
    "url": "assets/images/logos/256.png",
    "revision": "56828c68c0030f13361afc278a6598c2"
  },
  {
    "url": "assets/images/logos/32.png",
    "revision": "d71ac3a4eab1ccf31646b6e2d9dd6f8e"
  },
  {
    "url": "assets/images/logos/48.png",
    "revision": "18d531130463fa4e07bc281b0ffce674"
  },
  {
    "url": "assets/images/logos/512.png",
    "revision": "f6f3b6a69cf6cead4e27ae79547fd51e"
  },
  {
    "url": "assets/images/logos/64.png",
    "revision": "bb29944dac08149377e6008550780e0d"
  },
  {
    "url": "assets/images/logos/full.png",
    "revision": "f6f3b6a69cf6cead4e27ae79547fd51e"
  },
  {
    "url": "assets/images/new/adjust-letters-and-words/adjust-letters-and-words-helperbird.png",
    "revision": "6ac87c42d2cf5f29ea1388957335a436"
  },
  {
    "url": "assets/images/new/analyze/analyze.png",
    "revision": "c52117887838b760195c1d57c14886d9"
  },
  {
    "url": "assets/images/new/annotation/annotation.png",
    "revision": "bed2bfab27c903f9eb52ca6f1fa91fed"
  },
  {
    "url": "assets/images/new/cognitive-load/cognitive-load.png",
    "revision": "4fc609af77b130c92b57f1a409236a8e"
  },
  {
    "url": "assets/images/new/color-blindness/color-blindness.png",
    "revision": "335c83b137a158b1762eb96699652dda"
  },
  {
    "url": "assets/images/new/cursor-control/cursor-control.png",
    "revision": "66cd754615b96a783873fe431cb69901"
  },
  {
    "url": "assets/images/new/dictionary/dictionary.png",
    "revision": "e217a85a3cf13b95b965d326612de8ba"
  },
  {
    "url": "assets/images/new/dyslexia-font/dyslexia-font.png",
    "revision": "bf555fa7ca4c024e6101fffcea4ae070"
  },
  {
    "url": "assets/images/new/dyslexia-ruler/dyslexia-ruler.png",
    "revision": "01469ca92254ab39c3b8b553e1554f3f"
  },
  {
    "url": "assets/images/new/editor/editor.png",
    "revision": "17ccb5fce744962cdcd94d3e53500880"
  },
  {
    "url": "assets/images/new/google-translate/google-translate.png",
    "revision": "d13b378363d456a9a0aecbeb44f32b09"
  },
  {
    "url": "assets/images/new/immersive-reader-for-chrome/immersive-reader-for-chrome.png",
    "revision": "f1f0b5625c4bcaa06b16041e372033ef"
  },
  {
    "url": "assets/images/new/invert/invert.png",
    "revision": "d342f8f5c9c5e9b660ad66c56536d67f"
  },
  {
    "url": "assets/images/new/keyboard/keyboard.png",
    "revision": "aa6eced6644ac7f08a5523649dc15511"
  },
  {
    "url": "assets/images/new/notes/notes.png",
    "revision": "6530603dcd0ffffd4bf165451559fe49"
  },
  {
    "url": "assets/images/new/optical-character-recognition/optical-character-recognition.png",
    "revision": "6530603dcd0ffffd4bf165451559fe49"
  },
  {
    "url": "assets/images/new/overlay/overlay.png",
    "revision": "e1c0aa88c4d89818ab39b26df6e05a8b"
  },
  {
    "url": "assets/images/new/read-it-later/read-it-later.png",
    "revision": "b06e5175f41afad1a817bf7dbfb323c2"
  },
  {
    "url": "assets/images/new/reader-mode-for-chrome-and-firefox/reader-mode-for-chrome-and-firefox.png",
    "revision": "36d8c7ac8534b435ba31c18efac109b2"
  },
  {
    "url": "assets/images/new/screenshot/screenshot.png",
    "revision": "924a7c4ad13d6328addc40265f2992ae"
  },
  {
    "url": "assets/images/new/speech-to-text/speech-to-text.png",
    "revision": "8c84d380864b2ed31030ef035e90f5ab"
  },
  {
    "url": "assets/images/new/styles/styles.png",
    "revision": "d2d699f216b75abe65f7ae5b5adeb60b"
  },
  {
    "url": "assets/images/new/text-to-speech/text-to-speech.png",
    "revision": "c4c2c75358147afc9509a1a8cbf48616"
  },
  {
    "url": "assets/images/new/zoom/zoom.png",
    "revision": "8a5305324ac722ec0927a35ee690ab67"
  },
  {
    "url": "assets/images/other/welcome.jpg",
    "revision": "c63a9ebe81e63f1a6d19e8f045c9999d"
  },
  {
    "url": "assets/images/people/alan.png",
    "revision": "1566b63c4c11c2e7a58d2ef5716f402b"
  },
  {
    "url": "assets/images/people/ken.png",
    "revision": "c6fc8d6cc9e8ef9816e4cc3c4153db23"
  },
  {
    "url": "assets/images/people/rob-about-three.jpg",
    "revision": "0d003b2d96d462aa1ef7b39b6ee4ad58"
  },
  {
    "url": "assets/images/people/rob-about-two.jpg",
    "revision": "6a6dbc80833084b64857a48d0ed48889"
  },
  {
    "url": "assets/images/people/rob-about.png",
    "revision": "faaa91b441569b77be8302563da332d5"
  },
  {
    "url": "assets/images/people/rob.png",
    "revision": "3dde1bb55e45680c23ff5dfbfc71f7c8"
  },
  {
    "url": "assets/images/people/steve.png",
    "revision": "844089ab12d5fb50f9db287b657e9b93"
  },
  {
    "url": "assets/images/people/sue.png",
    "revision": "5230d42884bbee61427d29b5545e3f70"
  },
  {
    "url": "assets/images/products/chrome/helperbird-for-google-chrome.png",
    "revision": "bc023a11adde638e5eddbb0ae897aba1"
  },
  {
    "url": "assets/images/products/edge/edge-screenshot.png",
    "revision": "7ace4268a7d2917669334b5b061edd3d"
  },
  {
    "url": "assets/images/products/firefox/firefox-screenshot.png",
    "revision": "4d8dab903c6435f5659c6b6da6e298d2"
  },
  {
    "url": "assets/images/products/google-docs/google-docs-screenshot-of-helperbird.png",
    "revision": "dce1707eebe9d27e1e972c5a507c1e58"
  },
  {
    "url": "assets/images/products/google-docs/header-google-docs.png",
    "revision": "8aeed6d98942f5b178c9b77343a27c0f"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_eight.png",
    "revision": "43f9d5664c6558a0d59b4e3d7735bd27"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_five.png",
    "revision": "7bd04d19b84bb4b8516c2002f4116822"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_four.png",
    "revision": "86321bf9b04ef677d1cacf3d8fc61173"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_one.png",
    "revision": "5d38704c76bdc55813c553d0e5423586"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_seven.png",
    "revision": "bbd136bb347f17c503dcde349af577d9"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_six.png",
    "revision": "5d38704c76bdc55813c553d0e5423586"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_three.png",
    "revision": "574311dbedd8928fc45409b1337915ec"
  },
  {
    "url": "assets/images/products/google-docs/helperbird_google_docs_two.png",
    "revision": "bbd136bb347f17c503dcde349af577d9"
  },
  {
    "url": "assets/images/products/ipad-iphone/helperbird-iphone-ipad-screenshot.png",
    "revision": "d0eccf231536dc9a90bfa7e4ad9a17e0"
  },
  {
    "url": "assets/images/products/ipad-iphone/helperbird-running-on-iphone.png",
    "revision": "0abdcdea0b05ce0c62e79bba40f215f3"
  },
  {
    "url": "assets/images/products/ipad-iphone/helperbirds-iphone-app-running.png",
    "revision": "6d1fe815501c0e54124c75e12089c04d"
  },
  {
    "url": "assets/images/pwa/logo/128.png",
    "revision": "949a368273c88974cf8df76883d19353"
  },
  {
    "url": "assets/images/pwa/logo/144.png",
    "revision": "f6f3b6a69cf6cead4e27ae79547fd51e"
  },
  {
    "url": "assets/images/pwa/logo/16.png",
    "revision": "a81778e1af8de0c00a0ccfe8321b4d99"
  },
  {
    "url": "assets/images/pwa/logo/32.png",
    "revision": "d71ac3a4eab1ccf31646b6e2d9dd6f8e"
  },
  {
    "url": "assets/images/pwa/logo/48.png",
    "revision": "18d531130463fa4e07bc281b0ffce674"
  },
  {
    "url": "assets/images/pwa/logo/512.png",
    "revision": "f6f3b6a69cf6cead4e27ae79547fd51e"
  },
  {
    "url": "assets/images/pwa/logo/accessibility-checker.png",
    "revision": "9da8b9c25b39f783c1974905f3161cb3"
  },
  {
    "url": "assets/images/pwa/logo/full.png",
    "revision": "f6f3b6a69cf6cead4e27ae79547fd51e"
  },
  {
    "url": "assets/images/reviews/brad.png",
    "revision": "95188d08404d34fc6a4137f83296299e"
  },
  {
    "url": "assets/images/reviews/colm.png",
    "revision": "68b36dd240c57b3c32238f7e63bdfec1"
  },
  {
    "url": "assets/images/reviews/minified/colm.png",
    "revision": "bd47d0f586f3d284d552ca35a35bd970"
  },
  {
    "url": "assets/images/reviews/minified/steven.png",
    "revision": "04fc8ac396cd1fb8d5b44569045fc33a"
  },
  {
    "url": "assets/images/reviews/minified/susi.png",
    "revision": "5e48d664ce25df5704b789fe7a9625e6"
  },
  {
    "url": "assets/images/reviews/minified/vladimir.jpg",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/images/reviews/steven.png",
    "revision": "fe5ed1f553ad5eb8d559702c36ce4116"
  },
  {
    "url": "assets/images/reviews/susi.png",
    "revision": "d8593cc90567092bcdaea6de6a0c9807"
  },
  {
    "url": "assets/images/reviews/vladimir.jpg",
    "revision": "25416888a6b85a2f014ffbb22a325f7a"
  },
  {
    "url": "assets/images/screenshot/background/background_1.png",
    "revision": "d6d747e88c8732b4ce32367cdad207fa"
  },
  {
    "url": "assets/images/screenshot/background/background_2.png",
    "revision": "40e1c724b9978569192b181b9ab687a5"
  },
  {
    "url": "assets/images/screenshot/background/background_3.png",
    "revision": "7fbdd4e5decff1ff0fbaf5da01ed4d2d"
  },
  {
    "url": "assets/images/screenshot/background/background_4.png",
    "revision": "4f1c767c99ee20ab4e210dcb2a14d785"
  },
  {
    "url": "assets/images/screenshot/background/background_full_1.png",
    "revision": "cec4bc0a88df4ad46817f76b6ad5712d"
  },
  {
    "url": "assets/images/screenshot/background/background_full_2.png",
    "revision": "2b6f28cf3a9a373bc93a6f0cb3022afe"
  },
  {
    "url": "assets/images/screenshot/background/background_full_3.png",
    "revision": "c4234d7de03bd090329dfa2cdab21475"
  },
  {
    "url": "assets/images/screenshot/background/background_full_4.png",
    "revision": "1edecfbb653ea1a9b96080a3704f0685"
  },
  {
    "url": "assets/images/screenshot/blacklist/blacklist_1.png",
    "revision": "5fc49afc7701758ab81c2e8deb0838f7"
  },
  {
    "url": "assets/images/screenshot/blacklist/blacklist_2.png",
    "revision": "6c8d2287826dc1989a273bc9c8e8f07a"
  },
  {
    "url": "assets/images/screenshot/blacklist/blacklist_3.png",
    "revision": "eefe972fec6593ffcf9bdf42cecf5312"
  },
  {
    "url": "assets/images/screenshot/blacklist/blacklist_4.png",
    "revision": "94d1d83b155fad3fbb947f4805d3aeec"
  },
  {
    "url": "assets/images/screenshot/bookmark/bookmark_1.png",
    "revision": "b0b50915ff841cc2a2da584b29db2d78"
  },
  {
    "url": "assets/images/screenshot/bookmark/bookmark_2.png",
    "revision": "84f0c36e5ca902ed75d4d7d220c317be"
  },
  {
    "url": "assets/images/screenshot/bookmark/bookmark_3.png",
    "revision": "556f53f2ed343541a4a2eede6fe36057"
  },
  {
    "url": "assets/images/screenshot/cognitive /cognitive_1.png",
    "revision": "725529ca5cf8265d528e8e43e1469f84"
  },
  {
    "url": "assets/images/screenshot/cognitive /cognitive_2.png",
    "revision": "f49fb910756b19084f3afc57de9f1baf"
  },
  {
    "url": "assets/images/screenshot/cognitive /cognitive_3.png",
    "revision": "e2293519926fbb8ba7ba080e43a96043"
  },
  {
    "url": "assets/images/screenshot/cognitive /cognitive_4.png",
    "revision": "cfd4ba20afdf859b41b9747ea460af0c"
  },
  {
    "url": "assets/images/screenshot/cognitive /cognitive_5.png",
    "revision": "90b087ce3f419a9b032fe94a33da9f1d"
  },
  {
    "url": "assets/images/screenshot/cognitive /cognitive_6.png",
    "revision": "8b992040f625ef2f33a4749b22cc2317"
  },
  {
    "url": "assets/images/screenshot/cognitive/cognitive_1.png",
    "revision": "ca719a5d9f04a2fa56356c2bf9044057"
  },
  {
    "url": "assets/images/screenshot/cognitive/cognitive_2.png",
    "revision": "3d170278f39b2d406d76dd55ffa61964"
  },
  {
    "url": "assets/images/screenshot/cognitive/cognitive_3.png",
    "revision": "780d536932dfe0019123bf5494010352"
  },
  {
    "url": "assets/images/screenshot/color_blindness/color_blindness_1.png",
    "revision": "6036959a2ecfb1970e2aef8b853efa85"
  },
  {
    "url": "assets/images/screenshot/color_blindness/color_blindness_2.png",
    "revision": "4ff5480035c8937dc8d9a2de0ba23df8"
  },
  {
    "url": "assets/images/screenshot/color_blindness/color_blindness_3.png",
    "revision": "4e3f00e056c92df414f3e4d633f374ff"
  },
  {
    "url": "assets/images/screenshot/color_blindness/color_blindness_4.png",
    "revision": "3bc64139e91f7a0b9368c209412f64aa"
  },
  {
    "url": "assets/images/screenshot/color_blindness/color_blindness_5.png",
    "revision": "676169db752983ab8aa350b65dac3d52"
  },
  {
    "url": "assets/images/screenshot/color/font_colors_1.png",
    "revision": "aa73c39723afc11e798abe5273dbbe52"
  },
  {
    "url": "assets/images/screenshot/color/font_colors_2.png",
    "revision": "434f4e0de95a8d5a81ccc56268844d41"
  },
  {
    "url": "assets/images/screenshot/color/font_colors_3.png",
    "revision": "720683c3483774fbc4f49273e6537509"
  },
  {
    "url": "assets/images/screenshot/color/font_colors_4.png",
    "revision": "69dac60fbe5e36f5a1ef066a974a6ac5"
  },
  {
    "url": "assets/images/screenshot/define/define_1.png",
    "revision": "ed6cbbce8cf1def5ba647cc52baa630a"
  },
  {
    "url": "assets/images/screenshot/define/define_2.png",
    "revision": "26a5fdd75630cd869e4c0bf080383107"
  },
  {
    "url": "assets/images/screenshot/define/define_3.png",
    "revision": "071406b43c531a4b0c4d7e6ef8f11628"
  },
  {
    "url": "assets/images/screenshot/define/define_4.png",
    "revision": "a16f306dba236a7095ad17066a4c3a5d"
  },
  {
    "url": "assets/images/screenshot/fonts/fonts_1.png",
    "revision": "a494ad25f2ab182b080d7e66493e5031"
  },
  {
    "url": "assets/images/screenshot/fonts/fonts_2.png",
    "revision": "a2d6dd98257fc6d01956af703f0bc0ab"
  },
  {
    "url": "assets/images/screenshot/fonts/fonts_5.png",
    "revision": "7bd286aaedfef363230d7e096748c237"
  },
  {
    "url": "assets/images/screenshot/images/images_1.png",
    "revision": "d096266f56bcac99f70ebf6d0f18180c"
  },
  {
    "url": "assets/images/screenshot/images/images_2.png",
    "revision": "e2cceef49372614670b6217491fcb812"
  },
  {
    "url": "assets/images/screenshot/images/images_3.png",
    "revision": "f8c79117afcac329a72d528879bed7d9"
  },
  {
    "url": "assets/images/screenshot/images/images_4.png",
    "revision": "70f19df20f5e677070c98212b9712289"
  },
  {
    "url": "assets/images/screenshot/immersive/immersive_1.png",
    "revision": "4df5588608e9e73bc7ff194d370b32e4"
  },
  {
    "url": "assets/images/screenshot/immersive/immersive_2.png",
    "revision": "e8a4ccc07a7e9912c1698cedb1218035"
  },
  {
    "url": "assets/images/screenshot/immersive/immersive_3.png",
    "revision": "7b7833b96204f8da1653cdede925ba2c"
  },
  {
    "url": "assets/images/screenshot/immersive/immersive_4.png",
    "revision": "65ba45e63bd0f7d5d11f81e9f7388be8"
  },
  {
    "url": "assets/images/screenshot/immersive/immersive_5.png",
    "revision": "fbb743800b554dfd78c2a298173b4cfa"
  },
  {
    "url": "assets/images/screenshot/immersive/immersive_6.png",
    "revision": "3db30b522d0dafb4bc8cb7d3cdff54be"
  },
  {
    "url": "assets/images/screenshot/invert/invert_1.png",
    "revision": "8fc8a2bd6ad5866ef177d1e01dea499c"
  },
  {
    "url": "assets/images/screenshot/invert/invert_2.png",
    "revision": "e2bc6a6e2ce6c4281a5ec1fb08bd5897"
  },
  {
    "url": "assets/images/screenshot/link/link_1.png",
    "revision": "20bc3b49ce40a3a12164699caf707a3d"
  },
  {
    "url": "assets/images/screenshot/link/link_2.png",
    "revision": "a34580719b54e121b694d6e8102e320e"
  },
  {
    "url": "assets/images/screenshot/link/link_3.png",
    "revision": "f9d18874674e02790124e816ecaa62b1"
  },
  {
    "url": "assets/images/screenshot/link/link_4.png",
    "revision": "65e61493ea1c3d25f195011fb2a95b27"
  },
  {
    "url": "assets/images/screenshot/notes/notes_1.png",
    "revision": "814417ab8a4261cdd76afaa0422ed7db"
  },
  {
    "url": "assets/images/screenshot/notes/notes_2.png",
    "revision": "a50cd5d047f78b92bb8ddc43259d2e36"
  },
  {
    "url": "assets/images/screenshot/notes/notes_3.png",
    "revision": "7246079fff6cf4bf746b3d8d04680583"
  },
  {
    "url": "assets/images/screenshot/notes/notes_4.png",
    "revision": "e1987b4dd2f2a0dc0a74f331f5d70af2"
  },
  {
    "url": "assets/images/screenshot/notes/notes_5.png",
    "revision": "99ad494bce8bbdefc31907ae89298dd5"
  },
  {
    "url": "assets/images/screenshot/notes/notes_6.png",
    "revision": "f3949197c104b23fc10d353837ac3bdc"
  },
  {
    "url": "assets/images/screenshot/notes/notes_7.png",
    "revision": "56d7d92a1bd1aef9748e338e7a794e91"
  },
  {
    "url": "assets/images/screenshot/overlay/overlay_1.png",
    "revision": "8714093708f652124b07eb3d70579a4c"
  },
  {
    "url": "assets/images/screenshot/overlay/overlay_2.png",
    "revision": "67bf7cb92b8b1c2fc5f917842f5e4e49"
  },
  {
    "url": "assets/images/screenshot/overlay/overlay_3.png",
    "revision": "a4d8fd8a64d554d0cef33c3f331a89a0"
  },
  {
    "url": "assets/images/screenshot/readermode/readermode_1.png",
    "revision": "19d1ea0071b4281265dd262d93c1733b"
  },
  {
    "url": "assets/images/screenshot/readermode/readermode_2.png",
    "revision": "4a8a9b73bd92f27885346f39287deac1"
  },
  {
    "url": "assets/images/screenshot/readermode/readermode_3.png",
    "revision": "a1a352be0f16a627be6500c7877cd8f6"
  },
  {
    "url": "assets/images/screenshot/ruler/ruler_1.png",
    "revision": "7d0c35491a9769c5a470b351bda6a3cd"
  },
  {
    "url": "assets/images/screenshot/ruler/ruler_2.png",
    "revision": "eb67d9276bbf5eee93ca9c3759f8851c"
  },
  {
    "url": "assets/images/screenshot/ruler/ruler_3.png",
    "revision": "335371f00e1e1e858d78952c860f27fd"
  },
  {
    "url": "assets/images/screenshot/ruler/ruler_4.png",
    "revision": "72c302c01feb411b21bc741b33b292da"
  },
  {
    "url": "assets/images/screenshot/ruler/ruler_5.png",
    "revision": "5b147f7857422a4eea2d1a697b0a6ad2"
  },
  {
    "url": "assets/images/screenshot/screenshot/screenshot_1.png",
    "revision": "bc166bd8c334b4821a5118b4d1ab9cf1"
  },
  {
    "url": "assets/images/screenshot/screenshot/screenshot_2.png",
    "revision": "274d48dfb303faf5c30b595bb3df3379"
  },
  {
    "url": "assets/images/screenshot/spacing/Screen Shot 2020-03-24 at 8.14.25 PM.png",
    "revision": "b0b50915ff841cc2a2da584b29db2d78"
  },
  {
    "url": "assets/images/screenshot/spacing/Screen Shot 2020-03-24 at 8.14.32 PM.png",
    "revision": "84f0c36e5ca902ed75d4d7d220c317be"
  },
  {
    "url": "assets/images/screenshot/spacing/Screen Shot 2020-03-24 at 8.14.37 PM.png",
    "revision": "556f53f2ed343541a4a2eede6fe36057"
  },
  {
    "url": "assets/images/screenshot/spacing/spacing_1.png",
    "revision": "44c57170fca71e821ba8311323b3e1e7"
  },
  {
    "url": "assets/images/screenshot/spacing/spacing_2.png",
    "revision": "b8826452296bab766ca51bd1aa102a96"
  },
  {
    "url": "assets/images/screenshot/spacing/spacing_3.png",
    "revision": "d88a609e14e86d47f6379532deef383d"
  },
  {
    "url": "assets/images/screenshot/speech_to_text/speech_to_text_1.png",
    "revision": "99771350850a81022effa836d28bc6b5"
  },
  {
    "url": "assets/images/screenshot/speech_to_text/speech_to_text_2.png",
    "revision": "40ae5da0a215aafde6ffc68635033013"
  },
  {
    "url": "assets/images/screenshot/speech_to_text/speech_to_text_3.png",
    "revision": "b1ceb167df8ceecd9f867c81a1eddd51"
  },
  {
    "url": "assets/images/screenshot/speech_to_text/speech_to_text_4.png",
    "revision": "97afdf89062bb66f4ba0601cb8a650d7"
  },
  {
    "url": "assets/images/screenshot/speech_to_text/speech_to_text_5.png",
    "revision": "1d034c31390d7374ebd239357d015b82"
  },
  {
    "url": "assets/images/screenshot/text_to_speech/text_to_speech_1.png",
    "revision": "f8723942022c071389f0c206f6b7915a"
  },
  {
    "url": "assets/images/screenshot/text_to_speech/text_to_speech_2.png",
    "revision": "de6adf36ce8f93bc956a83e47a090f31"
  },
  {
    "url": "assets/images/screenshot/translate/translate_1.png",
    "revision": "6cc56a1670a4dddb231ae3071677a39b"
  },
  {
    "url": "assets/images/screenshot/translate/translate_2.png",
    "revision": "510e7e2b18c6c1df693d89af650d1d4d"
  },
  {
    "url": "assets/images/screenshot/zoom/zoom_1.png",
    "revision": "63110afb247a8ef685e93fadfcf3845a"
  },
  {
    "url": "assets/images/screenshot/zoom/zoom_2.png",
    "revision": "50c9290cdec45c32a40882d031493f22"
  },
  {
    "url": "assets/images/screenshot/zoom/zoom_3.png",
    "revision": "376d0298e18d9e9a2a56459c93e1112f"
  },
  {
    "url": "assets/images/site/favicon.png",
    "revision": "f9e5765a2c7b4d10bca7f97a902286e8"
  },
  {
    "url": "assets/images/social/facebook-a11y.png",
    "revision": "cb59df6c1ccf3a2866556addcdbb55bc"
  },
  {
    "url": "assets/images/social/facebook-widget.png",
    "revision": "86b365890a9906177805128c8f822f64"
  },
  {
    "url": "assets/images/social/facebook.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
  },
  {
    "url": "assets/images/social/features/01 FONT THUMB.png",
    "revision": "1792986ce0d3848419a963e68e286098"
  },
  {
    "url": "assets/images/social/features/02 ZOOM THUMB.png",
    "revision": "a0649c273d6b078f070392e3ccdf108c"
  },
  {
    "url": "assets/images/social/features/05 PRINT.png",
    "revision": "750c7dc5f58eb997d65cb35542a53ad6"
  },
  {
    "url": "assets/images/social/features/08 OCR THUMB.png",
    "revision": "6f000b29822d8b906d20ddc0c6b4b85f"
  },
  {
    "url": "assets/images/social/features/12 IMAGES THUMB.png",
    "revision": "e3531629318eb1a4d75187a269b59f69"
  },
  {
    "url": "assets/images/social/features/21 BOOKMARKS THUMB.png",
    "revision": "f5c5fa73c3cc6a0ea3208e26e9b90c59"
  },
  {
    "url": "assets/images/social/features/cognitive.png",
    "revision": "12d911f4d907e80e287b2201cdaab301"
  },
  {
    "url": "assets/images/social/features/color_blind.png",
    "revision": "c93415bba86da2f92ad6bc938ee4e65a"
  },
  {
    "url": "assets/images/social/features/colors.png",
    "revision": "9cab9891fccb8a2ae3b8d848c58c92ca"
  },
  {
    "url": "assets/images/social/features/contrast.png",
    "revision": "e7ea6e2ae545186491d9a03f2e2f6b86"
  },
  {
    "url": "assets/images/social/features/cursor.png",
    "revision": "163991244bd57e020f066d8efe79c7f7"
  },
  {
    "url": "assets/images/social/features/dictionary.png",
    "revision": "ab2c31b06fdd2bb22265678ffb913e13"
  },
  {
    "url": "assets/images/social/features/fonts.png",
    "revision": "843f6369c3651096444ff3ae3212c5fa"
  },
  {
    "url": "assets/images/social/features/HB_FacebookCustomize.png",
    "revision": "b27c05a4632410acd6f04d23b9aad7e2"
  },
  {
    "url": "assets/images/social/features/HB_FacebookProductivity.png",
    "revision": "81e115d67434881d0948fa9d7018052b"
  },
  {
    "url": "assets/images/social/features/helperbird_features.png",
    "revision": "862650a9ebf55e402a18da7cead89ad7"
  },
  {
    "url": "assets/images/social/features/immersive_reader.png",
    "revision": "831f5d852b9b07930474d2637b09c898"
  },
  {
    "url": "assets/images/social/features/notes.png",
    "revision": "6314fef0495b3eb36bfd8c1eb3d8eb6c"
  },
  {
    "url": "assets/images/social/features/overlay.png",
    "revision": "8220a22865d20cc8f713a90f62ccf85a"
  },
  {
    "url": "assets/images/social/features/reader_mode.png",
    "revision": "2153f3e3b288a69b98bf74364916e50c"
  },
  {
    "url": "assets/images/social/features/ruler.png",
    "revision": "efd9e9beb1d1af5664caba029ad13325"
  },
  {
    "url": "assets/images/social/features/screenshot.png",
    "revision": "3bed1f87ebba02b7fc0e6599ed153549"
  },
  {
    "url": "assets/images/social/features/spacing.png",
    "revision": "48c8b582e2a01712f9c824c50e6e8e3e"
  },
  {
    "url": "assets/images/social/features/speech.png",
    "revision": "88f0a7b6b866272568f5d7bd6920d5e2"
  },
  {
    "url": "assets/images/social/features/student_pricing.png",
    "revision": "c33ae146730c9ceedaad3fefcd557ddb"
  },
  {
    "url": "assets/images/social/features/translate.png",
    "revision": "f9f83d833d44b9c8f3ce1957f4e2eefa"
  },
  {
    "url": "assets/images/social/features/zoom.png",
    "revision": "3e30c7939342331a287c3273c4de9854"
  },
  {
    "url": "assets/images/social/Read. Write. Ignite your full potential with Helperbird..png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
  },
  {
    "url": "assets/images/social/social/android-chrome-192x192.png",
    "revision": "29df9d36d0566b2010d52ca9865082b8"
  },
  {
    "url": "assets/images/social/social/android-chrome-512x512.png",
    "revision": "24c64a0a5f542ccbaff81b8672707fad"
  },
  {
    "url": "assets/images/social/social/apple-touch-icon-precomposed copy.png",
    "revision": "888ac7670681aeb413d3b4426a0ef2e6"
  },
  {
    "url": "assets/images/social/social/apple-touch-icon-precomposed.png",
    "revision": "562340ffc912d888e3cc1561037abcf1"
  },
  {
    "url": "assets/images/social/social/apple-touch-icon.png",
    "revision": "562340ffc912d888e3cc1561037abcf1"
  },
  {
    "url": "assets/images/social/social/favicon-16x16.png",
    "revision": "b81194c9b77c8154b151eb97343a764c"
  },
  {
    "url": "assets/images/social/social/favicon-32x32.png",
    "revision": "8b02972e39f51e515a6d77cb8358416e"
  },
  {
    "url": "assets/images/social/social/favicon.ico",
    "revision": "0b53a11c7110e4cb4ed5f0b196d88282"
  },
  {
    "url": "assets/images/social/social/maskable_icon_x128.png",
    "revision": "f9d1440971c513def03332a35e2843d7"
  },
  {
    "url": "assets/images/social/social/maskable_icon_x144.png",
    "revision": "012f076f4ebecd43f25f5e2172473499"
  },
  {
    "url": "assets/images/social/social/maskable_icon_x192.png",
    "revision": "dc582f8a0848de0d5b7b518ce8461403"
  },
  {
    "url": "assets/images/social/social/maskable_icon_x384.png",
    "revision": "54f5b73a7f5a69dd2f04d6589788e647"
  },
  {
    "url": "assets/images/social/social/maskable_icon_x48.png",
    "revision": "10875e2c4da7f796cf38e93fc53691cf"
  },
  {
    "url": "assets/images/social/social/maskable_icon_x512.png",
    "revision": "cf2533dcc0c9e8811441e0f7e1ba982e"
  },
  {
    "url": "assets/images/social/social/maskable_icon_x72.png",
    "revision": "d061b728b4000992eb75664d65fa5b79"
  },
  {
    "url": "assets/images/social/social/maskable_icon_x96.png",
    "revision": "6c84ad3038e5d4561c4bcf05f7fb02ec"
  },
  {
    "url": "assets/images/social/social/maskable_icon.png",
    "revision": "cf2533dcc0c9e8811441e0f7e1ba982e"
  },
  {
    "url": "assets/images/social/social/mstile-150x150.png",
    "revision": "249a339c09e24d7ff189af44cde8c6a0"
  },
  {
    "url": "assets/images/social/social/safari-pinned-tab.svg",
    "revision": "8fa99aa859ecd9983a4e5bfd65b38ce6"
  },
  {
    "url": "assets/images/social/twitter-a11y.png",
    "revision": "cb59df6c1ccf3a2866556addcdbb55bc"
  },
  {
    "url": "assets/images/social/twitter-widget.png",
    "revision": "86b365890a9906177805128c8f822f64"
  },
  {
    "url": "assets/images/social/twitter.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
  },
  {
    "url": "assets/images/switch/adblocker/after.png",
    "revision": "f4dba95fb43f5a362df1808b66826450"
  },
  {
    "url": "assets/images/switch/adblocker/before.png",
    "revision": "41031e62817cab838df5ac27b79bdcf2"
  },
  {
    "url": "assets/images/switch/adblocker/minified/after.png",
    "revision": "30702a4a092328d1974438f3f9e85c99"
  },
  {
    "url": "assets/images/switch/adblocker/minified/before.png",
    "revision": "d8a2a796f341ada9482360bb57edc873"
  },
  {
    "url": "assets/images/switch/adjust/after.png",
    "revision": "29ab0eee00a934061b40f3ec74bad46e"
  },
  {
    "url": "assets/images/switch/adjust/before.png",
    "revision": "ae7fc5c7ff0c03a2420a7bdd7b8ef49c"
  },
  {
    "url": "assets/images/switch/adjust/minified/after.png",
    "revision": "c63cf2650ef05d4a78dbbe2e2104286c"
  },
  {
    "url": "assets/images/switch/adjust/minified/before.png",
    "revision": "924cf8fb4be4cbb2bf8f75f36ab9348c"
  },
  {
    "url": "assets/images/switch/annonations/after.png",
    "revision": "abd2b25b5f805ddbb5d430d9014cbc8f"
  },
  {
    "url": "assets/images/switch/annonations/before.png",
    "revision": "c05a91d6222d047cae20d5f8468268f9"
  },
  {
    "url": "assets/images/switch/annonations/minified/after.png",
    "revision": "b21dcc4a1669131e20327accb12b5b8d"
  },
  {
    "url": "assets/images/switch/annonations/minified/before.png",
    "revision": "0076eb9df4d5bc7a7b47071c9968e45c"
  },
  {
    "url": "assets/images/switch/blind/after.png",
    "revision": "032e9d0ab9cb07fc4bc4a02a6fe40f36"
  },
  {
    "url": "assets/images/switch/blind/before.png",
    "revision": "fad5b62888f3d4dc792180a0b9e68df6"
  },
  {
    "url": "assets/images/switch/blind/minified/after.png",
    "revision": "ada4c30a4c75deb923e23d75bcb244b5"
  },
  {
    "url": "assets/images/switch/blind/minified/before.png",
    "revision": "bcbd93115f78d6a29b64539ffa056c4a"
  },
  {
    "url": "assets/images/switch/blindness/after.png",
    "revision": "bae1ed1daf348f5ac19a3c39861057e3"
  },
  {
    "url": "assets/images/switch/blindness/before.png",
    "revision": "d3adee46def0f4889557b197d28a8007"
  },
  {
    "url": "assets/images/switch/blindness/minified/after.png",
    "revision": "3bc46865d7f0bc278e6c8b31a3f47ea6"
  },
  {
    "url": "assets/images/switch/blindness/minified/before.png",
    "revision": "4c764e740d6a185efc2e6cdd8776bfc1"
  },
  {
    "url": "assets/images/switch/bookmarks/after.png",
    "revision": "3e0a56c31936bcc01244d44f6030a7dd"
  },
  {
    "url": "assets/images/switch/bookmarks/before.png",
    "revision": "35668b509fef59fa581973a140d398e2"
  },
  {
    "url": "assets/images/switch/bookmarks/minified/after.png",
    "revision": "c91e9b4862c8bf91e1121eefe2143be8"
  },
  {
    "url": "assets/images/switch/bookmarks/minified/before.png",
    "revision": "7594908afa51ccea108ecf1dbbc0c62c"
  },
  {
    "url": "assets/images/switch/colors/after.png",
    "revision": "84bc61c3c5e9a8b23335afbd78aabbe4"
  },
  {
    "url": "assets/images/switch/colors/before.png",
    "revision": "9155941a02096f13824b839f2fb85529"
  },
  {
    "url": "assets/images/switch/colors/minified/after.png",
    "revision": "027aa2e3efc6e8bf10cd390481ac90a0"
  },
  {
    "url": "assets/images/switch/colors/minified/before.png",
    "revision": "a49bb52b50be98a77c700d8d0fce0c87"
  },
  {
    "url": "assets/images/switch/dictate/after.png",
    "revision": "9bafb404ee4879448323de8ad821c145"
  },
  {
    "url": "assets/images/switch/dictate/before.png",
    "revision": "a00699da5ba6e454413fd1f23a87e911"
  },
  {
    "url": "assets/images/switch/dictate/minified/after.png",
    "revision": "a8c2b62f151cad806f1fa255b49420d1"
  },
  {
    "url": "assets/images/switch/dictate/minified/before.png",
    "revision": "00143c9ebee6d46fcd668de956560d66"
  },
  {
    "url": "assets/images/switch/dictionary/after.png",
    "revision": "85fc563e8bb6e02be2cde76547f019df"
  },
  {
    "url": "assets/images/switch/dictionary/before.png",
    "revision": "be31beeacb368193502edccaf8301304"
  },
  {
    "url": "assets/images/switch/dictionary/minified/after.png",
    "revision": "d3124faeb12e8eb4008bdd53fb6ef1bc"
  },
  {
    "url": "assets/images/switch/dictionary/minified/before.png",
    "revision": "05c256bd882b53e8bc541938479b02b2"
  },
  {
    "url": "assets/images/switch/fonts/after.png",
    "revision": "6d4444efa8fd723c4ce57eb023a44f7d"
  },
  {
    "url": "assets/images/switch/fonts/before.png",
    "revision": "8980b618c291711412677777c0337829"
  },
  {
    "url": "assets/images/switch/fonts/minified/after.png",
    "revision": "22994c37a2d7896887f6979c46c089c9"
  },
  {
    "url": "assets/images/switch/fonts/minified/before.png",
    "revision": "f2fa79e1dfc2a689a35afd63b2fd1ece"
  },
  {
    "url": "assets/images/switch/high-contrast/after.png",
    "revision": "615bbba4925ad46b86f5ad820e89a550"
  },
  {
    "url": "assets/images/switch/high-contrast/before.png",
    "revision": "53b05175e72b575a7b65f7cbe50b9613"
  },
  {
    "url": "assets/images/switch/high-contrast/minified/after.png",
    "revision": "9a5d16c9d14497e822eac981c159afc6"
  },
  {
    "url": "assets/images/switch/high-contrast/minified/before.png",
    "revision": "8baa081cc5867247e6521c56d86b3b19"
  },
  {
    "url": "assets/images/switch/load/after.png",
    "revision": "27afa3804dfd8abd67912e7c56a4825e"
  },
  {
    "url": "assets/images/switch/load/before.png",
    "revision": "bde8f8e5962852e5c0c96e68073a63a2"
  },
  {
    "url": "assets/images/switch/load/minified/after.png",
    "revision": "cdbc963d438e92db0176f09c14270e8c"
  },
  {
    "url": "assets/images/switch/load/minified/before.png",
    "revision": "e96f8de6a9e12049a1baa79a7306dbe5"
  },
  {
    "url": "assets/images/switch/mouse/after.png",
    "revision": "3713ec5919212968c4335f10d6b21420"
  },
  {
    "url": "assets/images/switch/mouse/before.png",
    "revision": "af5bd49fd55d33c1e055818939e169dd"
  },
  {
    "url": "assets/images/switch/mouse/minified/after.png",
    "revision": "7ceb00a475e7a2542e95c5dd3ce792df"
  },
  {
    "url": "assets/images/switch/mouse/minified/before.png",
    "revision": "52f35d3418425be57f09a1251c835476"
  },
  {
    "url": "assets/images/switch/notes/after.png",
    "revision": "82192737803ca118d279c5aaecf35b0f"
  },
  {
    "url": "assets/images/switch/notes/before.png",
    "revision": "d624f3eb9350ed95300ef58e01a53422"
  },
  {
    "url": "assets/images/switch/notes/minified/after.png",
    "revision": "f65534259ca5ef037a0e9373975271c1"
  },
  {
    "url": "assets/images/switch/notes/minified/before.png",
    "revision": "99da33fde64a7f260efa15e5e3a9d261"
  },
  {
    "url": "assets/images/switch/ocr/after.png",
    "revision": "e08245e24f3852093963c18150a2bbb1"
  },
  {
    "url": "assets/images/switch/ocr/before.png",
    "revision": "3eac8ea969ff0c45ff031992f4ca8ddb"
  },
  {
    "url": "assets/images/switch/ocr/minified/after.png",
    "revision": "4c3a28a7ac056f71e466ca3f4fc8b030"
  },
  {
    "url": "assets/images/switch/ocr/minified/before.png",
    "revision": "e9f4f9894b3ab384388d6edeb31a101a"
  },
  {
    "url": "assets/images/switch/overlay/after.png",
    "revision": "a392492728daef7609d1642a418c0a29"
  },
  {
    "url": "assets/images/switch/overlay/before.png",
    "revision": "205567ba9add11e48c17098ea4c2273d"
  },
  {
    "url": "assets/images/switch/overlay/minified/after.png",
    "revision": "841cc6905018954c24171011e6fcada7"
  },
  {
    "url": "assets/images/switch/overlay/minified/before.png",
    "revision": "76f92341d5b8812c8048c3cf5e55f21f"
  },
  {
    "url": "assets/images/switch/reader-mode/after.png",
    "revision": "7611dc42b5d54792d1f26e3068f235c0"
  },
  {
    "url": "assets/images/switch/reader-mode/before.png",
    "revision": "2d0ea4226e8beb11350ff49b1567da4c"
  },
  {
    "url": "assets/images/switch/reader-mode/minified/after.png",
    "revision": "c33b22e70ad0100c71d00cd4792f6b30"
  },
  {
    "url": "assets/images/switch/reader-mode/minified/before.png",
    "revision": "633d89ebf6a908b2c16554de47017eb3"
  },
  {
    "url": "assets/images/switch/ruler/after.png",
    "revision": "7cdb02bc6014d99d3b363ecea00f5ab7"
  },
  {
    "url": "assets/images/switch/ruler/before.png",
    "revision": "fda01b6e32fdffd26144faaad4e48dac"
  },
  {
    "url": "assets/images/switch/ruler/minified/after.png",
    "revision": "38ad032137a807fd4d17198e3dff8ca5"
  },
  {
    "url": "assets/images/switch/ruler/minified/before.png",
    "revision": "40ac86bfbd501f0b86f6866e2aaf07fe"
  },
  {
    "url": "assets/images/switch/screenshot/after.png",
    "revision": "6202c1d67928e2aa3c10efd0169fb6ed"
  },
  {
    "url": "assets/images/switch/screenshot/before.png",
    "revision": "e883821a4007d2fda28b87fd8495fe0f"
  },
  {
    "url": "assets/images/switch/screenshot/minified/after.png",
    "revision": "808fdb5fb5e983f9bafca3d86828f374"
  },
  {
    "url": "assets/images/switch/screenshot/minified/before.png",
    "revision": "73306592e8d5551c1eb68e1d44131d80"
  },
  {
    "url": "assets/images/switch/text-to-speech/1.png",
    "revision": "72dcf7eda477bcb99fb4066978b38f08"
  },
  {
    "url": "assets/images/switch/text-to-speech/after.png",
    "revision": "26e8c1a807816d196d2166a5eaf602c4"
  },
  {
    "url": "assets/images/switch/text-to-speech/before.png",
    "revision": "4f1c568fb599ed3639c41c7067c230eb"
  },
  {
    "url": "assets/images/switch/text-to-speech/minified/1.png",
    "revision": "4a2030f6996806d078f72d7b6fcaa3aa"
  },
  {
    "url": "assets/images/switch/text-to-speech/minified/after.png",
    "revision": "8cb42b1928c59e1cf3e3b6dff06eb1d3"
  },
  {
    "url": "assets/images/switch/text-to-speech/minified/before.png",
    "revision": "a796ab248fe52cb1525d041050360386"
  },
  {
    "url": "assets/images/switch/translate/after.png",
    "revision": "275ef409d341382563b1e879e7cb8feb"
  },
  {
    "url": "assets/images/switch/translate/before.png",
    "revision": "90f1e165c421e75f8c1f2b7640c15919"
  },
  {
    "url": "assets/images/switch/translate/minified/after.png",
    "revision": "93512dc195beac90fc8df0dde1b77f21"
  },
  {
    "url": "assets/images/switch/translate/minified/before.png",
    "revision": "1d634280393a73acf3323bc560ef64a2"
  },
  {
    "url": "assets/images/updates/24-1-0/controls.png",
    "revision": "fba0c0ae8029f0123f3fa88cfa4c00fd"
  },
  {
    "url": "assets/images/updates/24-1-0/full.png",
    "revision": "05fe31f87d8474c72a4c273da2133f58"
  },
  {
    "url": "assets/images/updates/24-1-0/loader.png",
    "revision": "7e182207d6dd87cee597516b747a9cc8"
  },
  {
    "url": "assets/images/updates/24-1-0/pause.png",
    "revision": "95a6164e6cd7b1271b5da489a40198fd"
  },
  {
    "url": "assets/images/updates/24-1-1/analyze-1.png",
    "revision": "3e01265da8220649b0eaa79ec364ba76"
  },
  {
    "url": "assets/images/updates/24-1-1/analyze.png",
    "revision": "66a430e9205d152f587cf6dfea4c09b6"
  },
  {
    "url": "assets/images/updates/24-1-2/analyze-1.png",
    "revision": "3e01265da8220649b0eaa79ec364ba76"
  },
  {
    "url": "assets/images/updates/24-1-2/analyze.png",
    "revision": "66a430e9205d152f587cf6dfea4c09b6"
  },
  {
    "url": "assets/images/updates/24-2-2/notes-1.png",
    "revision": "85dfdceae6698d7b2deac7466d4153dd"
  },
  {
    "url": "assets/images/updates/24-2-2/notes-2.png",
    "revision": "7e45fc8c0de41a9d32d7eadbc206d115"
  },
  {
    "url": "assets/images/updates/24-3-0/adblocker.png",
    "revision": "bd084ec37e76768500d1ca7309b35af3"
  },
  {
    "url": "assets/images/updates/24-3-0/font.png",
    "revision": "5d80959d14384ed82be97bb75a810a4f"
  },
  {
    "url": "assets/images/updates/24-3-0/readermode.png",
    "revision": "9438fff003ced5f2da00715203bac174"
  },
  {
    "url": "assets/images/updates/24-3-0/settings.png",
    "revision": "2c2d93fbd4e680a19abe94b1fac1bb81"
  },
  {
    "url": "assets/images/updates/24-3-0/time.png",
    "revision": "5e24b7b21a30c9b722527ad9c550ae70"
  },
  {
    "url": "assets/images/updates/25-0-0/font.png",
    "revision": "31da90dbecae8372a74ddb6ed919a8e0"
  },
  {
    "url": "assets/images/updates/25-0-0/line.png",
    "revision": "c3a1a8ca82a6929a9f8530d9ad151789"
  },
  {
    "url": "assets/images/updates/25-0-0/redesign.png",
    "revision": "4bec78b8fe6b6ac1b4e97c7bd1b93afb"
  },
  {
    "url": "assets/images/updates/25-0-0/shortcut.png",
    "revision": "93ee9c5c3f85bea12b48301379e4129b"
  },
  {
    "url": "assets/images/updates/25-1-0/ruler.png",
    "revision": "86d4409a110520acd79574aaeeccf473"
  },
  {
    "url": "assets/images/updates/26-0-1/dication.png",
    "revision": "1f85b9323ff78fa55161472b29659015"
  },
  {
    "url": "assets/images/updates/26-0-1/exported.png",
    "revision": "62ce04c1dd60ec5ab4bd14cbbc0bd400"
  },
  {
    "url": "assets/images/updates/26-0-1/extacted.png",
    "revision": "3f7d21e0ae25a35e27fdeb4971d98dd3"
  },
  {
    "url": "assets/images/updates/26-0-1/learn-more.png",
    "revision": "667cce21cdb27897497628737c6c1a9e"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-1.png",
    "revision": "4e7e169142285c7ba9bb4464a20bbedc"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-2.png",
    "revision": "4f92b786b29c618bf2143bf4b71ec2b9"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-3.png",
    "revision": "ea4ac62b31bf18c22990acddb0597027"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-4.png",
    "revision": "e3c0690f4cbf04777ea5679df6b4f0f4"
  },
  {
    "url": "assets/images/updates/26-0-1/redesign-5.png",
    "revision": "6ef82cc4b1388ec0727a8c2ca7bfe922"
  },
  {
    "url": "assets/images/updates/26-0-1/spacing.png",
    "revision": "dd1530bea7bd02ec7b740c2c9cd35523"
  },
  {
    "url": "assets/images/updates/26-1-1/highlights.png",
    "revision": "34e710f1bc72d7afc985f8e2cc881674"
  },
  {
    "url": "assets/images/updates/26-1-1/signin.png",
    "revision": "bf56b68d73df6d7b78f25f7c195e7daf"
  },
  {
    "url": "assets/images/updates/27-0-0/highlights.png",
    "revision": "d5d7318d31d9f209051783d159c9b67e"
  },
  {
    "url": "assets/images/updates/27-0-0/line.png",
    "revision": "fe88ddbe421558d68f3c35cbe25fa8a3"
  },
  {
    "url": "assets/images/updates/27-0-0/mute.png",
    "revision": "5a12bea33925841a348e117e7cd81b37"
  },
  {
    "url": "assets/images/updates/27-0-0/scroll.png",
    "revision": "34ec4368baeee173a0667b7fd02c059f"
  },
  {
    "url": "assets/images/updates/27-1-0/color.png",
    "revision": "f1a6be0b27d531017c20d2e081c0420e"
  },
  {
    "url": "assets/images/updates/27-1-0/notes.png",
    "revision": "4d3c17598144b35be1204206ab9de2dc"
  },
  {
    "url": "assets/images/updates/27-1-0/pin.png",
    "revision": "32b8984e20b5a2f02683f833110bc662"
  },
  {
    "url": "assets/images/updates/30-4-0/HBmenu1.png",
    "revision": "d947e60fc39024dc8e3e865df8e96027"
  },
  {
    "url": "assets/images/updates/30-4-0/HBmenu2.png",
    "revision": "fc5882b3b56d19eb5068af826ed2a7c2"
  },
  {
    "url": "assets/images/updates/33-0-0/banner.png",
    "revision": "c43b0094b3a1c7f54beb47e642fce219"
  },
  {
    "url": "assets/images/updates/33-0-0/design.png",
    "revision": "8f8f5ae6095166c25ea257c00ff4d76c"
  },
  {
    "url": "assets/images/updates/33-0-0/docs.png",
    "revision": "b8ad7bf9fa21fb01a52b142aa4c3ea9d"
  },
  {
    "url": "assets/images/updates/35-0-0/gray.png",
    "revision": "8a9b2997ad6628cab63cd97aff22bf47"
  },
  {
    "url": "assets/images/updates/35-0-0/reading.png",
    "revision": "40dec5e746cafeb99f85079e5d9148a8"
  },
  {
    "url": "assets/images/updates/40-0-0/design.png",
    "revision": "c04cd9814df39091c50d0741890c9a27"
  },
  {
    "url": "assets/images/updates/40-0-0/editor.png",
    "revision": "04d0423b42de0dd059366d6f1cf02cf3"
  },
  {
    "url": "assets/images/updates/40-0-0/lookup.png",
    "revision": "31fd60b2ae798fc0f8782c3e2239cd92"
  },
  {
    "url": "assets/images/updates/40-1-0/color.png",
    "revision": "810d367109db6323397cf8d25b3d4193"
  },
  {
    "url": "assets/images/updates/40-1-0/favourite.png",
    "revision": "bc8a455a155cda19490e5f196151b6df"
  },
  {
    "url": "assets/images/updates/40-1-0/pdf.png",
    "revision": "e41f08e3043f20c5d3b1fe8c6d06c907"
  },
  {
    "url": "assets/images/updates/40-1-0/searchbar.png",
    "revision": "66e4ea4f86e491c596e4cc4ba69a17ed"
  },
  {
    "url": "assets/images/updates/50-0-0/google.png",
    "revision": "e303a721f696624600a984b381d6d5d0"
  },
  {
    "url": "assets/images/updates/50-0-0/input.png",
    "revision": "727829de3936843e9de25b5df8d2ff2c"
  },
  {
    "url": "assets/images/updates/50-0-0/summarize.png",
    "revision": "f22570786542375db87744250bd35823"
  },
  {
    "url": "assets/images/updates/kingfisher/accessibility.png",
    "revision": "6ca2bbdc3905725581b165881a8c4278"
  },
  {
    "url": "assets/images/updates/kingfisher/colors-paragraphs.png",
    "revision": "8b65ea7aa67f6eee5a6ec3676228c201"
  },
  {
    "url": "assets/images/updates/kingfisher/colors.png",
    "revision": "46cf0558a6e3489aeb2ed32f2f9e6004"
  },
  {
    "url": "assets/images/updates/kingfisher/favioute.png",
    "revision": "0f37613162c5ccd284a292aaaf52e85b"
  },
  {
    "url": "assets/images/updates/kingfisher/notes.png",
    "revision": "68f361967a160cc3b3a6cd1bb8444c2a"
  },
  {
    "url": "assets/images/updates/kingfisher/paragraphs.png",
    "revision": "5bfac9e5a80ffcac27909f253301226a"
  },
  {
    "url": "assets/images/updates/kingfisher/readers.png",
    "revision": "fc6d5a0ddc4259c26f27fbffbb5eb005"
  },
  {
    "url": "assets/images/updates/kingfisher/rulers.png",
    "revision": "52f913cee83420ec378593cbae4d85e0"
  },
  {
    "url": "assets/images/updates/kingfisher/search.png",
    "revision": "7636d6660d85de257f4bcd03a53af33b"
  },
  {
    "url": "assets/images/updates/kingfisher/speed.png",
    "revision": "3a97b691c24ece19ba597c2a737056ce"
  },
  {
    "url": "assets/images/updates/kingfisher/videos.png",
    "revision": "55621631ec453de7c64e2f249f4fff4b"
  },
  {
    "url": "assets/js/core/app.js",
    "revision": "976ebccdb62d40e9d25940ac305d0d6c"
  },
  {
    "url": "assets/js/core/third-party.js",
    "revision": "4c07b35b65bf6465dd8f5cb11e8aee4a"
  },
  {
    "url": "assets/js/core/youtube.js",
    "revision": "ba29baa4e71954cf52f06ebfb0defd7a"
  },
  {
    "url": "assets/js/index.js",
    "revision": "f41eca87fa86b4199377223294e7b837"
  },
  {
    "url": "assets/js/main.bundle.js",
    "revision": "76cc8d3163088a05c25dd1a2ef08602a"
  },
  {
    "url": "assets/js/main.css",
    "revision": "ebc6dc5d02a655932a4e7a016c8ddf40"
  },
  {
    "url": "assets/videos/HBmenu1.png",
    "revision": "811e05d43e9c331f752dd97e9c271dd1"
  },
  {
    "url": "assets/videos/HBmenu2.png",
    "revision": "d6fa4c050eacc3df39edfa231363031d"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.html",
    "revision": "4da6b6290045f5603bc47bd342d7ca6f"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.png",
    "revision": "358a910beea235a97b05e509a8dffbf6"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "b2f91c9e7c0e209e3bf0be1d131282de"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.png",
    "revision": "6601b681406ac9650ac5950b42a20d21"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "e0c3cafa2954bc80b4dba04e6d310e86"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.png",
    "revision": "7f33fdc22cb24445d0b306c1ff71e5c6"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "14eae1e39fd1c4e3fa81b3c8dd9b2e72"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.png",
    "revision": "66c65de7cd9239dbdfe3f7b6c4df691b"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "519c7bc191363fc9e6d5522adc70b9ce"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.png",
    "revision": "bd6b5f4253b21664272d9615d2b53741"
  },
  {
    "url": "blog/giveaway-rules/index.html",
    "revision": "20b3df5b9481924bc1b3e7d3a376c534"
  },
  {
    "url": "blog/giveaway-rules/index.png",
    "revision": "6171b8f719a5173ae1911848ae133113"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "bf8fd634c360d07b8eb5fcf451701803"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.png",
    "revision": "e05d085a0f21e0dc30944fda1f6e7aa7"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "add541541c138fa1347f6d4dabff9783"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.png",
    "revision": "e809b5d504566139ea96e133f239eabf"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "1edc0338d8a99808a8dca53eea88b37d"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.png",
    "revision": "50d55f9743e257ade75237ad9ec12069"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "b8896a104a2e89fdff6163698ac1d936"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.png",
    "revision": "472c5ba52e2184f83d58c6fe95ddebdc"
  },
  {
    "url": "blog/how-to-install-and-set-up-helperbird/index.html",
    "revision": "802466364c0aae8fb7aad00b69f25ea5"
  },
  {
    "url": "blog/how-to-install-and-set-up-helperbird/index.png",
    "revision": "472c5ba52e2184f83d58c6fe95ddebdc"
  },
  {
    "url": "blog/how-to-install-helperbird-in-edu-accounts/index.html",
    "revision": "8a08aff1882aa9d76de9bf44ae10909f"
  },
  {
    "url": "blog/how-to-install-helperbird-in-edu-accounts/index.png",
    "revision": "ee03370fc0338095fb4461174bcb05f1"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "76d518e051f10be882b46e4e7fbdd349"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.png",
    "revision": "c7682a65a1dde2a2f4b7bd0c33e8716c"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "26e4100184d60fab9e0d038d7f9171f1"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.png",
    "revision": "dfcf0f812ee0a87c0e6c47cf55a23ad4"
  },
  {
    "url": "blog/index.html",
    "revision": "7a7dea48278b37f9c4657c6109f687e7"
  },
  {
    "url": "blog/index.png",
    "revision": "d5a37d8d873b6f9c529b32249d428ab8"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "88808b9d1db8179ca5e59f2619531302"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.png",
    "revision": "696a84367af8df5c530ab25acdf260c5"
  },
  {
    "url": "blog/is-helperbird-free/index.html",
    "revision": "4f4bd2880c69392b521c56838a3c6a75"
  },
  {
    "url": "blog/is-helperbird-free/index.png",
    "revision": "d37a099344ed769b6f30705388aadc64"
  },
  {
    "url": "blog/is-helperbird-safe/index.html",
    "revision": "0ddf3333b7913280039f36010bb73f5b"
  },
  {
    "url": "blog/is-helperbird-safe/index.png",
    "revision": "d37a099344ed769b6f30705388aadc64"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "615ae49f37fdba223a1a2c79ccf8748e"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.png",
    "revision": "51b8ce3d86f0f1dc91a42002d2633041"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "04bb9a4d04a5df007891d5d780198824"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.png",
    "revision": "2867fdee0f29eb79ba04723f1aad8948"
  },
  {
    "url": "blog/signin/index.html",
    "revision": "23e42eb487eb1b8239ef4a901f0703d7"
  },
  {
    "url": "blog/signin/index.png",
    "revision": "e6436e54874dcb71660ab6df2d33be0e"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "8bc5f53e1902a6519181a3a193d25e31"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.png",
    "revision": "a0019fc5ee953a86ca69f4dd09affbd7"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "d3add821f959beb804896a0f0402bc8d"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.png",
    "revision": "e129ac86642a6ec98523d1b936ac835a"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "85eab8591469b3ecb9bffaa1284a0dbd"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.png",
    "revision": "8194ee15bfebd169c2955f57a12090ea"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "82bc08c08a4fec9f2b2b523024279ec5"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.png",
    "revision": "dfd9ba8e90d84a0245cf57ea502df883"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "1be40872f3ad6367c1e9771197387f95"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.png",
    "revision": "d084ddcf579bf5abcbfe74f2615bb886"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "3da306a1d75e5fc1825c5b1b14a110e4"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.png",
    "revision": "a8e12e56f055240d7fad30ae49cd08ee"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "68e73702d55e414cc63193900f14bf90"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.png",
    "revision": "577e7ae57786162328eefa178f52b325"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "a21c72af0d04d95eaaaeda810a2840e3"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.png",
    "revision": "7da69e2ce92533155355a95f7744b62e"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "98d57e1f8b18d12fbf72d35336013afb"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.png",
    "revision": "33cd5959f0c0b8433a88685b50670158"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "b051977880dca65cb9e66a04382ba169"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.png",
    "revision": "3afdf13f4c1f0126e7769dd1e725ec72"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "3da96ef798d9c3d1458afef83cdc5c05"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.png",
    "revision": "44e2c1235892146e86afcb5292e28017"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "a7f4a9f194f24ded5d6c5a7fa8adcdf2"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.png",
    "revision": "47b175ec47593888d121442cb2714efc"
  },
  {
    "url": "chrome/index.html",
    "revision": "7c29b0f970841fde613a94656b0a34c8"
  },
  {
    "url": "chrome/index.png",
    "revision": "ca8f5b93c7560ba818ef93b983728e33"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.html",
    "revision": "405bd712a1d1b4e6f31c29391b886f19"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.png",
    "revision": "ae8ef4de2710a13a3f418a6e0cb7ed81"
  },
  {
    "url": "compare/index.html",
    "revision": "bffb183c2a2b12df0ac5ce9b0baaf22b"
  },
  {
    "url": "compare/index.png",
    "revision": "fc0fdd37a340b1bd610ba78072ed2a67"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "b8d50ed5f94c3672b87cf3c24acc6c7f"
  },
  {
    "url": "compare/read-and-write-alternative/index.png",
    "revision": "fe8b2f3b1aacf9d1750d6a8563376e94"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "05426ec814c46d673cb7ac0e97e050f2"
  },
  {
    "url": "compare/snap-and-read-alternative/index.png",
    "revision": "77163f265dd53491b9599632e9f2dae3"
  },
  {
    "url": "compliance/index.html",
    "revision": "852a3f15942ca99967aa04194255b6c6"
  },
  {
    "url": "compliance/index.png",
    "revision": "17d037d1e6f292f919933e661f84f455"
  },
  {
    "url": "contact/index.html",
    "revision": "8de602dd6099f1c305154d4a289e1f6d"
  },
  {
    "url": "contact/index.png",
    "revision": "2e817873282134e94d2e4836b4a1206c"
  },
  {
    "url": "demo/index.html",
    "revision": "8eb8b93c28a280888e1ba466bc6c0c96"
  },
  {
    "url": "demo/index.png",
    "revision": "9449fd4ac8ac812fea306bff969b8af9"
  },
  {
    "url": "edge/index.html",
    "revision": "f057fc9f044ddfe8aff1703743368636"
  },
  {
    "url": "edge/index.png",
    "revision": "da5a3e4b8dc1965adc670b924ea86c52"
  },
  {
    "url": "edu/index.html",
    "revision": "546fc839f2a5861f231fb52b8fe5a50e"
  },
  {
    "url": "edu/index.png",
    "revision": "62146d2d31dcfaf26dff897cc6060992"
  },
  {
    "url": "enterprise/index.html",
    "revision": "8b61d73f2d65412265bbfe74eb2b61ae"
  },
  {
    "url": "enterprise/index.png",
    "revision": "2bd5aa43c4e62cfdbad972897f9dd304"
  },
  {
    "url": "extension/index.html",
    "revision": "fa4aeaa0f2b963b1635bc11277d292cf"
  },
  {
    "url": "extension/index.png",
    "revision": "09056a251791060e768ec0f65c6fdd12"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "d8f3470de8d411d55dfcdb40034d0f62"
  },
  {
    "url": "features/adjust-letters-and-words/index.png",
    "revision": "827bcfb6e5bfb5efacf17f8901781766"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "8929b0a3274c78403452d39f97cc9745"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.png",
    "revision": "c3ac3a70abf8f39f5ec03b2b6ac8c37a"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "0b9970d4b8e84f992ea765efece3b6f3"
  },
  {
    "url": "features/analyze/index.png",
    "revision": "72335dbf9499a1ed092d44b385a39b72"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "043b06b0e853b1f38b6c3b8e582f4803"
  },
  {
    "url": "features/annotation/index.png",
    "revision": "e2bab68d47aadead87ac07229631ec58"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "a40719361a0c014b20536a88c9e3eb3f"
  },
  {
    "url": "features/auto-scroll/index.png",
    "revision": "d027d945d3cadc297db8406f0cc4a797"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "08c58101002600fcb4e6d429447b605e"
  },
  {
    "url": "features/bookmarks/index.png",
    "revision": "9ae356a07f9538cb7fef21512e133037"
  },
  {
    "url": "features/cognitive-load/index.html",
    "revision": "93112f0cf56b1eeee5cbe7f61fde62fb"
  },
  {
    "url": "features/cognitive-load/index.png",
    "revision": "4a0ced1d7e20b0baa2d974e19fe0a7bc"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "c8192c0752ce8e50493323251e616095"
  },
  {
    "url": "features/color-blindness/index.png",
    "revision": "a5a19f8eac4d32059962b41e6e34b9c0"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "3cf0483e536acfb956acddb84be12013"
  },
  {
    "url": "features/cursor-control/index.png",
    "revision": "71a6d739ad01632039677fde6b509c9e"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "51440fd094b94291ee051bbfce692ea8"
  },
  {
    "url": "features/dictionary/index.png",
    "revision": "dfbb6c4d6174f39fc4515aa31223e8a1"
  },
  {
    "url": "features/editor/index.html",
    "revision": "175e18e857a4703f254eb214083c0cdb"
  },
  {
    "url": "features/editor/index.png",
    "revision": "1ec77cbd2ca76885c6245727ddc4fdd8"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "9917a3e945c7146470fc63a6b4dddc54"
  },
  {
    "url": "features/font-sizes/index.png",
    "revision": "3ad44ac485902ac8019766f1556149b5"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "de3e70e9a6b9084e54ca9e3690f807bb"
  },
  {
    "url": "features/google-translate/index.png",
    "revision": "786ecfbb62dd21a97b94e26709a14ddb"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "3da0937d4562d54a79bc1592f6dac2f2"
  },
  {
    "url": "features/gray-hue-overlay/index.png",
    "revision": "d0bbb8e90269b8babb7afae6f2ebf046"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "70963b330006b51e968dfe9010dea5f2"
  },
  {
    "url": "features/hide-images/index.png",
    "revision": "faad2149543a4cbfe057f29ee17d51d1"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "697975fd1f40e01bc7046e20bc7ff000"
  },
  {
    "url": "features/high-contrast/index.png",
    "revision": "fa3ba7f1976576ddd8307d0f3dbcea0f"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "d7163545c2170ece2f2a207f5c68554e"
  },
  {
    "url": "features/highlight-paragraphs/index.png",
    "revision": "11abcfe8d36dab310e01606a41f635f7"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "ba4139734ff6cf28c5e0e69f742f3772"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.png",
    "revision": "5a162c6b21019fbd1a107011d235601b"
  },
  {
    "url": "features/index.html",
    "revision": "c3319b34f4d0c6e0b86d05866d0c301d"
  },
  {
    "url": "features/index.png",
    "revision": "794ff91209ba924c2dc98bef956fd9cb"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "59f7760ef49fb3d5744c9f07e51b355a"
  },
  {
    "url": "features/mute-videos/index.png",
    "revision": "c111d336e09f7459f983c404b6069384"
  },
  {
    "url": "features/notes/index.html",
    "revision": "81d6fabb7805abb7f7dd667195cb2847"
  },
  {
    "url": "features/notes/index.png",
    "revision": "97349414af6e4806ecb4a0cbd28acef2"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "3410d52f5542434acf2a72e5ae4e89cb"
  },
  {
    "url": "features/optical-character-recognition/index.png",
    "revision": "d6502356edd08615ffd1d7ee5ec3670c"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "5f83e6fa754ce932d749a97a059f7719"
  },
  {
    "url": "features/overlay/index.png",
    "revision": "8ba2106225f997ce5af4374849870a65"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "d5bf4bc5edf1b184873ced5799ccd5a7"
  },
  {
    "url": "features/paragraph-widths/index.png",
    "revision": "7fa7675422606c138c0b450d3a1c1a3e"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "921c85587bc2592af28689089536047d"
  },
  {
    "url": "features/pdfs/index.png",
    "revision": "85c5da0e3ee00655d2b42b2cfc9fc212"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "dbbc1a8f1a3c0e934096676932cb38de"
  },
  {
    "url": "features/printing-tool/index.png",
    "revision": "bcbf3429152c61d1eafa7c482337de6f"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "15ff7a92d02150dbd632a0db22d88acb"
  },
  {
    "url": "features/privacy/index.png",
    "revision": "7acc222456e17b8c4a2bc91aa0a3dc49"
  },
  {
    "url": "features/reader-mode-for-chrome-and-firefox/index.html",
    "revision": "a7c195cb31e629d3cd11e90ee95f9841"
  },
  {
    "url": "features/reader-mode-for-chrome-and-firefox/index.png",
    "revision": "486803888f57cbcf66c16ae233cbf4d3"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "cc3645e0d9aaa37c21f3a54efba0d626"
  },
  {
    "url": "features/reading-guide/index.png",
    "revision": "048682e79fdf50fa74973a046cfe98be"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "311d24554b19c52172361d14027916c7"
  },
  {
    "url": "features/ruler/index.png",
    "revision": "051a9997fb93202cc64a9e4779b27cba"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "7a275d936588e5c1fdd360aa6d5b3ecb"
  },
  {
    "url": "features/screenshot/index.png",
    "revision": "5dea251e2a70336e92bbb801963fea13"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "25cb216fbd7016138311fa51fb3c167d"
  },
  {
    "url": "features/shortcuts/index.png",
    "revision": "62a3060789ecb9e36095a0fa801831aa"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "d23a5a247b4caae9d6fafc5511ab5e48"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.png",
    "revision": "ddf0377744a6b2dccd8afbf2334ea18f"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "c9a8de6f6fc500e66be426136e9bb5f4"
  },
  {
    "url": "features/speech-to-text/index.png",
    "revision": "d99a22895c4bc282d418db02b9abe95a"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "d0313d72e23c91d4b548fcf288206158"
  },
  {
    "url": "features/speed-reading-extension/index.png",
    "revision": "aba012cf3353ca1c350d2d39347e5b5e"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "69dd4f82a5f0b461314da540848596f0"
  },
  {
    "url": "features/spell-check/index.png",
    "revision": "9b5c2a91ebfdc63f4d8fffaff4112453"
  },
  {
    "url": "features/styles/index.html",
    "revision": "8deb550bb00b77f9d1ddb328912b370c"
  },
  {
    "url": "features/styles/index.png",
    "revision": "fa7bef5c412acadd7632c745c4e798ff"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "10b84bb06cc146d4de77f4bc932cf60d"
  },
  {
    "url": "features/summarizing-tool/index.png",
    "revision": "e690fdf044f3c123c215127609e0e019"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "1f549781ca9976bff09f0fbc59f40df6"
  },
  {
    "url": "features/text-align/index.png",
    "revision": "10c3da111eb136806d204be192c3b8fc"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "a12675dfaf5a2574f1a06912b5082a58"
  },
  {
    "url": "features/text-to-speech/index.png",
    "revision": "6e080d5175eb2a8f043794b496d04ebb"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "361e84830e11366edb05063df6b7669c"
  },
  {
    "url": "features/word-prediction/index.png",
    "revision": "90f8b2f524046338a5d75ca48e0e1e67"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "36b65a5eb5725a9a5ab113bb7bf633be"
  },
  {
    "url": "features/zoom/index.png",
    "revision": "c6f7c16e6ff3bd36bd7b6ba3154d5fef"
  },
  {
    "url": "feedback/index.html",
    "revision": "4f1d2c723c76a1069a3e8d3e206e566f"
  },
  {
    "url": "feedback/index.png",
    "revision": "28f701539069aeca6ede925e09eec19c"
  },
  {
    "url": "firefox/index.html",
    "revision": "47dac4ba0df84d19f97508205ecca8d3"
  },
  {
    "url": "firefox/index.png",
    "revision": "0a40618561f72717cf127fe7f4f0234b"
  },
  {
    "url": "googlea4b2e0ff05c168d5.html",
    "revision": "da84e880591336874cb2e7ce330fa6c0"
  },
  {
    "url": "googlea4b2e0ff05c168d5.png",
    "revision": "ed4547add0de8903e972af6f6a43116a"
  },
  {
    "url": "guides/index.html",
    "revision": "68ffb4ce511368d7e59f7d179339d5f6"
  },
  {
    "url": "guides/index.png",
    "revision": "ed4547add0de8903e972af6f6a43116a"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.html",
    "revision": "cf7947fce3d7711d6d414ab64cb02063"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.png",
    "revision": "6aa6d0126431d8eda9fa9541ec965e1a"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "2cbd19845f7908eb3f60e157bd5ca035"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.png",
    "revision": "199a1a8b7e03280a3ff1a4c2208b7b69"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "8b745df988b83e3a2661cc966fc5f508"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.png",
    "revision": "12e004eefd3ef173c30cf30aadd2c150"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "de75476ca330ae38173cf8dfe631cef4"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.png",
    "revision": "2e7ff5b21714fd56ba416e4d02d9c931"
  },
  {
    "url": "help/how-to-add-a-cognitive-load-to-text-on-any-website/index.html",
    "revision": "b2817625ccbda5061bea7c8e2fac7048"
  },
  {
    "url": "help/how-to-add-a-cognitive-load-to-text-on-any-website/index.png",
    "revision": "aba012cf3353ca1c350d2d39347e5b5e"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "5a3d923b163ecffdd29c112e6ed47350"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.png",
    "revision": "170085f68b374c686dfc7cd3bededc51"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "755f068d18f697fcf401ef5da9e77121"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.png",
    "revision": "b0eaa7b8a5b30a046d30a533f15877b9"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "cce1d6c7e8f1048aafbd9249465363b2"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.png",
    "revision": "5e8098bda8572a90f6de558a8e67a3e3"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "e77aab78fd7b75397d337a7cbbaa7f1e"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.png",
    "revision": "492e601691dd1c18fe37ebcb2fee8c5a"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "6a616282c5fdb7f31569a0c9a5ac1e3e"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "18ed4e34fd6fa4049c96fa032a0e8de6"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "5cd0477ba39ae9e42bbe66296d21ee6a"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.png",
    "revision": "97d0f06f1d87d0aed704d5dbd85bd84c"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "2241251920ec1e364758885b0fc3590a"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.png",
    "revision": "67c4f68331761640b9762f86aac1bfb5"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "afcfa04d537452437d254185d76d917e"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.png",
    "revision": "58257927fd5f00196204e6243a8eb6db"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "8984b662859d25e4be42d084977d025b"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.png",
    "revision": "25157c2e823da550a675ae8d23de5f31"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "eb9597237b1a8858c9e91d6181ea2ece"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.png",
    "revision": "0b78fbc4a578bfc68c02a8e8164a2a45"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "aa7117c7d801ba879de0a458dddfad89"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.png",
    "revision": "3ad44ac485902ac8019766f1556149b5"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "24a1b52c9d7f813f67c420c13177f8fc"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.png",
    "revision": "08e3bd75838c23cfce463f244fa91303"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "6b131ef999b23ae1a8277f7b1a806efd"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.png",
    "revision": "86613b49973fc8b67ae863245c2fc666"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "edc65f6c8e76e63b951677d4f22dabd9"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.png",
    "revision": "c84d79a6e49b9ba2091590afcfddc037"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "36b28d969ad61c184c6d5904a8c402ea"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.png",
    "revision": "bf7bed3e823eee87ffdccadd38cb46ab"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "4742f4d9f4813203db087dcc6ff85a56"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.png",
    "revision": "08e3bd75838c23cfce463f244fa91303"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "4a6a97fa0a0d8c54f43bccb6215c5b42"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.png",
    "revision": "10c3da111eb136806d204be192c3b8fc"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "1f1ecf917f0454c9de183cceac79d641"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.png",
    "revision": "8a34dd121d9cd373a96e35b969b7f582"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "98e6cdd48a8666c26db900cf2b4e17cf"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.png",
    "revision": "d7e094b08ba0b0c05379b08351505789"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "3b86e9187c944beabc467edbbc716fe8"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.png",
    "revision": "4ae91f3355516f0828b48a009f7f2459"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "3508f7bcab1067cb63ac89d21b0c9249"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.png",
    "revision": "7cd2b2c2374364bc7714d2bb721fadcf"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "945f775a6e7562687e6d3dd7bf61d09d"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.png",
    "revision": "ec22566584180e96fd09e2a88678247d"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "87b91a9866ecbd6028c4d11043cbb578"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.png",
    "revision": "71d42f2313520fdc69a23fa38c28da1b"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "ad1ffbf05f2d62fa6b92b68a7677fb99"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.png",
    "revision": "911551b04e7704caf857e237864d2cbd"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.html",
    "revision": "aef7e17df11d0eddd3a22cb4463216ff"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.png",
    "revision": "a4ffa6483a060be076bbe47bdf5e2fb9"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "9328acc6a62e1068c8f369cb62920e02"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.png",
    "revision": "a9fe0a534b3a95d50bbfaa53642d9f0e"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "5143e39447dc7928561bb1138c9f3374"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.png",
    "revision": "11abcfe8d36dab310e01606a41f635f7"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "0cad01feec99479ac9d0f0c1e6fbce55"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.png",
    "revision": "0ede05f714c1bbb7dfb22918467692c8"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "c0fbfb9b941f4e42254ff89620f8781d"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.png",
    "revision": "392912c6f3967fe0ee227fe89b5d6df1"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "8fe3a8f25597f770bdb92dedf5eb5fe1"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.png",
    "revision": "fc2d7661901258b22078895ffa5f901b"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "a4abd5b2246f1b548d71cb1def8865be"
  },
  {
    "url": "help/how-to-pause-helperbird/index.png",
    "revision": "b5b2c59f40017b05a348fe2b1c042a91"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "e53f8f042ac0e4fa4adb3d0ea4ac4d65"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.png",
    "revision": "59b80c54f37ad6d54c2f68b640eae46e"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "0efa58c971700e0a921db03124ecbf1b"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.png",
    "revision": "d9e7b329ea79d4bc4b604fed3275fa1f"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "348f6d27a87b04090fbcec7ece6bae64"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.png",
    "revision": "a9925433c949d614072390439054da59"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "e2f6b8f7ad7373e9fb6ff798fd175e2f"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.png",
    "revision": "6d87390619f751db7e647f4a5f35db1f"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "1a65278a010267cef82e3cb822c11b7b"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.png",
    "revision": "e7480029dd38447313b8e31a9d7b92cb"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "77d1acd60ab4d0f9e941cdbae7378eff"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.png",
    "revision": "4abe8a5677b9a4f9b6cefa62b9a1baa1"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "fa8e062f8e40d189bc043f93c83e8110"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.png",
    "revision": "786ecfbb62dd21a97b94e26709a14ddb"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "40cc2dc9eb2689130ad66d5228cf3136"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.png",
    "revision": "e9ce5df037491725153f5a59cc4d3469"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "83ba94eaec01dcc42dc1b5f8942b0c9e"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.png",
    "revision": "96f09bf8f89c8a82107d751c09603b7d"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "5705747c8f1bf90c398ec33c6c23d991"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.png",
    "revision": "f8d83b09a0ca4c2ade77bf87a9fd7e51"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "7cca7ace2cd6448a821ab3a1b5bbab57"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.png",
    "revision": "048682e79fdf50fa74973a046cfe98be"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "62db3afcb3d2badec54b614f30ef1ad0"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.png",
    "revision": "647cee866f54ced28a38fd2bcec020be"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.html",
    "revision": "71d31e884f8cc6a11cf20c757c68dba1"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.png",
    "revision": "e6ef3f5262e090798e4388d859a3b87c"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "d59b839731a3a3af0080bdef921b0d0f"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.png",
    "revision": "ee33a0d1b3e3f92be0e4cf4bd56743dd"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "b4084d4d9480c4cff2143d447cd14f54"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.png",
    "revision": "fa3ba7f1976576ddd8307d0f3dbcea0f"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "96b698c438946fe5d9de40b9228c59b1"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.png",
    "revision": "9ae356a07f9538cb7fef21512e133037"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "15ee5dc03e9011664f0d47b470b0caec"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.png",
    "revision": "e735cbb388d520ad270bda2068a19f6e"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "c93a5a1e0940e96f7bef9019c47987b4"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.png",
    "revision": "bccaeb94cf2e13363c6bbd34b1f5df14"
  },
  {
    "url": "help/how-to-use-reader-mode-and-remove-ads-on-any-website/index.html",
    "revision": "8b8363704b4e3d0549ce65ddba782d31"
  },
  {
    "url": "help/how-to-use-reader-mode-and-remove-ads-on-any-website/index.png",
    "revision": "486803888f57cbcf66c16ae233cbf4d3"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "9263be75b90ee95ae63096abaa22d2b5"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.png",
    "revision": "d99a22895c4bc282d418db02b9abe95a"
  },
  {
    "url": "help/how-to-use-speed-reading-features-on-any-website/index.html",
    "revision": "3891fdc84b4a812869717aaa375dc111"
  },
  {
    "url": "help/how-to-use-speed-reading-features-on-any-website/index.png",
    "revision": "aba012cf3353ca1c350d2d39347e5b5e"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "45031cd0cbedd55f1fe1adbbce130540"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.png",
    "revision": "776e7ec9818f3351d88f28aff04064a0"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "30ce0e9be7b6a6a643ff9c3856b8b74e"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.png",
    "revision": "85c5da0e3ee00655d2b42b2cfc9fc212"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "970b122e170227206e89cfc84b8d5a2b"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.png",
    "revision": "2c369175143b64b90fa3c79a3ad6bf83"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "a8bf2e8a15f7f61a8a631799e2dd523d"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.png",
    "revision": "61b960ffce947aed172baefbbd015a23"
  },
  {
    "url": "help/index.html",
    "revision": "ae3b24d7255c7b6b24e1cd6dbecf357d"
  },
  {
    "url": "help/index.png",
    "revision": "c91577cdde5330fb9146a63120bea377"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "48805fe478ef9ed2db4e1aca472decb0"
  },
  {
    "url": "help/installing-helperbird/index.png",
    "revision": "b99f333839f7cec31d3dc4d57dfb075b"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "84f511aa2b0d4ceabaa5ecde8a47f53f"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.png",
    "revision": "af48d52caef445264aaba34f3e01c7ea"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.html",
    "revision": "949310aeee3dbca01c85cdbba12db606"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.png",
    "revision": "65ed249c814846c489fa232a4e882de8"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "b23fddc4ba6ef24eb1877c1681458f73"
  },
  {
    "url": "help/what-is-helperbird-free/index.png",
    "revision": "ae4327c940f0d208865292c69c9425e7"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "552de5dbec0a2759c9249251c7519b4d"
  },
  {
    "url": "help/what-is-helperbird-pro/index.png",
    "revision": "2198b79c0e12da9725f128fa47a2b2b1"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "e107f346b7725899dc1d43e4f94f1e9d"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.png",
    "revision": "1a4dddb7384f778ca40538e87a6bf27b"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "e42d0f8902ac670e02a832eccaecb429"
  },
  {
    "url": "in-the-news/index.png",
    "revision": "12236078233d5423b8f281666d3b474a"
  },
  {
    "url": "index.html",
    "revision": "cb800aa0f9d170a411aaa53025bc71c9"
  },
  {
    "url": "index.png",
    "revision": "6c4f55d91b1f3675eec7136d021b2166"
  },
  {
    "url": "login/index.html",
    "revision": "02bf0c1e02b9e558577da05b5cc27a8c"
  },
  {
    "url": "login/index.png",
    "revision": "9e679d9d644bd4bad5cd3d00a285a116"
  },
  {
    "url": "order/index.html",
    "revision": "1b8c47fa9d467ed08710e800f995e3da"
  },
  {
    "url": "order/index.png",
    "revision": "6455b2221e9ed7a08c0621f3928a5536"
  },
  {
    "url": "partners/index.html",
    "revision": "db0ad1566c31c2c0998bd7567d5eabdd"
  },
  {
    "url": "partners/index.png",
    "revision": "8ee9df1e9ed2bee74121cdd24bab62ec"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "fb03a5d6a83651bb502d694cbaceebfd"
  },
  {
    "url": "partners/sascharoos/index.png",
    "revision": "234b307c9936edf58e8022795e2c0e3c"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "c4a61604e6ea461f189c85d139c15b38"
  },
  {
    "url": "partners/sprialisconsulting/index.png",
    "revision": "3e152eef92dd9f93a06c5eb42c0ed499"
  },
  {
    "url": "pricing/index.html",
    "revision": "853b3492c73c27e4a164f65beb08cd24"
  },
  {
    "url": "pricing/index.png",
    "revision": "a59bf6efe39408cba06e4f69477770fd"
  },
  {
    "url": "privacy/index.html",
    "revision": "afb8cbf90726fae8d19b293e2aaccce0"
  },
  {
    "url": "privacy/index.png",
    "revision": "fb0e54b2c9804b51a1d601cd1630a6bc"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "6384ec82d950f0da600b368227041a74"
  },
  {
    "url": "products/google-addon/index.png",
    "revision": "f0b9d82438a15683a911dd32da0a31bf"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "1db2391db80482f0fc335cddf0415d9a"
  },
  {
    "url": "products/ipad/index.png",
    "revision": "837d9454f5c8324d3fcd6ed73b773996"
  },
  {
    "url": "refund/index.html",
    "revision": "08e04430d15c67d4794aa9ff94c08a1b"
  },
  {
    "url": "refund/index.png",
    "revision": "96fa76fc098f6c39631cfbb40f6effe4"
  },
  {
    "url": "reviews/index.html",
    "revision": "f683437a54d2cb266e8bd679e418bf47"
  },
  {
    "url": "reviews/index.png",
    "revision": "18cd96a5bd9fb2a82f4b8aa2f60212a0"
  },
  {
    "url": "sales/index.html",
    "revision": "4940e2d53d7027b98e6f402194860cb5"
  },
  {
    "url": "sales/index.png",
    "revision": "b8627be280f1ee14f7fbae82b336da95"
  },
  {
    "url": "security/index.html",
    "revision": "5f205cb98c2d4dbaca5f3d94b1be1a2c"
  },
  {
    "url": "security/index.png",
    "revision": "7b1c64d1a17739ad811719e387c38ed6"
  },
  {
    "url": "sitemap/index.html",
    "revision": "e860b70bffbde784ebdbe6d2cd5b9e86"
  },
  {
    "url": "sitemap/index.png",
    "revision": "0f6f7033f422130d9a1d41d61883b08d"
  },
  {
    "url": "success-education/index.html",
    "revision": "ab206756288a458c92a1fb9a06af048a"
  },
  {
    "url": "success-education/index.png",
    "revision": "b64442fe92b4a939fe40771eb1426c40"
  },
  {
    "url": "success/index.html",
    "revision": "08deefb40b6d82f6c551aad6af106069"
  },
  {
    "url": "success/index.png",
    "revision": "04e987b305df7cf375cae862d4182858"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.html",
    "revision": "ab303d450299bf13ccac86f3dd029d84"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.png",
    "revision": "8e3a06ee910b38cfc9503e14d377333b"
  },
  {
    "url": "support/cancel/index.html",
    "revision": "9ae64a4fa5d518539e6fd18d2f0758e1"
  },
  {
    "url": "support/cancel/index.png",
    "revision": "2b633c412268ba9f3dbefbc45e782af5"
  },
  {
    "url": "support/how-to-annotate-any-website-or-pdf-with-a-browser-extension/index.html",
    "revision": "2be3822c3885248f1e2155208c2c0a77"
  },
  {
    "url": "support/how-to-annotate-any-website-or-pdf-with-a-browser-extension/index.png",
    "revision": "57d3bcbca55f149523ef7800fb9674ec"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "4a3ce006af41a8ff559d047aeedd890d"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "2b633c412268ba9f3dbefbc45e782af5"
  },
  {
    "url": "support/how-to-change-my-email/index.html",
    "revision": "5902081176b5ce277d3aea43fa5f0f8b"
  },
  {
    "url": "support/how-to-change-my-email/index.png",
    "revision": "ca01b3913c9fef09485f89c61738f24c"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.html",
    "revision": "872431a53c624f5ec10de53cab3d9d53"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.png",
    "revision": "9e679d9d644bd4bad5cd3d00a285a116"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.html",
    "revision": "cedaba60d32b6ff04449586d0e543cbc"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.png",
    "revision": "f3c128f061ec38df2068b2b5dfd702d6"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.html",
    "revision": "fa691055bcc1f987cba812a70111590f"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.png",
    "revision": "5ce4c800bac028053c53797967cfb712"
  },
  {
    "url": "support/how-to-use-reader-mode-in-google-chrome-firefox-edge/index.html",
    "revision": "507ed0c277d90eaabea8e0c0956e7bf0"
  },
  {
    "url": "support/how-to-use-reader-mode-in-google-chrome-firefox-edge/index.png",
    "revision": "b654146417375efb48a09811e889071d"
  },
  {
    "url": "support/how-to-use-reader-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.html",
    "revision": "c6af76783e513c460e230a345392def4"
  },
  {
    "url": "support/how-to-use-reader-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.png",
    "revision": "5e215f891aa381f51442d8635f697ba9"
  },
  {
    "url": "support/index.html",
    "revision": "546cdee514d9bcd6cd601b03a6f94678"
  },
  {
    "url": "support/index.png",
    "revision": "2adb35667bb5799187c1dd7c56aa59e6"
  },
  {
    "url": "survey/index.html",
    "revision": "19395dac06b776c95edf9894af769e83"
  },
  {
    "url": "survey/index.png",
    "revision": "c7c38b05c746da92e7cd26b5e5c91718"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "70bb764e4ea19847bd3759e940b1cb9f"
  },
  {
    "url": "terms-of-service/index.png",
    "revision": "82b14c47549754e1221dc1ee24a0acba"
  },
  {
    "url": "testimonials/index.html",
    "revision": "5c9cc6336685d08f2629900dc9c9b952"
  },
  {
    "url": "testimonials/index.png",
    "revision": "d3d7f41a36798455ecdefbd55d932e05"
  },
  {
    "url": "tutorials/index.html",
    "revision": "461a1cfdd37258613ac6dbb2ed948488"
  },
  {
    "url": "tutorials/index.png",
    "revision": "a9e64d3ba105ff0701f6dc21286a78e5"
  },
  {
    "url": "updates/100-0-0/index.html",
    "revision": "57e71d657fe3073f0e9f3587f9b397b7"
  },
  {
    "url": "updates/100-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-1/index.html",
    "revision": "8d5646fa55ef39e475febe024cccc6ac"
  },
  {
    "url": "updates/100-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-3/index.html",
    "revision": "a60e9509403877bd3c5acb9f52a48959"
  },
  {
    "url": "updates/100-0-3/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-4/index.html",
    "revision": "aecbe4c0a650c2a82946a4642c0547aa"
  },
  {
    "url": "updates/100-0-4/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-5/index.html",
    "revision": "a5d4f304cf6f6293e97fb9cb953aa912"
  },
  {
    "url": "updates/100-0-5/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-6/index.html",
    "revision": "cd0c0d8c2b520d534cc16de35ac3b55f"
  },
  {
    "url": "updates/100-0-6/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-7/index.html",
    "revision": "e7a359cdbc9a90d0bacc75a0877aac95"
  },
  {
    "url": "updates/100-0-7/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-1-0/index.html",
    "revision": "ec5090fa93ed3c1e1de262abc6dc1745"
  },
  {
    "url": "updates/100-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-1-1/index.html",
    "revision": "275278d193378fcd22d3718598637cd8"
  },
  {
    "url": "updates/100-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-1-3/index.html",
    "revision": "a8a253e4f1b06b00b64f272cc288d8cd"
  },
  {
    "url": "updates/100-1-3/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-5-0/index.html",
    "revision": "73a9a1c6a16c983bba183914eedbf6e8"
  },
  {
    "url": "updates/100-5-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-6-0/index.html",
    "revision": "3171916b3532cd8977becda711caca45"
  },
  {
    "url": "updates/100-6-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-6-1/index.html",
    "revision": "6e67210a6d46b774cfb72cc3b6e433fb"
  },
  {
    "url": "updates/100-6-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-1-0/index.html",
    "revision": "6de6b01e8cba475fc108b3abb94c236d"
  },
  {
    "url": "updates/24-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-1-1/index.html",
    "revision": "1ced5c1254c06799df95146b19de24cb"
  },
  {
    "url": "updates/24-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-1-2/index.html",
    "revision": "3e88aad06a1bd80b88a01bf4a7c7e69a"
  },
  {
    "url": "updates/24-1-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-2-2/index.html",
    "revision": "78b2a84b9ecfd4bf8338f47dd34a24e7"
  },
  {
    "url": "updates/24-2-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-2-4/index.html",
    "revision": "b6d8bf897d9f4af6daecefa8329fda49"
  },
  {
    "url": "updates/24-2-4/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-3-0/index.html",
    "revision": "356f99ca7c4fd1bccd2d54e12777cede"
  },
  {
    "url": "updates/24-3-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/25-0-0/index.html",
    "revision": "57e839e935d6edd4e81380b0298b8e0e"
  },
  {
    "url": "updates/25-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/25-0-1/index.html",
    "revision": "198102e10fa484931d6018e145ffd850"
  },
  {
    "url": "updates/25-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/25-1-0/index.html",
    "revision": "6a70cf8b5a0140f17212c31be1d188c7"
  },
  {
    "url": "updates/25-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/26-0-1/index.html",
    "revision": "b9a9e3f66f2aeb5bf3b17cdf9ac68037"
  },
  {
    "url": "updates/26-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/26-0-2/index.html",
    "revision": "6e4353436774352e8e4334e5664975ba"
  },
  {
    "url": "updates/26-0-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/26-1-1/index.html",
    "revision": "0b231c9b0e9f455a432183535f06abbf"
  },
  {
    "url": "updates/26-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/27-0-0/index.html",
    "revision": "955111bd3cfe7703a8cf76dc026994a0"
  },
  {
    "url": "updates/27-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/27-1-0/index.html",
    "revision": "c7e9703b5cce16446aa131ac417418e5"
  },
  {
    "url": "updates/27-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/28-0-2/index.html",
    "revision": "da33eb28514bca72c24ec87250768636"
  },
  {
    "url": "updates/28-0-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-0-0/index.html",
    "revision": "6840298293ec67c29ebae94c24a31df6"
  },
  {
    "url": "updates/30-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-2-0/index.html",
    "revision": "9d5c63b40922b059a38ced77842826ee"
  },
  {
    "url": "updates/30-2-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-3-0/index.html",
    "revision": "6f926a27312af41e159f705dc3ae108f"
  },
  {
    "url": "updates/30-3-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-4-0/index.html",
    "revision": "6945e029cc2ab4f9f1052d1a8691d417"
  },
  {
    "url": "updates/30-4-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-5-0/index.html",
    "revision": "31854371fa5ef9c0b12f828f170cc58f"
  },
  {
    "url": "updates/30-5-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-6-0/index.html",
    "revision": "c94b2247e511d10c2cf027350f44897e"
  },
  {
    "url": "updates/30-6-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/31-0-0/index.html",
    "revision": "feffd0ce37ff6ee80f737cf1df39f72a"
  },
  {
    "url": "updates/31-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/32-0-0/index.html",
    "revision": "a987ca449c6f998d3c926fd39e86c470"
  },
  {
    "url": "updates/32-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/32-1-0/index.html",
    "revision": "3c8f6023e0e5e9b93f613231f2d09080"
  },
  {
    "url": "updates/32-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/33-0-0/index.html",
    "revision": "d3e3e3de0982a6dbe7746843c4f4ae6f"
  },
  {
    "url": "updates/33-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/35-0-0/index.html",
    "revision": "0fd29f853b44182c22a839f018a43f4c"
  },
  {
    "url": "updates/35-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/36-0-0/index.html",
    "revision": "e80731836ffee1b8d6a822d5156046f8"
  },
  {
    "url": "updates/36-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/36-0-5/index.html",
    "revision": "d345f14d91e03c9ca2ab25561181720d"
  },
  {
    "url": "updates/36-0-5/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/40-0-0/index.html",
    "revision": "3701fabf3b3b96ee09a0b66be00d5903"
  },
  {
    "url": "updates/40-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/40-0-1/index.html",
    "revision": "7f17a938be181ba795c2d6a99c5e0189"
  },
  {
    "url": "updates/40-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/40-1-0/index.html",
    "revision": "1c04a537c0129fe64485565b415eda3a"
  },
  {
    "url": "updates/40-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/50-0-0/index.html",
    "revision": "0c75bad97251c847b03e989b4b1d98ba"
  },
  {
    "url": "updates/50-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/55-0-0/index.html",
    "revision": "82957deba5b35d34026bbd405d7300ca"
  },
  {
    "url": "updates/55-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/55-1-0/index.html",
    "revision": "37f9b7bbf0cbbe2cf1f9f9fbf42e0b60"
  },
  {
    "url": "updates/55-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/56-0-0/index.html",
    "revision": "056870f2b0c962ab4b6f8e6756a80081"
  },
  {
    "url": "updates/56-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/60-0-0/index.html",
    "revision": "9d4f8f3eea8a9b39e402b9b4e96e371c"
  },
  {
    "url": "updates/60-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/60-1-0/index.html",
    "revision": "7a126d7285ae2eb7ab8d683ca0ecb35f"
  },
  {
    "url": "updates/60-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/60-1-1/index.html",
    "revision": "24d1b01ffe7764487348dc4cd42649c2"
  },
  {
    "url": "updates/60-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/61-0-0/index.html",
    "revision": "618ce8cc3e3a60753746c84fb5a1820c"
  },
  {
    "url": "updates/61-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/70-0-0/index.html",
    "revision": "e6f5a0a2b3e88c9ad96818ad2d51a7e4"
  },
  {
    "url": "updates/70-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/70-1-0/index.html",
    "revision": "10b608e3f6775052adfa56489263d837"
  },
  {
    "url": "updates/70-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/70-2-1/index.html",
    "revision": "3f2f0adb681fa3f0b8db9f72b66a66a1"
  },
  {
    "url": "updates/70-2-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/75-0-0/index.html",
    "revision": "fea7da5adc87bd26030d5ce90cb6e8e7"
  },
  {
    "url": "updates/75-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/76-0-0/index.html",
    "revision": "f5cfe4838495af4be2e541542c825836"
  },
  {
    "url": "updates/76-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-0-0/index.html",
    "revision": "cd6b79bb2c596215c0ab1b5ce9a0e855"
  },
  {
    "url": "updates/80-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-1-0/index.html",
    "revision": "38bb844e361f30f8d9e036ea0fd0495c"
  },
  {
    "url": "updates/80-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-2-0/index.html",
    "revision": "267a7377c00dbf1b5ea6351d6a392a40"
  },
  {
    "url": "updates/80-2-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-3-0/index.html",
    "revision": "40c56aad5daf8b6cfc3ad652e5a109cc"
  },
  {
    "url": "updates/80-3-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-4-0/index.html",
    "revision": "f21ef335301d8d0bd4076c4c06a9c6d0"
  },
  {
    "url": "updates/80-4-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-4-1/index.html",
    "revision": "0f65f7ee5cfd1bd301dd49e94f4da131"
  },
  {
    "url": "updates/80-4-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-5-0/index.html",
    "revision": "d08f5003fe150e554081583da78efc03"
  },
  {
    "url": "updates/80-5-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-5-1/index.html",
    "revision": "36571a74a960e278438bdb0548146fc1"
  },
  {
    "url": "updates/80-5-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-0-0/index.html",
    "revision": "3d9d1ae5ad7172b7183330b614e9f77b"
  },
  {
    "url": "updates/90-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-1-0/index.html",
    "revision": "519c7599988306e0b7487831b821d24e"
  },
  {
    "url": "updates/90-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-1-1/index.html",
    "revision": "c5fb16de09133640409d4bfa9c48b7f7"
  },
  {
    "url": "updates/90-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-1-4/index.html",
    "revision": "035916940243786f83cd11aab5d14f0d"
  },
  {
    "url": "updates/90-1-4/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/index.html",
    "revision": "6f14b7fc9dd151621bf3410fe78748db"
  },
  {
    "url": "updates/index.png",
    "revision": "9834a3ed9aabb52a91d8669ccd461f9c"
  },
  {
    "url": "updates/kingfisher/index.html",
    "revision": "e8d00e96993ecde725abcc951a58f9d5"
  },
  {
    "url": "updates/kingfisher/index.png",
    "revision": "d5ff1f28d9234083debd0328da594199"
  },
  {
    "url": "welcome/index.html",
    "revision": "82316120d38c32c234dd10d6d73112ea"
  },
  {
    "url": "welcome/index.png",
    "revision": "7580f9fb19b34b4bf66d0076418ec2d9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
