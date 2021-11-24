(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{735:function(t,e,a){"use strict";a.r(e);var s=a(29),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"local-anime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-anime"}},[t._v("#")]),t._v(" Local anime")]),t._v(" "),a("p",[t._v("Follow the steps below to create local anime.")]),t._v(" "),a("ol",[a("li",[t._v("Create a folder named "),a("code",[t._v("localanime")]),t._v(" in the "),a("code",[t._v("/Aniyomi/")]),t._v(" folder.\n"),a("ul",[a("li",[t._v(" The "),a("code",[t._v("/Aniyomi/")]),t._v(" folder is located in the root of phone's "),a("strong",[t._v("internal storage")]),t._v(" or "),a("strong",[t._v("external SD card")]),t._v(" and it's "),a("strong",[t._v("not related")]),t._v(" to the "),a("code",[t._v("eu.kanade.tachiyomi/")]),t._v(" folder or the download location in the settings.")]),t._v(" "),a("li",[t._v(" If you don't have a "),a("code",[t._v("/Aniyomi/")]),t._v(" folder located in the folders mentioned above, you can simply create it.")])])]),t._v(" "),a("li",[t._v("Place correctly structured anime inside "),a("code",[t._v("/Aniyomi/localanime/")]),t._v(".\n"),a("ul",[a("li",[t._v("Optional: If adding anime in folders, add a file named "),a("code",[t._v(".nomedia")]),t._v(" to the local folder so images do not show up in the gallery")])])]),t._v(" "),a("li",[t._v("You can then access the anime in "),a("Navigation",{attrs:{item:"browse"}}),t._v(" → "),a("strong",[t._v("Local anime source")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("If you add more episodes then you'll have to manually refresh the episode list (by pulling down the list).")]),t._v(" "),a("p",[t._v("Supported episode formats are .mp4 and .mkv video files.")]),t._v(" "),a("div",{staticClass:"custom-block c-warning"},[a("h4",{staticClass:"c-title"}),a("p",[t._v("Remember to give the app storage permissions.")])]),a("h2",{attrs:{id:"folder-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#folder-structure"}},[t._v("#")]),t._v(" Folder Structure")]),t._v(" "),a("p",[t._v("Aniyomi requires a specific folder structure for local manga to be correctly processed. Local manga will be read from the "),a("code",[t._v("Aniyomi/localanime")]),t._v(" folder. Each anime must have a "),a("code",[t._v("Anime")]),t._v(" folder. Episode videos will then go into the anime folder. See below for more information on archive files. You can refer to the following example:")]),t._v(" "),a("div",{staticClass:"guide"},[a("p",{staticClass:"title"},[t._v("Example (Folder)")]),a("div",{staticClass:"side-by-side"},[a("ul",{staticClass:"file-tree"},[a("li",[t._v("\n\t\t\t/sdcard/Aniyomi/localanime\n\t\t\t"),a("ul",[a("li",[a("span",{staticClass:"ft-icon ft-folder"},[t._v("Anime title")]),t._v(" "),a("ul",[a("li",[a("span",{staticClass:"ft-icon ft-image"},[t._v("ep1.mp4")])]),t._v(" "),a("li",[a("span",{staticClass:"ft-icon ft-image"},[t._v("ep2.mkv")])]),t._v(" "),a("li",[a("span",{staticClass:"ft-icon ft-image"},[t._v("cover.jpg")])])])]),t._v(" "),a("li",[t._v("...")])])])]),t._v(" "),a("ul",{staticClass:"file-tree"},[a("li",[t._v("\n\t\t\t/storage/18F5-2C11/Aniyomi/localanime\n\t\t\t"),a("ul",[a("li",[a("span",{staticClass:"ft-icon ft-folder"},[t._v("Anime title")]),t._v(" "),a("ul",[a("li",[a("span",{staticClass:"ft-icon ft-image"},[t._v("ep3.mp4")])]),t._v(" "),a("li",[a("span",{staticClass:"ft-icon ft-image"},[t._v("ep4.mkv")])])])]),t._v(" "),a("li",[t._v("...")])])])])])]),a("p",[t._v("Aniyomi will see four episodes in a single anime.\nThe path to the folder with videos must contain both the anime title (as seen above).")]),t._v(" "),a("div",{staticClass:"guide g-empty"},[a("figure",{staticClass:"centered"},[a("h4",[t._v("Example structure using the file manager")]),t._v(" "),a("p",[t._v("Here, the anime name is "),a("strong",[t._v("test")]),t._v(" so the file structure is "),a("code",[t._v("/Aniyomi/local/test/episodes")]),t._v(".")]),t._v(" "),a("img",{staticClass:"zoomable",attrs:{height:"300",src:t.$withBase("/assets/guides_local-manga.jpg")}})])]),a("h2",{attrs:{id:"advanced"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced"}},[t._v("#")]),t._v(" Advanced")]),t._v(" "),a("h3",{attrs:{id:"editing-local-anime-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editing-local-anime-details"}},[t._v("#")]),t._v(" Editing local anime details")]),t._v(" "),a("p",[t._v("It is possible to add details to local anime. Like anime from other catalogs, you add information about the anime such as the author, artist, description, and genre tags.")]),t._v(" "),a("p",[t._v("To import details along with your local anime, you have to create a json file. It can be named anything but it must be placed within the "),a("strong",[t._v("Anime")]),t._v(" folder. A standard file name is "),a("code",[t._v("details.json")]),t._v(". This file will contain the extended details about the anime in the "),a("code",[t._v("JSON")]),t._v(" format. You can see the example below on how to build the file. Once the file is there, the app should load the data when you first open the anime or you can pull down to refresh the details.")]),t._v(" "),a("p",[t._v("You can copy the following example and edit the details as needed:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Author/Animation studio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"artist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Artist/Fansub/whatever"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example Description"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"genre"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genre 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"genre 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"etc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_status values"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 = Unknown"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 = Ongoing"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2 = Completed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3 = Licensed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"using-a-custom-cover-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-custom-cover-image"}},[t._v("#")]),t._v(" Using a custom cover image")]),t._v(" "),a("p",[t._v("It is also possible to use a custom image as a cover for each local manga.")]),t._v(" "),a("p",[t._v("To do this, you only need to place the image file, that needs to be named\n"),a("code",[t._v("cover.jpg")]),t._v(", in the root of the manga folder. The app will then use your\ncustom image in the local source listing.")])])}),[],!1,null,null,null);e.default=n.exports}}]);