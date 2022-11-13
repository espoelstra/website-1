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
    "revision": "d59ae7341d2139205506d17eba64dc2c"
  },
  {
    "url": "404.png",
    "revision": "e94ce63b35a57b3e639ad0d5707a38ea"
  },
  {
    "url": "about/index.html",
    "revision": "44f0e3d1a51f1867f44230ad2510196a"
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
    "revision": "8bfdd4fb44f3268ffded9bdeca13fff0"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.html",
    "revision": "85c6dfefdd081e89783ef25a2deb8903"
  },
  {
    "url": "blog/4-ways-to-be-more-accessible-on-social-media/index.png",
    "revision": "358a910beea235a97b05e509a8dffbf6"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.html",
    "revision": "32d8fdeca73a058d3bb19ccdd2a67d91"
  },
  {
    "url": "blog/6-famous-people-with-dyslexia/index.png",
    "revision": "6601b681406ac9650ac5950b42a20d21"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.html",
    "revision": "1676cdbf5d94e3b54debc2d5a4ee1d73"
  },
  {
    "url": "blog/accessibility-tips-for-epilepsy/index.png",
    "revision": "7f33fdc22cb24445d0b306c1ff71e5c6"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.html",
    "revision": "741d60b9b6ca5743f8c7c3e8c1f86480"
  },
  {
    "url": "blog/benefits-of-ipads-in-the-classroom/index.png",
    "revision": "31bdedaf3fb01eb8392d84c4dabfc111"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.html",
    "revision": "2465c2769fe871cc4bd94087459807c9"
  },
  {
    "url": "blog/best-careers-for-people-with-dyslexia/index.png",
    "revision": "3ed85419b7b2a3675e30313bb734c653"
  },
  {
    "url": "blog/giveaway-rules/index.html",
    "revision": "b17ac3cc467ecc6fa48cead4e98670bc"
  },
  {
    "url": "blog/giveaway-rules/index.png",
    "revision": "6171b8f719a5173ae1911848ae133113"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.html",
    "revision": "900a4056d2a99e673fcb8463dc6fac5a"
  },
  {
    "url": "blog/helperbirds-winner-of-the-2021-chromebook/index.png",
    "revision": "e05d085a0f21e0dc30944fda1f6e7aa7"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.html",
    "revision": "46ccbf7482915e87578a9c41c627b701"
  },
  {
    "url": "blog/how-to-add-extensions-to-safari/index.png",
    "revision": "880abe3fe99ebbae47c8a61dace46cb0"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.html",
    "revision": "e9acf6b6ee7b4b61fa079ebeb8a57828"
  },
  {
    "url": "blog/how-to-avoid-wfh-burnout-and-maximize-productivity/index.png",
    "revision": "50d55f9743e257ade75237ad9ec12069"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.html",
    "revision": "238b1264700d8b8f708fa3b05a6e5a76"
  },
  {
    "url": "blog/how-to-deploy-apps-and-extensions-through-the-google-admin-console/index.png",
    "revision": "800e4b662a733390b3e6301820e7d782"
  },
  {
    "url": "blog/how-to-install-and-set-up-helperbird/index.html",
    "revision": "5afe74a0df2377897e7951c20ce2d66e"
  },
  {
    "url": "blog/how-to-install-and-set-up-helperbird/index.png",
    "revision": "472c5ba52e2184f83d58c6fe95ddebdc"
  },
  {
    "url": "blog/how-to-install-helperbird-in-edu-accounts/index.html",
    "revision": "b4b1f316a45c70a5daa6dcc93f66b769"
  },
  {
    "url": "blog/how-to-install-helperbird-in-edu-accounts/index.png",
    "revision": "ee03370fc0338095fb4461174bcb05f1"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.html",
    "revision": "5032d1db120a88ec155b1646765199c8"
  },
  {
    "url": "blog/how-to-keep-wfh-employees-engaged-and-motivated/index.png",
    "revision": "c7682a65a1dde2a2f4b7bd0c33e8716c"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.html",
    "revision": "cc70771f3dbb2711b36bb8876ff395d1"
  },
  {
    "url": "blog/how-to-use-immersive-reader-in-google-docs/index.png",
    "revision": "dfcf0f812ee0a87c0e6c47cf55a23ad4"
  },
  {
    "url": "blog/index.html",
    "revision": "b8cdc32ebdeb9433283deeee7d4e900d"
  },
  {
    "url": "blog/index.png",
    "revision": "d5a37d8d873b6f9c529b32249d428ab8"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.html",
    "revision": "2be7bb0a3443742a3b6356fcdc3ffc6d"
  },
  {
    "url": "blog/interview-with-dyslexic-founder-of-helperbird/index.png",
    "revision": "084bc24b505c9b8996142691f78331b6"
  },
  {
    "url": "blog/is-helperbird-free/index.html",
    "revision": "785cc5da7c00d0b130280fe13a38f782"
  },
  {
    "url": "blog/is-helperbird-free/index.png",
    "revision": "d37a099344ed769b6f30705388aadc64"
  },
  {
    "url": "blog/is-helperbird-safe/index.html",
    "revision": "41c5116019321acb81e65402f036da2b"
  },
  {
    "url": "blog/is-helperbird-safe/index.png",
    "revision": "9ca058aec5195efc5050ed85a6c91dcc"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.html",
    "revision": "13ca1edaeaa23d941f2ff0af64681ae0"
  },
  {
    "url": "blog/positive-thoughts-might-benefit-dyslexic-students/index.png",
    "revision": "51b8ce3d86f0f1dc91a42002d2633041"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.html",
    "revision": "ae9491d82ac65a1e0eaa1284d4a5b5a0"
  },
  {
    "url": "blog/research-into-web-accessibility-for-dyslexics-and-dyslexia-focused-fonts-such-as-opendyslexia/index.png",
    "revision": "2867fdee0f29eb79ba04723f1aad8948"
  },
  {
    "url": "blog/signin/index.html",
    "revision": "75a242473c221591bef620885ab0143f"
  },
  {
    "url": "blog/signin/index.png",
    "revision": "e6436e54874dcb71660ab6df2d33be0e"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.html",
    "revision": "8d6ff7307786c5ae437d7d424a7135b5"
  },
  {
    "url": "blog/stay-on-task-8-productivity-tips-to-help-you-stay-focused-at-work/index.png",
    "revision": "a0019fc5ee953a86ca69f4dd09affbd7"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.html",
    "revision": "1adfba9f7331e7284f4685af82436a14"
  },
  {
    "url": "blog/teacher-appreciation-week-2020-dyslexia-story/index.png",
    "revision": "e129ac86642a6ec98523d1b936ac835a"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.html",
    "revision": "c8a1517cc0f9e48766215ba1ce92d4c7"
  },
  {
    "url": "blog/thanksgiving-message-from-helperbird/index.png",
    "revision": "8194ee15bfebd169c2955f57a12090ea"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.html",
    "revision": "edee6f85750eed49a6c9716fc21af00c"
  },
  {
    "url": "blog/the-5-must-have-accessibility-tools-for-students-in-2021/index.png",
    "revision": "dfd9ba8e90d84a0245cf57ea502df883"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.html",
    "revision": "dacf1308aa0307570bb1032489de452f"
  },
  {
    "url": "blog/three-facts-about-dyslexia/index.png",
    "revision": "d084ddcf579bf5abcbfe74f2615bb886"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.html",
    "revision": "9c62224c481039ad9a71e706d022df90"
  },
  {
    "url": "blog/top-5-productivity-microsoft-edge-extensions/index.png",
    "revision": "a8e12e56f055240d7fad30ae49cd08ee"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.html",
    "revision": "64572d38c09f8328da3097148f832517"
  },
  {
    "url": "blog/top-6-chrome-extensions-for-teachers/index.png",
    "revision": "577e7ae57786162328eefa178f52b325"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.html",
    "revision": "83336e8696503e9fb629cdb2ceeef292"
  },
  {
    "url": "blog/top-five-features-of-helperbird-to-help-your-students-in-2021/index.png",
    "revision": "7da69e2ce92533155355a95f7744b62e"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.html",
    "revision": "3d067124dba746dc022a0e1c58dece03"
  },
  {
    "url": "blog/top-ipad-apps-for-accessibility/index.png",
    "revision": "33cd5959f0c0b8433a88685b50670158"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.html",
    "revision": "490dcbfef17e8a198654f0cbcbe61312"
  },
  {
    "url": "blog/top-productivity-extensions-for-safari/index.png",
    "revision": "3afdf13f4c1f0126e7769dd1e725ec72"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.html",
    "revision": "e2fe157ed611445f18de0fa94c56ad59"
  },
  {
    "url": "blog/tv-and-movie-characters-with-dyslexia/index.png",
    "revision": "44e2c1235892146e86afcb5292e28017"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.html",
    "revision": "e42af969fbedb2ef634541adde763e03"
  },
  {
    "url": "blog/what-is-coppa-and-ferpa/index.png",
    "revision": "47b175ec47593888d121442cb2714efc"
  },
  {
    "url": "chrome/index.html",
    "revision": "72b335c9afcbc5ef5d90ce2d5c90a099"
  },
  {
    "url": "chrome/index.png",
    "revision": "ca8f5b93c7560ba818ef93b983728e33"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.html",
    "revision": "c90b24281a70b3b595217fcb69047906"
  },
  {
    "url": "compare/immersive-reader-by-microsoft-alternative/index.png",
    "revision": "ae8ef4de2710a13a3f418a6e0cb7ed81"
  },
  {
    "url": "compare/index.html",
    "revision": "c0dd6230b4c03dfb0be8b74c3220fe41"
  },
  {
    "url": "compare/index.png",
    "revision": "fc0fdd37a340b1bd610ba78072ed2a67"
  },
  {
    "url": "compare/read-and-write-alternative/index.html",
    "revision": "9e2215425df038693eb251007984d406"
  },
  {
    "url": "compare/read-and-write-alternative/index.png",
    "revision": "fe8b2f3b1aacf9d1750d6a8563376e94"
  },
  {
    "url": "compare/snap-and-read-alternative/index.html",
    "revision": "ff9153d81947d63297e3e3cd0b742907"
  },
  {
    "url": "compare/snap-and-read-alternative/index.png",
    "revision": "77163f265dd53491b9599632e9f2dae3"
  },
  {
    "url": "compliance/index.html",
    "revision": "569dfeaaf02a71a81bda17af2549d99b"
  },
  {
    "url": "compliance/index.png",
    "revision": "6a439823b54f65d4a58d92d1a6cd2468"
  },
  {
    "url": "contact/index.html",
    "revision": "03372f42d3470aa8202724d6c4c80f3b"
  },
  {
    "url": "contact/index.png",
    "revision": "2e817873282134e94d2e4836b4a1206c"
  },
  {
    "url": "edge/index.html",
    "revision": "7a878f6bb6dc05c6dec8fc7f5c073af4"
  },
  {
    "url": "edge/index.png",
    "revision": "da5a3e4b8dc1965adc670b924ea86c52"
  },
  {
    "url": "edu/index.html",
    "revision": "0ec34523ba363dbda60e160351e562db"
  },
  {
    "url": "edu/index.png",
    "revision": "62146d2d31dcfaf26dff897cc6060992"
  },
  {
    "url": "enterprise/index.html",
    "revision": "8951f5993d10db0bed0ad11ffc76c499"
  },
  {
    "url": "enterprise/index.png",
    "revision": "2bd5aa43c4e62cfdbad972897f9dd304"
  },
  {
    "url": "extension/index.html",
    "revision": "ad9774811a2edfef658af93cc9b7e786"
  },
  {
    "url": "extension/index.png",
    "revision": "09056a251791060e768ec0f65c6fdd12"
  },
  {
    "url": "features/adjust-letters-and-words/index.html",
    "revision": "fc6f24bb754e7922d9b5137288f92bfb"
  },
  {
    "url": "features/adjust-letters-and-words/index.png",
    "revision": "827bcfb6e5bfb5efacf17f8901781766"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.html",
    "revision": "7687cecc21bbe1030855858eb8feecd2"
  },
  {
    "url": "features/alt-tool-tip-highlighter/index.png",
    "revision": "c3ac3a70abf8f39f5ec03b2b6ac8c37a"
  },
  {
    "url": "features/analyze/index.html",
    "revision": "2242da0464c0c163e84098da4322332f"
  },
  {
    "url": "features/analyze/index.png",
    "revision": "72335dbf9499a1ed092d44b385a39b72"
  },
  {
    "url": "features/annotation/index.html",
    "revision": "71ef6ef6ca2200091b8bd8bcef533ced"
  },
  {
    "url": "features/annotation/index.png",
    "revision": "e2bab68d47aadead87ac07229631ec58"
  },
  {
    "url": "features/auto-scroll/index.html",
    "revision": "b6d3a4084e3d290b94a46e80aad0ce66"
  },
  {
    "url": "features/auto-scroll/index.png",
    "revision": "d027d945d3cadc297db8406f0cc4a797"
  },
  {
    "url": "features/bookmarks/index.html",
    "revision": "1d79bfba28559d9a8dbf59bffeffbc7a"
  },
  {
    "url": "features/bookmarks/index.png",
    "revision": "9ae356a07f9538cb7fef21512e133037"
  },
  {
    "url": "features/color-blindness/index.html",
    "revision": "8fc7e2e108140d076759ace4dc0de222"
  },
  {
    "url": "features/color-blindness/index.png",
    "revision": "a5a19f8eac4d32059962b41e6e34b9c0"
  },
  {
    "url": "features/cursor-control/index.html",
    "revision": "8fd1b4f6b33ec80a66962f7ce79382e2"
  },
  {
    "url": "features/cursor-control/index.png",
    "revision": "71a6d739ad01632039677fde6b509c9e"
  },
  {
    "url": "features/dictionary/index.html",
    "revision": "49442aaf98996305e98e689c6ba6e97b"
  },
  {
    "url": "features/dictionary/index.png",
    "revision": "dfbb6c4d6174f39fc4515aa31223e8a1"
  },
  {
    "url": "features/editor/index.html",
    "revision": "fc20c0dab6845d66966c02a96a086006"
  },
  {
    "url": "features/editor/index.png",
    "revision": "1ec77cbd2ca76885c6245727ddc4fdd8"
  },
  {
    "url": "features/font-sizes/index.html",
    "revision": "72414417964c547c49fde7fe059d7527"
  },
  {
    "url": "features/font-sizes/index.png",
    "revision": "3ad44ac485902ac8019766f1556149b5"
  },
  {
    "url": "features/google-translate/index.html",
    "revision": "2aa104da3540cc50d2f9713e9d0d8060"
  },
  {
    "url": "features/google-translate/index.png",
    "revision": "786ecfbb62dd21a97b94e26709a14ddb"
  },
  {
    "url": "features/gray-hue-overlay/index.html",
    "revision": "b30de160dcb0a7939d48ca107c07b064"
  },
  {
    "url": "features/gray-hue-overlay/index.png",
    "revision": "d0bbb8e90269b8babb7afae6f2ebf046"
  },
  {
    "url": "features/hide-images/index.html",
    "revision": "bc9407054fdbd8d8011c6e40a705f368"
  },
  {
    "url": "features/hide-images/index.png",
    "revision": "faad2149543a4cbfe057f29ee17d51d1"
  },
  {
    "url": "features/high-contrast/index.html",
    "revision": "e8ea77ede1a9540b91d0e71e0c7347a8"
  },
  {
    "url": "features/high-contrast/index.png",
    "revision": "fa3ba7f1976576ddd8307d0f3dbcea0f"
  },
  {
    "url": "features/highlight-paragraphs/index.html",
    "revision": "92621c0765eb324a8b8629fd5af56f53"
  },
  {
    "url": "features/highlight-paragraphs/index.png",
    "revision": "11abcfe8d36dab310e01606a41f635f7"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.html",
    "revision": "d9f1cbaefb19d60f308cc1a9c04c753c"
  },
  {
    "url": "features/immersive-reader-for-chrome/index.png",
    "revision": "5a162c6b21019fbd1a107011d235601b"
  },
  {
    "url": "features/index.html",
    "revision": "e4b767ccc4bce224c8a9a6fb507aa600"
  },
  {
    "url": "features/index.png",
    "revision": "794ff91209ba924c2dc98bef956fd9cb"
  },
  {
    "url": "features/mute-videos/index.html",
    "revision": "617e74ecbb546c6ee091a8fc29b16256"
  },
  {
    "url": "features/mute-videos/index.png",
    "revision": "c111d336e09f7459f983c404b6069384"
  },
  {
    "url": "features/notes/index.html",
    "revision": "5895362646cbcab32035c2b00020b0c6"
  },
  {
    "url": "features/notes/index.png",
    "revision": "97349414af6e4806ecb4a0cbd28acef2"
  },
  {
    "url": "features/optical-character-recognition/index.html",
    "revision": "713977fd74683e51914e1e211cf83c68"
  },
  {
    "url": "features/optical-character-recognition/index.png",
    "revision": "d6502356edd08615ffd1d7ee5ec3670c"
  },
  {
    "url": "features/overlay/index.html",
    "revision": "050b8e209b3a26844557e9854254f7c6"
  },
  {
    "url": "features/overlay/index.png",
    "revision": "8ba2106225f997ce5af4374849870a65"
  },
  {
    "url": "features/paragraph-widths/index.html",
    "revision": "9ea007e9ae261bf6bfa3e1802207ab57"
  },
  {
    "url": "features/paragraph-widths/index.png",
    "revision": "7fa7675422606c138c0b450d3a1c1a3e"
  },
  {
    "url": "features/pdfs/index.html",
    "revision": "066a14205e1d707d0302bfbf6dccf3ef"
  },
  {
    "url": "features/pdfs/index.png",
    "revision": "85c5da0e3ee00655d2b42b2cfc9fc212"
  },
  {
    "url": "features/printing-tool/index.html",
    "revision": "2bf92d7a9be1351ea97de26e52734490"
  },
  {
    "url": "features/printing-tool/index.png",
    "revision": "bcbf3429152c61d1eafa7c482337de6f"
  },
  {
    "url": "features/privacy/index.html",
    "revision": "93e79df6f2746221a248c89ed3ce5a64"
  },
  {
    "url": "features/privacy/index.png",
    "revision": "7acc222456e17b8c4a2bc91aa0a3dc49"
  },
  {
    "url": "features/reader-mode-for-chrome-and-firefox/index.html",
    "revision": "4f1c4eea2b3c80810e6b4c768a328219"
  },
  {
    "url": "features/reader-mode-for-chrome-and-firefox/index.png",
    "revision": "486803888f57cbcf66c16ae233cbf4d3"
  },
  {
    "url": "features/reading-guide/index.html",
    "revision": "d5cf69c881deb691c77ecc42175b6eaf"
  },
  {
    "url": "features/reading-guide/index.png",
    "revision": "048682e79fdf50fa74973a046cfe98be"
  },
  {
    "url": "features/ruler/index.html",
    "revision": "83bdb1982d557b35662b2953584c31a6"
  },
  {
    "url": "features/ruler/index.png",
    "revision": "051a9997fb93202cc64a9e4779b27cba"
  },
  {
    "url": "features/screenshot/index.html",
    "revision": "2a9c704d12b31e067add55830e944893"
  },
  {
    "url": "features/screenshot/index.png",
    "revision": "5dea251e2a70336e92bbb801963fea13"
  },
  {
    "url": "features/shortcuts/index.html",
    "revision": "6e8f1a0145ecdc5bf0071b53b6b45444"
  },
  {
    "url": "features/shortcuts/index.png",
    "revision": "62a3060789ecb9e36095a0fa801831aa"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.html",
    "revision": "35bbcb767db8714b801ee3e2ba333fbe"
  },
  {
    "url": "features/specialised-dyslexic-fonts/index.png",
    "revision": "ddf0377744a6b2dccd8afbf2334ea18f"
  },
  {
    "url": "features/speech-to-text/index.html",
    "revision": "454f136a6cf34fa895ac541bc48da7aa"
  },
  {
    "url": "features/speech-to-text/index.png",
    "revision": "d99a22895c4bc282d418db02b9abe95a"
  },
  {
    "url": "features/speed-reading-extension/index.html",
    "revision": "3e9d9ad1c25a48f2432a4bec35fdc4db"
  },
  {
    "url": "features/speed-reading-extension/index.png",
    "revision": "aba012cf3353ca1c350d2d39347e5b5e"
  },
  {
    "url": "features/spell-check/index.html",
    "revision": "3cd6b80cf027011e257d314467794bd1"
  },
  {
    "url": "features/spell-check/index.png",
    "revision": "9b5c2a91ebfdc63f4d8fffaff4112453"
  },
  {
    "url": "features/styles/index.html",
    "revision": "1e435c9bbe6d7a444a2addd363a8f0f7"
  },
  {
    "url": "features/styles/index.png",
    "revision": "fa7bef5c412acadd7632c745c4e798ff"
  },
  {
    "url": "features/summarizing-tool/index.html",
    "revision": "90cfa7ed612225dd9ed110db8b38dc75"
  },
  {
    "url": "features/summarizing-tool/index.png",
    "revision": "e690fdf044f3c123c215127609e0e019"
  },
  {
    "url": "features/text-align/index.html",
    "revision": "0596de3af793575c250b1010db50959d"
  },
  {
    "url": "features/text-align/index.png",
    "revision": "10c3da111eb136806d204be192c3b8fc"
  },
  {
    "url": "features/text-to-speech/index.html",
    "revision": "54662b7bd27a463be74d209e195f5a81"
  },
  {
    "url": "features/text-to-speech/index.png",
    "revision": "6e080d5175eb2a8f043794b496d04ebb"
  },
  {
    "url": "features/word-prediction/index.html",
    "revision": "2e002647ca43117a985d0800b17d148f"
  },
  {
    "url": "features/word-prediction/index.png",
    "revision": "90f8b2f524046338a5d75ca48e0e1e67"
  },
  {
    "url": "features/zoom/index.html",
    "revision": "2854ea883d6b9de30298d02f9322aed7"
  },
  {
    "url": "features/zoom/index.png",
    "revision": "c6f7c16e6ff3bd36bd7b6ba3154d5fef"
  },
  {
    "url": "feedback/index.html",
    "revision": "fc2e4dc56936c7f197caad07234fdc61"
  },
  {
    "url": "feedback/index.png",
    "revision": "67b1073f44b8e6196098662b697ea7ad"
  },
  {
    "url": "firefox/index.html",
    "revision": "6ac757a9b58294516c046d54531cebab"
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
    "revision": "9f287eed936fd5b6ffbd4c7c33618f60"
  },
  {
    "url": "guides/index.png",
    "revision": "ed4547add0de8903e972af6f6a43116a"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.html",
    "revision": "19a90519e1ef5e52797962d019d58776"
  },
  {
    "url": "help/enable-browser-sync-chrome-and-edge/index.png",
    "revision": "6aa6d0126431d8eda9fa9541ec965e1a"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.html",
    "revision": "f9aad4aba3d45cbd040c57546b9b91e1"
  },
  {
    "url": "help/helperbird-for-google-docs-addon/index.png",
    "revision": "199a1a8b7e03280a3ff1a4c2208b7b69"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.html",
    "revision": "dfd10a94417b912442319eda5d9e5f9f"
  },
  {
    "url": "help/helperbird-for-google-slides-addon/index.png",
    "revision": "12e004eefd3ef173c30cf30aadd2c150"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.html",
    "revision": "a06c50cf8db99a38a7fe612c6e46468b"
  },
  {
    "url": "help/helperbird-for-ios-ipad-iphone-is-missing-features/index.png",
    "revision": "2e7ff5b21714fd56ba416e4d02d9c931"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.html",
    "revision": "c8c0853fb20016991927c25529cba77d"
  },
  {
    "url": "help/how-to-add-a-overlay-to-any-website/index.png",
    "revision": "170085f68b374c686dfc7cd3bededc51"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.html",
    "revision": "3fd5183116b1de3b16efee80ce264ef3"
  },
  {
    "url": "help/how-to-adjust-zoom-magnifying-for-any-website/index.png",
    "revision": "b0eaa7b8a5b30a046d30a533f15877b9"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.html",
    "revision": "948ec99a4f603ddc7a17e9e605632a0a"
  },
  {
    "url": "help/how-to-annotate-any-website-with-sticky-notes/index.png",
    "revision": "5e8098bda8572a90f6de558a8e67a3e3"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.html",
    "revision": "3835eddf65c8babe38d90dd8a127d002"
  },
  {
    "url": "help/how-to-auto-scroll-on-any-website-or-app/index.png",
    "revision": "492e601691dd1c18fe37ebcb2fee8c5a"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "df4773065fc8c09d07ea523fffb85f08"
  },
  {
    "url": "help/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "18ed4e34fd6fa4049c96fa032a0e8de6"
  },
  {
    "url": "help/how-to-change-my-email/index.html",
    "revision": "122326b992df4ed68098510cb4e0ce19"
  },
  {
    "url": "help/how-to-change-my-email/index.png",
    "revision": "fd92bc1e4e291cec414f677dde0aefcb"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.html",
    "revision": "775759da42fdb62b12aa2191670d454d"
  },
  {
    "url": "help/how-to-change-the-background-color-of-a-website/index.png",
    "revision": "97d0f06f1d87d0aed704d5dbd85bd84c"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.html",
    "revision": "aa3e4506c66f9af4b58bcae7d0e637dc"
  },
  {
    "url": "help/how-to-change-the-cursor-size-in-google-chrome-firefox-or-edge/index.png",
    "revision": "67c4f68331761640b9762f86aac1bfb5"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.html",
    "revision": "0a559bf5b4a5ad9bb98fd136c5e9ec5d"
  },
  {
    "url": "help/how-to-change-the-font-color-of-a-website/index.png",
    "revision": "58257927fd5f00196204e6243a8eb6db"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.html",
    "revision": "9522da79237b508cc39d87851ee90bf3"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page-to-a-dyslexic-font/index.png",
    "revision": "25157c2e823da550a675ae8d23de5f31"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.html",
    "revision": "faefe94733a1f0a28e2b60254c8a4ffc"
  },
  {
    "url": "help/how-to-change-the-font-on-any-page/index.png",
    "revision": "0b78fbc4a578bfc68c02a8e8164a2a45"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.html",
    "revision": "9133bbd888fb83caead07b7b5f03f1e8"
  },
  {
    "url": "help/how-to-change-the-font-size-on-any-website/index.png",
    "revision": "3ad44ac485902ac8019766f1556149b5"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.html",
    "revision": "424f7df32d5ef80b0f658eb4bea40afd"
  },
  {
    "url": "help/how-to-change-the-highlight-color-of-a-website/index.png",
    "revision": "08e3bd75838c23cfce463f244fa91303"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.html",
    "revision": "c0c75b739587d688912924f997f8a74c"
  },
  {
    "url": "help/how-to-change-the-letter-spacing-on-any-website/index.png",
    "revision": "86613b49973fc8b67ae863245c2fc666"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.html",
    "revision": "127e8ef508b07493072fafaf56d2574c"
  },
  {
    "url": "help/how-to-change-the-line-height-on-any-website/index.png",
    "revision": "c84d79a6e49b9ba2091590afcfddc037"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.html",
    "revision": "5f9b6174635b3885afeb84dc28bbaf97"
  },
  {
    "url": "help/how-to-change-the-link-color-of-a-website/index.png",
    "revision": "bf7bed3e823eee87ffdccadd38cb46ab"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.html",
    "revision": "d47a54db41ce90aa8232b0e426c8403b"
  },
  {
    "url": "help/how-to-change-the-selection-highlight-color-of-a-website/index.png",
    "revision": "08e3bd75838c23cfce463f244fa91303"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.html",
    "revision": "9b13bdb6321ff54833d4ae412e1d2ab9"
  },
  {
    "url": "help/how-to-change-the-text-alignment-on-any-website/index.png",
    "revision": "10c3da111eb136806d204be192c3b8fc"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.html",
    "revision": "0b88aa72dac7e8f6d8579a67ec257434"
  },
  {
    "url": "help/how-to-change-the-word-spacing-on-any-website/index.png",
    "revision": "8a34dd121d9cd373a96e35b969b7f582"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.html",
    "revision": "9d22db6ddf6cee3bd1fca00d32504d23"
  },
  {
    "url": "help/how-to-count-the-amount-of-words-and-characters-in-a-sentence/index.png",
    "revision": "d7e094b08ba0b0c05379b08351505789"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.html",
    "revision": "1ae7190a227a11261a75257adbd5a458"
  },
  {
    "url": "help/how-to-deploy-helperbird-to-your-school-or-business/index.png",
    "revision": "4ae91f3355516f0828b48a009f7f2459"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.html",
    "revision": "6b63c3b1096359d66072fc48c3fdd359"
  },
  {
    "url": "help/how-to-download-helperbird-for-ipad/index.png",
    "revision": "7cd2b2c2374364bc7714d2bb721fadcf"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.html",
    "revision": "9795f699be64f75f9913db1b378424e7"
  },
  {
    "url": "help/how-to-download-helperbird-for-iphone/index.png",
    "revision": "ec22566584180e96fd09e2a88678247d"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.html",
    "revision": "7b49ceaffe1c3788e3e50cc71825d00b"
  },
  {
    "url": "help/how-to-enable-spell-check-on-any-website-or-app/index.png",
    "revision": "71d42f2313520fdc69a23fa38c28da1b"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.html",
    "revision": "21876d32f3cdbc66dc9c3f32353fdf8f"
  },
  {
    "url": "help/how-to-extract-text-from-any-image-pdf-or-website/index.png",
    "revision": "911551b04e7704caf857e237864d2cbd"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.html",
    "revision": "d1cff4650b4a9c0077763f083677494e"
  },
  {
    "url": "help/how-to-favorite-a-feature-in-helperbird/index.png",
    "revision": "a4ffa6483a060be076bbe47bdf5e2fb9"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.html",
    "revision": "2112f1d76b59cab66f2a10f53e5b7b4b"
  },
  {
    "url": "help/how-to-hide-images-and-gifs-on-every-website/index.png",
    "revision": "a9fe0a534b3a95d50bbfaa53642d9f0e"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.html",
    "revision": "4797fed0cb1a051cb9747c814d8ad19a"
  },
  {
    "url": "help/how-to-highlight-paragraphs-on-any-page/index.png",
    "revision": "11abcfe8d36dab310e01606a41f635f7"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.html",
    "revision": "c37198c2e0466754c00aae36ed953653"
  },
  {
    "url": "help/how-to-highlight-words-and-paragraphs-on-any-website/index.png",
    "revision": "0ede05f714c1bbb7dfb22918467692c8"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.html",
    "revision": "108925faed05c909ba82bd70117abb79"
  },
  {
    "url": "help/how-to-login-to-helperbird/index.png",
    "revision": "392912c6f3967fe0ee227fe89b5d6df1"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.html",
    "revision": "20d9e7625be64b961219017d0c0c6c72"
  },
  {
    "url": "help/how-to-mute-all-videos-on-any-page/index.png",
    "revision": "fc2d7661901258b22078895ffa5f901b"
  },
  {
    "url": "help/how-to-pause-helperbird/index.html",
    "revision": "ea42c185759560118204038ab9131c81"
  },
  {
    "url": "help/how-to-pause-helperbird/index.png",
    "revision": "b5b2c59f40017b05a348fe2b1c042a91"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.html",
    "revision": "0504285f7c16b3f5267c03906cdb78fd"
  },
  {
    "url": "help/how-to-pin-a-chrome-extension/index.png",
    "revision": "59b80c54f37ad6d54c2f68b640eae46e"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.html",
    "revision": "2d19839d976d9cbf14177771490d3e4d"
  },
  {
    "url": "help/how-to-print-a-website-with-helperbird/index.png",
    "revision": "d9e7b329ea79d4bc4b604fed3275fa1f"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.html",
    "revision": "e34e97afe055da35aa747f03a7d43ef4"
  },
  {
    "url": "help/how-to-set-the-column-width-on-any-page/index.png",
    "revision": "a9925433c949d614072390439054da59"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.html",
    "revision": "702e6d59c65006f901d9e988205f6744"
  },
  {
    "url": "help/how-to-set-the-paragraph-width-on-any-page/index.png",
    "revision": "6d87390619f751db7e647f4a5f35db1f"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.html",
    "revision": "e038760b6132a703ae63efe8c7878001"
  },
  {
    "url": "help/how-to-show-alt-tags-on-hover-tooltip/index.png",
    "revision": "e7480029dd38447313b8e31a9d7b92cb"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.html",
    "revision": "323a98c96b7b16b2057ab64fa4cae706"
  },
  {
    "url": "help/how-to-stop-animations-on-any-website/index.png",
    "revision": "4abe8a5677b9a4f9b6cefa62b9a1baa1"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.html",
    "revision": "f77641be71cd2469914396c7243c66ca"
  },
  {
    "url": "help/how-to-translate-a-whole-page-or-selected-text-on-any-website/index.png",
    "revision": "786ecfbb62dd21a97b94e26709a14ddb"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.html",
    "revision": "c168f2f3439ec26dd26f20b63622ce45"
  },
  {
    "url": "help/how-to-turn-helperbird-on/index.png",
    "revision": "e9ce5df037491725153f5a59cc4d3469"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.html",
    "revision": "d862798af36df4ea7236d0629cc66470"
  },
  {
    "url": "help/how-to-update-my-credit-card/index.png",
    "revision": "940f81f4548d97124353a350f9118325"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.html",
    "revision": "743065bf26876ef2722bb9d6c1dcc49f"
  },
  {
    "url": "help/how-to-use-a-dyslexia-ruler-on-any-website/index.png",
    "revision": "96f09bf8f89c8a82107d751c09603b7d"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.html",
    "revision": "8c60fa9c5be1b6d2c2a6646fd0e7b65f"
  },
  {
    "url": "help/how-to-use-a-line-focus-on-any-website/index.png",
    "revision": "f8d83b09a0ca4c2ade77bf87a9fd7e51"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.html",
    "revision": "95b37af37cc7f4258bc326ea261508d0"
  },
  {
    "url": "help/how-to-use-a-reading-guide-on-any-website/index.png",
    "revision": "048682e79fdf50fa74973a046cfe98be"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.html",
    "revision": "469d8c0e7f44f035c9ef1481bb2dd06c"
  },
  {
    "url": "help/how-to-use-dictionary-app-in-helperbird/index.png",
    "revision": "647cee866f54ced28a38fd2bcec020be"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.html",
    "revision": "04bac98fdd1ff68494f7dfa2561af364"
  },
  {
    "url": "help/how-to-use-helperbird-accessibility-features/index.png",
    "revision": "e6ef3f5262e090798e4388d859a3b87c"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.html",
    "revision": "3a16c7158669bdce243abaf9396d01f9"
  },
  {
    "url": "help/how-to-use-helperbirds-color-blind-features-on-websites/index.png",
    "revision": "ee33a0d1b3e3f92be0e4cf4bd56743dd"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.html",
    "revision": "0d79befdc93654029cf96bbd90711724"
  },
  {
    "url": "help/how-to-use-helperbirds-high-contrast-features/index.png",
    "revision": "fa3ba7f1976576ddd8307d0f3dbcea0f"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.html",
    "revision": "6381e6525f210b756c5b112217da6444"
  },
  {
    "url": "help/how-to-use-helperbirds-reading-list-app/index.png",
    "revision": "9ae356a07f9538cb7fef21512e133037"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.html",
    "revision": "4623f9783b0736a07f373a18556b6e38"
  },
  {
    "url": "help/how-to-use-immersive-reader-on-any-website/index.png",
    "revision": "e735cbb388d520ad270bda2068a19f6e"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.html",
    "revision": "c8e5007c7e96064b6d353733c3977e5d"
  },
  {
    "url": "help/how-to-use-my-subscription-key/index.png",
    "revision": "bccaeb94cf2e13363c6bbd34b1f5df14"
  },
  {
    "url": "help/how-to-use-reader-mode-and-remove-ads-on-any-website/index.html",
    "revision": "11d2a8d704346973ba15a9099c2fe75f"
  },
  {
    "url": "help/how-to-use-reader-mode-and-remove-ads-on-any-website/index.png",
    "revision": "486803888f57cbcf66c16ae233cbf4d3"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.html",
    "revision": "76358985cea972fa564611ed54c3431b"
  },
  {
    "url": "help/how-to-use-speech-to-text-or-dictation-on-any-website/index.png",
    "revision": "d99a22895c4bc282d418db02b9abe95a"
  },
  {
    "url": "help/how-to-use-speed-reading-features-on-any-website/index.html",
    "revision": "386a6513ccfc13c97fcc5625dd4d366f"
  },
  {
    "url": "help/how-to-use-speed-reading-features-on-any-website/index.png",
    "revision": "aba012cf3353ca1c350d2d39347e5b5e"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.html",
    "revision": "363bb7fc1dfb8ac814382a7abf63902d"
  },
  {
    "url": "help/how-to-use-text-to-speech-on-any-website/index.png",
    "revision": "776e7ec9818f3351d88f28aff04064a0"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.html",
    "revision": "0091a40649a739f70c002bf60522eb59"
  },
  {
    "url": "help/how-to-use-the-helperbird-pdf-support/index.png",
    "revision": "85c5da0e3ee00655d2b42b2cfc9fc212"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.html",
    "revision": "aeb852cc7b812417760d01963609b2a8"
  },
  {
    "url": "help/how-to-use-the-quick-action-area-to-improve-accessibility-on-the-web/index.png",
    "revision": "2c369175143b64b90fa3c79a3ad6bf83"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.html",
    "revision": "49acf1982bc407b4ede91085ad47fd87"
  },
  {
    "url": "help/how-to-use-word-prediction-on-any-website-or-google-docs/index.png",
    "revision": "61b960ffce947aed172baefbbd015a23"
  },
  {
    "url": "help/index.html",
    "revision": "006e2d43ac9af36ab64344fa3a3c23c8"
  },
  {
    "url": "help/index.png",
    "revision": "c91577cdde5330fb9146a63120bea377"
  },
  {
    "url": "help/installing-helperbird/index.html",
    "revision": "ceb6c600f2ddb32a4379544bca08006e"
  },
  {
    "url": "help/installing-helperbird/index.png",
    "revision": "b99f333839f7cec31d3dc4d57dfb075b"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.html",
    "revision": "2007c6f4d5ef3e7ba84ce9173f440408"
  },
  {
    "url": "help/manage-my-helperbird-pro-subscription/index.png",
    "revision": "af48d52caef445264aaba34f3e01c7ea"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.html",
    "revision": "0b2425816589546436654aac3ad5b9ac"
  },
  {
    "url": "help/useful-features-to-increase-productivity-extension/index.png",
    "revision": "65ed249c814846c489fa232a4e882de8"
  },
  {
    "url": "help/what-is-helperbird-free/index.html",
    "revision": "e15937176efda2b2bcab2bcecbc02041"
  },
  {
    "url": "help/what-is-helperbird-free/index.png",
    "revision": "ae4327c940f0d208865292c69c9425e7"
  },
  {
    "url": "help/what-is-helperbird-pro/index.html",
    "revision": "52db68c248d0ab6f202d8b0b9dfe28cf"
  },
  {
    "url": "help/what-is-helperbird-pro/index.png",
    "revision": "2198b79c0e12da9725f128fa47a2b2b1"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.html",
    "revision": "7e526cf37c8b4f1a4d150e50327c2786"
  },
  {
    "url": "help/what-is-helperbird-unlimited/index.png",
    "revision": "1a4dddb7384f778ca40538e87a6bf27b"
  },
  {
    "url": "in-the-news/index.html",
    "revision": "c0832ba095b935368cea717335afcef0"
  },
  {
    "url": "in-the-news/index.png",
    "revision": "12236078233d5423b8f281666d3b474a"
  },
  {
    "url": "index.html",
    "revision": "774051a791e27deed085e3ab22787bd9"
  },
  {
    "url": "index.png",
    "revision": "6c4f55d91b1f3675eec7136d021b2166"
  },
  {
    "url": "login/index.html",
    "revision": "89939452e9cb5a6953f8142bd185003c"
  },
  {
    "url": "login/index.png",
    "revision": "a6eb2ca57985ef29f5315a2ef5731f47"
  },
  {
    "url": "order/index.html",
    "revision": "361684ec7d263934a221abcfc6f3eb73"
  },
  {
    "url": "order/index.png",
    "revision": "5f3d4d79683426d0a5304dfbcf27f2f5"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.html",
    "revision": "681ef9d5146d1b2d64e6941982056c6e"
  },
  {
    "url": "partners/bonnie-shaver-troup/index.png",
    "revision": "698e07b4a80a1feec522cac0bcee3e7e"
  },
  {
    "url": "partners/index.html",
    "revision": "9fc96e73741806762a8b33fb822df10c"
  },
  {
    "url": "partners/index.png",
    "revision": "acb7fba3db788d2cbb9345e81cc0f7a0"
  },
  {
    "url": "partners/sascharoos/index.html",
    "revision": "1eedadc1ad1f56f768374e6647005ac9"
  },
  {
    "url": "partners/sascharoos/index.png",
    "revision": "0b4c2bfd0f7baf8ec05bff00203290ac"
  },
  {
    "url": "partners/sprialisconsulting/index.html",
    "revision": "266ad3d3940d42747804edeae4b3a903"
  },
  {
    "url": "partners/sprialisconsulting/index.png",
    "revision": "d28a5993579e0b16b5c727d2ce51ad56"
  },
  {
    "url": "pricing/index.html",
    "revision": "c9b295c01c2727efa491eefce15d06ae"
  },
  {
    "url": "pricing/index.png",
    "revision": "a59bf6efe39408cba06e4f69477770fd"
  },
  {
    "url": "privacy/index.html",
    "revision": "680e5822edc314b33e346490b2e2831e"
  },
  {
    "url": "privacy/index.png",
    "revision": "889a6b352989111517ef1b38363f996c"
  },
  {
    "url": "products/google-addon/index.html",
    "revision": "111ae5c164bff0297717772e033ed197"
  },
  {
    "url": "products/google-addon/index.png",
    "revision": "f0b9d82438a15683a911dd32da0a31bf"
  },
  {
    "url": "products/ipad/index.html",
    "revision": "4efbd155a6b9d947f4ece7441e292c7b"
  },
  {
    "url": "products/ipad/index.png",
    "revision": "837d9454f5c8324d3fcd6ed73b773996"
  },
  {
    "url": "recommends/index.html",
    "revision": "0ea5de49e2702edbc44fd69dafb540ff"
  },
  {
    "url": "recommends/index.png",
    "revision": "187c0f42b638607e3f9a7fae59dcde7e"
  },
  {
    "url": "refund/index.html",
    "revision": "bfb28239178883d5f5346098f37243fd"
  },
  {
    "url": "refund/index.png",
    "revision": "f588740bc969a79724b52d47f145dab6"
  },
  {
    "url": "reviews/index.html",
    "revision": "8dcbf45b5cbff9e68508569dadaa42b9"
  },
  {
    "url": "reviews/index.png",
    "revision": "18cd96a5bd9fb2a82f4b8aa2f60212a0"
  },
  {
    "url": "sales/index.html",
    "revision": "30085ab4bc4a955374b84be3a5f66b23"
  },
  {
    "url": "sales/index.png",
    "revision": "f20464534065daa0d83bf0c8a1b947bd"
  },
  {
    "url": "security/index.html",
    "revision": "0d74105cca7359c08f72bf27d6de9921"
  },
  {
    "url": "security/index.png",
    "revision": "928d4bcfb383709de8d5c64cce4c6cbb"
  },
  {
    "url": "sitemap/index.html",
    "revision": "36a983de00ec7477ed16bf65922f48ff"
  },
  {
    "url": "sitemap/index.png",
    "revision": "ae8017833a4e464a47c1ab348575fd8e"
  },
  {
    "url": "success-education/index.html",
    "revision": "7e5fce364b2bd99b9040044667c87528"
  },
  {
    "url": "success-education/index.png",
    "revision": "4d462d0847a0ae7c445c437004a4f516"
  },
  {
    "url": "success/index.html",
    "revision": "8b63f993a24879e1d05e34f8cb3e6587"
  },
  {
    "url": "success/index.png",
    "revision": "0bd3223b9433ad0d611f73b6c2c28ff1"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.html",
    "revision": "5fe19f9edaef1ec9c48df85943f5f8b2"
  },
  {
    "url": "support/annotate-and-highlight-pdfs-with-helperbird-online-extension/index.png",
    "revision": "7d55a7bb10cde47e2df15f150045b716"
  },
  {
    "url": "support/cancel/index.html",
    "revision": "09697bb775008a9d35b50278f30e2104"
  },
  {
    "url": "support/cancel/index.png",
    "revision": "f5cfbdf599f4661cf48214098081acc9"
  },
  {
    "url": "support/how-to-annotate-any-website-or-pdf-with-a-browser-extension/index.html",
    "revision": "8781d26624e412b4650a44f53f1e77ce"
  },
  {
    "url": "support/how-to-annotate-any-website-or-pdf-with-a-browser-extension/index.png",
    "revision": "42a5b4906e2873d99b3e3338ef5bc084"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.html",
    "revision": "49ea39378456d804e6863d60ff7f30e6"
  },
  {
    "url": "support/how-to-cancel-my-helperbird-pro-subscription/index.png",
    "revision": "f5cfbdf599f4661cf48214098081acc9"
  },
  {
    "url": "support/how-to-change-my-email/index.html",
    "revision": "cedf73671eb7b50c0922f5d1518e73e9"
  },
  {
    "url": "support/how-to-change-my-email/index.png",
    "revision": "2824d4175d07839edd892d8fdf1ab461"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.html",
    "revision": "ff9de057d3383dccdfd25e8d2754d635"
  },
  {
    "url": "support/how-to-login-into-helperbird/index.png",
    "revision": "a6eb2ca57985ef29f5315a2ef5731f47"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.html",
    "revision": "77b16b157fad8aadbc2ba6ae6da6c489"
  },
  {
    "url": "support/how-to-set-custom-shortcuts-in-helperbird-chrome-firefox-edge/index.png",
    "revision": "cb3992e6e9eb1188469d13d84bfce7b0"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.html",
    "revision": "f907f41a0b93219a3e6ff5827fefcdc0"
  },
  {
    "url": "support/how-to-use-immersive-reader-in-google-chrome-firefox-edge/index.png",
    "revision": "0a458aa5b99892f39d41653d68f658ab"
  },
  {
    "url": "support/how-to-use-reader-mode-in-google-chrome-firefox-edge/index.html",
    "revision": "5c9126f2667dc4982cb11cf4eeebe61e"
  },
  {
    "url": "support/how-to-use-reader-mode-in-google-chrome-firefox-edge/index.png",
    "revision": "64a03c96092e024b04ac8fa4ce76283c"
  },
  {
    "url": "support/how-to-use-reader-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.html",
    "revision": "03c1fc85a5d069acfc37d2d5c3186622"
  },
  {
    "url": "support/how-to-use-reader-mode-to-remove-website-distractions-in-chrome-firefox-edge/index.png",
    "revision": "1f20203ce14b65f150a38d554a1eef93"
  },
  {
    "url": "support/index.html",
    "revision": "1f937b5b2654b35ce2980d66d55598d5"
  },
  {
    "url": "support/index.png",
    "revision": "2adb35667bb5799187c1dd7c56aa59e6"
  },
  {
    "url": "survey/index.html",
    "revision": "54bf8c7381898475d7ebafcb78b09af8"
  },
  {
    "url": "survey/index.png",
    "revision": "2b19b08763eee74a043e395d0a8aabd4"
  },
  {
    "url": "terms-of-service/index.html",
    "revision": "515bce3aa183b988ad416e495ca0cd85"
  },
  {
    "url": "terms-of-service/index.png",
    "revision": "e709b4264aa328356cb94220f743de7e"
  },
  {
    "url": "testimonials/index.html",
    "revision": "cd504d2021dbe559ea96dd78aff1f55b"
  },
  {
    "url": "testimonials/index.png",
    "revision": "d3d7f41a36798455ecdefbd55d932e05"
  },
  {
    "url": "tutorials/index.html",
    "revision": "e660f485776e22f56bb865a90c1ed969"
  },
  {
    "url": "tutorials/index.png",
    "revision": "a9e64d3ba105ff0701f6dc21286a78e5"
  },
  {
    "url": "updates/100-0-0/index.html",
    "revision": "48c64cd98a152dc19ca542909f1848a5"
  },
  {
    "url": "updates/100-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-1/index.html",
    "revision": "27e4bfd8f86086574d0288dd5c00e272"
  },
  {
    "url": "updates/100-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-3/index.html",
    "revision": "8721ecb633971bde904043135a1e52b3"
  },
  {
    "url": "updates/100-0-3/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-4/index.html",
    "revision": "ee02ef43b970053fa53bd76a19b157fd"
  },
  {
    "url": "updates/100-0-4/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-5/index.html",
    "revision": "48dd4e18a8c6636062237620923c1eab"
  },
  {
    "url": "updates/100-0-5/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-6/index.html",
    "revision": "9496da57613ac50db8b909af7bff0d23"
  },
  {
    "url": "updates/100-0-6/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-0-7/index.html",
    "revision": "6e755038b67c8ea7d5e1f6f3aa17cfdf"
  },
  {
    "url": "updates/100-0-7/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-1-0/index.html",
    "revision": "b2701955063de55905fd191fc42a894c"
  },
  {
    "url": "updates/100-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-1-1/index.html",
    "revision": "ffb2b690d4683c8cdcad774c5cde27b7"
  },
  {
    "url": "updates/100-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-1-3/index.html",
    "revision": "ab64b88988e7475178f59334b72536ee"
  },
  {
    "url": "updates/100-1-3/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-5-0/index.html",
    "revision": "863825c7c5a7d4fd3e52093937b0070d"
  },
  {
    "url": "updates/100-5-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-6-0/index.html",
    "revision": "8bb55188a17785af323bf729f6f9b84a"
  },
  {
    "url": "updates/100-6-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/100-6-1/index.html",
    "revision": "88b5760f267bae02f4173bd2eaeb083d"
  },
  {
    "url": "updates/100-6-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/101-5-0/index.html",
    "revision": "8a6b10e0d23c8d43ee39caa74b3c1c1e"
  },
  {
    "url": "updates/101-5-0/index.png",
    "revision": "d5ff1f28d9234083debd0328da594199"
  },
  {
    "url": "updates/101-5-1/index.html",
    "revision": "5c13a19ef41563abb5fd5b5dbf69c9f6"
  },
  {
    "url": "updates/101-5-1/index.png",
    "revision": "d5ff1f28d9234083debd0328da594199"
  },
  {
    "url": "updates/102-1-1/index.html",
    "revision": "ee54c67668ed12db379f8049fbe7dc53"
  },
  {
    "url": "updates/102-1-1/index.png",
    "revision": "48eebdf3af0fccce04599db9e9b0b529"
  },
  {
    "url": "updates/24-1-0/index.html",
    "revision": "e9a5fccc541b51a6c775580c0576baa6"
  },
  {
    "url": "updates/24-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-1-1/index.html",
    "revision": "2b75bad629a36d88972a43b7ada04c99"
  },
  {
    "url": "updates/24-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-1-2/index.html",
    "revision": "f4e14484f46cc2056ab969430104202c"
  },
  {
    "url": "updates/24-1-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-2-2/index.html",
    "revision": "107bb53ca05fd5506959ce91e27bc006"
  },
  {
    "url": "updates/24-2-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-2-4/index.html",
    "revision": "5d23aa23ffa433cc4403b04fc48d82a7"
  },
  {
    "url": "updates/24-2-4/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/24-3-0/index.html",
    "revision": "be1e82fbce1beca9f78c6fcafd53420c"
  },
  {
    "url": "updates/24-3-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/25-0-0/index.html",
    "revision": "f5ef307957b97f5ca589da2ab50489d0"
  },
  {
    "url": "updates/25-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/25-0-1/index.html",
    "revision": "4a754d222c9f2ee238d396f31010e6cd"
  },
  {
    "url": "updates/25-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/25-1-0/index.html",
    "revision": "e156e4c04de5ae4d9c413a59340e6661"
  },
  {
    "url": "updates/25-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/26-0-1/index.html",
    "revision": "8179e76aa76377bdb37907f4ae4643c8"
  },
  {
    "url": "updates/26-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/26-0-2/index.html",
    "revision": "99281d1c43575c35f8dda38d36aeb4b8"
  },
  {
    "url": "updates/26-0-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/26-1-1/index.html",
    "revision": "4844350851fa26221d03fff27824f15f"
  },
  {
    "url": "updates/26-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/27-0-0/index.html",
    "revision": "70df8b31035dc8e299a826507f4c29a5"
  },
  {
    "url": "updates/27-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/27-1-0/index.html",
    "revision": "a9bb14632b79fbecd3ca7b71e38410fe"
  },
  {
    "url": "updates/27-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/28-0-2/index.html",
    "revision": "a9295631a733dec61c62b34f8dea3288"
  },
  {
    "url": "updates/28-0-2/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-0-0/index.html",
    "revision": "31c1de49d33afb338dc1f0d65d917a5c"
  },
  {
    "url": "updates/30-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-2-0/index.html",
    "revision": "6a51a6a4b71b39eb491899592dffaabb"
  },
  {
    "url": "updates/30-2-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-3-0/index.html",
    "revision": "76e63e2c4343d76cce4194693f92ffb1"
  },
  {
    "url": "updates/30-3-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-4-0/index.html",
    "revision": "ecb43f4cd0c7fcc8de17bdf23997a9c4"
  },
  {
    "url": "updates/30-4-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-5-0/index.html",
    "revision": "ee9340ddec2ef4d018cd3860c7083d4b"
  },
  {
    "url": "updates/30-5-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/30-6-0/index.html",
    "revision": "ad5bc3f33b25b8be1ebd47ca611a5b63"
  },
  {
    "url": "updates/30-6-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/31-0-0/index.html",
    "revision": "0c808d5da5684ab6b1cb2cf56a78bc5e"
  },
  {
    "url": "updates/31-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/32-0-0/index.html",
    "revision": "476c424d53ac7568d7043fe094fb1db2"
  },
  {
    "url": "updates/32-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/32-1-0/index.html",
    "revision": "06a8a4c287ed5711f1cebb5013328edb"
  },
  {
    "url": "updates/32-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/33-0-0/index.html",
    "revision": "40d71de3823a91de5d86efa1c647b19c"
  },
  {
    "url": "updates/33-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/35-0-0/index.html",
    "revision": "686fc4de7bffa5ca2d9eedfb6985e1ca"
  },
  {
    "url": "updates/35-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/36-0-0/index.html",
    "revision": "b6536c0fc3cd6d233304a482613f34b3"
  },
  {
    "url": "updates/36-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/36-0-5/index.html",
    "revision": "c134662cd412906da7951f1eea91b23e"
  },
  {
    "url": "updates/36-0-5/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/40-0-0/index.html",
    "revision": "633bd3eaef3fbc3c361612e6dad99fe8"
  },
  {
    "url": "updates/40-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/40-0-1/index.html",
    "revision": "14d476fc6c5c54806c2f65a7c34d9718"
  },
  {
    "url": "updates/40-0-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/40-1-0/index.html",
    "revision": "96cba34ca1f2fb8b00c3b5b6b62be457"
  },
  {
    "url": "updates/40-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/50-0-0/index.html",
    "revision": "4b2770f3e957cde5bcf8b4f5e9b78522"
  },
  {
    "url": "updates/50-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/55-0-0/index.html",
    "revision": "7de928bada495a9605856c14b20fcd55"
  },
  {
    "url": "updates/55-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/55-1-0/index.html",
    "revision": "ffa20f6155059a671914914411746646"
  },
  {
    "url": "updates/55-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/56-0-0/index.html",
    "revision": "e83e6e29ab184981a409c84f3b502f22"
  },
  {
    "url": "updates/56-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/60-0-0/index.html",
    "revision": "ac41405d956e20c4ce71e65b95742344"
  },
  {
    "url": "updates/60-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/60-1-0/index.html",
    "revision": "9485c9a87c861cb1b1823bfdf6f672c6"
  },
  {
    "url": "updates/60-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/60-1-1/index.html",
    "revision": "bb6280afb7ab5ebcc61f344009d86335"
  },
  {
    "url": "updates/60-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/61-0-0/index.html",
    "revision": "236d1c42db03ab2f9fd6e2e00af0a5f6"
  },
  {
    "url": "updates/61-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/70-0-0/index.html",
    "revision": "92525bbe41d768883fd2b35b9a90ff08"
  },
  {
    "url": "updates/70-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/70-1-0/index.html",
    "revision": "262e2299ee8d94ede7520c357ac3a6cb"
  },
  {
    "url": "updates/70-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/70-2-1/index.html",
    "revision": "ec21d66d4581e9c1e50be1021a58f9b4"
  },
  {
    "url": "updates/70-2-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/75-0-0/index.html",
    "revision": "df7b64589ec18274ae77b84f22159dcc"
  },
  {
    "url": "updates/75-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/76-0-0/index.html",
    "revision": "8d0d6b084ec2237dcb73d1d3964d0815"
  },
  {
    "url": "updates/76-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-0-0/index.html",
    "revision": "ee603617e5b4a1bf5dfaa4673ea420ca"
  },
  {
    "url": "updates/80-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-1-0/index.html",
    "revision": "9f787fe40e25de77f755f64a7b46b714"
  },
  {
    "url": "updates/80-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-2-0/index.html",
    "revision": "f297296e9705baf70d48f4245356773f"
  },
  {
    "url": "updates/80-2-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-3-0/index.html",
    "revision": "0550ef3390911a722c10080061eb4b3f"
  },
  {
    "url": "updates/80-3-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-4-0/index.html",
    "revision": "6ad55e67859b0c2388a4c5e25281fa29"
  },
  {
    "url": "updates/80-4-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-4-1/index.html",
    "revision": "671f9e3ed4e1118fc889eebe86f0b4a9"
  },
  {
    "url": "updates/80-4-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-5-0/index.html",
    "revision": "0ac1ece8406acc6878f1dce6c279a352"
  },
  {
    "url": "updates/80-5-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/80-5-1/index.html",
    "revision": "6f2205b75988e7707d364247448c84cb"
  },
  {
    "url": "updates/80-5-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-0-0/index.html",
    "revision": "776c71dd0101ce6186906b5f3aa830e4"
  },
  {
    "url": "updates/90-0-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-1-0/index.html",
    "revision": "08598e33bf38ae7ffbb09e5780883481"
  },
  {
    "url": "updates/90-1-0/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-1-1/index.html",
    "revision": "b42b2506c4be35d917c0bdaef1502ab8"
  },
  {
    "url": "updates/90-1-1/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/90-1-4/index.html",
    "revision": "d8febedc87e4e06d95ea1d03414327ec"
  },
  {
    "url": "updates/90-1-4/index.png",
    "revision": "3a5263ffae85c5ed128f1881f84db162"
  },
  {
    "url": "updates/index.html",
    "revision": "1d3ae344c4b068c1470a698213757140"
  },
  {
    "url": "updates/index.png",
    "revision": "9834a3ed9aabb52a91d8669ccd461f9c"
  },
  {
    "url": "updates/kingfisher/index.html",
    "revision": "6f537be73b711192d6f23453395986ec"
  },
  {
    "url": "updates/kingfisher/index.png",
    "revision": "d5ff1f28d9234083debd0328da594199"
  },
  {
    "url": "updates/robin/index.html",
    "revision": "b3d06df3a647967fc440e040b8fad97e"
  },
  {
    "url": "updates/robin/index.png",
    "revision": "56ee25dd68af95068b4177feffc8a0c0"
  },
  {
    "url": "welcome/index.html",
    "revision": "38f623e6f4278ba7bc2e87f864764059"
  },
  {
    "url": "welcome/index.png",
    "revision": "7580f9fb19b34b4bf66d0076418ec2d9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
