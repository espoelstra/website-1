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
    "revision": "1fde41135cc9e25367a4913754fcca59"
  },
  {
    "url": "about/index.html",
    "revision": "70040bd5a03e723befa892b6b6176b78"
  },
  {
    "url": "assets/css/blog.css",
    "revision": "58072bdcf8fa52c97a84f3cd5f36133b"
  },
  {
    "url": "assets/css/help.css",
    "revision": "5f54983cc5f1ab8c66936f2b300e6806"
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
    "revision": "bceebcdc637b43d2844b10e929a05ce4"
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
    "revision": "5169c0318913223cb1db53a96b8adc53"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "968ee5e6f27692729fb21d37ffd15508"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "b3a6774e89bf69f81a477ad319d79f39"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "3d104f416d6d3dcf025096910287425f"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "b9ec82d3b876ccdb74cdc5d95bf5c0ff"
  },
  {
    "url": "blog/giveaway-rules/index.html",
    "revision": "96bc8ecd0cb74b35405e5b90a2aa3ac7"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "2e345b59dbf18924b51f21208b563b3d"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "1be058ecdf447bd70e24373421256638"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "1793f91a96f2e1b5cd70b640a0e331a0"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "34de6cedf5e6ee74fb34211042a1963c"
  },
  {
    "url": "blog/how-to-install-and-set-up-helperbird/index.html",
    "revision": "90f3e97a94ac2b2c4e375a4ad6e16059"
  },
  {
    "url": "blog/how-to-install-helperbird-in-edu-accounts/index.html",
    "revision": "6c384d87965308b710071692ba49788d"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "94880060e0f77633c27bbb949cc714a5"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "3529777b8f16905cbf0a7e1963503822"
  },
  {
    "url": "blog/index.html",
    "revision": "30ad50590cc5632caf8c6a20c6bd6e7c"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "e2d779ed3925e537a436c20a2c4524c8"
  },
  {
    "url": "blog/is-helperbird-free/index.html",
    "revision": "3727e809957f760d1293bd1772eadd03"
  },
  {
    "url": "blog/is-helperbird-safe/index.html",
    "revision": "13be7e89b04002636b56fdff266d5523"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "cd7ca10828b8fa3c5090cfeb5fae621e"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "e41aa4f9bc263fde4c82d5740048f14c"
  },
  {
    "url": "blog/signin/index.html",
    "revision": "f8e485102d6e4bf6d6279500ff781d11"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "c12b0c5b80be3cf4f2f803e620a84bf2"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "ce4af3496a5d4569781a52b9d4ba1810"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "5edee603172d5eda8925201b0124e844"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "df08a38e0b163f15c92ae9b143367403"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "4c58f773247bb81732507af2f5551bae"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "bf930a22512ef65868a0796ba0895d56"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "3763fdf40a0346b07c316746a57a3284"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "7f0171e5f14edd68d668d0aa25edd05d"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "6dd5386d7e00d7216c461dca891e876c"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "74c7496c7b8a2702f5350f063ecd2b42"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "2dab888fe505c47a2ec6dd9986ed2456"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "0935aaf5f6eda297f981b62935577160"
  },
  {
    "url": "chrome/index.html",
    "revision": "d8db51213e354f125b7b70fc3c7d9290"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.html",
    "revision": "ab20c80bb3604194bc29dafce4d9d277"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "756bd8799173d835671ed1da62b01cf9"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "90e2a2040756c16c305505557418e0e2"
  },
  {
    "url": "compliance/index.html",
    "revision": "7f6aeeb44efcd73173b803bf09571e2b"
  },
  {
    "url": "contact/index.html",
    "revision": "4bb1f1eef740285948d03f47ce6578e0"
  },
  {
    "url": "demo/index.html",
    "revision": "99ec37c9ae1714514b687d66b61a7142"
  },
  {
    "url": "edge/index.html",
    "revision": "a08f6cf0b3afaf4112d347d4e7d90756"
  },
  {
    "url": "edu/index.html",
    "revision": "23e50d290a0744161982374b04f5ee48"
  },
  {
    "url": "extension/index.html",
    "revision": "9f0a7568afe60d9ec34248878209e2a6"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "6253ffabb963736f53db9002a30f059d"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "b99838caf1601ed43cfa8c151fea944a"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "c5a38cb17d5ca5ea57f6b154f0de142b"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "2cf3af6452b4722ce2ad4d528bb4b319"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "8384936eaa3ce6ea950f6a0344ddccf8"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "ed29813d467dc7e38211d72fe142b80a"
  },
  {
    "url": "features/cognitive-load/index.html",
    "revision": "79d39dde505acd260b96a4a8933c41cf"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "d626436fed8e0dc29c4777c8d371882f"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "cd742546543f144323bcfe5b2159e16d"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "18beae775d590bd630f0fdf0f816ac09"
  },
  {
    "url": "features/editor/index.html",
    "revision": "de290ff889d34f9b985ad54928fe89d5"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "c7eef5d77d206bc5a7b6b1c37302ad57"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "f3d4ad6bd12143d45bf6e2104a159b52"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "6c31bb076323f7df7a9c2cccce951ac9"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "dadb6fd4d0f9e7a4b0dc20a592f3916c"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "73e22263d7486343e96edac003529dad"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "5d04fe7eb5207b5836df739210091f4e"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "a68984c2a4cc6430821d9fdc20f6638a"
  },
  {
    "url": "features/index.html",
    "revision": "b842609e1b3cd8484b502a07c22a1346"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "451032d991a3eea45b3716f76b3e4a9b"
  },
  {
    "url": "features/notes/index.html",
    "revision": "dfafdaf459ea31b7e77d06810d1d1f12"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "a0561f5f635f3d692be9229cfaf424a9"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "4f642393e2f201e3ec007a58580ef383"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "f331f969b3a03a63dcf71e8dca695bd3"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "87b838a7cf0a7407af8b9640896b959f"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "4fbc35c0b89a607b9768f6916f2d9de7"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "70392ad2e39f23b7d5682202ee608e0f"
  },
  {
    "url": "features/reader-mode-for-chrome-and-firefox/index.html",
    "revision": "740a9fe7fe1184128c4d7eb4debd4d64"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "254d4ac946bae6b4de4d11f746edda67"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "afc4d4a9ab5f1d035a3cd068b225908a"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "a60dd62033377e2da2627ec4ada4d05c"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "72d4a5de39fb3a43657fbff0813b127a"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "b303f3a1b774b022f2b7cda06922cec7"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "50c23fce2b2857d9c898de45f0487cf7"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "20b6ba18980cef4f6ed816eecfa98434"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "7f5b158d9b3b18139c09e83b23f7c989"
  },
  {
    "url": "features/styles/index.html",
    "revision": "e102a25ccb715c93e3da15beb2798d9b"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "76246f007c8db6180889d1cfcedc29dc"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "bd1d3b8723d09b22b8b4416db19624d2"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "deab87827246378e81e6f0082f10bbb6"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "3f877a2b517d2bf5f8d70d1c68fe6629"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "b81d8a34cd017b678fd14276107a9509"
  },
  {
    "url": "feedback/index.html",
    "revision": "d6098df65aa1bb7eac70b8469f8c6190"
  },
  {
    "url": "firefox/index.html",
    "revision": "face3066a783d6248d16ffaba741ddc4"
  },
  {
    "url": "googlea4b2e0ff05c168d5.html",
    "revision": "da84e880591336874cb2e7ce330fa6c0"
  },
  {
    "url": "guides/index.html",
    "revision": "c1c917df7c595d07726d77bcde514350"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.html",
    "revision": "1bac42bad1c1115bcfab24b34bf082b1"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "f2bb6ce18cd64c32d8b795033ae3ffc1"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "63c56a2515b24f1f40cb28ae735a00fd"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "efb35b50d5b8d4f1c2ac5e30b8af559e"
  },
  {
    "url": "help/how-to-add-a-cognitive-load-to-text-on-any-website/index.html",
    "revision": "c6a24193f0efcae738ee639172df7503"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "83cac15c059abebaaaa4bc2561845159"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "0458599befb165304238129168b37acf"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "15f1c944adb1e131ba404fc4cd2368de"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "9fbd32374bc816150d70e2e770deb3f1"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "292166e309759460cc13d3de4f56c546"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "9b49e4e45e222cae54303217bfed147c"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "40b0d250412734f862419ee10c41eaeb"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "835bef7fa6026a5977fbc6daa12238d0"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "0611d053faac5b1ec3d34b49e66d350d"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "e8a4fedfda61f369b0806817841386f9"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "77638edda8731f0be9580f6416bb8f35"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "0b111c1dfdc222ab63d8b6a2844c7697"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "5dc252d69afe121303fbed7267ba50f9"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "352f0fa2fc492a6684f6f8ff8bfdcb37"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "b0ec32110da803010f275e4aeb19ec1a"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "5f9a286874de5ed06a62dd87e47ad6c2"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "882b13b04b3015241df36a171186a62a"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "27629cd632bee55389c4c2dedd296c2d"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "31accd682f231eff35aea185120af643"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "b3abfbf6db7f63473926af0be26df14e"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "492c59fc3b4bbea9a0249522a94669c2"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "259498a5280528786d7610194180397c"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "d5fe1da4aada1fb8e24f6083bfa1f69e"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "cd0528e96e87c1acab93e6cb728581c7"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "5e172109fe3c3f97a027fc54ec751074"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "f31e12652564e953b137e3ea8fce1e44"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "992bb4407cc117ac084af853a4e087d7"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "f0d6e639d014318a293592564ea2879f"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "78382b48db77e1d30b9f99ee8a4523ec"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "f0011e3d5468b9ab606ec3cdd828ff74"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "2fddfaf44a315345c0411e256de04ef2"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "9f2a9a4b11d140d2a197ea917171aabd"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "1a5a660d0942522bc668f04075bcf849"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "8479515ea80141a4a1dfe192efae290e"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "45007c0dd08a8f4384d613744e268c99"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "6bb99b6973a0ce7abc6d3fa2683d282d"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "83f0b0db08a292642dd5dbf7e20b755c"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "25adfcf219da7eda13d177f085300bdb"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "5d4b4fe5114e44cf0a5458a71cc0822d"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "89fa9b87b62c69e33fb74aee730c2977"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "a6ed567a18ffefb59f110c48fe2801e3"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "a3b8cbbcf9157b9aede134ac8726ca3f"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "eb841f9e9e35865232885f3594e44315"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "4bf008c0b51ea8451e4f498b9bc93703"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "2cd7e21628be5b4fc6f47fbfa37604aa"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "364a3a8c6b81fa0906676590c6af2a6f"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "cd524916c0f647a059788027e7e3c4a6"
  },
  {
    "url": "help/how-to-use-reader-mode-and-remove-ads-on-any-website/index.html",
    "revision": "d42faf243c3c090177ab75e97f58ca92"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "e6f41334f3730b9454a4ce4b715b0a4d"
  },
  {
    "url": "help/how-to-use-speed-reading-features-on-any-website/index.html",
    "revision": "c3ce53ce6f70a045ffb4f535f69c9e25"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "65e528335f6483f9a8ca2be20d6d61c4"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "f144c24e9ad6651f6abe18fccd48f9b7"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "f34126516cb45d43163d4a77937f73e7"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "dfdef2497454a374aa5ce378e2d05b82"
  },
  {
    "url": "help/index.html",
    "revision": "20944cfe67859e7ba51e9b26368cb168"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "98642bdc500ba68cf227db4d2a3aa640"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "e7be110c2fca34f2c416e2f25275f78d"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "438879df18e3d064432622458291aa4b"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "ceda2482c6d936a0539219e1d7bb44c3"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "7ab2c8d5952bcc94f050075a1900f1a2"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "1cfa3cd2299ff924167d44506afaf60b"
  },
  {
    "url": "index.html",
    "revision": "72f16e0812561b0158cfdc53c42fa011"
  },
  {
    "url": "login/index.html",
    "revision": "33a5de1d7a173531942b126e7e88c268"
  },
  {
    "url": "order/index.html",
    "revision": "2bc1a62b727e898938d92e3746ad53e7"
  },
  {
    "url": "partners/index.html",
    "revision": "902dae6c87cdca5c82620d0bfee85bcd"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "e807590b9b61f2087eaa760c74e37aef"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "dec9e00b51d9740f7096a569c998f8c1"
  },
  {
    "url": "pricing/index.html",
    "revision": "48eee87ba74777ebee3b4aecd949e6d5"
  },
  {
    "url": "privacy/index.html",
    "revision": "fccac4d4f4c507fbc666d481f9e6a709"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "d27014493c3bb6774c65dbab53271d27"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "05a754bfe5c455385e0c35ddad34b3f3"
  },
  {
    "url": "refund/index.html",
    "revision": "17d7b62ae1b187591bbc0d02cfcaff07"
  },
  {
    "url": "reviews/index.html",
    "revision": "e598b8a7cc9c7f517b3c1c93580bb4b0"
  },
  {
    "url": "sales/index.html",
    "revision": "298071fde64c227e12053db6d06359b0"
  },
  {
    "url": "security/index.html",
    "revision": "d0ad1d85f53484b06bf66f5af0842503"
  },
  {
    "url": "sitemap/index.html",
    "revision": "d275a851e104f3e07979ea555ce88671"
  },
  {
    "url": "success-education/index.html",
    "revision": "9c265aaced8ff1c20525388175ef15f2"
  },
  {
    "url": "success/index.html",
    "revision": "63918f655ec1a8d23493af1dfd864869"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.html",
    "revision": "9480e987d4db125f4c997361a5bfc597"
  },
  {
    "url": "support/cancel/index.html",
    "revision": "a170559bd86a2544cf8a225739b9ebfc"
  },
  {
    "url": "support/how-to-annotate-any-website-or-pdf-with-a-browser-extension/index.html",
    "revision": "0a5ebc61758cf710307ab29896aa7cb1"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "b538762e5d67f758f4c1c59a2a05385b"
  },
  {
    "url": "support/how-to-change-fonts-of-any-page/index.html",
    "revision": "3bd5c224fd63e46beec5b31eb3bf6c67"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.html",
    "revision": "1899c452a5dfb6c206aac48704a48b2a"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.html",
    "revision": "ff2a90a729581c9cff79aeb20a0c2c9f"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.html",
    "revision": "232d9f82c2d14580fddbaf48a9f2b5fd"
  },
  {
    "url": "support/how-to-use-reader-mode-in-google-chrome-firefox-edge/index.html",
    "revision": "fc2e0faa3ad38605ad3a9ac6a5a6e600"
  },
  {
    "url": "support/how-to-use-reader-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.html",
    "revision": "d7e56d002fb06938c89b33613749a26c"
  },
  {
    "url": "support/index.html",
    "revision": "491347604132f6d5cb37e96328f5420b"
  },
  {
    "url": "survey/index.html",
    "revision": "08939599c8f8c6d054ec2c8c339adba2"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "7ff8ebb9b1326c0dfcdb6c5820277f9f"
  },
  {
    "url": "testimonials/index.html",
    "revision": "29582a92abeb862abddb8c28d99f4bef"
  },
  {
    "url": "tutorials/index.html",
    "revision": "4b787ff7087384cd0f985d34f904b3f3"
  },
  {
    "url": "updates/100-0-0/index.html",
    "revision": "eece57da8b8e50b55d1d19a84acd48af"
  },
  {
    "url": "updates/100-0-1/index.html",
    "revision": "a803acb7573f7b97f63b4e5f750a8c5c"
  },
  {
    "url": "updates/100-0-3/index.html",
    "revision": "fba6a2da7287a748e2b4f93ade4c6475"
  },
  {
    "url": "updates/100-0-4/index.html",
    "revision": "daf32d5e671a9fe4a38bdcfc70c3843c"
  },
  {
    "url": "updates/100-0-5/index.html",
    "revision": "e735be6b1c058455781ca4e5e8d9a4c0"
  },
  {
    "url": "updates/100-0-6/index.html",
    "revision": "4384c38a551832c2bb87ff1bac51b5a3"
  },
  {
    "url": "updates/100-0-7/index.html",
    "revision": "e9f90433e28d0996cfa869838f4bfdfa"
  },
  {
    "url": "updates/100-1-0/index.html",
    "revision": "46714ba110c3a6d70c4a7c92c8b5deb6"
  },
  {
    "url": "updates/100-1-1/index.html",
    "revision": "e8c6644f7970fcfaa1e0374941273c58"
  },
  {
    "url": "updates/100-1-3/index.html",
    "revision": "c4462bff575817f2a3bc796c4114cf52"
  },
  {
    "url": "updates/100-5-0/index.html",
    "revision": "57e8dcb9dd946a3e9a0a0101699c6322"
  },
  {
    "url": "updates/100-6-0/index.html",
    "revision": "84297483a5f05a15b6d25c012c02d1b3"
  },
  {
    "url": "updates/100-6-1/index.html",
    "revision": "b6931b586bd0daadafd3eb3f81a855c5"
  },
  {
    "url": "updates/24-1-0/index.html",
    "revision": "c0fd5bc2150a7a487c6ed89831287a11"
  },
  {
    "url": "updates/24-1-1/index.html",
    "revision": "e554ac95ddcbf3341f58cc30d0d0abf7"
  },
  {
    "url": "updates/24-1-2/index.html",
    "revision": "a53492a4096e0f4539ecc245cf10c174"
  },
  {
    "url": "updates/24-2-2/index.html",
    "revision": "c958f25a36209bed7ea6385364737a8b"
  },
  {
    "url": "updates/24-2-4/index.html",
    "revision": "d280e8f050e399fee7d8de3363e80e72"
  },
  {
    "url": "updates/24-3-0/index.html",
    "revision": "755291fd959b449ae1e0d9c29a44f08e"
  },
  {
    "url": "updates/25-0-0/index.html",
    "revision": "72f3410fdd90fad7e12afd64d43f17f7"
  },
  {
    "url": "updates/25-0-1/index.html",
    "revision": "5a613306e7f2d506030590aad73ca63a"
  },
  {
    "url": "updates/25-1-0/index.html",
    "revision": "6a357dc4810a27847e8e350b5b918baf"
  },
  {
    "url": "updates/26-0-1/index.html",
    "revision": "8aa5faf9e75c05eed27bc8c0b8d55557"
  },
  {
    "url": "updates/26-0-2/index.html",
    "revision": "b8d9dd4e77e52eeed1c42720e45edcbd"
  },
  {
    "url": "updates/26-1-1/index.html",
    "revision": "89155a0de031bcf2f8cf8fdedee29895"
  },
  {
    "url": "updates/27-0-0/index.html",
    "revision": "d9a5e8951f59c02fa754526416aad3ca"
  },
  {
    "url": "updates/27-1-0/index.html",
    "revision": "3da2c51e574c15ef80f93ccb736409fa"
  },
  {
    "url": "updates/28-0-2/index.html",
    "revision": "eb607309d230ff7e774dece20526bf7a"
  },
  {
    "url": "updates/30-0-0/index.html",
    "revision": "dc81aff3b6b986ee78f22e075e541961"
  },
  {
    "url": "updates/30-2-0/index.html",
    "revision": "71f163af281f853bee6a12af09422d8e"
  },
  {
    "url": "updates/30-3-0/index.html",
    "revision": "e6e27d5a8fb6ecbb4d6d4dc9926662c1"
  },
  {
    "url": "updates/30-4-0/index.html",
    "revision": "1d2709ca77770cf6c4ff554fe88315b7"
  },
  {
    "url": "updates/30-5-0/index.html",
    "revision": "f761873ef0fe591fcd989e0b26faf0e6"
  },
  {
    "url": "updates/30-6-0/index.html",
    "revision": "ccd46bd753c0108d43209ad2426611c0"
  },
  {
    "url": "updates/31-0-0/index.html",
    "revision": "47dc63f645ce77251c98c13f7cac1d2d"
  },
  {
    "url": "updates/32-0-0/index.html",
    "revision": "581408d0993c04bc68c76de5b6ae80a0"
  },
  {
    "url": "updates/32-1-0/index.html",
    "revision": "dff93155085504da25febfff591aaa32"
  },
  {
    "url": "updates/33-0-0/index.html",
    "revision": "123558d55ae6ee7f2ebcd536e35afe27"
  },
  {
    "url": "updates/35-0-0/index.html",
    "revision": "dc2a6f39dcb5bd83bb25d4631e0680bf"
  },
  {
    "url": "updates/36-0-0/index.html",
    "revision": "ceac4e58637ca5a46b7ba1bf9a9640a9"
  },
  {
    "url": "updates/36-0-5/index.html",
    "revision": "820282a4d894027801ac96aa6d82517f"
  },
  {
    "url": "updates/40-0-0/index.html",
    "revision": "9231fe6883554f008c43f02dc1955ea3"
  },
  {
    "url": "updates/40-0-1/index.html",
    "revision": "19a95b50a2d4e897d4d286a9aa86cb68"
  },
  {
    "url": "updates/40-1-0/index.html",
    "revision": "d43be257dd3d7a216ffa00f805240ac8"
  },
  {
    "url": "updates/50-0-0/index.html",
    "revision": "8df99270343ac41de92c27a30022e314"
  },
  {
    "url": "updates/55-0-0/index.html",
    "revision": "aa6e3d1ce025cd4a3780c820d2c58904"
  },
  {
    "url": "updates/55-1-0/index.html",
    "revision": "9f6f6981ea5f0f221453d6bdf6a70d1b"
  },
  {
    "url": "updates/56-0-0/index.html",
    "revision": "81c548f8eba3fecec65941eeafd850d2"
  },
  {
    "url": "updates/60-0-0/index.html",
    "revision": "1848b1a886131552df8c12a7d40f4c0a"
  },
  {
    "url": "updates/60-1-0/index.html",
    "revision": "b737723d82230e8c0dc1479a89ae399c"
  },
  {
    "url": "updates/60-1-1/index.html",
    "revision": "64a050909f9819bc36a78d5fd49caa1c"
  },
  {
    "url": "updates/61-0-0/index.html",
    "revision": "43f3cc2e801e614ff8e07e2c52f6cef4"
  },
  {
    "url": "updates/70-0-0/index.html",
    "revision": "1a04b5bc779b98fa91d46c9fb59becc1"
  },
  {
    "url": "updates/70-1-0/index.html",
    "revision": "c955a9b1f69ecae822c5122586f87a8d"
  },
  {
    "url": "updates/70-2-1/index.html",
    "revision": "bb58458e4a40d9d30b9a3cf447af8c84"
  },
  {
    "url": "updates/75-0-0/index.html",
    "revision": "0a369b79a10ee3e52c6ecaf759e31fac"
  },
  {
    "url": "updates/76-0-0/index.html",
    "revision": "3caba2d83d6f8885e250c02aa1452ff5"
  },
  {
    "url": "updates/80-0-0/index.html",
    "revision": "91f709463f52ffb1272aaa9ef603ff96"
  },
  {
    "url": "updates/80-1-0/index.html",
    "revision": "085f24280729c4bf661c6bb6bfeb6053"
  },
  {
    "url": "updates/80-2-0/index.html",
    "revision": "e97d2ba57df9ac7c66693bcecd182ce2"
  },
  {
    "url": "updates/80-3-0/index.html",
    "revision": "49469b8a7890faa3f73c70b07649cec9"
  },
  {
    "url": "updates/80-4-0/index.html",
    "revision": "e8786b1f9ea0c8d468e03e9472a57f0c"
  },
  {
    "url": "updates/80-4-1/index.html",
    "revision": "d3b9f857a544728bea8a1b197e0eff2c"
  },
  {
    "url": "updates/80-5-0/index.html",
    "revision": "9b6215cb4bc88297111bfc5f3c6db7ba"
  },
  {
    "url": "updates/80-5-1/index.html",
    "revision": "d4dc3b47347d5f47be96fbd322a1ad35"
  },
  {
    "url": "updates/90-0-0/index.html",
    "revision": "3355f74e49debc9b8e75c7bbc93ebcb8"
  },
  {
    "url": "updates/90-1-0/index.html",
    "revision": "b3de3b9848b74fe2002649752e49adff"
  },
  {
    "url": "updates/90-1-1/index.html",
    "revision": "ba3e37cf2f2693fef545d3b8e8ab4351"
  },
  {
    "url": "updates/90-1-4/index.html",
    "revision": "6f28602cbcc28c1e5d8842fe3c158354"
  },
  {
    "url": "updates/index.html",
    "revision": "8fbe14e3dac89c2d3b5148a5ca8a3beb"
  },
  {
    "url": "welcome/index.html",
    "revision": "54b8375debb9435e32824b022357fa40"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
