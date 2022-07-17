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
    "revision": "9bfcb3f144b2250af9d81c5604fd809a"
  },
  {
    "url": "about/index.html",
    "revision": "937bf9bbf7d0edfaa4bad49d47278fd6"
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
    "revision": "5a3c29dc24bfa672f986e3b8419ada28"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "e52d3096c163a351a6d1f8148ecff824"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "7ab09ee0c32a23076fed6727855bec1f"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "20c0d83dfc8a019eb030755898a63cb8"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "aab003c09357345df89cd7b14be8bbc5"
  },
  {
    "url": "blog/giveaway-rules/index.html",
    "revision": "e399c2fd135441fd1d256de2114b7860"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "df477701e1265c658086411f0ebe1e31"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "b05b33cee5adba61aa84eca9e74eaf5a"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "284915bed8fab368048a4b556eb2aa9c"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "f73e890bd8608c15da7ec615f062ce45"
  },
  {
    "url": "blog/how-to-install-and-set-up-helperbird/index.html",
    "revision": "2235304de919c420777b8f545797bbfb"
  },
  {
    "url": "blog/how-to-install-helperbird-in-edu-accounts/index.html",
    "revision": "d9f9a600f80316b15dcb63386a5437ba"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "fe94b749624919ed10de155e19fddd86"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "491f271dff1de4f1642e69c2c13cd07a"
  },
  {
    "url": "blog/index.html",
    "revision": "0022149c543e1fdd3fe0aacaec5995d3"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "ed69f586f306c8ec9a41d71e798f6e6f"
  },
  {
    "url": "blog/is-helperbird-free/index.html",
    "revision": "17c534a3a61e50a98abfe3d3ff420b2d"
  },
  {
    "url": "blog/is-helperbird-safe/index.html",
    "revision": "21e0ba6deb58c382cd2990d8acef5cbd"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "eee6abad0e3b06051b5f3ed688962aca"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "7edec263887b3cf430aac05b54b4745c"
  },
  {
    "url": "blog/signin/index.html",
    "revision": "63d0353a6a5010522ea018d91c077905"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "5d2abc34517690297665b940b4e5e338"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "ff8481cad7ed3b3ce94f1d18b9ac4fe7"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "7cf199e1bb7505535e140410ac9a6c20"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "a84728919234630c188e08fc9610dc84"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "570415bb8c4779fddbed01a4f55ad707"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "d49189b8457737d18331e49616304e57"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "2907e83c0ffb851be5224034dd31cb76"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "173ca44040f062db49695999b13da7c7"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "d186abc0e67f6d146f62238b086ab42e"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "0c3b24d73e9518cc98cdb9a258a2b97f"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "bfad7193aef223ae1e62b20c75f30b51"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "764f7906412f8be147942189282233b5"
  },
  {
    "url": "chrome/index.html",
    "revision": "403e4717fc09fc2d17b80503df5856b8"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.html",
    "revision": "642c49e840520bbe6f730bf9233008d0"
  },
  {
    "url": "compare/index.html",
    "revision": "e669488686d065c2cb6b456f3f83029a"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "d24d774ec0c0f7d6d39838454d7f6011"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "9b1aef5dc8f279853f2bc80e1b158b58"
  },
  {
    "url": "compliance/index.html",
    "revision": "1911f32cd13f883c24d1165af784d17a"
  },
  {
    "url": "contact/index.html",
    "revision": "ce59baf498102a55d9c1d17b731b6f84"
  },
  {
    "url": "demo/index.html",
    "revision": "c09a43a61acffe8e7fa6ae2bbf25b69e"
  },
  {
    "url": "edge/index.html",
    "revision": "58027c9ccab766f9bd30a3c752b8e795"
  },
  {
    "url": "edu/index.html",
    "revision": "12c4d9b4d5ee31826021cd85429d36b2"
  },
  {
    "url": "extension/index.html",
    "revision": "5b88e283fea352c7c04110e5114ab7b6"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "d514ae6dacbbc5994df2132cb8f972c5"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "74430205440e254dbcde7c4d132e4d3a"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "a5de896171b36ca39a6d9810d0878d80"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "fad122e5775502249e0a1494d0227dff"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "039788485634af0c04f1dbcf6b68685b"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "7c882dcee01abd6773130b2cd96f6ea6"
  },
  {
    "url": "features/cognitive-load/index.html",
    "revision": "34ca452cf4f978f76374705fe576fb4e"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "20fbabafb6c4f79dc0a44b59a8fcf58e"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "d673dd6dde99e793c79f4aa2c4ee5440"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "743e5bdcd2d5dd6fbfbe821eef823572"
  },
  {
    "url": "features/editor/index.html",
    "revision": "bc50465b067c442437973dfdaf921046"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "6117fb8afd93c6ba75d465dda8b9c1d8"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "0b9843eccc480a1190b24f23919c9aa5"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "236078ed8806b019fad1cb5c6c64f801"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "eab67e44d0abc4c70d158c4455d3948c"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "4468c255f991029adb1eb6416c33873c"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "e414952c036a9d36c86ce7b679fecd75"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "29d5efcc8bf56b45fd44cd631b035d5f"
  },
  {
    "url": "features/index.html",
    "revision": "d7abcf06f7aa7b54f032383402363c1c"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "3f80673c0d7665dbb3604f6a1b5dc627"
  },
  {
    "url": "features/notes/index.html",
    "revision": "4c3ab1db0d2eda5f78452995064a0e71"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "14c22e4450022ac45b22331541d767c1"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "a6d88869f0c6bedfcc70b5928888c86d"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "5d7d2cfb265d18091c27b34fcbfe26d3"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "2b9f252902833f5b3f8fd1984ea733b1"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "948599c3feaa516df5f91f33d3ae27be"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "9b00b4cb79c1347a5ce579db4c60b5e6"
  },
  {
    "url": "features/reader-mode-for-chrome-and-firefox/index.html",
    "revision": "ff8b3385f8eb5ee8071bf4ddf7926a21"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "7d38a6b97e97ba6e1142a3fdc12d614c"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "5c4e1d655649859605d16da2b022d786"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "cbdee1fc769f7cedad59545fe63f135f"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "713aeea5e192230f182bf2cdbaa060c2"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "0f509ccc3789a2bd9f7640d0a5433fbc"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "8765749ab1282f25b0660c9556d97b88"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "2430f9d433bcba3c28890434956d5d8f"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "477dd0572ce6a038a5c589957affff70"
  },
  {
    "url": "features/styles/index.html",
    "revision": "6663642a5516472a71cc834e762f85f7"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "15c69386b8948f10e016b19b2552fa2e"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "6d4d561911421c4df1dbed3ef7ad9e6b"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "ca8ad9c9c0f020c604042d2f20ff9691"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "678a184cdd59d6682e6959b69f338081"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "eb9342a9399b2b1d7b4fdbee3f084b40"
  },
  {
    "url": "feedback/index.html",
    "revision": "6ff10d0af90567b376b6a2befacc4d3b"
  },
  {
    "url": "firefox/index.html",
    "revision": "71544fe955508bb2e93797c0be559745"
  },
  {
    "url": "googlea4b2e0ff05c168d5.html",
    "revision": "da84e880591336874cb2e7ce330fa6c0"
  },
  {
    "url": "guides/index.html",
    "revision": "48b046a75e612e2f6677c647a24e15d8"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.html",
    "revision": "0771767eda9afd1d55c6c3e3d9a83e73"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "a34b029aa1dd80c49e9c34d7d60c4e69"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "e1d6ddf83ad3b7ee781d92686d686273"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "a8e0176b22df7ed12f42fea365c44380"
  },
  {
    "url": "help/how-to-add-a-cognitive-load-to-text-on-any-website/index.html",
    "revision": "e797c4c0f9a4856bb86067e31e65bb1b"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "d017915f6c8ea4ddf93a7545ed02f798"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "1aaae1b1cbc4a379d87e6d1bf8482ebe"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "9736f6bd805254598ec3cf8208d3c8eb"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "1bdceb985ccccaf875cd8707e6c8724c"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "3f376571a54958c479c36612e0fd7eec"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "2b5ee21ff5bc0ba2e0872e25231a25fe"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "f3a9955f5dc17883e087a67ee9e28031"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "94b6d8c11a52c6f29380c7c6f62ed7a6"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "2a3f6f0ecd5f14e28381e7511af03b3b"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "d13cd05c82b8d4dce66121b97ac19c9b"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "6026af9bcf1dad791535a1fe9a2cd79a"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "ad067806bcedc9e2b12901dc1ee46d7f"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "0b1331053547cbdf17dca64fb75680ee"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "023222ec3bf7c3ccf19c81ea86726892"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "0123a00b3b3590ed3c8482d9bc87834f"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "40e46c17e71df23ec77ea7c5db552cc1"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "b30b45cc1b327ed528f3a7f5461500d5"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "8407faba04717e5753988d88a63c3c37"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "cd3d109a03225e57ef9945c97d15b917"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "49686c658ad35939fff96c8611616e5c"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "8c3478e6ee1a7560d0939743d0802186"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "da77124a38d8c3ff8f5e48e52cae48de"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "59973a28d9f265f8719a27f63f5ac6c5"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "f13181e4f5df9b987cfd25b547c39873"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.html",
    "revision": "efa8c8a8c4096bcc6cfe6a6d4a3aed21"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "faae258532cbb2f27b20890a2883a79c"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "8fc9a9a0441ae3c5e93e47b4abf84b49"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "acfbaa584d21fc3ad7be20013b0fe0e4"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "e853ef16513897e56b92147cf69b68dc"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "a10264832b0c8f78ae22e565744f8279"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "602ec6fc6bff7bb3793e81fd01644b6d"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "2e1375a511584a113617372bacfda517"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "68d6f9c5eba5c300f63b0626db56bd30"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "005d72d7bba615baf24c73327eb3e347"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "d70db760b4db8495b57ea9d255f0565e"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "b3a87bb6c4f4503b9b99e324ca501fa5"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "27ae3c4031f539b52924c2f042716928"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "c32c2f27eba1aedfdc948532f5c7ce73"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "d37f6bcca9aad175b21851c702c3c7aa"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "d59f38bef2c792e71d0389d523af9333"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "63c03e01a6ff009ba21a2c96b87046be"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "0ba434e47db69a15e9341f4b531ee715"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "eebee2d20168598927c007d7cbc43568"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.html",
    "revision": "156343a8cf7dec5754bc5b883746e46c"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "041906ab493d4945658cebcf7c5d2d43"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "bdd5d48cb474dd5dcafa888266d66a3b"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "f8184c3e0308e10a319bd958e43407be"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "00bee15ede5dccf681b7defefeba8c5c"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "c4e03e1ec78829ba99fbe17ce2429229"
  },
  {
    "url": "help/how-to-use-reader-mode-and-remove-ads-on-any-website/index.html",
    "revision": "5bcfcb5134c3a519bfb4bd59b03a2983"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "00673639d3d7854a8d4e2f6d2c62be7a"
  },
  {
    "url": "help/how-to-use-speed-reading-features-on-any-website/index.html",
    "revision": "6b8d4cbbda31e3d78e37e949592c4dee"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "157f4c28e1eeb226330d5f2aec904902"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "a32598cca1ed53033237406741f0a075"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "5d2ce0d2192723dfd68153be7616f841"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "f1f636495c13bbaaffcad363e15645fd"
  },
  {
    "url": "help/index.html",
    "revision": "d0e068defa080c12eb5f749f8544a203"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "46c0de5c2cb45310558dda5f748269d3"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "2d3867bd522fff250e95bc83ab696aa0"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.html",
    "revision": "c4ba99ee85b9480b0f2f4129763195b5"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "a92b45d6c58be3ede80ede5eb4ceb7fd"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "3b4ebe8e876ba9784401a8dcf8de3f87"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "6a3549117f9e1c942c70f35f0c76f7a2"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "70af84de18621f3ed493b29e78bb197e"
  },
  {
    "url": "index.html",
    "revision": "ea802adf9eba10e1d4aea3dfcbc7e227"
  },
  {
    "url": "login/index.html",
    "revision": "dd476539b3f704c1d1b7b7cbadfbea3b"
  },
  {
    "url": "order/index.html",
    "revision": "827679e2b55b008558956e8cc34c17c0"
  },
  {
    "url": "partners/index.html",
    "revision": "7cc8e2461a8c26136a521dd2f0f25b3a"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "035c1d1550a3b685b0c6fa4451c44551"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "c813302ea21831061ef2a0e9a7c50ee6"
  },
  {
    "url": "pricing/index.html",
    "revision": "ec6c42440df4481a49999e7ed7a7bc1c"
  },
  {
    "url": "privacy/index.html",
    "revision": "a07ecf568f24e3b2d533e84fbd9bf27e"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "d9b557840bf27f096d2bdb0a90474975"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "d8d2cb755c5f84ebca4d6fdded55633d"
  },
  {
    "url": "refund/index.html",
    "revision": "9efc44b6992dd51671064fbe2eeeb281"
  },
  {
    "url": "reviews/index.html",
    "revision": "5393693899998691946ae79bd106b960"
  },
  {
    "url": "sales/index.html",
    "revision": "2f67b85c6093a3f2b82ad4d128c37163"
  },
  {
    "url": "security/index.html",
    "revision": "fe0661bf1a261acae7755e0d5ba81b34"
  },
  {
    "url": "sitemap/index.html",
    "revision": "e7c7e36cc320825f8a751d3dea8de8c4"
  },
  {
    "url": "success-education/index.html",
    "revision": "d946c544f22c0227f337b429c0062b28"
  },
  {
    "url": "success/index.html",
    "revision": "475bf91ceb086ac58cadc7f6aae24193"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.html",
    "revision": "b8c1835fcce995bc8f4e52ad250807b3"
  },
  {
    "url": "support/cancel/index.html",
    "revision": "60b419e36fcfacf2ad14479298841b66"
  },
  {
    "url": "support/how-to-annotate-any-website-or-pdf-with-a-browser-extension/index.html",
    "revision": "97219fba0722b62327bbd4721ece3cb9"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "9c61e613e73b2432ad72d454543355fc"
  },
  {
    "url": "support/how-to-change-my-email/index.html",
    "revision": "cec541a67a064f8cc1277eaddd97e10e"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.html",
    "revision": "5bf2f5a4656e1b597517fcfbbb6338c2"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.html",
    "revision": "57a674c399f39f4db8ab195b0373382e"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.html",
    "revision": "9ba6ee1fac6c51aeb85e59c43c4e0f22"
  },
  {
    "url": "support/how-to-use-reader-mode-in-google-chrome-firefox-edge/index.html",
    "revision": "5c04f98cb0f9324f46addfc388138bc8"
  },
  {
    "url": "support/how-to-use-reader-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.html",
    "revision": "a2ce6a6f9afa2d67a517f7f44804d156"
  },
  {
    "url": "support/index.html",
    "revision": "65fdabe3afc03eb25dff016a542188eb"
  },
  {
    "url": "survey/index.html",
    "revision": "e2f16d578d8cb025d8c2b8aea792804e"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "3f6f957543f77618ed27725f2373a185"
  },
  {
    "url": "testimonials/index.html",
    "revision": "79e98df17a62cddfc4ce6d4805cae06a"
  },
  {
    "url": "tutorials/index.html",
    "revision": "62375f528051782104ea539dcbdeaa11"
  },
  {
    "url": "updates/100-0-0/index.html",
    "revision": "3c91b8585d605ed0a9a02b42bbc7a45a"
  },
  {
    "url": "updates/100-0-1/index.html",
    "revision": "29d534132c8e86f9c9bafad575575a72"
  },
  {
    "url": "updates/100-0-3/index.html",
    "revision": "a76c81ae34267b2f153f13555a9e8c9f"
  },
  {
    "url": "updates/100-0-4/index.html",
    "revision": "8fd611e0dd4d5da2e692ff7571b77972"
  },
  {
    "url": "updates/100-0-5/index.html",
    "revision": "ae9cca61087eda16f2f61fde55255cce"
  },
  {
    "url": "updates/100-0-6/index.html",
    "revision": "34f97f6584f09310aa327bf0e4acc1f9"
  },
  {
    "url": "updates/100-0-7/index.html",
    "revision": "36bd770e86c115a2b8a59912e4e3564d"
  },
  {
    "url": "updates/100-1-0/index.html",
    "revision": "2f4d311bfa00f9fa89d1de6a9a489fc5"
  },
  {
    "url": "updates/100-1-1/index.html",
    "revision": "df8494def6612faec97d9015ea2bb56f"
  },
  {
    "url": "updates/100-1-3/index.html",
    "revision": "67bb85b7f7db6deb97edfa88e82ddba1"
  },
  {
    "url": "updates/100-5-0/index.html",
    "revision": "0ae88e23e778a47103d55a2fd43b7d3a"
  },
  {
    "url": "updates/100-6-0/index.html",
    "revision": "35cdd90c33024b62131603ab29b73254"
  },
  {
    "url": "updates/100-6-1/index.html",
    "revision": "614c4d6f1677bfa6c251f227d5ff9735"
  },
  {
    "url": "updates/24-1-0/index.html",
    "revision": "b406dcfa8700c2acf030f71ec2d233d4"
  },
  {
    "url": "updates/24-1-1/index.html",
    "revision": "9956b43e337d6e262ebf6208a13342ca"
  },
  {
    "url": "updates/24-1-2/index.html",
    "revision": "0f76987d414ad76d4862df27d006fefa"
  },
  {
    "url": "updates/24-2-2/index.html",
    "revision": "877c14dfa3babb6ed286bbd2d7970188"
  },
  {
    "url": "updates/24-2-4/index.html",
    "revision": "1c32b185dcae151a29c748045ca178df"
  },
  {
    "url": "updates/24-3-0/index.html",
    "revision": "6bd2b1ff855fa9068b9aaae1f87624c3"
  },
  {
    "url": "updates/25-0-0/index.html",
    "revision": "6fb9249ab479e3f86c2af8f214f86c51"
  },
  {
    "url": "updates/25-0-1/index.html",
    "revision": "7b3dd5b154a37f78f7172daf3baab193"
  },
  {
    "url": "updates/25-1-0/index.html",
    "revision": "76d60041f311b9a4ef1a49d20babba6c"
  },
  {
    "url": "updates/26-0-1/index.html",
    "revision": "1917f9551c45239ae53b66f025255065"
  },
  {
    "url": "updates/26-0-2/index.html",
    "revision": "7ab597a4d984583cd0fbd5833e5c0bb5"
  },
  {
    "url": "updates/26-1-1/index.html",
    "revision": "597b56a10f14ef2917821fdc3650a189"
  },
  {
    "url": "updates/27-0-0/index.html",
    "revision": "cd66933fda314714a181eae446841dcb"
  },
  {
    "url": "updates/27-1-0/index.html",
    "revision": "5c10c757eeef846f3d426e7386d422b7"
  },
  {
    "url": "updates/28-0-2/index.html",
    "revision": "dfd6748790c894e3b3049aa20843a321"
  },
  {
    "url": "updates/30-0-0/index.html",
    "revision": "4d1bfb1ea265eff8cd4045e751fe1a51"
  },
  {
    "url": "updates/30-2-0/index.html",
    "revision": "17a83fb39c9d9e5f56bcd7773829997c"
  },
  {
    "url": "updates/30-3-0/index.html",
    "revision": "def7b4a4a1171f34bfdb81e87b9741c1"
  },
  {
    "url": "updates/30-4-0/index.html",
    "revision": "ab515bb307a5b75b3e1d85df1dd0b891"
  },
  {
    "url": "updates/30-5-0/index.html",
    "revision": "8fa7fe921302ff7628b29c4b6c5e71ec"
  },
  {
    "url": "updates/30-6-0/index.html",
    "revision": "4dbb20f3f25cef4d94242c2c0ab168a7"
  },
  {
    "url": "updates/31-0-0/index.html",
    "revision": "67d5b4fa1a1effe2ce09589f5e25e7d9"
  },
  {
    "url": "updates/32-0-0/index.html",
    "revision": "4657b6ad8ea52294ee6d386ee01f2134"
  },
  {
    "url": "updates/32-1-0/index.html",
    "revision": "9eb6b0d0901387c2c937304e34ff076e"
  },
  {
    "url": "updates/33-0-0/index.html",
    "revision": "d2286c4df4ef38419f94b9e55d967e5c"
  },
  {
    "url": "updates/35-0-0/index.html",
    "revision": "7e21eed0228688234d04b8d0179776c9"
  },
  {
    "url": "updates/36-0-0/index.html",
    "revision": "75ad966ee7b9f2e8c60e43ebd4732e63"
  },
  {
    "url": "updates/36-0-5/index.html",
    "revision": "c8bd0a7a12069000ae4035a4bb88be67"
  },
  {
    "url": "updates/40-0-0/index.html",
    "revision": "4751826259e9b8d982fd9723e9886c83"
  },
  {
    "url": "updates/40-0-1/index.html",
    "revision": "c41b9c697e38d92e5c57c6c75773fd40"
  },
  {
    "url": "updates/40-1-0/index.html",
    "revision": "758d4bc3c66babe8e9da418b2afecb37"
  },
  {
    "url": "updates/50-0-0/index.html",
    "revision": "1fad901dba8f4de51711d91dc59b3ae7"
  },
  {
    "url": "updates/55-0-0/index.html",
    "revision": "09758912390b5ee2c411214744182f33"
  },
  {
    "url": "updates/55-1-0/index.html",
    "revision": "b1d7eb9f65da1b6c050b564848443e3d"
  },
  {
    "url": "updates/56-0-0/index.html",
    "revision": "b7b553e5ea0721a3fe762da4d398d319"
  },
  {
    "url": "updates/60-0-0/index.html",
    "revision": "704673ee5f696ce3a52440cd40037f42"
  },
  {
    "url": "updates/60-1-0/index.html",
    "revision": "c82c52e4ac891db2fec125f34fd2671b"
  },
  {
    "url": "updates/60-1-1/index.html",
    "revision": "c19c563d3978e9d01e84bbcaf344c8df"
  },
  {
    "url": "updates/61-0-0/index.html",
    "revision": "cba7fe82b1edcdd1463843544a4838be"
  },
  {
    "url": "updates/70-0-0/index.html",
    "revision": "f6dc26f6a31c8515148db11b1f585d15"
  },
  {
    "url": "updates/70-1-0/index.html",
    "revision": "d8e6a510dc1df3b52ae86c03dd755dbe"
  },
  {
    "url": "updates/70-2-1/index.html",
    "revision": "ae05efaeab02c2d9e1a7c16fdfdc64e2"
  },
  {
    "url": "updates/75-0-0/index.html",
    "revision": "76e719251f5b23fea1733f26ff000de7"
  },
  {
    "url": "updates/76-0-0/index.html",
    "revision": "d21d659e619ace8bf8df2cdb2c29a6d5"
  },
  {
    "url": "updates/80-0-0/index.html",
    "revision": "33d5c9d42089ff347e6fe94266773245"
  },
  {
    "url": "updates/80-1-0/index.html",
    "revision": "61a5015480d9740b22be2fbd098747a1"
  },
  {
    "url": "updates/80-2-0/index.html",
    "revision": "d5f33785e76b932a06fd9bd2f8804089"
  },
  {
    "url": "updates/80-3-0/index.html",
    "revision": "aae6d88c866286d3833232ff99a43f42"
  },
  {
    "url": "updates/80-4-0/index.html",
    "revision": "9dfd1756f0c0443f46d619c811bc410d"
  },
  {
    "url": "updates/80-4-1/index.html",
    "revision": "cd137538498775e1f0d2edf31d8c8419"
  },
  {
    "url": "updates/80-5-0/index.html",
    "revision": "44750072a64ec0607feb1696b836aac5"
  },
  {
    "url": "updates/80-5-1/index.html",
    "revision": "4c917c97dd4ddd56e44441b980002d9b"
  },
  {
    "url": "updates/90-0-0/index.html",
    "revision": "817bd230d47a2fe675a04fc3364beff6"
  },
  {
    "url": "updates/90-1-0/index.html",
    "revision": "7e382bdfe01f5c2b70f272bcf73ceab0"
  },
  {
    "url": "updates/90-1-1/index.html",
    "revision": "03ce9f6e666e5677d4e2077f1ce55654"
  },
  {
    "url": "updates/90-1-4/index.html",
    "revision": "7c9901e165dc036b3e5789e9c442a9d4"
  },
  {
    "url": "updates/index.html",
    "revision": "4b4693367c49d34db0ad2c104b2e6b9c"
  },
  {
    "url": "updates/kingfisher/index.html",
    "revision": "0537a575e7a036b4c1c2070daaaf15f6"
  },
  {
    "url": "welcome/index.html",
    "revision": "20ebbb8e01f818020384f8c088784466"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
