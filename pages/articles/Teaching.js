import htmr from 'htmr';
import Sidebar from '../../components/Sidebar'

const Teaching = () => {
  
const post =
`
<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>An attempt to make a difference through empathy-based teaching</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	text-indent: -1.7em;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
}

.simple-table-header {
	background: rgb(247, 246, 243);
	color: black;
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: rgba(55, 53, 47, 1);
}
.highlight-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.highlight-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
	background: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
	background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
	background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
	background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
	background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.block-color-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
	background: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
	background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
	background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
	background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
	background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="0758e0d7-1330-45b3-b993-2ca885c2c5d8" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">📖</span></div><h1 class="page-title">An attempt to make a difference through empathy-based teaching</h1></header><div class="page-body"><p id="13a1187e-cb7f-4e15-a6dc-f131c41e5ad1" class="">Written by: Ivan Esmeral</p><p id="f4d02664-6b43-4f1b-a335-0c237e9ae560" class="">
</p><p id="f16f29b5-2f01-43fd-8381-0084489394b0" class="">To expect an 18 year old to know what they want to do for the rest of their life is silly, albeit almost a universal requirement when entering the US Higher Education System. I believe that just because a teenager performed well on a standardized AP or IB Biology test does not necessarily mean they should be forced to make the decision to become a doctor in their first year of college—where if they do not start on any immediate track towards a meaningful career, they are “falling behind” their peers. </p><p id="7bbec31c-eb73-4e0a-9e21-72377fcd0179" class="">
</p><p id="cabdf39b-2ee8-4268-9e41-d6a3ae74dc33" class="">I faced this dilemma when graduating high school, where I chose to study Systems Engineering at the University of Pennsylvania because of 18-year-old me’s very complex rationale. It went a little something like this :<div class="indented"><p id="fa43e1ca-00d9-4fe3-a832-140c886121fb" class="">
</p><p id="ad8658a4-c8f7-41cb-b1e8-67da77610759" class="">1) Well I’m alright in math and science, but I really like writing and history...but who can make a career in that?</p><p id="7fc1b4a9-1b93-4ee5-80a6-6a413c5d82f1" class="">2) My friends who are smarter than me are choosing to be engineers</p><p id="90038fd7-540f-4021-9b0b-cbf0949f7b85" class="">3) I’ve heard engineers make a lot of money?</p><p id="907f5019-71cb-4dfc-8399-519db9fbd396" class="">4) My mom was an industrial engineer and I guess this seems like the closest fit?</p></div></p><p id="fa3f316a-7e8c-4a90-9943-8849e27d5773" class="">
</p><p id="e204a26e-fae2-4192-ab0a-df4e3551a724" class="">As you can see, I had no idea what a Systems Engineer actually was or what type of work I would be condemning myself to for the rest of my life. Or so I thought.</p><p id="6d71f734-9b14-4fe6-9620-a5d1eaef8a0e" class="">
</p><p id="7a5a8adb-34aa-4c47-a4b6-3d979241594b" class="">We’ve all heard of the butterfly effect, where a tiny butterfly flapping its wings in Colombia can cause a tornado across the world in Kansas. That is, some seemingly insignificant event occurs which may have an unexpected rippling effect on a larger scale. But what about the “Google Forms” effect?</p><p id="14a3e849-bb12-465a-a942-3252bfb70675" class="">
</p><p id="c2d3565f-b261-4ee3-9d42-15d51c1a2ecd" class="">During the summer before starting college I received the following email:</p><figure id="374635ff-5c97-4fb6-a1fb-8a77be490901" class="image"><a href="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled.png"><img style="width:561px" src="../public/Untitled 1.png"/></a></figure><p id="96ba4aef-7efd-4a4c-92db-f1f3f39ead72" class="">“...you are totally allowed to change your mind.” These were the most reassuring words I could hear at that moment.</p><p id="dd23bb9b-d55d-47a6-a5f0-3eee68b040dd" class="">
</p><p id="46ef1b85-ce2e-46bc-be8a-e0f97fa5bce6" class="">I thought, “Why not? I have no idea what Systems Engineers do so I have nothing to lose here, I like computers, and I’ve heard through the grapevine that computer science is the future.”</p><p id="737ab196-4840-401e-9520-5390387bf6a5" class="">
</p><p id="60d7cfed-5f66-4fb8-b31d-8cfac67ed0df" class=""> I opened the form linked in the email and was amazed to see something as simple as the following:</p><p id="e05aa8bc-b07a-4da4-93e6-711b74998e6f" class="">
</p><p id="8cd59030-a243-4a49-9bf1-aa93ba56ebf2" class="">
</p><figure id="b0b27d8b-0e84-4780-b782-1823754442d2" class="image"><a href="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Screen_Shot_2022-01-21_at_8.38.03_AM.png"><img style="width:1252px" src="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Screen_Shot_2022-01-21_at_8.38.03_AM.png"/></a></figure><p id="cf94c313-9efd-4035-b213-6054d2fdf130" class="">
</p><p id="e6206c28-e60d-4881-beb8-d58ddf04dce8" class="">I immediately thought: “Is it really this easy?” “Should I talk to my parents?”</p><p id="10c269f6-f0fd-4381-a674-e9f72b356e9c" class="">
</p><p id="32fb5a67-bd81-456b-89f6-757bd572774f" class="">I avoided that last step and locked in my three answers with the confidence and innocent naivety that only an 18-year-old could possibly have:<div class="indented"><p id="ef1f9559-cb5a-442d-85a0-045b3d5e0a69" class=""><div class="indented"><ol type="1" id="ef31b7c6-7662-4f19-9973-d02adfcfda56" class="numbered-list" start="1"><li>Ivan Esmeral Parra</li></ol><ol type="1" id="84ae4a01-32c2-4c14-bcbf-34def88902cb" class="numbered-list" start="2"><li>Systems Engineering</li></ol><ol type="1" id="b6b9ae53-ea8b-48de-ad62-a7de7c30cf7d" class="numbered-list" start="3"><li>Computer Science</li></ol></div></p></div></p><p id="a685e7b8-1856-4031-81c1-91190e743a50" class="">
</p><p id="d4e72a5e-89a4-45e3-a699-870e990aec8b" class="">The rest is history. The “Google Forms” effect would take its course and clicking that submit button would change the direction of my career and ultimately, my young life.</p><p id="2e36f6aa-4154-4ca3-a9d8-f234ea4d319d" class="">
</p><p id="65437058-8382-4e90-98e9-6286c181065e" class="">Having never actually taken a computer science course before I arrived on campus, I faced a harsh reality check and significant learning curve when I signed up for the intro course in Fall 2017. I stumbled my way through and felt overwhelmed from the knowledge I took away in those 5 months, or lack thereof.</p><p id="ae412bfb-f3bd-4189-a9de-9cdfd089b2fb" class="">
</p><p id="8b51a147-caa4-420f-9467-3dffee5542c0" class="">To quote Randy Pausch’s Last Lecture<em>, </em><div class="indented"><p id="f9d32d39-b0be-4df1-b989-7f9ca02019d1" class=""><em>&quot;Experience is what you get when you didn&#x27;t get what you wanted.&quot; </em></p><p id="9aa7daf8-2667-448d-a11a-d0f76bdb4fac" class="">
</p></div></p><p id="ae00aae4-8560-457b-9a50-88e38877d8a0" class="">While I didn’t do particularly well in the course, I was building towards a passion that I did not fully understand in the moment. As time went by and I took more classes in the space, my confidence grew and grew. Those foundational topics that initially made no sense to me started to slowly click through repetition, persistence, and my happy-go-lucky spirit.</p><p id="2117e31a-d44e-4955-a1c7-66afe3a8be00" class="">
</p><p id="0e6541b5-cb5e-4c83-8e7e-b0f5ea3ee00d" class="">At the end of my first year, I felt comfortable enough with the material that I wanted to apply to become a teaching assistant for the intro course. The reasoning behind this was that I never wanted any student to feel as lost as I once did, where it seemed that any amount of effort could only take me so far. I applied for the TA position and began teaching students the next fall.</p><p id="0480f961-f51f-4a6a-930d-bf3d6f76b6ee" class="">
</p><p id="5b1506a0-d9b3-4c24-b789-f267fd236869" class="">Over the next 2.5 years and five semesters, I had the pleasure of teaching over 100 students and helped hundreds more in a weekly office-hours setting. Each of these students, whether for their major, for a requirement, or simply on a whim, had signed up to learn computer science with no prior background. Knowing this, I knew I had the responsibility of guiding these students and helping them find a place in the vast field of computer science as each of their journeys into the field started with me. During this time, I quickly learned <strong>the importance of empathy when teaching new material.</strong> For example, the introductory concept of the ‘For Loop’. </p><p id="470e050b-11d7-445d-9124-b76c0eacce69" class="">
</p><p id="7bf0cd55-10cf-4af4-bb87-588f3ef1e8ae" class="">One of the most important topics in Intro to Computer Science is iteration, that is, the idea of repeating a set of tasks or instructions for a number of times until a condition is met. When introducing a concept like this, a typical diagram shown to students is as follows:</p><p id="2e12aee8-960b-4390-b0c9-451bced04be2" class="">
</p><figure id="c7686265-34f8-48b8-a409-c1132e2bbf79" class="image"><a href="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%201.png"><img style="width:350px" src="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%201.png"/></a></figure><p id="57abda49-c09f-4d5b-9093-ed476dd04954" class="">credit: <a href="https://study.com/cimages/multimages/16/a4bea689-4e19-4e9d-bf71-433c13a2aa68_for_0.png">a4bea689-4e19-4e9d-bf71-433c13a2aa68_for_0.png (350×278) (study.com)</a></p><p id="9f9c80b9-4984-4838-bde3-eb9cbff5e584" class="">
</p><p id="152a3d4c-6042-4797-925d-7f62b07cf5e6" class="">While this instantly clicks for some, this barebones and colorless logic does not click for everyone! When I first saw this in my large lecture hall as a freshman, I almost walked out of the room.</p><p id="6ce3103d-4fb4-46d9-8fe5-e45b3c4812d8" class="">
</p><p id="4862f470-10ed-49e5-b016-6d6c162d7ca7" class="">In the diagram, we see that it’s as easy as:<div class="indented"><p id="9d94762f-49aa-469b-9916-336dc914ad0b" class="">1) Some type of initialization?</p><p id="34b8c49d-e8ed-4c2b-b9d8-bb497c2038f1" class="">2) A checking of a condition</p><p id="f6891b84-e9a3-4d88-a216-b20e43fe60fa" class="">3) then we have two possibilities:<div class="indented"><p id="e61f9d09-b3e4-4e2d-a859-b5ba0fd82148" class="">3a) If it is false then we end the process, </p><p id="f5c355f9-ade8-4598-9ed4-5451731e8b38" class="">3b) If it is true then we execute our tasks...</p></div></p><p id="d2288a7b-c9af-46f8-ae5e-93f2bfdd60c6" class="">4) Oh and don’t forget we need to...increment or decrement? </p><p id="4eed990f-22ff-4690-90ac-20ad7bfe420b" class="">
</p></div></p><p id="4cd32a70-f08d-4c0e-940a-e273d63fed17" class="">Showing this graphic to someone with no prior programming or math background quickly leads to a room of puzzled faces and pure frustration. Students will often say: “I just don’t get it.” Or, “This is too hard, what’s even the point of this?” </p><p id="e155a368-57bf-4987-a5f4-41738c8e0f4b" class="">
</p><p id="68976b2c-b086-4dab-9743-ca5073fcbbd3" class="">So, instead of diving straight into the concept, I found that finding a real-world or relatable example helped encourage students in my classroom to see the bigger picture. For example, instead of showing an arcane diagram of the different parts of a loop, I introduced this concept by bringing students back to their childhood and showing a graphic of “The Simpsons”. The opening credits of every Simpsons episode shows Bart writing the same sentence over and over again on a chalkboard; the classic &quot;write it 100 times and you can go home&quot; punishment.</p><p id="a04aba81-dab8-43b4-8461-146446f99495" class="">
</p><figure id="e69e4f71-1613-4acd-b6ed-f9eab984dcd2" class="image"><a href="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%202.png"><img style="width:720px" src="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%202.png"/></a></figure><p id="88fa350c-68b4-4ea6-a3ad-32f6d9652f5b" class="">
</p><p id="dfdd22b1-ba61-4d74-ae92-b41762abb2c2" class="">I would then explain that you can use loops to do any task however many times you like. Showing this graphic below (stressing not to worry about the syntax just yet!) to show how Bart can use a ‘For Loop’ and the concept of iteration to outsmart his teacher, finish his punishment in 2 lines instead of 100, and go home for the day.</p><p id="81fdd21d-bef2-479e-9708-c402721cca7a" class="">
</p><figure id="4058b767-6ff2-416f-b55f-4a57e31bcdbd" class="image"><a href="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%203.png"><img style="width:800px" src="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%203.png"/></a></figure><p id="abe8c784-1970-4b38-a613-750a91921ab1" class="">
</p><p id="a7975a79-9c92-4a41-a830-ac1b1497efb4" class="">After showing Bart fulfill his punishment, I would ask students if they could think of any other instances of repetition they see in the technology they use daily, often leading to examples like:</p><p id="9d29f0af-1a87-4373-abdb-6a3ce77af913" class="">
</p><ul id="79ffae75-ff4d-4c6a-b0c3-dedcdd4f98fc" class="bulleted-list"><li style="list-style-type:disc">ATM Machines dispensing cash</li></ul><ul id="44918661-e96f-4c89-873d-c25a693fbf30" class="bulleted-list"><li style="list-style-type:disc">Spotify and Apple Music playlists displaying songs</li></ul><ul id="0b47419e-f6c0-484f-b01e-8ee22020454e" class="bulleted-list"><li style="list-style-type:disc">Facebook showing your list of friends</li></ul><ul id="89118c6e-adf7-4a85-beaa-ddf665104379" class="bulleted-list"><li style="list-style-type:disc">Anything, I mean <em>any</em> computing task that needs to be repeated more than once</li></ul><p id="631024a8-91c8-4119-a90a-90e15379b119" class="">
</p><p id="0a80513d-6d5e-4495-82b5-5403bf526f9f" class="">After getting the students to think deeply about real-world examples and why this concept matters, diving into the syntax became almost trivial. Ultimately, understanding the “Why” led to greater receptiveness and even a desire to eventually learning the “How”.</p><p id="25710384-5673-4dd4-ae2a-021ea4ae96fd" class="">
</p><p id="1a20d282-0e5b-47be-8c26-5f71df628a01" class="">During the 5 month intro course, I would often see students in my class go from being as lost as I was years earlier, to asking me how to switch their major and continue in the field of computer science. This blind trust that they put in me as their mentor led to some of the most rewarding interactions of my entire life. Not only was teaching these students extremely rewarding as they slowly mastered foundational concepts, it helped me reach a far deeper level of understanding that I had never had prior.</p><p id="e1f84bed-ad42-405e-8eec-eb475058fb6e" class="">
</p><p id="b78760e3-c5e6-4903-8acb-4540b9f3fa50" class="">After graduating from Penn, I stopped teaching for a few months until I realized that it was one of my favorite hobbies. I missed the joy of working with others and seeing these difficult concepts bring about spontaneous light-bulb moments.</p><p id="9c304fc9-412c-4c0c-b18b-666441174d60" class="">
</p><p id="805d7188-736d-46c6-989e-6ba1953388e5" class="">I decided to join Juni Learning (an E-Learning company for remote 1:1 instruction in Computer Science) as an instructor seeking fulfillment beyond his day job, now teaching two new students. The greatest difference from this experience and that of my time as a teaching assistant is the shift in student demographics. </p><p id="5c63d4ea-81c9-4d3e-acb3-39d1b6f02a8f" class="">
</p><p id="5b8bd320-fcdd-4415-9be6-fa8649bd9c47" class="">Of the students I taught at Penn, some were freshmen, some were post-grads, and some were people industry experience seeking a career pivot. Meanwhile, my new students are 8 and 9 years old, respectively, and starting their computer science journey remotely, as a part of their elementary school education. </p><p id="36c49781-095b-4573-9435-a72a75b8cf34" class="">
</p><p id="f7db72f3-15f4-4e01-adf9-330eec7a69f5" class=""><strong>These students are learning cursive at the same time as they learn Python(!!!).</strong></p><p id="cfddb196-5d8a-4d34-8f3d-a31ef43f0eb5" class="">
</p><p id="47b14690-76b7-4205-ae6a-9c946e364abf" class="">Before starting with my new students, I thought I had mastered the art of teaching introductory computer science, that is, until I began teaching that same logic of “For Loops”. Not only had my students never even heard of “The Simpsons” making my examples dated and even more confusing, our lesson started like this:<div class="indented"><p id="e1a1a4de-38d2-4bd0-aa39-254f8d11fb56" class="">
</p><p id="8e1e67bd-f5be-4341-b2e5-e217c25d395d" class="">Me: “Last week we finished off with a teaser for our lesson today, an introduction to loops!”</p><p id="a9ce2f13-f887-4cde-8bb1-c4dd62117f68" class="">Them: “Huh?, what is a teaser?”</p><p id="989b4026-1a92-4793-a22c-217f53f1839d" class="">Me: “Oh, it’s like a preview, or a sneak-peek! Let’s just look up the definition together.”</p></div></p><p id="7c683ebd-b70e-42ce-9f5d-af667f9b4c01" class="">
</p><p id="59e1209e-96ca-4f06-83f2-b89eae1a7a45" class="">The following image is what comes up on Google if you look up the word ‘teaser’:</p><figure id="d12770bc-bed3-4131-bdb2-947339a86e0d" class="image"><a href="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%204.png"><img style="width:761px" src="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%204.png"/></a></figure><p id="dc19136c-8a1f-4d3a-90aa-3424532bc3af" class="">
</p><p id="a10a7f66-32a1-4f28-b62f-6f144c7d19f6" class="">Most notably: <strong>“...a person who tempts someone sexually with no intention of satisfying the desire aroused.”</strong> What began as an introduction to ‘For loops’ led to an 8 year old asking me what the words ‘Sexually’ and ‘Aroused’ meant and why I brought them up. Safe to say that I now always check what I ask my students to search on Google...  </p><p id="e0403e7b-78b8-4009-8a64-9bc64882a2ef" class="">
</p><p id="296b0879-0222-401f-a3b5-f6ccd06d500f" class="">After a few lessons and understanding my audience more, I learned that in teaching, different things work for different people, yet, <strong>the empathy used in teaching is truly the same no matter who is on the receiving end of the information.</strong> Being an encouraging, positive light in difficult learning experiences can help make flowers grow from concrete. I truly believe that.</p><p id="1f819ff8-d335-47f8-8206-892c4f888ddd" class="">
</p><p id="8f870262-74cf-4d05-abfd-db5619c76188" class="">The reality is that these younger students are learning concepts before their 10th birthday that I struggled with in my freshman year of college; the world is changing before our very eyes and the potential positive impact that these kids can have on our future will be immense—and I am proud to be a small part of their lifelong journey in learning. Empathy matters and it is crucial to take a step back and make sure its a part of our daily lives.</p><p id="44ceb271-d4c4-40dc-bb75-9bd0289adc50" class="">
</p><p id="e3ef1c51-7341-4b0a-89aa-615f4a6ec5d6" class="">Below are some tips from what I have learned through empathy-based teaching over the last 3 years:</p><p id="81808c36-6686-47d6-ae91-d19f4cfa35bb" class="">
</p><ul id="347b1d7c-9966-4057-92d5-5d8573e2111f" class="bulleted-list"><li style="list-style-type:disc">Be kind! Kindness goes so far in forming relationships with students. If you are kind, your students will listen.</li></ul><ul id="77faa929-9556-4835-92d1-2a0aeb4dcd09" class="bulleted-list"><li style="list-style-type:disc">Fail fast! Learn how to think on the fly and do not get overwhelmed by initial signs of failure, i.e. accidently bringing up sex and arousal to a second-grader when you are supposed to be teaching loops.</li></ul><ul id="86d3bd82-8c1b-4983-8f17-ac79bd93cf43" class="bulleted-list"><li style="list-style-type:disc">Try to relate! Make connections to real life. Focus on the “Why”, the “How” will always follow suit.</li></ul><ul id="ad96f9da-d19d-4341-91bd-2da5df4cdcd5" class="bulleted-list"><li style="list-style-type:disc">Knock down any superiority complex and let your students know that you were once in their shoes and understand the difficulty of what they are going through.</li></ul><ul id="2bb10fbd-01b1-4630-a8d9-262b101d6322" class="bulleted-list"><li style="list-style-type:disc">Incorporate humor into every day life and your lessons. Laughing makes life better and learning come more easily. I love this tweet about making fun of your work:<figure id="55028cfb-497b-40ec-b0ad-6e5623d3735b" class="image"><a href="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%205.png"><img style="width:592px" src="An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%205.png"/></a></figure></li></ul><p id="fa770b02-f825-4c14-ba24-8616b9211256" class="">
</p><ul id="9f9da602-f4cb-4cc0-bf76-7aee57751ad5" class="bulleted-list"><li style="list-style-type:disc">Make it fun! Nothing that feels like a chore will ever ever resonate and stick, ever.</li></ul><p id="1ee67621-1710-47f4-9366-978e721b1977" class="">
</p><p id="fdf86ccd-2203-49fa-8937-958f580315ee" class="">If you’re struggling to find ways to teach, the easiest way to get started is to take time out of your day to teach your friends about your passions. Teaching is the easiest way to learn about a subject! Educator 3BlueOneBrown expressed it best, saying, “...you remember about 10% of what you read, you remember about 20% of what you listen to, you remember about 70% about what you actively interact with in some way, and about 90% about what you reach.”</p><p id="0d4580d7-2a1f-4420-8de0-43b0a1c3ac10" class="">
</p></div></article></body></html>
`

const md =
`
# An attempt to make a difference through empathy-based teaching

Written by: Ivan Esmeral

To expect an 18 year old to know what they want to do for the rest of their life is silly, albeit almost a universal requirement when entering the US Higher Education System. I believe that just because a teenager performed well on a standardized AP or IB Biology test does not necessarily mean they should be forced to make the decision to become a doctor in their first year of college—where if they do not start on any immediate track towards a meaningful career, they are “falling behind” their peers. 

I faced this dilemma when graduating high school, where I chose to study Systems Engineering at the University of Pennsylvania because of 18-year-old me’s very complex rationale. It went a little something like this :

1) Well I’m alright in math and science, but I really like writing and history...but who can make a career in that?

2) My friends who are smarter than me are choosing to be engineers

3) I’ve heard engineers make a lot of money?

4) My mom was an industrial engineer and I guess this seems like the closest fit?

As you can see, I had no idea what a Systems Engineer actually was or what type of work I would be condemning myself to for the rest of my life. Or so I thought.

We’ve all heard of the butterfly effect, where a tiny butterfly flapping its wings in Colombia can cause a tornado across the world in Kansas. That is, some seemingly insignificant event occurs which may have an unexpected rippling effect on a larger scale. But what about the “Google Forms” effect?

During the summer before starting college I received the following email:

![Untitled](An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled.png)

“...you are totally allowed to change your mind.” These were the most reassuring words I could hear at that moment.

I thought, “Why not? I have no idea what Systems Engineers do so I have nothing to lose here, I like computers, and I’ve heard through the grapevine that computer science is the future.”

 I opened the form linked in the email and was amazed to see something as simple as the following:

![Screen Shot 2022-01-21 at 8.38.03 AM.png](An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Screen_Shot_2022-01-21_at_8.38.03_AM.png)

I immediately thought: “Is it really this easy?” “Should I talk to my parents?”

I avoided that last step and locked in my three answers with the confidence and innocent naivety that only an 18-year-old could possibly have:

1. Ivan Esmeral Parra
2. Systems Engineering
3. Computer Science

The rest is history. The “Google Forms” effect would take its course and clicking that submit button would change the direction of my career and ultimately, my young life.

Having never actually taken a computer science course before I arrived on campus, I faced a harsh reality check and significant learning curve when I signed up for the intro course in Fall 2017. I stumbled my way through and felt overwhelmed from the knowledge I took away in those 5 months, or lack thereof.

To quote Randy Pausch’s Last Lecture*,* 

*"Experience is what you get when you didn't get what you wanted."* 

While I didn’t do particularly well in the course, I was building towards a passion that I did not fully understand in the moment. As time went by and I took more classes in the space, my confidence grew and grew. Those foundational topics that initially made no sense to me started to slowly click through repetition, persistence, and my happy-go-lucky spirit.

At the end of my first year, I felt comfortable enough with the material that I wanted to apply to become a teaching assistant for the intro course. The reasoning behind this was that I never wanted any student to feel as lost as I once did, where it seemed that any amount of effort could only take me so far. I applied for the TA position and began teaching students the next fall.

Over the next 2.5 years and five semesters, I had the pleasure of teaching over 100 students and helped hundreds more in a weekly office-hours setting. Each of these students, whether for their major, for a requirement, or simply on a whim, had signed up to learn computer science with no prior background. Knowing this, I knew I had the responsibility of guiding these students and helping them find a place in the vast field of computer science as each of their journeys into the field started with me. During this time, I quickly learned **the importance of empathy when teaching new material.** For example, the introductory concept of the ‘For Loop’. 

One of the most important topics in Intro to Computer Science is iteration, that is, the idea of repeating a set of tasks or instructions for a number of times until a condition is met. When introducing a concept like this, a typical diagram shown to students is as follows:

![Untitled](An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%201.png)

credit: [a4bea689-4e19-4e9d-bf71-433c13a2aa68_for_0.png (350×278) (study.com)](https://study.com/cimages/multimages/16/a4bea689-4e19-4e9d-bf71-433c13a2aa68_for_0.png)

While this instantly clicks for some, this barebones and colorless logic does not click for everyone! When I first saw this in my large lecture hall as a freshman, I almost walked out of the room.

In the diagram, we see that it’s as easy as:

1) Some type of initialization?

2) A checking of a condition

3) then we have two possibilities:

3a) If it is false then we end the process, 

3b) If it is true then we execute our tasks...

4) Oh and don’t forget we need to...increment or decrement? 

Showing this graphic to someone with no prior programming or math background quickly leads to a room of puzzled faces and pure frustration. Students will often say: “I just don’t get it.” Or, “This is too hard, what’s even the point of this?” 

So, instead of diving straight into the concept, I found that finding a real-world or relatable example helped encourage students in my classroom to see the bigger picture. For example, instead of showing an arcane diagram of the different parts of a loop, I introduced this concept by bringing students back to their childhood and showing a graphic of “The Simpsons”. The opening credits of every Simpsons episode shows Bart writing the same sentence over and over again on a chalkboard; the classic "write it 100 times and you can go home" punishment.

![Untitled](An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%202.png)

I would then explain that you can use loops to do any task however many times you like. Showing this graphic below (stressing not to worry about the syntax just yet!) to show how Bart can use a ‘For Loop’ and the concept of iteration to outsmart his teacher, finish his punishment in 2 lines instead of 100, and go home for the day.

![Untitled](An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%203.png)

After showing Bart fulfill his punishment, I would ask students if they could think of any other instances of repetition they see in the technology they use daily, often leading to examples like:

- ATM Machines dispensing cash
- Spotify and Apple Music playlists displaying songs
- Facebook showing your list of friends
- Anything, I mean *any* computing task that needs to be repeated more than once

After getting the students to think deeply about real-world examples and why this concept matters, diving into the syntax became almost trivial. Ultimately, understanding the “Why” led to greater receptiveness and even a desire to eventually learning the “How”.

During the 5 month intro course, I would often see students in my class go from being as lost as I was years earlier, to asking me how to switch their major and continue in the field of computer science. This blind trust that they put in me as their mentor led to some of the most rewarding interactions of my entire life. Not only was teaching these students extremely rewarding as they slowly mastered foundational concepts, it helped me reach a far deeper level of understanding that I had never had prior.

After graduating from Penn, I stopped teaching for a few months until I realized that it was one of my favorite hobbies. I missed the joy of working with others and seeing these difficult concepts bring about spontaneous light-bulb moments.

I decided to join Juni Learning (an E-Learning company for remote 1:1 instruction in Computer Science) as an instructor seeking fulfillment beyond his day job, now teaching two new students. The greatest difference from this experience and that of my time as a teaching assistant is the shift in student demographics. 

Of the students I taught at Penn, some were freshmen, some were post-grads, and some were people industry experience seeking a career pivot. Meanwhile, my new students are 8 and 9 years old, respectively, and starting their computer science journey remotely, as a part of their elementary school education. 

**These students are learning cursive at the same time as they learn Python(!!!).**

Before starting with my new students, I thought I had mastered the art of teaching introductory computer science, that is, until I began teaching that same logic of “For Loops”. Not only had my students never even heard of “The Simpsons” making my examples dated and even more confusing, our lesson started like this:

Me: “Last week we finished off with a teaser for our lesson today, an introduction to loops!”

Them: “Huh?, what is a teaser?”

Me: “Oh, it’s like a preview, or a sneak-peek! Let’s just look up the definition together.”

The following image is what comes up on Google if you look up the word ‘teaser’:

![Untitled](An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%204.png)

Most notably: **“...a person who tempts someone sexually with no intention of satisfying the desire aroused.”** What began as an introduction to ‘For loops’ led to an 8 year old asking me what the words ‘Sexually’ and ‘Aroused’ meant and why I brought them up. Safe to say that I now always check what I ask my students to search on Google...  

After a few lessons and understanding my audience more, I learned that in teaching, different things work for different people, yet, **the empathy used in teaching is truly the same no matter who is on the receiving end of the information.** Being an encouraging, positive light in difficult learning experiences can help make flowers grow from concrete. I truly believe that.

The reality is that these younger students are learning concepts before their 10th birthday that I struggled with in my freshman year of college; the world is changing before our very eyes and the potential positive impact that these kids can have on our future will be immense—and I am proud to be a small part of their lifelong journey in learning. Empathy matters and it is crucial to take a step back and make sure its a part of our daily lives.

Below are some tips from what I have learned through empathy-based teaching over the last 3 years:

- Be kind! Kindness goes so far in forming relationships with students. If you are kind, your students will listen.
- Fail fast! Learn how to think on the fly and do not get overwhelmed by initial signs of failure, i.e. accidently bringing up sex and arousal to a second-grader when you are supposed to be teaching loops.
- Try to relate! Make connections to real life. Focus on the “Why”, the “How” will always follow suit.
- Knock down any superiority complex and let your students know that you were once in their shoes and understand the difficulty of what they are going through.
- Incorporate humor into every day life and your lessons. Laughing makes life better and learning come more easily. I love this tweet about making fun of your work:
    
    ![Untitled](An%20attempt%20to%20make%20a%20difference%20through%20empathy-ba%20374635ff5c974fb6a1fb8a77be490901/Untitled%205.png)
    

- Make it fun! Nothing that feels like a chore will ever ever resonate and stick, ever.

If you’re struggling to find ways to teach, the easiest way to get started is to take time out of your day to teach your friends about your passions. Teaching is the easiest way to learn about a subject! Educator 3BlueOneBrown expressed it best, saying, “...you remember about 10% of what you read, you remember about 20% of what you listen to, you remember about 70% about what you actively interact with in some way, and about 90% about what you reach.”`;
// Converting html to markdown
const result = htmr(post)
    return (
		<div>
			<Sidebar/>
			{result}
		</div>
    );
}
export default Teaching;