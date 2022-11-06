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
    "revision": "756946558a604bcf177d4be563529111"
  },
  {
    "url": "404.png",
    "revision": "e94ce63b35a57b3e639ad0d5707a38ea"
  },
  {
    "url": "about/index.html",
    "revision": "d3fc7e4be8edebec940456e01b5d460d"
  },
  {
    "url": "about/index.png",
    "revision": "000431a04ca9bd924611326147c92980"
  },
  {
    "url": "assets/css/blog.css",
    "revision": "ee7c1673f5dce3c32e8da8729faed551"
  },
  {
    "url": "assets/css/help.css",
    "revision": "7805374dcd7d9c77ff7c2793409ec61f"
  },
  {
    "url": "assets/css/styles.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
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
    "url": "assets/images/favicon.ico",
    "revision": "0b53a11c7110e4cb4ed5f0b196d88282"
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
    "url": "assets/images/graph/feature/adjust-letter.png",
    "revision": "a070e52c3f0eeaa644769a60b2ccc8a7"
  },
  {
    "url": "assets/images/graph/feature/alt.png",
    "revision": "3b7e0bd77785a0d1fe1ab313c5d66669"
  },
  {
    "url": "assets/images/graph/twitter.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
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
    "url": "assets/images/home/chrome.png",
    "revision": "16b9ac116a44042bbecdb9db475fbf3a"
  },
  {
    "url": "assets/images/home/companies/nevada.png",
    "revision": "02a17c9fe7bc225bf24022b9ec23db69"
  },
  {
    "url": "assets/images/home/companies/rio.png",
    "revision": "e768680830d9694978db04b92db556ff"
  },
  {
    "url": "assets/images/home/companies/shell.png",
    "revision": "9d8c849f95cbfcf7fb59565a5883fadd"
  },
  {
    "url": "assets/images/home/companies/sowashco.png",
    "revision": "72a0a72907fbb540553d40b9b3bb0a83"
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
    "url": "assets/images/home/safari.png",
    "revision": "b748bd8e260420ae375777e488116071"
  },
  {
    "url": "assets/images/home/screenshots/accessibility.png",
    "revision": "4efd9fc7882e8b5566a6be5cc52f4a75"
  },
  {
    "url": "assets/images/home/screenshots/reading.png",
    "revision": "ea3af787c7e2ddba13583ed817ae0536"
  },
  {
    "url": "assets/images/home/screenshots/tools.png",
    "revision": "691f5c9f512ffb7d5fb42b2902b2f7df"
  },
  {
    "url": "assets/images/home/screenshots/writing.png",
    "revision": "c9365b6aced6f3fc26b6cee1fe606649"
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
    "url": "assets/images/pwa/logo/full.png",
    "revision": "f6f3b6a69cf6cead4e27ae79547fd51e"
  },
  {
    "url": "assets/images/recommends/beeline.png",
    "revision": "477131dcbe1e63a6b95a829a7b13adaa"
  },
  {
    "url": "assets/images/recommends/beeline.webp",
    "revision": "35e8ee54668988ecaa7fd3703f8efd20"
  },
  {
    "url": "assets/images/recommends/educhange.png",
    "revision": "e7858a673e582198b5682013187b34a4"
  },
  {
    "url": "assets/images/recommends/lexend.png",
    "revision": "abf6123be89456336df26e30d504540f"
  },
  {
    "url": "assets/images/recommends/opendyslexic.png",
    "revision": "5c2d185bd241111e5e64610ec4938b05"
  },
  {
    "url": "assets/images/recommends/toucan (1).png",
    "revision": "9013fe472377b762b50104bb74c95cbb"
  },
  {
    "url": "assets/images/recommends/toucan.png",
    "revision": "9013fe472377b762b50104bb74c95cbb"
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
    "url": "assets/images/social/android-chrome-192x192.png",
    "revision": "29df9d36d0566b2010d52ca9865082b8"
  },
  {
    "url": "assets/images/social/android-chrome-512x512.png",
    "revision": "24c64a0a5f542ccbaff81b8672707fad"
  },
  {
    "url": "assets/images/social/apple-touch-icon-precomposed copy.png",
    "revision": "888ac7670681aeb413d3b4426a0ef2e6"
  },
  {
    "url": "assets/images/social/apple-touch-icon-precomposed.png",
    "revision": "562340ffc912d888e3cc1561037abcf1"
  },
  {
    "url": "assets/images/social/apple-touch-icon.png",
    "revision": "562340ffc912d888e3cc1561037abcf1"
  },
  {
    "url": "assets/images/social/facebook.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
  },
  {
    "url": "assets/images/social/favicon-16x16.png",
    "revision": "b81194c9b77c8154b151eb97343a764c"
  },
  {
    "url": "assets/images/social/favicon-32x32.png",
    "revision": "8b02972e39f51e515a6d77cb8358416e"
  },
  {
    "url": "assets/images/social/favicon.ico",
    "revision": "0b53a11c7110e4cb4ed5f0b196d88282"
  },
  {
    "url": "assets/images/social/favicon.png",
    "revision": "f9e5765a2c7b4d10bca7f97a902286e8"
  },
  {
    "url": "assets/images/social/maskable_icon_x128.png",
    "revision": "f9d1440971c513def03332a35e2843d7"
  },
  {
    "url": "assets/images/social/maskable_icon_x144.png",
    "revision": "012f076f4ebecd43f25f5e2172473499"
  },
  {
    "url": "assets/images/social/maskable_icon_x192.png",
    "revision": "dc582f8a0848de0d5b7b518ce8461403"
  },
  {
    "url": "assets/images/social/maskable_icon_x384.png",
    "revision": "54f5b73a7f5a69dd2f04d6589788e647"
  },
  {
    "url": "assets/images/social/maskable_icon_x48.png",
    "revision": "10875e2c4da7f796cf38e93fc53691cf"
  },
  {
    "url": "assets/images/social/maskable_icon_x512.png",
    "revision": "cf2533dcc0c9e8811441e0f7e1ba982e"
  },
  {
    "url": "assets/images/social/maskable_icon_x72.png",
    "revision": "d061b728b4000992eb75664d65fa5b79"
  },
  {
    "url": "assets/images/social/maskable_icon_x96.png",
    "revision": "6c84ad3038e5d4561c4bcf05f7fb02ec"
  },
  {
    "url": "assets/images/social/maskable_icon.png",
    "revision": "cf2533dcc0c9e8811441e0f7e1ba982e"
  },
  {
    "url": "assets/images/social/mstile-150x150.png",
    "revision": "249a339c09e24d7ff189af44cde8c6a0"
  },
  {
    "url": "assets/images/social/safari-pinned-tab.svg",
    "revision": "8fa99aa859ecd9983a4e5bfd65b38ce6"
  },
  {
    "url": "assets/images/social/twitter.png",
    "revision": "ca91b562c6c48c663ac54ccd0fe4e305"
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
    "url": "assets/images/updates/robin/accessibility.png",
    "revision": "6ca2bbdc3905725581b165881a8c4278"
  },
  {
    "url": "assets/images/updates/robin/colors-paragraphs.png",
    "revision": "8b65ea7aa67f6eee5a6ec3676228c201"
  },
  {
    "url": "assets/images/updates/robin/colors.png",
    "revision": "46cf0558a6e3489aeb2ed32f2f9e6004"
  },
  {
    "url": "assets/images/updates/robin/favioute.png",
    "revision": "0f37613162c5ccd284a292aaaf52e85b"
  },
  {
    "url": "assets/images/updates/robin/notes.png",
    "revision": "68f361967a160cc3b3a6cd1bb8444c2a"
  },
  {
    "url": "assets/images/updates/robin/paragraphs.png",
    "revision": "5bfac9e5a80ffcac27909f253301226a"
  },
  {
    "url": "assets/images/updates/robin/phonics.png",
    "revision": "fa2ad336604b9453f286224e0d21bd37"
  },
  {
    "url": "assets/images/updates/robin/readers.png",
    "revision": "fc6d5a0ddc4259c26f27fbffbb5eb005"
  },
  {
    "url": "assets/images/updates/robin/rulers.png",
    "revision": "52f913cee83420ec378593cbae4d85e0"
  },
  {
    "url": "assets/images/updates/robin/search.png",
    "revision": "7636d6660d85de257f4bcd03a53af33b"
  },
  {
    "url": "assets/images/updates/robin/speed.png",
    "revision": "3a97b691c24ece19ba597c2a737056ce"
  },
  {
    "url": "assets/images/updates/robin/videos.png",
    "revision": "55621631ec453de7c64e2f249f4fff4b"
  },
  {
    "url": "assets/js/core/app.js",
    "revision": "aa26ac11327b334fee02455485425947"
  },
  {
    "url": "assets/js/core/third-party.js",
    "revision": "ba449c1311e30858aa34c8c9d601df05"
  },
  {
    "url": "assets/js/core/youtube.js",
    "revision": "01c5fa9ef1159467c6823c275882179f"
  },
  {
    "url": "assets/js/index.js",
    "revision": "9c4909346822294493f76ae9436e2847"
  },
  {
    "url": "assets/js/main.bundle.js",
    "revision": "b1428c2e45316c1143ebffbd03dcd8e4"
  },
  {
    "url": "assets/js/main.css",
    "revision": "9903b8fce4b7615535929d77e6adfadb"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.html",
    "revision": "5ef17c196911609adc3cbe0941da598d"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.png",
    "revision": "358a910beea235a97b05e509a8dffbf6"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "e5d9aaa31d9ded39e66394f5fc0d563f"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.png",
    "revision": "6601b681406ac9650ac5950b42a20d21"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "76947af4f40df2e21bf1b95993a96433"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.png",
    "revision": "7f33fdc22cb24445d0b306c1ff71e5c6"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "73e7e29d9ce5fa2e9b0c95d729b1cbbc"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.png",
    "revision": "31bdedaf3fb01eb8392d84c4dabfc111"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "329726fda5de3b51dfc2b5c5412f49e1"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.png",
    "revision": "3ed85419b7b2a3675e30313bb734c653"
  },
  {
    "url": "blog/giveaway-rules/index.html",
    "revision": "347ada19bfb4185cfdd3936c6e25e7d5"
  },
  {
    "url": "blog/giveaway-rules/index.png",
    "revision": "6171b8f719a5173ae1911848ae133113"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "5087f6091d91895a1769cb0e3e4015c4"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.png",
    "revision": "e05d085a0f21e0dc30944fda1f6e7aa7"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "9864a2585194bfa921b43eee762eae35"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.png",
    "revision": "880abe3fe99ebbae47c8a61dace46cb0"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "50f27be5a9a995698573538c3aab4758"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.png",
    "revision": "50d55f9743e257ade75237ad9ec12069"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "a58d6341916e97c4743d742f4a12dc9e"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.png",
    "revision": "800e4b662a733390b3e6301820e7d782"
  },
  {
    "url": "blog/how-to-install-and-set-up-helperbird/index.html",
    "revision": "e61e492ca326364f8ecb3a4b1afde330"
  },
  {
    "url": "blog/how-to-install-and-set-up-helperbird/index.png",
    "revision": "472c5ba52e2184f83d58c6fe95ddebdc"
  },
  {
    "url": "blog/how-to-install-helperbird-in-edu-accounts/index.html",
    "revision": "25ac068313951be29508abbb3ebf23a4"
  },
  {
    "url": "blog/how-to-install-helperbird-in-edu-accounts/index.png",
    "revision": "ee03370fc0338095fb4461174bcb05f1"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "a1600a32920edb90803429c8814109e5"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.png",
    "revision": "c7682a65a1dde2a2f4b7bd0c33e8716c"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "60e88c5ef1d62107dbdbe7e8e7eecf1a"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.png",
    "revision": "dfcf0f812ee0a87c0e6c47cf55a23ad4"
  },
  {
    "url": "blog/index.html",
    "revision": "45f0fc72a5a5afdb0f0b7d833c0f7740"
  },
  {
    "url": "blog/index.png",
    "revision": "d5a37d8d873b6f9c529b32249d428ab8"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "4a9166cb01b8af2ce8fb9a479cf3e343"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.png",
    "revision": "084bc24b505c9b8996142691f78331b6"
  },
  {
    "url": "blog/is-helperbird-free/index.html",
    "revision": "cc29f1f15976833a6a1efddff92fb233"
  },
  {
    "url": "blog/is-helperbird-free/index.png",
    "revision": "d37a099344ed769b6f30705388aadc64"
  },
  {
    "url": "blog/is-helperbird-safe/index.html",
    "revision": "bf4be3e3368aa2417837f9ceae7019bd"
  },
  {
    "url": "blog/is-helperbird-safe/index.png",
    "revision": "9ca058aec5195efc5050ed85a6c91dcc"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "bad1427ecfdec63591d417c25a6610a3"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.png",
    "revision": "51b8ce3d86f0f1dc91a42002d2633041"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "28a2cdc7373e68fa83095ba48158b82e"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.png",
    "revision": "2867fdee0f29eb79ba04723f1aad8948"
  },
  {
    "url": "blog/signin/index.html",
    "revision": "272059ba4a02832d1ccaf846134a2991"
  },
  {
    "url": "blog/signin/index.png",
    "revision": "e6436e54874dcb71660ab6df2d33be0e"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "7c5c94e2bb76d6d989a652dab77fe166"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.png",
    "revision": "a0019fc5ee953a86ca69f4dd09affbd7"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "22caba9a8f1f9294b8ea7ef2c0efa3da"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.png",
    "revision": "e129ac86642a6ec98523d1b936ac835a"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "cdc506139763bb8da3c24e461f994b4a"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.png",
    "revision": "8194ee15bfebd169c2955f57a12090ea"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "21635261b5350b8d36287419c76306b4"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.png",
    "revision": "dfd9ba8e90d84a0245cf57ea502df883"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "a0db923fd91637a0a7ac4746d600ecb6"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.png",
    "revision": "d084ddcf579bf5abcbfe74f2615bb886"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "065c090e8ffb4289987a03805e41619b"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.png",
    "revision": "a8e12e56f055240d7fad30ae49cd08ee"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "316d560dd98e11409d1acaebbdb9dc02"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.png",
    "revision": "577e7ae57786162328eefa178f52b325"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "1a65283f88b761382ee8e9f07a7c5ee8"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.png",
    "revision": "7da69e2ce92533155355a95f7744b62e"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "8106c73be48304d2682c57553ac0a6be"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.png",
    "revision": "33cd5959f0c0b8433a88685b50670158"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "4548adf400997ebc73344adf83038768"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.png",
    "revision": "3afdf13f4c1f0126e7769dd1e725ec72"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "1a1e279a73afe4e7a8623b24f2f3c839"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.png",
    "revision": "44e2c1235892146e86afcb5292e28017"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "4e84fd54828ff07357102049ce69687e"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.png",
    "revision": "47b175ec47593888d121442cb2714efc"
  },
  {
    "url": "chrome/index.html",
    "revision": "9729111f41d984ec85af898f93eef9b3"
  },
  {
    "url": "chrome/index.png",
    "revision": "ca8f5b93c7560ba818ef93b983728e33"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.html",
    "revision": "fb8d7945d26c2710e9100dab0bf5fd31"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.png",
    "revision": "ae8ef4de2710a13a3f418a6e0cb7ed81"
  },
  {
    "url": "compare/index.html",
    "revision": "7f91b5f508a0acb288acc4ade7cee69b"
  },
  {
    "url": "compare/index.png",
    "revision": "fc0fdd37a340b1bd610ba78072ed2a67"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "62c668b7e752df3f5cb1d0bcd7e140fa"
  },
  {
    "url": "compare/read-and-write-alternative/index.png",
    "revision": "fe8b2f3b1aacf9d1750d6a8563376e94"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "1e858ab8ae86aa9aec48ba286f37529a"
  },
  {
    "url": "compare/snap-and-read-alternative/index.png",
    "revision": "77163f265dd53491b9599632e9f2dae3"
  },
  {
    "url": "compliance/index.html",
    "revision": "3c8f40efe9f33c2a1eda13cdcba067b3"
  },
  {
    "url": "compliance/index.png",
    "revision": "6a439823b54f65d4a58d92d1a6cd2468"
  },
  {
    "url": "contact/index.html",
    "revision": "04ab46124c8a76ea640849a63f0799f7"
  },
  {
    "url": "contact/index.png",
    "revision": "2e817873282134e94d2e4836b4a1206c"
  },
  {
    "url": "edge/index.html",
    "revision": "6adef4f0a3024fab8ca199682ed999b3"
  },
  {
    "url": "edge/index.png",
    "revision": "da5a3e4b8dc1965adc670b924ea86c52"
  },
  {
    "url": "edu/index.html",
    "revision": "eb9d6f1d0834ee84f8fcc8741401a5ad"
  },
  {
    "url": "edu/index.png",
    "revision": "62146d2d31dcfaf26dff897cc6060992"
  },
  {
    "url": "enterprise/index.html",
    "revision": "aad382000d508a5826a55530892c691d"
  },
  {
    "url": "enterprise/index.png",
    "revision": "2bd5aa43c4e62cfdbad972897f9dd304"
  },
  {
    "url": "extension/index.html",
    "revision": "c01238eeab46af9c1c8cf4657decbaa8"
  },
  {
    "url": "extension/index.png",
    "revision": "09056a251791060e768ec0f65c6fdd12"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "d074df17dee390921ddeb420b749bcf4"
  },
  {
    "url": "features/adjust-letters-and-words/index.png",
    "revision": "827bcfb6e5bfb5efacf17f8901781766"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "567f4e2fc79beac7b0b09028208c9880"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.png",
    "revision": "c3ac3a70abf8f39f5ec03b2b6ac8c37a"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "5a27c8b77e754056ad29cc15199a4cc4"
  },
  {
    "url": "features/analyze/index.png",
    "revision": "72335dbf9499a1ed092d44b385a39b72"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "c195c92968c2242754eca71fea272da0"
  },
  {
    "url": "features/annotation/index.png",
    "revision": "e2bab68d47aadead87ac07229631ec58"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "124f287e9f3a2db9a68c4fa6a4a9b07d"
  },
  {
    "url": "features/auto-scroll/index.png",
    "revision": "d027d945d3cadc297db8406f0cc4a797"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "3a22df01e7fe148dc0fd9fdaf9bc392e"
  },
  {
    "url": "features/bookmarks/index.png",
    "revision": "9ae356a07f9538cb7fef21512e133037"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "d431d3661b94f7d2e3612e728c070f15"
  },
  {
    "url": "features/color-blindness/index.png",
    "revision": "a5a19f8eac4d32059962b41e6e34b9c0"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "f042aea1da43f565227f948a5e9f87d9"
  },
  {
    "url": "features/cursor-control/index.png",
    "revision": "71a6d739ad01632039677fde6b509c9e"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "40bb1f793c4c31a31585e4b7393767e4"
  },
  {
    "url": "features/dictionary/index.png",
    "revision": "dfbb6c4d6174f39fc4515aa31223e8a1"
  },
  {
    "url": "features/editor/index.html",
    "revision": "6426cdb5e9d96523c4fe3c18442d8c94"
  },
  {
    "url": "features/editor/index.png",
    "revision": "1ec77cbd2ca76885c6245727ddc4fdd8"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "a2664b0f3dae76db51c68f761ac93323"
  },
  {
    "url": "features/font-sizes/index.png",
    "revision": "3ad44ac485902ac8019766f1556149b5"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "7911859662b0dfba459c65b640ed098b"
  },
  {
    "url": "features/google-translate/index.png",
    "revision": "786ecfbb62dd21a97b94e26709a14ddb"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "58c0638253b1900cc409e7f0dba66ddb"
  },
  {
    "url": "features/gray-hue-overlay/index.png",
    "revision": "d0bbb8e90269b8babb7afae6f2ebf046"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "262f3928bbbc7a81e78d2ae3647f38cb"
  },
  {
    "url": "features/hide-images/index.png",
    "revision": "faad2149543a4cbfe057f29ee17d51d1"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "14bd1231c2184a93882ccc6d0deb0a82"
  },
  {
    "url": "features/high-contrast/index.png",
    "revision": "fa3ba7f1976576ddd8307d0f3dbcea0f"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "8fa428078e0b1f6096aa533129ad147d"
  },
  {
    "url": "features/highlight-paragraphs/index.png",
    "revision": "11abcfe8d36dab310e01606a41f635f7"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "27272ed24aacd1fa14cd2ee3e080f79b"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.png",
    "revision": "5a162c6b21019fbd1a107011d235601b"
  },
  {
    "url": "features/index.html",
    "revision": "3720588fc58d924315b82d59594b1768"
  },
  {
    "url": "features/index.png",
    "revision": "794ff91209ba924c2dc98bef956fd9cb"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "6c521a43e6d2035aafc688ca7fdcd427"
  },
  {
    "url": "features/mute-videos/index.png",
    "revision": "c111d336e09f7459f983c404b6069384"
  },
  {
    "url": "features/notes/index.html",
    "revision": "5a6aa3230235e62b6808b27abaf47263"
  },
  {
    "url": "features/notes/index.png",
    "revision": "97349414af6e4806ecb4a0cbd28acef2"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "282b14d66902764e8bdaf2710065dda5"
  },
  {
    "url": "features/optical-character-recognition/index.png",
    "revision": "d6502356edd08615ffd1d7ee5ec3670c"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "d1e7b6bd054c8fae31dccfbb43fdb782"
  },
  {
    "url": "features/overlay/index.png",
    "revision": "8ba2106225f997ce5af4374849870a65"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "79c2af30edb00fbb3953f1010167e8f2"
  },
  {
    "url": "features/paragraph-widths/index.png",
    "revision": "7fa7675422606c138c0b450d3a1c1a3e"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "427cedbd9323a2750f91d185593edcdb"
  },
  {
    "url": "features/pdfs/index.png",
    "revision": "85c5da0e3ee00655d2b42b2cfc9fc212"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "6d51b959d64d9eedb1e33eb081ad6842"
  },
  {
    "url": "features/printing-tool/index.png",
    "revision": "bcbf3429152c61d1eafa7c482337de6f"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "d62d1f130df09dcc40ebc0938ffa4879"
  },
  {
    "url": "features/privacy/index.png",
    "revision": "7acc222456e17b8c4a2bc91aa0a3dc49"
  },
  {
    "url": "features/reader-mode-for-chrome-and-firefox/index.html",
    "revision": "0785eed58ff5922587a8145e76addd1c"
  },
  {
    "url": "features/reader-mode-for-chrome-and-firefox/index.png",
    "revision": "486803888f57cbcf66c16ae233cbf4d3"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "1cb1888f4f3b440252b1900a67d7c09c"
  },
  {
    "url": "features/reading-guide/index.png",
    "revision": "048682e79fdf50fa74973a046cfe98be"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "064705ba19a5dcb614bc166e09cf0454"
  },
  {
    "url": "features/ruler/index.png",
    "revision": "051a9997fb93202cc64a9e4779b27cba"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "f9ad2893b6d7830e13ce574d5e44388a"
  },
  {
    "url": "features/screenshot/index.png",
    "revision": "5dea251e2a70336e92bbb801963fea13"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "dead97760bdca1cd9054c4e7be52b338"
  },
  {
    "url": "features/shortcuts/index.png",
    "revision": "62a3060789ecb9e36095a0fa801831aa"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "4bb8c6605aff8e7f93ab64f4a8c04cb3"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.png",
    "revision": "ddf0377744a6b2dccd8afbf2334ea18f"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "706005b112277722a9c98d81b0f5f578"
  },
  {
    "url": "features/speech-to-text/index.png",
    "revision": "d99a22895c4bc282d418db02b9abe95a"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "1ec4778b68b6bcf4b6ca29a09a3bee03"
  },
  {
    "url": "features/speed-reading-extension/index.png",
    "revision": "aba012cf3353ca1c350d2d39347e5b5e"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "955e873d17c74197657e2d348091c87c"
  },
  {
    "url": "features/spell-check/index.png",
    "revision": "9b5c2a91ebfdc63f4d8fffaff4112453"
  },
  {
    "url": "features/styles/index.html",
    "revision": "c01c0e449d755172c5557e39dc1e63b6"
  },
  {
    "url": "features/styles/index.png",
    "revision": "fa7bef5c412acadd7632c745c4e798ff"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "c0267881f8033e65fb9675209495ddd1"
  },
  {
    "url": "features/summarizing-tool/index.png",
    "revision": "e690fdf044f3c123c215127609e0e019"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "d70266c58517757b0b08363b4e5f34ed"
  },
  {
    "url": "features/text-align/index.png",
    "revision": "10c3da111eb136806d204be192c3b8fc"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "b4ca1fa3dd690faf14f6fe58b85ad334"
  },
  {
    "url": "features/text-to-speech/index.png",
    "revision": "6e080d5175eb2a8f043794b496d04ebb"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "c94e784f5d8d1fe4fd3a6a2263b01d30"
  },
  {
    "url": "features/word-prediction/index.png",
    "revision": "90f8b2f524046338a5d75ca48e0e1e67"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "64e047063d6065df1355581e92584da7"
  },
  {
    "url": "features/zoom/index.png",
    "revision": "c6f7c16e6ff3bd36bd7b6ba3154d5fef"
  },
  {
    "url": "feedback/index.html",
    "revision": "6043d6e5484b04bbb2d4a2d72a848291"
  },
  {
    "url": "feedback/index.png",
    "revision": "67b1073f44b8e6196098662b697ea7ad"
  },
  {
    "url": "firefox/index.html",
    "revision": "845a41d5e30395cb9bc70345701ddc95"
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
    "revision": "52879a55aa5a89881e236a0f2bc217da"
  },
  {
    "url": "guides/index.html",
    "revision": "aa24860526465074fe954aab7bce0c51"
  },
  {
    "url": "guides/index.png",
    "revision": "ed4547add0de8903e972af6f6a43116a"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.html",
    "revision": "d76bc6e208d027420bb109391f1386e2"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.png",
    "revision": "6aa6d0126431d8eda9fa9541ec965e1a"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "8295a4d398d560017c205f86b0bdc0cc"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.png",
    "revision": "199a1a8b7e03280a3ff1a4c2208b7b69"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "981801abf1e55999afa4bfe6cb2b1180"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.png",
    "revision": "12e004eefd3ef173c30cf30aadd2c150"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "76e2ca1e4beaaa84d2d7f9916ff1a3b6"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.png",
    "revision": "2e7ff5b21714fd56ba416e4d02d9c931"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "aaacd18ad39320aeca5993e431cb7472"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.png",
    "revision": "170085f68b374c686dfc7cd3bededc51"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "f70a2c969a96724489b29b8f5b549c32"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.png",
    "revision": "b0eaa7b8a5b30a046d30a533f15877b9"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "73886c540d71645ba6d5d946521b3d5a"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.png",
    "revision": "5e8098bda8572a90f6de558a8e67a3e3"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "6bcc4fb6834e4955051d906fbaac47eb"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.png",
    "revision": "492e601691dd1c18fe37ebcb2fee8c5a"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "2ba55b12362530fa71add534cf2b64ca"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "18ed4e34fd6fa4049c96fa032a0e8de6"
  },
  {
    "url": "help/how-to-change-my-email/index.html",
    "revision": "1cfa9b208237b6394173e520f54ee82d"
  },
  {
    "url": "help/how-to-change-my-email/index.png",
    "revision": "fd92bc1e4e291cec414f677dde0aefcb"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "1d2814c953577eaf222f4951150c328e"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.png",
    "revision": "97d0f06f1d87d0aed704d5dbd85bd84c"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "acfaf9d1f7f5e1b3cab7ca003712da51"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.png",
    "revision": "67c4f68331761640b9762f86aac1bfb5"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "701ff944eb925db521f0bbd43d271df9"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.png",
    "revision": "58257927fd5f00196204e6243a8eb6db"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "570a8edabb8a757a2fe15cda1f1d116e"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.png",
    "revision": "25157c2e823da550a675ae8d23de5f31"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "1519cf166dab9a52dcbaa8e07aab675e"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.png",
    "revision": "0b78fbc4a578bfc68c02a8e8164a2a45"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "d2e5b105793032d677c6059958be7009"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.png",
    "revision": "3ad44ac485902ac8019766f1556149b5"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "27448287077c9f0c3e07a499dc5221ab"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.png",
    "revision": "08e3bd75838c23cfce463f244fa91303"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "5519106bd9a2cf9130732775d5c0e97a"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.png",
    "revision": "86613b49973fc8b67ae863245c2fc666"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "57ea8cd4ca4b3995810be5fc4ccf52a4"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.png",
    "revision": "c84d79a6e49b9ba2091590afcfddc037"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "3391f865f9de0e028cf3371cd3e8fdf5"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.png",
    "revision": "bf7bed3e823eee87ffdccadd38cb46ab"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "6256a8892842c2ec36bd64db76e8c82b"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.png",
    "revision": "08e3bd75838c23cfce463f244fa91303"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "075eefe4f262fdbd4052b76e3dec0c35"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.png",
    "revision": "10c3da111eb136806d204be192c3b8fc"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "c8d262cb383833dae91a03238faa87aa"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.png",
    "revision": "8a34dd121d9cd373a96e35b969b7f582"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "12f1f01c3b17d4096e3e7955ae135d9a"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.png",
    "revision": "d7e094b08ba0b0c05379b08351505789"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "d1841a33c4e1be865ee36003cecf9fc7"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.png",
    "revision": "4ae91f3355516f0828b48a009f7f2459"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "94e5fd5ea0c9ce3353df55d3dfc0c303"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.png",
    "revision": "7cd2b2c2374364bc7714d2bb721fadcf"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "76800c745953d9a6d3b0ca0291ee6969"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.png",
    "revision": "ec22566584180e96fd09e2a88678247d"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "c77188a91c6cd33684f9692295eaf2fc"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.png",
    "revision": "71d42f2313520fdc69a23fa38c28da1b"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "0c9f08b8c729ad3dd2c4c6adb4281090"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.png",
    "revision": "911551b04e7704caf857e237864d2cbd"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.html",
    "revision": "aa69822d22b30834c0e7b2d3fb396c3d"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.png",
    "revision": "a4ffa6483a060be076bbe47bdf5e2fb9"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "aa4274b8dfee24466d50001b96493255"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.png",
    "revision": "a9fe0a534b3a95d50bbfaa53642d9f0e"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "a6fd0d18efc01cc1faef08963d15d888"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.png",
    "revision": "11abcfe8d36dab310e01606a41f635f7"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "1be9e290421e2ecd9e6d2000c39ef04c"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.png",
    "revision": "0ede05f714c1bbb7dfb22918467692c8"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "66b4e4aa7e383f38fc77ece1e4fe7a84"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.png",
    "revision": "392912c6f3967fe0ee227fe89b5d6df1"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "70f21287462c2ac96a2ec6c62b2d3363"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.png",
    "revision": "fc2d7661901258b22078895ffa5f901b"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "63d1282f0340dd8dff0f3814a6423ee8"
  },
  {
    "url": "help/how-to-pause-helperbird/index.png",
    "revision": "b5b2c59f40017b05a348fe2b1c042a91"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "fc92c63d54a3e46f9be1c52234fb3db6"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.png",
    "revision": "59b80c54f37ad6d54c2f68b640eae46e"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "f359288ed9c8cbed1a53e4d767a8d432"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.png",
    "revision": "d9e7b329ea79d4bc4b604fed3275fa1f"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "d727e46e2ad3174ac89d7c5cf6c0d60c"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.png",
    "revision": "a9925433c949d614072390439054da59"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "2bf50ef28f85722835e0a0ca43454de9"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.png",
    "revision": "6d87390619f751db7e647f4a5f35db1f"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "689c3fe7fc0fdc656ef0be0412e88f4e"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.png",
    "revision": "e7480029dd38447313b8e31a9d7b92cb"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "953e156e0cdbf2736322af77d5ea0551"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.png",
    "revision": "4abe8a5677b9a4f9b6cefa62b9a1baa1"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "346e2667cc4e51b0934d0cb41a86698f"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.png",
    "revision": "786ecfbb62dd21a97b94e26709a14ddb"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "c973e18c692e1ebb70763629e35e5c07"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.png",
    "revision": "e9ce5df037491725153f5a59cc4d3469"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.html",
    "revision": "9a32d94538db085a4dcc050ebc4f2ad0"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.png",
    "revision": "940f81f4548d97124353a350f9118325"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "c4ea0af7fcde2d4136177d58b35b24bf"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.png",
    "revision": "96f09bf8f89c8a82107d751c09603b7d"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "d4f15f21e8691f57b4446532f934661f"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.png",
    "revision": "f8d83b09a0ca4c2ade77bf87a9fd7e51"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "fc53940cdbe2f6ffb4badf084ddc7fde"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.png",
    "revision": "048682e79fdf50fa74973a046cfe98be"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "8c5a3837068f021e4d4538e3e9926e14"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.png",
    "revision": "647cee866f54ced28a38fd2bcec020be"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.html",
    "revision": "e7c0e9722768e006d67723a0b7a48b4e"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.png",
    "revision": "e6ef3f5262e090798e4388d859a3b87c"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "b6c2667d456f73a444864d1ff194f0c7"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.png",
    "revision": "ee33a0d1b3e3f92be0e4cf4bd56743dd"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "75b26834eb538848c34edf08e44cb01e"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.png",
    "revision": "fa3ba7f1976576ddd8307d0f3dbcea0f"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "730c0fe77f73f94514a88dc138bdf179"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.png",
    "revision": "9ae356a07f9538cb7fef21512e133037"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "6c2d5e5fa9caa636f81378759056c50a"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.png",
    "revision": "e735cbb388d520ad270bda2068a19f6e"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "8165a77c09a2fbc14cd0b0596dcfe635"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.png",
    "revision": "bccaeb94cf2e13363c6bbd34b1f5df14"
  },
  {
    "url": "help/how-to-use-reader-mode-and-remove-ads-on-any-website/index.html",
    "revision": "0b660558f090ad6f45fe2acc4872beb7"
  },
  {
    "url": "help/how-to-use-reader-mode-and-remove-ads-on-any-website/index.png",
    "revision": "486803888f57cbcf66c16ae233cbf4d3"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "9a494ae65f615bbd9180acec18798c4c"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.png",
    "revision": "d99a22895c4bc282d418db02b9abe95a"
  },
  {
    "url": "help/how-to-use-speed-reading-features-on-any-website/index.html",
    "revision": "73015aaf7e78c8c62e370a5957607256"
  },
  {
    "url": "help/how-to-use-speed-reading-features-on-any-website/index.png",
    "revision": "aba012cf3353ca1c350d2d39347e5b5e"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "1cc3b59351205f43f1d40a60642c8ec9"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.png",
    "revision": "776e7ec9818f3351d88f28aff04064a0"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "fa2a179edb92bdd2565cef708ed774d8"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.png",
    "revision": "85c5da0e3ee00655d2b42b2cfc9fc212"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "11905183e2d172729c27829ff1ae9c6f"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.png",
    "revision": "2c369175143b64b90fa3c79a3ad6bf83"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "cfc229738ac989f0838e55b6636603ac"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.png",
    "revision": "61b960ffce947aed172baefbbd015a23"
  },
  {
    "url": "help/index.html",
    "revision": "d1e14407845484f0f65b47fc6ae18384"
  },
  {
    "url": "help/index.png",
    "revision": "c91577cdde5330fb9146a63120bea377"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "224e6c8ca572a21d7f792f1ecfbc9435"
  },
  {
    "url": "help/installing-helperbird/index.png",
    "revision": "b99f333839f7cec31d3dc4d57dfb075b"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "bd57fea634bf153d0318a8a5a9f80d6a"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.png",
    "revision": "af48d52caef445264aaba34f3e01c7ea"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.html",
    "revision": "c23811d498e29ec2dda5b200bca1c1b2"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.png",
    "revision": "65ed249c814846c489fa232a4e882de8"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "318e5479c432efd7cf42668666330da8"
  },
  {
    "url": "help/what-is-helperbird-free/index.png",
    "revision": "ae4327c940f0d208865292c69c9425e7"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "8864c37f725a89396c5c877fd613014c"
  },
  {
    "url": "help/what-is-helperbird-pro/index.png",
    "revision": "2198b79c0e12da9725f128fa47a2b2b1"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "e5c6735a6382bd08197dc863bd1e2aa8"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.png",
    "revision": "1a4dddb7384f778ca40538e87a6bf27b"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "86e5681e9e52505641ea1b1c1dbf92a1"
  },
  {
    "url": "in-the-news/index.png",
    "revision": "12236078233d5423b8f281666d3b474a"
  },
  {
    "url": "index.html",
    "revision": "ef4a33f71d0f701a5b29b8d3ae21d199"
  },
  {
    "url": "index.png",
    "revision": "6c4f55d91b1f3675eec7136d021b2166"
  },
  {
    "url": "login/index.html",
    "revision": "169d634c593fee6c3e997840accd57b7"
  },
  {
    "url": "login/index.png",
    "revision": "a6eb2ca57985ef29f5315a2ef5731f47"
  },
  {
    "url": "order/index.html",
    "revision": "aa2b13783ad8607026fb02366fa67e03"
  },
  {
    "url": "order/index.png",
    "revision": "5f3d4d79683426d0a5304dfbcf27f2f5"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.html",
    "revision": "81346c14439f510e3aab561b7fbec89d"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.png",
    "revision": "698e07b4a80a1feec522cac0bcee3e7e"
  },
  {
    "url": "partners/index.html",
    "revision": "919cf39ff8583f153801d74fc4cb554e"
  },
  {
    "url": "partners/index.png",
    "revision": "acb7fba3db788d2cbb9345e81cc0f7a0"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "b59304d7a7433382609429dc9dcf8a9c"
  },
  {
    "url": "partners/sascharoos/index.png",
    "revision": "0b4c2bfd0f7baf8ec05bff00203290ac"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "42421c837b284000c51ec745605053b2"
  },
  {
    "url": "partners/sprialisconsulting/index.png",
    "revision": "d28a5993579e0b16b5c727d2ce51ad56"
  },
  {
    "url": "pricing/index.html",
    "revision": "9b5a39b5eedbae424db314cbeeded737"
  },
  {
    "url": "pricing/index.png",
    "revision": "a59bf6efe39408cba06e4f69477770fd"
  },
  {
    "url": "privacy/index.html",
    "revision": "129098008f19b0bcead5510558bb02a1"
  },
  {
    "url": "privacy/index.png",
    "revision": "889a6b352989111517ef1b38363f996c"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "08eabca8b9d0a2a11e5ab31bb3be75e7"
  },
  {
    "url": "products/google-addon/index.png",
    "revision": "f0b9d82438a15683a911dd32da0a31bf"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "d82ff3eef6cb7684029c12dfa07b6140"
  },
  {
    "url": "products/ipad/index.png",
    "revision": "837d9454f5c8324d3fcd6ed73b773996"
  },
  {
    "url": "recommends/index.html",
    "revision": "91339f16dc7fa17e89424fcdc12955fb"
  },
  {
    "url": "recommends/index.png",
    "revision": "187c0f42b638607e3f9a7fae59dcde7e"
  },
  {
    "url": "refund/index.html",
    "revision": "213f80c2a3b83288713025254c7b684f"
  },
  {
    "url": "refund/index.png",
    "revision": "f588740bc969a79724b52d47f145dab6"
  },
  {
    "url": "reviews/index.html",
    "revision": "6864a4bc3603c39b0b2e122e4fdafc51"
  },
  {
    "url": "reviews/index.png",
    "revision": "18cd96a5bd9fb2a82f4b8aa2f60212a0"
  },
  {
    "url": "sales/index.html",
    "revision": "9b91ae681e3a0c99e6ec63b018f131a0"
  },
  {
    "url": "sales/index.png",
    "revision": "f20464534065daa0d83bf0c8a1b947bd"
  },
  {
    "url": "security/index.html",
    "revision": "7353a8d5127a50cec40038f5499a6e1f"
  },
  {
    "url": "security/index.png",
    "revision": "928d4bcfb383709de8d5c64cce4c6cbb"
  },
  {
    "url": "sitemap/index.html",
    "revision": "70c435c1743a923ad01a65388ca3a080"
  },
  {
    "url": "sitemap/index.png",
    "revision": "ae8017833a4e464a47c1ab348575fd8e"
  },
  {
    "url": "success-education/index.html",
    "revision": "5f225e4f2e00993f9bfca6cb319eab4f"
  },
  {
    "url": "success-education/index.png",
    "revision": "4d462d0847a0ae7c445c437004a4f516"
  },
  {
    "url": "success/index.html",
    "revision": "0fc4f30a9c4a2eb8aa01aca6dffb295e"
  },
  {
    "url": "success/index.png",
    "revision": "0bd3223b9433ad0d611f73b6c2c28ff1"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.html",
    "revision": "2ca8d306e8b2385ccbbfd3131d0dca38"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.png",
    "revision": "7d55a7bb10cde47e2df15f150045b716"
  },
  {
    "url": "support/cancel/index.html",
    "revision": "a8659466210fe9acffec9bed49d81f25"
  },
  {
    "url": "support/cancel/index.png",
    "revision": "f5cfbdf599f4661cf48214098081acc9"
  },
  {
    "url": "support/how-to-annotate-any-website-or-pdf-with-a-browser-extension/index.html",
    "revision": "48636bb9d05130fe4b328d78e695e915"
  },
  {
    "url": "support/how-to-annotate-any-website-or-pdf-with-a-browser-extension/index.png",
    "revision": "42a5b4906e2873d99b3e3338ef5bc084"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "ffacce86ac98da2631a10f8d6f963f35"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "f5cfbdf599f4661cf48214098081acc9"
  },
  {
    "url": "support/how-to-change-my-email/index.html",
    "revision": "4c521858cc900d425796033ff8900853"
  },
  {
    "url": "support/how-to-change-my-email/index.png",
    "revision": "2824d4175d07839edd892d8fdf1ab461"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.html",
    "revision": "a7b01703d25dec58a72ba6f8dd9e3f14"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.png",
    "revision": "a6eb2ca57985ef29f5315a2ef5731f47"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.html",
    "revision": "66fe1b7921e8fa93d41346dd0abf7211"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.png",
    "revision": "cb3992e6e9eb1188469d13d84bfce7b0"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.html",
    "revision": "b6c37746863bcaab12399f4a330fe1f0"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.png",
    "revision": "0a458aa5b99892f39d41653d68f658ab"
  },
  {
    "url": "support/how-to-use-reader-mode-in-google-chrome-firefox-edge/index.html",
    "revision": "e474a72354279bde050132d04adad75d"
  },
  {
    "url": "support/how-to-use-reader-mode-in-google-chrome-firefox-edge/index.png",
    "revision": "64a03c96092e024b04ac8fa4ce76283c"
  },
  {
    "url": "support/how-to-use-reader-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.html",
    "revision": "14bcce9eddbee6e63370844aa58d1887"
  },
  {
    "url": "support/how-to-use-reader-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.png",
    "revision": "1f20203ce14b65f150a38d554a1eef93"
  },
  {
    "url": "support/index.html",
    "revision": "3ad99aef4fe62552fef09305dc52a887"
  },
  {
    "url": "support/index.png",
    "revision": "2adb35667bb5799187c1dd7c56aa59e6"
  },
  {
    "url": "survey/index.html",
    "revision": "808baf9ba9990bae4120967fe03b5714"
  },
  {
    "url": "survey/index.png",
    "revision": "2b19b08763eee74a043e395d0a8aabd4"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "40137ab4301b025b8c3fa8f1948203c0"
  },
  {
    "url": "terms-of-service/index.png",
    "revision": "e709b4264aa328356cb94220f743de7e"
  },
  {
    "url": "testimonials/index.html",
    "revision": "4f1f7f7797c11c3d8900ef54c828ff1a"
  },
  {
    "url": "testimonials/index.png",
    "revision": "d3d7f41a36798455ecdefbd55d932e05"
  },
  {
    "url": "tutorials/index.html",
    "revision": "bbd46aff8d2cfdfaddbd788518f2aafa"
  },
  {
    "url": "tutorials/index.png",
    "revision": "a9e64d3ba105ff0701f6dc21286a78e5"
  },
  {
    "url": "updates/100-0-0/index.html",
    "revision": "696b899c21c879b7a259b7d56e9a3ad1"
  },
  {
    "url": "updates/100-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-1/index.html",
    "revision": "e3390247d5128994b71a408db50db542"
  },
  {
    "url": "updates/100-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-3/index.html",
    "revision": "28247c5b9a3a3b2647fb56b1bb20f00f"
  },
  {
    "url": "updates/100-0-3/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-4/index.html",
    "revision": "6088b3e61ac3429c32a740b1c7cb1d15"
  },
  {
    "url": "updates/100-0-4/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-5/index.html",
    "revision": "c5328ea3415190c2ea306cb1f8520713"
  },
  {
    "url": "updates/100-0-5/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-6/index.html",
    "revision": "6c944498c45f0eca647ec04b7febabe2"
  },
  {
    "url": "updates/100-0-6/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-7/index.html",
    "revision": "6c3e00f9f64d21bc098deb489daa5f54"
  },
  {
    "url": "updates/100-0-7/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-1-0/index.html",
    "revision": "8bd9944387641266c2e29568cff1a74b"
  },
  {
    "url": "updates/100-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-1-1/index.html",
    "revision": "f80f6b4bf30a6a87452d88c233d8bd33"
  },
  {
    "url": "updates/100-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-1-3/index.html",
    "revision": "6d98bfc24295c5cd7abc8cdb8cd8b41c"
  },
  {
    "url": "updates/100-1-3/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-5-0/index.html",
    "revision": "1188f00a4f6489da085724c379390bbd"
  },
  {
    "url": "updates/100-5-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-6-0/index.html",
    "revision": "e954189c0cbc39a678e6815fe593ba1b"
  },
  {
    "url": "updates/100-6-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-6-1/index.html",
    "revision": "3514af4eada0d5649b6467588c134e51"
  },
  {
    "url": "updates/100-6-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/101-5-0/index.html",
    "revision": "4f43a4700280318255883b315eb9903f"
  },
  {
    "url": "updates/101-5-0/index.png",
    "revision": "d5ff1f28d9234083debd0328da594199"
  },
  {
    "url": "updates/101-5-1/index.html",
    "revision": "6db3a97c98f94315dcc47d7cf52d8f7f"
  },
  {
    "url": "updates/101-5-1/index.png",
    "revision": "d5ff1f28d9234083debd0328da594199"
  },
  {
    "url": "updates/102-1-1/index.html",
    "revision": "03f175150fde99bb570dbbe2443fb1f3"
  },
  {
    "url": "updates/102-1-1/index.png",
    "revision": "48eebdf3af0fccce04599db9e9b0b529"
  },
  {
    "url": "updates/24-1-0/index.html",
    "revision": "9b8bc35ebba24990f73133794a2a50db"
  },
  {
    "url": "updates/24-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-1-1/index.html",
    "revision": "695efcfd1f135a1fa259a4e913cc232f"
  },
  {
    "url": "updates/24-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-1-2/index.html",
    "revision": "5e3c24595959fbfc2aa0d891532b2815"
  },
  {
    "url": "updates/24-1-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-2-2/index.html",
    "revision": "a71b2695e6e705dd7fc3bb906308b320"
  },
  {
    "url": "updates/24-2-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-2-4/index.html",
    "revision": "120a35ce4186aa6ea747dd673ce2e4cc"
  },
  {
    "url": "updates/24-2-4/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-3-0/index.html",
    "revision": "788fefa8d8f6b772b2c6410756c130ac"
  },
  {
    "url": "updates/24-3-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/25-0-0/index.html",
    "revision": "8017152b1f5132e608473d5fe392c35b"
  },
  {
    "url": "updates/25-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/25-0-1/index.html",
    "revision": "8f11caed07a95c44b2a7cb66e0f17d4a"
  },
  {
    "url": "updates/25-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/25-1-0/index.html",
    "revision": "0c97c7793e53b360fe94e91df640c60c"
  },
  {
    "url": "updates/25-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/26-0-1/index.html",
    "revision": "93b3747642d7604ef6f207684bda23fc"
  },
  {
    "url": "updates/26-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/26-0-2/index.html",
    "revision": "8732a7fe4f889d4f2c2fe60d9ec90109"
  },
  {
    "url": "updates/26-0-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/26-1-1/index.html",
    "revision": "33d4450909f8a200635b85d1b244de49"
  },
  {
    "url": "updates/26-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/27-0-0/index.html",
    "revision": "bb54179935ccfa6241fbffc00055bc8b"
  },
  {
    "url": "updates/27-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/27-1-0/index.html",
    "revision": "05099c3582095bae5029a471e27eb7be"
  },
  {
    "url": "updates/27-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/28-0-2/index.html",
    "revision": "33e10629058265a24aed919c379848b8"
  },
  {
    "url": "updates/28-0-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-0-0/index.html",
    "revision": "3f7612d6868e394d7c17c16928b9e374"
  },
  {
    "url": "updates/30-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-2-0/index.html",
    "revision": "e6dc94f2815db25fed801027c8e22176"
  },
  {
    "url": "updates/30-2-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-3-0/index.html",
    "revision": "4d0f0241aea2276257c8698994309a6d"
  },
  {
    "url": "updates/30-3-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-4-0/index.html",
    "revision": "1ccfaddc166f4734fd97b9724e7eb445"
  },
  {
    "url": "updates/30-4-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-5-0/index.html",
    "revision": "1b0cbedd161ab246e172b3f04a5c98d2"
  },
  {
    "url": "updates/30-5-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-6-0/index.html",
    "revision": "6eacb7654234d38f79218013ea98e0b1"
  },
  {
    "url": "updates/30-6-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/31-0-0/index.html",
    "revision": "dae4c065ba8ebc415b40b5c6389ab7e1"
  },
  {
    "url": "updates/31-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/32-0-0/index.html",
    "revision": "6ac8e52542025104abd3487653bb6557"
  },
  {
    "url": "updates/32-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/32-1-0/index.html",
    "revision": "4a3a422ab143651bac56bf5ce4082d22"
  },
  {
    "url": "updates/32-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/33-0-0/index.html",
    "revision": "5942f38a840fea1023bbf9c953325f90"
  },
  {
    "url": "updates/33-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/35-0-0/index.html",
    "revision": "60a5a495b6492a7fd6dd7babea366583"
  },
  {
    "url": "updates/35-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/36-0-0/index.html",
    "revision": "d5f1dcf4ea17ee300d05d2d4edf367a4"
  },
  {
    "url": "updates/36-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/36-0-5/index.html",
    "revision": "b1f0cb0f340714decd0c08f2b55c8e36"
  },
  {
    "url": "updates/36-0-5/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/40-0-0/index.html",
    "revision": "ed4c14792b6d3102644dd02c3651a3f2"
  },
  {
    "url": "updates/40-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/40-0-1/index.html",
    "revision": "27733843e3bfbd513843b4ebd89c703a"
  },
  {
    "url": "updates/40-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/40-1-0/index.html",
    "revision": "a4977bc192527ccdcc19acba9dc181ac"
  },
  {
    "url": "updates/40-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/50-0-0/index.html",
    "revision": "f98b536d1fcf5847498f8ade871ebf5f"
  },
  {
    "url": "updates/50-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/55-0-0/index.html",
    "revision": "5c6c62c61b022bc733c844ccb807275c"
  },
  {
    "url": "updates/55-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/55-1-0/index.html",
    "revision": "eb870843584132cf5756f96d8ceb6d82"
  },
  {
    "url": "updates/55-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/56-0-0/index.html",
    "revision": "2044dd1410ef001637a85696afc50cfe"
  },
  {
    "url": "updates/56-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/60-0-0/index.html",
    "revision": "96ff1ce4e27271e00a72c4db0bb0b265"
  },
  {
    "url": "updates/60-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/60-1-0/index.html",
    "revision": "ca0c40c7f6e6d3204110064a67ee7d27"
  },
  {
    "url": "updates/60-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/60-1-1/index.html",
    "revision": "4beb2d87e4353646fbe7651f6d05e196"
  },
  {
    "url": "updates/60-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/61-0-0/index.html",
    "revision": "7f915af6d36ff8a4c3b452e2244ee225"
  },
  {
    "url": "updates/61-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/70-0-0/index.html",
    "revision": "7173bda7a2670737a854535966ba7d84"
  },
  {
    "url": "updates/70-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/70-1-0/index.html",
    "revision": "8cde9f32353541548832036973cd524a"
  },
  {
    "url": "updates/70-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/70-2-1/index.html",
    "revision": "a929f0419c0cae987d60c8e1937c24b5"
  },
  {
    "url": "updates/70-2-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/75-0-0/index.html",
    "revision": "33e5da4afe2fa33f40a4c7cff90e7d41"
  },
  {
    "url": "updates/75-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/76-0-0/index.html",
    "revision": "543653059b2203912189d1a6ed08f1df"
  },
  {
    "url": "updates/76-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-0-0/index.html",
    "revision": "ab3c8cee76bd184b74288e2f186e4959"
  },
  {
    "url": "updates/80-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-1-0/index.html",
    "revision": "ac8033fb6c3ee9c6c4fd9fdd348df60e"
  },
  {
    "url": "updates/80-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-2-0/index.html",
    "revision": "e27949502978277d83b8b8dc2180b180"
  },
  {
    "url": "updates/80-2-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-3-0/index.html",
    "revision": "bdd428fee480868a1916f6d16a5e0aeb"
  },
  {
    "url": "updates/80-3-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-4-0/index.html",
    "revision": "1b8a9c5f12dea0f547827d83b24e71a4"
  },
  {
    "url": "updates/80-4-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-4-1/index.html",
    "revision": "d699df64407cdd97d12803118bd94ab6"
  },
  {
    "url": "updates/80-4-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-5-0/index.html",
    "revision": "f1897e375145cf3741bbd31e99d0564f"
  },
  {
    "url": "updates/80-5-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-5-1/index.html",
    "revision": "6bbd77c73c2f03088a2d3a5aefc5de5d"
  },
  {
    "url": "updates/80-5-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-0-0/index.html",
    "revision": "3b1bfd1bf572e604126a800933f99388"
  },
  {
    "url": "updates/90-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-1-0/index.html",
    "revision": "304cef1570e7d5b0450cbb411297b38a"
  },
  {
    "url": "updates/90-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-1-1/index.html",
    "revision": "7d0b44d38c43cfef84bdc6cb5b875e14"
  },
  {
    "url": "updates/90-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-1-4/index.html",
    "revision": "b3203d29a1bc9bae84673b35dd06625f"
  },
  {
    "url": "updates/90-1-4/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/index.html",
    "revision": "4bc2f4f4a00aa0d65c5c368bb0f38d90"
  },
  {
    "url": "updates/index.png",
    "revision": "9834a3ed9aabb52a91d8669ccd461f9c"
  },
  {
    "url": "updates/kingfisher/index.html",
    "revision": "cf3ca1efbdbdcf336a10a3304ae6f176"
  },
  {
    "url": "updates/kingfisher/index.png",
    "revision": "d5ff1f28d9234083debd0328da594199"
  },
  {
    "url": "updates/robin/index.html",
    "revision": "3ffcb333737fffee8c7456d16c70bcd8"
  },
  {
    "url": "updates/robin/index.png",
    "revision": "56ee25dd68af95068b4177feffc8a0c0"
  },
  {
    "url": "welcome/index.html",
    "revision": "aacb5b3fdd5c00314422b49ae2ece6e5"
  },
  {
    "url": "welcome/index.png",
    "revision": "7580f9fb19b34b4bf66d0076418ec2d9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
