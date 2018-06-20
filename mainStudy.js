var request = require('request');

var func =          (a, b) => a + b;
var func2 =          function(x) { return x * 2; }

console.log(func(4, 5));

var source = `

<!DOCTYPE html>
<html class="client-nojs" lang="en" dir="ltr">
<head>
<meta charset="UTF-8"/>
<title>Shaquille O'Neal - Wikipedia</title>
<script>document.documentElement.className = document.documentElement.className.replace( /(^|\s)client-nojs(\s|$)/, "$1client-js$2" );</script>
<script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgCanonicalNamespace":"","wgCanonicalSpecialPageName":false,"wgNamespaceNumber":0,"wgPageName":"Shaquille_O'Neal","wgTitle":"Shaquille O'Neal","wgCurRevisionId":845700100,"wgRevisionId":845700100,"wgArticleId":147726,"wgIsArticle":true,"wgIsRedirect":false,"wgAction":"view","wgUserName":null,"wgUserGroups":["*"],"wgCategories":["Webarchive template wayback links","All articles with dead external links","Articles with dead external links from September 2016","Articles with permanently dead external links","CS1 maint: Uses authors parameter","Articles with dead external links from January 2012","Articles with dead external links from March 2018","Articles with dead external links from August 2017","Wikipedia indefinitely move-protected pages","Wikipedia indefinitely semi-protected biographies of living people","Articles to be expanded from November 2017","All articles with unsourced statements","Articles with unsourced statements from June 2010","Articles with hCards","Articles with unsourced statements from June 2011","Use mdy dates from May 2017","Shaquille O'Neal","1972 births","Living people","20th-century American businesspeople","20th-century American male actors","20th-century American musicians","21st-century American businesspeople","21st-century American male actors","21st-century American musicians","A\u0026M Records artists","African-American basketball players","African-American investors","American investors","African-American male actors","African-American male rappers","African-American mixed martial artists","African-American television personalities","All-American college men's basketball players","American jujutsuka","American male film actors","American Muay Thai practitioners","American municipal police officers","American podcasters","American real estate businesspeople","American stock traders","Barry University alumni","Basketball players at the 1996 Summer Olympics","Basketball players from New Jersey","Basketball players from Texas","Boston Celtics players","Businesspeople from New Jersey","Businesspeople from Texas","Businesspeople in technology","Centers (basketball)","Cleveland Cavaliers players","East Coast hip hop musicians","ESports people","FIBA Hall of Fame inductees","Interscope Records artists","Los Angeles Lakers players","LSU Tigers basketball players","Male actors from Newark, New Jersey","Male actors from Texas","McDonald's High School All-Americans","Medalists at the 1996 Summer Olympics","Miami Heat players","Military brats","National Basketball Association All-Stars","National Basketball Association broadcasters","National Basketball Association players with retired numbers","National Collegiate Basketball Hall of Fame inductees","New York Film Academy alumni","Olympic gold medalists for the United States in basketball","Orlando Magic draft picks","Orlando Magic players","Parade High School All-Americans (boys' basketball)","Participants in American reality television series","Phoenix Suns players","Rappers from New Jersey","Rappers from Texas","Sacramento Kings owners","Sportspeople from Newark, New Jersey","Sportspeople from San Antonio","United States men's national basketball team players","University of Phoenix alumni"],"wgBreakFrames":false,"wgPageContentLanguage":"en","wgPageContentModel":"wikitext","wgSeparatorTransformTable":["",""],"wgDigitTransformTable":["",""],"wgDefaultDateFormat":"dmy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgRelevantPageName":"Shaquille_O'Neal","wgRelevantArticleId":147726,"wgRequestId":"WyjoxQpAADkAAIa0XBQAAABP","wgIsProbablyEditable":false,"wgRelevantPageIsProbablyEditable":false,"wgRestrictionEdit":["autoconfirmed"],"wgRestrictionMove":["sysop"],"wgFlaggedRevsParams":{"tags":{}},"wgStableRevisionId":null,"wgCategoryTreePageCategoryOptions":"{\"mode\":0,\"hideprefix\":20,\"showcount\":true,\"namespaces\":false}","wgWikiEditorEnabledModules":[],"wgBetaFeaturesFeatures":[],"wgMediaViewerOnClick":true,"wgMediaViewerEnabledByDefault":true,"wgPopupsShouldSendModuleToUser":true,"wgPopupsConflictsWithNavPopupGadget":false,"wgVisualEditor":{"pageLanguageCode":"en","pageLanguageDir":"ltr","pageVariantFallbacks":"en","usePageImages":true,"usePageDescriptions":true},"wgPreferredVariant":"en","wgMFExpandAllSectionsUserOption":true,"wgMFEnableFontChanger":true,"wgMFDisplayWikibaseDescriptions":{"search":true,"nearby":true,"watchlist":true,"tagline":false},"wgRelatedArticles":null,"wgRelatedArticlesUseCirrusSearch":true,"wgRelatedArticlesOnlyUseCirrusSearch":false,"wgULSCurrentAutonym":"English","wgNoticeProject":"wikipedia","wgCentralNoticeCookiesToDelete":[],"wgCentralNoticeCategoriesUsingLegacy":["Fundraising","fundraising"],"wgWikibaseItemId":"Q169452","wgScoreNoteLanguages":{"arabic":"العربية","catalan":"català","deutsch":"Deutsch","english":"English","espanol":"español","italiano":"italiano","nederlands":"Nederlands","norsk":"norsk","portugues":"português","suomi":"suomi","svenska":"svenska","vlaams":"West-Vlams"},"wgScoreDefaultNoteLanguage":"nederlands","wgCentralAuthMobileDomain":false,"wgCodeMirrorEnabled":true,"wgVisualEditorToolbarScrollOffset":0,"wgVisualEditorUnsupportedEditParams":["undo","undoafter","veswitched"],"wgEditSubmitButtonLabelPublish":true});mw.loader.state({"ext.gadget.charinsert-styles":"ready","ext.globalCssJs.user.styles":"ready","ext.globalCssJs.site.styles":"ready","site.styles":"ready","noscript":"ready","user.styles":"ready","ext.globalCssJs.user":"ready","ext.globalCssJs.site":"ready","user":"ready","user.options":"ready","user.tokens":"loading","ext.cite.styles":"ready","mediawiki.legacy.shared":"ready","mediawiki.legacy.commonPrint":"ready","jquery.tablesorter.styles":"ready","wikibase.client.init":"ready","ext.visualEditor.desktopArticleTarget.noscript":"ready","ext.uls.interlanguage":"ready","ext.wikimediaBadges":"ready","mediawiki.skinning.interface":"ready","skins.vector.styles":"ready"});mw.loader.implement("user.tokens@1dqfd7l",function($,jQuery,require,module){/*@nomin*/mw.user.tokens.set({"editToken":"+\\","patrolToken":"+\\","watchToken":"+\\","csrfToken":"+\\"});
});mw.loader.load(["ext.cite.a11y","site","mediawiki.page.startup","mediawiki.user","mediawiki.hidpi","mediawiki.page.ready","jquery.tablesorter","mediawiki.toc","mediawiki.searchSuggest","ext.gadget.teahouse","ext.gadget.ReferenceTooltips","ext.gadget.watchlist-notice","ext.gadget.DRN-wizard","ext.gadget.charinsert","ext.gadget.refToolbar","ext.gadget.extra-toolbar-buttons","ext.gadget.switcher","ext.centralauth.centralautologin","mmv.head","mmv.bootstrap.autostart","ext.popups","ext.visualEditor.desktopArticleTarget.init","ext.visualEditor.targetLoader","ext.eventLogging.subscriber","ext.wikimediaEvents","ext.navigationTiming","ext.uls.eventlogger","ext.uls.init","ext.uls.compactlinks","ext.uls.interface","ext.3d","ext.centralNotice.geoIP","ext.centralNotice.startUp","skins.vector.js"]);});</script>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=ext.cite.styles%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediaBadges%7Cjquery.tablesorter.styles%7Cmediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.skinning.interface%7Cskins.vector.styles%7Cwikibase.client.init&amp;only=styles&amp;skin=vector"/>
<script async="" src="/w/load.php?debug=false&amp;lang=en&amp;modules=startup&amp;only=scripts&amp;skin=vector"></script>
<meta name="ResourceLoaderDynamicStyles" content=""/>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=ext.gadget.charinsert-styles&amp;only=styles&amp;skin=vector"/>
<link rel="stylesheet" href="/w/load.php?debug=false&amp;lang=en&amp;modules=site.styles&amp;only=styles&amp;skin=vector"/>
<meta name="generator" content="MediaWiki 1.32.0-wmf.8"/>
<meta name="referrer" content="origin"/>
<meta name="referrer" content="origin-when-crossorigin"/>
<meta name="referrer" content="origin-when-cross-origin"/>
<meta property="og:image" content="https://upload.wikimedia.org/wikipedia/commons/d/d5/Shaquille_O%27Neal_in_2011_%28cropped%29.jpg"/>
<link rel="alternate" href="android-app://org.wikipedia/http/en.m.wikipedia.org/wiki/Shaquille_O%27Neal"/>
<link rel="apple-touch-icon" href="/static/apple-touch/wikipedia.png"/>
<link rel="shortcut icon" href="/static/favicon/wikipedia.ico"/>
<link rel="search" type="application/opensearchdescription+xml" href="/w/opensearch_desc.php" title="Wikipedia (en)"/>
<link rel="EditURI" type="application/rsd+xml" href="//en.wikipedia.org/w/api.php?action=rsd"/>
<link rel="license" href="//creativecommons.org/licenses/by-sa/3.0/"/>
<link rel="canonical" href="https://en.wikipedia.org/wiki/Shaquille_O%27Neal"/>
<link rel="dns-prefetch" href="//login.wikimedia.org"/>
<link rel="dns-prefetch" href="//meta.wikimedia.org" />
<!--[if lt IE 9]><script src="/w/load.php?debug=false&amp;lang=en&amp;modules=html5shiv&amp;only=scripts&amp;skin=vector&amp;sync=1"></script><![endif]-->
</head>
<body class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject page-Shaquille_O_Neal rootpage-Shaquille_O_Neal skin-vector action-view">		<div id="mw-page-base" class="noprint"></div>
		<div id="mw-head-base" class="noprint"></div>
		<div id="content" class="mw-body" role="main">
			<a id="top"></a>
			<div id="siteNotice" class="mw-body-content"><!-- CentralNotice --></div><div class="mw-indicators mw-body-content">
<div id="mw-indicator-pp-default" class="mw-indicator"><a href="/wiki/Wikipedia:Protection_policy#semi" title="This article is semi-protected to promote compliance with the policy on biographies of living people"><img alt="Page semi-protected" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Padlock-silver.svg/20px-Padlock-silver.svg.png" width="20" height="20" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Padlock-silver.svg/30px-Padlock-silver.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Padlock-silver.svg/40px-Padlock-silver.svg.png 2x" data-file-width="128" data-file-height="128" /></a></div>
</div>
<h1 id="firstHeading" class="firstHeading" lang="en">Shaquille O'Neal</h1>			<div id="bodyContent" class="mw-body-content">
				<div id="siteSub" class="noprint">From Wikipedia, the free encyclopedia</div>				<div id="contentSub"></div>
				<div id="jump-to-nav"></div>				<a class="mw-jump-link" href="#mw-head">Jump to navigation</a>
				<a class="mw-jump-link" href="#p-search">Jump to search</a>
				<div id="mw-content-text" lang="en" dir="ltr" class="mw-content-ltr"><div class="mw-parser-output"><div role="note" class="hatnote navigation-not-searchable">"Shaquille" redirects here. For other people called Shaquille, see <a href="/wiki/Shaquille_(given_name)" title="Shaquille (given name)">Shaquille (given name)</a>.</div>
<table class="infobox vcard" style="width:22em;width:26em">
<caption class="fn summary">Shaquille O'Neal</caption>
<tr>
<td colspan="2" style="text-align:center"><a href="/wiki/File:Shaquille_O%27Neal_in_2011_(cropped).jpg" class="image"><img alt="Shaquille O'Neal in 2011 (cropped).jpg" src="//upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Shaquille_O%27Neal_in_2011_%28cropped%29.jpg/220px-Shaquille_O%27Neal_in_2011_%28cropped%29.jpg" width="220" height="256" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Shaquille_O%27Neal_in_2011_%28cropped%29.jpg/330px-Shaquille_O%27Neal_in_2011_%28cropped%29.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Shaquille_O%27Neal_in_2011_%28cropped%29.jpg/440px-Shaquille_O%27Neal_in_2011_%28cropped%29.jpg 2x" data-file-width="686" data-file-height="797" /></a>
<div>O'Neal in 2011</div>
</td>
</tr>
<tr>
<th colspan="2" style="text-align:center;background-color:#DCDCDC;color:#000000;-moz-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; -webkit-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC;">Personal information</th>
</tr>
<tr>
<th scope="row">Born</th>
<td><span style="display:none">(<span class="bday">1972-03-06</span>)</span> March 6, 1972 <span class="noprint ForceAgeToShow">(age&#160;46)</span><br />
<a href="/wiki/Newark,_New_Jersey" title="Newark, New Jersey">Newark, New Jersey</a></td>
</tr>
<tr>
<th scope="row">Nationality</th>
<td>American</td>
</tr>
<tr>
<th scope="row">Listed height</th>
<td>7&#160;ft 1&#160;in (2.16&#160;m)</td>
</tr>
<tr>
<th scope="row">Listed weight</th>
<td>325&#160;lb (147&#160;kg)</td>
</tr>
<tr>
<th colspan="2" style="text-align:center;background-color:#DCDCDC;color:#000000;-moz-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; -webkit-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC;">Career information</th>
</tr>
<tr>
<th scope="row">High school</th>
<td class="plainlist"><a href="/wiki/Robert_G._Cole_Junior-Senior_High_School" title="Robert G. Cole Junior-Senior High School">Robert G. Cole</a><br />
(<a href="/wiki/San_Antonio,_Texas" class="mw-redirect" title="San Antonio, Texas">San Antonio, Texas</a>)</td>
</tr>
<tr>
<th scope="row">College</th>
<td class="plainlist"><a href="/wiki/LSU_Tigers_basketball" title="LSU Tigers basketball">LSU</a> (1989–1992)</td>
</tr>
<tr>
<th scope="row"><a href="/wiki/NBA_draft" title="NBA draft">NBA draft</a></th>
<td><a href="/wiki/1992_NBA_draft" title="1992 NBA draft">1992</a> / Round: 1 / Pick: <a href="/wiki/List_of_first_overall_NBA_draft_picks" title="List of first overall NBA draft picks">1st</a> overall</td>
</tr>
<tr>
<td colspan="2" style="text-align:center">Selected by the <a href="/wiki/Orlando_Magic" title="Orlando Magic">Orlando Magic</a></td>
</tr>
<tr>
<th scope="row">Playing career</th>
<td>1992–2011</td>
</tr>
<tr>
<th scope="row">Position</th>
<td><a href="/wiki/Center_(basketball)" title="Center (basketball)">Center</a></td>
</tr>
<tr>
<th scope="row">Number</th>
<td>32, 34, 33, 36</td>
</tr>
<tr>
<th colspan="2" style="text-align:center;background-color:#DCDCDC;color:#000000;-moz-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; -webkit-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC;">Career history</th>
</tr>
<tr>
<th scope="row" style="font-weight: normal"><a href="/wiki/1992%E2%80%9393_NBA_season" title="1992–93 NBA season">1992</a>–<a href="/wiki/1995%E2%80%9396_NBA_season" title="1995–96 NBA season">1996</a></th>
<td style="text-align: left; line-height: 1.2em"><a href="/wiki/Orlando_Magic" title="Orlando Magic">Orlando Magic</a></td>
</tr>
<tr>
<th scope="row" style="font-weight: normal"><a href="/wiki/1996%E2%80%9397_NBA_season" title="1996–97 NBA season">1996</a>–<a href="/wiki/2003%E2%80%9304_NBA_season" title="2003–04 NBA season">2004</a></th>
<td style="text-align: left; line-height: 1.2em"><a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers">Los Angeles Lakers</a></td>
</tr>
<tr>
<th scope="row" style="font-weight: normal"><a href="/wiki/2004%E2%80%9305_NBA_season" title="2004–05 NBA season">2004</a>–<a href="/wiki/2007%E2%80%9308_NBA_season" title="2007–08 NBA season">2008</a></th>
<td style="text-align: left; line-height: 1.2em"><a href="/wiki/Miami_Heat" title="Miami Heat">Miami Heat</a></td>
</tr>
<tr>
<th scope="row" style="font-weight: normal"><a href="/wiki/2007%E2%80%9308_NBA_season" title="2007–08 NBA season">2008</a>–<a href="/wiki/2008%E2%80%9309_NBA_season" title="2008–09 NBA season">2009</a></th>
<td style="text-align: left; line-height: 1.2em"><a href="/wiki/Phoenix_Suns" title="Phoenix Suns">Phoenix Suns</a></td>
</tr>
<tr>
<th scope="row" style="font-weight: normal"><a href="/wiki/2009%E2%80%9310_NBA_season" title="2009–10 NBA season">2009–2010</a></th>
<td style="text-align: left; line-height: 1.2em"><a href="/wiki/Cleveland_Cavaliers" title="Cleveland Cavaliers">Cleveland Cavaliers</a></td>
</tr>
<tr>
<th scope="row" style="font-weight: normal"><a href="/wiki/2010%E2%80%9311_NBA_season" title="2010–11 NBA season">2010–2011</a></th>
<td style="text-align: left; line-height: 1.2em"><a href="/wiki/Boston_Celtics" title="Boston Celtics">Boston Celtics</a></td>
</tr>
<tr style="display:none">
<th colspan="2"></th>
</tr>
<tr>
<th colspan="2" style="text-align:center;background-color:#DCDCDC;color:#000000;-moz-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; -webkit-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC;">Career highlights and awards</th>
</tr>
<tr>
<td colspan="2" style="text-align:center;text-align: left;">
<ul>
<li>4× <a href="/wiki/NBA_champion" class="mw-redirect" title="NBA champion">NBA champion</a> (<a href="/wiki/2000_NBA_Finals" title="2000 NBA Finals">2000</a>–<a href="/wiki/2002_NBA_Finals" title="2002 NBA Finals">2002</a>, <a href="/wiki/2006_NBA_Finals" title="2006 NBA Finals">2006</a>)</li>
<li>3× <a href="/wiki/Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award">NBA Finals MVP</a> (<a href="/wiki/2000_NBA_Finals" title="2000 NBA Finals">2000</a>–<a href="/wiki/2002_NBA_Finals" title="2002 NBA Finals">2002</a>)</li>
<li><a href="/wiki/NBA_Most_Valuable_Player_Award" title="NBA Most Valuable Player Award">NBA Most Valuable Player</a> (<a href="/wiki/1999%E2%80%932000_NBA_season" title="1999–2000 NBA season">2000</a>)</li>
<li>15× <a href="/wiki/NBA_All-Star" class="mw-redirect" title="NBA All-Star">NBA All-Star</a> (<a href="/wiki/1993_NBA_All-Star_Game" title="1993 NBA All-Star Game">1993</a>–<a href="/wiki/1998_NBA_All-Star_Game" title="1998 NBA All-Star Game">1998</a>, <a href="/wiki/2000_NBA_All-Star_Game" title="2000 NBA All-Star Game">2000</a>–<a href="/wiki/2007_NBA_All-Star_Game" title="2007 NBA All-Star Game">2007</a>, <a href="/wiki/2009_NBA_All-Star_Game" title="2009 NBA All-Star Game">2009</a>)</li>
<li>3× <a href="/wiki/NBA_All-Star_Game_Most_Valuable_Player_Award" title="NBA All-Star Game Most Valuable Player Award">NBA All-Star Game MVP</a> (<a href="/wiki/2000_NBA_All-Star_Game" title="2000 NBA All-Star Game">2000</a>, <a href="/wiki/2004_NBA_All-Star_Game" title="2004 NBA All-Star Game">2004</a>, <a href="/wiki/2009_NBA_All-Star_Game" title="2009 NBA All-Star Game">2009</a>)</li>
<li>8× <a href="/wiki/All-NBA_First_Team" class="mw-redirect" title="All-NBA First Team">All-NBA First Team</a> (<a href="/wiki/1997%E2%80%9398_NBA_season" title="1997–98 NBA season">1998</a>, <a href="/wiki/1999%E2%80%932000_NBA_season" title="1999–2000 NBA season">2000</a>–<a href="/wiki/2005%E2%80%9306_NBA_season" title="2005–06 NBA season">2006</a>)</li>
<li>2× <a href="/wiki/All-NBA_Second_Team" class="mw-redirect" title="All-NBA Second Team">All-NBA Second Team</a> (<a href="/wiki/1994%E2%80%9395_NBA_season" title="1994–95 NBA season">1995</a>, <a href="/wiki/1998%E2%80%9399_NBA_season" title="1998–99 NBA season">1999</a>)</li>
<li>4× <a href="/wiki/All-NBA_Third_Team" class="mw-redirect" title="All-NBA Third Team">All-NBA Third Team</a> (<a href="/wiki/1993%E2%80%9394_NBA_season" title="1993–94 NBA season">1994</a>, <a href="/wiki/1995%E2%80%9396_NBA_season" title="1995–96 NBA season">1996</a>, <a href="/wiki/1996%E2%80%9397_NBA_season" title="1996–97 NBA season">1997</a>, <a href="/wiki/2008%E2%80%9309_NBA_season" title="2008–09 NBA season">2009</a>)</li>
<li>3× <a href="/wiki/NBA_All-Defensive_Second_Team" class="mw-redirect" title="NBA All-Defensive Second Team">NBA All-Defensive Second Team</a> (<a href="/wiki/1999%E2%80%932000_NBA_season" title="1999–2000 NBA season">2000</a>, <a href="/wiki/2000%E2%80%9301_NBA_season" title="2000–01 NBA season">2001</a>, <a href="/wiki/2002%E2%80%9303_NBA_season" title="2002–03 NBA season">2003</a>)</li>
<li><a href="/wiki/NBA_Rookie_of_the_Year_Award" title="NBA Rookie of the Year Award">NBA Rookie of the Year</a> (<a href="/wiki/1992%E2%80%9393_NBA_season" title="1992–93 NBA season">1993</a>)</li>
<li>2× <a href="/wiki/NBA_annual_scoring_champion" class="mw-redirect" title="NBA annual scoring champion">NBA scoring champion</a> (<a href="/wiki/1994%E2%80%9395_NBA_season" title="1994–95 NBA season">1995</a>, <a href="/wiki/1999%E2%80%932000_NBA_season" title="1999–2000 NBA season">2000</a>)</li>
<li><a href="/wiki/NBA_50th_Anniversary_Team" class="mw-redirect" title="NBA 50th Anniversary Team">NBA 50th Anniversary Team</a></li>
<li>No. 34 <a href="/wiki/Los_Angeles_Lakers#Hall_of_Famers,_retired_and_honored_numbers" title="Los Angeles Lakers">retired by Los Angeles Lakers</a></li>
<li>No. 32 <a href="/wiki/Miami_Heat#Retired_numbers" title="Miami Heat">retired by Miami Heat</a></li>
<li><a href="/wiki/List_of_U.S._men%27s_college_basketball_national_player_of_the_year_awards" title="List of U.S. men's college basketball national player of the year awards">College national player of the year</a> (1991)</li>
<li>2× Consensus first-team <a href="/wiki/NCAA_Men%27s_Basketball_All-Americans" title="NCAA Men's Basketball All-Americans">All-American</a> (<a href="/wiki/1991_NCAA_Men%27s_Basketball_All-Americans" title="1991 NCAA Men's Basketball All-Americans">1991</a>, <a href="/wiki/1992_NCAA_Men%27s_Basketball_All-Americans" title="1992 NCAA Men's Basketball All-Americans">1992</a>)</li>
<li>2× <a href="/wiki/Southeastern_Conference_Men%27s_Basketball_Player_of_the_Year" title="Southeastern Conference Men's Basketball Player of the Year">SEC Player of the Year</a> (1991, 1992)</li>
<li>No. 33 <a href="/wiki/LSU_Tigers_basketball#Retired_numbers" title="LSU Tigers basketball">retired by LSU</a></li>
<li><a href="/wiki/FIBA_World_Championship_MVP" class="mw-redirect" title="FIBA World Championship MVP">FIBA World Championship MVP</a> (<a href="/wiki/1994_FIBA_World_Championship" title="1994 FIBA World Championship">1994</a>)</li>
<li><a href="/wiki/USA_Basketball_Male_Athlete_of_the_Year" title="USA Basketball Male Athlete of the Year">USA Basketball Male Athlete of the Year</a> (1994)</li>
<li><a href="/wiki/McDonald%27s_All-American_Game" title="McDonald's All-American Game">McDonald's All-American MVP</a> (1989)</li>
</ul>
</td>
</tr>
<tr style="display:none">
<th colspan="2"></th>
</tr>
<tr>
<th colspan="2" style="text-align:center;background-color:#DCDCDC;color:#000000;-moz-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; -webkit-box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC; box-shadow: inset 2.5px 2.5px 0 #DCDCDC, inset -2.5px -2.5px 0 #DCDCDC;">Career statistics</th>
</tr>
<tr>
<th scope="row" style="text-align: right; line-height: 1.2em"><a href="/wiki/Point_(basketball)" title="Point (basketball)">Points</a></th>
<td style="line-height: 1.2em">28,596 (23.7 ppg)</td>
</tr>
<tr>
<th scope="row" style="text-align: right; line-height: 1.2em"><a href="/wiki/Rebound_(basketball)" title="Rebound (basketball)">Rebounds</a></th>
<td style="line-height: 1.2em">13,099 (10.9 rpg)</td>
</tr>
<tr>
<th scope="row" style="text-align: right; line-height: 1.2em"><a href="/wiki/Block_(basketball)" title="Block (basketball)">Blocks</a></th>
<td style="line-height: 1.2em">2,732 (2.3 bpg)</td>
</tr>
<tr style="display:none">
<th colspan="2"></th>
</tr>
<tr>
<td colspan="2" style="text-align:center"></td>
</tr>
<tr>
<td colspan="2" style="text-align:center"><span style="font-weight:bold"><a rel="nofollow" class="external text" href="https://www.basketball-reference.com/players/o/onealsh01.html">Stats</a> at Basketball-Reference.com</span></td>
</tr>
<tr>
<td colspan="2" style="text-align:center"></td>
</tr>
<tr>
<td colspan="2" style="text-align:center;font-weight:bold; background-color: #DCDCDC;"><a rel="nofollow" class="external text" href="http://www.hoophall.com/hall-of-famers/shaquille-oneal">Basketball Hall of Fame as player</a></td>
</tr>
<tr>
<td colspan="2" style="text-align:center;font-weight:bold; background-color: #DCDCDC;"><a rel="nofollow" class="external text" href="http://www.fiba.com/hall-of-fame/Shaquille-O-Neal">FIBA Hall of Fame as player</a></td>
</tr>
<tr>
<td colspan="2" style="text-align:center;font-weight:bold; background-color: #DCDCDC;"><a href="/wiki/National_Collegiate_Basketball_Hall_of_Fame" title="National Collegiate Basketball Hall of Fame">College Basketball Hall of Fame</a><br />
Inducted in 2014</td>
</tr>
<tr style="display:none">
<td colspan="2"></td>
</tr>
<tr>
<td colspan="2" style="text-align:center;background-color:#DCDCDC;color:#000000;">
<div class="NavFrame" style="border: none; padding: 0;">
<div class="NavHead" style="font-size:105%; text-align: center; background-color: #DCDCDC; color: #000000;">Medals</div>
<div class="NavContent" style="font-size:105%; font-weight: normal; width: 100%;">
<table style="width:100%; background-color: #f9f9f9; color: #000000;">
<tr>
<td></td>
</tr>
<tr>
<th colspan="3" style="text-align:center;vertical-align:middle;background-color:#eeeeee;">Men's basketball</th>
</tr>
<tr>
<th colspan="3" style="text-align:center;vertical-align:middle;background-color:#eeeeee;" class="adr">Representing <span class="country-name"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x" data-file-width="1235" data-file-height="650" />&#160;</span>United States</span></th>
</tr>
<tr>
<th colspan="3" style="text-align:center;vertical-align:middle;background-color:#cccccc;"><a href="/wiki/Basketball_at_the_Summer_Olympics" title="Basketball at the Summer Olympics">Olympic Games</a></th>
</tr>
<tr>
<td style="text-align:center;vertical-align:middle;"><img alt="Gold medal – first place" src="//upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gold_medal_icon_%28G_initial%29.svg/16px-Gold_medal_icon_%28G_initial%29.svg.png" title="Gold medal – first place" width="16" height="16" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gold_medal_icon_%28G_initial%29.svg/24px-Gold_medal_icon_%28G_initial%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gold_medal_icon_%28G_initial%29.svg/32px-Gold_medal_icon_%28G_initial%29.svg.png 2x" data-file-width="16" data-file-height="16" /></td>
<td style="text-align:center;vertical-align:middle;"><span class="nowrap"><a href="/wiki/1996_Summer_Olympics" title="1996 Summer Olympics">1996 Atlanta</a></span></td>
<td style="text-align:center;vertical-align:middle;"><a href="/wiki/1996_United_States_men%27s_Olympic_basketball_team" title="1996 United States men's Olympic basketball team">Team competition</a></td>
</tr>
<tr>
<th colspan="3" style="text-align:center;vertical-align:middle;background-color:#cccccc;"><a href="/wiki/FIBA_World_Championship" class="mw-redirect" title="FIBA World Championship">World Championship</a></th>
</tr>
<tr>
<td style="text-align:center;vertical-align:middle;"><img alt="Gold medal – first place" src="//upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gold_medal_icon_%28G_initial%29.svg/16px-Gold_medal_icon_%28G_initial%29.svg.png" title="Gold medal – first place" width="16" height="16" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gold_medal_icon_%28G_initial%29.svg/24px-Gold_medal_icon_%28G_initial%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Gold_medal_icon_%28G_initial%29.svg/32px-Gold_medal_icon_%28G_initial%29.svg.png 2x" data-file-width="16" data-file-height="16" /></td>
<td style="text-align:center;vertical-align:middle;"><span class="nowrap"><a href="/wiki/1994_FIBA_World_Championship" title="1994 FIBA World Championship">1994 Canada</a></span></td>
<td style="text-align:center;vertical-align:middle;">Team competition</td>
</tr>
</table>
</div>
</div>
</td>
</tr>
</table>
<p><b>Shaquille Rashaun O'Neal</b> (<span class="nowrap"><span class="IPA nopopups noexcerpt"><a href="/wiki/Help:IPA/English" title="Help:IPA/English">/<span style="border-bottom:1px dotted"><span title="/ʃ/: 'sh' in 'shy'">ʃ</span><span title="/ə/: 'a' in 'about'">ə</span><span title="/ˈ/: primary stress follows">ˈ</span><span title="'k' in 'kind'">k</span><span title="/iː/: 'ee' in 'fleece'">iː</span><span title="'l' in 'lie'">l</span></span>/</a></span></span> <a href="/wiki/Help:Pronunciation_respelling_key" title="Help:Pronunciation respelling key"><i title="English pronunciation respelling">shə-<span style="font-size:90%">KEEL</span></i></a>; born March 6, 1972), nicknamed "<b>Shaq</b>" (<span class="nowrap"><span class="IPA nopopups noexcerpt"><a href="/wiki/Help:IPA/English" title="Help:IPA/English">/<span style="border-bottom:1px dotted"><span title="/ʃ/: 'sh' in 'shy'">ʃ</span><span title="/æ/: 'a' in 'bad'">æ</span><span title="'k' in 'kind'">k</span></span>/</a></span></span> <a href="/wiki/Help:Pronunciation_respelling_key" title="Help:Pronunciation respelling key"><i title="English pronunciation respelling"><span style="font-size:90%">SHAK</span></i></a>), is an American retired professional <a href="/wiki/Basketball" title="Basketball">basketball</a> player currently serving as a sports analyst on the television program <i><a href="/wiki/Inside_the_NBA" title="Inside the NBA">Inside the NBA</a></i>. He is widely considered one of the greatest players in NBA history.<sup id="cite_ref-1" class="reference"><a href="#cite_note-1">[1]</a></sup><sup id="cite_ref-2" class="reference"><a href="#cite_note-2">[2]</a></sup><sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup> At 7&#160;ft 1&#160;in (2.16&#160;m) tall<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> and 325 pounds (147&#160;kg), he was one of the tallest and heaviest men ever to play in the NBA, where he suited up for six teams throughout his 19-year career.</p>
<p>Following his time at <a href="/wiki/LSU_Tigers_men%27s_basketball" class="mw-redirect" title="LSU Tigers men's basketball">Louisiana State University</a>, O'Neal was drafted by the <a href="/wiki/Orlando_Magic" title="Orlando Magic">Orlando Magic</a> with the <a href="/wiki/List_of_first_overall_NBA_draft_picks" title="List of first overall NBA draft picks">first overall pick</a> in the <a href="/wiki/1992_NBA_draft" title="1992 NBA draft">1992 NBA draft</a>. He quickly became one of the best <a href="/wiki/Center_(basketball)" title="Center (basketball)">centers</a> in the league, winning <a href="/wiki/NBA_Rookie_of_the_Year_Award" title="NBA Rookie of the Year Award">Rookie of the Year</a> in <a href="/wiki/1992%E2%80%9393_NBA_season" title="1992–93 NBA season">1992–93</a> and leading his team to the <a href="/wiki/1995_NBA_Finals" title="1995 NBA Finals">1995 NBA Finals</a>. After four years with the Magic, O'Neal signed as a <a href="/wiki/Free_agent" title="Free agent">free agent</a> with the <a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers">Los Angeles Lakers</a>. They won <a href="/wiki/Three-peat" title="Three-peat">three consecutive championships</a> in <a href="/wiki/2000_NBA_Finals" title="2000 NBA Finals">2000</a>, <a href="/wiki/2001_NBA_Finals" title="2001 NBA Finals">2001</a>, and <a href="/wiki/2002_NBA_Finals" title="2002 NBA Finals">2002</a>. Amid <a href="/wiki/Shaq%E2%80%93Kobe_feud" title="Shaq–Kobe feud">tension between O'Neal and Kobe Bryant</a>, O'Neal was traded to the <a href="/wiki/Miami_Heat" title="Miami Heat">Miami Heat</a> in <a href="/wiki/2004%E2%80%932005_NBA_season" class="mw-redirect" title="2004–2005 NBA season">2004</a>, and his fourth NBA championship followed in <a href="/wiki/2006_NBA_Finals" title="2006 NBA Finals">2006</a>. Midway through the 2007–2008 season he was traded to the <a href="/wiki/Phoenix_Suns" title="Phoenix Suns">Phoenix Suns</a>. After a season-and-a-half with the Suns, O'Neal was traded to the <a href="/wiki/Cleveland_Cavaliers" title="Cleveland Cavaliers">Cleveland Cavaliers</a> in the <a href="/wiki/2009%E2%80%9310_NBA_season" title="2009–10 NBA season">2009–10 season</a>.<sup id="cite_ref-5" class="reference"><a href="#cite_note-5">[5]</a></sup> O'Neal played for the <a href="/wiki/Boston_Celtics" title="Boston Celtics">Boston Celtics</a> in the 2010–11 season before retiring.<sup id="cite_ref-6" class="reference"><a href="#cite_note-6">[6]</a></sup></p>
<p>O'Neal's individual accolades include the 1999–2000 <a href="/wiki/NBA_Most_Valuable_Player_Award" title="NBA Most Valuable Player Award">MVP award</a>, the 1992–93 <a href="/wiki/NBA_Rookie_of_the_Year_Award" title="NBA Rookie of the Year Award">NBA Rookie of the Year award</a>, 15 <a href="/wiki/NBA_All-Star_Game" title="NBA All-Star Game">All-Star game</a> selections, three All-Star Game MVP awards, three <a href="/wiki/Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award">Finals MVP</a> awards, two <a href="/wiki/List_of_National_Basketball_Association_annual_scoring_leaders" title="List of National Basketball Association annual scoring leaders">scoring titles</a>, 14 <a href="/wiki/All-NBA_Team" title="All-NBA Team">All-NBA team</a> selections, and three <a href="/wiki/NBA_All-Defensive_Team" title="NBA All-Defensive Team">NBA All-Defensive Team</a> selections. He is one of only three players to win <a href="/wiki/NBA_Most_Valuable_Player_Award" title="NBA Most Valuable Player Award">NBA MVP</a>, <a href="/wiki/NBA_All-Star_Game_Most_Valuable_Player_Award" title="NBA All-Star Game Most Valuable Player Award">All-Star game MVP</a> and <a href="/wiki/Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award">Finals MVP</a> awards in the same year (2000); the other players are <a href="/wiki/Willis_Reed" title="Willis Reed">Willis Reed</a> in <a href="/wiki/1969%E2%80%9370_NBA_season" title="1969–70 NBA season">1970</a> and <a href="/wiki/Michael_Jordan" title="Michael Jordan">Michael Jordan</a> in <a href="/wiki/1995%E2%80%9396_NBA_season" title="1995–96 NBA season">1996</a> and <a href="/wiki/1997%E2%80%9398_NBA_season" title="1997–98 NBA season">1998</a>. He ranks <a href="/wiki/List_of_National_Basketball_Association_career_scoring_leaders" title="List of National Basketball Association career scoring leaders">8th all-time in points scored</a>, 6th in <a href="/wiki/Field_goal_(basketball)" title="Field goal (basketball)">field goals</a>, <a href="/wiki/List_of_National_Basketball_Association_career_rebounding_leaders" title="List of National Basketball Association career rebounding leaders">15th in rebounds</a>, and <a href="/wiki/List_of_National_Basketball_Association_career_blocks_leaders" title="List of National Basketball Association career blocks leaders">8th in blocks</a>. Largely due to his ability to <a href="/wiki/Slam_dunk" title="Slam dunk">dunk</a> the basketball, O'Neal also ranks third all-time in field goal percentage (58.2%).<sup id="cite_ref-brstats_7-0" class="reference"><a href="#cite_note-brstats-7">[7]</a></sup> O'Neal was elected into the <a href="/wiki/Naismith_Memorial_Basketball_Hall_of_Fame" title="Naismith Memorial Basketball Hall of Fame">Naismith Memorial Basketball Hall of Fame</a> in 2016.<sup id="cite_ref-8" class="reference"><a href="#cite_note-8">[8]</a></sup> He was elected to the <a href="/wiki/FIBA_Hall_of_Fame" title="FIBA Hall of Fame">FIBA Hall of Fame</a> in 2017.<sup id="cite_ref-9" class="reference"><a href="#cite_note-9">[9]</a></sup></p>
<p>In addition to his basketball career, O'Neal has released four <a href="/wiki/Rapping" title="Rapping">rap</a> albums, with his first, <i><a href="/wiki/Shaq_Diesel" title="Shaq Diesel">Shaq Diesel</a></i>, going <a href="/wiki/Music_recording_sales_certification" class="mw-redirect" title="Music recording sales certification">platinum</a>. He has appeared in numerous films and has starred in his own <a href="/wiki/Reality_show" class="mw-redirect" title="Reality show">reality shows</a>, <i><a href="/wiki/Shaq%27s_Big_Challenge" title="Shaq's Big Challenge">Shaq's Big Challenge</a></i> and <i><a href="/wiki/Shaq_Vs." title="Shaq Vs.">Shaq Vs.</a></i>. He hosts <i>The Big Podcast with Shaq</i>.<sup id="cite_ref-10" class="reference"><a href="#cite_note-10">[10]</a></sup> He is also the general manager of Kings Guard Gaming of the <a href="/wiki/NBA_2K_League" title="NBA 2K League">NBA 2K League</a>.<sup id="cite_ref-11" class="reference"><a href="#cite_note-11">[11]</a></sup></p>
<p></p>
<div id="toc" class="toc">
<div class="toctitle" lang="en" dir="ltr">
<h2>Contents</h2>
</div>
<ul>
<li class="toclevel-1 tocsection-1"><a href="#Early_life"><span class="tocnumber">1</span> <span class="toctext">Early life</span></a></li>
<li class="toclevel-1 tocsection-2"><a href="#College_career"><span class="tocnumber">2</span> <span class="toctext">College career</span></a></li>
<li class="toclevel-1 tocsection-3"><a href="#NBA_career"><span class="tocnumber">3</span> <span class="toctext">NBA career</span></a>
<ul>
<li class="toclevel-2 tocsection-4"><a href="#Orlando_Magic_(1992–1996)"><span class="tocnumber">3.1</span> <span class="toctext">Orlando Magic (1992–1996)</span></a></li>
<li class="toclevel-2 tocsection-5"><a href="#Los_Angeles_Lakers_(1996–2004)"><span class="tocnumber">3.2</span> <span class="toctext">Los Angeles Lakers (1996–2004)</span></a>
<ul>
<li class="toclevel-3 tocsection-6"><a href="#Championship_seasons"><span class="tocnumber">3.2.1</span> <span class="toctext">Championship seasons</span></a></li>
<li class="toclevel-3 tocsection-7"><a href="#Toe_surgery_to_departure"><span class="tocnumber">3.2.2</span> <span class="toctext">Toe surgery to departure</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-8"><a href="#Miami_Heat_(2004–2008)"><span class="tocnumber">3.3</span> <span class="toctext">Miami Heat (2004–2008)</span></a>
<ul>
<li class="toclevel-3 tocsection-9"><a href="#Fourth_championship"><span class="tocnumber">3.3.1</span> <span class="toctext">Fourth championship</span></a></li>
<li class="toclevel-3 tocsection-10"><a href="#Surgery_and_Wade's_injury"><span class="tocnumber">3.3.2</span> <span class="toctext">Surgery and Wade's injury</span></a></li>
<li class="toclevel-3 tocsection-11"><a href="#2007–2008_season"><span class="tocnumber">3.3.3</span> <span class="toctext">2007–2008 season</span></a></li>
</ul>
</li>
<li class="toclevel-2 tocsection-12"><a href="#Phoenix_Suns_(2008–2009)"><span class="tocnumber">3.4</span> <span class="toctext">Phoenix Suns (2008–2009)</span></a></li>
<li class="toclevel-2 tocsection-13"><a href="#Cleveland_Cavaliers_(2009–2010)"><span class="tocnumber">3.5</span> <span class="toctext">Cleveland Cavaliers (2009–2010)</span></a></li>
<li class="toclevel-2 tocsection-14"><a href="#Boston_Celtics_(2010–2011)"><span class="tocnumber">3.6</span> <span class="toctext">Boston Celtics (2010–2011)</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-15"><a href="#National_team_career"><span class="tocnumber">4</span> <span class="toctext">National team career</span></a></li>
<li class="toclevel-1 tocsection-16"><a href="#Player_profile"><span class="tocnumber">5</span> <span class="toctext">Player profile</span></a></li>
<li class="toclevel-1 tocsection-17"><a href="#Media_personality"><span class="tocnumber">6</span> <span class="toctext">Media personality</span></a></li>
<li class="toclevel-1 tocsection-18"><a href="#Off_the_court"><span class="tocnumber">7</span> <span class="toctext">Off the court</span></a>
<ul>
<li class="toclevel-2 tocsection-19"><a href="#Education"><span class="tocnumber">7.1</span> <span class="toctext">Education</span></a></li>
<li class="toclevel-2 tocsection-20"><a href="#Law_enforcement"><span class="tocnumber">7.2</span> <span class="toctext">Law enforcement</span></a></li>
<li class="toclevel-2 tocsection-21"><a href="#Music_career"><span class="tocnumber">7.3</span> <span class="toctext">Music career</span></a></li>
<li class="toclevel-2 tocsection-22"><a href="#Acting"><span class="tocnumber">7.4</span> <span class="toctext">Acting</span></a></li>
<li class="toclevel-2 tocsection-23"><a href="#Video_games"><span class="tocnumber">7.5</span> <span class="toctext">Video games</span></a></li>
<li class="toclevel-2 tocsection-24"><a href="#Television"><span class="tocnumber">7.6</span> <span class="toctext">Television</span></a></li>
<li class="toclevel-2 tocsection-25"><a href="#Advertising"><span class="tocnumber">7.7</span> <span class="toctext">Advertising</span></a></li>
<li class="toclevel-2 tocsection-26"><a href="#Mixed_martial_arts"><span class="tocnumber">7.8</span> <span class="toctext">Mixed martial arts</span></a></li>
<li class="toclevel-2 tocsection-27"><a href="#Professional_wrestling"><span class="tocnumber">7.9</span> <span class="toctext">Professional wrestling</span></a></li>
<li class="toclevel-2 tocsection-28"><a href="#Business_ventures"><span class="tocnumber">7.10</span> <span class="toctext">Business ventures</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-29"><a href="#Personal_life"><span class="tocnumber">8</span> <span class="toctext">Personal life</span></a>
<ul>
<li class="toclevel-2 tocsection-30"><a href="#Marriage_to_Shaunie"><span class="tocnumber">8.1</span> <span class="toctext">Marriage to Shaunie</span></a></li>
<li class="toclevel-2 tocsection-31"><a href="#Girlfriends"><span class="tocnumber">8.2</span> <span class="toctext">Girlfriends</span></a></li>
<li class="toclevel-2 tocsection-32"><a href="#Outside_of_Basketball"><span class="tocnumber">8.3</span> <span class="toctext">Outside of Basketball</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-33"><a href="#NBA_career_statistics"><span class="tocnumber">9</span> <span class="toctext">NBA career statistics</span></a>
<ul>
<li class="toclevel-2 tocsection-34"><a href="#Regular_season"><span class="tocnumber">9.1</span> <span class="toctext">Regular season</span></a></li>
<li class="toclevel-2 tocsection-35"><a href="#Playoffs"><span class="tocnumber">9.2</span> <span class="toctext">Playoffs</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-36"><a href="#Discography"><span class="tocnumber">10</span> <span class="toctext">Discography</span></a></li>
<li class="toclevel-1 tocsection-37"><a href="#Filmography"><span class="tocnumber">11</span> <span class="toctext">Filmography</span></a>
<ul>
<li class="toclevel-2 tocsection-38"><a href="#Films"><span class="tocnumber">11.1</span> <span class="toctext">Films</span></a></li>
<li class="toclevel-2 tocsection-39"><a href="#Television_2"><span class="tocnumber">11.2</span> <span class="toctext">Television</span></a></li>
<li class="toclevel-2 tocsection-40"><a href="#Awards_and_nominations"><span class="tocnumber">11.3</span> <span class="toctext">Awards and nominations</span></a></li>
</ul>
</li>
<li class="toclevel-1 tocsection-41"><a href="#Bibliography"><span class="tocnumber">12</span> <span class="toctext">Bibliography</span></a></li>
<li class="toclevel-1 tocsection-42"><a href="#See_also"><span class="tocnumber">13</span> <span class="toctext">See also</span></a></li>
<li class="toclevel-1 tocsection-43"><a href="#References"><span class="tocnumber">14</span> <span class="toctext">References</span></a></li>
<li class="toclevel-1 tocsection-44"><a href="#External_links"><span class="tocnumber">15</span> <span class="toctext">External links</span></a></li>
</ul>
</div>
<p></p>
<h2><span class="mw-headline" id="Early_life">Early life</span></h2>
<div class="thumb tleft">
<div class="thumbinner" style="width:106px;"><a href="/wiki/File:Shaquille_O%27Neal_-_Cole_High_School_1989.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/d/df/Shaquille_O%27Neal_-_Cole_High_School_1989.jpg" width="104" height="153" class="thumbimage" data-file-width="104" data-file-height="153" /></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Shaquille_O%27Neal_-_Cole_High_School_1989.jpg" class="internal" title="Enlarge"></a></div>
O'Neal playing for the Cole High School varsity basketball team in 1988–89.</div>
</div>
</div>
<p>O'Neal was born on March 6, 1972, in <a href="/wiki/Newark,_New_Jersey" title="Newark, New Jersey">Newark, New Jersey</a>, to Lucille O'Neal and Joe Toney, who played high school basketball (he was an All-State guard) and was offered a basketball scholarship to play at <a href="/wiki/Seton_Hall_Pirates_men%27s_basketball" title="Seton Hall Pirates men's basketball">Seton Hall</a>. Toney struggled with <a href="/wiki/Drug_addiction" class="mw-redirect" title="Drug addiction">drug addiction</a> and was imprisoned for drug possession when O'Neal was an infant. Upon his release, he did not resume a place in O'Neal's life and instead agreed to relinquish his parental rights to O'Neal's stepfather, Phillip A. Harrison, a career <a href="/wiki/United_States_Army" title="United States Army">Army</a> sergeant.<sup id="cite_ref-12" class="reference"><a href="#cite_note-12">[12]</a></sup><sup id="cite_ref-LAT_Plaschke_13-0" class="reference"><a href="#cite_note-LAT_Plaschke-13">[13]</a></sup> O'Neal remained estranged from his biological father for decades; O'Neal had not spoken with Toney or expressed an interest in establishing a relationship.<sup id="cite_ref-LAT_Plaschke_13-1" class="reference"><a href="#cite_note-LAT_Plaschke-13">[13]</a></sup> On his 1994 <a href="/wiki/Hip_hop_music" title="Hip hop music">rap</a> album, <i>Shaq Fu: The Return</i>, O'Neal voiced his feelings of disdain for Toney in the song "<a href="/wiki/Biological_Didn%27t_Bother" title="Biological Didn't Bother">Biological Didn't Bother</a>", dismissing him with the line "Phil is my father." However, O'Neal's feelings toward Toney mellowed in the years following Harrison's death in 2013, and the two met for the first time in March 2016, with O'Neal telling him, "I don’t hate you. I had a good life. I had Phil."<sup id="cite_ref-14" class="reference"><a href="#cite_note-14">[14]</a></sup></p>
<p>O'Neal credits the <a href="/wiki/Boys_and_Girls_Club_of_America" class="mw-redirect" title="Boys and Girls Club of America">Boys and Girls Club of America</a> in Newark with giving him a safe place to play and keeping him off the streets. "It gave me something to do," he said. "I'd just go there to shoot. I didn't even play on a team."<sup id="cite_ref-15" class="reference"><a href="#cite_note-15">[15]</a></sup> Because of his stepfather's career in the military, the family left Newark, moving to <a href="/wiki/Military_bases" class="mw-redirect" title="Military bases">military bases</a> in <a href="/wiki/Germany" title="Germany">Germany</a> and <a href="/wiki/Texas" title="Texas">Texas</a>.<sup id="cite_ref-16" class="reference"><a href="#cite_note-16">[16]</a></sup></p>
<p>At <a href="/wiki/Robert_G._Cole_Junior-Senior_High_School" title="Robert G. Cole Junior-Senior High School">Robert G. Cole High School</a> in <a href="/wiki/San_Antonio" title="San Antonio">San Antonio, Texas</a>, O'Neal led his team to a 68–1 record over two years and helped the team win the state championship during his senior year.<sup id="cite_ref-key_moments_17-0" class="reference"><a href="#cite_note-key_moments-17">[17]</a></sup> His 791 rebounds during the 1989 season remains a state record for a player in any classification.<sup id="cite_ref-18" class="reference"><a href="#cite_note-18">[18]</a></sup> O'Neal's tendency to make <a href="/wiki/Hook_shot" title="Hook shot">hook shots</a> earned comparisons to <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Kareem Abdul-Jabbar</a>, inspiring him to wear the same jersey number as Abdul-Jabbar, <i>33</i>. However, his high school team did not have a <i>33</i> jersey, so O'Neal chose to wear <i>32</i> before college.<sup id="cite_ref-number_19-0" class="reference"><a href="#cite_note-number-19">[19]</a></sup></p>
<h2><span class="mw-headline" id="College_career">College career</span></h2>
<table class="plainlinks metadata ambox ambox-content" role="presentation">
<tr>
<td class="mbox-image">
<div style="width:52px"><a href="/wiki/File:Wiki_letter_w.svg" class="image"><img alt="Wiki letter w.svg" src="//upload.wikimedia.org/wikipedia/en/thumb/6/6c/Wiki_letter_w.svg/44px-Wiki_letter_w.svg.png" width="44" height="44" srcset="//upload.wikimedia.org/wikipedia/en/thumb/6/6c/Wiki_letter_w.svg/66px-Wiki_letter_w.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/6/6c/Wiki_letter_w.svg/88px-Wiki_letter_w.svg.png 2x" data-file-width="44" data-file-height="44" /></a></div>
</td>
<td class="mbox-text">
<div class="mbox-text-span">This section <b>is missing information about when subject went to LSU</b>. <span class="hide-when-compact">Please expand the section to include this information. Further details may exist on the <a href="/wiki/Talk:Shaquille_O%27Neal" title="Talk:Shaquille O'Neal">talk page</a>.</span> <small><i>(November 2017)</i></small></div>
</td>
</tr>
</table>
<p>After graduating from high school, O'Neal studied business at <a href="/wiki/Louisiana_State_University" title="Louisiana State University">Louisiana State University</a>. He had first met <a href="/wiki/Dale_Brown_(basketball)" title="Dale Brown (basketball)">Dale Brown</a>, <a href="/wiki/LSU_Tigers_basketball" title="LSU Tigers basketball">LSU's men's basketball coach</a>, years earlier in Europe. O'Neal's stepfather was stationed on a <a href="/wiki/United_States_Army" title="United States Army">U.S. Army</a> base at <a href="/wiki/Wildflecken" title="Wildflecken">Wildflecken</a>, West Germany. While playing for Brown at LSU, O'Neal was a two-time <a href="/wiki/NCAA_Men%27s_Basketball_All-Americans" title="NCAA Men's Basketball All-Americans">All-American</a>, two-time <a href="/wiki/Southeastern_Conference" title="Southeastern Conference">SEC</a> <a href="/wiki/Southeastern_Conference_Men%27s_Basketball_Player_of_the_Year" title="Southeastern Conference Men's Basketball Player of the Year">Player of the Year</a>, and received the <a href="/wiki/Adolph_Rupp_Trophy" title="Adolph Rupp Trophy">Adolph Rupp Trophy</a> as <a href="/wiki/National_Collegiate_Athletic_Association" title="National Collegiate Athletic Association">NCAA</a> men's basketball player of the year in 1991; he was also named college player of the year by <a href="/wiki/Associated_Press_College_Basketball_Player_of_the_Year" title="Associated Press College Basketball Player of the Year">AP</a> and <a href="/wiki/UPI_College_Basketball_Player_of_the_Year" title="UPI College Basketball Player of the Year">UPI</a>. O'Neal left LSU early to pursue his NBA career, but <a href="#Education">continued his education</a> even after becoming a professional player.<sup id="cite_ref-20" class="reference"><a href="#cite_note-20">[20]</a></sup> He was later inducted into the <a href="/wiki/Louisiana_State_University_Athletic_Hall_of_Fame" title="Louisiana State University Athletic Hall of Fame">LSU Hall of Fame</a>.<sup id="cite_ref-21" class="reference"><a href="#cite_note-21">[21]</a></sup> A 900-pound bronze statue of O'Neal is located in front of the <a href="/wiki/LSU_Tigers_basketball" title="LSU Tigers basketball">LSU Tigers</a> <a href="/wiki/LSU_Basketball_Practice_Facility" title="LSU Basketball Practice Facility">Basketball Practice Facility</a>.<sup id="cite_ref-22" class="reference"><a href="#cite_note-22">[22]</a></sup></p>
<h2><span class="mw-headline" id="NBA_career">NBA career</span></h2>
<h3><span id="Orlando_Magic_.281992.E2.80.931996.29"></span><span class="mw-headline" id="Orlando_Magic_(1992–1996)">Orlando Magic (1992–1996)</span></h3>
<p>The <a href="/wiki/Orlando_Magic" title="Orlando Magic">Orlando Magic</a> drafted O'Neal with the <a href="/wiki/List_of_NBA_first_overall_draft_picks" class="mw-redirect" title="List of NBA first overall draft picks">1st overall pick</a> in the <a href="/wiki/1992_NBA_draft" title="1992 NBA draft">1992 NBA draft</a>. During that summer, prior to moving to <a href="/wiki/Orlando,_Florida" title="Orlando, Florida">Orlando</a>, he spent a significant amount of time in Los Angeles under the tutelage of Hall of Famer <a href="/wiki/Magic_Johnson" title="Magic Johnson">Magic Johnson</a>.<sup id="cite_ref-23" class="reference"><a href="#cite_note-23">[23]</a></sup> Given <a href="/wiki/Terry_Catledge" title="Terry Catledge">Terry Catledge</a> eventually refused to give O'Neal the 33 jersey, he relented by going back to the 32 from his high school days.<sup id="cite_ref-number_19-1" class="reference"><a href="#cite_note-number-19">[19]</a></sup> O'Neal was named the Player of the Week in his first week in the NBA, becoming the first player to do so.<sup id="cite_ref-24" class="reference"><a href="#cite_note-24">[24]</a></sup> During his <a href="/wiki/1992%E2%80%9393_NBA_season" title="1992–93 NBA season">rookie season</a>, O'Neal averaged 23.4 points on 56.2% shooting, <a href="/wiki/List_of_National_Basketball_Association_top_rookie_rebounding_averages" class="mw-redirect" title="List of National Basketball Association top rookie rebounding averages">13.9 rebounds</a>, and 3.5 <a href="/wiki/Block_(basketball)" title="Block (basketball)">blocks</a> per game for the season. He was named the 1993 <a href="/wiki/NBA_Rookie_of_the_Year_Award" title="NBA Rookie of the Year Award">NBA Rookie of the Year</a> and became the first rookie to be voted an All-Star starter since <a href="/wiki/Michael_Jordan" title="Michael Jordan">Michael Jordan</a> in 1985.<sup id="cite_ref-Magic_history_25-0" class="reference"><a href="#cite_note-Magic_history-25">[25]</a></sup> The Magic finished 41–41, winning 20 more games than the previous season; however, the team ultimately missed the playoffs by virtue of a tie-breaker with the <a href="/wiki/Indiana_Pacers" title="Indiana Pacers">Indiana Pacers</a>. On more than one occasion during the year, <i><a href="/wiki/Sports_Illustrated" title="Sports Illustrated">Sports Illustrated</a></i> writer <a href="/wiki/Jack_McCallum" title="Jack McCallum">Jack McCallum</a> overheard O'Neal saying, "We've got to get [head coach] <a href="/wiki/Matt_Guokas" title="Matt Guokas">Matty [Guokas]</a> out of here and bring in [assistant] <a href="/wiki/Brian_Hill_(basketball)" title="Brian Hill (basketball)">Brian [Hill]</a>."<sup id="cite_ref-mccallum_26-0" class="reference"><a href="#cite_note-mccallum-26">[26]</a></sup></p>
<p>In 1993–1994, O'Neal's <a href="/wiki/1993%E2%80%9394_NBA_season" title="1993–94 NBA season">second season</a>, Hill was the coach and Guokas was reassigned to the front office.<sup id="cite_ref-27" class="reference"><a href="#cite_note-27">[27]</a></sup> O'Neal improved his scoring average to 29.4 points (second in the league to <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">David Robinson</a>) while leading the NBA in field goal percentage at 60%. On November 20, 1993, against the <a href="/wiki/New_Jersey_Nets" class="mw-redirect" title="New Jersey Nets">New Jersey Nets</a>, O'Neal registered the first <a href="/wiki/Triple-double" class="mw-redirect" title="Triple-double">triple-double</a> of his career, recording 24 points to go along with career highs of 28 rebounds and 15 blocks.<sup id="cite_ref-28" class="reference"><a href="#cite_note-28">[28]</a></sup> He was voted into the All-Star game and also made the All-NBA 3rd Team. Teamed with newly drafted <a href="/wiki/Penny_Hardaway" title="Penny Hardaway">Anfernee "Penny" Hardaway</a>, the Magic finished with a record of 50–32 and made <a href="/wiki/1995_NBA_Playoffs" title="1995 NBA Playoffs">the playoffs</a> for the first time in franchise history. In his first playoff series, O'Neal averaged 20.7 points and 13.3 rebounds in a losing effort as the Magic lost every game to the <a href="/wiki/Indiana_Pacers" title="Indiana Pacers">Indiana Pacers</a>.</p>
<p>O'Neal's third season in <a href="/wiki/1994%E2%80%9395_NBA_season" title="1994–95 NBA season">1994–95</a> had him <a href="/wiki/List_of_National_Basketball_Association_annual_scoring_leaders" title="List of National Basketball Association annual scoring leaders">leading the NBA in scoring</a> with a 29.3 point average, while finishing second in MVP voting to David Robinson and entering his third straight All-Star Game along with Hardaway. They formed one of the league's top duos and helped Orlando to a 57–25 record and the <a href="/wiki/Atlantic_Division_(NBA)" title="Atlantic Division (NBA)">Atlantic Division</a> crown. The Magic won their first ever playoff series against the <a href="/wiki/Boston_Celtics" title="Boston Celtics">Boston Celtics</a> in the <a href="/wiki/1995_NBA_Playoffs" title="1995 NBA Playoffs">1995 NBA Playoffs</a>. They then defeated the <a href="/wiki/Chicago_Bulls" title="Chicago Bulls">Chicago Bulls</a> in the conference semifinals. After beating <a href="/wiki/Reggie_Miller" title="Reggie Miller">Reggie Miller</a>'s Indiana Pacers, the Magic reached the <a href="/wiki/1995_NBA_Finals" title="1995 NBA Finals">NBA Finals</a>, facing the defending NBA champion <a href="/wiki/Houston_Rockets" title="Houston Rockets">Houston Rockets</a>. O'Neal played well in his first Finals appearance, averaging 28 points on 59.5% shooting, 12.5 rebounds, and 6.3 assists. Despite this, the Rockets, led by future Hall-of-Famers <a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Hakeem Olajuwon</a> and <a href="/wiki/Clyde_Drexler" title="Clyde Drexler">Clyde Drexler</a>, swept the series in four games.<sup id="cite_ref-29" class="reference"><a href="#cite_note-29">[29]</a></sup></p>
<p>O'Neal was injured for a great deal of the <a href="/wiki/1995%E2%80%9396_NBA_season" title="1995–96 NBA season">1995–96 season</a>, missing 28 games. He averaged 26.6 points and 11 rebounds per game, made the All-NBA 3rd Team, and played in his 4th All-Star Game. Despite O'Neal's injuries, the Magic finished with a regular season record of 60–22, second in the Eastern conference to the Chicago Bulls, who finished with an <a href="/wiki/1995%E2%80%9396_Chicago_Bulls_season" title="1995–96 Chicago Bulls season">NBA record 72 wins</a>. Orlando easily defeated the <a href="/wiki/Detroit_Pistons" title="Detroit Pistons">Detroit Pistons</a> and the <a href="/wiki/Atlanta_Hawks" title="Atlanta Hawks">Atlanta Hawks</a> in the first two rounds of the <a href="/wiki/1996_NBA_Playoffs" title="1996 NBA Playoffs">1996 NBA Playoffs</a>; however, they were no match for Jordan's Bulls, who swept them in the Eastern Conference Finals.</p>
<h3><span id="Los_Angeles_Lakers_.281996.E2.80.932004.29"></span><span class="mw-headline" id="Los_Angeles_Lakers_(1996–2004)">Los Angeles Lakers (1996–2004)</span></h3>
<div class="thumb tright">
<div class="thumbinner" style="width:172px;"><a href="/wiki/File:Lipofsky_Shaquille_O%27Neal.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lipofsky_Shaquille_O%27Neal.jpg/170px-Lipofsky_Shaquille_O%27Neal.jpg" width="170" height="256" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/6/65/Lipofsky_Shaquille_O%27Neal.jpg 1.5x" data-file-width="199" data-file-height="300" /></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Lipofsky_Shaquille_O%27Neal.jpg" class="internal" title="Enlarge"></a></div>
In 8 seasons with the <a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers">Los Angeles Lakers</a> (1996–2004), O'Neal won three consecutive championships from <a href="/wiki/2000_NBA_Finals" title="2000 NBA Finals">2000</a> to <a href="/wiki/2002_NBA_Finals" title="2002 NBA Finals">2002</a> and appeared in the <a href="/wiki/2004_NBA_Finals" title="2004 NBA Finals">2004 NBA Finals</a>.</div>
</div>
</div>
<p>O'Neal became a <a href="/wiki/Free_agent" title="Free agent">free agent</a> after the 1995–96 NBA season.</p>
<p>In the summer of 1996, O'Neal was named to the <a href="/wiki/Basketball_at_the_1996_Summer_Olympics" title="Basketball at the 1996 Summer Olympics">United States Olympic basketball team</a>, and was later part of the gold medal-winning team at the <a href="/wiki/1996_Summer_Olympics" title="1996 Summer Olympics">1996 Olympics</a> in <a href="/wiki/Atlanta" title="Atlanta">Atlanta</a>. While the Olympic basketball team was training in Orlando, the <i><a href="/wiki/Orlando_Sentinel" title="Orlando Sentinel">Orlando Sentinel</a></i> published a poll that asked whether the Magic should fire Hill if that were one of O'Neal's conditions for returning.<sup id="cite_ref-macmullan_19960701_30-0" class="reference"><a href="#cite_note-macmullan_19960701-30">[30]</a></sup><sup id="cite_ref-wojnarowski_31-0" class="reference"><a href="#cite_note-wojnarowski-31">[31]</a></sup> 82% answered "no".<sup id="cite_ref-macmullan_19960701_30-1" class="reference"><a href="#cite_note-macmullan_19960701-30">[30]</a></sup> O'Neal had a power struggle while playing under Hill.<sup id="cite_ref-reilly_32-0" class="reference"><a href="#cite_note-reilly-32">[32]</a></sup><sup id="cite_ref-blinebury_33-0" class="reference"><a href="#cite_note-blinebury-33">[33]</a></sup> He said the team "just didn't respect [Hill]."<sup id="cite_ref-34" class="reference"><a href="#cite_note-34">[34]</a></sup> Another question in the poll asked, "Is Shaq worth $115&#160;million?" in reference to the amount of the Magic's offer. 91.3% of the response was "no".<sup id="cite_ref-wojnarowski_31-1" class="reference"><a href="#cite_note-wojnarowski-31">[31]</a></sup><sup id="cite_ref-reilly_32-1" class="reference"><a href="#cite_note-reilly-32">[32]</a></sup> O'Neal's Olympic teammates rode him hard over the poll.<sup id="cite_ref-wojnarowski_31-2" class="reference"><a href="#cite_note-wojnarowski-31">[31]</a></sup><sup id="cite_ref-blinebury_33-1" class="reference"><a href="#cite_note-blinebury-33">[33]</a></sup> He was also upset that the Orlando media implied O'Neal was not a good role model for having a child with his longtime girlfriend with no immediate plans to marry.<sup id="cite_ref-macmullan_19960701_30-2" class="reference"><a href="#cite_note-macmullan_19960701-30">[30]</a></sup> O'Neal compared his lack of privacy in Orlando to "feeling like a big fish in a dried-up pond."<sup id="cite_ref-35" class="reference"><a href="#cite_note-35">[35]</a></sup> O'Neal also learned that Hardaway considered himself the leader of the Magic and did not want O'Neal making more money than him.<sup id="cite_ref-36" class="reference"><a href="#cite_note-36">[36]</a></sup></p>
<p>On the team's first full day at the Olympics in Atlanta, the media announced that O'Neal would join the <a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers">Los Angeles Lakers</a> on a seven-year, $121&#160;million contract.<sup id="cite_ref-37" class="reference"><a href="#cite_note-37">[37]</a></sup><sup id="cite_ref-38" class="reference"><a href="#cite_note-38">[38]</a></sup> He insisted he did not choose Los Angeles for the money. "I'm tired of hearing about money, money, money, money, money", O'Neal said after the signing. "I just want to play the game, drink <a href="/wiki/Pepsi" title="Pepsi">Pepsi</a>, wear <a href="/wiki/Reebok" title="Reebok">Reebok</a>," he added, referring to a couple of his product endorsements.<sup id="cite_ref-39" class="reference"><a href="#cite_note-39">[39]</a></sup><sup id="cite_ref-40" class="reference"><a href="#cite_note-40">[40]</a></sup> The Lakers won 56 games during the <a href="/wiki/1996%E2%80%9397_NBA_season" title="1996–97 NBA season">1996–97 season</a>. O'Neal averaged 26.2 points and 12.5 rebounds in his first season with Los Angeles; however, he again missed over 30 games due to injury. The Lakers made the playoffs, but were eliminated in the second round by the <a href="/wiki/Utah_Jazz" title="Utah Jazz">Utah Jazz</a> in five games.<sup id="cite_ref-41" class="reference"><a href="#cite_note-41">[41]</a></sup> In his first playoff game for the Lakers, O'Neal scored 46 points against the <a href="/wiki/1996%E2%80%9397_Portland_Trail_Blazers_season" title="1996–97 Portland Trail Blazers season">Portland Trail Blazers</a>, the most for the Lakers in a playoff game since <a href="/wiki/Jerry_West" title="Jerry West">Jerry West</a> had 53 in <a href="/wiki/1968%E2%80%9369_Los_Angeles_Lakers_season" title="1968–69 Los Angeles Lakers season">1969</a>. On December 17, 1996, O'Neal shoved <a href="/wiki/Dennis_Rodman" title="Dennis Rodman">Dennis Rodman</a> of the <a href="/wiki/Chicago_Bulls" title="Chicago Bulls">Chicago Bulls</a>; Rodman's teammates <a href="/wiki/Scottie_Pippen" title="Scottie Pippen">Scottie Pippen</a> and <a href="/wiki/Michael_Jordan" title="Michael Jordan">Michael Jordan</a> restrained Rodman and prevented further conflict. The <i><a href="/wiki/Los_Angeles_Daily_News" title="Los Angeles Daily News">Los Angeles Daily News</a></i> reported that O'Neal was willing to be suspended for fighting Rodman, and O'Neal said: "It's one thing to talk tough and one thing to be tough."<sup id="cite_ref-42" class="reference"><a href="#cite_note-42">[42]</a></sup></p>
<p><a href="/wiki/1997%E2%80%9398_NBA_season" title="1997–98 NBA season">The following season</a>, O'Neal averaged 28.3 points and 11.4 rebounds. He led the league with a 58.4 field goal percentage, the first of five consecutive seasons in which he did so. The Lakers finished the season 61–21, first in the <a href="/wiki/Pacific_Division_(NBA)" title="Pacific Division (NBA)">Pacific Division</a>, and were the second seed in the western conference during the <a href="/wiki/1998_NBA_Playoffs" title="1998 NBA Playoffs">1998 NBA Playoffs</a>. After defeating the <a href="/wiki/Portland_Trail_Blazers" title="Portland Trail Blazers">Portland Trail Blazers</a> and <a href="/wiki/Seattle_SuperSonics" title="Seattle SuperSonics">Seattle SuperSonics</a> in the first two rounds, the Lakers again fell to the Jazz, this time in a 4–0 sweep.<sup id="cite_ref-43" class="reference"><a href="#cite_note-43">[43]</a></sup></p>
<p>With the tandem of O'Neal and teenage superstar <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Kobe Bryant</a>, expectations for the Lakers increased. However, personnel changes were a source of instability during the <a href="/wiki/1998%E2%80%9399_NBA_season" title="1998–99 NBA season">1998–99 season</a>. Long-time Laker point guard <a href="/wiki/Nick_Van_Exel" title="Nick Van Exel">Nick Van Exel</a> was traded to the <a href="/wiki/Denver_Nuggets" title="Denver Nuggets">Denver Nuggets</a>; his former backcourt partner <a href="/wiki/Eddie_Jones_(basketball)" title="Eddie Jones (basketball)">Eddie Jones</a> was packaged with back-up center <a href="/wiki/Elden_Campbell" title="Elden Campbell">Elden Campbell</a> for <a href="/wiki/Glen_Rice" title="Glen Rice">Glen Rice</a> to satisfy a demand by O'Neal for a shooter. Coach <a href="/wiki/Del_Harris" title="Del Harris">Del Harris</a> was fired, and former Lakers forward <a href="/wiki/Kurt_Rambis" title="Kurt Rambis">Kurt Rambis</a> finished the season as head coach. The Lakers finished with a 31–19 record during the <a href="/wiki/1998%E2%80%9399_NBA_lockout" title="1998–99 NBA lockout">lockout-shortened season</a>. Although they made <a href="/wiki/1999_NBA_Playoffs" title="1999 NBA Playoffs">the playoffs</a>, they were swept by the <a href="/wiki/San_Antonio_Spurs" title="San Antonio Spurs">San Antonio Spurs</a>, led by <a href="/wiki/Tim_Duncan" title="Tim Duncan">Tim Duncan</a> and <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">David Robinson</a> in the second round of the Western Conference playoffs. The Spurs would go on to win their first NBA title in 1999.</p>
<h4><span class="mw-headline" id="Championship_seasons">Championship seasons</span></h4>
<p>In 1999, prior to the 1999–2000 season, the Lakers hired <a href="/wiki/Phil_Jackson" title="Phil Jackson">Phil Jackson</a> as head coach, and the team's fortunes soon changed. Jackson immediately challenged O'Neal, telling him "the [NBA's] MVP trophy should be named after him when he retired."<sup id="cite_ref-44" class="reference"><a href="#cite_note-44">[44]</a></sup> Using Jackson's <a href="/wiki/Triangle_offense" title="Triangle offense">triangle offense</a>, O'Neal and Bryant enjoyed tremendous success, leading the Lakers to three consecutive titles (2000, 2001, and 2002). O'Neal was named <a href="/wiki/Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award">MVP of the NBA Finals</a> all three times and had the highest scoring average for a center in NBA Finals history.<sup id="cite_ref-45" class="reference"><a href="#cite_note-45">[45]</a></sup> In the November 10, 1999, game against the <a href="/wiki/Houston_Rockets" title="Houston Rockets">Houston Rockets</a>, O'Neal and <a href="/wiki/Charles_Barkley" title="Charles Barkley">Charles Barkley</a> were ejected. After O'Neal blocked a layup by Barkley, O'Neal shoved Barkley, who then threw the ball at O'Neal.<sup id="cite_ref-46" class="reference"><a href="#cite_note-46">[46]</a></sup></p>
<p>O'Neal was also voted the <a href="/wiki/1999%E2%80%932000_NBA_season" title="1999–2000 NBA season">1999–2000 regular season</a> <a href="/wiki/NBA_Most_Valuable_Player_Award" title="NBA Most Valuable Player Award">Most Valuable Player</a>, one vote short of becoming the first unanimous MVP in NBA history. <a href="/wiki/Fred_Hickman" title="Fred Hickman">Fred Hickman</a>, then of <a href="/wiki/CNN" title="CNN">CNN</a>, instead chose <a href="/wiki/Allen_Iverson" title="Allen Iverson">Allen Iverson</a>, then of the <a href="/wiki/Philadelphia_76ers" title="Philadelphia 76ers">Philadelphia 76ers</a> who would go on to win MVP the next season. O'Neal also won the scoring title while finishing second in rebounds and third in blocked shots. Jackson's influence resulted in a newfound commitment by O'Neal to defense, resulting in his first <a href="/wiki/NBA_All-Defensive_Team" title="NBA All-Defensive Team">All-Defensive Team</a> selection (second-team) in 2000.<sup id="cite_ref-47" class="reference"><a href="#cite_note-47">[47]</a></sup></p>
<p>In the <a href="/wiki/2001_NBA_Finals" title="2001 NBA Finals">2001 NBA Finals</a> against the 76ers, O'Neal fouled out in Game 3 backing over <a href="/wiki/Dikembe_Mutombo" title="Dikembe Mutombo">Dikembe Mutombo</a>, the 2000–2001 <a href="/wiki/NBA_Defensive_Player_of_the_Year_Award" title="NBA Defensive Player of the Year Award">Defensive Player of the Year</a>. "I didn't think the best defensive player in the game would be <a href="/wiki/Flop_(basketball)" title="Flop (basketball)">flopping</a> like that. It's a shame that the referees buy into that", O'Neal said. "I wish he'd stand up and play me like a man instead of flopping and crying every time I back him down.<sup id="cite_ref-48" class="reference"><a href="#cite_note-48">[48]</a></sup></p>
<p>A month before the <a href="/wiki/2001%E2%80%9302_NBA_season" title="2001–02 NBA season">2001–02&#160;season's</a> training camp, O'Neal had corrective surgery for a claw toe deformity in the smallest toe of his left foot.<sup id="cite_ref-brown_49-0" class="reference"><a href="#cite_note-brown-49">[49]</a></sup> He opted against a more involved surgery to return quicker.<sup id="cite_ref-50" class="reference"><a href="#cite_note-50">[50]</a></sup> He was ready for the start of the 2001–02 regular season, but the toe frequently bothered him.<sup id="cite_ref-brown_49-1" class="reference"><a href="#cite_note-brown-49">[49]</a></sup> In January 2002, he was involved in a spectacular on-court brawl in a game against the Chicago Bulls. He punched center <a href="/wiki/Brad_Miller_(basketball)" title="Brad Miller (basketball)">Brad Miller</a> after an intentional foul to prevent a basket, resulting in a melee with Miller, forward <a href="/wiki/Charles_Oakley" title="Charles Oakley">Charles Oakley</a>, and several other players.<sup id="cite_ref-51" class="reference"><a href="#cite_note-51">[51]</a></sup> O'Neal was suspended for three games without pay and fined $15,000.<sup id="cite_ref-52" class="reference"><a href="#cite_note-52">[52]</a></sup> For the season, O'Neal averaged 27.2 points and 10.7 rebounds, excellent statistics but below his career average; he was less of a defensive force during the season.<sup id="cite_ref-brown_49-2" class="reference"><a href="#cite_note-brown-49">[49]</a></sup></p>
<div class="thumb tright">
<div class="thumbinner" style="width:222px;"><a href="/wiki/File:Shaq_at_the_white_house.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/41/Shaq_at_the_white_house.jpg/220px-Shaq_at_the_white_house.jpg" width="220" height="159" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/41/Shaq_at_the_white_house.jpg/330px-Shaq_at_the_white_house.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/41/Shaq_at_the_white_house.jpg/440px-Shaq_at_the_white_house.jpg 2x" data-file-width="600" data-file-height="433" /></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Shaq_at_the_white_house.jpg" class="internal" title="Enlarge"></a></div>
O'Neal at the <a href="/wiki/White_House" title="White House">White House</a> greeting US President <a href="/wiki/George_W._Bush" title="George W. Bush">George W. Bush</a> with his fellow Lakers</div>
</div>
</div>
<p>Matched up against the <a href="/wiki/Sacramento_Kings" title="Sacramento Kings">Sacramento Kings</a> in the <a href="/wiki/2002_NBA_Playoffs#Conference_Finals" title="2002 NBA Playoffs">2002 Western Conference finals</a>, O'Neal said, "There is only one way to beat us. It starts with c and ends with t." O'Neal meant "cheat" in reference to the alleged flopping of Kings' center <a href="/wiki/Vlade_Divac" title="Vlade Divac">Vlade Divac</a>. O'Neal referred to Divac as "she", and said he would never exaggerate contact to draw a foul. "I'm a guy with no talent who has gotten this way with hard work."<sup id="cite_ref-53" class="reference"><a href="#cite_note-53">[53]</a></sup> After the 2001–2002 season, O'Neal told friends that he did not want another season of limping and being in virtually constant pain from his big right toe. His trademark mobility and explosion had been often absent. The corrective options ranged from <a href="/wiki/Reconstructive_surgery" title="Reconstructive surgery">reconstructive surgery</a> on the toe to rehabilitation exercises with more shoe inserts and <a href="/wiki/Inflammation" title="Inflammation">anti-inflammation</a> medication. O'Neal was already wary of the long-term damage his frequent consumption of these medications might have. He did not want to rush a decision with his career potentially at risk.<sup id="cite_ref-brown_49-3" class="reference"><a href="#cite_note-brown-49">[49]</a></sup></p>
<h4><span class="mw-headline" id="Toe_surgery_to_departure">Toe surgery to departure</span></h4>
<p>O'Neal missed the first 12 games of the <a href="/wiki/2002%E2%80%9303_NBA_season" title="2002–03 NBA season">2002–2003 season</a> recovering from toe surgery.<sup id="cite_ref-nbabio_54-0" class="reference"><a href="#cite_note-nbabio-54">[54]</a></sup> He was sidelined with <a href="/wiki/Hallux_rigidus" title="Hallux rigidus">hallux rigidus</a>, a degenerative arthritis in his toe.<sup id="cite_ref-oneal2011_p155_55-0" class="reference"><a href="#cite_note-oneal2011_p155-55">[55]</a></sup> He waited the whole summer until just before training camp for the surgery and explained, "I got hurt on company time, so I’ll heal on company time."<sup id="cite_ref-ventre_56-0" class="reference"><a href="#cite_note-ventre-56">[56]</a></sup> O'Neal debated whether to have a more invasive surgery that would have kept him out an additional three months, but he opted against the more involved procedure.<sup id="cite_ref-oneal2011_p155_55-1" class="reference"><a href="#cite_note-oneal2011_p155-55">[55]</a></sup> The Lakers started the season with a record of 11–19.<sup id="cite_ref-57" class="reference"><a href="#cite_note-57">[57]</a></sup> At the end of the season, the Lakers had fallen to the fifth seed and failed to reach the Finals in 2003.</p>
<p>For the <a href="/wiki/2003%E2%80%9304_Los_Angeles_Lakers_season" title="2003–04 Los Angeles Lakers season">2003-04 season</a>, the team made a concerted off-season effort to improve its roster. They sought the free-agent services of forward <a href="/wiki/Karl_Malone" title="Karl Malone">Karl Malone</a> and aging guard <a href="/wiki/Gary_Payton" title="Gary Payton">Gary Payton</a>, but due to <a href="/wiki/NBA_Salary_Cap" class="mw-redirect" title="NBA Salary Cap">salary cap</a> restrictions, could not offer either one nearly as much money as they could have made with some other teams. O'Neal assisted in the recruitment efforts and personally persuaded both men to join the squad. Ultimately, both signed, each forgoing larger salaries in favor of a chance to win an NBA championship, which neither had accomplished in his career (and which neither would achieve with the Lakers). At the beginning of the <a href="/wiki/2003%E2%80%9304_NBA_season" title="2003–04 NBA season">2003–04 season</a>, O'Neal wanted a contract extension with a pay raise on his remaining three years for $30&#160;million. The Lakers had hoped O'Neal would take less money due to his age, physical conditioning, and games missed due to injuries. During a preseason game, O'Neal had yelled at Lakers owner <a href="/wiki/Jerry_Buss" title="Jerry Buss">Jerry Buss</a>, "Pay me."<sup id="cite_ref-58" class="reference"><a href="#cite_note-58">[58]</a></sup> There had been increasing <a href="/wiki/Shaq%E2%80%93Kobe_feud" title="Shaq–Kobe feud">tension between O'Neal and Bryant</a>. The feud climaxed during training camp prior to the 2003–2004 season when Bryant, in an interview with ESPN journalist <a href="/wiki/Jim_Gray_(sportscaster)" title="Jim Gray (sportscaster)">Jim Gray</a>, criticized O'Neal for being out of shape, a poor leader, and putting his salary demands over the best interest of the Lakers.<sup id="cite_ref-59" class="reference"><a href="#cite_note-59">[59]</a></sup></p>
<p>The Lakers made the playoffs in 2004 and lost to the <a href="/wiki/Detroit_Pistons" title="Detroit Pistons">Detroit Pistons</a> in the <a href="/wiki/2004_NBA_Finals" title="2004 NBA Finals">2004 NBA Finals</a>. Lakers assistant coach <a href="/wiki/Tex_Winter" title="Tex Winter">Tex Winter</a> said, "Shaq defeated himself against Detroit. He played way too passively. He had one big game ... He's always interested in being a scorer, but he hasn't had nearly enough concentration on defense and rebounding."<sup id="cite_ref-60" class="reference"><a href="#cite_note-60">[60]</a></sup> After the series, O'Neal was angered by comments made by Lakers general manager <a href="/wiki/Mitch_Kupchak" title="Mitch Kupchak">Mitch Kupchak</a> regarding O'Neal's future with the club, as well as by the departure of Lakers coach <a href="/wiki/Phil_Jackson" title="Phil Jackson">Phil Jackson</a> at the request of Buss. O'Neal made comments indicating that he felt the team's decisions were centered on a desire to appease Bryant to the exclusion of all other concerns, and O'Neal promptly demanded a trade. Kupchak wanted the <a href="/wiki/Dallas_Mavericks" title="Dallas Mavericks">Dallas Mavericks</a>' <a href="/wiki/Dirk_Nowitzki" title="Dirk Nowitzki">Dirk Nowitzki</a> in return but Mavericks owner <a href="/wiki/Mark_Cuban" title="Mark Cuban">Mark Cuban</a> refused to let his 7-footer go. However, Miami showed interest, and eventually the two clubs agreed.<sup id="cite_ref-61" class="reference"><a href="#cite_note-61">[61]</a></sup> Winter said, "[O'Neal] left because he couldn't get what he wanted—a huge pay raise. There was no way ownership could give him what he wanted. Shaq's demands held the franchise hostage, and the way he went about it didn't please the owner too much."<sup id="cite_ref-62" class="reference"><a href="#cite_note-62">[62]</a></sup></p>
<h3><span id="Miami_Heat_.282004.E2.80.932008.29"></span><span class="mw-headline" id="Miami_Heat_(2004–2008)">Miami Heat (2004–2008)</span></h3>
<div class="thumb tleft">
<div class="thumbinner" style="width:172px;"><a href="/wiki/File:Shaquille_O%27Neal1.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Shaquille_O%27Neal1.jpg/170px-Shaquille_O%27Neal1.jpg" width="170" height="222" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Shaquille_O%27Neal1.jpg/255px-Shaquille_O%27Neal1.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/67/Shaquille_O%27Neal1.jpg/340px-Shaquille_O%27Neal1.jpg 2x" data-file-width="1863" data-file-height="2433" /></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Shaquille_O%27Neal1.jpg" class="internal" title="Enlarge"></a></div>
O'Neal with Miami in 2007</div>
</div>
</div>
<p>On July 14, 2004, O'Neal was traded to the <a href="/wiki/Miami_Heat" title="Miami Heat">Miami Heat</a> for <a href="/wiki/Caron_Butler" title="Caron Butler">Caron Butler</a>, <a href="/wiki/Lamar_Odom" title="Lamar Odom">Lamar Odom</a>, <a href="/wiki/Brian_Grant" title="Brian Grant">Brian Grant</a>, and a future first-round <a href="/wiki/Draft_(sports)" title="Draft (sports)">draft</a> choice (who would turn into <a href="/wiki/Jordan_Farmar" title="Jordan Farmar">Jordan Farmar</a> in the <a href="/wiki/2006_NBA_draft" title="2006 NBA draft">2006 draft</a>). O'Neal reverted from (his Lakers jersey) number 34 to number 32, which he had worn while playing for the Magic. Upon signing with the Heat, O'Neal promised the fans that he would bring a championship to Miami. He claimed one of the main reasons for wanting to be traded to Miami was because of their up-and-coming star <a href="/wiki/Dwyane_Wade" title="Dwyane Wade">Dwyane Wade</a>, to whom he gave the nickname "Flash". With O'Neal on board, the new-look Heat surpassed expectations, claiming the best record in the Eastern Conference in 2004–05 with 59 wins. He played in 73 games, his most since 2001 season, averaged 22.9 points a game along with 10.4 rebounds and 2.3 blocks. Shaq also made his 12th consecutive All-Star Team, made the All-NBA 1st Team, and won the Eastern Conference player of the Month award for his performance in March. O'Neal also narrowly lost the <a href="/wiki/2004%E2%80%9305_NBA_season" title="2004–05 NBA season">2004–05</a> <a href="/wiki/NBA_Most_Valuable_Player_Award" title="NBA Most Valuable Player Award">MVP Award</a> to <a href="/wiki/Phoenix_Suns" title="Phoenix Suns">Phoenix Suns</a> guard <a href="/wiki/Steve_Nash" title="Steve Nash">Steve Nash</a> in one of the closest votes in NBA history.<sup id="cite_ref-mvp_vote_2005_63-0" class="reference"><a href="#cite_note-mvp_vote_2005-63">[63]</a></sup></p>
<p>Despite being hobbled by a deep thigh bruise, O'Neal led the Heat to the <a href="/wiki/2005_NBA_Playoffs#Conference_finals" title="2005 NBA Playoffs">Eastern Conference Finals</a> and a Game 7 against the defending champion <a href="/wiki/Detroit_Pistons" title="Detroit Pistons">Detroit Pistons</a>, losing by a narrow margin. Afterwards, O'Neal and others criticized Heat head coach <a href="/wiki/Stan_Van_Gundy" title="Stan Van Gundy">Stan Van Gundy</a> for not calling enough plays for O'Neal.<sup id="cite_ref-64" class="reference"><a href="#cite_note-64">[64]</a></sup> In August 2005, O'Neal signed a 5-year-extension with the Heat for $100&#160;million. Supporters applauded O'Neal's willingness to take what amounted to a pay cut and the Heat's decision to secure O'Neal's services for the long term. They contended that O'Neal was worth more than $20&#160;million per year, particularly given that lesser players earned almost the same amount.<sup id="cite_ref-65" class="reference"><a href="#cite_note-65">[65]</a></sup></p>
<p>In the second game of the <a href="/wiki/2005%E2%80%9306_NBA_season" title="2005–06 NBA season">2005–06 season</a>, O'Neal injured his right ankle and subsequently missed the following 18 games. Upon O'Neal's return, Van Gundy resigned, citing family reasons, and <a href="/wiki/Pat_Riley" title="Pat Riley">Pat Riley</a> assumed head coach responsibilities.<sup id="cite_ref-ventre_56-1" class="reference"><a href="#cite_note-ventre-56">[56]</a></sup> O'Neal later referred to Van Gundy as a "frontrunner" and a "master of panic."<sup id="cite_ref-66" class="reference"><a href="#cite_note-66">[66]</a></sup> Many critics stated that Heat coach Riley correctly managed O'Neal during the rest of the season, limiting his minutes to a career low. Riley felt doing so would allow O'Neal to be healthier and fresher come playoff time. Although O'Neal averaged career lows (or near-lows) in points, rebounds, and blocks, he said in an interview "Stats don't matter. I care about winning, not stats. If I score 0 points and we win I'm happy. If I score 50, 60 points, break the records, and we lose, I'm pissed off. 'Cause I knew I did something wrong. I'll have a hell of a season if I win the championship and average 20 points a game."<sup id="cite_ref-67" class="reference"><a href="#cite_note-67">[67]</a></sup> During the 2005–06 season, the Heat recorded only a .500 record without O'Neal in the line-up.<sup id="cite_ref-68" class="reference"><a href="#cite_note-68">[68]</a></sup></p>
<p>On April 11, 2006, O'Neal recorded his second career <a href="/wiki/Triple-double" class="mw-redirect" title="Triple-double">triple-double</a> against the <a href="/wiki/Toronto_Raptors" title="Toronto Raptors">Toronto Raptors</a> with 15 points, 11 rebounds and a career high 10 assists.<sup id="cite_ref-HotHoops_69-0" class="reference"><a href="#cite_note-HotHoops-69">[69]</a></sup> O'Neal finished the 2005–06 season as the league leader in field goal percentage.<sup id="cite_ref-HotHoops_69-1" class="reference"><a href="#cite_note-HotHoops-69">[69]</a></sup></p>
<h4><span class="mw-headline" id="Fourth_championship">Fourth championship</span></h4>
<div class="thumb tright">
<div class="thumbinner" style="width:222px;"><a href="/wiki/File:Heatwhitehouse.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Heatwhitehouse.jpg/220px-Heatwhitehouse.jpg" width="220" height="146" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Heatwhitehouse.jpg/330px-Heatwhitehouse.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Heatwhitehouse.jpg/440px-Heatwhitehouse.jpg 2x" data-file-width="514" data-file-height="342" /></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Heatwhitehouse.jpg" class="internal" title="Enlarge"></a></div>
O'Neal holding the championship ball when the NBA Champion Heat visited the White House</div>
</div>
</div>
<p>In the <a href="/wiki/2006_NBA_Playoffs" title="2006 NBA Playoffs">2006 NBA Playoffs</a>, the Heat first faced the younger <a href="/wiki/Chicago_Bulls" title="Chicago Bulls">Chicago Bulls</a>, and O'Neal delivered a dominating 27 point, 16 rebound and 5 blocks performance in game 1 followed by a 22-point effort in game 2 to help Miami take a 2-0 lead in the series. Chicago would respond with two dominating performances at home to tie the series, but Miami would respond right back with a victory at home in game 5. Miami returned to Chicago and closed out the series in the 6th game, highlighted by another dominating performance by O'Neal who finished with 30 points and 20 rebounds. Miami advanced to face New Jersey, who won a surprising game 1 victory before the Heat won four straight to assure a rematch with Detroit. The Pistons had no answer for Wade throughout the series, while O'Neal delivered 21 points and 12 rebounds in game 3 followed by 27 points and 12 boards in game 4 to help Miami take a 3-2 series lead. The Pistons would win game 5 in Detroit, and Wade would once again get injured, but the Heat held on to win game 6 with O'Neal scoring 28 points with 16 rebounds and 5 blocks to help Miami reach their first ever NBA Finals.<sup id="cite_ref-Heat_Playoffs_Summary_70-0" class="reference"><a href="#cite_note-Heat_Playoffs_Summary-70">[70]</a></sup></p>
<p>In the Finals, the Heat were underdogs against the <a href="/wiki/Dallas_Mavericks" title="Dallas Mavericks">Dallas Mavericks</a> led by <a href="/wiki/Dirk_Nowitzki" title="Dirk Nowitzki">Dirk Nowitzki</a>, and the Mavericks won the first two games at home in dominating fashion. The Heat led by Wade and a balanced effort by O'Neal, <a href="/wiki/Antoine_Walker" title="Antoine Walker">Antoine Walker</a> and <a href="/wiki/Jason_Williams_(basketball,_born_1975)" title="Jason Williams (basketball, born 1975)">Jason Williams</a> would go on to win all three of the next games at home, before closing out the series in Dallas to deliver the first NBA title for the franchise and O'Neal's fourth title. With Wade carrying the offensive load, O'Neal did not need to have a dominating series, and finished with an average of 13.7 points and 10.2 rebounds for the series.<sup id="cite_ref-Heat_Playoffs_Summary_70-1" class="reference"><a href="#cite_note-Heat_Playoffs_Summary-70">[70]</a></sup></p>
<h4><span id="Surgery_and_Wade.27s_injury"></span><span class="mw-headline" id="Surgery_and_Wade's_injury">Surgery and Wade's injury</span></h4>
<p>In the <a href="/wiki/2006%E2%80%9307_NBA_season" title="2006–07 NBA season">2006–07&#160;season</a>, O'Neal missed 35 games after an injury to his left knee in November required surgery.<sup id="cite_ref-71" class="reference"><a href="#cite_note-71">[71]</a></sup><sup id="cite_ref-72" class="reference"><a href="#cite_note-72">[72]</a></sup> After one of those missed games, a Christmas Day match-up against the Lakers, he ripped Jackson, who O'Neal had once called a second father, referring to his former coach as "<a href="/wiki/Benedict_Arnold" title="Benedict Arnold">Benedict Arnold</a>". Jackson had previously said, "The only person I've ever [coached] that hasn't been a worker ... is probably Shaq."<sup id="cite_ref-73" class="reference"><a href="#cite_note-73">[73]</a></sup> The Heat struggled during O'Neal's absence,<sup id="cite_ref-HeatHistory_74-0" class="reference"><a href="#cite_note-HeatHistory-74">[74]</a></sup> but with his return won seven of their next eight games. Bad luck still haunted the squad, however, as Wade dislocated his left shoulder, leaving O'Neal as the focus of the team.<sup id="cite_ref-HeatHistory_74-1" class="reference"><a href="#cite_note-HeatHistory-74">[74]</a></sup> Critics doubted that O'Neal, now in his mid-thirties, could carry the team into the playoffs.<sup id="cite_ref-75" class="reference"><a href="#cite_note-75">[75]</a></sup> The Heat went on a winning streak that kept them in the race for a playoff spot, which they finally secured against the <a href="/wiki/Cleveland_Cavaliers" title="Cleveland Cavaliers">Cleveland Cavaliers</a> on April 5.<sup id="cite_ref-HeatHistory_74-2" class="reference"><a href="#cite_note-HeatHistory-74">[74]</a></sup></p>
<p>In a rematch of the year before, the Heat faced the Bulls in the first round of the 2006–07 NBA playoffs. The Heat struggled against the Bulls and although O'Neal put up reasonable numbers, he was not able to dominate the series. The Bulls swept the Heat, the first time in 50&#160;years a defending NBA champion was swept in the opening round.<sup id="cite_ref-76" class="reference"><a href="#cite_note-76">[76]</a></sup> It was the first time in 13 years that O'Neal did not advance into the second round. In the 2006–07 season O'Neal reached 25,000 career points, becoming the 14th player in NBA history to accomplish that milestone. However, it was the first season in O'Neal's career that his scoring average dropped below 20&#160;points per game.<sup id="cite_ref-brstats_7-1" class="reference"><a href="#cite_note-brstats-7">[7]</a></sup></p>
<h4><span id="2007.E2.80.932008_season"></span><span class="mw-headline" id="2007–2008_season">2007–2008 season</span></h4>
<p>O'Neal experienced a rough start for the 2007–08 season, averaging career lows in points, rebounds, and blocks. His role in the offense diminished, as he attempted only 10 field goals per game, versus his career average of 17. In addition, O'Neal was plagued by fouls, and during one stretch fouled out of five consecutive games. O'Neal's streak of 14 straight <a href="/wiki/NBA_All-Star_Game" title="NBA All-Star Game">All-Star</a> appearances ended that season.<sup id="cite_ref-brstats_7-2" class="reference"><a href="#cite_note-brstats-7">[7]</a></sup> O'Neal again missed games due to injuries, and the Heat had a 15–game losing streak.<sup id="cite_ref-77" class="reference"><a href="#cite_note-77">[77]</a></sup> According to O'Neal, Riley thought he was faking the injury.<sup id="cite_ref-78" class="reference"><a href="#cite_note-78">[78]</a></sup> During a practice in February 2008, O'Neal got into an altercation with Riley over the coach ordering a tardy <a href="/wiki/Jason_Williams_(basketball,_born_1975)" title="Jason Williams (basketball, born 1975)">Jason Williams</a> to leave practice. The two argued face-to-face, with O'Neal poking Riley in the chest and Riley slapping his finger away. Riley soon after decided to trade O'Neal.<sup id="cite_ref-79" class="reference"><a href="#cite_note-79">[79]</a></sup> O'Neal said his relationship with Wade was not "all that good" by the time he left Miami, but he did not express disappointment at Wade for failing to stand up for him.<sup id="cite_ref-80" class="reference"><a href="#cite_note-80">[80]</a></sup></p>
<p>O'Neal played 33 games for the Miami Heat in the 2007–08 season prior to being traded to the Phoenix Suns. O'Neal started all 33 games and averaged 14.2 points per game. Following the trade to Phoenix, O'Neal averaged 12.9 ppg while starting all 28 games with the Suns.</p>
<h3><span id="Phoenix_Suns_.282008.E2.80.932009.29"></span><span class="mw-headline" id="Phoenix_Suns_(2008–2009)">Phoenix Suns (2008–2009)</span></h3>
<p>The <a href="/wiki/Phoenix_Suns" title="Phoenix Suns">Phoenix Suns</a> acquired O'Neal in February 2008 from the league-worst Miami Heat, who had a record at the time of the trade of 9-37, in exchange for <a href="/wiki/Shawn_Marion" title="Shawn Marion">Shawn Marion</a> and <a href="/wiki/Marcus_Banks" title="Marcus Banks">Marcus Banks</a>.<sup id="cite_ref-81" class="reference"><a href="#cite_note-81">[81]</a></sup> O'Neal made his Suns debut on February 20, 2008, against his former Lakers team, scoring 15 points and grabbing 9 rebounds in the process. The Lakers won, 130–124. O'Neal was upbeat in a post-game press conference, stating: "I will take the blame for this loss because I wasn't in tune with the guys [...] But give me four or five days to really get in tune and I'll get it."<sup id="cite_ref-82" class="reference"><a href="#cite_note-82">[82]</a></sup></p>
<p>In 28 regular-season games, O'Neal averaged 12.9 points and 10.6 rebounds,<sup id="cite_ref-Shaquille_O'Neal_stats_83-0" class="reference"><a href="#cite_note-Shaquille_O'Neal_stats-83">[83]</a></sup> good enough to make the <a href="/wiki/2008_NBA_Playoffs" title="2008 NBA Playoffs">playoffs</a>. One of the reasons for the trade was to limit <a href="/wiki/Tim_Duncan" title="Tim Duncan">Tim Duncan</a> in the event of a postseason matchup between the Suns and the <a href="/wiki/San_Antonio_Spurs" title="San Antonio Spurs">San Antonio Spurs</a>, especially after the Suns' six-game elimination by the Spurs in the <a href="/wiki/2007_NBA_Playoffs" title="2007 NBA Playoffs">2007 NBA Playoffs</a>.<sup id="cite_ref-84" class="reference"><a href="#cite_note-84">[84]</a></sup> O'Neal and the Phoenix Suns did face the Spurs in the first round of the playoffs, but they were once again eliminated, in five games. O'Neal averaged 15.2 points, 9.2 rebounds and 1.0 assists per game.<sup id="cite_ref-Shaquille_O'Neal_stats_83-1" class="reference"><a href="#cite_note-Shaquille_O'Neal_stats-83">[83]</a></sup></p>
<p>O'Neal preferred his new situation with the Suns over the Heat. "I love playing for this coach and I love playing with these guys", O'Neal said. "We have professionals who know what to do. No one is asking me to play with [his former Heat teammates] <a href="/wiki/Chris_Quinn" title="Chris Quinn">Chris Quinn</a> or <a href="/wiki/Ricky_Davis" title="Ricky Davis">Ricky Davis</a>. I'm actually on a team again." Riley felt O'Neal was wrong for maligning his former teammates. O'Neal responded with an expletive toward Riley, whom he often referred to as the "great Pat Riley" while playing for the Heat.<sup id="cite_ref-85" class="reference"><a href="#cite_note-85">[85]</a></sup> O'Neal credited the Suns training staff with prolonging his career.<sup id="cite_ref-86" class="reference"><a href="#cite_note-86">[86]</a></sup> They connected his arthritic toe, which would not bend, to the alteration of his jump that consequently was straining his leg. The trainers had him concentrate on building his <a href="/wiki/Core_strength" class="mw-redirect" title="Core strength">core strength</a>, flexibility, and balance.<sup id="cite_ref-87" class="reference"><a href="#cite_note-87">[87]</a></sup></p>
<p>The 2008–09 season improved for O'Neal, who averaged 18 pts, 9 rebounds, and 1.6 blocks through the first half (41 games) of the season, leading the Suns to a 23–18 record and 2nd place in their division.<sup id="cite_ref-yahoo_88-0" class="reference"><a href="#cite_note-yahoo-88">[88]</a></sup> He returned to the All-Star Game in 2009 and emerged as co-MVP along with ex-teammate Kobe Bryant.</p>
<div class="thumb tleft">
<div class="thumbinner" style="width:172px;"><a href="/wiki/File:Shaq_and_Nash.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shaq_and_Nash.jpg/170px-Shaq_and_Nash.jpg" width="170" height="235" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shaq_and_Nash.jpg/255px-Shaq_and_Nash.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shaq_and_Nash.jpg/340px-Shaq_and_Nash.jpg 2x" data-file-width="1676" data-file-height="2314" /></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Shaq_and_Nash.jpg" class="internal" title="Enlarge"></a></div>
O'Neal with Phoenix teammate <a href="/wiki/Steve_Nash" title="Steve Nash">Steve Nash</a>.</div>
</div>
</div>
<p>On February 27, 2009, O'Neal scored 45 points and grabbed 11 rebounds, his 49th career 40-point game, beating the <a href="/wiki/Toronto_Raptors" title="Toronto Raptors">Toronto Raptors</a> 133–113.</p>
<p>In a matchup against Orlando on March 3, 2009, O'Neal was outscored by Magic center <a href="/wiki/Dwight_Howard" title="Dwight Howard">Dwight Howard</a>, 21–19. "I'm really too old to be trying to outscore 18-year-olds", O'Neal said, referring to the then 23-year-old Howard. "It's not really my role anymore." O'Neal was double-teamed most of the night. "I like to play people one-on-one. My whole career I had to play people one-on-one. Never once had to double or ask for a double. But it's cool", said O'Neal. During the game, O'Neal flopped against Howard. Magic coach <a href="/wiki/Stan_Van_Gundy" title="Stan Van Gundy">Stan Van Gundy</a>, who had coached O'Neal with the Heat, was "very disappointed cause [O'Neal] knows what it's like. Let's stand up and play like men, and I think our guy did that tonight."<sup id="cite_ref-89" class="reference"><a href="#cite_note-89">[89]</a></sup> O'Neal responded, "Flopping is playing like that your whole career. I was trying to take the charge, trying to get a call. It probably was a flop, but flopping is the wrong use of words. Flopping would describe his coaching."<sup id="cite_ref-90" class="reference"><a href="#cite_note-90">[90]</a></sup> <a href="/wiki/Mark_Madsen" title="Mark Madsen">Mark Madsen</a>, a Lakers teammate of O'Neal's for three years, found it amusing since "everyone in the league tries to flop on Shaq and Shaq never flops back."<sup id="cite_ref-91" class="reference"><a href="#cite_note-91">[91]</a></sup> In a 2006 interview in <i>TIME</i>, O'Neal said if he were NBA commissioner, he would "Make a guy have to beat a guy—not flop and get calls and be nice to the referees and kiss ass."<sup id="cite_ref-92" class="reference"><a href="#cite_note-92">[92]</a></sup></p>
<p>On March 6, O'Neal talked about the upcoming game against the Rockets and <a href="/wiki/Yao_Ming" title="Yao Ming">Yao Ming</a>. "It's not going to be man-on-man, so don’t even try that," says O'Neal with an incredulous laugh. "They’re going to double and triple me like everybody else ... I rarely get to play [Yao] one-on-one ... But when I play him (on defense), it's just going to be me down there. So don’t try to make it a Yao versus Shaq thing, when it's Shaq versus four other guys."<sup id="cite_ref-93" class="reference"><a href="#cite_note-93">[93]</a></sup></p>
<p>The <a href="/wiki/2009_NBA_Playoffs" title="2009 NBA Playoffs">2009 NBA Playoffs</a> was also the first time since O'Neal's rookie season in <a href="/wiki/1992%E2%80%9393_NBA_season" title="1992–93 NBA season">1992–93</a> that he did not participate in the playoffs. He was named as a member of the All-NBA Third Team. The Suns notified O'Neal he might be traded to cut costs.<sup id="cite_ref-94" class="reference"><a href="#cite_note-94">[94]</a></sup></p>
<h3><span id="Cleveland_Cavaliers_.282009.E2.80.932010.29"></span><span class="mw-headline" id="Cleveland_Cavaliers_(2009–2010)">Cleveland Cavaliers (2009–2010)</span></h3>
<p>On June 25, 2009, O'Neal was traded to the <a href="/wiki/Cleveland_Cavaliers" title="Cleveland Cavaliers">Cleveland Cavaliers</a> for <a href="/wiki/Aleksandar_Pavlovi%C4%87" title="Aleksandar Pavlović">Sasha Pavlovic</a>, <a href="/wiki/Ben_Wallace" title="Ben Wallace">Ben Wallace</a>, $500,000, and a 2010-second round draft pick.<sup id="cite_ref-95" class="reference"><a href="#cite_note-95">[95]</a></sup> Upon arriving in Cleveland, O'Neal said, "My motto is very simple: Win a Ring for the King", referring to <a href="/wiki/LeBron_James" title="LeBron James">LeBron James</a>.<sup id="cite_ref-96" class="reference"><a href="#cite_note-96">[96]</a></sup> James was the leader of the team, and O'Neal deferred to him.<sup id="cite_ref-97" class="reference"><a href="#cite_note-97">[97]</a></sup> On February 25, 2010, O'Neal suffered a severe right thumb injury while attempting to go up for a shot against <a href="/wiki/Glen_Davis_(basketball)" title="Glen Davis (basketball)">Glen Davis</a> of the Boston Celtics.<sup id="cite_ref-98" class="reference"><a href="#cite_note-98">[98]</a></sup> He had surgery on the thumb on March 1 and returned to play in time for the <a href="/wiki/2010_NBA_Playoffs" title="2010 NBA Playoffs">first round of the playoffs</a>.<sup id="cite_ref-99" class="reference"><a href="#cite_note-99">[99]</a></sup> After defeating the <a href="/wiki/Chicago_Bulls" title="Chicago Bulls">Chicago Bulls</a> in the first round, the Cavaliers went on to lose to the Boston Celtics in the second round. In September 2016, O'Neal said: "When I was in Cleveland, we were in first place. Big Baby [Glen Davis] breaks my hand and I had to sit out five weeks late in the year. I come back finally in the first round of the playoffs, and we lost to Boston in the second round. I was upset. I know for a fact if I was healthy, we would have gotten it done that year and won a ring."<sup id="cite_ref-100" class="reference"><a href="#cite_note-100">[100]</a></sup> O'Neal averaged career lows in almost every major statistical category during the 2009–10 season, taking on a much less significant role than in previous years.</p>
<h3><span id="Boston_Celtics_.282010.E2.80.932011.29"></span><span class="mw-headline" id="Boston_Celtics_(2010–2011)">Boston Celtics (2010–2011)</span></h3>
<div class="thumb tright">
<div class="thumbinner" style="width:242px;"><a href="/wiki/File:Shaquille_O%27Neal.JPG" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shaquille_O%27Neal.JPG/240px-Shaquille_O%27Neal.JPG" width="240" height="180" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shaquille_O%27Neal.JPG/360px-Shaquille_O%27Neal.JPG 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Shaquille_O%27Neal.JPG/480px-Shaquille_O%27Neal.JPG 2x" data-file-width="1600" data-file-height="1200" /></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Shaquille_O%27Neal.JPG" class="internal" title="Enlarge"></a></div>
O'Neal finished his career with the <a href="/wiki/Boston_Celtics" title="Boston Celtics">Boston Celtics</a></div>
</div>
</div>
<p>Upon hearing Bryant comment that he had more rings than O'Neal, <a href="/wiki/Wycliffe_Grousbeck" class="mw-redirect" title="Wycliffe Grousbeck">Wyc Grousbeck</a>, principal owner of the Celtics, saw an opportunity to acquire O'Neal.<sup id="cite_ref-101" class="reference"><a href="#cite_note-101">[101]</a></sup> Celtics coach <a href="/wiki/Doc_Rivers" title="Doc Rivers">Doc Rivers</a> agreed to the signing on the condition that O'Neal would not receive preferential treatment nor could he cause any locker room problems like in Los Angeles or Miami.<sup id="cite_ref-102" class="reference"><a href="#cite_note-102">[102]</a></sup> On August 4, 2010, the Celtics announced that they had signed O'Neal.<sup id="cite_ref-103" class="reference"><a href="#cite_note-103">[103]</a></sup> The contract was for two years at the veteran minimum salary for a total contract value of $2.8&#160;million.<sup id="cite_ref-104" class="reference"><a href="#cite_note-104">[104]</a></sup> O'Neal wanted the larger <a href="/wiki/Mid-level_exception" class="mw-redirect" title="Mid-level exception">mid-level exception</a> contract, but the Celtics chose instead to give it to <a href="/wiki/Jermaine_O%27Neal" title="Jermaine O'Neal">Jermaine O'Neal</a>.<sup id="cite_ref-105" class="reference"><a href="#cite_note-105">[105]</a></sup> The <a href="/wiki/Atlanta_Hawks" title="Atlanta Hawks">Atlanta Hawks</a> and the Dallas Mavericks also expressed interest but had stalled on O'Neal's salary demands.<sup id="cite_ref-106" class="reference"><a href="#cite_note-106">[106]</a></sup><sup id="cite_ref-107" class="reference"><a href="#cite_note-107">[107]</a></sup> He was introduced by the Celtics on August 10, 2010, and chose the number 36.<sup id="cite_ref-108" class="reference"><a href="#cite_note-108">[108]</a></sup></p>
<p>O'Neal said he didn't "compete with little guys who run around dominating the ball, throwing up 30 shots a night—like D–Wade, Kobe." O'Neal added that he was only competing against Duncan: "If Tim Duncan gets five rings, then that gives some writer the chance to say 'Duncan is the best,' and I can't have that."<sup id="cite_ref-macmullan_20100927_109-0" class="reference"><a href="#cite_note-macmullan_20100927-109">[109]</a></sup> Publicly, he insisted he did not care whether he started or substituted for the Celtics, but expected to be part of the second unit.<sup id="cite_ref-macmullan_20100927_109-1" class="reference"><a href="#cite_note-macmullan_20100927-109">[109]</a></sup> Privately, he wanted to start, but kept it to himself.<sup id="cite_ref-110" class="reference"><a href="#cite_note-110">[110]</a></sup> O'Neal missed games throughout the season due to an assortment of ailments to his right leg<sup id="cite_ref-may_111-0" class="reference"><a href="#cite_note-may-111">[111]</a></sup> including knee,<sup id="cite_ref-112" class="reference"><a href="#cite_note-112">[112]</a></sup> calf,<sup id="cite_ref-113" class="reference"><a href="#cite_note-113">[113]</a></sup> hip,<sup id="cite_ref-114" class="reference"><a href="#cite_note-114">[114]</a></sup> and Achilles injuries.<sup id="cite_ref-115" class="reference"><a href="#cite_note-115">[115]</a></sup> The Celtics traded away center <a href="/wiki/Kendrick_Perkins" title="Kendrick Perkins">Kendrick Perkins</a> in February partially due to the expectation that O'Neal would return to fill Perkins' role. The Celtics were 33–10 in games Perkins had missed during the year due to injury,<sup id="cite_ref-may_111-1" class="reference"><a href="#cite_note-may-111">[111]</a></sup> and they were 19–3 in games that O'Neal played over 20&#160;minutes.<sup id="cite_ref-116" class="reference"><a href="#cite_note-116">[116]</a></sup> After requesting a <a href="/wiki/Cortisone" title="Cortisone">cortisone</a> shot, O'Neal returned April 3 after missing 27&#160;games due to his Achilles; he played only five minutes due to a strained right calf.<sup id="cite_ref-may_111-2" class="reference"><a href="#cite_note-may-111">[111]</a></sup><sup id="cite_ref-117" class="reference"><a href="#cite_note-117">[117]</a></sup> It was the last regular season game he would play that year.<sup id="cite_ref-118" class="reference"><a href="#cite_note-118">[118]</a></sup> O'Neal missed the first round of the <a href="/wiki/2011_NBA_Playoffs" title="2011 NBA Playoffs">2011 playoffs</a>. He insisted on more cortisone shots and returned in the second round, but he was limited to 12&#160;minutes in two games as the Heat eliminated the Celtics from the playoffs.<sup id="cite_ref-119" class="reference"><a href="#cite_note-119">[119]</a></sup><sup id="cite_ref-120" class="reference"><a href="#cite_note-120">[120]</a></sup></p>
<p>On June 1, 2011, O'Neal announced his retirement via social media.<sup id="cite_ref-121" class="reference"><a href="#cite_note-121">[121]</a></sup><sup id="cite_ref-giles_122-0" class="reference"><a href="#cite_note-giles-122">[122]</a></sup> On a short tape on Twitter, O'Neal tweeted, "We did it. Nineteen years, baby. I want to thank you very much. That's why I’m telling you first. I’m about to retire. Love you. Talk to you soon." On June 3, 2011, O'Neal held a press conference at his home in Orlando to officially announce his retirement.<sup id="cite_ref-123" class="reference"><a href="#cite_note-123">[123]</a></sup></p>
<h2><span class="mw-headline" id="National_team_career">National team career</span></h2>
<p>While in college, O'Neal was considered for the <a href="/wiki/1992_United_States_men%27s_Olympic_basketball_team" title="1992 United States men's Olympic basketball team">Dream Team</a> to fill the college spot, but it eventually went to future teammate <a href="/wiki/Christian_Laettner" title="Christian Laettner">Christian Laettner</a>.<sup id="cite_ref-124" class="reference"><a href="#cite_note-124">[124]</a></sup> His national team career began in the <a href="/wiki/1994_FIBA_World_Championship" title="1994 FIBA World Championship">1994 FIBA World Championship</a> in which he was named <a href="/wiki/FIBA_World_Cup_MVP" class="mw-redirect" title="FIBA World Cup MVP">MVP of the Tournament</a>. While he led the <a href="/wiki/United_States_men%27s_national_basketball_team#Olympics" title="United States men's national basketball team">Dream Team II</a> to the gold medal with an 8–0 record, O'Neal averaged 18 points and 8.5 rebounds and recorded two double-doubles. In four games, he scored more than 20 points. Before 2010, he was the last active American player to have a gold from the <a href="/wiki/FIBA_World_Cup" class="mw-redirect" title="FIBA World Cup">FIBA World Cup</a>.</p>
<p>He was one of two players (the other being <a href="/wiki/Reggie_Miller" title="Reggie Miller">Reggie Miller</a>) from the 1994 roster to be also named to the <a href="/wiki/1996_United_States_men%27s_Olympic_basketball_team" title="1996 United States men's Olympic basketball team">Dream Team III</a>. Due to more star-power, he rotated with <a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Hakeem Olajuwon</a> and <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">David Robinson</a> and started 3 games. He averaged 9.3 points and 5.3 rebounds with 8 total blocks. Again, a perfect 8–0 record landed him another gold medal at the <a href="/wiki/Basketball_at_the_1996_Summer_Olympics_%E2%80%93_Men%27s_tournament" title="Basketball at the 1996 Summer Olympics – Men's tournament">1996 Olympics</a> in Atlanta. O'Neal was upset that coach <a href="/wiki/Lenny_Wilkens" title="Lenny Wilkens">Lenny Wilkens</a> played Robinson more minutes in the final game; Wilkens previously explained to O'Neal that it would probably be Robinson's last Olympics.<sup id="cite_ref-125" class="reference"><a href="#cite_note-125">[125]</a></sup></p>
<p>After his 1996 experience, he declined to play in international competition. He was angered by being overlooked for the <a href="/wiki/FIBA_Americas_Championship_1999" class="mw-redirect" title="FIBA Americas Championship 1999">1999 FIBA AmeriCup</a> squad, saying it was a "lack of respect".<sup id="cite_ref-126" class="reference"><a href="#cite_note-126">[126]</a></sup> He forwent an opportunity to participate in the <a href="/wiki/Basketball_at_the_2000_Summer_Olympics_%E2%80%93_Men%27s_tournament" title="Basketball at the 2000 Summer Olympics – Men's tournament">2000 Olympics</a>, explaining that two gold medals were enough.<sup id="cite_ref-127" class="reference"><a href="#cite_note-127">[127]</a></sup> Shaq also chose not to play in the <a href="/wiki/2002_FIBA_World_Championship" title="2002 FIBA World Championship">2002 FIBA World Championship</a>.<sup id="cite_ref-128" class="reference"><a href="#cite_note-128">[128]</a></sup> He rejected an offer to play in the <a href="/wiki/Basketball_at_the_2004_Summer_Olympics_%E2%80%93_Men%27s_tournament" title="Basketball at the 2004 Summer Olympics – Men's tournament">2004 Olympics</a>,<sup id="cite_ref-129" class="reference"><a href="#cite_note-129">[129]</a></sup> and although he was initially interested in being named for 2006–2008 US preliminary roster,<sup id="cite_ref-130" class="reference"><a href="#cite_note-130">[130]</a></sup> he eventually declined the invitation.<sup id="cite_ref-131" class="reference"><a href="#cite_note-131">[131]</a></sup></p>
<h2><span class="mw-headline" id="Player_profile">Player profile</span></h2>
<div class="thumb tright">
<div class="thumbinner" style="width:172px;"><a href="/wiki/File:Shaquille_O%27Neal_Free_Throw.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Shaquille_O%27Neal_Free_Throw.jpg/170px-Shaquille_O%27Neal_Free_Throw.jpg" width="170" height="254" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Shaquille_O%27Neal_Free_Throw.jpg/255px-Shaquille_O%27Neal_Free_Throw.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Shaquille_O%27Neal_Free_Throw.jpg/340px-Shaquille_O%27Neal_Free_Throw.jpg 2x" data-file-width="2199" data-file-height="3288" /></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Shaquille_O%27Neal_Free_Throw.jpg" class="internal" title="Enlarge"></a></div>
O'Neal's free throw shooting was regarded as one of his major weaknesses.</div>
</div>
</div>
<p>O'Neal established himself as an overpowering low post presence, putting up career averages of 23.7 points on .582 field goal accuracy, 10.9 rebounds and 2.3 blocks per game.</p>
<p>At 7&#160;ft 1&#160;in (2.16&#160;m), 325&#160;lb (147&#160;kg; 23.2&#160;st)<sup id="cite_ref-132" class="reference"><a href="#cite_note-132">[132]</a></sup> and U.S. <a href="/wiki/Shoe_size" title="Shoe size">shoe size</a> 23,<sup id="cite_ref-nbabio_54-1" class="reference"><a href="#cite_note-nbabio-54">[54]</a></sup> he became famous for his physical stature. His physical frame gave him a power advantage over most opponents. On two occasions during his first season in the NBA his powerful dunks <a href="/wiki/Backboard_shattering" title="Backboard shattering">broke the steel backboard supports</a>, prompting the league to increase the brace strength and stability of the backboards for the following 1993–94 season.<sup id="cite_ref-133" class="reference"><a href="#cite_note-133">[133]</a></sup></p>
<p>O'Neal's "<a href="/wiki/Drop_step" class="mw-redirect" title="Drop step">drop step</a>", (called the "Black Tornado" by O'Neal) in which he posted up a defender, turned around and, using his elbows for leverage, powered past him for a very high-percentage <a href="/wiki/Slam_dunk" title="Slam dunk">slam dunk</a>, proved an effective offensive weapon. In addition, O'Neal frequently used a right-handed <a href="/wiki/Hook_shot" title="Hook shot">jump hook</a> shot to score near the basket. The ability to dunk contributed to his career field goal accuracy of .582, second only to <a href="/wiki/Artis_Gilmore" title="Artis Gilmore">Artis Gilmore</a> as the highest field goal percentage of all time.<sup id="cite_ref-134" class="reference"><a href="#cite_note-134">[134]</a></sup> He led the NBA in field goal percentage 10 times, breaking <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Wilt Chamberlain</a>'s record of nine.<sup id="cite_ref-nbabio_54-2" class="reference"><a href="#cite_note-nbabio-54">[54]</a></sup></p>
<p>Opposing teams often used up many fouls on O'Neal, reducing the playing time of their own big men. O'Neal's imposing physical presence inside the paint caused dramatic changes in many teams' offensive and defensive strategies.<sup id="cite_ref-135" class="reference"><a href="#cite_note-135">[135]</a></sup></p>
<p>O'Neal's primary weakness was his <a href="/wiki/Free_throw" title="Free throw">free throw</a> shooting, with a career average of 52.7%. He once missed all 11 of his free throw attempts in a game against the <a href="/wiki/Seattle_SuperSonics" title="Seattle SuperSonics">Seattle SuperSonics</a> on December 8, 2000, a record.<sup id="cite_ref-136" class="reference"><a href="#cite_note-136">[136]</a></sup> O'Neal believes his free throw woes were a mental issue, as he often shot 80&#160;percent in practice.<sup id="cite_ref-137" class="reference"><a href="#cite_note-137">[137]</a></sup> In hope of exploiting O'Neal's poor foul shooting, opponents often committed intentional fouls against him, a tactic known as "<a href="/wiki/Hack-a-Shaq" title="Hack-a-Shaq">Hack-a-Shaq</a>". O'Neal was the third-ranked player all-time in free throws taken,<sup id="cite_ref-138" class="reference"><a href="#cite_note-138">[138]</a></sup> having attempted 11,252 free-throws in 1,207 games up to and including the 2010–11 season. On December 25, 2008, O'Neal missed his 5,000th free throw, becoming the second player in NBA history to do so, along with Chamberlain.<sup id="cite_ref-139" class="reference"><a href="#cite_note-139">[139]</a></sup></p>
<p>O'Neal only made one three point shot during his entire career. He made the shot during the 1995–96 NBA season with the Orlando Magic. His career three point shot record is 1 for 22 (a 4.5% career percentage).</p>
<p>O'Neal was a capable defender, named three times to the All-NBA Second Defensive Team. His presence intimidated opposing players shooting near the basket, and he averaged 2.3 blocked shots per game over the course of his career.<sup id="cite_ref-140" class="reference"><a href="#cite_note-140">[140]</a></sup></p>
<p>Phil Jackson believed O'Neal underachieved in his career, saying he "could and should have been the MVP player for 10 consecutive seasons."<sup id="cite_ref-141" class="reference"><a href="#cite_note-141">[141]</a></sup> <a href="/wiki/Los_Angeles_Lakers#Retired_numbers" title="Los Angeles Lakers">The Lakers retired</a> his No. 34 jersey on April 2, 2013.<sup id="cite_ref-142" class="reference"><a href="#cite_note-142">[142]</a></sup></p>
<p>On February 26, 2016, the Miami Heat announced that it would retire O'Neal's No. 32 jersey during the 2016–17 season, making O'Neal one of just 32 athletes in American professional sports history to have their jersey retired by multiple teams.<sup id="cite_ref-143" class="reference"><a href="#cite_note-143">[143]</a></sup><sup id="cite_ref-144" class="reference"><a href="#cite_note-144">[144]</a></sup> <a href="/wiki/Miami_Heat#Retired_numbers" title="Miami Heat">The Heat eventually retired</a> his jersey on December 22, 2016, during halftime of a game against his former team, the <a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers">Los Angeles Lakers</a>.</p>
<h2><span class="mw-headline" id="Media_personality">Media personality</span></h2>
<p>O'Neal called himself "<i>The Big Aristotle</i>" and "<i>Hobo Master</i>" for his composure and insights during interviews. Journalists and others gave O'Neal several nicknames including "'<b>Shaq'</b>", "<b>The <a href="/wiki/Diesel_engine" title="Diesel engine">Diesel</a></b>", "<b><a href="/wiki/Shaq_Fu" title="Shaq Fu">Shaq Fu</a></b>", "<b>The Big Daddy</b>", "<b><a href="/wiki/Superman" title="Superman">Superman</a></b>", "<b>The Big <a href="/wiki/Agave" title="Agave">Agave</a></b>", "<b>The Big Cactus</b>", "<b>The Big Shaqtus</b>", "<b>The Big <a href="/wiki/Galactus" title="Galactus">Galactus</a></b>", "<b><a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Wilt Chamberneezy</a></b>", "<b>The Big <a href="/wiki/Mikhail_Baryshnikov" title="Mikhail Baryshnikov">Baryshnikov</a></b>", "<b>The Real Deal</b>", "<b>The Big <a href="/wiki/Shamrock" title="Shamrock">Shamrock</a></b>", "<b>The Big <a href="/wiki/Leprechaun" title="Leprechaun">Leprechaun</a></b>", "<b>Shaqovic</b>",<sup id="cite_ref-145" class="reference"><a href="#cite_note-145">[145]</a></sup><sup id="cite_ref-146" class="reference"><a href="#cite_note-146">[146]</a></sup> and "<b>The Big Conductor</b>".<sup id="cite_ref-147" class="reference"><a href="#cite_note-147">[147]</a></sup> Although he was a favorite interviewee of the press, O'Neal was sensitive and often went weeks without speaking.<sup id="cite_ref-heisler_06012011_148-0" class="reference"><a href="#cite_note-heisler_06012011-148">[148]</a></sup> When he did not want to speak with the press, he employed an interview technique whereby, sitting in front of his cubicle, he would murmur in his low-pitched voice.<sup id="cite_ref-heisler_06012011_148-1" class="reference"><a href="#cite_note-heisler_06012011-148">[148]</a></sup><sup id="cite_ref-149" class="reference"><a href="#cite_note-149">[149]</a></sup></p>
<p>During the 2000 <a href="/wiki/Screen_Actors_Guild" title="Screen Actors Guild">Screen Actors Guild</a> strike, O'Neal performed in a commercial for <a href="/wiki/The_Walt_Disney_Company" title="The Walt Disney Company">Disney</a>. O'Neal was fined by the union for crossing the <a href="/wiki/Picketing_(protest)" class="mw-redirect" title="Picketing (protest)">picket line</a>.<sup id="cite_ref-150" class="reference"><a href="#cite_note-150">[150]</a></sup><sup id="cite_ref-151" class="reference"><a href="#cite_note-151">[151]</a></sup></p>
<p>O'Neal's humorous and sometimes incendiary comments fueled the <a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers">Los Angeles Lakers</a>' long-standing rivalry with the <a href="/wiki/Sacramento_Kings" title="Sacramento Kings">Sacramento Kings</a>; O'Neal frequently referred to the Sacramento team as the "Queens."<sup id="cite_ref-152" class="reference"><a href="#cite_note-152">[152]</a></sup><sup id="cite_ref-153" class="reference"><a href="#cite_note-153">[153]</a></sup><sup id="cite_ref-154" class="reference"><a href="#cite_note-154">[154]</a></sup> During the 2002 victory parade, O'Neal declared that Sacramento would never be the capital of California,<sup id="cite_ref-155" class="reference"><a href="#cite_note-155">[155]</a></sup> after the Lakers beat the Kings in a tough seven game series en route to its third championship with O'Neal.</p>
<p>He also received media flak for <a href="/wiki/Ching_chong" title="Ching chong">mocking Chinese people</a> when interviewed about newcomer center <a href="/wiki/Yao_Ming" title="Yao Ming">Yao Ming</a>. O'Neal told a reporter, "you tell Yao Ming, ching chong yang, wah, ah so."<sup id="cite_ref-156" class="reference"><a href="#cite_note-156">[156]</a></sup> O'Neal later said it was <a href="/w/index.php?title=Locker_room_humor&amp;action=edit&amp;redlink=1" class="new" title="Locker room humor (page does not exist)">locker room humor</a> and he meant no offense. Yao believed that O'Neal was joking, but he said a lot of Asians wouldn't see the humor.<sup id="cite_ref-157" class="reference"><a href="#cite_note-157">[157]</a></sup> Yao joked, "Chinese is hard to learn. I had trouble with it when I was little."<sup id="cite_ref-158" class="reference"><a href="#cite_note-158">[158]</a></sup> O'Neal later admitted that he regretted how he treated Yao early in his career.<sup id="cite_ref-159" class="reference"><a href="#cite_note-159">[159]</a></sup></p>
<p>During the 2005 NBA playoffs, O'Neal compared his poor play to <a href="/wiki/Erick_Dampier" title="Erick Dampier">Erick Dampier</a>,<sup id="cite_ref-160" class="reference"><a href="#cite_note-160">[160]</a></sup> a <a href="/wiki/Dallas_Mavericks" title="Dallas Mavericks">Dallas Mavericks</a> center who had failed to score a single point in one of their recent games. The quip inspired countless citations and references by announcers during those playoffs, though Dampier himself offered little response to the insult. The two would meet in the <a href="/wiki/2006_NBA_Finals" title="2006 NBA Finals">2006 NBA Finals</a>.<sup id="cite_ref-161" class="reference"><a href="#cite_note-161">[161]</a></sup></p>
<p>O'Neal was very vocal with the media, often making jabs at former Laker teammate Kobe Bryant. In the summer of 2005, when asked about Bryant, he responded, "I'm sorry, who?" and continued to pretend that he did not know who Bryant was until well into the 2005–06 season.<sup id="cite_ref-162" class="reference"><a href="#cite_note-162">[162]</a></sup></p>
<p>O'Neal also appeared on television on <i><a href="/wiki/Saturday_Night_Live" title="Saturday Night Live">Saturday Night Live</a></i> (he was initially picked to host the second episode of season 24 in 1998, but had to back down due to scheduling conflicts, being replaced by <a href="/wiki/Kelsey_Grammer" title="Kelsey Grammer">Kelsey Grammer</a>); however, he did appear in two sketches during the episode) and in 2007 hosted <i>Shaq's Big Challenge</i>, a reality show on ABC in which he challenged Florida kids to lose weight and stay in shape.<sup id="cite_ref-163" class="reference"><a href="#cite_note-163">[163]</a></sup></p>
<p>When the Lakers faced the Heat on January 16, 2006, O'Neal and Bryant made headlines by engaging in handshakes and hugs before the game, an event that was believed to signify the end of the so-called "<a href="/wiki/Bryant%E2%80%93O%27Neal_feud" class="mw-redirect" title="Bryant–O'Neal feud">Bryant–O'Neal feud</a>" that had festered since the center left Los Angeles. O'Neal was quoted as saying that he accepted the advice of NBA legend <a href="/wiki/Bill_Russell" title="Bill Russell">Bill Russell</a> to make peace with Bryant.<sup id="cite_ref-164" class="reference"><a href="#cite_note-164">[164]</a></sup> However, on June 22, 2008, O'Neal <a href="/wiki/Freestyle_rap" title="Freestyle rap">freestyled</a> a diss rap about Bryant in a New York club. While rapping, O'Neal blamed Bryant for his divorce from his wife Shaunie and claims to have received a <a href="/wiki/Vasectomy" title="Vasectomy">vasectomy</a>, as part of a rhyme. He also taunted Bryant for not being able to win a championship without him. O'Neal led the audience to mockingly chant several times "Kobe, tell me how my ass tastes."<sup id="cite_ref-165" class="reference"><a href="#cite_note-165">[165]</a></sup> O'Neal justified his act by saying "I was freestyling. That's all. It was all done in fun. Nothing serious whatsoever. That is what MCs do. They freestyle when called upon. I'm totally cool with Kobe. No issue at all."<sup id="cite_ref-166" class="reference"><a href="#cite_note-166">[166]</a></sup> Although even other exponents of <a href="/wiki/Hip_hop_music" title="Hip hop music">hip hop</a>, such as <a href="/wiki/Snoop_Dogg" title="Snoop Dogg">Snoop Dogg</a>, <a href="/wiki/Nas" title="Nas">Nas</a> and Cory Gunz, agreed with O'Neal,<sup id="cite_ref-167" class="reference"><a href="#cite_note-167">[167]</a></sup> <a href="/wiki/Maricopa_County,_Arizona" title="Maricopa County, Arizona">Maricopa County</a>, Arizona Sheriff <a href="/wiki/Joe_Arpaio" title="Joe Arpaio">Joe Arpaio</a> expressed his intention to relieve O'Neal of his Maricopa County sheriff posse badge, due to "use of a racially derogatory word and other foul language". The racial quote from his song was "it's like a white boy trying to be more <a href="/wiki/Nigga" title="Nigga">nigga</a> than me."<sup id="cite_ref-168" class="reference"><a href="#cite_note-168">[168]</a></sup></p>
<h2><span class="mw-headline" id="Off_the_court">Off the court</span></h2>
<h3><span class="mw-headline" id="Education">Education</span></h3>
<p>O'Neal left LSU for the NBA after three years. However, he promised his mother he would eventually return to his studies and complete his <a href="/wiki/Bachelor%27s_degree" title="Bachelor's degree">bachelor's degree</a>. He fulfilled that promise in 2000, earning his bachelor of arts in general studies.<sup id="cite_ref-169" class="reference"><a href="#cite_note-169">[169]</a></sup> Coach <a href="/wiki/Phil_Jackson" title="Phil Jackson">Phil Jackson</a> let O'Neal miss a home game so he could attend graduation. At the ceremony, he told the crowd "now I can go and get a real job". Subsequently, O'Neal earned an <a href="/wiki/Master_of_Business_Administration" title="Master of Business Administration">MBA</a> online through the <a href="/wiki/University_of_Phoenix" title="University of Phoenix">University of Phoenix</a> in 2005. In reference to his completion of his MBA degree, he stated: "It's just something to have on my resume for when I go back into reality. Someday I might have to put down a basketball and have a regular 9-to-5 like everybody else."<sup id="cite_ref-170" class="reference"><a href="#cite_note-170">[170]</a></sup></p>
<p>Toward the end of his playing career, he began work on an <a href="/wiki/Doctor_of_Education" title="Doctor of Education">Ed.D.</a> in <a href="/wiki/Human_Resource_Development" class="mw-redirect" title="Human Resource Development">Human Resource Development</a> at <a href="/wiki/Barry_University" title="Barry University">Barry University</a>.<sup id="cite_ref-nytimes.com_171-0" class="reference"><a href="#cite_note-nytimes.com-171">[171]</a></sup><sup id="cite_ref-172" class="reference"><a href="#cite_note-172">[172]</a></sup> His doctoral capstone<sup id="cite_ref-173" class="reference"><a href="#cite_note-173">[173]</a></sup><sup id="cite_ref-174" class="reference"><a href="#cite_note-174">[174]</a></sup> topic was "The Duality of Humor and Aggression in Leadership Styles".<sup id="cite_ref-nytimes.com_171-1" class="reference"><a href="#cite_note-nytimes.com-171">[171]</a></sup><sup id="cite_ref-175" class="reference"><a href="#cite_note-175">[175]</a></sup> O'Neal received his degree in 2012.<sup id="cite_ref-176" class="reference"><a href="#cite_note-176">[176]</a></sup> O'Neal told a reporter for <a href="/wiki/American_Broadcasting_Corporation" class="mw-redirect" title="American Broadcasting Corporation">ABC News</a> that he plans to further his education still by attending law school.<sup id="cite_ref-177" class="reference"><a href="#cite_note-177">[177]</a></sup></p>
<p>O'Neal has also studied directing and cinematography with the New York Film Academy's Filmmaking Conservatory.<sup id="cite_ref-178" class="reference"><a href="#cite_note-178">[178]</a></sup></p>
<h3><span class="mw-headline" id="Law_enforcement">Law enforcement</span></h3>
<p>O'Neal maintained a high level of interest in the workings of police departments and became personally involved in law enforcement. O'Neal went through the <a href="/wiki/Los_Angeles_County" class="mw-redirect" title="Los Angeles County">Los Angeles County</a> <a href="/wiki/Sheriff" title="Sheriff">Sheriff</a>'s Reserve Academy and became a reserve officer with the <a href="/wiki/Los_Angeles_Port_Police" title="Los Angeles Port Police">Los Angeles Port Police</a>. He appeared in a commercial for <a href="/wiki/ESPN" title="ESPN">ESPN</a> in <a href="/wiki/Miami_Police_Department" title="Miami Police Department">Miami Police</a> garb climbing a tree to rescue <a href="/wiki/LSU_Tigers" class="mw-redirect" title="LSU Tigers">LSU</a>'s costumed mascot <a href="/wiki/Mike_the_Tiger" title="Mike the Tiger">Mike the Tiger</a>.<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (June 2010)">citation needed</span></a></i>]</sup></p>
<p>On March 2, 2005, O'Neal was given an honorary <a href="/wiki/United_States_Marshals_Service" title="United States Marshals Service">U.S. Deputy Marshal</a> title and named the spokesman for the Safe Surfin' Foundation; he served an honorary role on the task force of the same name, which tracks down <a href="/wiki/Sexual_predator" title="Sexual predator">sexual predators</a> who target children on the Internet.<sup id="cite_ref-179" class="reference"><a href="#cite_note-179">[179]</a></sup></p>
<p>Upon his trade to Miami, O'Neal began training to become a <a href="/wiki/Miami_Beach,_Florida" title="Miami Beach, Florida">Miami Beach</a> reserve officer. On December 8, 2005, he was sworn in, but elected for a private ceremony to avoid distracting attention from the other officers. He assumed a $1 per year salary in this capacity.<sup id="cite_ref-policeoff_180-0" class="reference"><a href="#cite_note-policeoff-180">[180]</a></sup> Shortly thereafter, in Miami, O'Neal witnessed a <a href="/wiki/Hate_crime" title="Hate crime">hate crime</a> (assaulting a man while calling out <a href="/wiki/Homophobic" class="mw-redirect" title="Homophobic">homophobic</a> slurs) and called Miami-Dade police, describing the suspect and helping police, over his cell phone, track the offender.<sup id="cite_ref-policeoff_180-1" class="reference"><a href="#cite_note-policeoff-180">[180]</a></sup> O'Neal's actions resulted in the arrest of two suspects on charges of <a href="/wiki/Aggravated_battery" class="mw-redirect" title="Aggravated battery">aggravated battery</a>, assault, and a <a href="/wiki/Hate_crime" title="Hate crime">hate crime</a>.<sup id="cite_ref-181" class="reference"><a href="#cite_note-181">[181]</a></sup></p>
<p>In September 2006, O'Neal took part in a raid on a home in rural <a href="/wiki/Bedford_County,_Virginia" title="Bedford County, Virginia">Bedford County, Virginia</a>. O'Neal had been made an "honorary deputy" by the local sheriff's department. O'Neal was not qualified as a SWAT officer.<sup id="cite_ref-182" class="reference"><a href="#cite_note-182">[182]</a></sup></p>
<p>In December 2016, O'Neal was sworn in as a sheriff's deputy in <a href="/wiki/Jonesboro,_Georgia" title="Jonesboro, Georgia">Jonesboro, Georgia</a> as part of <a href="/wiki/Clayton_County,_Georgia" title="Clayton County, Georgia">Clayton County, Georgia</a> Sheriff's Department. O'Neal holds the county record of Tallest Sheriff's Deputy.<sup id="cite_ref-183" class="reference"><a href="#cite_note-183">[183]</a></sup></p>
<h3><span class="mw-headline" id="Music_career">Music career</span></h3>
<table class="infobox vcard plainlist" style="width:22em">
<tr>
<th colspan="2" style="text-align:center;font-size:125%;font-weight:bold;background-color: #f0e68c"><span class="fn">Shaquille O'Neal</span></th>
</tr>
<tr>
<th scope="row">Genres</th>
<td><a href="/wiki/Hip_hop_music" title="Hip hop music">Hip hop</a></td>
</tr>
<tr>
<th scope="row"><span class="nowrap">Occupation(s)</span></th>
<td class="role"><a href="/wiki/Rapping" title="Rapping">Rapper</a></td>
</tr>
<tr>
<th scope="row"><span class="nowrap">Years active</span></th>
<td>1993–2001; 2017</td>
</tr>
<tr>
<th scope="row">Labels</th>
<td><a href="/wiki/Jive_Records" title="Jive Records">Jive</a>, <a href="/wiki/Interscope_Records" title="Interscope Records">Interscope</a>, <a href="/wiki/A%26M_Records" title="A&amp;M Records">A&amp;M</a>, <a href="/wiki/Trauma_Records" title="Trauma Records">Trauma</a></td>
</tr>
<tr>
<th scope="row"><span class="nowrap">Associated acts</span></th>
<td><a href="/wiki/Lord_Tariq_and_Peter_Gunz" title="Lord Tariq and Peter Gunz">Lord Tariq and Peter Gunz</a>, <a href="/wiki/DJ_Kayslay" class="mw-redirect" title="DJ Kayslay">DJ Kayslay</a></td>
</tr>
</table>
<p>Beginning in 1993, O'Neal began to compose <a href="/wiki/Rap" class="mw-redirect" title="Rap">rap</a> music. He released five studio albums and 1 <a href="/wiki/Compilation_album" title="Compilation album">compilation album</a>. Although his rapping abilities were criticized at the outset,<sup id="cite_ref-184" class="reference"><a href="#cite_note-184">[184]</a></sup><sup id="cite_ref-185" class="reference"><a href="#cite_note-185">[185]</a></sup> one critic credited him with "progressing as a rapper in small steps, not leaps and bounds".<sup id="cite_ref-186" class="reference"><a href="#cite_note-186">[186]</a></sup> His 1993 debut album, <i><a href="/wiki/Shaq_Diesel" title="Shaq Diesel">Shaq Diesel</a></i>, received <a href="/wiki/Music_recording_sales_certification" class="mw-redirect" title="Music recording sales certification">platinum certification</a> from the <a href="/wiki/Recording_Industry_Association_of_America" title="Recording Industry Association of America">RIAA</a>.</p>
<p>O'Neal was featured alongside <a href="/wiki/Michael_Jackson" title="Michael Jackson">Michael Jackson</a> as a guest rapper on "2 Bad", a song from Jackson's 1995 album <i><a href="/wiki/HIStory:_Past,_Present_and_Future,_Book_I" title="HIStory: Past, Present and Future, Book I">HIStory</a></i>. He contributed three tracks, including the song "We Genie", to the <i><a href="/wiki/Kazaam" title="Kazaam">Kazaam</a></i> <a href="/wiki/Kazaam_(soundtrack)" title="Kazaam (soundtrack)">soundtrack</a>.<sup id="cite_ref-AllmusicReview_187-0" class="reference"><a href="#cite_note-AllmusicReview-187">[187]</a></sup> O'Neal was also featured in <a href="/wiki/Aaron_Carter" title="Aaron Carter">Aaron Carter</a>'s 2001 hit single "<a href="/wiki/That%27s_How_I_Beat_Shaq" title="That's How I Beat Shaq">That's How I Beat Shaq</a>". Shaq also appears on the music video for the release.<sup id="cite_ref-aaron_188-0" class="reference"><a href="#cite_note-aaron-188">[188]</a></sup></p>
<p>Shaquille O'Neal conducted the <a href="/wiki/Boston_Pops_Orchestra" title="Boston Pops Orchestra">Boston Pops Orchestra</a> at the <a href="/wiki/Boston_Symphony_Hall" class="mw-redirect" title="Boston Symphony Hall">Boston Symphony Hall</a> on December 20, 2010.</p>
<p>In July 2017, O'Neal released a <a href="/wiki/Diss_track" class="mw-redirect" title="Diss track">diss track</a> aimed at <a href="/wiki/LaVar_Ball" title="LaVar Ball">LaVar Ball</a>, the father of NBA point guard <a href="/wiki/Lonzo_Ball" title="Lonzo Ball">Lonzo Ball</a>. The three minute song was released in response to Ball claiming him and his younger son <a href="/wiki/LaMelo" class="mw-redirect" title="LaMelo">LaMelo</a>, would beat O'Neal and his son Shareef in a game of basketball.</p>
<h3><span class="mw-headline" id="Acting">Acting</span></h3>
<p>Starting with <i><a href="/wiki/Blue_Chips" title="Blue Chips">Blue Chips</a></i> and <i><a href="/wiki/Kazaam" title="Kazaam">Kazaam</a></i>, O'Neal appeared in movies that were panned by some critics.<sup id="cite_ref-189" class="reference"><a href="#cite_note-189">[189]</a></sup><sup id="cite_ref-190" class="reference"><a href="#cite_note-190">[190]</a></sup></p>
<p>O'Neal is one of the first African Americans to portray a major comic book superhero in a motion picture, having starred as <a href="/wiki/Steel_(John_Henry_Irons)" title="Steel (John Henry Irons)">John Henry Irons</a>, the protagonist in the 1997 film <i><a href="/wiki/Steel_(1997_film)" title="Steel (1997 film)">Steel</a></i>. He is preceded only by <a href="/wiki/Michael_Jai_White" title="Michael Jai White">Michael Jai White</a>, whose film <i><a href="/wiki/Spawn_(film)" title="Spawn (film)">Spawn</a></i> was released two weeks before <i>Steel</i>.</p>
<p>O'Neal appeared as himself on an episode of <i><a href="/wiki/Curb_Your_Enthusiasm" title="Curb Your Enthusiasm">Curb Your Enthusiasm</a></i>, bedridden after <a href="/wiki/Larry_David" title="Larry David">Larry David</a>'s character accidentally tripped him while stretching, and in two episodes each of <i><a href="/wiki/My_Wife_and_Kids" title="My Wife and Kids">My Wife and Kids</a></i> and <i><a href="/wiki/The_Parkers" title="The Parkers">The Parkers</a></i>. He appeared in cameo roles in the films, <i><a href="/wiki/Freddy_Got_Fingered" title="Freddy Got Fingered">Freddy Got Fingered</a></i>, <i><a href="/wiki/Jack_and_Jill_(2011_film)" title="Jack and Jill (2011 film)">Jack and Jill</a></i> and <i><a href="/wiki/Scary_Movie_4" title="Scary Movie 4">Scary Movie 4</a></i>. O'Neal appeared in the <a href="/wiki/311_(band)" title="311 (band)">311</a> music video for the hit single "<a href="/wiki/You_Wouldn%27t_Believe" title="You Wouldn't Believe">You Wouldn't Believe</a>" in 2001, in <a href="/wiki/Sean_Combs" title="Sean Combs">P. Diddy's</a> video for "Bad Boys 4 Life", the video for <a href="/wiki/Aaron_Carter" title="Aaron Carter">Aaron Carter</a>'s "<a href="/wiki/That%27s_How_I_Beat_Shaq" title="That's How I Beat Shaq">That's How I Beat Shaq</a>", and the video for <a href="/wiki/Owl_City" title="Owl City">Owl City</a>'s "<a href="/wiki/Vanilla_Twilight" title="Vanilla Twilight">Vanilla Twilight</a>". O'Neal appeared in the movie <i><a href="/wiki/CB4" title="CB4">CB4</a></i> in a small "interviewing" scene. O'Neal appeared in a <i><a href="/wiki/SportsCenter" title="SportsCenter">SportsCenter</a></i> commercial dressed in his Miami police uniform, rescuing <a href="/wiki/Mike_the_Tiger" title="Mike the Tiger">Mike the Tiger</a> from a tree. O'Neal reportedly wanted a role in the film <i><a href="/wiki/X2_(film)" title="X2 (film)">X2</a></i> (the second in the <a href="/wiki/X-Men" title="X-Men">X-Men</a> film series), but was ignored by the filmmakers.<sup id="cite_ref-191" class="reference"><a href="#cite_note-191">[191]</a></sup> O'Neal appeared as Officer Fluzoo in the comedy sequel <i><a href="/wiki/Grown_Ups_2" title="Grown Ups 2">Grown Ups 2</a></i>.</p>
<p>He voiced animated versions of himself on several occasions, including in the animated series <i><a href="/wiki/Static_Shock" title="Static Shock">Static Shock</a></i> (episode "Static Shaq"), in <i><a href="/wiki/Johnny_Bravo" title="Johnny Bravo">Johnny Bravo</a></i> (episode "Back on Shaq"), in <i><a href="/wiki/Uncle_Grandpa" title="Uncle Grandpa">Uncle Grandpa</a></i> (episode "Perfect Kid"),<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">[<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (June 2011)">citation needed</span></a></i>]</sup> and in <i><a href="/wiki/The_Lego_Movie" title="The Lego Movie">The Lego Movie</a></i>. He also had a voice over role in the 2013 film, <i><a href="/wiki/The_Smurfs_2" title="The Smurfs 2">The Smurfs 2</a></i>.<sup id="cite_ref-192" class="reference"><a href="#cite_note-192">[192]</a></sup></p>
<h3><span class="mw-headline" id="Video_games">Video games</span></h3>
<p>O'Neal was featured on the covers of video games <i><a href="/wiki/NBA_Live_96" title="NBA Live 96">NBA Live 96</a></i>, <i><a href="/wiki/NBA_2K_(series)" class="mw-redirect" title="NBA 2K (series)">NBA 2K6</a></i>, <i><a href="/wiki/NBA_2K_(series)" class="mw-redirect" title="NBA 2K (series)">NBA 2K7</a></i>, <i><a href="/wiki/NBA_Showtime:_NBA_on_NBC" title="NBA Showtime: NBA on NBC">NBA Showtime: NBA on NBC</a></i>, <i><a href="/wiki/NBA_Hoopz" title="NBA Hoopz">NBA Hoopz</a></i>, and <i>NBA Inside Drive 2004</i>.<sup id="cite_ref-193" class="reference"><a href="#cite_note-193">[193]</a></sup><sup id="cite_ref-194" class="reference"><a href="#cite_note-194">[194]</a></sup><sup id="cite_ref-195" class="reference"><a href="#cite_note-195">[195]</a></sup><sup id="cite_ref-196" class="reference"><a href="#cite_note-196">[196]</a></sup> O'Neal appeared in the arcade version of <i><a href="/wiki/NBA_Jam_(1993_video_game)" title="NBA Jam (1993 video game)">NBA Jam</a></i> (1993), <i><a href="/wiki/NBA_Jam_(2003_video_game)" title="NBA Jam (2003 video game)">NBA Jam</a></i> (2003) and <i><a href="/wiki/NBA_Live_2004" title="NBA Live 2004">NBA Live 2004</a></i> as a current player and as a 1990s All-Star. O'Neal starred in <i><a href="/wiki/Shaq_Fu" title="Shaq Fu">Shaq Fu</a></i>, a fighting game for the <a href="/wiki/Super_Nintendo_Entertainment_System" title="Super Nintendo Entertainment System">Super Nintendo Entertainment System</a> and <a href="/wiki/Mega_Drive" class="mw-redirect" title="Mega Drive">Sega Genesis</a>. O'Neal also appeared in <i><a href="/wiki/Backyard_Sports_series" class="mw-redirect" title="Backyard Sports series">Backyard Basketball</a></i> in 2004, <i><a href="/wiki/Ready_2_Rumble_Boxing:_Round_2" title="Ready 2 Rumble Boxing: Round 2">Ready 2 Rumble Boxing: Round 2</a></i> as a playable boxer, and as an unlockable character in <i><a href="/wiki/Delta_Force:_Black_Hawk_Down" title="Delta Force: Black Hawk Down">Delta Force: Black Hawk Down</a></i>. O'Neal was also an unlockable character in <i><a href="/wiki/UFC_Undisputed_2010" title="UFC Undisputed 2010">UFC Undisputed 2010</a></i>.<sup id="cite_ref-197" class="reference"><a href="#cite_note-197">[197]</a></sup> A sequel, <i>Shaq Fu: A Legend Reborn</i>, is set for release in 2018.<sup id="cite_ref-198" class="reference"><a href="#cite_note-198">[198]</a></sup></p>
<h3><span class="mw-headline" id="Television">Television</span></h3>
<p>O'Neal and his mother, Lucille Harrison, were featured in the documentary film <i>Apple Pie</i>, which aired on <a href="/wiki/ESPN" title="ESPN">ESPN</a>.<sup id="cite_ref-199" class="reference"><a href="#cite_note-199">[199]</a></sup><sup id="cite_ref-200" class="reference"><a href="#cite_note-200">[200]</a></sup> O'Neal had a 2005 reality series on ESPN, <i><a href="/wiki/Shaquille_(TV_series)" title="Shaquille (TV series)">Shaquille</a></i>,<sup id="cite_ref-201" class="reference"><a href="#cite_note-201">[201]</a></sup> and hosted a series called <i><a href="/wiki/Shaq%27s_Big_Challenge" title="Shaq's Big Challenge">Shaq's Big Challenge</a></i> on <a href="/wiki/American_Broadcasting_Company" title="American Broadcasting Company">ABC</a>.<sup id="cite_ref-202" class="reference"><a href="#cite_note-202">[202]</a></sup></p>
<p>O'Neal appeared on <i><a href="/wiki/NBA_Ballers" title="NBA Ballers">NBA Ballers</a></i> and <i><a href="/wiki/NBA_Ballers:_Phenom" title="NBA Ballers: Phenom">NBA Ballers: Phenom</a></i>,<sup id="cite_ref-203" class="reference"><a href="#cite_note-203">[203]</a></sup> in the 2002 <a href="/wiki/Discovery_Channel" title="Discovery Channel">Discovery Channel</a> special <i>Motorcycle Mania 2</i> requesting an exceptionally large bike to fit his large size famed custom motorcycle builder <a href="/wiki/Jesse_James_(customizer)" title="Jesse James (customizer)">Jesse James</a>,<sup id="cite_ref-204" class="reference"><a href="#cite_note-204">[204]</a></sup> in the first <a href="/wiki/Idol_Gives_Back" title="Idol Gives Back">Idol Gives Back</a> in 2007,<sup id="cite_ref-205" class="reference"><a href="#cite_note-205">[205]</a></sup> on an episode of <i><a href="/wiki/Fear_Factor" title="Fear Factor">Fear Factor</a></i>,<sup id="cite_ref-206" class="reference"><a href="#cite_note-206">[206]</a></sup> and on an episode of MTV's <i><a href="/wiki/Jackass_(TV_series)" class="mw-redirect" title="Jackass (TV series)">Jackass</a></i>, where he was lifted off the ground on <a href="/wiki/Jason_Acu%C3%B1a" title="Jason Acuña">Wee Man</a>'s back.<sup id="cite_ref-207" class="reference"><a href="#cite_note-207">[207]</a></sup> O'Neal was a wrestling fan and made appearances at many <a href="/wiki/World_Wrestling_Entertainment" class="mw-redirect" title="World Wrestling Entertainment">WWE</a> events.<sup id="cite_ref-208" class="reference"><a href="#cite_note-208">[208]</a></sup></p>
<p>O'Neal was pranked on the MTV show <i><a href="/wiki/Punk%27d" title="Punk'd">Punk'd</a></i> when a crew member accused him of stealing his parking space. After O'Neal and his wife went into a restaurant, <a href="/wiki/Ashton_Kutcher" title="Ashton Kutcher">Ashton Kutcher</a>'s crew members let the air out of O'Neal's tires. O'Neal and the crew member then got into an altercation and after Kutcher told O'Neal he had been Punk'd, O'Neal <a href="/wiki/Finger_(gesture)" class="mw-redirect" title="Finger (gesture)">made an obscene gesture</a> at the camera.<sup id="cite_ref-209" class="reference"><a href="#cite_note-209">[209]</a></sup><sup id="cite_ref-210" class="reference"><a href="#cite_note-210">[210]</a></sup></p>
<p>O'Neal starred in a reality show called <i><a href="/wiki/Shaq_Vs." title="Shaq Vs.">Shaq Vs.</a></i> which premiered on August 18, 2009, on <a href="/wiki/American_Broadcasting_Company" title="American Broadcasting Company">ABC</a>.<sup id="cite_ref-211" class="reference"><a href="#cite_note-211">[211]</a></sup> The show featured O'Neal competing against other athletes at their own sports.<sup id="cite_ref-212" class="reference"><a href="#cite_note-212">[212]</a></sup></p>
<p>On July 14, 2011, O'Neal announced that he would join <a href="/wiki/Turner_Network_Television" class="mw-redirect" title="Turner Network Television">Turner Network Television</a> (TNT) as an analyst on its NBA basketball games, joining <a href="/wiki/Ernie_Johnson,_Jr." class="mw-redirect" title="Ernie Johnson, Jr.">Ernie Johnson</a>, <a href="/wiki/Kenny_Smith" title="Kenny Smith">Kenny Smith</a>, and <a href="/wiki/Charles_Barkley" title="Charles Barkley">Charles Barkley</a>.<sup id="cite_ref-213" class="reference"><a href="#cite_note-213">[213]</a></sup></p>
<p>He hosted the show <i><a href="/wiki/Upload_with_Shaquille_O%27Neal" title="Upload with Shaquille O'Neal">Upload with Shaquille O'Neal</a></i> which aired on <a href="/wiki/TruTV" title="TruTV">TruTV</a> for one season.</p>
<p>In September 2015 whilst promoting sportswear giant <a href="/wiki/Reebok" title="Reebok">Reebok</a> in <a href="/wiki/South_Korea" title="South Korea">South Korea</a>, O'Neal joined the cast in the <a href="/wiki/South_Korea" title="South Korea">South Korean</a> variety television show <i><a href="/wiki/Off_to_School" title="Off to School">Off to School</a></i> where he went to Seo Incheon High School. The show features various celebrities attending a selected high school as students for three days.<sup id="cite_ref-214" class="reference"><a href="#cite_note-214">[214]</a></sup> The producer of the show, Kim No Eun said, "We’ve worked hard on our guest list this season, so Chu Sung Hoon will be appearing on a cable channel for the first time. Shaquille O'Neal will be on the show as well. We succeeded in casting him after a lot of effort. O'Neal will be visiting Korea for a promotion and will be visiting the school on the last day. He will have lunch with the students. We’re even preparing a big match between Chu Sung Hoon and Shaquille O'Neal. We’re specially preparing a uniform for Shaquille O'Neal."<sup id="cite_ref-215" class="reference"><a href="#cite_note-215">[215]</a></sup><sup id="cite_ref-216" class="reference"><a href="#cite_note-216">[216]</a></sup><sup id="cite_ref-217" class="reference"><a href="#cite_note-217">[217]</a></sup></p>
<h3><span class="mw-headline" id="Advertising">Advertising</span></h3>
<p>O'Neal has made numerous appearances in television commercials, including several <a href="/wiki/Pepsi" title="Pepsi">Pepsi</a> commercials, such as one from 1995 which parodied shows like <i><a href="/wiki/I_Love_Lucy" title="I Love Lucy">I Love Lucy</a></i> (the "Job Switching" episode), <i><a href="/wiki/Bonanza" title="Bonanza">Bonanza</a></i>, and <i><a href="/wiki/Woody_Woodpecker" title="Woody Woodpecker">Woody Woodpecker</a></i>; various 1990s <a href="/wiki/Reebok" title="Reebok">Reebok</a> commercials; <a href="/wiki/Nestl%C3%A9_Crunch" title="Nestlé Crunch">Nestlé Crunch</a> commercials; <a href="/wiki/Gold_Bond" title="Gold Bond">Gold Bond</a> products; <a href="/wiki/The_General_(insurance)" title="The General (insurance)">The General</a> insurance commercials; and <a href="/wiki/IcyHot" class="mw-redirect" title="IcyHot">IcyHot</a> commercials.</p>
<h3><span class="mw-headline" id="Mixed_martial_arts">Mixed martial arts</span></h3>
<p>O'Neal began training in <a href="/wiki/Mixed_martial_arts" title="Mixed martial arts">mixed martial arts</a> (MMA) in 2000. At Jonathan Burke's Gracie Gym, he trained in <a href="/wiki/Boxing" title="Boxing">boxing</a>, <a href="/wiki/Jujutsu" title="Jujutsu">jiu-jitsu</a>, <a href="/wiki/Muay_Thai" title="Muay Thai">Muay Thai</a> and <a href="/wiki/Wrestling" title="Wrestling">wrestling</a>. At the gym, he used the nickname Diesel.<sup id="cite_ref-218" class="reference"><a href="#cite_note-218">[218]</a></sup> O'Neal challenged <a href="/wiki/Kickboxer" class="mw-redirect" title="Kickboxer">kickboxer</a> and mixed martial artist <a href="/wiki/Choi_Hong-man" title="Choi Hong-man">Choi Hong-man</a> to a mixed martial arts rules bout in a YouTube video posted on June 17, 2009. Hong-man replied to an email asking him if he would like to fight O'Neal saying "Yes, if there is a chance." Hong-man also responded to a question asking if O'Neal had a chance of winning with a simple "No."<sup id="cite_ref-219" class="reference"><a href="#cite_note-219">[219]</a></sup> On August 28, 2010, at <a href="/wiki/UFC_118" title="UFC 118">UFC 118</a> in Boston, O'Neal reiterated his desire to fight Choi in an interview.<sup id="cite_ref-220" class="reference"><a href="#cite_note-220">[220]</a></sup></p>
<h3><span class="mw-headline" id="Professional_wrestling">Professional wrestling</span></h3>
<p>A lifelong <a href="/wiki/Professional_wrestling" title="Professional wrestling">professional wrestling</a> fan, O'Neal has made numerous appearances at televised events over the years for three different promotions.</p>
<p>In 1994, O'Neal made several appearances in <a href="/wiki/World_Championship_Wrestling" title="World Championship Wrestling">World Championship Wrestling</a> (WCW), including at the <a href="/wiki/Bash_at_the_Beach_(1994)" title="Bash at the Beach (1994)">Bash at the Beach pay per view</a>, where he presented the title belt to the winner of the <a href="/wiki/WCW_World_Heavyweight_Championship" title="WCW World Heavyweight Championship">WCW World Heavyweight Championship</a> match between <a href="/wiki/Hulk_Hogan" title="Hulk Hogan">Hulk Hogan</a> and <a href="/wiki/Ric_Flair" title="Ric Flair">Ric Flair</a>.<sup id="cite_ref-221" class="reference"><a href="#cite_note-221">[221]</a></sup></p>
<p>In July 2009, O'Neal served as the guest host for a live broadcast of <a href="/wiki/WWE" title="WWE">WWE</a>'s <i><a href="/wiki/Monday_Night_Raw" class="mw-redirect" title="Monday Night Raw">Monday Night Raw</a></i>. As part of the show, O'Neal got into a physical altercation with seven-foot tall wrestler <a href="/wiki/Big_Show" title="Big Show">Big Show</a>.<sup id="cite_ref-222" class="reference"><a href="#cite_note-222">[222]</a></sup></p>
<p>In September 2012, O'Neal made a guest appearance on <a href="/wiki/Total_Nonstop_Action_Wrestling" class="mw-redirect" title="Total Nonstop Action Wrestling">Total Nonstop Action Wrestling</a>'s <i><a href="/wiki/Impact_Wrestling_(TV_series)" class="mw-redirect" title="Impact Wrestling (TV series)">Impact Wrestling</a></i> program, where he had a backstage segment with Hulk Hogan.<sup id="cite_ref-223" class="reference"><a href="#cite_note-223">[223]</a></sup></p>
<p>In April 2016, O'Neal participated in his first ever match, when he was a surprise celebrity entry in the <a href="/wiki/Andr%C3%A9_the_Giant" title="André the Giant">André the Giant</a> Memorial Battle Royal at <a href="/wiki/WrestleMania_32" title="WrestleMania 32">WrestleMania 32</a>.<sup id="cite_ref-224" class="reference"><a href="#cite_note-224">[224]</a></sup> O'Neal eliminated <a href="/wiki/Damien_Sandow" title="Damien Sandow">Damien Sandow</a>, and had another confrontation with Big Show before being eliminated himself by most of the other wrestlers.<sup id="cite_ref-225" class="reference"><a href="#cite_note-225">[225]</a></sup></p>
<p>In July at the <a href="/wiki/2016_ESPY_Awards" title="2016 ESPY Awards">2016 ESPY Awards</a> on the red carpet, Show and Shaq had another brief confrontation.<sup id="cite_ref-226" class="reference"><a href="#cite_note-226">[226]</a></sup> A match was proposed for <a href="/wiki/WrestleMania_33" title="WrestleMania 33">WrestleMania 33</a>, which Shaq accepted.<sup id="cite_ref-227" class="reference"><a href="#cite_note-227">[227]</a></sup><sup id="cite_ref-228" class="reference"><a href="#cite_note-228">[228]</a></sup> In January 2017, the two began calling each other out on social media, posting workout videos of themselves preparing for the potential match.<sup id="cite_ref-229" class="reference"><a href="#cite_note-229">[229]</a></sup><sup id="cite_ref-230" class="reference"><a href="#cite_note-230">[230]</a></sup> After weeks of discussion, the match was cancelled. According to <a href="/wiki/Dave_Meltzer" title="Dave Meltzer">Dave Meltzer</a> of <i><a href="/wiki/Wrestling_Observer_Newsletter" title="Wrestling Observer Newsletter">Wrestling Observer Newsletter</a></i>, the match was canceled due to monetary reasons, as both parties could not agree on a deal.<sup id="cite_ref-231" class="reference"><a href="#cite_note-231">[231]</a></sup> Big Show later stated it was scheduling issues on Shaq's part that caused the cancellation.<sup id="cite_ref-232" class="reference"><a href="#cite_note-232">[232]</a></sup></p>
<h3><span class="mw-headline" id="Business_ventures">Business ventures</span></h3>
<p>O'Neal is also an active businessman and investor. He was an active bond investor in the early 1990s but continued to wade into stocks and made investments in various companies such as <a href="/wiki/General_Electric" title="General Electric">General Electric</a>, <a href="/wiki/Apple_Inc." title="Apple Inc.">Apple</a>, and <a href="/wiki/PepsiCo" title="PepsiCo">PepsiCo</a>. He described what has worked best for him in stock investing was where he felt a personal connection with the company.<sup id="cite_ref-TELIS_DEMOS_233-0" class="reference"><a href="#cite_note-TELIS_DEMOS-233">[233]</a></sup> He has also been an active <a href="/wiki/Real_estate_entrepreneur" title="Real estate entrepreneur">real estate entrepreneur</a>. O'Neal was looking to expand his business ventures with real-estate development projects aimed at assisting <a href="/wiki/Orlando,_Florida" title="Orlando, Florida">Orlando</a> home owners facing <a href="/wiki/Foreclosure" title="Foreclosure">foreclosure</a>. His plans involved buying the <a href="/wiki/Mortgage_loan" title="Mortgage loan">mortgages</a> of those who had fallen into foreclosure and then selling the homes back to them under more affordable terms. He would make a small profit in return, but wanted to make an investment in Orlando and help out homeowners.<sup id="cite_ref-234" class="reference"><a href="#cite_note-234">[234]</a></sup></p>
<p>In conjunction with <a href="/w/index.php?title=Boraie_Development&amp;action=edit&amp;redlink=1" class="new" title="Boraie Development (page does not exist)">Boraie Development</a>, O'Neal has developed projects in his hometown of <a href="/wiki/Newark,_New_Jersey" title="Newark, New Jersey">Newark, New Jersey</a> including, CityPlex12 and <a href="/wiki/One_Riverview_(Newark)" title="One Riverview (Newark)">One Riverview</a>. <sup id="cite_ref-235" class="reference"><a href="#cite_note-235">[235]</a></sup><sup id="cite_ref-236" class="reference"><a href="#cite_note-236">[236]</a></sup><sup id="cite_ref-237" class="reference"><a href="#cite_note-237">[237]</a></sup><sup id="cite_ref-238" class="reference"><a href="#cite_note-238">[238]</a></sup> <sup id="cite_ref-239" class="reference"><a href="#cite_note-239">[239]</a></sup></p>
<p>O'Neal is on the <a href="/wiki/Advisory_board" title="Advisory board">advisory board</a> for <a href="/wiki/Tout_(company)" title="Tout (company)">Tout Industries</a>, a <a href="/wiki/Social_media" title="Social media">social</a> video service <a href="/wiki/Startup_company" title="Startup company">startup company</a> based in San Francisco.<sup id="cite_ref-giles_122-1" class="reference"><a href="#cite_note-giles-122">[122]</a></sup> He received the position in return for breaking news of his NBA retirement on the service.<sup id="cite_ref-240" class="reference"><a href="#cite_note-240">[240]</a></sup></p>
<p>In September 2013, O'Neal became a minority owner of the Sacramento Kings.<sup id="cite_ref-241" class="reference"><a href="#cite_note-241">[241]</a></sup></p>
<p>In June 2015, O'Neal invested in technology startup Loyale3 Holdings Inc., a San Francisco brokerage firm whose website and mobile app enables companies to sell a piece of their <a href="/wiki/Initial_Public_Offering" class="mw-redirect" title="Initial Public Offering">IPOs</a> directly to small investors who put up as a little as $100 and also allows investors to regularly buy small amounts of shares in already public companies.<sup id="cite_ref-TELIS_DEMOS_233-1" class="reference"><a href="#cite_note-TELIS_DEMOS-233">[233]</a></sup></p>
<p>O'Neal is an investor for <a href="/wiki/ESports" title="ESports">eSports</a> team <a href="/wiki/NRG_Esports" class="mw-redirect" title="NRG Esports">NRG Esports</a>.<sup id="cite_ref-242" class="reference"><a href="#cite_note-242">[242]</a></sup> He has also appeared in television commercials promoting the <i><a href="/wiki/Counter-Strike:_Global_Offensive" title="Counter-Strike: Global Offensive">Counter-Strike: Global Offensive</a></i> league <i><a href="/wiki/ELeague" class="mw-redirect" title="ELeague">ELeague</a></i>.<sup id="cite_ref-243" class="reference"><a href="#cite_note-243">[243]</a></sup></p>
<p>In late 2016 O'Neal purchased the <a href="/wiki/Krispy_Kreme" title="Krispy Kreme">Krispy Kreme</a> location at 295 <a href="/wiki/Ponce_de_Leon_Avenue" title="Ponce de Leon Avenue">Ponce de Leon Avenue</a> <a href="/wiki/Atlanta" title="Atlanta">Atlanta</a>, GA. O'Neal is also the Global Spokesperson for the company.<sup id="cite_ref-244" class="reference"><a href="#cite_note-244">[244]</a></sup></p>
<h2><span class="mw-headline" id="Personal_life">Personal life</span></h2>
<div class="thumb tright">
<div class="thumbinner" style="width:222px;"><a href="/wiki/File:Shaq_@NBA_All_star_game.jpg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Shaq_%40NBA_All_star_game.jpg/220px-Shaq_%40NBA_All_star_game.jpg" width="220" height="186" class="thumbimage" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Shaq_%40NBA_All_star_game.jpg/330px-Shaq_%40NBA_All_star_game.jpg 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/38/Shaq_%40NBA_All_star_game.jpg/440px-Shaq_%40NBA_All_star_game.jpg 2x" data-file-width="827" data-file-height="701" /></a>
<div class="thumbcaption">
<div class="magnify"><a href="/wiki/File:Shaq_@NBA_All_star_game.jpg" class="internal" title="Enlarge"></a></div>
O'Neal at the 2009 NBA All-Star game</div>
</div>
</div>
<p>O'Neal was raised by a Baptist mother and a Muslim stepfather.<sup id="cite_ref-245" class="reference"><a href="#cite_note-245">[245]</a></sup> Both <a href="/wiki/Robin_Wright_(author)" title="Robin Wright (author)">Robin Wright</a> in her book <i>Rock the Casbah</i> as well as the <i><a href="/wiki/Los_Angeles_Times" title="Los Angeles Times">Los Angeles Times</a></i> have identified O'Neal as a Muslim.<sup id="cite_ref-246" class="reference"><a href="#cite_note-246">[246]</a></sup><sup id="cite_ref-247" class="reference"><a href="#cite_note-247">[247]</a></sup><sup id="cite_ref-248" class="reference"><a href="#cite_note-248">[248]</a></sup> However, O'Neal has said, "I'm Muslim, I'm Jewish, I'm Buddhist, I'm everybody 'cause I'm a people person."<sup id="cite_ref-249" class="reference"><a href="#cite_note-249">[249]</a></sup></p>
<h3><span class="mw-headline" id="Marriage_to_Shaunie">Marriage to Shaunie</span></h3>
<p>O'Neal married <a href="/wiki/Shaunie_O%27Neal" title="Shaunie O'Neal">Shaunie Nelson</a> on December 26, 2002. The couple have four children: <a href="/wiki/Shareef_O%27Neal" title="Shareef O'Neal">Shareef</a>, Amirah, Shaqir, and Me'arah. Nelson also has one son from a previous relationship, Myles. On September 4, 2007, O'Neal filed for divorce from Shaunie in a Miami-Dade Circuit court. Shaunie later said that the couple had gotten back together and that the divorce was withdrawn. However, on November 10, 2009, Shaunie filed an intent to divorce, citing irreconcilable differences.<sup id="cite_ref-250" class="reference"><a href="#cite_note-250">[250]</a></sup></p>
<p>In 2015, Shareef was seen in high school basketball highlights as a 6-foot-7-inch (2.01&#160;m) freshman power forward, and had been described to have "polar opposite playing style to his father" due to his more athletic build and better shooting range.<sup id="cite_ref-251" class="reference"><a href="#cite_note-251">[251]</a></sup><sup id="cite_ref-252" class="reference"><a href="#cite_note-252">[252]</a></sup> Shareef, later rated as a top-30 prospect in the recruiting class of 2018, had committed to play college basketball at the <a href="/wiki/Arizona_Wildcats_men%27s_basketball" title="Arizona Wildcats men's basketball">University of Arizona</a>, but rescinded the commitment in February 2018 after Arizona head coach <a href="/wiki/Sean_Miller" title="Sean Miller">Sean Miller</a> <a href="/wiki/2017%E2%80%9318_NCAA_Division_I_men%27s_basketball_corruption_scandal#Arizona_2" title="2017–18 NCAA Division I men's basketball corruption scandal">was linked</a> to potential major violations of NCAA recruiting rules.<sup id="cite_ref-253" class="reference"><a href="#cite_note-253">[253]</a></sup></p>
<h3><span class="mw-headline" id="Girlfriends">Girlfriends</span></h3>
<p>O'Neal also has a daughter from a previous relationship with his ex-girlfriend Arnetta Yarbourgh, Taheara O'Neal.<sup id="cite_ref-254" class="reference"><a href="#cite_note-254">[254]</a></sup></p>
<p>In summer 2010, O'Neal began dating reality TV star <a href="/wiki/Nicole_Alexander" title="Nicole Alexander">Nicole "Hoopz" Alexander</a>.<sup id="cite_ref-Globe_255-0" class="reference"><a href="#cite_note-Globe-255">[255]</a></sup><sup id="cite_ref-256" class="reference"><a href="#cite_note-256">[256]</a></sup> The couple resided at O'Neal's home in <a href="/wiki/Sudbury,_Massachusetts" title="Sudbury, Massachusetts">Sudbury, Massachusetts</a>,<sup id="cite_ref-257" class="reference"><a href="#cite_note-257">[257]</a></sup> and later split in 2012.<sup id="cite_ref-258" class="reference"><a href="#cite_note-258">[258]</a></sup></p>
<p>Since 2014 has been dating Laticia Rolle, a model, originally from <a href="/wiki/Gardner,_Massachusetts" title="Gardner, Massachusetts">Gardner, Massachusetts</a>.<sup id="cite_ref-259" class="reference"><a href="#cite_note-259">[259]</a></sup></p>
<h3><span class="mw-headline" id="Outside_of_Basketball">Outside of Basketball</span></h3>
<p>In June 2005 when Hall of Fame center <a href="/wiki/George_Mikan" title="George Mikan">George Mikan</a> died, O'Neal, who considered Mikan to be a major influence, extended an offer to his family to pay all of the funeral expenses, which they accepted.<sup id="cite_ref-260" class="reference"><a href="#cite_note-260">[260]</a></sup></p>
<p>O'Neal is a 2009 inductee of the <a href="/wiki/New_Jersey_Hall_of_Fame" title="New Jersey Hall of Fame">New Jersey Hall of Fame</a>.<sup id="cite_ref-261" class="reference"><a href="#cite_note-261">[261]</a></sup> O'Neal became a <a href="/wiki/Freemason" class="mw-redirect" title="Freemason">Freemason</a> in 2011, becoming a member of Widow's Son Lodge No. 28 in Boston.<sup id="cite_ref-262" class="reference"><a href="#cite_note-262">[262]</a></sup> O'Neal is a <a href="/wiki/Prince_Hall_Freemasonry" title="Prince Hall Freemasonry">Prince Hall</a> <a href="/wiki/Freemason" class="mw-redirect" title="Freemason">Freemason</a>.<sup id="cite_ref-263" class="reference"><a href="#cite_note-263">[263]</a></sup><sup id="cite_ref-264" class="reference"><a href="#cite_note-264">[264]</a></sup><sup id="cite_ref-265" class="reference"><a href="#cite_note-265">[265]</a></sup></p>
<p>On January 31, 2012, O'Neal was honored as one of the <a href="/wiki/McDonald%27s_All-American_Game#35_Greatest_Boys_McDonald's_All_Americans" title="McDonald's All-American Game">35 Greatest McDonald's All-Americans</a>.<sup id="cite_ref-266" class="reference"><a href="#cite_note-266">[266]</a></sup></p>
<p>O'Neal is a fan of the <a href="/wiki/National_Hockey_League" title="National Hockey League">National Hockey League</a>'s <a href="/wiki/New_Jersey_Devils" title="New Jersey Devils">New Jersey Devils</a>, who play in his hometown of Newark, and has been seen at several games over the years.<sup id="cite_ref-267" class="reference"><a href="#cite_note-267">[267]</a></sup> On January 11, 2014, O'Neal performed the <a href="/wiki/Ceremonial_puck_drop" class="mw-redirect" title="Ceremonial puck drop">ceremonial first puck</a> and drove a <a href="/wiki/Ice_resurfacer" title="Ice resurfacer">Zamboni</a> for a game between the Devils and the <a href="/wiki/Florida_Panthers" title="Florida Panthers">Florida Panthers</a>.<sup id="cite_ref-268" class="reference"><a href="#cite_note-268">[268]</a></sup> O'Neal is also a fan of English <a href="/wiki/Association_football" title="Association football">football</a> club <a href="/wiki/Northampton_Town_F.C." title="Northampton Town F.C.">Northampton Town</a>, and has posted videos of support to their official <a href="/wiki/YouTube" title="YouTube">YouTube</a> page.<sup id="cite_ref-269" class="reference"><a href="#cite_note-269">[269]</a></sup></p>
<p>O'Neal endorsed <a href="/wiki/Republican_Party_of_the_United_States" class="mw-redirect" title="Republican Party of the United States">Republican</a> <a href="/wiki/New_Jersey" title="New Jersey">New Jersey</a> governor <a href="/wiki/Chris_Christie" title="Chris Christie">Chris Christie</a> in his 2013 <a href="/wiki/New_Jersey_gubernatorial_election,_2013" title="New Jersey gubernatorial election, 2013">reelection bid,</a> appearing in a television advertisement.<sup id="cite_ref-270" class="reference"><a href="#cite_note-270">[270]</a></sup></p>
<h2><span class="mw-headline" id="NBA_career_statistics">NBA career statistics</span></h2>
<div role="note" class="hatnote navigation-not-searchable">See also: <a href="/wiki/List_of_career_achievements_by_Shaquille_O%27Neal" title="List of career achievements by Shaquille O'Neal">List of career achievements by Shaquille O'Neal</a></div>
<table class="toccolours" style="font-size: 90%; white-space: nowrap;">
<tr>
<th colspan="6" style="background-color: #F2F2F2; border: 1px solid #AAAAAA;">Legend</th>
</tr>
<tr>
<td style="background-color: #F2F2F2; border: 1px solid black;">&#160;&#160;GP</td>
<td>Games played</td>
<td style="background-color: #F2F2F2; border: 1px solid black">&#160;&#160;GS&#160;</td>
<td>Games started</td>
<td style="background-color: #F2F2F2; border: 1px solid black">&#160;MPG&#160;</td>
<td>Minutes per game</td>
</tr>
<tr>
<td style="background-color: #F2F2F2; border: 1px solid black;">&#160;FG%&#160;</td>
<td style="padding-right: 8px"><a href="/wiki/Field_goal_(basketball)" title="Field goal (basketball)">Field goal</a> percentage</td>
<td style="background-color: #F2F2F2; border: 1px solid black">&#160;3P%&#160;</td>
<td style="padding-right: 8px"><a href="/wiki/Three-point_field_goal" title="Three-point field goal">3-point field goal</a> percentage</td>
<td style="background-color: #F2F2F2; border: 1px solid black">&#160;FT%&#160;</td>
<td><a href="/wiki/Free_throw" title="Free throw">Free throw</a> percentage</td>
</tr>
<tr>
<td style="background-color: #F2F2F2; border: 1px solid black;">&#160;RPG&#160;</td>
<td><a href="/wiki/Rebound_(basketball)" title="Rebound (basketball)">Rebounds</a> per game</td>
<td style="background-color: #F2F2F2; border: 1px solid black">&#160;APG&#160;</td>
<td><a href="/wiki/Assist_(basketball)" title="Assist (basketball)">Assists</a> per game</td>
<td style="background-color: #F2F2F2; border: 1px solid black">&#160;SPG&#160;</td>
<td><a href="/wiki/Steal_(basketball)" title="Steal (basketball)">Steals</a> per game</td>
</tr>
<tr>
<td style="background-color: #F2F2F2; border: 1px solid black;">&#160;BPG&#160;</td>
<td><a href="/wiki/Block_(basketball)" title="Block (basketball)">Blocks</a> per game</td>
<td style="background-color: #F2F2F2; border: 1px solid black">&#160;PPG&#160;</td>
<td>Points per game</td>
<td style="background-color: #F2F2F2; border: 1px solid black">&#160;<b>Bold</b>&#160;</td>
<td>Career high</td>
</tr>
</table>
<table class="wikitable">
<tr>
<td style="background:#afe6ba; width:3em;">†</td>
<td>Denotes seasons in which O'Neal won an <a href="/wiki/List_of_NBA_champions" title="List of NBA champions">NBA championship</a></td>
</tr>
<tr>
<td style="background:#CFECEC; width:1em">*</td>
<td>Led the league</td>
</tr>
</table>
<h3><span class="mw-headline" id="Regular_season">Regular season</span></h3>
<table class="wikitable sortable" style="font-size:95%; text-align:right;">
<tr>
<th>Year</th>
<th>Team</th>
<th><abbr title="Games played">GP</abbr></th>
<th><abbr title="Games started">GS</abbr></th>
<th><abbr title="Minutes per game">MPG</abbr></th>
<th><abbr title="Field goal percentage">FG%</abbr></th>
<th><abbr title="3-point field-goal percentage">3P%</abbr></th>
<th><abbr title="Free-throw percentage">FT%</abbr></th>
<th><abbr title="Rebounds per game">RPG</abbr></th>
<th><abbr title="Assists per game">APG</abbr></th>
<th><abbr title="Steals per game">SPG</abbr></th>
<th><abbr title="Blocks per game">BPG</abbr></th>
<th><abbr title="Points per game">PPG</abbr></th>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1992%E2%80%9393_NBA_season" title="1992–93 NBA season">1992–93</a></td>
<td style="text-align:left;"><a href="/wiki/1992%E2%80%9393_Orlando_Magic_season" title="1992–93 Orlando Magic season">Orlando</a></td>
<td><b>81</b></td>
<td><b>81</b></td>
<td>37.9</td>
<td>.562</td>
<td>.000</td>
<td>.592</td>
<td><b>13.9</b></td>
<td>1.9</td>
<td>.7</td>
<td><b>3.5</b></td>
<td>23.4</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1993%E2%80%9394_NBA_season" title="1993–94 NBA season">1993–94</a></td>
<td style="text-align:left;"><a href="/wiki/1993%E2%80%9394_Orlando_Magic_season" title="1993–94 Orlando Magic season">Orlando</a></td>
<td><b>81</b></td>
<td><b>81</b></td>
<td>39.8</td>
<td style="background:#cfecec;">.599*</td>
<td>.000</td>
<td>.554</td>
<td>13.2</td>
<td>2.4</td>
<td><b>.9</b></td>
<td>2.9</td>
<td>29.3</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1994%E2%80%9395_NBA_season" title="1994–95 NBA season">1994–95</a></td>
<td style="text-align:left;"><a href="/wiki/1994%E2%80%9395_Orlando_Magic_season" title="1994–95 Orlando Magic season">Orlando</a></td>
<td>79</td>
<td>79</td>
<td>37.0</td>
<td>.583</td>
<td>.000</td>
<td>.533</td>
<td>11.4</td>
<td>2.7</td>
<td><b>.9</b></td>
<td>2.4</td>
<td style="background:#cfecec;">29.3*</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1995%E2%80%9396_NBA_season" title="1995–96 NBA season">1995–96</a></td>
<td style="text-align:left;"><a href="/wiki/1995%E2%80%9396_Orlando_Magic_season" title="1995–96 Orlando Magic season">Orlando</a></td>
<td>54</td>
<td>52</td>
<td>36.0</td>
<td>.573</td>
<td><b>.500</b></td>
<td>.487</td>
<td>11.0</td>
<td>2.9</td>
<td>.6</td>
<td>2.1</td>
<td>26.6</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1996%E2%80%9397_NBA_season" title="1996–97 NBA season">1996–97</a></td>
<td style="text-align:left;"><a href="/wiki/1996%E2%80%9397_Los_Angeles_Lakers_season" title="1996–97 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>51</td>
<td>51</td>
<td>38.1</td>
<td>.557</td>
<td>.000</td>
<td>.484</td>
<td>12.5</td>
<td>3.1</td>
<td><b>.9</b></td>
<td>2.9</td>
<td>26.2</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1997%E2%80%9398_NBA_season" title="1997–98 NBA season">1997–98</a></td>
<td style="text-align:left;"><a href="/wiki/1997%E2%80%9398_Los_Angeles_Lakers_season" title="1997–98 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>60</td>
<td>57</td>
<td>36.3</td>
<td style="background:#cfecec;">.584*</td>
<td>.000</td>
<td>.527</td>
<td>11.4</td>
<td>2.4</td>
<td>.7</td>
<td>2.4</td>
<td>28.3</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1998%E2%80%9399_NBA_season" title="1998–99 NBA season">1998–99</a></td>
<td style="text-align:left;"><a href="/wiki/1998%E2%80%9399_Los_Angeles_Lakers_season" title="1998–99 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>49</td>
<td>49</td>
<td>34.8</td>
<td style="background:#cfecec;">.576*</td>
<td>.000</td>
<td>.540</td>
<td>10.7</td>
<td>2.3</td>
<td>.7</td>
<td>1.7</td>
<td>26.3</td>
</tr>
<tr>
<td style="text-align:left;background:#afe6ba;"><a href="/wiki/1999%E2%80%932000_NBA_season" title="1999–2000 NBA season">1999–00</a>†</td>
<td style="text-align:left;"><a href="/wiki/1999%E2%80%932000_Los_Angeles_Lakers_season" title="1999–2000 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>79</td>
<td>79</td>
<td><b>40.0</b></td>
<td style="background:#cfecec;">.574*</td>
<td>.000</td>
<td>.524</td>
<td>13.6</td>
<td><b>3.8</b></td>
<td>.5</td>
<td>3.0</td>
<td style="background:#cfecec;"><b>29.7</b>*</td>
</tr>
<tr>
<td style="text-align:left;background:#afe6ba;"><a href="/wiki/2000%E2%80%9301_NBA_season" title="2000–01 NBA season">2000–01</a>†</td>
<td style="text-align:left;"><a href="/wiki/2000%E2%80%9301_Los_Angeles_Lakers_season" title="2000–01 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>74</td>
<td>74</td>
<td>39.5</td>
<td style="background:#cfecec;">.572*</td>
<td>.000</td>
<td>.513</td>
<td>12.7</td>
<td>3.7</td>
<td>.6</td>
<td>2.8</td>
<td>28.7</td>
</tr>
<tr>
<td style="text-align:left;background:#afe6ba;"><a href="/wiki/2001%E2%80%9302_NBA_season" title="2001–02 NBA season">2001–02</a>†</td>
<td style="text-align:left;"><a href="/wiki/2001%E2%80%9302_Los_Angeles_Lakers_season" title="2001–02 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>67</td>
<td>66</td>
<td>36.1</td>
<td style="background:#cfecec;">.579*</td>
<td>.000</td>
<td>.555</td>
<td>10.7</td>
<td>3.0</td>
<td>.6</td>
<td>2.0</td>
<td>27.2</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2002%E2%80%9303_NBA_season" title="2002–03 NBA season">2002–03</a></td>
<td style="text-align:left;"><a href="/wiki/2002%E2%80%9303_Los_Angeles_Lakers_season" title="2002–03 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>67</td>
<td>66</td>
<td>37.8</td>
<td>.574</td>
<td>.000</td>
<td><b>.622</b></td>
<td>11.1</td>
<td>3.1</td>
<td>.6</td>
<td>2.4</td>
<td>27.5</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2003%E2%80%9304_NBA_season" title="2003–04 NBA season">2003–04</a></td>
<td style="text-align:left;"><a href="/wiki/2003%E2%80%9304_Los_Angeles_Lakers_season" title="2003–04 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>67</td>
<td>67</td>
<td>36.8</td>
<td style="background:#cfecec;">.584*</td>
<td>.000</td>
<td>.490</td>
<td>11.5</td>
<td>2.9</td>
<td>.5</td>
<td>2.5</td>
<td>21.5</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2004%E2%80%9305_NBA_season" title="2004–05 NBA season">2004–05</a></td>
<td style="text-align:left;"><a href="/wiki/2004%E2%80%9305_Miami_Heat_season" title="2004–05 Miami Heat season">Miami</a></td>
<td>73</td>
<td>73</td>
<td>34.1</td>
<td style="background:#cfecec;">.601*</td>
<td>.000</td>
<td>.461</td>
<td>10.4</td>
<td>2.7</td>
<td>.5</td>
<td>2.3</td>
<td>22.9</td>
</tr>
<tr>
<td style="text-align:left;background:#afe6ba;"><a href="/wiki/2005%E2%80%9306_NBA_season" title="2005–06 NBA season">2005–06</a>†</td>
<td style="text-align:left;"><a href="/wiki/2005%E2%80%9306_Miami_Heat_season" title="2005–06 Miami Heat season">Miami</a></td>
<td>59</td>
<td>58</td>
<td>30.6</td>
<td style="background:#cfecec;">.600*</td>
<td>.000</td>
<td>.469</td>
<td>9.2</td>
<td>1.9</td>
<td>.4</td>
<td>1.8</td>
<td>20.0</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2006%E2%80%9307_NBA_season" title="2006–07 NBA season">2006–07</a></td>
<td style="text-align:left;"><a href="/wiki/2006%E2%80%9307_Miami_Heat_season" title="2006–07 Miami Heat season">Miami</a></td>
<td>40</td>
<td>39</td>
<td>28.4</td>
<td>.591</td>
<td>.000</td>
<td>.422</td>
<td>7.4</td>
<td>2.0</td>
<td>.2</td>
<td>1.4</td>
<td>17.3</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2007%E2%80%9308_NBA_season" title="2007–08 NBA season">2007–08</a></td>
<td style="text-align:left;"><a href="/wiki/2007%E2%80%9308_Miami_Heat_season" title="2007–08 Miami Heat season">Miami</a></td>
<td>33</td>
<td>33</td>
<td>28.6</td>
<td>.581</td>
<td>.000</td>
<td>.494</td>
<td>7.8</td>
<td>1.4</td>
<td>.6</td>
<td>1.6</td>
<td>14.2</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2007%E2%80%9308_NBA_season" title="2007–08 NBA season">2007–08</a></td>
<td style="text-align:left;"><a href="/wiki/2007%E2%80%9308_Phoenix_Suns_season" title="2007–08 Phoenix Suns season">Phoenix</a></td>
<td>28</td>
<td>28</td>
<td>28.7</td>
<td>.611</td>
<td>.000</td>
<td>.513</td>
<td>10.6</td>
<td>1.7</td>
<td>.5</td>
<td>1.2</td>
<td>12.9</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2008%E2%80%9309_NBA_season" title="2008–09 NBA season">2008–09</a></td>
<td style="text-align:left;"><a href="/wiki/2008%E2%80%9309_Phoenix_Suns_season" title="2008–09 Phoenix Suns season">Phoenix</a></td>
<td>75</td>
<td>75</td>
<td>30.0</td>
<td style="background:#cfecec;">.609*</td>
<td>.000</td>
<td>.595</td>
<td>8.4</td>
<td>1.7</td>
<td>.6</td>
<td>1.4</td>
<td>17.8</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2009%E2%80%9310_NBA_season" title="2009–10 NBA season">2009–10</a></td>
<td style="text-align:left;"><a href="/wiki/2009%E2%80%9310_Cleveland_Cavaliers_season" title="2009–10 Cleveland Cavaliers season">Cleveland</a></td>
<td>53</td>
<td>53</td>
<td>23.4</td>
<td>.566</td>
<td>.000</td>
<td>.496</td>
<td>6.7</td>
<td>1.5</td>
<td>.3</td>
<td>1.2</td>
<td>12.0</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2010%E2%80%9311_NBA_season" title="2010–11 NBA season">2010–11</a></td>
<td style="text-align:left;"><a href="/wiki/2010%E2%80%9311_Boston_Celtics_season" title="2010–11 Boston Celtics season">Boston</a></td>
<td>37</td>
<td>36</td>
<td>20.3</td>
<td><b>.667</b></td>
<td>.000</td>
<td>.557</td>
<td>4.8</td>
<td>.7</td>
<td>.4</td>
<td>1.1</td>
<td>9.2</td>
</tr>
<tr class="sortbottom">
<td style="text-align:center;" colspan="2">Career</td>
<td>1,207</td>
<td>1,197</td>
<td>34.7</td>
<td>.582</td>
<td>.045</td>
<td>.527</td>
<td>10.9</td>
<td>2.5</td>
<td>.6</td>
<td>2.3</td>
<td>23.7</td>
</tr>
<tr class="sortbottom">
<td style="text-align:center;" colspan="2">All-Star</td>
<td>12</td>
<td>9</td>
<td>22.8</td>
<td>.551</td>
<td>.000</td>
<td>.452</td>
<td>8.1</td>
<td>1.4</td>
<td>1.1</td>
<td>1.6</td>
<td>16.8</td>
</tr>
</table>
<h3><span class="mw-headline" id="Playoffs">Playoffs</span></h3>
<table class="wikitable sortable" style="font-size:95%; text-align:right;">
<tr>
<th>Year</th>
<th>Team</th>
<th><abbr title="Games played">GP</abbr></th>
<th><abbr title="Games started">GS</abbr></th>
<th><abbr title="Minutes per game">MPG</abbr></th>
<th><abbr title="Field goal percentage">FG%</abbr></th>
<th><abbr title="3-point field-goal percentage">3P%</abbr></th>
<th><abbr title="Free-throw percentage">FT%</abbr></th>
<th><abbr title="Rebounds per game">RPG</abbr></th>
<th><abbr title="Assists per game">APG</abbr></th>
<th><abbr title="Steals per game">SPG</abbr></th>
<th><abbr title="Blocks per game">BPG</abbr></th>
<th><abbr title="Points per game">PPG</abbr></th>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1994_NBA_Playoffs" title="1994 NBA Playoffs">1994</a></td>
<td style="text-align:left;"><a href="/wiki/1993%E2%80%9394_Orlando_Magic_season" title="1993–94 Orlando Magic season">Orlando</a></td>
<td>3</td>
<td>3</td>
<td>42.0</td>
<td>.511</td>
<td>.000</td>
<td>.471</td>
<td>13.3</td>
<td>2.3</td>
<td>.7</td>
<td><b>3.0</b></td>
<td>20.7</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1995_NBA_Playoffs" title="1995 NBA Playoffs">1995</a></td>
<td style="text-align:left;"><a href="/wiki/1994%E2%80%9395_Orlando_Magic_season" title="1994–95 Orlando Magic season">Orlando</a></td>
<td>21</td>
<td>21</td>
<td>38.3</td>
<td>.577</td>
<td>.000</td>
<td>.571</td>
<td>11.9</td>
<td>3.3</td>
<td>.9</td>
<td>1.9</td>
<td>25.7</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1996_NBA_Playoffs" title="1996 NBA Playoffs">1996</a></td>
<td style="text-align:left;"><a href="/wiki/1995%E2%80%9396_Orlando_Magic_season" title="1995–96 Orlando Magic season">Orlando</a></td>
<td>12</td>
<td>12</td>
<td>38.3</td>
<td>.606</td>
<td>.000</td>
<td>.393</td>
<td>10.0</td>
<td><b>4.6</b></td>
<td>.8</td>
<td>1.3</td>
<td>25.8</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1997_NBA_Playoffs" title="1997 NBA Playoffs">1997</a></td>
<td style="text-align:left;"><a href="/wiki/1996%E2%80%9397_Los_Angeles_Lakers_season" title="1996–97 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>9</td>
<td>9</td>
<td>36.2</td>
<td>.514</td>
<td>.000</td>
<td>.610</td>
<td>10.6</td>
<td>3.2</td>
<td>.6</td>
<td>1.9</td>
<td>26.9</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1998_NBA_Playoffs" title="1998 NBA Playoffs">1998</a></td>
<td style="text-align:left;"><a href="/wiki/1997%E2%80%9398_Los_Angeles_Lakers_season" title="1997–98 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>13</td>
<td>13</td>
<td>38.5</td>
<td><b>.612</b></td>
<td>.000</td>
<td>.503</td>
<td>10.2</td>
<td>2.9</td>
<td>.5</td>
<td>2.6</td>
<td>30.5</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/1999_NBA_Playoffs" title="1999 NBA Playoffs">1999</a></td>
<td style="text-align:left;"><a href="/wiki/1998%E2%80%9399_Los_Angeles_Lakers_season" title="1998–99 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>8</td>
<td>8</td>
<td>39.4</td>
<td>.510</td>
<td>.000</td>
<td>.466</td>
<td>11.6</td>
<td>2.3</td>
<td>.9</td>
<td>2.9</td>
<td>26.6</td>
</tr>
<tr>
<td style="text-align:left;background:#afe6ba;"><a href="/wiki/2000_NBA_Playoffs" title="2000 NBA Playoffs">2000</a>†</td>
<td style="text-align:left;"><a href="/wiki/1999%E2%80%932000_Los_Angeles_Lakers_season" title="1999–2000 Los Angeles Lakers season">L.A. Lakers</a></td>
<td><b>23</b></td>
<td><b>23</b></td>
<td><b>43.5</b></td>
<td>.566</td>
<td>.000</td>
<td>.456</td>
<td><b>15.4</b></td>
<td>3.1</td>
<td>.6</td>
<td>2.4</td>
<td><b>30.7</b></td>
</tr>
<tr>
<td style="text-align:left;background:#afe6ba;"><a href="/wiki/2001_NBA_Playoffs" title="2001 NBA Playoffs">2001</a>†</td>
<td style="text-align:left;"><a href="/wiki/2000%E2%80%9301_Los_Angeles_Lakers_season" title="2000–01 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>16</td>
<td>16</td>
<td>42.3</td>
<td>.555</td>
<td>.000</td>
<td>.525</td>
<td><b>15.4</b></td>
<td>3.2</td>
<td>.4</td>
<td>2.4</td>
<td>30.4</td>
</tr>
<tr>
<td style="text-align:left;background:#afe6ba;"><a href="/wiki/2002_NBA_Playoffs" title="2002 NBA Playoffs">2002</a>†</td>
<td style="text-align:left;"><a href="/wiki/2001%E2%80%9302_Los_Angeles_Lakers_season" title="2001–02 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>19</td>
<td>19</td>
<td>40.8</td>
<td>.529</td>
<td>.000</td>
<td>.649</td>
<td>12.6</td>
<td>2.8</td>
<td>.5</td>
<td>2.5</td>
<td>28.5</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2003_NBA_Playoffs" title="2003 NBA Playoffs">2003</a></td>
<td style="text-align:left;"><a href="/wiki/2002%E2%80%9303_Los_Angeles_Lakers_season" title="2002–03 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>12</td>
<td>12</td>
<td>40.1</td>
<td>.535</td>
<td>.000</td>
<td>.621</td>
<td>14.8</td>
<td>3.7</td>
<td>.6</td>
<td>2.8</td>
<td>27.0</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2004_NBA_Playoffs" title="2004 NBA Playoffs">2004</a></td>
<td style="text-align:left;"><a href="/wiki/2003%E2%80%9304_Los_Angeles_Lakers_season" title="2003–04 Los Angeles Lakers season">L.A. Lakers</a></td>
<td>22</td>
<td>22</td>
<td>41.7</td>
<td>.593</td>
<td>.000</td>
<td>.429</td>
<td>13.2</td>
<td>2.5</td>
<td>.3</td>
<td>2.8</td>
<td>21.5</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2005_NBA_Playoffs" title="2005 NBA Playoffs">2005</a></td>
<td style="text-align:left;"><a href="/wiki/2004%E2%80%9305_Miami_Heat_season" title="2004–05 Miami Heat season">Miami</a></td>
<td>13</td>
<td>13</td>
<td>33.2</td>
<td>.558</td>
<td>.000</td>
<td>.472</td>
<td>7.8</td>
<td>1.9</td>
<td>.4</td>
<td>1.5</td>
<td>19.4</td>
</tr>
<tr>
<td style="text-align:left;background:#afe6ba;"><a href="/wiki/2006_NBA_Playoffs" title="2006 NBA Playoffs">2006</a>†</td>
<td style="text-align:left;"><a href="/wiki/2005%E2%80%9306_Miami_Heat_season" title="2005–06 Miami Heat season">Miami</a></td>
<td><b>23</b></td>
<td><b>23</b></td>
<td>33.0</td>
<td><b>.612</b></td>
<td>.000</td>
<td>.374</td>
<td>9.8</td>
<td>1.7</td>
<td>.5</td>
<td>1.5</td>
<td>18.4</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2007_NBA_Playoffs" title="2007 NBA Playoffs">2007</a></td>
<td style="text-align:left;"><a href="/wiki/2006%E2%80%9307_Miami_Heat_season" title="2006–07 Miami Heat season">Miami</a></td>
<td>4</td>
<td>4</td>
<td>30.3</td>
<td>.559</td>
<td>.000</td>
<td>.333</td>
<td>8.5</td>
<td>1.3</td>
<td>.3</td>
<td>1.5</td>
<td>18.8</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2008_NBA_Playoffs" title="2008 NBA Playoffs">2008</a></td>
<td style="text-align:left;"><a href="/wiki/2007%E2%80%9308_Phoenix_Suns_season" title="2007–08 Phoenix Suns season">Phoenix</a></td>
<td>5</td>
<td>5</td>
<td>30.0</td>
<td>.440</td>
<td>.000</td>
<td>.500</td>
<td>9.2</td>
<td>1.0</td>
<td><b>1.0</b></td>
<td>2.6</td>
<td>15.2</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2010_NBA_Playoffs" title="2010 NBA Playoffs">2010</a></td>
<td style="text-align:left;"><a href="/wiki/2009%E2%80%9310_Cleveland_Cavaliers_season" title="2009–10 Cleveland Cavaliers season">Cleveland</a></td>
<td>11</td>
<td>11</td>
<td>22.1</td>
<td>.516</td>
<td>.000</td>
<td><b>.660</b></td>
<td>5.5</td>
<td>1.4</td>
<td>.2</td>
<td>1.2</td>
<td>11.5</td>
</tr>
<tr>
<td style="text-align:left;"><a href="/wiki/2011_NBA_Playoffs" title="2011 NBA Playoffs">2011</a></td>
<td style="text-align:left;"><a href="/wiki/2010%E2%80%9311_Boston_Celtics_season" title="2010–11 Boston Celtics season">Boston</a></td>
<td>2</td>
<td>0</td>
<td>6.0</td>
<td>.500</td>
<td>.000</td>
<td>.000</td>
<td>.0</td>
<td>.5</td>
<td>.5</td>
<td>.0</td>
<td>1.0</td>
</tr>
<tr class="sortbottom">
<td style="text-align:center;" colspan="2">Career</td>
<td>216</td>
<td>214</td>
<td>37.5</td>
<td>.563</td>
<td>.000</td>
<td>.504</td>
<td>11.6</td>
<td>2.7</td>
<td>.5</td>
<td>2.1</td>
<td>24.3</td>
</tr>
</table>
<h2><span class="mw-headline" id="Discography">Discography</span></h2>
<div role="note" class="hatnote navigation-not-searchable">Main article: <a href="/wiki/Shaquille_O%27Neal_discography" title="Shaquille O'Neal discography">Shaquille O'Neal discography</a></div>
<ul>
<li><i><a href="/wiki/Shaq_Diesel" title="Shaq Diesel">Shaq Diesel</a></i> (1993)</li>
<li><i><a href="/wiki/Shaq_Fu:_Da_Return" title="Shaq Fu: Da Return">Shaq Fu: Da Return</a></i> (1994)</li>
<li><i><a href="/wiki/You_Can%27t_Stop_the_Reign" title="You Can't Stop the Reign">You Can't Stop the Reign</a></i> (1996)</li>
<li><i><a href="/wiki/Respect_(Shaquille_O%27Neal_album)" title="Respect (Shaquille O'Neal album)">Respect</a></i> (1998)</li>
<li><i><a href="/wiki/Shaquille_O%27Neal_Presents_His_Superfriends,_Vol._1" title="Shaquille O'Neal Presents His Superfriends, Vol. 1">Shaquille O'Neal Presents His Superfriends, Vol. 1</a></i> (Unreleased)</li>
</ul>
<h2><span class="mw-headline" id="Filmography">Filmography</span></h2>
<h3><span class="mw-headline" id="Films">Films</span></h3>
<table class="wikitable sortable">
<tr>
<th>Year</th>
<th>Title</th>
<th>Role</th>
<th>Notes</th>
</tr>
<tr>
<td>1994</td>
<td><i><a href="/wiki/Blue_Chips" title="Blue Chips">Blue Chips</a></i></td>
<td>Neon Boudeaux</td>
<td></td>
</tr>
<tr>
<td>1996</td>
<td><i><a href="/wiki/Kazaam" title="Kazaam">Kazaam</a></i></td>
<td>Kazaam</td>
<td></td>
</tr>
<tr>
<td rowspan="2">1997</td>
<td><i><a href="/wiki/Good_Burger" title="Good Burger">Good Burger</a></i></td>
<td>Himself</td>
<td></td>
</tr>
<tr>
<td><i><a href="/wiki/Steel_(1997_film)" title="Steel (1997 film)">Steel</a></i></td>
<td><a href="/wiki/Steel_(John_Henry_Irons)" title="Steel (John Henry Irons)">John Henry Irons / Steel</a></td>
<td></td>
</tr>
<tr>
<td>1998</td>
<td><i><a href="/wiki/He_Got_Game" title="He Got Game">He Got Game</a></i></td>
<td>Himself</td>
<td></td>
</tr>
<tr>
<td rowspan="2">2001</td>
<td><i><a href="/wiki/The_Wash_(2001_film)" title="The Wash (2001 film)">The Wash</a></i></td>
<td>Norman</td>
<td></td>
</tr>
<tr>
<td><i><a href="/wiki/Freddy_Got_Fingered" title="Freddy Got Fingered">Freddy Got Fingered</a></i></td>
<td rowspan="5">Himself</td>
<td></td>
</tr>
<tr>
<td>2004</td>
<td><i><a href="/wiki/After_the_Sunset" title="After the Sunset">After the Sunset</a></i></td>
<td></td>
</tr>
<tr>
<td>2006</td>
<td><i><a href="/wiki/Scary_Movie_4" title="Scary Movie 4">Scary Movie 4</a></i></td>
<td></td>
</tr>
<tr>
<td>2008</td>
<td><i><a href="/wiki/The_House_Bunny" title="The House Bunny">The House Bunny</a></i></td>
<td></td>
</tr>
<tr>
<td>2011</td>
<td><i><a href="/wiki/Jack_and_Jill_(2011_film)" title="Jack and Jill (2011 film)">Jack and Jill</a></i></td>
<td></td>
</tr>
<tr>
<td rowspan="2">2013</td>
<td><i><a href="/wiki/Grown_Ups_2" title="Grown Ups 2">Grown Ups 2</a></i></td>
<td>Officer Fluzoo</td>
<td></td>
</tr>
<tr>
<td><i><a href="/wiki/The_Smurfs_2" title="The Smurfs 2">The Smurfs 2</a></i></td>
<td>Smooth Smurf (Voice)</td>
<td></td>
</tr>
<tr>
<td rowspan="2">2014</td>
<td><i><a href="/wiki/The_Lego_Movie" title="The Lego Movie">The Lego Movie</a></i></td>
<td>Himself (Voice)</td>
<td></td>
</tr>
<tr>
<td><i><a href="/wiki/Blended_(film)" title="Blended (film)">Blended</a></i></td>
<td>Doug</td>
<td></td>
</tr>
<tr>
<td>2017</td>
<td><i><a href="/wiki/Show_Dogs" title="Show Dogs">Show Dogs</a></i></td>
<td>Karma (Voice)</td>
<td></td>
</tr>
<tr>
<td>2018</td>
<td><i><a href="/wiki/Uncle_Drew_(film)" class="mw-redirect" title="Uncle Drew (film)">Uncle Drew</a></i></td>
<td>Big Fella</td>
<td>Post-production</td>
</tr>
</table>
<h3><span class="mw-headline" id="Television_2">Television</span></h3>
<table class="wikitable sortable">
<tr>
<th>Year</th>
<th>Title</th>
<th>Role</th>
<th>Notes</th>
</tr>
<tr>
<td>1996</td>
<td><i><a href="/wiki/Arliss" title="Arliss">Arliss</a></i></td>
<td rowspan="13">Himself</td>
<td>Episode: "A Man of Our Times"</td>
</tr>
<tr>
<td rowspan="3">2001</td>
<td><i><a href="/wiki/For_Your_Love_(TV_series)" title="For Your Love (TV series)">For Your Love</a></i></td>
<td>Episode:" The Model Client"</td>
</tr>
<tr>
<td><i><a href="/wiki/My_Wife_and_Kids" title="My Wife and Kids">My Wife and Kids</a></i></td>
<td>2 Episodes</td>
</tr>
<tr>
<td><i><a href="/wiki/Curb_Your_Enthusiasm" title="Curb Your Enthusiasm">Curb Your Enthusiasm</a></i></td>
<td>Episode: "Shaq"</td>
</tr>
<tr>
<td>2002</td>
<td><i><a href="/wiki/Static_Shock" title="Static Shock">Static Shock</a></i></td>
<td>Episode: "Static Shaq"</td>
</tr>
<tr>
<td>2002–04</td>
<td><i><a href="/wiki/The_Parkers" title="The Parkers">The Parkers</a></i></td>
<td>2 Episodes</td>
</tr>
<tr>
<td>2003</td>
<td><i><a href="/wiki/The_Bernie_Mac_Show" title="The Bernie Mac Show">The Bernie Mac Show</a></i></td>
<td>Episode: "Eye of the Tiger"</td>
</tr>
<tr>
<td rowspan="2">2004</td>
<td><i><a href="/wiki/The_Tracy_Morgan_Show" title="The Tracy Morgan Show">The Tracy Morgan Show</a></i></td>
<td>Episode: "Career Day"</td>
</tr>
<tr>
<td><i><a href="/wiki/Johnny_Bravo" title="Johnny Bravo">Johnny Bravo</a>'</i></td>
<td>Episode: "Back on Shaq"</td>
</tr>
<tr>
<td>2009</td>
<td><i><a href="/wiki/WWE_Raw" title="WWE Raw">WWE Raw</a></i></td>
<td></td>
</tr>
<tr>
<td>2011</td>
<td><i><a href="/wiki/The_Cleveland_Show" title="The Cleveland Show">The Cleveland Show</a></i></td>
<td>Episode: "A Short Story and a Tall Tale"</td>
</tr>
<tr>
<td rowspan="3">2013</td>
<td><i><a href="/wiki/Real_Husbands_of_Hollywood" title="Real Husbands of Hollywood">Real Husbands of Hollywood</a></i></td>
<td>Episode: "Retreat for Couples"</td>
</tr>
<tr>
<td><i><a href="/wiki/Jimmy_Kimmel_Live!" title="Jimmy Kimmel Live!">Jimmy Kimmel Live!</a></i></td>
<td>2 Episodes</td>
</tr>
<tr>
<td><i><a href="/wiki/Southland_(TV_series)" title="Southland (TV series)">Southland</a></i></td>
<td>Detective Earl Dayton</td>
<td>Episode: "The Felix Paradox"</td>
</tr>
<tr>
<td>2014</td>
<td><i><a href="/wiki/Uncle_Grandpa" title="Uncle Grandpa">Uncle Grandpa</a></i></td>
<td rowspan="5">Himself</td>
<td>Episode: "The Perfect Kid"</td>
</tr>
<tr>
<td>2015–16</td>
<td><i><a href="/wiki/Fresh_Off_the_Boat" title="Fresh Off the Boat">Fresh Off the Boat</a></i></td>
<td>2 Episodes</td>
</tr>
<tr>
<td>2015</td>
<td><i><a href="/wiki/Off_to_School" title="Off to School">Off to School</a></i></td>
<td>Episodes 59-62</td>
</tr>
<tr>
<td>2017–18</td>
<td><i><a href="/wiki/The_Simpsons" title="The Simpsons">The Simpsons</a></i></td>
<td></td>
</tr>
<tr>
<td>2017</td>
<td><i><a href="/wiki/Jimmy_Kimmel_Live!" title="Jimmy Kimmel Live!">Jimmy Kimmel Live!</a></i></td>
<td>Guest Host, October 30, 2017<sup id="cite_ref-271" class="reference"><a href="#cite_note-271">[271]</a></sup></td>
</tr>
</table>
<h3><span class="mw-headline" id="Awards_and_nominations">Awards and nominations</span></h3>
<table class="wikitable">
<tr>
<th scope="col" style="width:1em;">Year</th>
<th scope="col" style="width:18em;">Nominated work</th>
<th scope="col" style="width:22em;">Category</th>
<th scope="col" style="width:7em;">Result</th>
</tr>
<tr>
<th scope="col" colspan="6"><a href="/wiki/CableACE_Awards" class="mw-redirect" title="CableACE Awards">CableACE Awards</a></th>
</tr>
<tr>
<td><a href="/wiki/18th_CableACE_Awards" title="18th CableACE Awards">1996</a></td>
<td><i>Sports Theater with Shaquille O'Neal</i></td>
<td><a href="/wiki/18th_CableACE_Awards" title="18th CableACE Awards">Children's Special - 7 and Older</a></td>
<td style="background: #99FF99; color: black; vertical-align: middle; text-align: center;" class="yes table-yes2">Won</td>
</tr>
<tr>
<th scope="col" colspan="6"><a href="/wiki/Golden_Raspberry_Awards" title="Golden Raspberry Awards">Golden Raspberry Awards</a></th>
</tr>
<tr>
<td><a href="/wiki/15th_Golden_Raspberry_Awards" title="15th Golden Raspberry Awards">1995</a></td>
<td><i><a href="/wiki/Blue_Chips" title="Blue Chips">Blue Chips</a></i></td>
<td><a href="/wiki/Golden_Raspberry_Award_for_Worst_New_Star" title="Golden Raspberry Award for Worst New Star">Worst New Star</a></td>
<td style="background: #FDD; color: black; vertical-align: middle; text-align: center;" class="no table-no2">Nominated</td>
</tr>
<tr>
<td><a href="/wiki/18th_Golden_Raspberry_Awards" title="18th Golden Raspberry Awards">1998</a></td>
<td><i><a href="/wiki/Steel_(1997_film)" title="Steel (1997 film)">Steel</a></i></td>
<td><a href="/wiki/Golden_Raspberry_Award_for_Worst_Actor" title="Golden Raspberry Award for Worst Actor">Worst Actor</a></td>
<td style="background: #FDD; color: black; vertical-align: middle; text-align: center;" class="no table-no2">Nominated</td>
</tr>
<tr>
<td><a href="/wiki/35th_Golden_Raspberry_Awards" title="35th Golden Raspberry Awards">2015</a></td>
<td><i><a href="/wiki/Blended_(film)" title="Blended (film)">Blended</a></i></td>
<td><a href="/wiki/Golden_Raspberry_Award_for_Worst_Supporting_Actor" title="Golden Raspberry Award for Worst Supporting Actor">Worst Supporting Actor</a></td>
<td style="background: #FDD; color: black; vertical-align: middle; text-align: center;" class="no table-no2">Nominated</td>
</tr>
</table>
<h2><span class="mw-headline" id="Bibliography">Bibliography</span></h2>
<ul>
<li><i>Shaq Attaq!</i> (1994)</li>
<li><i>A Good Reason to Look Up</i> (1998)</li>
<li><i>Shaq and the Beanstalk and Other Very Tall Tales</i> (1999)</li>
<li><i>Shaq Talks Back</i> (2002)</li>
<li><i>Shaq Uncut: My Story</i> (2011)</li>
</ul>
<h2><span class="mw-headline" id="See_also">See also</span></h2>
<div role="navigation" aria-label="Portals" class="noprint portal plainlist tright" style="margin:0.5em 0 0.5em 1em;border:solid #aaa 1px">
<ul style="display:table;box-sizing:border-box;padding:0.1em;max-width:175px;background:#f9f9f9;font-size:85%;line-height:110%;font-style:italic;font-weight:bold">
<li style="display:table-row"><span style="display:table-cell;padding:0.2em;vertical-align:middle;text-align:center"><a href="/wiki/File:Map_of_USA_and_Canada,_NBA,_zoom.svg" class="image"><img alt="icon" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/79/Map_of_USA_and_Canada%2C_NBA%2C_zoom.svg/32px-Map_of_USA_and_Canada%2C_NBA%2C_zoom.svg.png" width="32" height="23" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/79/Map_of_USA_and_Canada%2C_NBA%2C_zoom.svg/48px-Map_of_USA_and_Canada%2C_NBA%2C_zoom.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/79/Map_of_USA_and_Canada%2C_NBA%2C_zoom.svg/64px-Map_of_USA_and_Canada%2C_NBA%2C_zoom.svg.png 2x" data-file-width="1100" data-file-height="780" /></a></span><span style="display:table-cell;padding:0.2em 0.2em 0.2em 0.3em;vertical-align:middle"><a href="/wiki/Portal:National_Basketball_Association" title="Portal:National Basketball Association">National Basketball Association portal</a></span></li>
</ul>
</div>
<ul>
<li><a href="/wiki/List_of_National_Basketball_Association_career_scoring_leaders" title="List of National Basketball Association career scoring leaders">List of National Basketball Association career scoring leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_rebounding_leaders" title="List of National Basketball Association career rebounding leaders">List of National Basketball Association career rebounding leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_blocks_leaders" title="List of National Basketball Association career blocks leaders">List of National Basketball Association career blocks leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_turnovers_leaders" title="List of National Basketball Association career turnovers leaders">List of National Basketball Association career turnovers leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_free_throw_scoring_leaders" title="List of National Basketball Association career free throw scoring leaders">List of National Basketball Association career free throw scoring leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_minutes_played_leaders" title="List of National Basketball Association career minutes played leaders">List of National Basketball Association career minutes played leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_playoff_scoring_leaders" title="List of National Basketball Association career playoff scoring leaders">List of National Basketball Association career playoff scoring leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_playoff_rebounding_leaders" title="List of National Basketball Association career playoff rebounding leaders">List of National Basketball Association career playoff rebounding leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_playoff_blocks_leaders" title="List of National Basketball Association career playoff blocks leaders">List of National Basketball Association career playoff blocks leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_playoff_turnovers_leaders" title="List of National Basketball Association career playoff turnovers leaders">List of National Basketball Association career playoff turnovers leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_career_playoff_free_throw_scoring_leaders" title="List of National Basketball Association career playoff free throw scoring leaders">List of National Basketball Association career playoff free throw scoring leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_annual_scoring_leaders" title="List of National Basketball Association annual scoring leaders">List of individual National Basketball Association scoring leaders by season</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_players_with_most_points_in_a_game" class="mw-redirect" title="List of National Basketball Association players with most points in a game">List of National Basketball Association players with most points in a game</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_single-game_blocks_leaders" title="List of National Basketball Association single-game blocks leaders">List of National Basketball Association single-game blocks leaders</a></li>
<li><a href="/wiki/List_of_National_Basketball_Association_seasons_played_leaders" title="List of National Basketball Association seasons played leaders">List of National Basketball Association seasons played leaders</a></li>
<li><a href="/wiki/Highest-paid_NBA_players_by_season" title="Highest-paid NBA players by season">Highest-paid NBA players by season</a></li>
<li><a href="/wiki/Shaq%E2%80%93Kobe_feud" title="Shaq–Kobe feud">Shaq–Kobe feud</a></li>
<li><a href="/wiki/List_of_NCAA_Division_I_men%27s_basketball_career_blocks_leaders" title="List of NCAA Division I men's basketball career blocks leaders">List of NCAA Division I men's basketball career blocks leaders</a></li>
<li><a href="/wiki/List_of_NCAA_Division_I_men%27s_basketball_season_blocks_leaders" title="List of NCAA Division I men's basketball season blocks leaders">List of NCAA Division I men's basketball season blocks leaders</a></li>
<li><a href="/wiki/List_of_NCAA_Division_I_men%27s_basketball_season_rebounding_leaders" title="List of NCAA Division I men's basketball season rebounding leaders">List of NCAA Division I men's basketball season rebounding leaders</a></li>
<li><a href="/wiki/List_of_Freemasons" title="List of Freemasons">List of Freemasons</a></li>
</ul>
<h2><span class="mw-headline" id="References">References</span></h2>
<div class="reflist columns references-column-width" style="-moz-column-width: 30em; -webkit-column-width: 30em; column-width: 30em; list-style-type: decimal;">
<ol class="references">
<li id="cite_note-1"><span class="mw-cite-backlink"><b><a href="#cite_ref-1">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="https://www.cbssports.com/nba/news/cbs-sports-50-greatest-nba-players-of-all-time-where-do-lebron-curry-rank/">"CBS Sports' 50 greatest NBA players of all time: Where do LeBron, Curry rank?"</a>. <i>CBSSports.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">2017-12-18</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=CBSSports.com&amp;rft.atitle=CBS+Sports%27+50+greatest+NBA+players+of+all+time%3A+Where+do+LeBron%2C+Curry+rank%3F&amp;rft_id=https%3A%2F%2Fwww.cbssports.com%2Fnba%2Fnews%2Fcbs-sports-50-greatest-nba-players-of-all-time-where-do-lebron-curry-rank%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-2"><span class="mw-cite-backlink"><b><a href="#cite_ref-2">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://www.espn.com/nba/story/_/page/nbarank9/all-nbarank-9">"All-Time #NBArank: Shaq comes in at No. 9"</a>. <i>ESPN.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">2017-12-18</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ESPN.com&amp;rft.atitle=All-Time+%23NBArank%3A+Shaq+comes+in+at+No.+9&amp;rft_id=http%3A%2F%2Fwww.espn.com%2Fnba%2Fstory%2F_%2Fpage%2Fnbarank9%2Fall-nbarank-9&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-3"><span class="mw-cite-backlink"><b><a href="#cite_ref-3">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.basketball-reference.com/awards/slam_500_greatest.html">"SLAM 500 Greatest NBA Players of All Time | Basketball-Reference.com"</a>. <i>Basketball-Reference.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">2017-12-18</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Basketball-Reference.com&amp;rft.atitle=SLAM+500+Greatest+NBA+Players+of+All+Time+%7C+Basketball-Reference.com&amp;rft_id=https%3A%2F%2Fwww.basketball-reference.com%2Fawards%2Fslam_500_greatest.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-4"><span class="mw-cite-backlink"><b><a href="#cite_ref-4">^</a></b></span> <span class="reference-text"><cite class="citation news">Roth, Mark (March 3, 2006). <a rel="nofollow" class="external text" href="http://www.post-gazette.com/stories/ae/oscar-watch/male-hollywood-stars-dont-stand-as-tall-as-we-imagine-424208/">"Male Hollywood stars don't stand as tall as we imagine"</a>. <i><a href="/wiki/Pittsburgh_Post-Gazette" title="Pittsburgh Post-Gazette">Pittsburgh Post-Gazette</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">September 8,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Pittsburgh+Post-Gazette&amp;rft.atitle=Male+Hollywood+stars+don%27t+stand+as+tall+as+we+imagine&amp;rft.date=2006-03-03&amp;rft.aulast=Roth&amp;rft.aufirst=Mark&amp;rft_id=http%3A%2F%2Fwww.post-gazette.com%2Fstories%2Fae%2Foscar-watch%2Fmale-hollywood-stars-dont-stand-as-tall-as-we-imagine-424208%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-5"><span class="mw-cite-backlink"><b><a href="#cite_ref-5">^</a></b></span> <span class="reference-text"><cite class="citation news">Heisler, Mark. <a rel="nofollow" class="external text" href="https://web.archive.org/web/20090628085424/http://www.latimes.com/la-spw-shaq26-2009jun26-test%2C0%2C271183.story">"Shaquille O'Neal traded to Cleveland Cavaliers for 3 players, cash"</a>. <i>Los Angeles Times</i>. Archived from <a rel="nofollow" class="external text" href="http://www.latimes.com/la-spw-shaq26-2009jun26-test,0,271183.story">the original</a> on June 28, 2009<span class="reference-accessdate">. Retrieved <span class="nowrap">May 23,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=Shaquille+O%27Neal+traded+to+Cleveland+Cavaliers+for+3+players%2C+cash&amp;rft.aulast=Heisler&amp;rft.aufirst=Mark&amp;rft_id=http%3A%2F%2Fwww.latimes.com%2Fla-spw-shaq26-2009jun26-test%2C0%2C271183.story&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-6"><span class="mw-cite-backlink"><b><a href="#cite_ref-6">^</a></b></span> <span class="reference-text"><cite class="citation news">Zillgitt, Jeff (August 5, 2010). <a rel="nofollow" class="external text" href="https://www.usatoday.com/sports/basketball/nba/celtics/2010-08-04-shaquille-oneal_N.htm">"Void filled: 15-time All-Star Shaquille O'Neal to Celtics"</a>. <i>USA Today</i><span class="reference-accessdate">. Retrieved <span class="nowrap">March 15,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=USA+Today&amp;rft.atitle=Void+filled%3A+15-time+All-Star+Shaquille+O%27Neal+to+Celtics&amp;rft.date=2010-08-05&amp;rft.aulast=Zillgitt&amp;rft.aufirst=Jeff&amp;rft_id=https%3A%2F%2Fwww.usatoday.com%2Fsports%2Fbasketball%2Fnba%2Fceltics%2F2010-08-04-shaquille-oneal_N.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-brstats-7"><span class="mw-cite-backlink">^ <a href="#cite_ref-brstats_7-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-brstats_7-1"><sup><i><b>b</b></i></sup></a> <a href="#cite_ref-brstats_7-2"><sup><i><b>c</b></i></sup></a></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.basketball-reference.com/players/o/onealsh01.html">"Shaquille O'Neal NBA &amp; ABA Statistics"</a>. Basketball-Reference.com<span class="reference-accessdate">. Retrieved <span class="nowrap">August 1,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal+NBA+%26+ABA+Statistics&amp;rft.pub=Basketball-Reference.com&amp;rft_id=https%3A%2F%2Fwww.basketball-reference.com%2Fplayers%2Fo%2Fonealsh01.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-8"><span class="mw-cite-backlink"><b><a href="#cite_ref-8">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20160407121028/http://www.hoophall.com/news/2016/4/4/naismith-memorial-basketball-hall-of-fame-class-of-2016-anno.html">"Naismith Memorial Basketball Hall of Fame Class of 2016 Announcement presented by Haggar Clothing Company"</a>. <i>Naismith Memorial Basketball Hall of Fame</i>. April 4, 2016. Archived from <a rel="nofollow" class="external text" href="http://www.hoophall.com/news/2016/4/4/naismith-memorial-basketball-hall-of-fame-class-of-2016-anno.html">the original</a> on April 7, 2016<span class="reference-accessdate">. Retrieved <span class="nowrap">April 4,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Naismith+Memorial+Basketball+Hall+of+Fame&amp;rft.atitle=Naismith+Memorial+Basketball+Hall+of+Fame+Class+of+2016+Announcement+presented+by+Haggar+Clothing+Company&amp;rft.date=2016-04-04&amp;rft_id=http%3A%2F%2Fwww.hoophall.com%2Fnews%2F2016%2F4%2F4%2Fnaismith-memorial-basketball-hall-of-fame-class-of-2016-anno.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-9"><span class="mw-cite-backlink"><b><a href="#cite_ref-9">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://www.fiba.basketball/news/dream-team-shaq-and-kukoc-headline-2017-class-of-fiba-hall-of-fame-inductees">Dream Team, Shaq and Kukoc headline 2017 Class of FIBA Hall of Fame Inductees.</a></span></li>
<li id="cite_note-10"><span class="mw-cite-backlink"><b><a href="#cite_ref-10">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.podcastone.com/the-big-podcast-with-shaq/">"Homepage"</a>. <i>The Big Podcast with Shaq</i> – via podcastone.com.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=The+Big+Podcast+with+Shaq&amp;rft.atitle=Homepage&amp;rft_id=http%3A%2F%2Fwww.podcastone.com%2Fthe-big-podcast-with-shaq%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-11"><span class="mw-cite-backlink"><b><a href="#cite_ref-11">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://www.thepostgame.com/kings-guard-gaming-shaquille-oneal-first-gm">"Kings Guard Gaming Names Shaquille O'Neal First General Manager"</a>. <i>ThePostGame</i>. 2018-04-02<span class="reference-accessdate">. Retrieved <span class="nowrap">2018-04-04</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ThePostGame&amp;rft.atitle=Kings+Guard+Gaming+Names+Shaquille+O%27Neal+First+General+Manager&amp;rft.date=2018-04-02&amp;rft_id=http%3A%2F%2Fwww.thepostgame.com%2Fkings-guard-gaming-shaquille-oneal-first-gm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-12"><span class="mw-cite-backlink"><b><a href="#cite_ref-12">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.filmreference.com/film/16/Shaquille-O-Neal.html">"Shaquille O'Neal Biography (1972–)"</a>. <i>filmreference.com</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=filmreference.com&amp;rft.atitle=Shaquille+O%27Neal+Biography+%281972%E2%80%93%29&amp;rft_id=http%3A%2F%2Fwww.filmreference.com%2Ffilm%2F16%2FShaquille-O-Neal.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-LAT_Plaschke-13"><span class="mw-cite-backlink">^ <a href="#cite_ref-LAT_Plaschke_13-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-LAT_Plaschke_13-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation news">Plaschke, Bill (June 12, 2002). <a rel="nofollow" class="external text" href="http://articles.latimes.com/2002/jun/11/sports/sp-plaschke11">"<span style="padding-left:0.2em;">'</span>Biological Didn't Bother<span style="padding-right:0.2em;">'</span>"</a>. <i>Los Angeles Times</i><span class="reference-accessdate">. Retrieved <span class="nowrap">January 21,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=%27Biological+Didn%27t+Bother%27&amp;rft.date=2002-06-12&amp;rft.aulast=Plaschke&amp;rft.aufirst=Bill&amp;rft_id=http%3A%2F%2Farticles.latimes.com%2F2002%2Fjun%2F11%2Fsports%2Fsp-plaschke11&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-14"><span class="mw-cite-backlink"><b><a href="#cite_ref-14">^</a></b></span> <span class="reference-text"><cite class="citation web">Wise, Mike (September 9, 2016). <a rel="nofollow" class="external text" href="http://theundefeated.com/features/shaq-to-biological-father-i-dont-hate-you/">"Shaq to biological father: 'I don't hate you<span style="padding-right:0.2em;">'</span>"</a>. <i>The Undefeated</i>. ESPN<span class="reference-accessdate">. Retrieved <span class="nowrap">September 10,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=The+Undefeated&amp;rft.atitle=Shaq+to+biological+father%3A+%E2%80%98I+don%E2%80%99t+hate+you%E2%80%99&amp;rft.date=2016-09-09&amp;rft.aulast=Wise&amp;rft.aufirst=Mike&amp;rft_id=http%3A%2F%2Ftheundefeated.com%2Ffeatures%2Fshaq-to-biological-father-i-dont-hate-you%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-15"><span class="mw-cite-backlink"><b><a href="#cite_ref-15">^</a></b></span> <span class="reference-text"><cite class="citation web">Ryan, Michael (February 13, 2000). <a rel="nofollow" class="external text" href="https://web.archive.org/web/20060628074957/http://www.parade.com/articles/editions/2000/edition_02-13-2000/Boys_And_Girls_Clubs">"Where They Gave Me A Chance"</a>. <i>Parade</i>. Archived from <a rel="nofollow" class="external text" href="http://www.parade.com/articles/editions/2000/edition_02-13-2000/Boys_And_Girls_Clubs">the original</a> on June 28, 2006<span class="reference-accessdate">. Retrieved <span class="nowrap">March 21,</span> 2006</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Parade&amp;rft.atitle=Where+They+Gave+Me+A+Chance&amp;rft.date=2000-02-13&amp;rft.aulast=Ryan&amp;rft.aufirst=Michael&amp;rft_id=http%3A%2F%2Fwww.parade.com%2Farticles%2Feditions%2F2000%2Fedition_02-13-2000%2FBoys_And_Girls_Clubs&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-16"><span class="mw-cite-backlink"><b><a href="#cite_ref-16">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.army.mil/article/122380/Shaq_sets_bar_high_for_Young_Lives__BIG_Stories_campaign/">"Shaq Sets Bar High for Young Lives, BIG Stories Campaign"</a>. <i>Army.mil</i>. United States Army<span class="reference-accessdate">. Retrieved <span class="nowrap">February 23,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Army.mil&amp;rft.atitle=Shaq+Sets+Bar+High+for+Young+Lives%2C+BIG+Stories+Campaign&amp;rft_id=http%3A%2F%2Fwww.army.mil%2Farticle%2F122380%2FShaq_sets_bar_high_for_Young_Lives__BIG_Stories_campaign%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-key_moments-17"><span class="mw-cite-backlink"><b><a href="#cite_ref-key_moments_17-0">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://articles.sun-sentinel.com/2004-07-11/sports/0407110264_1_lucille-o-neal-shaq-attack-shaquille-rashaun-o-neal">"Key Moments In Shaquille O'neal History"</a>. <i><a href="/wiki/South_Florida_Sun-Sentinel" class="mw-redirect" title="South Florida Sun-Sentinel">South Florida Sun-Sentinel</a></i>. July 11, 2004<span class="reference-accessdate">. Retrieved <span class="nowrap">January 2,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=South+Florida+Sun-Sentinel&amp;rft.atitle=Key+Moments+In+Shaquille+O%27neal+History&amp;rft.date=2004-07-11&amp;rft_id=http%3A%2F%2Farticles.sun-sentinel.com%2F2004-07-11%2Fsports%2F0407110264_1_lucille-o-neal-shaq-attack-shaquille-rashaun-o-neal&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-18"><span class="mw-cite-backlink"><b><a href="#cite_ref-18">^</a></b></span> <span class="reference-text"><cite class="citation book">McMurray, Bill. <i>Bill McMurray's Texas High School All-Time Sports Record Book</i> (6th ed.). Four Star Publications.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Bill+McMurray%27s+Texas+High+School+All-Time+Sports+Record+Book&amp;rft.edition=6th&amp;rft.pub=Four+Star+Publications&amp;rft.aulast=McMurray&amp;rft.aufirst=Bill&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-number-19"><span class="mw-cite-backlink">^ <a href="#cite_ref-number_19-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-number_19-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation news">Schmitz, Brian (August 25, 1992). <a rel="nofollow" class="external text" href="http://articles.orlandosentinel.com/1992-08-25/sports/9208250132_1_shaq-catledge-oneal">"Shaquille Shows Class In Switching To No. 32"</a>. <i><a href="/wiki/Orlando_Sentinel" title="Orlando Sentinel">Orlando Sentinel</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">July 14,</span> 2017</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Orlando+Sentinel&amp;rft.atitle=Shaquille+Shows+Class+In+Switching+To+No.+32&amp;rft.date=1992-08-25&amp;rft.aulast=Schmitz&amp;rft.aufirst=Brian&amp;rft_id=http%3A%2F%2Farticles.orlandosentinel.com%2F1992-08-25%2Fsports%2F9208250132_1_shaq-catledge-oneal&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-20"><span class="mw-cite-backlink"><b><a href="#cite_ref-20">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20080603142656/http://media.www.dailytexanonline.com/media/storage/paper410/news/2000/12/12/Sports/Oneal.To.Get.Degree.From.Lsu-701598.shtml">"O'Neal to get degree from LSU"</a>. The Daily Texan. December 12, 2000. Archived from <a rel="nofollow" class="external text" href="http://media.www.dailytexanonline.com/media/storage/paper410/news/2000/12/12/Sports/Oneal.To.Get.Degree.From.Lsu-701598.shtml">the original</a> on June 3, 2008<span class="reference-accessdate">. Retrieved <span class="nowrap">March 7,</span> 2007</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=O%27Neal+to+get+degree+from+LSU&amp;rft.pub=The+Daily+Texan&amp;rft.date=2000-12-12&amp;rft_id=http%3A%2F%2Fmedia.www.dailytexanonline.com%2Fmedia%2Fstorage%2Fpaper410%2Fnews%2F2000%2F12%2F12%2FSports%2FOneal.To.Get.Degree.From.Lsu-701598.shtml&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-21"><span class="mw-cite-backlink"><b><a href="#cite_ref-21">^</a></b></span> <span class="reference-text">barrystickets.com (2007). O'Neal: LSU Hall of Fame. Retrieved on March 3, 2007, from <a rel="nofollow" class="external free" href="http://www.barrystickets.com/lakers/lakers-players/shaquille-oneal.php">http://www.barrystickets.com/lakers/lakers-players/shaquille-oneal.php</a>.</span></li>
<li id="cite_note-22"><span class="mw-cite-backlink"><b><a href="#cite_ref-22">^</a></b></span> <span class="reference-text"><cite class="citation web">Athletic Department. <a rel="nofollow" class="external text" href="http://www.lsusports.net/ViewArticle.dbml?DB_OEM_ID=5200&amp;ATCLID=205015500">"LSU Basketball Practice Facility – LSUsports.net – The Official Web Site of LSU Tigers Athletics"</a>. <i>LSUsports.net</i><span class="reference-accessdate">. Retrieved <span class="nowrap">February 23,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=LSUsports.net&amp;rft.atitle=LSU+Basketball+Practice+Facility+%E2%80%93+LSUsports.net+%E2%80%93+The+Official+Web+Site+of+LSU+Tigers+Athletics&amp;rft.au=Athletic+Department&amp;rft_id=http%3A%2F%2Fwww.lsusports.net%2FViewArticle.dbml%3FDB_OEM_ID%3D5200%26ATCLID%3D205015500&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-23"><span class="mw-cite-backlink"><b><a href="#cite_ref-23">^</a></b></span> <span class="reference-text">Luke, Chelsea. (April 28, 2015). <a rel="nofollow" class="external text" href="http://universe.byu.edu/2015/04/28/college-triple-double-header-kyle-collinsworth-versus-shaquille-oneal/">"College triple-double header: Kyle Collinsworth versus Shaquille O’Neal"</a>. Retrieved June 17, 2015.</span></li>
<li id="cite_note-24"><span class="mw-cite-backlink"><b><a href="#cite_ref-24">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/sixers/news/131104-mcw-eastern-player-week">"Michael Carter-Williams Named Eastern Conference Player of the Week"</a>. <i>NBA.com</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=NBA.com&amp;rft.atitle=Michael+Carter-Williams+Named+Eastern+Conference+Player+of+the+Week&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fsixers%2Fnews%2F131104-mcw-eastern-player-week&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-Magic_history-25"><span class="mw-cite-backlink"><b><a href="#cite_ref-Magic_history_25-0">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20080201003005/http://www.nba.com/magic/history/magic_history.html">"MAGIC: Magic History"</a>. <i>NBA.com/magic</i>. Archived from <a rel="nofollow" class="external text" href="http://www.nba.com/magic/history/magic_history.html">the original</a> on February 1, 2008<span class="reference-accessdate">. Retrieved <span class="nowrap">March 10,</span> 2008</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=NBA.com%2Fmagic&amp;rft.atitle=MAGIC%3A+Magic+History&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fmagic%2Fhistory%2Fmagic_history.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-mccallum-26"><span class="mw-cite-backlink"><b><a href="#cite_ref-mccallum_26-0">^</a></b></span> <span class="reference-text"><cite class="citation news"><a href="/wiki/Jack_McCallum" title="Jack McCallum">McCallum, Jack</a> (March 3, 1997). <a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/vault/article/magazine/MAG1009558/index.htm">"The Young And The Feckless"</a>. <i>Sports Illustrated</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6mKNoM8?url=http://sportsillustrated.cnn.com/vault/article/magazine/MAG1009558/index.htm">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>On more than one occasion during O'Neal's rookie season of 1992–93, I heard him say of his then coach, "We've got to get Matty [Guokas] out of here and bring in Brian."</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Sports+Illustrated&amp;rft.atitle=The+Young+And+The+Feckless&amp;rft.date=1997-03-03&amp;rft.aulast=McCallum&amp;rft.aufirst=Jack&amp;rft_id=http%3A%2F%2Fsportsillustrated.cnn.com%2Fvault%2Farticle%2Fmagazine%2FMAG1009558%2Findex.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-27"><span class="mw-cite-backlink"><b><a href="#cite_ref-27">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="https://www.nytimes.com/1993/07/01/sports/hill-is-named-coach-of-magic.html">"Hill Is Named Coach of Magic"</a>. <i>The New York Times</i>. July 1, 1993<span class="reference-accessdate">. Retrieved <span class="nowrap">November 6,</span> 2010</span>. <q>Matt Guokas, who coached the Orlando Magic to the National Basketball Association's most improved record last season, was replaced today by an assistant, Brian Hill, and was reassigned to the front office as Orlando's vice president of basketball development.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+New+York+Times&amp;rft.atitle=Hill+Is+Named+Coach+of+Magic&amp;rft.date=1993-07-01&amp;rft_id=https%3A%2F%2Fwww.nytimes.com%2F1993%2F07%2F01%2Fsports%2Fhill-is-named-coach-of-magic.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-28"><span class="mw-cite-backlink"><b><a href="#cite_ref-28">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://archive.is/20120729165130/http://www.basketball-reference.com/fc/pgl.cgi?player=onealsh01&amp;year=1994">"Shaquille O'Neal 1993–94 Game Log"</a>. Basketball-Reference.com. Archived from <a rel="nofollow" class="external text" href="https://www.basketball-reference.com/fc/pgl.cgi?player=onealsh01&amp;year=1994">the original</a> on July 29, 2012<span class="reference-accessdate">. Retrieved <span class="nowrap">August 5,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal+1993%E2%80%9394+Game+Log&amp;rft.pub=Basketball-Reference.com&amp;rft_id=https%3A%2F%2Fwww.basketball-reference.com%2Ffc%2Fpgl.cgi%3Fplayer%3Donealsh01%26year%3D1994&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-29"><span class="mw-cite-backlink"><b><a href="#cite_ref-29">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/magic/history/1994-95.html">"1994-95 Season - THE OFFICIAL SITE OF THE ORLANDO MAGIC"</a>. <i>www.nba.com</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=www.nba.com&amp;rft.atitle=1994-95+Season+-+THE+OFFICIAL+SITE+OF+THE+ORLANDO+MAGIC&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fmagic%2Fhistory%2F1994-95.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-macmullan_19960701-30"><span class="mw-cite-backlink">^ <a href="#cite_ref-macmullan_19960701_30-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-macmullan_19960701_30-1"><sup><i><b>b</b></i></sup></a> <a href="#cite_ref-macmullan_19960701_30-2"><sup><i><b>c</b></i></sup></a></span> <span class="reference-text"><cite class="citation news"><a href="/wiki/Jackie_MacMullan" title="Jackie MacMullan">MacMullan, Jackie</a> (July 1, 1996). <a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/vault/article/magazine/MAG1008323/index.htm">"Poof! Shaquille O'Neal is among a host of NBA free agents who could vanish from their teams"</a>. <i>Sports Illustrated</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6mU4dwD?url=http://sportsillustrated.cnn.com/vault/article/magazine/MAG1008323/index.htm">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>It asked whether the Magic should fire coach Brian Hill if that were one of O'Neal's conditions for returning. An overwhelming 82% answered no.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Sports+Illustrated&amp;rft.atitle=Poof%21+Shaquille+O%27Neal+is+among+a+host+of+NBA+free+agents+who+could+vanish+from+their+teams&amp;rft.date=1996-07-01&amp;rft.aulast=MacMullan&amp;rft.aufirst=Jackie&amp;rft_id=http%3A%2F%2Fsportsillustrated.cnn.com%2Fvault%2Farticle%2Fmagazine%2FMAG1008323%2Findex.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-wojnarowski-31"><span class="mw-cite-backlink">^ <a href="#cite_ref-wojnarowski_31-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-wojnarowski_31-1"><sup><i><b>b</b></i></sup></a> <a href="#cite_ref-wojnarowski_31-2"><sup><i><b>c</b></i></sup></a></span> <span class="reference-text"><cite class="citation news"><a href="/wiki/Adrian_Wojnarowski" title="Adrian Wojnarowski">Wojnarowski, Adrian</a> (June 2, 2009). <a rel="nofollow" class="external text" href="https://sports.yahoo.com/nba/news?slug=aw-shaqmagic060209">"Shaq's legacy binds Magic, Lakers"</a>. Yahoo! Sports. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6mj2hQm?url=http://sports.yahoo.com/nba/news?slug=aw-shaqmagic060209">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>The poll appeared as Shaq and the Olympic basketball team trained in town.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Shaq%27s+legacy+binds+Magic%2C+Lakers&amp;rft.date=2009-06-02&amp;rft.aulast=Wojnarowski&amp;rft.aufirst=Adrian&amp;rft_id=https%3A%2F%2Fsports.yahoo.com%2Fnba%2Fnews%3Fslug%3Daw-shaqmagic060209&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-reilly-32"><span class="mw-cite-backlink">^ <a href="#cite_ref-reilly_32-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-reilly_32-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation news"><a href="/wiki/Rick_Reilly" title="Rick Reilly">Reilly, Rick</a> (April 21, 1997). <a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/basketball/nba/features/shaq/flashback/shaqs_world/">"Shaq's world"</a>. <i>Sports Illustrated</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6mpQE82?url=http://sportsillustrated.cnn.com/basketball/nba/features/shaq/flashback/shaqs_world/">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>He hated the power struggle with his coach, Brian Hill.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Sports+Illustrated&amp;rft.atitle=Shaq%27s+world&amp;rft.date=1997-04-21&amp;rft.aulast=Reilly&amp;rft.aufirst=Rick&amp;rft_id=http%3A%2F%2Fsportsillustrated.cnn.com%2Fbasketball%2Fnba%2Ffeatures%2Fshaq%2Fflashback%2Fshaqs_world%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-blinebury-33"><span class="mw-cite-backlink">^ <a href="#cite_ref-blinebury_33-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-blinebury_33-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation news">Blinebury, Fran (July 1, 2010). <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6muVUwf?url=http://www.nba.com/2010/news/07/01/shaq.leaving/index.html">"Magic are proof that wounds from star's departure do heal"</a>. <i>NBA.com</i>. Archived from <a rel="nofollow" class="external text" href="http://www.nba.com/2010/news/07/01/shaq.leaving/index.html">the original</a> on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>There were occasional gripes at coach Brian Hill.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=NBA.com&amp;rft.atitle=Magic+are+proof+that+wounds+from+star%27s+departure+do+heal&amp;rft.date=2010-07-01&amp;rft.aulast=Blinebury&amp;rft.aufirst=Fran&amp;rft_id=http%3A%2F%2Fwww.nba.com%2F2010%2Fnews%2F07%2F01%2Fshaq.leaving%2Findex.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-34"><span class="mw-cite-backlink"><b><a href="#cite_ref-34">^</a></b></span> <span class="reference-text"><cite class="citation book">O'Neal, Shaquille (2002). <a rel="nofollow" class="external text" href="https://books.google.com/books?id=cIXaWfTsc5YC&amp;pg=PA52"><i>Shaq Talks Back</i></a>. <a href="/wiki/St._Martin%27s_Paperbacks" class="mw-redirect" title="St. Martin's Paperbacks">St. Martin's Paperbacks</a>. p.&#160;52. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&#160;<a href="/wiki/Special:BookSources/978-0-312-98259-1" title="Special:BookSources/978-0-312-98259-1">978-0-312-98259-1</a><span class="reference-accessdate">. Retrieved <span class="nowrap">November 7,</span> 2010</span>. <q>We just didn't respect him. Sometimes he went from nice to hardcore and people were looking around, like, 'This ain't the guy we know.'</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Shaq+Talks+Back&amp;rft.pages=52&amp;rft.pub=St.+Martin%27s+Paperbacks&amp;rft.date=2002&amp;rft.isbn=978-0-312-98259-1&amp;rft.aulast=O%27Neal&amp;rft.aufirst=Shaquille&amp;rft_id=https%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3DcIXaWfTsc5YC%26pg%3DPA52&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-35"><span class="mw-cite-backlink"><b><a href="#cite_ref-35">^</a></b></span> <span class="reference-text"><cite class="citation book">O'Neal, Shaquille (2002). <a rel="nofollow" class="external text" href="https://books.google.com/books?id=cIXaWfTsc5YC&amp;pg=PA151"><i>Shaq Talks Back</i></a>. St. Martin's Paperbacks. p.&#160;151. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&#160;<a href="/wiki/Special:BookSources/978-0-312-98259-1" title="Special:BookSources/978-0-312-98259-1">978-0-312-98259-1</a><span class="reference-accessdate">. Retrieved <span class="nowrap">November 14,</span> 2010</span>. <q>When I was in Orlando, I really felt like a big fish in a small, dried-up pond. No matter what I did, it got talked about, until I couldn't really live my life.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Shaq+Talks+Back&amp;rft.pages=151&amp;rft.pub=St.+Martin%27s+Paperbacks&amp;rft.date=2002&amp;rft.isbn=978-0-312-98259-1&amp;rft.aulast=O%27Neal&amp;rft.aufirst=Shaquille&amp;rft_id=https%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3DcIXaWfTsc5YC%26pg%3DPA151&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-36"><span class="mw-cite-backlink"><b><a href="#cite_ref-36">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, pp. 104–5, 108, 110.</span></li>
<li id="cite_note-37"><span class="mw-cite-backlink"><b><a href="#cite_ref-37">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://community.seattletimes.nwsource.com/archive/?date=19960718&amp;slug=2339914">"NBA – Lakers Sign O'Neal Raise Ticket Prices"</a>. The Seattle Times. Associated Press. July 18, 1996.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=NBA+%E2%80%93+Lakers+Sign+O%27Neal+Raise+Ticket+Prices&amp;rft.date=1996-07-18&amp;rft_id=http%3A%2F%2Fcommunity.seattletimes.nwsource.com%2Farchive%2F%3Fdate%3D19960718%26slug%3D2339914&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-38"><span class="mw-cite-backlink"><b><a href="#cite_ref-38">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="https://news.google.com/newspapers?nid=1370&amp;dat=19960720&amp;id=8WUVAAAAIBAJ&amp;sjid=0goEAAAAIBAJ&amp;pg=3531,3152523">"Shaq signs multi-million contract with LA Lakers"</a>. <i><a href="/wiki/Manila_Standard" title="Manila Standard">Manila Standard</a></i>. July 20, 1996<span class="reference-accessdate">. Retrieved <span class="nowrap">December 29,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Manila+Standard&amp;rft.atitle=Shaq+signs+multi-million+contract+with+LA+Lakers&amp;rft.date=1996-07-20&amp;rft_id=https%3A%2F%2Fnews.google.com%2Fnewspapers%3Fnid%3D1370%26dat%3D19960720%26id%3D8WUVAAAAIBAJ%26sjid%3D0goEAAAAIBAJ%26pg%3D3531%2C3152523&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-39"><span class="mw-cite-backlink"><b><a href="#cite_ref-39">^</a></b></span> <span class="reference-text"><cite class="citation news">Araton, Harvey (July 19, 1996). <a rel="nofollow" class="external text" href="https://www.nytimes.com/1996/07/19/sports/sports-of-the-times-shaq-is-now-california-dreamin.html">"Sports of The Times;Shaq Is Now California Dreamin<span style="padding-right:0.2em;">'</span>"</a>. <i>The New York Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5uFm5UJBs?url=http://www.nytimes.com/1996/07/19/sports/sports-of-the-times-shaq-is-now-california-dreamin.html">Archived</a> from the original on November 15, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 15,</span> 2010</span>. <q>So is greed, Michael Douglas once argued as Gordon Gekko, though O'Neal's changing coasts and uniforms is not about money. We repeat: not about money.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+New+York+Times&amp;rft.atitle=Sports+of+The+Times%3BShaq+Is+Now+California+Dreamin%27&amp;rft.date=1996-07-19&amp;rft.aulast=Araton&amp;rft.aufirst=Harvey&amp;rft_id=https%3A%2F%2Fwww.nytimes.com%2F1996%2F07%2F19%2Fsports%2Fsports-of-the-times-shaq-is-now-california-dreamin.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-40"><span class="mw-cite-backlink"><b><a href="#cite_ref-40">^</a></b></span> <span class="reference-text"><cite class="citation news">Elliot, Stuart (November 4, 1993). <a rel="nofollow" class="external text" href="https://www.nytimes.com/1993/11/04/business/the-media-business-advertising-addenda-sports-products-deal-for-shaquille-o-neal.html">"Sports Products Deal For Shaquille O'Neal"</a>. <i>The New York Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5uFmSmIVj?url=http://www.nytimes.com/1993/11/04/business/the-media-business-advertising-addenda-sports-products-deal-for-shaquille-o-neal.html">Archived</a> from the original on November 15, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 15,</span> 2010</span>. <q>The athlete's other product agreements include Pepsi-Cola and Reebok.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+New+York+Times&amp;rft.atitle=Sports+Products+Deal+For+Shaquille+O%27Neal&amp;rft.date=1993-11-04&amp;rft.aulast=Elliot&amp;rft.aufirst=Stuart&amp;rft_id=https%3A%2F%2Fwww.nytimes.com%2F1993%2F11%2F04%2Fbusiness%2Fthe-media-business-advertising-addenda-sports-products-deal-for-shaquille-o-neal.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-41"><span class="mw-cite-backlink"><b><a href="#cite_ref-41">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/history/playoffs/19961997.html">"1997 Playoff Results"</a>. <i>NBA.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">December 29,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=NBA.com&amp;rft.atitle=1997+Playoff+Results&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fhistory%2Fplayoffs%2F19961997.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-42"><span class="mw-cite-backlink"><b><a href="#cite_ref-42">^</a></b></span> <span class="reference-text"><cite class="citation news">Stein, Marc (December 19, 1996). <a rel="nofollow" class="external text" href="http://www.thefreelibrary.com/O%27NEAL+WANTED+TO+PACK+MORE+OFFENSIVE+PUNCH.-a084036430">"O'Neal wanted to pack more offensive punch"</a>. <i><a href="/wiki/Los_Angeles_Daily_News" title="Los Angeles Daily News">Los Angeles Daily News</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">April 26,</span> 2011</span> – via thefreelibrary.com.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Daily+News&amp;rft.atitle=O%27Neal+wanted+to+pack+more+offensive+punch&amp;rft.date=1996-12-19&amp;rft.aulast=Stein&amp;rft.aufirst=Marc&amp;rft_id=http%3A%2F%2Fwww.thefreelibrary.com%2FO%2527NEAL%2BWANTED%2BTO%2BPACK%2BMORE%2BOFFENSIVE%2BPUNCH.-a084036430&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-43"><span class="mw-cite-backlink"><b><a href="#cite_ref-43">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/history/playoffs/19971998.html">"1998 Playoff Results"</a>. <i>NBA.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">June 17,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=NBA.com&amp;rft.atitle=1998+Playoff+Results&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fhistory%2Fplayoffs%2F19971998.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-44"><span class="mw-cite-backlink"><b><a href="#cite_ref-44">^</a></b></span> <span class="reference-text"><cite class="citation news">Kreigel, Mark (May 18, 2011). <a rel="nofollow" class="external text" href="http://msn.foxsports.com/nba/story/Phil-Jackson-shares-candid-thoughts-on-final-season-as-Los-Angeles-Lakers-coach-051811">"Jackson shares thoughts on final season"</a>. <i>FoxSports.com</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/646s9iJBJ?url=http://msn.foxsports.com/nba/story/Phil-Jackson-shares-candid-thoughts-on-final-season-as-Los-Angeles-Lakers-coach-051811">Archived</a> from the original on December 22, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=FoxSports.com&amp;rft.atitle=Jackson+shares+thoughts+on+final+season&amp;rft.date=2011-05-18&amp;rft.aulast=Kreigel&amp;rft.aufirst=Mark&amp;rft_id=http%3A%2F%2Fmsn.foxsports.com%2Fnba%2Fstory%2FPhil-Jackson-shares-candid-thoughts-on-final-season-as-Los-Angeles-Lakers-coach-051811&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-45"><span class="mw-cite-backlink"><b><a href="#cite_ref-45">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20150904125915/http://www.behindthebench.org/oneals/">"Archived copy"</a>. Archived from <a rel="nofollow" class="external text" href="http://www.behindthebench.org/oneals/">the original</a> on September 4, 2015<span class="reference-accessdate">. Retrieved <span class="nowrap">June 16,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Archived+copy&amp;rft_id=http%3A%2F%2Fwww.behindthebench.org%2Foneals%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span>. Retrieved June 17, 2015.</span></li>
<li id="cite_note-46"><span class="mw-cite-backlink"><b><a href="#cite_ref-46">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://assets.espn.go.com/nba/news/1999/1110/163531.html">"Shaq, Barkley scuffle, are ejected"</a>. Associated Press. November 11, 1999<span class="reference-accessdate">. Retrieved <span class="nowrap">January 8,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Shaq%2C+Barkley+scuffle%2C+are+ejected&amp;rft.date=1999-11-11&amp;rft_id=http%3A%2F%2Fassets.espn.go.com%2Fnba%2Fnews%2F1999%2F1110%2F163531.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-47"><span class="mw-cite-backlink"><b><a href="#cite_ref-47">^</a></b></span> <span class="reference-text"><cite class="citation news">Heisler, Mark (May 11, 2011). <a rel="nofollow" class="external text" href="http://articles.latimes.com/2011/may/11/sports/la-sp-heisler-lakers-20110512">"Phil Jackson's tenure produced the most success and fun we've ever seen"</a>. <i>Los Angeles Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/60Bg2awMY?url=http://articles.latimes.com/2011/may/11/sports/la-sp-heisler-lakers-20110512">Archived</a> from the original on July 15, 2011<span class="reference-accessdate">. Retrieved <span class="nowrap">June 17,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=Phil+Jackson%27s+tenure+produced+the+most+success+and+fun+we%27ve+ever+seen&amp;rft.date=2011-05-11&amp;rft.aulast=Heisler&amp;rft.aufirst=Mark&amp;rft_id=http%3A%2F%2Farticles.latimes.com%2F2011%2Fmay%2F11%2Fsports%2Fla-sp-heisler-lakers-20110512&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-48"><span class="mw-cite-backlink"><b><a href="#cite_ref-48">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://amarillo.com/stories/2001/06/11/spo_nbafinals.shtml">"Lakers hold off Sixers, 96–91"</a>. <i>Amarillo Globe-News</i>. Associated Press. June 11, 2001. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6n4uq2w?url=http://amarillo.com/stories/2001/06/11/spo_nbafinals.shtml">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>The 76ers trailed from the second quarter on and missed their one and only chance to tie the game when Allen Iverson could make only one of two free throws with 2:06 left – 15 seconds after O'Neal drew his sixth foul for backing over Dikembe Mutombo.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Amarillo+Globe-News&amp;rft.atitle=Lakers+hold+off+Sixers%2C+96%E2%80%9391&amp;rft.date=2001-06-11&amp;rft_id=http%3A%2F%2Famarillo.com%2Fstories%2F2001%2F06%2F11%2Fspo_nbafinals.shtml&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-brown-49"><span class="mw-cite-backlink">^ <a href="#cite_ref-brown_49-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-brown_49-1"><sup><i><b>b</b></i></sup></a> <a href="#cite_ref-brown_49-2"><sup><i><b>c</b></i></sup></a> <a href="#cite_ref-brown_49-3"><sup><i><b>d</b></i></sup></a></span> <span class="reference-text"><cite class="citation news">Brown, Tim (August 14, 2002). <a rel="nofollow" class="external text" href="http://articles.latimes.com/print/2002/aug/14/sports/sp-shaq14">"O'Neal Surgery Is Likely"</a>. <i>Los Angeles Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5uFoNWqEY?url=http://articles.latimes.com/print/2002/aug/14/sports/sp-shaq14">Archived</a> from the original on November 15, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 17,</span> 2010</span>. <q>A month before last training camp he had surgery to correct a claw toe deformity in the smallest toe of his left foot.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=O%27Neal+Surgery+Is+Likely&amp;rft.date=2002-08-14&amp;rft.aulast=Brown&amp;rft.aufirst=Tim&amp;rft_id=http%3A%2F%2Farticles.latimes.com%2Fprint%2F2002%2Faug%2F14%2Fsports%2Fsp-shaq14&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-50"><span class="mw-cite-backlink"><b><a href="#cite_ref-50">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 153.</span></li>
<li id="cite_note-51"><span class="mw-cite-backlink"><b><a href="#cite_ref-51">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/basketball/news/2002/01/13/shaq_punches_ap/">"Shaq to be sacked"</a>. <i>Sports Illustrated</i>. January 13, 2002.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Sports+Illustrated&amp;rft.atitle=Shaq+to+be+sacked&amp;rft.date=2002-01-13&amp;rft_id=http%3A%2F%2Fsportsillustrated.cnn.com%2Fbasketball%2Fnews%2F2002%2F01%2F13%2Fshaq_punches_ap%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-52"><span class="mw-cite-backlink"><b><a href="#cite_ref-52">^</a></b></span> <span class="reference-text"><cite class="citation news">Berkow, Ira (January 16, 2002). <a rel="nofollow" class="external text" href="https://query.nytimes.com/gst/fullpage.html?res=9C02E3D61238F935A25752C0A9649C8B63">"Sports of The Times; N.B.A. Needs To Hit Shaq Much Harder"</a>. <i>The New York Times</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+New+York+Times&amp;rft.atitle=Sports+of+The+Times%3B+N.B.A.+Needs+To+Hit+Shaq+Much+Harder&amp;rft.date=2002-01-16&amp;rft.aulast=Berkow&amp;rft.aufirst=Ira&amp;rft_id=https%3A%2F%2Fquery.nytimes.com%2Fgst%2Ffullpage.html%3Fres%3D9C02E3D61238F935A25752C0A9649C8B63&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-53"><span class="mw-cite-backlink"><b><a href="#cite_ref-53">^</a></b></span> <span class="reference-text"><cite class="citation news"><a href="/wiki/Jack_McCallum" title="Jack McCallum">McCallum, Jack</a> (June 3, 2002). <a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/vault/article/magazine/MAG1025910/index.htm">"Trading blows and barbs, big men Vlade Divac and Shaquille O'Neal have turned the Western finals into comic opera"</a>. <i>Sports Illustrated</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6nAUeTC?url=http://sportsillustrated.cnn.com/vault/article/magazine/MAG1025910/index.htm">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>There was some head-scratching before it was divined that O'Neal meant "cheat" and not something either X-rated or far out, like "covenant" or "coronet."</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Sports+Illustrated&amp;rft.atitle=Trading+blows+and+barbs%2C+big+men+Vlade+Divac+and+Shaquille+O%27Neal+have+turned+the+Western+finals+into+comic+opera&amp;rft.date=2002-06-03&amp;rft.aulast=McCallum&amp;rft.aufirst=Jack&amp;rft_id=http%3A%2F%2Fsportsillustrated.cnn.com%2Fvault%2Farticle%2Fmagazine%2FMAG1025910%2Findex.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-nbabio-54"><span class="mw-cite-backlink">^ <a href="#cite_ref-nbabio_54-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-nbabio_54-1"><sup><i><b>b</b></i></sup></a> <a href="#cite_ref-nbabio_54-2"><sup><i><b>c</b></i></sup></a></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/playerfile/shaquille_oneal/bio.html">"Shaquille O'Neal Bio Page"</a>. <i>NBA.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">June 1,</span> 2011</span>. <q>sat out the first 12 games of the season (Oct.&#160;29-Nov. 22) on the Injured List recovering from off-season foot surgery</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=NBA.com&amp;rft.atitle=Shaquille+O%27Neal+Bio+Page&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fplayerfile%2Fshaquille_oneal%2Fbio.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-oneal2011_p155-55"><span class="mw-cite-backlink">^ <a href="#cite_ref-oneal2011_p155_55-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-oneal2011_p155_55-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 155.</span></li>
<li id="cite_note-ventre-56"><span class="mw-cite-backlink">^ <a href="#cite_ref-ventre_56-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-ventre_56-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation news">Ventre, Mark (December 12, 2005). <a rel="nofollow" class="external text" href="http://nbcsports.msnbc.com/id/10439131/">"It looks like Shaq's reshuffling Heat house"</a>. <i>NBCSports.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">October 13,</span> 2010</span>. <q>Remember, this is the same Shaquille O'Neal who, while with the Lakers, once waited all summer to have his injured toe operated on, then did so just before training camp and explained, "I got hurt on company time, so I’ll heal on company time."</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=NBCSports.com&amp;rft.atitle=It+looks+like+Shaq%27s+reshuffling+Heat+house&amp;rft.date=2005-12-12&amp;rft.aulast=Ventre&amp;rft.aufirst=Mark&amp;rft_id=http%3A%2F%2Fnbcsports.msnbc.com%2Fid%2F10439131%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-57"><span class="mw-cite-backlink"><b><a href="#cite_ref-57">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.basketball-reference.com/teams/LAL/2003_games.html">"2002–03 Los Angeles Lakers Schedule and Results"</a>. <i>basketball-reference.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">October 13,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=basketball-reference.com&amp;rft.atitle=2002%E2%80%9303+Los+Angeles+Lakers+Schedule+and+Results&amp;rft_id=https%3A%2F%2Fwww.basketball-reference.com%2Fteams%2FLAL%2F2003_games.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-58"><span class="mw-cite-backlink"><b><a href="#cite_ref-58">^</a></b></span> <span class="reference-text"><cite id="lazenby2006" class="citation book"><a href="/wiki/Roland_Lazenby" title="Roland Lazenby">Lazenby, Roland</a> (2006). <a rel="nofollow" class="external text" href="https://books.google.com/books?id=HiH8z6EmSIsC&amp;lpg=PA121&amp;vq=balloons&amp;dq=the%20show%20roland%20lazenby&amp;pg=PP1#v=onepage&amp;q&amp;f=false"><i>The Show: The Inside Story of the Spectacular Los Angeles Lakers in the Words of Those Who Lived It</i></a>. New York City: <a href="/wiki/McGraw-Hill_Professional" class="mw-redirect" title="McGraw-Hill Professional">McGraw-Hill Professional</a>. p.&#160;421. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&#160;<a href="/wiki/Special:BookSources/978-0-07-143034-0" title="Special:BookSources/978-0-07-143034-0">978-0-07-143034-0</a><span class="reference-accessdate">. Retrieved <span class="nowrap">April 18,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=The+Show%3A+The+Inside+Story+of+the+Spectacular+Los+Angeles+Lakers+in+the+Words+of+Those+Who+Lived+It&amp;rft.place=New+York+City&amp;rft.pages=421&amp;rft.pub=McGraw-Hill+Professional&amp;rft.date=2006&amp;rft.isbn=978-0-07-143034-0&amp;rft.aulast=Lazenby&amp;rft.aufirst=Roland&amp;rft_id=https%3A%2F%2Fbooks.google.com%2Fbooks%3Fid%3DHiH8z6EmSIsC%26lpg%3DPA121%26vq%3Dballoons%26dq%3Dthe%2520show%2520roland%2520lazenby%26pg%3DPP1%23v%3Donepage%26q%26f%3Dfalse&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-59"><span class="mw-cite-backlink"><b><a href="#cite_ref-59">^</a></b></span> <span class="reference-text"><cite class="citation web">Bryant, Kobe (October 28, 2003). <a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/news/story?id=1648431">"Kobe critical of Shaq's leadership"</a>. Interviewed by Jim Gray. ESPN<span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Kobe+critical+of+Shaq%27s+leadership&amp;rft.pub=ESPN&amp;rft.date=2003-10-28&amp;rft.aulast=Bryant&amp;rft.aufirst=Kobe&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Fnews%2Fstory%3Fid%3D1648431&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-60"><span class="mw-cite-backlink"><b><a href="#cite_ref-60">^</a></b></span> <span class="reference-text"><a href="#lazenby2006">Lazenby 2006</a>, p. 428.</span></li>
<li id="cite_note-61"><span class="mw-cite-backlink"><b><a href="#cite_ref-61">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://nbcsports.msnbc.com/id/5397513/">"Shaq happy, Lakers in shock after trade"</a>. <i>MSNBC.com</i>. NBC. July 15, 2004<span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=MSNBC.com&amp;rft.atitle=Shaq+happy%2C+Lakers+in+shock+after+trade&amp;rft.date=2004-07-15&amp;rft_id=http%3A%2F%2Fnbcsports.msnbc.com%2Fid%2F5397513%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-62"><span class="mw-cite-backlink"><b><a href="#cite_ref-62">^</a></b></span> <span class="reference-text"><a href="#lazenby2006">Lazenby 2006</a>, p. 434.</span></li>
<li id="cite_note-mvp_vote_2005-63"><span class="mw-cite-backlink"><b><a href="#cite_ref-mvp_vote_2005_63-0">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.basketball-reference.com/awards/awards_2005.html">"2004–05 NBA Awards Voting"</a>. Basketball Reference<span class="reference-accessdate">. Retrieved <span class="nowrap">June 1,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=2004%E2%80%9305+NBA+Awards+Voting&amp;rft.pub=Basketball+Reference&amp;rft_id=https%3A%2F%2Fwww.basketball-reference.com%2Fawards%2Fawards_2005.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-64"><span class="mw-cite-backlink"><b><a href="#cite_ref-64">^</a></b></span> <span class="reference-text"><cite class="citation news">Robbins, Liz (December 27, 2005). <a rel="nofollow" class="external text" href="https://query.nytimes.com/gst/fullpage.html?res=9C0CE4DA1230F934A15751C1A9639C8B63">"BASKETBALL; Riley, Advocating for O'Neal, Objects to the 'Sumo' Defense"</a>. <i>The New York Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5uIppwcXB?url=http://query.nytimes.com/gst/fullpage.html?res=9C0CE4DA1230F934A15751C1A9639C8B63">Archived</a> from the original on November 17, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 17,</span> 2010</span>. <q>The criticism O'Neal and others had for Van Gundy after the Heat's loss to Detroit in Game 7 of the Eastern Conference finals last season was that he did not call enough plays for O'Neal.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+New+York+Times&amp;rft.atitle=BASKETBALL%3B+Riley%2C+Advocating+for+O%27Neal%2C+Objects+to+the+%27Sumo%27+Defense&amp;rft.date=2005-12-27&amp;rft.aulast=Robbins&amp;rft.aufirst=Liz&amp;rft_id=https%3A%2F%2Fquery.nytimes.com%2Fgst%2Ffullpage.html%3Fres%3D9C0CE4DA1230F934A15751C1A9639C8B63&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-65"><span class="mw-cite-backlink"><b><a href="#cite_ref-65">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/news/story?id=2122716">"Shaq makes long-term plans in Miami"</a>. Retrieved June 17, 2015.</span></li>
<li id="cite_note-66"><span class="mw-cite-backlink"><b><a href="#cite_ref-66">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://www.espn.com/nba/news/story?id=3953133">"Shaq rips Van Gundy for flop comment"</a>. Retrieved December 4, 2017.</span></li>
<li id="cite_note-67"><span class="mw-cite-backlink"><b><a href="#cite_ref-67">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://www.shaqquotes.com">Shaq Quotes</a> <a rel="nofollow" class="external text" href="https://web.archive.org/web/20160109171713/http://www.shaqquotes.com/">Archived</a> January 9, 2016, at the <a href="/wiki/Wayback_Machine" title="Wayback Machine">Wayback Machine</a>.. Retrieved June 17, 2015.</span></li>
<li id="cite_note-68"><span class="mw-cite-backlink"><b><a href="#cite_ref-68">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://m.bleacherreport.com/articles/347830-kobe-or-shaq-who-has-been-more-important-to-their-teams-over-the-years">"Kobe or Shaq: Who Has Been More Important To Their Teams Over the Years?"</a>. <i>Bleacher Report</i>. Retrieved June 17, 2015.</span></li>
<li id="cite_note-HotHoops-69"><span class="mw-cite-backlink">^ <a href="#cite_ref-HotHoops_69-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-HotHoops_69-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text">Kraczkowski, Kevin. <a rel="nofollow" class="external text" href="http://www.hothothoops.com/2013/10/7/4814160/miami-heat-player-countdown-15-shaquille-oneal">"Miami Heat Player Countdown: 15. Shaquille O'Neal"</a>. (October 7, 2013). Retrieved June 17, 2015.</span></li>
<li id="cite_note-Heat_Playoffs_Summary-70"><span class="mw-cite-backlink">^ <a href="#cite_ref-Heat_Playoffs_Summary_70-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-Heat_Playoffs_Summary_70-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://www.nba.com/heat/history/playoff_history_2006.html">"Heat Playoff History 2006"</a>. Retrieved June 17, 2015.</span></li>
<li id="cite_note-71"><span class="mw-cite-backlink"><b><a href="#cite_ref-71">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/recap?gameId=261117014">"Knicks take advantage of Shaq-less heat with blowout"</a>. ESPN. Associated Press. November 17, 2006<span class="reference-accessdate">. Retrieved <span class="nowrap">November 10,</span> 2010</span>. <q>Starting with Shaquille O'Neal's left knee, the Miami Heat are hurting.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Knicks+take+advantage+of+Shaq-less+heat+with+blowout&amp;rft.date=2006-11-17&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Frecap%3FgameId%3D261117014&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-72"><span class="mw-cite-backlink"><b><a href="#cite_ref-72">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/recap?gameId=270124011">"Shaq, Wade return in Heat's OT loss to Pacers"</a>. ESPN. Associated Press. January 24, 2007<span class="reference-accessdate">. Retrieved <span class="nowrap">November 10,</span> 2010</span>. <q>O'Neal, who came off the bench after missing 35 games while recovering from knee surgery, finished with five points and five rebounds in 14 minutes.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Shaq%2C+Wade+return+in+Heat%27s+OT+loss+to+Pacers&amp;rft.date=2007-01-24&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Frecap%3FgameId%3D270124011&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-73"><span class="mw-cite-backlink"><b><a href="#cite_ref-73">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://nbcsports.msnbc.com/id/16357098/">"Shaq rips Jackson as 'Benedict Arnold<span style="padding-right:0.2em;">'</span>"</a>. NBC Sports. December 26, 2006. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u8MbrJEq?url=http://nbcsports.msnbc.com/id/16357098/">Archived</a> from the original on November 10, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 12,</span> 2010</span>. <q>"How can Benedict Arnold be reliable in what he says?" O'Neal said Monday after the Miami Heat's 101–85 victory over the Lakers, the <i>Los Angeles Times</i> reported.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Shaq+rips+Jackson+as+%27Benedict+Arnold%27&amp;rft.date=2006-12-26&amp;rft_id=http%3A%2F%2Fnbcsports.msnbc.com%2Fid%2F16357098%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-HeatHistory-74"><span class="mw-cite-backlink">^ <a href="#cite_ref-HeatHistory_74-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-HeatHistory_74-1"><sup><i><b>b</b></i></sup></a> <a href="#cite_ref-HeatHistory_74-2"><sup><i><b>c</b></i></sup></a></span> <span class="reference-text"><a rel="nofollow" class="external autonumber" href="http://www.sportsecyclopedia.com/nba/miami/heat.html">[1]</a>. Retrieved June 17, 2015.</span></li>
<li id="cite_note-75"><span class="mw-cite-backlink"><b><a href="#cite_ref-75">^</a></b></span> <span class="reference-text">Thorpe, David. (March 3, 2007). <a rel="nofollow" class="external text" href="http://insider.espn.go.com/nba/insider/columns/story?columnist=thorpe_david&amp;page=ScoutingShaq">"Scouting breakdown: Can Shaq carry the Heat?"</a>. Retrieved June 17, 2015.</span></li>
<li id="cite_note-76"><span class="mw-cite-backlink"><b><a href="#cite_ref-76">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a> p. 206.</span></li>
<li id="cite_note-77"><span class="mw-cite-backlink"><b><a href="#cite_ref-77">^</a></b></span> <span class="reference-text"><cite id="oneal2011" class="citation book">O'Neal, Shaquille; MacMullan, Jackie (2011). <i>Shaq Uncut: My Story</i>. Grand Central Publishing. pp.&#160;210–11. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&#160;<a href="/wiki/Special:BookSources/978-1-4555-0441-1" title="Special:BookSources/978-1-4555-0441-1">978-1-4555-0441-1</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=book&amp;rft.btitle=Shaq+Uncut%3A+My+Story&amp;rft.pages=210-11&amp;rft.pub=Grand+Central+Publishing&amp;rft.date=2011&amp;rft.isbn=978-1-4555-0441-1&amp;rft.aulast=O%27Neal&amp;rft.aufirst=Shaquille&amp;rft.au=MacMullan%2C+Jackie&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-78"><span class="mw-cite-backlink"><b><a href="#cite_ref-78">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 212.</span></li>
<li id="cite_note-79"><span class="mw-cite-backlink"><b><a href="#cite_ref-79">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, pp. 215–16.</span></li>
<li id="cite_note-80"><span class="mw-cite-backlink"><b><a href="#cite_ref-80">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 216.</span></li>
<li id="cite_note-81"><span class="mw-cite-backlink"><b><a href="#cite_ref-81">^</a></b></span> <span class="reference-text"><cite class="citation news">Ludden, Johnny (February 6, 2008). <a rel="nofollow" class="external text" href="https://sports.yahoo.com/nba/news?slug=jy-shaqdeal020508">"Suns, Heat agree to Shaq trade"</a>. Yahoo! Sports<span class="reference-accessdate">. Retrieved <span class="nowrap">November 13,</span> 2010</span>. <q>In a move that could signify a dramatic change to their go-go-go, let-it-fly style of play, the Phoenix Suns acquired former All-Star center Shaquille O'Neal from the Miami Heat on Wednesday for Shawn Marion and Marcus Banks.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Suns%2C+Heat+agree+to+Shaq+trade&amp;rft.date=2008-02-06&amp;rft.aulast=Ludden&amp;rft.aufirst=Johnny&amp;rft_id=https%3A%2F%2Fsports.yahoo.com%2Fnba%2Fnews%3Fslug%3Djy-shaqdeal020508&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-82"><span class="mw-cite-backlink"><b><a href="#cite_ref-82">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/dailydime?page=dime-080221">"Daily Dime: Shaq gets the spotlight, while Kobe gets the game"</a>. <a href="/wiki/ESPN" title="ESPN">ESPN</a> .com. February 21, 2008.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Daily+Dime%3A+Shaq+gets+the+spotlight%2C+while+Kobe+gets+the+game&amp;rft.date=2008-02-21&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Fdailydime%3Fpage%3Ddime-080221&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-Shaquille_O'Neal_stats-83"><span class="mw-cite-backlink">^ <a href="#cite_ref-Shaquille_O'Neal_stats_83-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-Shaquille_O'Neal_stats_83-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://www.nba.com/playerfile/shaquille_oneal/index.html">Shaquille O'Neal career stats and splits</a> <i><a href="/wiki/National_Basketball_Association" title="National Basketball Association">NBA.com</a></i></span></li>
<li id="cite_note-84"><span class="mw-cite-backlink"><b><a href="#cite_ref-84">^</a></b></span> <span class="reference-text"><cite class="citation news">Austin Burton. <a rel="nofollow" class="external text" href="https://web.archive.org/web/20080720160130/http://dimemag.com/2008/02/06/why-shaq-heres-why/">"Why Shaq? Here's Why"</a>. <i>dimemag.com</i>. Archived from <a rel="nofollow" class="external text" href="http://dimemag.com/2008/02/06/why-shaq-heres-why/">the original</a> on July 20, 2008.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=dimemag.com&amp;rft.atitle=Why+Shaq%3F+Here%27s+Why&amp;rft.au=Austin+Burton&amp;rft_id=http%3A%2F%2Fdimemag.com%2F2008%2F02%2F06%2Fwhy-shaq-heres-why%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-85"><span class="mw-cite-backlink"><b><a href="#cite_ref-85">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/news/story?id=3314347">"Riley bothered by Shaq's criticism of Heat players, staff"</a>. ESPN. March 27, 2008. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5uCedWfM1?url=http://sports.espn.go.com/nba/news/story?id=3314347">Archived</a> from the original on November 13, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 13,</span> 2010</span>. <q>We have professionals who know what to do. No one is asking me to play with Chris Quinn or Ricky Davis. I'm actually on a team again.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Riley+bothered+by+Shaq%27s+criticism+of+Heat+players%2C+staff&amp;rft.date=2008-03-27&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Fnews%2Fstory%3Fid%3D3314347&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-86"><span class="mw-cite-backlink"><b><a href="#cite_ref-86">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan</a> p. 221.</span></li>
<li id="cite_note-87"><span class="mw-cite-backlink"><b><a href="#cite_ref-87">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan</a> p. 213.</span></li>
<li id="cite_note-yahoo-88"><span class="mw-cite-backlink"><b><a href="#cite_ref-yahoo_88-0">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://sports.yahoo.com/nba/players/847">"Player profile – Shaquille O'Neal"</a>. <i>yahoo.com</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=yahoo.com&amp;rft.atitle=Player+profile+%E2%80%93+Shaquille+O%27Neal&amp;rft_id=https%3A%2F%2Fsports.yahoo.com%2Fnba%2Fplayers%2F847&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-89"><span class="mw-cite-backlink"><b><a href="#cite_ref-89">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://espn.go.com/nba/recap/_/id/290303019/phoenix-suns-vs-orlando-magic">"Magic's Van Gundy calls out Shaq for flopping"</a>. ESPN. Associated Press. March 3, 2009<span class="reference-accessdate">. Retrieved <span class="nowrap">October 15,</span> 2010</span>. <q>I was shocked, seriously, shocked", Magic coach Stan Van Gundy said of O'Neal's flopping. "And very disappointed cause he knows what it's like. Let's stand up and play like men, and I think our guy did that tonight.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Magic%27s+Van+Gundy+calls+out+Shaq+for+flopping&amp;rft.date=2009-03-03&amp;rft_id=http%3A%2F%2Fespn.go.com%2Fnba%2Frecap%2F_%2Fid%2F290303019%2Fphoenix-suns-vs-orlando-magic&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-90"><span class="mw-cite-backlink"><b><a href="#cite_ref-90">^</a></b></span> <span class="reference-text"><cite class="citation news">Sheridan, Chris (March 5, 2009). <a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/news/story?id=3953133">"Shaq rips Van Gundy for flop comment"</a>. ESPN. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6nHsTwl?url=http://sports.espn.go.com/nba/news/story?id=3953133">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>"Flopping is playing like that your whole career. I was trying to take the charge, trying to get a call. It probably was a flop, but flopping is the wrong use of words. Flopping would describe his coaching", O'Neal said, steering the conversation back to Van Gundy.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Shaq+rips+Van+Gundy+for+flop+comment&amp;rft.date=2009-03-05&amp;rft.aulast=Sheridan&amp;rft.aufirst=Chris&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Fnews%2Fstory%3Fid%3D3953133&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-91"><span class="mw-cite-backlink"><b><a href="#cite_ref-91">^</a></b></span> <span class="reference-text"><cite class="citation web"><a href="/wiki/Mark_Madsen" title="Mark Madsen">Madsen, Mark</a> (March 7, 2009). <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6nUSx9D?url=http://www.markmadsen.com/blog/what-is-a-flop.html">"What is a flop?"</a>. <i>MarkMadsen.com</i>. Archived from <a rel="nofollow" class="external text" href="http://www.markmadsen.com/blog/what-is-a-flop.html">the original</a> on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>So, this whole commotion about whether or not Shaq's play against Dwight Howard was a flop is so funny because everyone in the league tries to flop on Shaq and Shaq never flops back.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=MarkMadsen.com&amp;rft.atitle=What+is+a+flop%3F&amp;rft.date=2009-03-07&amp;rft.aulast=Madsen&amp;rft.aufirst=Mark&amp;rft_id=http%3A%2F%2Fwww.markmadsen.com%2Fblog%2Fwhat-is-a-flop.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-92"><span class="mw-cite-backlink"><b><a href="#cite_ref-92">^</a></b></span> <span class="reference-text"><cite class="citation news">Gregory, Sean (October 30, 2006). <a rel="nofollow" class="external text" href="http://www.time.com/time/magazine/article/0,9171,1552051,00.html">"10 Questions for Shaquille O'Neal"</a>. <i>Time</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6nZtRbq?url=http://www.time.com/time/magazine/article/0,9171,1552051,00.html">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>Make a guy have to beat a guy—not flop and get calls and be nice to the referees and kiss ass.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Time&amp;rft.atitle=10+Questions+for+Shaquille+O%27Neal&amp;rft.date=2006-10-30&amp;rft.aulast=Gregory&amp;rft.aufirst=Sean&amp;rft_id=http%3A%2F%2Fwww.time.com%2Ftime%2Fmagazine%2Farticle%2F0%2C9171%2C1552051%2C00.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-93"><span class="mw-cite-backlink"><b><a href="#cite_ref-93">^</a></b></span> <span class="reference-text"><cite class="citation web">Friedman, Jason (March 6, 2009). <a rel="nofollow" class="external text" href="http://www.nba.com/rockets/news/Shaq_and_Yao_Sound_Off_On_What-303812-34.html">"Clash Of The Titans"</a>. <i>Rockets.com</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6nhUa1b?url=http://www.nba.com/rockets/news/Shaq_and_Yao_Sound_Off_On_What-303812-34.html">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>"It's not going to be man-on-man, so don’t even try that," says O'Neal with an incredulous laugh.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Rockets.com&amp;rft.atitle=Clash+Of+The+Titans&amp;rft.date=2009-03-06&amp;rft.aulast=Friedman&amp;rft.aufirst=Jason&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Frockets%2Fnews%2FShaq_and_Yao_Sound_Off_On_What-303812-34.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-94"><span class="mw-cite-backlink"><b><a href="#cite_ref-94">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 213.</span></li>
<li id="cite_note-95"><span class="mw-cite-backlink"><b><a href="#cite_ref-95">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/cavaliers/news/shaq_trade_090625.html">"Cavaliers Acquire 15-Time NBA All-Star and Four-Time NBA Champion Shaquille ONeal"</a>. <i><a href="/wiki/National_Basketball_Association" title="National Basketball Association">NBA.com</a></i>. June 25, 2009<span class="reference-accessdate">. Retrieved <span class="nowrap">June 25,</span> 2009</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=NBA.com&amp;rft.atitle=Cavaliers+Acquire+15-Time+NBA+All-Star+and+Four-Time+NBA+Champion+Shaquille+ONeal&amp;rft.date=2009-06-25&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fcavaliers%2Fnews%2Fshaq_trade_090625.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-96"><span class="mw-cite-backlink"><b><a href="#cite_ref-96">^</a></b></span> <span class="reference-text"><cite class="citation web">News, A. B. C. <a rel="nofollow" class="external text" href="http://abcnews.go.com/Sports">"ABC Sports News"</a>. <i>ABC News</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=ABC+News&amp;rft.atitle=ABC+Sports+News&amp;rft.aulast=News&amp;rft.aufirst=A.+B.+C.&amp;rft_id=http%3A%2F%2Fabcnews.go.com%2FSports&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-97"><span class="mw-cite-backlink"><b><a href="#cite_ref-97">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, pp. 234–37.</span></li>
<li id="cite_note-98"><span class="mw-cite-backlink"><b><a href="#cite_ref-98">^</a></b></span> <span class="reference-text">"<a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/news/story?id=4947277">Cleveland Cavaliers' Shaquille O'Neal leaves game with 'significant thumb injury</a>". Associated Press. February 25, 2010. Retrieved March 1, 2010.</span></li>
<li id="cite_note-99"><span class="mw-cite-backlink"><b><a href="#cite_ref-99">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/games/20100417/CHICLE/gameinfo.html">"The Game Happens Here"</a>. NBA.com<span class="reference-accessdate">. Retrieved <span class="nowrap">August 5,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=The+Game+Happens+Here&amp;rft.pub=NBA.com&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fgames%2F20100417%2FCHICLE%2Fgameinfo.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-100"><span class="mw-cite-backlink"><b><a href="#cite_ref-100">^</a></b></span> <span class="reference-text"><cite class="citation web">Siddiqi, DJ (September 6, 2016). <a rel="nofollow" class="external text" href="https://247sports.com/nba/cleveland-cavaliers/Bolt/Shaquille-ONeal-Cavaliers-should-have-won-title-in-2010-47264296">"Shaquille O'Neal: Cavaliers should have won title in 2010"</a>. <i>247sports.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">January 2,</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=247sports.com&amp;rft.atitle=Shaquille+O%27Neal%3A+Cavaliers+should+have+won+title+in+2010&amp;rft.date=2016-09-06&amp;rft.aulast=Siddiqi&amp;rft.aufirst=DJ&amp;rft_id=https%3A%2F%2F247sports.com%2Fnba%2Fcleveland-cavaliers%2FBolt%2FShaquille-ONeal-Cavaliers-should-have-won-title-in-2010-47264296&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-101"><span class="mw-cite-backlink"><b><a href="#cite_ref-101">^</a></b></span> <span class="reference-text"><cite class="citation news">Washburn, Gary (September 19, 2010). <a rel="nofollow" class="external text" href="http://www.boston.com/sports/basketball/celtics/articles/2010/09/19/grousbecks_faith_goes_right_down_to_the_core/?page=full">"Grousbeck's faith goes right down to the core"</a>. <i>The Boston Globe</i><span class="reference-accessdate">. Retrieved <span class="nowrap">October 14,</span> 2010</span>. <q>"The minute I heard Kobe [Bryant] say he had one more ring than Shaq, I said to Danny, ‘Let's go get Shaq,’ and it happened", said Grousbeck.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Boston+Globe&amp;rft.atitle=Grousbeck%27s+faith+goes+right+down+to+the+core&amp;rft.date=2010-09-19&amp;rft.aulast=Washburn&amp;rft.aufirst=Gary&amp;rft_id=http%3A%2F%2Fwww.boston.com%2Fsports%2Fbasketball%2Fceltics%2Farticles%2F2010%2F09%2F19%2Fgrousbecks_faith_goes_right_down_to_the_core%2F%3Fpage%3Dfull&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-102"><span class="mw-cite-backlink"><b><a href="#cite_ref-102">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, pp. 243–44.</span></li>
<li id="cite_note-103"><span class="mw-cite-backlink"><b><a href="#cite_ref-103">^</a></b></span> <span class="reference-text"><cite class="citation news">Boston Celtics (August 4, 2010). <a rel="nofollow" class="external text" href="http://www.nba.com/celtics/news/press_release/press080410-celtics-sign-shaq.html">"Celtics Sign Shaquille O'Neal"</a>. NBA.com/Celtics.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Celtics+Sign+Shaquille+O%27Neal&amp;rft.date=2010-08-04&amp;rft.au=Boston+Celtics&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fceltics%2Fnews%2Fpress_release%2Fpress080410-celtics-sign-shaq.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-104"><span class="mw-cite-backlink"><b><a href="#cite_ref-104">^</a></b></span> <span class="reference-text"><cite class="citation news">Washburn, Gary (August 5, 2010). <a rel="nofollow" class="external text" href="http://www.boston.com/sports/basketball/celtics/articles/2010/08/05/shaq_aboard_for_two_years/">"Shaq aboard for two years"</a>. <i>The Boston Globe</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6nvdnw7?url=http://www.boston.com/sports/basketball/celtics/articles/2010/08/05/shaq_aboard_for_two_years/">Archived</a> from the original on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 9,</span> 2010</span>. <q>All Ainge had to offer was the veteran minimum of $1.35&#160;million, and O'Neal compromised by accepting that on a two-year deal.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Boston+Globe&amp;rft.atitle=Shaq+aboard+for+two+years&amp;rft.date=2010-08-05&amp;rft.aulast=Washburn&amp;rft.aufirst=Gary&amp;rft_id=http%3A%2F%2Fwww.boston.com%2Fsports%2Fbasketball%2Fceltics%2Farticles%2F2010%2F08%2F05%2Fshaq_aboard_for_two_years%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-105"><span class="mw-cite-backlink"><b><a href="#cite_ref-105">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 241.</span></li>
<li id="cite_note-106"><span class="mw-cite-backlink"><b><a href="#cite_ref-106">^</a></b></span> <span class="reference-text"><cite class="citation news">Beck, Howard (July 23, 2010). <a rel="nofollow" class="external text" href="https://www.nytimes.com/2010/07/24/sports/basketball/24shaq.html?_r=1">"Multiple Nicknames; Dwindling Openings"</a>. <i>The New York Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5uIrmSv92?url=http://www.nytimes.com/2010/07/24/sports/basketball/24shaq.html?_r=2">Archived</a> from the original on November 17, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 17,</span> 2010</span>. <q>The Dallas Mavericks had interest, but balked at O'Neal's salary demands.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+New+York+Times&amp;rft.atitle=Multiple+Nicknames%3B+Dwindling+Openings&amp;rft.date=2010-07-23&amp;rft.aulast=Beck&amp;rft.aufirst=Howard&amp;rft_id=https%3A%2F%2Fwww.nytimes.com%2F2010%2F07%2F24%2Fsports%2Fbasketball%2F24shaq.html%3F_r%3D1&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-107"><span class="mw-cite-backlink"><b><a href="#cite_ref-107">^</a></b></span> <span class="reference-text"><cite class="citation news">Cunningham, Michael (August 5, 2010). <a rel="nofollow" class="external text" href="https://www.webcitation.org/5uIsWOHIh?url=http://blogs.ajc.com/hawks/2010/08/05/atlanta-hawks-no-shaq-now-what/?cxntfid=blogs_hawks">"Atlanta Hawks: No Shaq . . . now what?"</a>. <i>The Atlanta Journal-Constitution</i>. Archived from <a rel="nofollow" class="external text" href="http://blogs.ajc.com/hawks/2010/08/05/atlanta-hawks-no-shaq-now-what/?cxntfid=blogs_hawks">the original</a> on November 17, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">November 17,</span> 2010</span>. <q>Atlanta also wasn’t willing to pay Shaq more than the minimum and that was a sticking point for him.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Atlanta+Journal-Constitution&amp;rft.atitle=Atlanta+Hawks%3A+No+Shaq+.+.+.+now+what%3F&amp;rft.date=2010-08-05&amp;rft.aulast=Cunningham&amp;rft.aufirst=Michael&amp;rft_id=http%3A%2F%2Fblogs.ajc.com%2Fhawks%2F2010%2F08%2F05%2Fatlanta-hawks-no-shaq-now-what%2F%3Fcxntfid%3Dblogs_hawks&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-108"><span class="mw-cite-backlink"><b><a href="#cite_ref-108">^</a></b></span> <span class="reference-text"><cite class="citation news">Shaughnessy, Dan (August 11, 2010). <a rel="nofollow" class="external text" href="http://www.boston.com/sports/basketball/celtics/articles/2010/08/11/a_large_addition_to_celtics_sizeable_history/">"A large addition to Celtics' sizeable history – The Boston Globe"</a>. www.boston.com<span class="reference-accessdate">. Retrieved <span class="nowrap">August 10,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=A+large+addition+to+Celtics%27+sizeable+history+%E2%80%93+The+Boston+Globe&amp;rft.date=2010-08-11&amp;rft.aulast=Shaughnessy&amp;rft.aufirst=Dan&amp;rft_id=http%3A%2F%2Fwww.boston.com%2Fsports%2Fbasketball%2Fceltics%2Farticles%2F2010%2F08%2F11%2Fa_large_addition_to_celtics_sizeable_history%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-macmullan_20100927-109"><span class="mw-cite-backlink">^ <a href="#cite_ref-macmullan_20100927_109-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-macmullan_20100927_109-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation web"><a href="/wiki/Jackie_MacMullan" title="Jackie MacMullan">MacMullan, Jackie</a> (September 27, 2010). <a rel="nofollow" class="external text" href="http://sports.espn.go.com/boston/nba/columns/story?columnist=macmullan_jackie&amp;id=5620537">"Shaq ready to leave mark in Boston"</a>. ESPN<span class="reference-accessdate">. Retrieved <span class="nowrap">October 14,</span> 2010</span>. <q>But I don't compete with little guards. I don't compete with little guys who run around dominating the ball, throwing up 30 shots a night – like D-Wade, Kobe.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq+ready+to+leave+mark+in+Boston&amp;rft.pub=ESPN&amp;rft.date=2010-09-27&amp;rft.aulast=MacMullan&amp;rft.aufirst=Jackie&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fboston%2Fnba%2Fcolumns%2Fstory%3Fcolumnist%3Dmacmullan_jackie%26id%3D5620537&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-110"><span class="mw-cite-backlink"><b><a href="#cite_ref-110">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 244.</span></li>
<li id="cite_note-may-111"><span class="mw-cite-backlink">^ <a href="#cite_ref-may_111-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-may_111-1"><sup><i><b>b</b></i></sup></a> <a href="#cite_ref-may_111-2"><sup><i><b>c</b></i></sup></a></span> <span class="reference-text"><cite class="citation news">May, Peter (April 11, 2011). <a rel="nofollow" class="external text" href="https://www.nytimes.com/2011/04/11/sports/basketball/11celtics.html">"Celtics Creak Toward Postseason, Hoping They Have Legs for a Run"</a>. <i><a href="/wiki/The_New_York_Times" title="The New York Times">The New York Times</a></i>. p.&#160;D7. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5xtqIQUpk?url=http://www.nytimes.com/2011/04/11/sports/basketball/11celtics.html?_r=1">Archived</a> from the original on April 12, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+New+York+Times&amp;rft.atitle=Celtics+Creak+Toward+Postseason%2C+Hoping+They+Have+Legs+for+a+Run&amp;rft.pages=D7&amp;rft.date=2011-04-11&amp;rft.aulast=May&amp;rft.aufirst=Peter&amp;rft_id=https%3A%2F%2Fwww.nytimes.com%2F2011%2F04%2F11%2Fsports%2Fbasketball%2F11celtics.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-112"><span class="mw-cite-backlink"><b><a href="#cite_ref-112">^</a></b></span> <span class="reference-text"><cite class="citation news">Forsberg, Chris (November 11, 2010). <a rel="nofollow" class="external text" href="http://sports.espn.go.com/boston/nba/news/story?id=5792098">"Shaquille O'Neal starts vs. Heat"</a>. <i>ESPNBoston.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">March 22,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ESPNBoston.com&amp;rft.atitle=Shaquille+O%27Neal+starts+vs.+Heat&amp;rft.date=2010-11-11&amp;rft.aulast=Forsberg&amp;rft.aufirst=Chris&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fboston%2Fnba%2Fnews%2Fstory%3Fid%3D5792098&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-113"><span class="mw-cite-backlink"><b><a href="#cite_ref-113">^</a></b></span> <span class="reference-text"><cite class="citation news">Forsberg, Chris (December 19, 2010). <a rel="nofollow" class="external text" href="http://sports.espn.go.com/boston/nba/news/story?id=5936008">"Celtics get Shaquille O'Neal back"</a>. <i>ESPNBoston.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">March 22,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ESPNBoston.com&amp;rft.atitle=Celtics+get+Shaquille+O%27Neal+back&amp;rft.date=2010-12-19&amp;rft.aulast=Forsberg&amp;rft.aufirst=Chris&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fboston%2Fnba%2Fnews%2Fstory%3Fid%3D5936008&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-114"><span class="mw-cite-backlink"><b><a href="#cite_ref-114">^</a></b></span> <span class="reference-text"><cite class="citation news">Forsberg, Chris (January 22, 2011). <a rel="nofollow" class="external text" href="http://sports.espn.go.com/boston/nba/news/story?id=6046855">"Shaquille O'Neal injures hip"</a>. <i>ESPNBoston.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">March 22,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ESPNBoston.com&amp;rft.atitle=Shaquille+O%27Neal+injures+hip&amp;rft.date=2011-01-22&amp;rft.aulast=Forsberg&amp;rft.aufirst=Chris&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fboston%2Fnba%2Fnews%2Fstory%3Fid%3D6046855&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-115"><span class="mw-cite-backlink"><b><a href="#cite_ref-115">^</a></b></span> <span class="reference-text"><cite class="citation news">Payne, Greg (March 7, 2011). <a rel="nofollow" class="external text" href="http://espn.go.com/blog/boston/celtics/post/_/id/4681422/shaq-says-hes-85-percent-out-another-week">"Shaq says he's 85 percent; out another week"</a>. <i>ESPNBoston.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">March 22,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ESPNBoston.com&amp;rft.atitle=Shaq+says+he%27s+85+percent%3B+out+another+week&amp;rft.date=2011-03-07&amp;rft.aulast=Payne&amp;rft.aufirst=Greg&amp;rft_id=http%3A%2F%2Fespn.go.com%2Fblog%2Fboston%2Fceltics%2Fpost%2F_%2Fid%2F4681422%2Fshaq-says-hes-85-percent-out-another-week&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-116"><span class="mw-cite-backlink"><b><a href="#cite_ref-116">^</a></b></span> <span class="reference-text"><cite class="citation news">Payne, Greg (May 16, 2011). <a rel="nofollow" class="external text" href="https://www.webcitation.org/5ypYgzhz1?url=http://sports.espn.go.com/boston/nba/news/story?id=6555870">"Doc Rivers: Timing of trade was off"</a>. <i>ESPNBoston.com</i>. Archived from <a rel="nofollow" class="external text" href="http://sports.espn.go.com/boston/nba/news/story?id=6555870">the original</a> on May 20, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ESPNBoston.com&amp;rft.atitle=Doc+Rivers%3A+Timing+of+trade+was+off&amp;rft.date=2011-05-16&amp;rft.aulast=Payne&amp;rft.aufirst=Greg&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fboston%2Fnba%2Fnews%2Fstory%3Fid%3D6555870&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-117"><span class="mw-cite-backlink"><b><a href="#cite_ref-117">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan</a> p. 256.</span></li>
<li id="cite_note-118"><span class="mw-cite-backlink"><b><a href="#cite_ref-118">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://scores.espn.go.com/nba/recap?gameId=310413002">"Amare Stoudemire back as Celts' reserves top Knicks' second string"</a>. ESPN. <a href="/wiki/Associated_Press" title="Associated Press">Associated Press</a>. April 13, 2011<span class="reference-accessdate">. Retrieved <span class="nowrap">April 14,</span> 2011</span>. <q>Shaquille O'Neal, who has played 5 minutes, 29 seconds since Feb. 1, also sat out.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Amare+Stoudemire+back+as+Celts%27+reserves+top+Knicks%27+second+string&amp;rft.date=2011-04-13&amp;rft_id=http%3A%2F%2Fscores.espn.go.com%2Fnba%2Frecap%3FgameId%3D310413002&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-119"><span class="mw-cite-backlink"><b><a href="#cite_ref-119">^</a></b></span> <span class="reference-text"><cite class="citation news">Forsberg, Chris (May 18, 2011). <a rel="nofollow" class="external text" href="https://www.webcitation.org/5ypXbVb76?url=http://espn.go.com/blog/boston/celtics/post/_/id/4684171/report-card-shaquille-oneal">"Report card: Shaquille O'Neal"</a>. <i>ESPNBoston.com</i>. Archived from <a rel="nofollow" class="external text" href="http://espn.go.com/blog/boston/celtics/post/_/id/4684171/report-card-shaquille-oneal">the original</a> on May 20, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ESPNBoston.com&amp;rft.atitle=Report+card%3A+Shaquille+O%27Neal&amp;rft.date=2011-05-18&amp;rft.aulast=Forsberg&amp;rft.aufirst=Chris&amp;rft_id=http%3A%2F%2Fespn.go.com%2Fblog%2Fboston%2Fceltics%2Fpost%2F_%2Fid%2F4684171%2Freport-card-shaquille-oneal&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-120"><span class="mw-cite-backlink"><b><a href="#cite_ref-120">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan</a> p. 257.</span></li>
<li id="cite_note-121"><span class="mw-cite-backlink"><b><a href="#cite_ref-121">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/boston/nba/news/story?id=6615886">"Shaq announces retirement on web"</a>. ESPN. June 1, 2011<span class="reference-accessdate">. Retrieved <span class="nowrap">June 1,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq+announces+retirement+on+web&amp;rft.pub=ESPN&amp;rft.date=2011-06-01&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fboston%2Fnba%2Fnews%2Fstory%3Fid%3D6615886&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-giles-122"><span class="mw-cite-backlink">^ <a href="#cite_ref-giles_122-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-giles_122-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation news">Olivarez-Giles, Nathan (June 1, 2011). <a rel="nofollow" class="external text" href="http://latimesblogs.latimes.com/technology/2011/06/shaq-announces-nba-retirement-on-twitter-using-tout-iphone-app.html">"Shaq announces NBA retirement on Twitter, using Tout iPhone app"</a>. <i><a href="/wiki/Los_Angeles_Times" title="Los Angeles Times">Los Angeles Times</a></i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5z85LOKUn?url=http://latimesblogs.latimes.com/technology/2011/06/shaq-announces-nba-retirement-on-twitter-using-tout-iphone-app.html">Archived</a> from the original on June 2, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=Shaq+announces+NBA+retirement+on+Twitter%2C+using+Tout+iPhone+app&amp;rft.date=2011-06-01&amp;rft.aulast=Olivarez-Giles&amp;rft.aufirst=Nathan&amp;rft_id=http%3A%2F%2Flatimesblogs.latimes.com%2Ftechnology%2F2011%2F06%2Fshaq-announces-nba-retirement-on-twitter-using-tout-iphone-app.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-123"><span class="mw-cite-backlink"><b><a href="#cite_ref-123">^</a></b></span> <span class="reference-text"><cite class="citation web">Reynolds, Tim (June 3, 2011). <a rel="nofollow" class="external text" href="https://sports.yahoo.com/nba/news;_ylt=Ajvk5YYrwHEHSQW8rvffiEK8vLYF?slug=ap-shaqretires">"Shaq moving on to the next chapter—retirement"</a>. <i>Yahoo! Sports</i><span class="reference-accessdate">. Retrieved <span class="nowrap">June 3,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Yahoo%21+Sports&amp;rft.atitle=Shaq+moving+on+to+the+next+chapter%E2%80%94retirement&amp;rft.date=2011-06-03&amp;rft.aulast=Reynolds&amp;rft.aufirst=Tim&amp;rft_id=https%3A%2F%2Fsports.yahoo.com%2Fnba%2Fnews%3B_ylt%3DAjvk5YYrwHEHSQW8rvffiEK8vLYF%3Fslug%3Dap-shaqretires&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span><sup class="noprint Inline-Template"><span style="white-space: nowrap;">[<i><a href="/wiki/Wikipedia:Link_rot" title="Wikipedia:Link rot"><span title="&#160;Dead link since September 2016">permanent dead link</span></a></i>]</span></sup></span></li>
<li id="cite_note-124"><span class="mw-cite-backlink"><b><a href="#cite_ref-124">^</a></b></span> <span class="reference-text"><a href="/wiki/ESPN" title="ESPN">ESPN</a> <a rel="nofollow" class="external autonumber" href="http://espn.go.com/nba/player/bio/_/id/614/shaquille-oneal">[2]</a></span></li>
<li id="cite_note-125"><span class="mw-cite-backlink"><b><a href="#cite_ref-125">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 112.</span></li>
<li id="cite_note-126"><span class="mw-cite-backlink"><b><a href="#cite_ref-126">^</a></b></span> <span class="reference-text"><a href="/wiki/Jackie_MacMullan" title="Jackie MacMullan">Jackie MacMullan</a> <a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/vault/article/magazine/MAG1015501/index.htm">The NBA</a>, <i>Sports Illustrated</i>, March 29, 1999.</span></li>
<li id="cite_note-127"><span class="mw-cite-backlink"><b><a href="#cite_ref-127">^</a></b></span> <span class="reference-text">SCOTT HOWARD-COOPER and TIM KAWAKAMI <a rel="nofollow" class="external text" href="http://articles.latimes.com/2000/jun/13/sports/sp-40593">O'Neal, Bryant Still Possible for Olympics</a>, <i>Los Angeles Times</i>, June 13, 2000.</span></li>
<li id="cite_note-128"><span class="mw-cite-backlink"><b><a href="#cite_ref-128">^</a></b></span> <span class="reference-text"><a href="/wiki/Chris_Sheridan_(sportswriter)" title="Chris Sheridan (sportswriter)">Chris Sheridan</a> <a rel="nofollow" class="external text" href="http://community.seattletimes.nwsource.com/archive/?date=20020902&amp;slug=basket02">Weight of the world leans on U.S. team</a>, <i>The Seattle Times</i>, September 2, 2002.</span></li>
<li id="cite_note-129"><span class="mw-cite-backlink"><b><a href="#cite_ref-129">^</a></b></span> <span class="reference-text"><a href="/wiki/Marc_Stein_(reporter)" title="Marc Stein (reporter)">Marc Stein</a> <a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/columns/story?columnist=stein_marc&amp;id=1812395">Team USA carousel continues</a>, <i><a href="/wiki/ESPN" title="ESPN">ESPN</a></i>, May 29, 2004.</span></li>
<li id="cite_note-130"><span class="mw-cite-backlink"><b><a href="#cite_ref-130">^</a></b></span> <span class="reference-text">AP <a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/news/story?id=2283371">Colangelo says Shaq not ruling out Olympics</a>, <i><a href="/wiki/ESPN" title="ESPN">ESPN</a></i>, January 7, 2006.</span></li>
<li id="cite_note-131"><span class="mw-cite-backlink"><b><a href="#cite_ref-131">^</a></b></span> <span class="reference-text">Michael Cunningham <a rel="nofollow" class="external text" href="http://articles.sun-sentinel.com/2006-07-21/news/0607201619_1_nba-teams-usa-basketball-nba-players/2">Full Summer Gives U.s. Players More Than A Workout</a>, <i><a href="/wiki/South_Florida_Sun-Sentinel" class="mw-redirect" title="South Florida Sun-Sentinel">South Florida Sun-Sentinel</a></i>, July 21, 2006.</span></li>
<li id="cite_note-132"><span class="mw-cite-backlink"><b><a href="#cite_ref-132">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/suns/news/tribune_080207_shaq.html">"SUNS: Shaq on Board"</a>. NBA.com<span class="reference-accessdate">. Retrieved <span class="nowrap">December 29,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=SUNS%3A+Shaq+on+Board&amp;rft.pub=NBA.com&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fsuns%2Fnews%2Ftribune_080207_shaq.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-133"><span class="mw-cite-backlink"><b><a href="#cite_ref-133">^</a></b></span> <span class="reference-text"><cite class="citation web">Roberts, Selena (September 13, 1993). <a rel="nofollow" class="external text" href="http://articles.orlandosentinel.com/1993-09-13/sports/9309130272_1_backboard-new-rule-tiebreaker">"New This Year In Nba: Shaq-proof Backboards"</a>. <i>Orlando Sentinel</i><span class="reference-accessdate">. Retrieved <span class="nowrap">April 25,</span> 2017</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Orlando+Sentinel&amp;rft.atitle=New+This+Year+In+Nba%3A+Shaq-proof+Backboards&amp;rft.date=1993-09-13&amp;rft.aulast=Roberts&amp;rft.aufirst=Selena&amp;rft_id=http%3A%2F%2Farticles.orlandosentinel.com%2F1993-09-13%2Fsports%2F9309130272_1_backboard-new-rule-tiebreaker&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-134"><span class="mw-cite-backlink"><b><a href="#cite_ref-134">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.basketball-reference.com/leaders/FGP_career.html">"Career Leaders and Records for Field Goal Pct"</a>. Basketball-reference.com<span class="reference-accessdate">. Retrieved <span class="nowrap">December 29,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Career+Leaders+and+Records+for+Field+Goal+Pct&amp;rft.pub=Basketball-reference.com&amp;rft_id=https%3A%2F%2Fwww.basketball-reference.com%2Fleaders%2FFGP_career.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-135"><span class="mw-cite-backlink"><b><a href="#cite_ref-135">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/recap?gameId=280429024">"Phoenix Suns vs. San Antonio Spurs - Recap - April 29, 2008"</a>. ESPN. April 29, 2008<span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Phoenix+Suns+vs.+San+Antonio+Spurs+-+Recap+-+April+29%2C+2008&amp;rft.pub=ESPN&amp;rft.date=2008-04-29&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Frecap%3FgameId%3D280429024&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-136"><span class="mw-cite-backlink"><b><a href="#cite_ref-136">^</a></b></span> <span class="reference-text"><cite class="citation web">Through the 2004–2005 season. <a rel="nofollow" class="external text" href="http://www.nba.com/history/records/regular_freethrows.html">"Regular Season Records: Free Throws"</a>. NBA.com<span class="reference-accessdate">. Retrieved <span class="nowrap">December 29,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Regular+Season+Records%3A+Free+Throws&amp;rft.pub=NBA.com&amp;rft.au=Through+the+2004%E2%80%932005+season&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fhistory%2Frecords%2Fregular_freethrows.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-137"><span class="mw-cite-backlink"><b><a href="#cite_ref-137">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 139.</span></li>
<li id="cite_note-138"><span class="mw-cite-backlink"><b><a href="#cite_ref-138">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.basketball-reference.com/leaders/FTA_career.html">"Career Leaders and Records for Free Throw Attempts –"</a>. Basketball-reference.com<span class="reference-accessdate">. Retrieved <span class="nowrap">December 29,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Career+Leaders+and+Records+for+Free+Throw+Attempts+%E2%80%93&amp;rft.pub=Basketball-reference.com&amp;rft_id=https%3A%2F%2Fwww.basketball-reference.com%2Fleaders%2FFTA_career.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-139"><span class="mw-cite-backlink"><b><a href="#cite_ref-139">^</a></b></span> <span class="reference-text"><cite class="citation news">Bob Baum (December 25, 2008). <a rel="nofollow" class="external text" href="http://www.nba.com/games/20081225/SASPHX/recap.html">"Mason's 3-pointer gives Spurs 91–90 win over Suns"</a>. nba.com. Associated Press.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Mason%27s+3-pointer+gives+Spurs+91%E2%80%9390+win+over+Suns&amp;rft.date=2008-12-25&amp;rft.au=Bob+Baum&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fgames%2F20081225%2FSASPHX%2Frecap.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-140"><span class="mw-cite-backlink"><b><a href="#cite_ref-140">^</a></b></span> <span class="reference-text">Benjamin, Josh. (September 21, 2012). <a rel="nofollow" class="external text" href="http://m.bleacherreport.com/articles/1342459-5-things-dwight-howard-does-better-than-shaquille-oneal-ever-did-with-la-lakers/page/3">"5 Things Dwight Howard Does Better Than Shaquille O'Neal Ever Did With The LA Lakers"</a>. <i>Bleacher Report</i>. Retrieved June 22, 2015.</span></li>
<li id="cite_note-141"><span class="mw-cite-backlink"><b><a href="#cite_ref-141">^</a></b></span> <span class="reference-text"><cite class="citation news">Medina, Mark (June 1, 2011). <a rel="nofollow" class="external text" href="http://lakersblog.latimes.com/lakersblog/2011/06/shaquille-oneals-retirement-brings-immediate-reflections-on-what-his-legacy-with-the-lakers-entails.html">"Shaquille O'Neal's retirement brings reflections on his legacy with the Lakers"</a>. <i>Los Angeles Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/646sSBK5U?url=http://lakersblog.latimes.com/lakersblog/2011/06/shaquille-oneals-retirement-brings-immediate-reflections-on-what-his-legacy-with-the-lakers-entails.html">Archived</a> from the original on December 22, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=Shaquille+O%27Neal%27s+retirement+brings+reflections+on+his+legacy+with+the+Lakers&amp;rft.date=2011-06-01&amp;rft.aulast=Medina&amp;rft.aufirst=Mark&amp;rft_id=http%3A%2F%2Flakersblog.latimes.com%2Flakersblog%2F2011%2F06%2Fshaquille-oneals-retirement-brings-immediate-reflections-on-what-his-legacy-with-the-lakers-entails.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-142"><span class="mw-cite-backlink"><b><a href="#cite_ref-142">^</a></b></span> <span class="reference-text"><cite class="citation news">Eric Pincus (April 2, 2013). <a rel="nofollow" class="external text" href="http://www.latimes.com/sports/lakersnow/la-sp-ln-lakers-retire-shaquille-oneal-jersey-20130402,0,914934.story">"Lakers retire Shaquille O'Neal's jersey"</a>. <i>Los Angeles Times</i><span class="reference-accessdate">. Retrieved <span class="nowrap">April 2,</span> 2013</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=Lakers+retire+Shaquille+O%27Neal%27s+jersey&amp;rft.date=2013-04-02&amp;rft.au=Eric+Pincus&amp;rft_id=http%3A%2F%2Fwww.latimes.com%2Fsports%2Flakersnow%2Fla-sp-ln-lakers-retire-shaquille-oneal-jersey-20130402%2C0%2C914934.story&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-143"><span class="mw-cite-backlink"><b><a href="#cite_ref-143">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.foxsports.com/nba/story/shaq-athletes-multiple-retired-numbers-jersey-miami-heat-los-angeles-lakers-wayne-gretzky-jackie-robinson-michael-jordan-022216">"Shaq and 31 more athletes with numbers retired by multiple teams"</a>. <i>FOX Sports</i><span class="reference-accessdate">. Retrieved <span class="nowrap">December 22,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=FOX+Sports&amp;rft.atitle=Shaq+and+31+more+athletes+with+numbers+retired+by+multiple+teams&amp;rft_id=http%3A%2F%2Fwww.foxsports.com%2Fnba%2Fstory%2Fshaq-athletes-multiple-retired-numbers-jersey-miami-heat-los-angeles-lakers-wayne-gretzky-jackie-robinson-michael-jordan-022216&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-144"><span class="mw-cite-backlink"><b><a href="#cite_ref-144">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20160226172241/http://shaq.world/athletes-with-multiple-retired-numbers">"Shaq Now Among Small Group Of Athletes Whose Numbers Have Been Retired By Multiple Teams"</a>. <i>Shaq</i>. Archived from <a rel="nofollow" class="external text" href="http://shaq.world/athletes-with-multiple-retired-numbers">the original</a> on February 26, 2016<span class="reference-accessdate">. Retrieved <span class="nowrap">February 26,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Shaq&amp;rft.atitle=Shaq+Now+Among+Small+Group+Of+Athletes+Whose+Numbers+Have+Been+Retired+By+Multiple+Teams&amp;rft_id=http%3A%2F%2Fshaq.world%2Fathletes-with-multiple-retired-numbers&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-145"><span class="mw-cite-backlink"><b><a href="#cite_ref-145">^</a></b></span> <span class="reference-text"><cite class="citation news">Mike Bresnahan &amp; Robyn Norwood (June 12, 2007). <a rel="nofollow" class="external text" href="http://www.latimes.com/sports/la-sp-briefing12-2008jun12,0,7253710.story">"Bank shot could pay off for Shaq"</a>. <i>Los Angeles Times</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=Bank+shot+could+pay+off+for+Shaq&amp;rft.date=2007-06-12&amp;rft.au=Mike+Bresnahan+%26+Robyn+Norwood&amp;rft_id=http%3A%2F%2Fwww.latimes.com%2Fsports%2Fla-sp-briefing12-2008jun12%2C0%2C7253710.story&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-146"><span class="mw-cite-backlink"><b><a href="#cite_ref-146">^</a></b></span> <span class="reference-text"><cite class="citation news">Jack McCallum (December 10, 2002). <a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/inside_game/jack_mccallum/news/2002/06/12/insider/">"Inside the NBA – SI's Jack McCallum: Sizing up Shaq"</a>. CNNSI.com.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Inside+the+NBA+%E2%80%93+SI%27s+Jack+McCallum%3A+Sizing+up+Shaq&amp;rft.date=2002-12-10&amp;rft_id=http%3A%2F%2Fsportsillustrated.cnn.com%2Finside_game%2Fjack_mccallum%2Fnews%2F2002%2F06%2F12%2Finsider%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span><span class="citation-comment" style="display:none; color:#33aa33; margin-left:0.3em">CS1 maint: Uses authors parameter (<a href="/wiki/Category:CS1_maint:_Uses_authors_parameter" title="Category:CS1 maint: Uses authors parameter">link</a>)</span></span></li>
<li id="cite_note-147"><span class="mw-cite-backlink"><b><a href="#cite_ref-147">^</a></b></span> <span class="reference-text"><cite class="citation news">Geof Harris (December 18, 2010). <a rel="nofollow" class="external text" href="https://web.archive.org/web/20131217165746/http://www.lowpostnews.com/celtics/shaq-diesel-never-say-never-again12182010/">"Shaq Diesel: Never Say Never Again"</a>. <i>the low post news</i>. Archived from <a rel="nofollow" class="external text" href="http://www.lowpostnews.com/celtics/shaq-diesel-never-say-never-again12182010/">the original</a> on December 17, 2013.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=the+low+post+news&amp;rft.atitle=Shaq+Diesel%3A+Never+Say+Never+Again&amp;rft.date=2010-12-18&amp;rft.au=Geof+Harris&amp;rft_id=http%3A%2F%2Fwww.lowpostnews.com%2Fceltics%2Fshaq-diesel-never-say-never-again12182010%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-heisler_06012011-148"><span class="mw-cite-backlink">^ <a href="#cite_ref-heisler_06012011_148-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-heisler_06012011_148-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation news">Heisler, Mark (June 1, 2011). <a rel="nofollow" class="external text" href="http://www.latimes.com/sports/la-sp-heisler-shaquille-oneal-20110602,0,6780278,full.column">"Shaquille O'Neal was not always the most dominating, but always the most fun"</a>. <i><a href="/wiki/Los_Angeles_Times" title="Los Angeles Times">Los Angeles Times</a></i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/5z8WczRHF?url=http://www.latimes.com/sports/la-sp-heisler-shaquille-oneal-20110602,0,6780278,full.column">Archived</a> from the original on June 2, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=Shaquille+O%27Neal+was+not+always+the+most+dominating%2C+but+always+the+most+fun&amp;rft.date=2011-06-01&amp;rft.aulast=Heisler&amp;rft.aufirst=Mark&amp;rft_id=http%3A%2F%2Fwww.latimes.com%2Fsports%2Fla-sp-heisler-shaquille-oneal-20110602%2C0%2C6780278%2Cfull.column&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-149"><span class="mw-cite-backlink"><b><a href="#cite_ref-149">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p.205</span></li>
<li id="cite_note-150"><span class="mw-cite-backlink"><b><a href="#cite_ref-150">^</a></b></span> <span class="reference-text"><cite class="citation news">Dave McNary (June 23, 2000). <a rel="nofollow" class="external text" href="http://www.variety.com/article/VR1117782988.html?categoryid=18&amp;cs=1">"Admen strike back against SAG/AFTRA"</a>. <i>Variety</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Variety&amp;rft.atitle=Admen+strike+back+against+SAG%2FAFTRA&amp;rft.date=2000-06-23&amp;rft.au=Dave+McNary&amp;rft_id=http%3A%2F%2Fwww.variety.com%2Farticle%2FVR1117782988.html%3Fcategoryid%3D18%26cs%3D1&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-151"><span class="mw-cite-backlink"><b><a href="#cite_ref-151">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://news.bbc.co.uk/2/hi/entertainment/801470.stm">"Sports stars break Hollywood strike"</a>. <i>BBC News</i>. June 22, 2000.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=BBC+News&amp;rft.atitle=Sports+stars+break+Hollywood+strike&amp;rft.date=2000-06-22&amp;rft_id=http%3A%2F%2Fnews.bbc.co.uk%2F2%2Fhi%2Fentertainment%2F801470.stm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-152"><span class="mw-cite-backlink"><b><a href="#cite_ref-152">^</a></b></span> <span class="reference-text"><cite class="citation web">Tim Povtak (November 5, 2002). <a rel="nofollow" class="external text" href="http://articles.orlandosentinel.com/2002-11-05/sports/0211050282_1_sacramento-kings-christie-lakers">"Kings Come Out Fighting"</a>. <i>Orlando Sentinel</i><span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Orlando+Sentinel&amp;rft.atitle=Kings+Come+Out+Fighting&amp;rft.date=2002-11-05&amp;rft.au=Tim+Povtak&amp;rft_id=http%3A%2F%2Farticles.orlandosentinel.com%2F2002-11-05%2Fsports%2F0211050282_1_sacramento-kings-christie-lakers&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-153"><span class="mw-cite-backlink"><b><a href="#cite_ref-153">^</a></b></span> <span class="reference-text"><cite class="citation web">Marc Narducci (April 19, 2003). <a rel="nofollow" class="external text" href="http://articles.philly.com/2003-04-19/sports/25477258_1_chris-webber-shaquille-o-neal-los-angeles-lakers">"Kings Eyeing Crown, not L.A."</a> <i>The Philadelphia Inquirer</i><span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=The+Philadelphia+Inquirer&amp;rft.atitle=Kings+Eyeing+Crown%2C+not+L.A.&amp;rft.date=2003-04-19&amp;rft.au=Marc+Narducci&amp;rft_id=http%3A%2F%2Farticles.philly.com%2F2003-04-19%2Fsports%2F25477258_1_chris-webber-shaquille-o-neal-los-angeles-lakers&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-154"><span class="mw-cite-backlink"><b><a href="#cite_ref-154">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20120607195519/http://blogs.sacbee.com/sports/kings/archives/2011/06/shaq-was-more-t.html">"Shaq was more than a dominant player"</a>. Sacramento Bee. June 1, 2011. Archived from <a rel="nofollow" class="external text" href="http://blogs.sacbee.com/sports/kings/archives/2011/06/shaq-was-more-t.html">the original</a> on June 7, 2012<span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq+was+more+than+a+dominant+player&amp;rft.pub=Sacramento+Bee&amp;rft.date=2011-06-01&amp;rft_id=http%3A%2F%2Fblogs.sacbee.com%2Fsports%2Fkings%2Farchives%2F2011%2F06%2Fshaq-was-more-t.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-155"><span class="mw-cite-backlink"><b><a href="#cite_ref-155">^</a></b></span> <span class="reference-text"><cite class="citation news">Mark Medina (June 2, 2011). <a rel="nofollow" class="external text" href="http://lakersblog.latimes.com/lakersblog/2011/06/top-5-shaq-moments-as-a-laker.html">"Top 5 Shaq moments as a Laker"</a>. <i>Los Angeles Times</i><span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=Top+5+Shaq+moments+as+a+Laker&amp;rft.date=2011-06-02&amp;rft.au=Mark+Medina&amp;rft_id=http%3A%2F%2Flakersblog.latimes.com%2Flakersblog%2F2011%2F06%2Ftop-5-shaq-moments-as-a-laker.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-156"><span class="mw-cite-backlink"><b><a href="#cite_ref-156">^</a></b></span> <span class="reference-text"><cite class="citation news"><a href="/wiki/Emil_Guillermo" title="Emil Guillermo">Guillermo, Emil</a> (January 14, 2003). <a rel="nofollow" class="external text" href="https://www.webcitation.org/5u6k8lCrT?url=http://articles.sfgate.com/2003-01-14/news/17470622_1_yao-ming-birthday-party-asian-american-studies">"Shaq's Apology Not Good Enough"</a>. <i>San Francisco Chronicle</i>. Archived from <a rel="nofollow" class="external text" href="http://articles.sfgate.com/2003-01-14/news/17470622_1_yao-ming-birthday-party-asian-american-studies">the original</a> on November 9, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">August 25,</span> 2010</span>. <q>Perhaps we should put it in terms Shaq might understand: If a white comedian imitated Shaq by making monkey sounds while eating fried chicken and watermelon, would the point be clearer?</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=San+Francisco+Chronicle&amp;rft.atitle=Shaq%27s+Apology+Not+Good+Enough&amp;rft.date=2003-01-14&amp;rft.aulast=Guillermo&amp;rft.aufirst=Emil&amp;rft_id=http%3A%2F%2Farticles.sfgate.com%2F2003-01-14%2Fnews%2F17470622_1_yao-ming-birthday-party-asian-american-studies&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-157"><span class="mw-cite-backlink"><b><a href="#cite_ref-157">^</a></b></span> <span class="reference-text"><cite class="citation news"><a href="/wiki/George_Vecsey" title="George Vecsey">Vecsey, George</a> (January 12, 2003). <a rel="nofollow" class="external text" href="https://www.nytimes.com/2003/01/12/sports/sports-of-the-times-fans-in-shanghai-are-voting-in-the-mainstream.html">"Sports of The Times; Fans in Shanghai Are Voting in the Mainstream"</a>. <i>The New York Times</i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 25,</span> 2010</span>. <q>Yao quickly said: "The world is getting smaller, and I think it's important to have a greater understanding of other cultures. I believe Shaquille O'Neal was joking, but I think that a lot of Asian people don't understand that kind of joke."</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+New+York+Times&amp;rft.atitle=Sports+of+The+Times%3B+Fans+in+Shanghai+Are+Voting+in+the+Mainstream&amp;rft.date=2003-01-12&amp;rft.aulast=Vecsey&amp;rft.aufirst=George&amp;rft_id=https%3A%2F%2Fwww.nytimes.com%2F2003%2F01%2F12%2Fsports%2Fsports-of-the-times-fans-in-shanghai-are-voting-in-the-mainstream.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-158"><span class="mw-cite-backlink"><b><a href="#cite_ref-158">^</a></b></span> <span class="reference-text"><cite class="citation news">Brown, Tim (January 10, 2003). <a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/basketball/news/2003/01/10/shaq_yao_ap/">"Tall tale? Shaq says Yao comments were said in jest"</a>. <i>SI.com</i>. CNN. Associated Press<span class="reference-accessdate">. Retrieved <span class="nowrap">August 25,</span> 2010</span>. <q>"Chinese is hard to learn. I had trouble with it when I was little", Yao joked.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=SI.com&amp;rft.atitle=Tall+tale%3F+Shaq+says+Yao+comments+were+said+in+jest&amp;rft.date=2003-01-10&amp;rft.aulast=Brown&amp;rft.aufirst=Tim&amp;rft_id=http%3A%2F%2Fsportsillustrated.cnn.com%2Fbasketball%2Fnews%2F2003%2F01%2F10%2Fshaq_yao_ap%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-159"><span class="mw-cite-backlink"><b><a href="#cite_ref-159">^</a></b></span> <span class="reference-text"><cite class="citation news">Wilborn, Michael (December 20, 2010). <a rel="nofollow" class="external text" href="https://web.archive.org/web/20150402201354/http://sports.espn.go.com/espn/commentary/news/story?page=wilbon%2F101220">"Can't overestimate Yao Ming's impact"</a>. ESPN. Archived from <a rel="nofollow" class="external text" href="http://sports.espn.go.com/espn/commentary/news/story?page=wilbon/101220">the original</a> on April 2, 2015<span class="reference-accessdate">. Retrieved <span class="nowrap">March 13,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Can%27t+overestimate+Yao+Ming%27s+impact&amp;rft.date=2010-12-20&amp;rft.aulast=Wilborn&amp;rft.aufirst=Michael&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fespn%2Fcommentary%2Fnews%2Fstory%3Fpage%3Dwilbon%2F101220&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-160"><span class="mw-cite-backlink"><b><a href="#cite_ref-160">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/playoffs2005/news/story?id=2059037">"Shaq: 'I've been playing like Erick Dampier<span style="padding-right:0.2em;">'</span>"</a>. ESPN. May 13, 2005<span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq%3A+%27I%27ve+been+playing+like+Erick+Dampier%27&amp;rft.pub=ESPN&amp;rft.date=2005-05-13&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Fplayoffs2005%2Fnews%2Fstory%3Fid%3D2059037&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-161"><span class="mw-cite-backlink"><b><a href="#cite_ref-161">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/finals2006/">"NBA.com: Finals 2006"</a>. ESPN. 2006<span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=NBA.com%3A+Finals+2006&amp;rft.pub=ESPN&amp;rft.date=2006&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Ffinals2006%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-162"><span class="mw-cite-backlink"><b><a href="#cite_ref-162">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/vault/article/magazine/MAG1187093/2/index.htm">An A-to-Z remembrance of Shaq's career—basketball and (mostly) otherwise</a> – Sports Illustrated, CNN</span></li>
<li id="cite_note-163"><span class="mw-cite-backlink"><b><a href="#cite_ref-163">^</a></b></span> <span class="reference-text"><cite class="citation journal"><a class="external text" href="https://en.wikipedia.org/w/index.php?title=Shaq%27s_Big_Challenge&amp;oldid=732614366">"Shaq's Big Challenge"</a>. <i>Wikipedia</i>. 2016-08-02.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Wikipedia&amp;rft.atitle=Shaq%27s+Big+Challenge&amp;rft.date=2016-08-02&amp;rft_id=https%3A%2F%2Fen.wikipedia.org%2Fw%2Findex.php%3Ftitle%3DShaq%2527s_Big_Challenge%26oldid%3D732614366&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-164"><span class="mw-cite-backlink"><b><a href="#cite_ref-164">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/recap?gameId=260116013">"Miami vs. Los Angeles – Recap"</a>. ESPN. Associated Press. January 16, 2006.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Miami+vs.+Los+Angeles+%E2%80%93+Recap&amp;rft.date=2006-01-16&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Frecap%3FgameId%3D260116013&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-165"><span class="mw-cite-backlink"><b><a href="#cite_ref-165">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.tmz.com/2008/06/23/shaq-attacks-kobe-you-ruined-my-marriage/">"Shaq Attacks Kobe: You Ruined My Marriage"</a>. TMZ. June 23, 2008<span class="reference-accessdate">. Retrieved <span class="nowrap">December 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq+Attacks+Kobe%3A+You+Ruined+My+Marriage&amp;rft.pub=TMZ&amp;rft.date=2008-06-23&amp;rft_id=http%3A%2F%2Fwww.tmz.com%2F2008%2F06%2F23%2Fshaq-attacks-kobe-you-ruined-my-marriage%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-166"><span class="mw-cite-backlink"><b><a href="#cite_ref-166">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/espn/wire?section=nba&amp;id=3458056">"Shaq takes a freestyle swipe at Kobe"</a>. <a href="/wiki/ESPN" title="ESPN">ESPN</a>.com. Associated Press. June 23, 2008.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Shaq+takes+a+freestyle+swipe+at+Kobe&amp;rft.date=2008-06-23&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fespn%2Fwire%3Fsection%3Dnba%26id%3D3458056&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-167"><span class="mw-cite-backlink"><b><a href="#cite_ref-167">^</a></b></span> <span class="reference-text"><cite class="citation news">Reid, Shaheem (June 24, 2008). <a rel="nofollow" class="external text" href="http://www.mtv.com/news/articles/1589908/20080624/id_0.jhtml">"Snoop Dogg, Nas, Cory Gunz See Nothing Wrong With Shaquille O'Neal's Anti-Kobe Freestyle"</a>. "MTV.com.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Snoop+Dogg%2C+Nas%2C+Cory+Gunz+See+Nothing+Wrong+With+Shaquille+O%27Neal%27s+Anti-Kobe+Freestyle&amp;rft.date=2008-06-24&amp;rft.aulast=Reid&amp;rft.aufirst=Shaheem&amp;rft_id=http%3A%2F%2Fwww.mtv.com%2Fnews%2Farticles%2F1589908%2F20080624%2Fid_0.jhtml&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-168"><span class="mw-cite-backlink"><b><a href="#cite_ref-168">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://www.sfgate.com/cgi-bin/article.cgi?f=/n/a/2008/06/23/sports/s170747D71.DTL">"Shaq booted from sheriff's 'posse' for Kobe rap"</a>. <i>San Francisco Chronicle</i>. Associated Press. June 24, 2008.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=San+Francisco+Chronicle&amp;rft.atitle=Shaq+booted+from+sheriff%27s+%27posse%27+for+Kobe+rap&amp;rft.date=2008-06-24&amp;rft_id=http%3A%2F%2Fwww.sfgate.com%2Fcgi-bin%2Farticle.cgi%3Ff%3D%2Fn%2Fa%2F2008%2F06%2F23%2Fsports%2Fs170747D71.DTL&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span><sup class="noprint Inline-Template"><span style="white-space: nowrap;">[<i><a href="/wiki/Wikipedia:Link_rot" title="Wikipedia:Link rot"><span title="&#160;Dead link since January 2012">dead link</span></a></i>]</span></sup></span></li>
<li id="cite_note-169"><span class="mw-cite-backlink"><b><a href="#cite_ref-169">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://www.dailytexanonline.com/sports/o-neal-to-get-degree-from-lsu-1.985348">"O'Neal to get degree from LSU"</a>. Associated Press. August 6, 2004.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=O%27Neal+to+get+degree+from+LSU&amp;rft.date=2004-08-06&amp;rft_id=http%3A%2F%2Fwww.dailytexanonline.com%2Fsports%2Fo-neal-to-get-degree-from-lsu-1.985348&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span><sup class="noprint Inline-Template"><span style="white-space: nowrap;">[<i><a href="/wiki/Wikipedia:Link_rot" title="Wikipedia:Link rot"><span title="&#160;Dead link since September 2016">permanent dead link</span></a></i>]</span></sup></span></li>
<li id="cite_note-170"><span class="mw-cite-backlink"><b><a href="#cite_ref-170">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://www.msnbc.msn.com/id/8357843/">"The Big Executive? Shaq masters MBA"</a>. MSNBC. Associated Press. June 26, 2005.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=The+Big+Executive%3F+Shaq+masters+MBA&amp;rft.date=2005-06-26&amp;rft_id=http%3A%2F%2Fwww.msnbc.msn.com%2Fid%2F8357843%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-nytimes.com-171"><span class="mw-cite-backlink">^ <a href="#cite_ref-nytimes.com_171-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-nytimes.com_171-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text">The New York Times (2010). <a rel="nofollow" class="external text" href="https://www.nytimes.com/2010/08/15/magazine/15fob-q4-t.html?ref=magazine">Questions For Shaquille O'Neal – Hoop Dreams – Interview</a>. Retrieved August 13, 2010.</span></li>
<li id="cite_note-172"><span class="mw-cite-backlink"><b><a href="#cite_ref-172">^</a></b></span> <span class="reference-text">Barry University (2010). <a rel="nofollow" class="external text" href="http://www.barry.edu/hrdedd/default.htm">Educational Doctorate (Ed.D.) in Human Resource Development, Barry University</a>. Retrieved August 13, 2010.</span></li>
<li id="cite_note-173"><span class="mw-cite-backlink"><b><a href="#cite_ref-173">^</a></b></span> <span class="reference-text"><cite class="citation web">Gus Garcia-Roberts (April 19, 2012). <a rel="nofollow" class="external text" href="http://blogs.miaminewtimes.com/riptide/2012/04/shaquille_oneal_barry_universi.php">"Shaquille O'Neal, Barry University Student, Is Not Actually Doing a Dissertation"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">May 4,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal%2C+Barry+University+Student%2C+Is+Not+Actually+Doing+a+Dissertation&amp;rft.date=2012-04-19&amp;rft.au=Gus+Garcia-Roberts&amp;rft_id=http%3A%2F%2Fblogs.miaminewtimes.com%2Friptide%2F2012%2F04%2Fshaquille_oneal_barry_universi.php&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-174"><span class="mw-cite-backlink"><b><a href="#cite_ref-174">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.barry.edu/hrdedd/shaqpic.htm">"Shaquille O'Neal and ADSOE Faculty"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">May 4,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal+and+ADSOE+Faculty&amp;rft_id=http%3A%2F%2Fwww.barry.edu%2Fhrdedd%2Fshaqpic.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-175"><span class="mw-cite-backlink"><b><a href="#cite_ref-175">^</a></b></span> <span class="reference-text">page 3 of <cite class="citation news">Shira Springer (August 29, 2010). <a rel="nofollow" class="external text" href="http://www.boston.com/sports/basketball/celtics/articles/2010/08/29/big_man_on_campus_shaq_owns_harvard_yard/">"BIG man on campus"</a>. <i>The Boston Globe</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Boston+Globe&amp;rft.atitle=BIG+man+on+campus&amp;rft.date=2010-08-29&amp;rft.au=Shira+Springer&amp;rft_id=http%3A%2F%2Fwww.boston.com%2Fsports%2Fbasketball%2Fceltics%2Farticles%2F2010%2F08%2F29%2Fbig_man_on_campus_shaq_owns_harvard_yard%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-176"><span class="mw-cite-backlink"><b><a href="#cite_ref-176">^</a></b></span> <span class="reference-text"><cite class="citation news">Lateef Mungin (May 5, 2012). <a rel="nofollow" class="external text" href="http://www.cnn.com/2012/05/05/sport/dr-shaq/index.html?hpt=us_c2">"Shaquille O'Neal to receive doctorate degree"</a>. <i>CNN</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=CNN&amp;rft.atitle=Shaquille+O%27Neal+to+receive+doctorate+degree&amp;rft.date=2012-05-05&amp;rft.au=Lateef+Mungin&amp;rft_id=http%3A%2F%2Fwww.cnn.com%2F2012%2F05%2F05%2Fsport%2Fdr-shaq%2Findex.html%3Fhpt%3Dus_c2&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-177"><span class="mw-cite-backlink"><b><a href="#cite_ref-177">^</a></b></span> <span class="reference-text"><cite class="citation news">Knaub, Kelly (May 6, 2012). <a rel="nofollow" class="external text" href="http://abcnewsradioonline.com/entertainment-news/shaquille-oneal-earns-doctorate-degree.html">"Shaquille O'Neal earns Doctorate"</a>. ABC Radio News website<span class="reference-accessdate">. Retrieved <span class="nowrap">May 6,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Shaquille+O%27Neal+earns+Doctorate&amp;rft.date=2012-05-06&amp;rft.aulast=Knaub&amp;rft.aufirst=Kelly&amp;rft_id=http%3A%2F%2Fabcnewsradioonline.com%2Fentertainment-news%2Fshaquille-oneal-earns-doctorate-degree.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-178"><span class="mw-cite-backlink"><b><a href="#cite_ref-178">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://www.nydailynews.com/entertainment/tv-movies/shaquille-o-neal-set-graduate-new-york-film-academy-nba-star-director-article-1.949991">"Shaquille O'Neal set to graduate from New York Film Academy: NBA star wants to be a director"</a>. <i>Daily News</i>. August 16, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Daily+News&amp;rft.atitle=Shaquille+O%27Neal+set+to+graduate+from+New+York+Film+Academy%3A+NBA+star+wants+to+be+a+director&amp;rft.date=2011-08-16&amp;rft_id=http%3A%2F%2Fwww.nydailynews.com%2Fentertainment%2Ftv-movies%2Fshaquille-o-neal-set-graduate-new-york-film-academy-nba-star-director-article-1.949991&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-179"><span class="mw-cite-backlink"><b><a href="#cite_ref-179">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/2005/basketball/nba/specials/playoffs/2005/05/25/shaq/index.html?cnn=yes">"Going undercover -Shaq helps task force track Internet sex predators"</a>. SI.com. May 25, 2005.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Going+undercover+-Shaq+helps+task+force+track+Internet+sex+predators&amp;rft.date=2005-05-25&amp;rft_id=http%3A%2F%2Fsportsillustrated.cnn.com%2F2005%2Fbasketball%2Fnba%2Fspecials%2Fplayoffs%2F2005%2F05%2F25%2Fshaq%2Findex.html%3Fcnn%3Dyes&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-policeoff-180"><span class="mw-cite-backlink">^ <a href="#cite_ref-policeoff_180-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-policeoff_180-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://nbcsports.msnbc.com/id/10397089/">"Shaq sworn in as reserve police officer"</a>. NBCSports.com. Associated Press. December 10, 2005.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Shaq+sworn+in+as+reserve+police+officer&amp;rft.date=2005-12-10&amp;rft_id=http%3A%2F%2Fnbcsports.msnbc.com%2Fid%2F10397089%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-181"><span class="mw-cite-backlink"><b><a href="#cite_ref-181">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20090714110415/http://www.justnews.com/news/5244919/detail.html">"Second Man Arrested After Tip From Shaquille O'Neal"</a>. November 3, 2005. Archived from <a rel="nofollow" class="external text" href="http://www.justnews.com/news/5244919/detail.html">the original</a> on July 14, 2009.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Second+Man+Arrested+After+Tip+From+Shaquille+O%27Neal&amp;rft.date=2005-11-03&amp;rft_id=http%3A%2F%2Fwww.justnews.com%2Fnews%2F5244919%2Fdetail.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-182"><span class="mw-cite-backlink"><b><a href="#cite_ref-182">^</a></b></span> <span class="reference-text"><i><cite class="citation book">Balko, Radley (July 9, 2013). "Chapter 8: THE 2000's- A WHOLE NEW WAR".</cite></i> <cite class="citation book">Rise of the Warrior Cop: The Militarization of America's Police Forces<i>. PublicAffairs. pp.&#160;288–289. <a href="/wiki/International_Standard_Book_Number" title="International Standard Book Number">ISBN</a>&#160;<a href="/wiki/Special:BookSources/978-1-61039-212-9" title="Special:BookSources/978-1-61039-212-9">978-1-61039-212-9</a>.</i></cite><i><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=bookitem&amp;rft.atitle=Chapter+8%3A+THE+2000%27s-+A+WHOLE+NEW+WAR&amp;rft.btitle=Rise+of+the+Warrior+Cop%3A+The+Militarization+of+America%27s+Police+Forces&amp;rft.pages=288-289&amp;rft.pub=PublicAffairs&amp;rft.date=2013-07-09&amp;rft.isbn=978-1-61039-212-9&amp;rft.aulast=Balko&amp;rft.aufirst=Radley&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span> Kindle Location 5188</i></span></li>
<li id="cite_note-183"><span class="mw-cite-backlink"><b><a href="#cite_ref-183">^</a></b></span> <span class="reference-text"><cite class="citation web">Brett, Jennifer. <a rel="nofollow" class="external text" href="http://www.ajc.com/entertainment/shaq-now-sheriff-deputy-georgia/IUtfx4XZY7BxQDApqJcjzH/">"Shaq is now a sheriff's deputy in Georgia"</a>. <i>ajc</i><span class="reference-accessdate">. Retrieved <span class="nowrap">December 6,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=ajc&amp;rft.atitle=Shaq+is+now+a+sheriff%E2%80%99s+deputy+in+Georgia&amp;rft.aulast=Brett&amp;rft.aufirst=Jennifer&amp;rft_id=http%3A%2F%2Fwww.ajc.com%2Fentertainment%2Fshaq-now-sheriff-deputy-georgia%2FIUtfx4XZY7BxQDApqJcjzH%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-184"><span class="mw-cite-backlink"><b><a href="#cite_ref-184">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.allmusic.com/album/r188424/review">"Shaq Diesel"</a>. <i><a href="/wiki/Allmusic" class="mw-redirect" title="Allmusic">allmusicguide.com</a></i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=allmusicguide.com&amp;rft.atitle=Shaq+Diesel&amp;rft_id=https%3A%2F%2Fwww.allmusic.com%2Falbum%2Fr188424%2Freview&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-185"><span class="mw-cite-backlink"><b><a href="#cite_ref-185">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="http://www.ew.com/ew/article/0,,295411,00.html">"You Can't Stop the Reign"</a>. <i><a href="/wiki/Entertainment_Weekly" title="Entertainment Weekly">ew.com</a></i>. December 13, 1996.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ew.com&amp;rft.atitle=You+Can%27t+Stop+the+Reign&amp;rft.date=1996-12-13&amp;rft_id=http%3A%2F%2Fwww.ew.com%2Few%2Farticle%2F0%2C%2C295411%2C00.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-186"><span class="mw-cite-backlink"><b><a href="#cite_ref-186">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="https://www.allmusic.com/album/r554240/review">"Shaquille O'Neal Presents His Superfriends, Vol. 1" review</a> <i><a href="/wiki/Allmusic" class="mw-redirect" title="Allmusic">allmusicguide.com</a></i></span></li>
<li id="cite_note-AllmusicReview-187"><span class="mw-cite-backlink"><b><a href="#cite_ref-AllmusicReview_187-0">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="https://www.allmusic.com/album/r252894">Shaquille O'Neal</a> at <a href="/wiki/AllMusic" title="AllMusic">AllMusic</a>. Retrieved June 17, 2011.</span></li>
<li id="cite_note-aaron-188"><span class="mw-cite-backlink"><b><a href="#cite_ref-aaron_188-0">^</a></b></span> <span class="reference-text"><cite class="citation news">Adi Joseph (March 6, 2013). <a rel="nofollow" class="external text" href="https://www.usatoday.com/story/gameon/2013/03/06/shaquille-oneal-aaron-carter-thats-how-i-beat-shaq-revenge/1969265/">"Shaq finally gets revenge on Aaron Carter"</a>. <i><a href="/wiki/USA_Today" title="USA Today">USA Today</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">March 26,</span> 2013</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=USA+Today&amp;rft.atitle=Shaq+finally+gets+revenge+on+Aaron+Carter&amp;rft.date=2013-03-06&amp;rft.au=Adi+Joseph&amp;rft_id=https%3A%2F%2Fwww.usatoday.com%2Fstory%2Fgameon%2F2013%2F03%2F06%2Fshaquille-oneal-aaron-carter-thats-how-i-beat-shaq-revenge%2F1969265%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-189"><span class="mw-cite-backlink"><b><a href="#cite_ref-189">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.film4.com/reviews/1994/blue-chips">"Blue Chips (1994) – Film Review from"</a>. Film4<span class="reference-accessdate">. Retrieved <span class="nowrap">August 5,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Blue+Chips+%281994%29+%E2%80%93+Film+Review+from&amp;rft.pub=Film4&amp;rft_id=http%3A%2F%2Fwww.film4.com%2Freviews%2F1994%2Fblue-chips&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-190"><span class="mw-cite-backlink"><b><a href="#cite_ref-190">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.rottentomatoes.com/m/kazaam/">"Kazaam Movie Reviews, Pictures"</a>. Rotten Tomatoes<span class="reference-accessdate">. Retrieved <span class="nowrap">August 5,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Kazaam+Movie+Reviews%2C+Pictures&amp;rft.pub=Rotten+Tomatoes&amp;rft_id=http%3A%2F%2Fwww.rottentomatoes.com%2Fm%2Fkazaam%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-191"><span class="mw-cite-backlink"><b><a href="#cite_ref-191">^</a></b></span> <span class="reference-text"><cite class="citation news"><a href="/wiki/Army_Archerd" title="Army Archerd">Army Archerd</a> (August 23, 2001). <a rel="nofollow" class="external text" href="http://www.variety.com/article/VR1117851683.html?categoryid=2&amp;cs=1">"Touchy topic addressed in upcoming pix"</a>. <i>Variety</i><span class="reference-accessdate">. Retrieved <span class="nowrap">April 6,</span> 2008</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Variety&amp;rft.atitle=Touchy+topic+addressed+in+upcoming+pix&amp;rft.date=2001-08-23&amp;rft.au=Army+Archerd&amp;rft_id=http%3A%2F%2Fwww.variety.com%2Farticle%2FVR1117851683.html%3Fcategoryid%3D2%26cs%3D1&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-192"><span class="mw-cite-backlink"><b><a href="#cite_ref-192">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.behindthevoiceactors.com/Shaquille-ONeal/">"Shaquille O'Neal"</a>. Behind the Voice Actors<span class="reference-accessdate">. Retrieved <span class="nowrap">June 14,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal&amp;rft.pub=Behind+the+Voice+Actors&amp;rft_id=http%3A%2F%2Fwww.behindthevoiceactors.com%2FShaquille-ONeal%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-193"><span class="mw-cite-backlink"><b><a href="#cite_ref-193">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20110828070621/http://wiki.nba-live.com/index.php?n=Games.Covers">"The NBA Live Wiki – Covers"</a>. Archived from <a rel="nofollow" class="external text" href="http://wiki.nba-live.com/index.php?n=Games.Covers">the original</a> on August 28, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=The+NBA+Live+Wiki+%E2%80%93+Covers&amp;rft_id=http%3A%2F%2Fwiki.nba-live.com%2Findex.php%3Fn%3DGames.Covers&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-194"><span class="mw-cite-backlink"><b><a href="#cite_ref-194">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20070806031920/http://games.ign.com/articles/641/641992p1.html">"Shaq to Grace Cover of NBA 2K6"</a>. IGN. August 15, 2005. Archived from <a rel="nofollow" class="external text" href="http://games.ign.com/articles/641/641992p1.html">the original</a> on August 6, 2007<span class="reference-accessdate">. Retrieved <span class="nowrap">May 7,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq+to+Grace+Cover+of+NBA+2K6&amp;rft.pub=IGN&amp;rft.date=2005-08-15&amp;rft_id=http%3A%2F%2Fgames.ign.com%2Farticles%2F641%2F641992p1.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-195"><span class="mw-cite-backlink"><b><a href="#cite_ref-195">^</a></b></span> <span class="reference-text"><cite class="citation web">G., Matt. <a rel="nofollow" class="external text" href="http://www.planetxbox360.com/article_243/Shaq_Stays_as_Cover_Athlete_for_NBA_2K7">"Shaq Stays as Cover Athlete for NBA 2K7"</a>. Planet Xbox 360<span class="reference-accessdate">. Retrieved <span class="nowrap">May 7,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq+Stays+as+Cover+Athlete+for+NBA+2K7&amp;rft.pub=Planet+Xbox+360&amp;rft.aulast=G.&amp;rft.aufirst=Matt&amp;rft_id=http%3A%2F%2Fwww.planetxbox360.com%2Farticle_243%2FShaq_Stays_as_Cover_Athlete_for_NBA_2K7&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-196"><span class="mw-cite-backlink"><b><a href="#cite_ref-196">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.thefreelibrary.com/Midway+Games+Signs+Shaquille+O%27Neal+for+NBA+Showtime%3A+NBA+on+NBC.-a056056549">"Midway Games Signs Shaquille O'Neal for NBA Showtime: NBA on NBC"</a>. October 7, 1999<span class="reference-accessdate">. Retrieved <span class="nowrap">May 7,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Midway+Games+Signs+Shaquille+O%27Neal+for+NBA+Showtime%3A+NBA+on+NBC&amp;rft.date=1999-10-07&amp;rft_id=http%3A%2F%2Fwww.thefreelibrary.com%2FMidway%2BGames%2BSigns%2BShaquille%2BO%2527Neal%2Bfor%2BNBA%2BShowtime%253A%2BNBA%2Bon%2BNBC.-a056056549&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-197"><span class="mw-cite-backlink"><b><a href="#cite_ref-197">^</a></b></span> <span class="reference-text"><cite class="citation web">Cernea, Mihail (May 26, 2010). <a rel="nofollow" class="external text" href="http://news.softpedia.com/news/Shaquille-O-Neal-Is-A-Playable-Fighter-in-UFC-Undisputed-2010-143056.shtml">"Shaquille O'Neal Is a Playable Fighter in UFC Undisputed 2010"</a>. Softpedia<span class="reference-accessdate">. Retrieved <span class="nowrap">May 7,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal+Is+a+Playable+Fighter+in+UFC+Undisputed+2010&amp;rft.pub=Softpedia&amp;rft.date=2010-05-26&amp;rft.aulast=Cernea&amp;rft.aufirst=Mihail&amp;rft_id=http%3A%2F%2Fnews.softpedia.com%2Fnews%2FShaquille-O-Neal-Is-A-Playable-Fighter-in-UFC-Undisputed-2010-143056.shtml&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-198"><span class="mw-cite-backlink"><b><a href="#cite_ref-198">^</a></b></span> <span class="reference-text"><cite class="citation web">Sarkar, Samit (March 6, 2014). <a rel="nofollow" class="external text" href="https://www.polygon.com/2014/3/6/5477502/shaquille-oneal-shaq-fu-a-legend-reborn-indiegogo-450k">"Shaquille O'Neal funding Shaq Fu sequel on Indiegogo for $450K"</a>. <i><a href="/wiki/Polygon_(website)" title="Polygon (website)">Polygon</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">May 19,</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Polygon&amp;rft.atitle=Shaquille+O%27Neal+funding+Shaq+Fu+sequel+on+Indiegogo+for+%24450K&amp;rft.date=2014-03-06&amp;rft.aulast=Sarkar&amp;rft.aufirst=Samit&amp;rft_id=https%3A%2F%2Fwww.polygon.com%2F2014%2F3%2F6%2F5477502%2Fshaquille-oneal-shaq-fu-a-legend-reborn-indiegogo-450k&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-199"><span class="mw-cite-backlink"><b><a href="#cite_ref-199">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.applepiemovie.com/html/shaqandlucille.html">"Shaquille O'Neal &amp; Lucille Harrison"</a>. <i>applepiemovie.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=applepiemovie.com&amp;rft.atitle=Shaquille+O%27Neal+%26+Lucille+Harrison&amp;rft_id=http%3A%2F%2Fwww.applepiemovie.com%2Fhtml%2Fshaqandlucille.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-200"><span class="mw-cite-backlink"><b><a href="#cite_ref-200">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://espn.go.com/classic/s/mothersday_applepie.html">"<span style="padding-left:0.2em;">"</span>Apple Pie" and mom on Mother's Day"</a>. <i>ESPN</i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=ESPN&amp;rft.atitle=%22Apple+Pie%22+and+mom+on+Mother%27s+Day&amp;rft_id=http%3A%2F%2Fespn.go.com%2Fclassic%2Fs%2Fmothersday_applepie.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-201"><span class="mw-cite-backlink"><b><a href="#cite_ref-201">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.imdb.com/title/tt0461634/">"Shaquille (TV series 2005)"</a>. <i>IMDb</i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=IMDb&amp;rft.atitle=Shaquille+%28TV+series+2005%29&amp;rft_id=http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0461634%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-202"><span class="mw-cite-backlink"><b><a href="#cite_ref-202">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.imdb.com/title/tt0978758/">"Shaq's Big Challenge (2007)"</a>. <i>IMDb</i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=IMDb&amp;rft.atitle=Shaq%27s+Big+Challenge+%282007%29&amp;rft_id=http%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0978758%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-203"><span class="mw-cite-backlink"><b><a href="#cite_ref-203">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.giantbomb.com/nba-ballers-phenom/61-11686/characters/?page=2/">"NBA Ballers: Phenom Characters"</a>. <i>giantbomb.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=giantbomb.com&amp;rft.atitle=NBA+Ballers%3A+Phenom+Characters&amp;rft_id=http%3A%2F%2Fwww.giantbomb.com%2Fnba-ballers-phenom%2F61-11686%2Fcharacters%2F%3Fpage%3D2%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-204"><span class="mw-cite-backlink"><b><a href="#cite_ref-204">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20110313025013/http://www.blockbuster.com/browse/catalog/movieDetails/212500">"Motorcycle Mania 2 (2004)"</a>. <i>blockbuster.com</i>. Archived from <a rel="nofollow" class="external text" href="http://www.blockbuster.com/browse/catalog/movieDetails/212500">the original</a> on March 13, 2011.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=blockbuster.com&amp;rft.atitle=Motorcycle+Mania+2+%282004%29&amp;rft_id=http%3A%2F%2Fwww.blockbuster.com%2Fbrowse%2Fcatalog%2FmovieDetails%2F212500&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-205"><span class="mw-cite-backlink"><b><a href="#cite_ref-205">^</a></b></span> <span class="reference-text"><cite class="citation web">Caruso, Andrea. <a rel="nofollow" class="external text" href="https://web.archive.org/web/20140728223440/http://voices.yahoo.com/american-idols-ryan-seacrest-gives-back-idol-gives-1359669.html">"American Idol's Ryan Seacrest Gives Back to Idol Gives Back"</a>. <i>voices.yahoo.com</i>. Archived from <a rel="nofollow" class="external text" href="http://voices.yahoo.com/american-idols-ryan-seacrest-gives-back-idol-gives-1359669.html">the original</a> on July 28, 2014<span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=voices.yahoo.com&amp;rft.atitle=American+Idol%27s+Ryan+Seacrest+Gives+Back+to+Idol+Gives+Back&amp;rft.aulast=Caruso&amp;rft.aufirst=Andrea&amp;rft_id=http%3A%2F%2Fvoices.yahoo.com%2Famerican-idols-ryan-seacrest-gives-back-idol-gives-1359669.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-206"><span class="mw-cite-backlink"><b><a href="#cite_ref-206">^</a></b></span> <span class="reference-text"><cite class="citation web">Blackmon, Joe. <a rel="nofollow" class="external text" href="https://web.archive.org/web/20111107132309/http://realitytvmagazine.sheknows.com/2006/07/10/shaquille-oneal-on-fear-factor/">"Shaquille O'Neal On Fear Factor"</a>. <i>Reality TV Magazine</i>. Archived from <a rel="nofollow" class="external text" href="http://realitytvmagazine.sheknows.com/2006/07/10/shaquille-oneal-on-fear-factor/">the original</a> on November 7, 2011<span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Reality+TV+Magazine&amp;rft.atitle=Shaquille+O%27Neal+On+Fear+Factor&amp;rft.aulast=Blackmon&amp;rft.aufirst=Joe&amp;rft_id=http%3A%2F%2Frealitytvmagazine.sheknows.com%2F2006%2F07%2F10%2Fshaquille-oneal-on-fear-factor%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-207"><span class="mw-cite-backlink"><b><a href="#cite_ref-207">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.mtv.ca/mtv2/show_cast_member.jhtml?cid=10193&amp;id=10099">"Jackass | Jason "Wee-Man" Acuna"</a>. <i>mtv.ca</i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=mtv.ca&amp;rft.atitle=Jackass+%7C+Jason+%22Wee-Man%22+Acuna&amp;rft_id=http%3A%2F%2Fwww.mtv.ca%2Fmtv2%2Fshow_cast_member.jhtml%3Fcid%3D10193%26id%3D10099&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span><sup class="noprint Inline-Template"><span style="white-space: nowrap;">[<i><a href="/wiki/Wikipedia:Link_rot" title="Wikipedia:Link rot"><span title="&#160;Dead link since March 2018">permanent dead link</span></a></i>]</span></sup></span></li>
<li id="cite_note-208"><span class="mw-cite-backlink"><b><a href="#cite_ref-208">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20120330105015/http://www.wwe.com/videos/shaq-takes-out-big-show-on-raw-25019807">"Shaq takes out Big Show on Raw"</a>. <i>wwe.com</i>. Archived from <a rel="nofollow" class="external text" href="http://www.wwe.com/videos/shaq-takes-out-big-show-on-raw-25019807">the original</a> on March 30, 2012<span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=wwe.com&amp;rft.atitle=Shaq+takes+out+Big+Show+on+Raw&amp;rft_id=http%3A%2F%2Fwww.wwe.com%2Fvideos%2Fshaq-takes-out-big-show-on-raw-25019807&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-209"><span class="mw-cite-backlink"><b><a href="#cite_ref-209">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20130815024637/http://www.muchmusic.com/tv/punkd/seasonfive.aspx?eid=22540">"Punk'd – Season 5 – Episode 8"</a>. <i>muchmusic.com</i>. Archived from <a rel="nofollow" class="external text" href="http://www.muchmusic.com/tv/punkd/seasonfive.aspx?eid=22540">the original</a> on August 15, 2013<span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=muchmusic.com&amp;rft.atitle=Punk%27d+%E2%80%93+Season+5+%E2%80%93+Episode+8&amp;rft_id=http%3A%2F%2Fwww.muchmusic.com%2Ftv%2Fpunkd%2Fseasonfive.aspx%3Feid%3D22540&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-210"><span class="mw-cite-backlink"><b><a href="#cite_ref-210">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="https://www.imdb.com/name/nm0641944/">Shaquille O'Neal</a> on <a href="/wiki/IMDb" title="IMDb">IMDb</a></span></li>
<li id="cite_note-211"><span class="mw-cite-backlink"><b><a href="#cite_ref-211">^</a></b></span> <span class="reference-text"><cite class="citation news">Levin, Gary (July 20, 2009). <a rel="nofollow" class="external text" href="https://www.usatoday.com/life/television/news/2009-07-19-shaquille-reality-show_N.htm">"O'Neal courts competition on new reality show 'Shaq Vs.<span style="padding-right:0.2em;">'</span>"</a>. <i>USA Today</i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 11,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=USA+Today&amp;rft.atitle=O%27Neal+courts+competition+on+new+reality+show+%27Shaq+Vs.%27&amp;rft.date=2009-07-20&amp;rft.aulast=Levin&amp;rft.aufirst=Gary&amp;rft_id=https%3A%2F%2Fwww.usatoday.com%2Flife%2Ftelevision%2Fnews%2F2009-07-19-shaquille-reality-show_N.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-212"><span class="mw-cite-backlink"><b><a href="#cite_ref-212">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/espn/wire?section=nba&amp;id=4343990">"Shaq to star in TV sports reality series – NBA – ESPN"</a>. ESPN. July 21, 2009<span class="reference-accessdate">. Retrieved <span class="nowrap">August 5,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq+to+star+in+TV+sports+reality+series+%E2%80%93+NBA+%E2%80%93+ESPN&amp;rft.pub=ESPN&amp;rft.date=2009-07-21&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fespn%2Fwire%3Fsection%3Dnba%26id%3D4343990&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-213"><span class="mw-cite-backlink"><b><a href="#cite_ref-213">^</a></b></span> <span class="reference-text"><cite class="citation web">Shaq (July 14, 2011). <a rel="nofollow" class="external text" href="http://www.tout.com/p3mp80">"Life's Moments"</a>. TOUT<span class="reference-accessdate">. Retrieved <span class="nowrap">March 29,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Life%27s+Moments&amp;rft.pub=TOUT&amp;rft.date=2011-07-14&amp;rft.au=Shaq&amp;rft_id=http%3A%2F%2Fwww.tout.com%2Fp3mp80&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-214"><span class="mw-cite-backlink"><b><a href="#cite_ref-214">^</a></b></span> <span class="reference-text"><cite class="citation web">Kang, Byeong-jin. <a rel="nofollow" class="external text" href="http://www.huffingtonpost.kr/2015/08/12/story_n_7975082.html">"NBA 스타 샤킬 오닐, '학교 다녀오겠습니다' 출연한다"</a>. <i>The Huffington Post Korea</i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 14,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=The+Huffington+Post+Korea&amp;rft.atitle=NBA+%EC%8A%A4%ED%83%80+%EC%83%A4%ED%82%AC+%EC%98%A4%EB%8B%90%2C+%27%ED%95%99%EA%B5%90+%EB%8B%A4%EB%85%80%EC%98%A4%EA%B2%A0%EC%8A%B5%EB%8B%88%EB%8B%A4%27+%EC%B6%9C%EC%97%B0%ED%95%9C%EB%8B%A4&amp;rft.aulast=Kang&amp;rft.aufirst=Byeong-jin&amp;rft_id=http%3A%2F%2Fwww.huffingtonpost.kr%2F2015%2F08%2F12%2Fstory_n_7975082.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-215"><span class="mw-cite-backlink"><b><a href="#cite_ref-215">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.soompi.com/2015/08/12/shaquille-oneal-and-chu-sung-hoon-to-guest-on-off-to-school/">"Shaquille O'Neal and Chu Sung Hoon to Guest on "Off to School<span style="padding-right:0.2em;">"</span>"</a>. <i>soompi</i>. August 12, 2015<span class="reference-accessdate">. Retrieved <span class="nowrap">September 14,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=soompi&amp;rft.atitle=Shaquille+O%27Neal+and+Chu+Sung+Hoon+to+Guest+on+%22Off+to+School%22&amp;rft.date=2015-08-12&amp;rft_id=http%3A%2F%2Fwww.soompi.com%2F2015%2F08%2F12%2Fshaquille-oneal-and-chu-sung-hoon-to-guest-on-off-to-school%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-216"><span class="mw-cite-backlink"><b><a href="#cite_ref-216">^</a></b></span> <span class="reference-text"><cite class="citation web">Smiley, Brett (September 2, 2015). <a rel="nofollow" class="external text" href="http://www.foxsports.com/buzzer/story/shaquille-oneal-korean-high-school-tv-show-090215">"Watch: Shaq fist-bumps giddy students in return to high school on Korean TV show"</a>. <i>foxsports</i><span class="reference-accessdate">. Retrieved <span class="nowrap">September 14,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=foxsports&amp;rft.atitle=Watch%3A+Shaq+fist-bumps+giddy+students+in+return+to+high+school+on+Korean+TV+show&amp;rft.date=2015-09-02&amp;rft.aulast=Smiley&amp;rft.aufirst=Brett&amp;rft_id=http%3A%2F%2Fwww.foxsports.com%2Fbuzzer%2Fstory%2Fshaquille-oneal-korean-high-school-tv-show-090215&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-217"><span class="mw-cite-backlink"><b><a href="#cite_ref-217">^</a></b></span> <span class="reference-text"><cite class="citation web">Heck, Jordan (September 2, 2015). <a rel="nofollow" class="external text" href="http://www.sportingnews.com/nba/story/2015-09-02/shaq-korean-tv-show-video-high-school-student">"Shaq became high school student for Korean TV show"</a>. <i>sportingnews</i><span class="reference-accessdate">. Retrieved <span class="nowrap">September 14,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=sportingnews&amp;rft.atitle=Shaq+became+high+school+student+for+Korean+TV+show&amp;rft.date=2015-09-02&amp;rft.aulast=Heck&amp;rft.aufirst=Jordan&amp;rft_id=http%3A%2F%2Fwww.sportingnews.com%2Fnba%2Fstory%2F2015-09-02%2Fshaq-korean-tv-show-video-high-school-student&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-218"><span class="mw-cite-backlink"><b><a href="#cite_ref-218">^</a></b></span> <span class="reference-text"><cite class="citation web">Hendricks, Maggie (May 6, 2009). <a rel="nofollow" class="external text" href="https://sports.yahoo.com/mma/blog/cagewriter/post/Shaquille-O-Neal-hoopster-twitter-fan-MMA-fig?urn=mma,161678">"Shaquille O'Neal: hoopster, twitter fan, MMA fighter?"</a>. Yahoo! Sports<span class="reference-accessdate">. Retrieved <span class="nowrap">July 22,</span> 2009</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal%3A+hoopster%2C+twitter+fan%2C+MMA+fighter%3F&amp;rft.pub=Yahoo%21+Sports&amp;rft.date=2009-05-06&amp;rft.au=Hendricks%2C+Maggie&amp;rft_id=https%3A%2F%2Fsports.yahoo.com%2Fmma%2Fblog%2Fcagewriter%2Fpost%2FShaquille-O-Neal-hoopster-twitter-fan-MMA-fig%3Furn%3Dmma%2C161678&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-219"><span class="mw-cite-backlink"><b><a href="#cite_ref-219">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://mma.fanhouse.com/2009/10/05/hong-man-choi-accepts-shaquille-oneals-mixed-martial-arts-chal/">"Hong Man Choi Accepts Shaquille O'Neal's Mixed Martial Arts Challenge – MMA Fighting"</a>. Mma.fanhouse.com. October 21, 2009<span class="reference-accessdate">. Retrieved <span class="nowrap">August 5,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Hong+Man+Choi+Accepts+Shaquille+O%27Neal%27s+Mixed+Martial+Arts+Challenge+%E2%80%93+MMA+Fighting&amp;rft.pub=Mma.fanhouse.com&amp;rft.date=2009-10-21&amp;rft_id=http%3A%2F%2Fmma.fanhouse.com%2F2009%2F10%2F05%2Fhong-man-choi-accepts-shaquille-oneals-mixed-martial-arts-chal%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-220"><span class="mw-cite-backlink"><b><a href="#cite_ref-220">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.mmafighting.com/2010/08/29/shaquille-oneal-takes-in-ufc-118-still-wants-to-fight-hong-man/">"Shaquille O'Neal Takes in UFC 118 Still Wants to Fight Hong Man Choi"</a>. www.mmafighting.com. August 28, 2010<span class="reference-accessdate">. Retrieved <span class="nowrap">August 29,</span> 2010</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal+Takes+in+UFC+118+Still+Wants+to+Fight+Hong+Man+Choi&amp;rft.pub=www.mmafighting.com&amp;rft.date=2010-08-28&amp;rft_id=http%3A%2F%2Fwww.mmafighting.com%2F2010%2F08%2F29%2Fshaquille-oneal-takes-in-ufc-118-still-wants-to-fight-hong-man%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-221"><span class="mw-cite-backlink"><b><a href="#cite_ref-221">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://uproxx.com/sports/heres-a-portrait-of-shaquille-oneal-and-hulk-hogan-in-new-york-city-on-911">"Here's A Portrait Of Shaquille O'Neal And Hulk Hogan In New York City On 9/11"</a>. October 24, 2012.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Here%E2%80%99s+A+Portrait+Of+Shaquille+O%E2%80%99Neal+And+Hulk+Hogan+In+New+York+City+On+9%2F11&amp;rft.date=2012-10-24&amp;rft_id=http%3A%2F%2Fuproxx.com%2Fsports%2Fheres-a-portrait-of-shaquille-oneal-and-hulk-hogan-in-new-york-city-on-911&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-222"><span class="mw-cite-backlink"><b><a href="#cite_ref-222">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://sports.yahoo.com/nba/blog/ball_dont_lie/post/Shaquille-O-Neal-hosts-Monday-Night-Raw-gets-?urn=nba,179212">"Shaquille O'Neal hosts 'Monday Night Raw,' gets physical"</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal+hosts+%27Monday+Night+Raw%2C%27+gets+physical&amp;rft_id=https%3A%2F%2Fsports.yahoo.com%2Fnba%2Fblog%2Fball_dont_lie%2Fpost%2FShaquille-O-Neal-hosts-Monday-Night-Raw-gets-%3Furn%3Dnba%2C179212&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-223"><span class="mw-cite-backlink"><b><a href="#cite_ref-223">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.pwtorch.com/artman2/publish/TNA_News_1/article_65371.shtml#.VwwO2fkrKM8">"PWTorch.com - TNA News: Impact news &amp; notes - Shaq one-segment appearance, TV Title status, next week's theme, more"</a>. <i>www.pwtorch.com</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=www.pwtorch.com&amp;rft.atitle=PWTorch.com+-+TNA+News%3A+Impact+news+%26+notes+-+Shaq+one-segment+appearance%2C+TV+Title+status%2C+next+week%27s+theme%2C+more&amp;rft_id=http%3A%2F%2Fwww.pwtorch.com%2Fartman2%2Fpublish%2FTNA_News_1%2Farticle_65371.shtml%23.VwwO2fkrKM8&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-224"><span class="mw-cite-backlink"><b><a href="#cite_ref-224">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.wwe.com/shows/wrestlemania/32/article/shaquille-oneal-wrestlemania-32-battle-royal">"Shaquille O'Neal entered the Andre the Giant Memorial Battle Royal at WrestleMania 32"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">January 14,</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%E2%80%99Neal+entered+the+Andre+the+Giant+Memorial+Battle+Royal+at+WrestleMania+32&amp;rft_id=http%3A%2F%2Fwww.wwe.com%2Fshows%2Fwrestlemania%2F32%2Farticle%2Fshaquille-oneal-wrestlemania-32-battle-royal&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-225"><span class="mw-cite-backlink"><b><a href="#cite_ref-225">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.411mania.com/wrestling/from-the-network-wwe-wrestlemania-32">"Diot's WWE WrestleMania 32 Review - 411MANIA"</a>. <i>www.411mania.com</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=www.411mania.com&amp;rft.atitle=Diot%27s+WWE+WrestleMania+32+Review+-+411MANIA&amp;rft_id=http%3A%2F%2Fwww.411mania.com%2Fwrestling%2Ffrom-the-network-wwe-wrestlemania-32&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-226"><span class="mw-cite-backlink"><b><a href="#cite_ref-226">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="https://www.cagesideseats.com/wwe/2016/7/13/12184782/big-show-challenges-shaq-wrestlemania-33-match-espy-awards">Big show challanges Shaq</a></span></li>
<li id="cite_note-227"><span class="mw-cite-backlink"><b><a href="#cite_ref-227">^</a></b></span> <span class="reference-text"><cite class="citation web">Bieler, Dan (July 16, 2016). <a rel="nofollow" class="external text" href="https://www.washingtonpost.com/news/early-lead/wp/2016/07/14/shaquille-oneal-accepts-wrestlemania-challenge-from-big-show/">"Shaquille O'Neal accepts WrestleMania challenge from Big Show"</a>. <i><a href="/wiki/The_Washington_Post" title="The Washington Post">The Washington Post</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">July 14,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=The+Washington+Post&amp;rft.atitle=Shaquille+O%27Neal+accepts+WrestleMania+challenge+from+Big+Show&amp;rft.date=2016-07-16&amp;rft.aulast=Bieler&amp;rft.aufirst=Dan&amp;rft_id=https%3A%2F%2Fwww.washingtonpost.com%2Fnews%2Fearly-lead%2Fwp%2F2016%2F07%2F14%2Fshaquille-oneal-accepts-wrestlemania-challenge-from-big-show%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-228"><span class="mw-cite-backlink"><b><a href="#cite_ref-228">^</a></b></span> <span class="reference-text"><cite class="citation web"><a href="/wiki/Chris_Van_Vliet" title="Chris Van Vliet">Van Vliet, Chris</a> (November 16, 2016). <a rel="nofollow" class="external text" href="http://wsvn.com/entertainment/wwes-big-show-talks-to-deco-teases-wrestlemania-33/">"WWE's Big Show talks to Deco, teases WrestleMania 33"</a>. <i><a href="/wiki/WSVN" title="WSVN">WSVN</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">January 10,</span> 2017</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=WSVN&amp;rft.atitle=WWE%27s+Big+Show+talks+to+Deco%2C+teases+WrestleMania+33&amp;rft.date=2016-11-16&amp;rft.au=Van+Vliet%2C+Chris&amp;rft_id=http%3A%2F%2Fwsvn.com%2Fentertainment%2Fwwes-big-show-talks-to-deco-teases-wrestlemania-33%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-229"><span class="mw-cite-backlink"><b><a href="#cite_ref-229">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.wwe.com/article/shaquille-oneal-challenges-big-show-2017?sf50055059=1">"Shaquille O'Neal calls out Big Show"</a>. <i>WWE</i>. January 10, 2017<span class="reference-accessdate">. Retrieved <span class="nowrap">January 10,</span> 2017</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=WWE&amp;rft.atitle=Shaquille+O%27Neal+calls+out+Big+Show&amp;rft.date=2017-01-10&amp;rft_id=http%3A%2F%2Fwww.wwe.com%2Farticle%2Fshaquille-oneal-challenges-big-show-2017%3Fsf50055059%3D1&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-230"><span class="mw-cite-backlink"><b><a href="#cite_ref-230">^</a></b></span> <span class="reference-text"><cite class="citation web">WWE.com Staff (January 15, 2017). <a rel="nofollow" class="external text" href="http://www.wwe.com/article/big-show-new-physique-prepares-for-wrestlemania?sf51049510=1">"Big Show tweets out his incredible physique as he prepares for WrestleMania"</a>. <i>WWE</i><span class="reference-accessdate">. Retrieved <span class="nowrap">January 16,</span> 2017</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=WWE&amp;rft.atitle=Big+Show+tweets+out+his+incredible+physique+as+he+prepares+for+WrestleMania&amp;rft.date=2017-01-15&amp;rft.au=WWE.com+Staff&amp;rft_id=http%3A%2F%2Fwww.wwe.com%2Farticle%2Fbig-show-new-physique-prepares-for-wrestlemania%3Fsf51049510%3D1&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-231"><span class="mw-cite-backlink"><b><a href="#cite_ref-231">^</a></b></span> <span class="reference-text"><cite class="citation web">Gerweck, Steve (March 14, 2017). <a rel="nofollow" class="external text" href="http://www.gerweck.net/2017/03/14/reason-why-wwe-canceled-shaq-vs-big-show-at-wrestlemania-33/">"Reason why WWE canceled Shaq vs Big Show at WrestleMania 33"</a>. <i>Gerweck.net</i><span class="reference-accessdate">. Retrieved <span class="nowrap">March 20,</span> 2017</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Gerweck.net&amp;rft.atitle=Reason+why+WWE+canceled+Shaq+vs+Big+Show+at+WrestleMania+33&amp;rft.date=2017-03-14&amp;rft.aulast=Gerweck&amp;rft.aufirst=Steve&amp;rft_id=http%3A%2F%2Fwww.gerweck.net%2F2017%2F03%2F14%2Freason-why-wwe-canceled-shaq-vs-big-show-at-wrestlemania-33%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-232"><span class="mw-cite-backlink"><b><a href="#cite_ref-232">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://uproxx.com/prowrestling/big-show-wwe-interview-destiny-2-braun-strowman/5/">"Big Show Thinks Braun Strowman Will Be One Of The All-Time Greats"</a>. January 12, 2018<span class="reference-accessdate">. Retrieved <span class="nowrap">January 14,</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Big+Show+Thinks+Braun+Strowman+Will+Be+One+Of+The+All-Time+Greats&amp;rft.date=2018-01-12&amp;rft_id=http%3A%2F%2Fuproxx.com%2Fprowrestling%2Fbig-show-wwe-interview-destiny-2-braun-strowman%2F5%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-TELIS_DEMOS-233"><span class="mw-cite-backlink">^ <a href="#cite_ref-TELIS_DEMOS_233-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-TELIS_DEMOS_233-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><cite class="citation web">TELIS DEMOS (June 12, 2015). <a rel="nofollow" class="external text" href="https://blogs.wsj.com/moneybeat/2015/06/12/shaq-attacks-ipo-access-invests-in-loyal3/?link=mktw">"Shaq Attacks IPO Access, Invests in Loyal3"</a>. <i>The Wall Street Journal</i><span class="reference-accessdate">. Retrieved <span class="nowrap">June 13,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=The+Wall+Street+Journal&amp;rft.atitle=Shaq+Attacks+IPO+Access%2C+Invests+in+Loyal3&amp;rft.date=2015-06-12&amp;rft.au=TELIS+DEMOS&amp;rft_id=https%3A%2F%2Fblogs.wsj.com%2Fmoneybeat%2F2015%2F06%2F12%2Fshaq-attacks-ipo-access-invests-in-loyal3%2F%3Flink%3Dmktw&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-234"><span class="mw-cite-backlink"><b><a href="#cite_ref-234">^</a></b></span> <span class="reference-text"><cite class="citation web">Schlueb, Mark (June 11, 2008). <a rel="nofollow" class="external text" href="https://web.archive.org/web/20080613224548/http://www.orlandosentinel.com/business/orl-shaq1108jun11,0,519616.story">"Shaq: I can help homeowners fight off foreclosure"</a>. <i>Orlando Sentinel</i>. Archived from <a rel="nofollow" class="external text" href="http://www.orlandosentinel.com/business/orl-shaq1108jun11,0,519616.story">the original</a> on June 13, 2008<span class="reference-accessdate">. Retrieved <span class="nowrap">June 11,</span> 2008</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Orlando+Sentinel&amp;rft.atitle=Shaq%3A+I+can+help+homeowners+fight+off+foreclosure&amp;rft.date=2008-06-11&amp;rft.au=Schlueb%2C+Mark&amp;rft_id=http%3A%2F%2Fwww.orlandosentinel.com%2Fbusiness%2Forl-shaq1108jun11%2C0%2C519616.story&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-235"><span class="mw-cite-backlink"><b><a href="#cite_ref-235">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.emporis.com/building/one-river-view-at-rector-newark-nj-usa">"One River View at Rector"</a>. Emporis<span class="reference-accessdate">. Retrieved <span class="nowrap">December 8,</span> 2013</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=One+River+View+at+Rector&amp;rft.pub=Emporis&amp;rft_id=http%3A%2F%2Fwww.emporis.com%2Fbuilding%2Fone-river-view-at-rector-newark-nj-usa&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-236"><span class="mw-cite-backlink"><b><a href="#cite_ref-236">^</a></b></span> <span class="reference-text"><cite class="citation news">Haddon, Heather (September 26, 2013). <a rel="nofollow" class="external text" href="https://online.wsj.com/news/articles/SB10001424052702304526204579099520256095060">"Star Comes Home to Build in Newark Shaquille O'Neal in Real Estate Development Partnership"</a>. <i>The Wall Street Journal</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Wall+Street+Journal&amp;rft.atitle=Star+Comes+Home+to+Build+in+Newark+Shaquille+O%27Neal+in+Real+Estate+Development+Partnership&amp;rft.date=2013-09-26&amp;rft.aulast=Haddon&amp;rft.aufirst=Heather&amp;rft_id=https%3A%2F%2Fonline.wsj.com%2Fnews%2Farticles%2FSB10001424052702304526204579099520256095060&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-237"><span class="mw-cite-backlink"><b><a href="#cite_ref-237">^</a></b></span> <span class="reference-text"><cite class="citation news">Munson, John (September 27, 2013). <a rel="nofollow" class="external text" href="http://www.nj.com/business/index.ssf/2013/09/shaquille_oneal_booker_newark.html">"Shaq comes back to Newark to break ground for city's first high-rise apartment in more than 50 years"</a>. <i>The Star-Ledger</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Star-Ledger&amp;rft.atitle=Shaq+comes+back+to+Newark+to+break+ground+for+city%27s+first+high-rise+apartment+in+more+than+50+years&amp;rft.date=2013-09-27&amp;rft.aulast=Munson&amp;rft.aufirst=John&amp;rft_id=http%3A%2F%2Fwww.nj.com%2Fbusiness%2Findex.ssf%2F2013%2F09%2Fshaquille_oneal_booker_newark.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-238"><span class="mw-cite-backlink"><b><a href="#cite_ref-238">^</a></b></span> <span class="reference-text"><cite class="citation news"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20140107021650/http://essexnewsdaily.com/news/newark/booker-shaquille-oneal-and-other-dignitaries-break-ground-on-new-high-rise-apartments">"Booker, Shaquille O'Neal and other dignitaries break ground on new high-rise apartments"</a>. Essex News Daily. September 30, 2013. Archived from <a rel="nofollow" class="external text" href="http://essexnewsdaily.com/news/newark/booker-shaquille-oneal-and-other-dignitaries-break-ground-on-new-high-rise-apartments">the original</a> on January 7, 2014<span class="reference-accessdate">. Retrieved <span class="nowrap">December 8,</span> 2013</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Booker%2C+Shaquille+O%27Neal+and+other+dignitaries+break+ground+on+new+high-rise+apartments&amp;rft.date=2013-09-30&amp;rft_id=http%3A%2F%2Fessexnewsdaily.com%2Fnews%2Fnewark%2Fbooker-shaquille-oneal-and-other-dignitaries-break-ground-on-new-high-rise-apartments&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-239"><span class="mw-cite-backlink"><b><a href="#cite_ref-239">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.njeda.com/web/pdf/HUB_Activity.pdf">"NEW JERSEY ECONOMIC DEVELOPMENT AUTHORITY&#160;: Urban Transit Hub Tax Credit Program&#160;: Approved Projects"</a> <span style="font-size:85%;">(PDF)</span>. <i>Mjeda.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">February 23,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Mjeda.com&amp;rft.atitle=NEW+JERSEY+ECONOMIC+DEVELOPMENT+AUTHORITY+%3A+Urban+Transit+Hub+Tax+Credit+Program+%3A+Approved+Projects&amp;rft_id=http%3A%2F%2Fwww.njeda.com%2Fweb%2Fpdf%2FHUB_Activity.pdf&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-240"><span class="mw-cite-backlink"><b><a href="#cite_ref-240">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, pp. 263–4.</span></li>
<li id="cite_note-241"><span class="mw-cite-backlink"><b><a href="#cite_ref-241">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.usatoday.com/story/sports/nba/kings/2013/09/23/shaq-sacramento-kings-shaquille-oneal/2854021/">"Shaquille O'Neal buys a stake in the Sacramento Kings"</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal+buys+a+stake+in+the+Sacramento+Kings&amp;rft_id=https%3A%2F%2Fwww.usatoday.com%2Fstory%2Fsports%2Fnba%2Fkings%2F2013%2F09%2F23%2Fshaq-sacramento-kings-shaquille-oneal%2F2854021%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-242"><span class="mw-cite-backlink"><b><a href="#cite_ref-242">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://espn.go.com/esports/story/_/id/15000505/shaquille-oneal-alex-rodriguez-jimmy-rollins-invest-nrg-esports-teams">"Shaq, A-Rod, Rollins invest in esports team"</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq%2C+A-Rod%2C+Rollins+invest+in+esports+team&amp;rft_id=http%3A%2F%2Fespn.go.com%2Fesports%2Fstory%2F_%2Fid%2F15000505%2Fshaquille-oneal-alex-rodriguez-jimmy-rollins-invest-nrg-esports-teams&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-243"><span class="mw-cite-backlink"><b><a href="#cite_ref-243">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.lazygamer.net/esports/eleague-brought-back-shaqs-memorable-acting-skills/">"ELEAGUE have brought back Shaq's memorable acting skills"</a>. May 18, 2016.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=ELEAGUE+have+brought+back+Shaq%27s+memorable+acting+skills&amp;rft.date=2016-05-18&amp;rft_id=http%3A%2F%2Fwww.lazygamer.net%2Fesports%2Feleague-brought-back-shaqs-memorable-acting-skills%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-244"><span class="mw-cite-backlink"><b><a href="#cite_ref-244">^</a></b></span> <span class="reference-text"><cite class="citation web">Chambers, Brianna. <a rel="nofollow" class="external text" href="http://www.ajc.com/business/shaquille-neal-buys-krispy-kreme-store/ZanQNvMuFN3b91GFls2Q8K/">"Shaquille O'Neal buys Krispy Kreme store"</a>. <i>ajc</i><span class="reference-accessdate">. Retrieved <span class="nowrap">December 6,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=ajc&amp;rft.atitle=Shaquille+O%27Neal+buys+Krispy+Kreme+store&amp;rft.aulast=Chambers&amp;rft.aufirst=Brianna&amp;rft_id=http%3A%2F%2Fwww.ajc.com%2Fbusiness%2Fshaquille-neal-buys-krispy-kreme-store%2FZanQNvMuFN3b91GFls2Q8K%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-245"><span class="mw-cite-backlink"><b><a href="#cite_ref-245">^</a></b></span> <span class="reference-text"><cite class="citation web">Jack McCallum (June 17, 2002). <a rel="nofollow" class="external text" href="http://sportsillustrated.cnn.com/vault/article/magazine/MAG1026026/2/index.htm">"The Shaq Factor"</a>. <i>Sports Illustrated</i><span class="reference-accessdate">. Retrieved <span class="nowrap">February 22,</span> 2013</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Sports+Illustrated&amp;rft.atitle=The+Shaq+Factor&amp;rft.date=2002-06-17&amp;rft.au=Jack+McCallum&amp;rft_id=http%3A%2F%2Fsportsillustrated.cnn.com%2Fvault%2Farticle%2Fmagazine%2FMAG1026026%2F2%2Findex.htm&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-246"><span class="mw-cite-backlink"><b><a href="#cite_ref-246">^</a></b></span> <span class="reference-text"><cite class="citation news">Wright, Robin (August 1, 2011). <a rel="nofollow" class="external text" href="https://www.nytimes.com/2011/08/02/books/excerpt-rock-the-casbah-by-robin-wright.html?pagew..=&amp;_r=1&amp;pagewanted=all">"Rock the Casbah"</a>. <i>The New York Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/6EdtvwqHe?url=http://www.nytimes.com/2011/08/02/books/excerpt-rock-the-casbah-by-robin-wright.html?pagew..=&amp;_r=2&amp;pagewanted=all&amp;">Archived</a> from the original on February 23, 2013.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+New+York+Times&amp;rft.atitle=Rock+the+Casbah&amp;rft.date=2011-08-01&amp;rft.aulast=Wright&amp;rft.aufirst=Robin&amp;rft_id=https%3A%2F%2Fwww.nytimes.com%2F2011%2F08%2F02%2Fbooks%2Fexcerpt-rock-the-casbah-by-robin-wright.html%3Fpagew..%3D%26_r%3D1%26pagewanted%3Dall&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-247"><span class="mw-cite-backlink"><b><a href="#cite_ref-247">^</a></b></span> <span class="reference-text"><cite class="citation news">Brown, Tim (January 11, 2003). <a rel="nofollow" class="external text" href="http://articles.latimes.com/2003/jan/11/sports/sp-shaq11">"O'Neal Issues Apology"</a>. <i>Los Angeles Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/6Edu6GKgE?url=http://articles.latimes.com/2003/jan/11/sports/sp-shaq11">Archived</a> from the original on February 23, 2013.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=O%27Neal+Issues+Apology&amp;rft.date=2003-01-11&amp;rft.aulast=Brown&amp;rft.aufirst=Tim&amp;rft_id=http%3A%2F%2Farticles.latimes.com%2F2003%2Fjan%2F11%2Fsports%2Fsp-shaq11&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-248"><span class="mw-cite-backlink"><b><a href="#cite_ref-248">^</a></b></span> <span class="reference-text"><cite class="citation news">Brown, Tim; Plaschke, Bill (May 29, 2002). <a rel="nofollow" class="external text" href="http://articles.latimes.com/2002/may/29/sports/sp-lakerep29">"Shaq and Hedo Share a Moment"</a>. <i>Los Angeles Times</i>. <a rel="nofollow" class="external text" href="https://www.webcitation.org/6EduZ30xf?url=http://articles.latimes.com/2002/may/29/sports/sp-lakerep29">Archived</a> from the original on February 23, 2013.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=Los+Angeles+Times&amp;rft.atitle=Shaq+and+Hedo+Share+a+Moment&amp;rft.date=2002-05-29&amp;rft.aulast=Brown&amp;rft.aufirst=Tim&amp;rft.au=Plaschke%2C+Bill&amp;rft_id=http%3A%2F%2Farticles.latimes.com%2F2002%2Fmay%2F29%2Fsports%2Fsp-lakerep29&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-249"><span class="mw-cite-backlink"><b><a href="#cite_ref-249">^</a></b></span> <span class="reference-text"><cite class="citation web">Alison Kugel (November 11, 2011). <a rel="nofollow" class="external text" href="http://www.pr.com/article/1191">"Shaquille O'Neal Talks Kobe Bryant, Pat Riley &amp; NBA Politics: 'I Did It My Way<span style="padding-right:0.2em;">'</span>"</a>. PR.com<span class="reference-accessdate">. Retrieved <span class="nowrap">February 22,</span> 2013</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal+Talks+Kobe+Bryant%2C+Pat+Riley+%26+NBA+Politics%3A+%27I+Did+It+My+Way%27&amp;rft.pub=PR.com&amp;rft.date=2011-11-11&amp;rft.au=Alison+Kugel&amp;rft_id=http%3A%2F%2Fwww.pr.com%2Farticle%2F1191&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-250"><span class="mw-cite-backlink"><b><a href="#cite_ref-250">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="https://sports.yahoo.com/nba/news;_ylt=AkDCpR3g2_wVqVRyUQi_4sO8vLYF?slug=ap-shaquilleoneal-separation&amp;prov=ap&amp;type=lgns">Shaquille O'Neal, wife splitting up</a><sup class="noprint Inline-Template"><span style="white-space: nowrap;">[<i><a href="/wiki/Wikipedia:Link_rot" title="Wikipedia:Link rot"><span title="&#160;Dead link since September 2016">permanent dead link</span></a></i>]</span></sup> Yahoo! News, November 10, 2009</span></li>
<li id="cite_note-251"><span class="mw-cite-backlink"><b><a href="#cite_ref-251">^</a></b></span> <span class="reference-text"><cite class="citation web">Brooke, Tyler. <a rel="nofollow" class="external text" href="http://bleacherreport.com/articles/2462728-shaquille-oneals-son-shareef-oneal-does-not-play-like-his-dad">"Shaquille O'Neal's Son Shareef O'Neal Does Not Play Like His Dad"</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal%27s+Son+Shareef+O%27Neal+Does+Not+Play+Like+His+Dad&amp;rft.aulast=Brooke&amp;rft.aufirst=Tyler&amp;rft_id=http%3A%2F%2Fbleacherreport.com%2Farticles%2F2462728-shaquille-oneals-son-shareef-oneal-does-not-play-like-his-dad&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-252"><span class="mw-cite-backlink"><b><a href="#cite_ref-252">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.si.com/extra-mustard/2015/05/13/shaquille-oneal-son-shareef-high-school">"Watch: Shaq's son dominates as a high school freshman"</a>. <i><a href="/wiki/Sports_Illustrated" title="Sports Illustrated">Sports Illustrated</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">May 13,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Sports+Illustrated&amp;rft.atitle=Watch%3A+Shaq%27s+son+dominates+as+a+high+school+freshman&amp;rft_id=https%3A%2F%2Fwww.si.com%2Fextra-mustard%2F2015%2F05%2F13%2Fshaquille-oneal-son-shareef-high-school&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-253"><span class="mw-cite-backlink"><b><a href="#cite_ref-253">^</a></b></span> <span class="reference-text"><cite class="citation news">Borzello, Jeff (February 24, 2018). <a rel="nofollow" class="external text" href="http://www.espn.com/mens-college-basketball/story/_/id/22567755/shareef-oneal-decommits-arizona-wildcats-amid-fbi-probe">"Arizona commit Shareef O'Neal, Shaquille's son, opens recruitment amid probe"</a>. <i>ESPN.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">February 24,</span> 2018</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=ESPN.com&amp;rft.atitle=Arizona+commit+Shareef+O%27Neal%2C+Shaquille%27s+son%2C+opens+recruitment+amid+probe&amp;rft.date=2018-02-24&amp;rft.aulast=Borzello&amp;rft.aufirst=Jeff&amp;rft_id=http%3A%2F%2Fwww.espn.com%2Fmens-college-basketball%2Fstory%2F_%2Fid%2F22567755%2Fshareef-oneal-decommits-arizona-wildcats-amid-fbi-probe&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-254"><span class="mw-cite-backlink"><b><a href="#cite_ref-254">^</a></b></span> <span class="reference-text"><a href="#oneal2011">O'Neal, MacMullan 2011</a>, p. 209.</span></li>
<li id="cite_note-Globe-255"><span class="mw-cite-backlink"><b><a href="#cite_ref-Globe_255-0">^</a></b></span> <span class="reference-text"><cite class="citation news">Goldstein, Meredith (February 3, 2011). <a rel="nofollow" class="external text" href="http://www.boston.com/lifestyle/articles/2011/02/03/hoopz_is_right_at_home_with_shaq/?page=full">"Hoopz is right at home with Shaq"</a>. <i><a href="/wiki/The_Boston_Globe" title="The Boston Globe">The Boston Globe</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.jtitle=The+Boston+Globe&amp;rft.atitle=Hoopz+is+right+at+home+with+Shaq&amp;rft.date=2011-02-03&amp;rft.au=Goldstein%2C+Meredith&amp;rft_id=http%3A%2F%2Fwww.boston.com%2Flifestyle%2Farticles%2F2011%2F02%2F03%2Fhoopz_is_right_at_home_with_shaq%2F%3Fpage%3Dfull&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-256"><span class="mw-cite-backlink"><b><a href="#cite_ref-256">^</a></b></span> <span class="reference-text"><cite class="citation web">Dwyer, Kelly (May 21, 2011). <a rel="nofollow" class="external text" href="https://sports.yahoo.com/nba/blog/ball_dont_lie/post/Shaquille-O-8217-Neal-8217-s-girlfriend-school?urn=nba-wp3654">"Shaquille O'Neal's girlfriend schools him on sleep apnea"</a>. <i><a href="/wiki/Yahoo!_Sports" class="mw-redirect" title="Yahoo! Sports">Yahoo! Sports</a></i><span class="reference-accessdate">. Retrieved <span class="nowrap">August 9,</span> 2011</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Yahoo%21+Sports&amp;rft.atitle=Shaquille+O%27Neal%27s+girlfriend+schools+him+on+sleep+apnea&amp;rft.date=2011-05-21&amp;rft.au=Dwyer%2C+Kelly&amp;rft_id=https%3A%2F%2Fsports.yahoo.com%2Fnba%2Fblog%2Fball_dont_lie%2Fpost%2FShaquille-O-8217-Neal-8217-s-girlfriend-school%3Furn%3Dnba-wp3654&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-257"><span class="mw-cite-backlink"><b><a href="#cite_ref-257">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="http://www.boston.com/lifestyle/articles/2011/02/03/hoopz_is_right_at_home_with_shaq/?page=full">"Keeping Up With Shaq"</a>, <i>The Boston Globe</i>, February 3, 2011 (retrieved February 5, 2011).</span></li>
<li id="cite_note-258"><span class="mw-cite-backlink"><b><a href="#cite_ref-258">^</a></b></span> <span class="reference-text"><cite class="citation web">Pride, Ann (August 27, 2012). <a rel="nofollow" class="external text" href="http://www.dailymail.co.uk/tvshowbiz/article-2194321/Shaquille-ONeal-fianc-e-Nicole-Hoopz-Alexander-quits.html#ixzz4Oa4MCgAC">"Game over: NBA star Shaquille O'Neal and fiancée Nicole 'Hoopz' Alexander call it quits"</a>. <i>Daily Mail</i><span class="reference-accessdate">. Retrieved <span class="nowrap">October 30,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Daily+Mail&amp;rft.atitle=Game+over%3A+NBA+star+Shaquille+O%27Neal+and+fianc%C3%A9e+Nicole+%27Hoopz%27+Alexander+call+it+quits&amp;rft.date=2012-08-27&amp;rft.aulast=Pride&amp;rft.aufirst=Ann&amp;rft_id=http%3A%2F%2Fwww.dailymail.co.uk%2Ftvshowbiz%2Farticle-2194321%2FShaquille-ONeal-fianc-e-Nicole-Hoopz-Alexander-quits.html%23ixzz4Oa4MCgAC&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-259"><span class="mw-cite-backlink"><b><a href="#cite_ref-259">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external free" href="https://heavy.com/entertainment/2016/08/laticia-rolle-shaquille-oneal-girlfriend-dating-married-fiancee-engaged-basketball-age-ethnicity-parents-who-is/">https://heavy.com/entertainment/2016/08/laticia-rolle-shaquille-oneal-girlfriend-dating-married-fiancee-engaged-basketball-age-ethnicity-parents-who-is/</a></span></li>
<li id="cite_note-260"><span class="mw-cite-backlink"><b><a href="#cite_ref-260">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://sports.espn.go.com/nba/playoffs2005/news/story?id=2075294">"Family accepts O'Neal's offer – NBA – ESPN"</a>. Sports.espn.go.com. June 3, 2005<span class="reference-accessdate">. Retrieved <span class="nowrap">March 29,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Family+accepts+O%27Neal%27s+offer+%E2%80%93+NBA+%E2%80%93+ESPN&amp;rft.pub=Sports.espn.go.com&amp;rft.date=2005-06-03&amp;rft_id=http%3A%2F%2Fsports.espn.go.com%2Fnba%2Fplayoffs2005%2Fnews%2Fstory%3Fid%3D2075294&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-261"><span class="mw-cite-backlink"><b><a href="#cite_ref-261">^</a></b></span> <span class="reference-text"><a rel="nofollow" class="external text" href="https://news.yahoo.com/s/ap/20090202/ap_en_mu/people_nj_hall_of_fame;_ylt=AlZVKwTMpyR6gahss6B1PmtxFb8C">New Jersey to Bon Jovi: You Give Us a Good Name</a><sup class="noprint Inline-Template"><span style="white-space: nowrap;">[<i><a href="/wiki/Wikipedia:Link_rot" title="Wikipedia:Link rot"><span title="&#160;Dead link since August 2017">permanent dead link</span></a></i>]</span></sup> Yahoo! News, February 2, 2009.</span></li>
<li id="cite_note-262"><span class="mw-cite-backlink"><b><a href="#cite_ref-262">^</a></b></span> <span class="reference-text"><cite class="citation web">Chris Hodapp (June 12, 2011). <a rel="nofollow" class="external text" href="http://freemasonsfordummies.blogspot.com/2011/06/brother-shaquille-oneal.html">"Freemasons For Dummies: Brother Shaquille O'Neal"</a>. Freemasonsfordummies.blogspot.com<span class="reference-accessdate">. Retrieved <span class="nowrap">August 10,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Freemasons+For+Dummies%3A+Brother+Shaquille+O%27Neal&amp;rft.pub=Freemasonsfordummies.blogspot.com&amp;rft.date=2011-06-12&amp;rft.au=Chris+Hodapp&amp;rft_id=http%3A%2F%2Ffreemasonsfordummies.blogspot.com%2F2011%2F06%2Fbrother-shaquille-oneal.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-263"><span class="mw-cite-backlink"><b><a href="#cite_ref-263">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.youtube.com/watch?v=OYL11q4hb3Y">"Shaquille O'Neal: Freemason"</a>. YouTube. February 27, 2011<span class="reference-accessdate">. Retrieved <span class="nowrap">February 23,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal%3A+Freemason&amp;rft.pub=YouTube&amp;rft.date=2011-02-27&amp;rft_id=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOYL11q4hb3Y&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-264"><span class="mw-cite-backlink"><b><a href="#cite_ref-264">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://beginningandend.com/shaquille-oneal-show-masonic-ring-nbatv/">"Shaquille O'Neal Show off His Freemason Ring on NBATV"</a>. Beginning And End. January 14, 2012<span class="reference-accessdate">. Retrieved <span class="nowrap">February 23,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaquille+O%27Neal+Show+off+His+Freemason+Ring+on+NBATV&amp;rft.pub=Beginning+And+End&amp;rft.date=2012-01-14&amp;rft_id=http%3A%2F%2Fbeginningandend.com%2Fshaquille-oneal-show-masonic-ring-nbatv%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-265"><span class="mw-cite-backlink"><b><a href="#cite_ref-265">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20120120011748/http://www.atoast2wealth.com/2012/01/13/shaquille-oneal-proudly-shows-off-illuminati-ring-and-being-a-freemason-video/">"Shaquille O'Neal Proudly Shows Off Illuminati Ring and Being a Freemason [VIDEO] | AT2W"</a>. <i>Atoast2wealth.com</i>. January 14, 2012. Archived from <a rel="nofollow" class="external text" href="http://www.atoast2wealth.com/2012/01/13/shaquille-oneal-proudly-shows-off-illuminati-ring-and-being-a-freemason-video/">the original</a> on January 20, 2012<span class="reference-accessdate">. Retrieved <span class="nowrap">February 23,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Atoast2wealth.com&amp;rft.atitle=Shaquille+O%27Neal+Proudly+Shows+Off+Illuminati+Ring+and+Being+a+Freemason+%5BVIDEO%26%2393%3B+%26%23124%3B+AT2W&amp;rft.date=2012-01-14&amp;rft_id=http%3A%2F%2Fwww.atoast2wealth.com%2F2012%2F01%2F13%2Fshaquille-oneal-proudly-shows-off-illuminati-ring-and-being-a-freemason-video%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-266"><span class="mw-cite-backlink"><b><a href="#cite_ref-266">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/hawks/news/wilkins-honored-one-35-greatest-mcdonalds-all-americans">"Wilkins Honored as One of 35 Greatest McDonald's All Americans"</a>. NBA. January 31, 2012<span class="reference-accessdate">. Retrieved <span class="nowrap">February 9,</span> 2012</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Wilkins+Honored+as+One+of+35+Greatest+McDonald%27s+All+Americans&amp;rft.pub=NBA&amp;rft.date=2012-01-31&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Fhawks%2Fnews%2Fwilkins-honored-one-35-greatest-mcdonalds-all-americans&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-267"><span class="mw-cite-backlink"><b><a href="#cite_ref-267">^</a></b></span> <span class="reference-text"><cite class="citation web">Wyshynski, Greg (November 3, 2008). <a rel="nofollow" class="external text" href="https://sports.yahoo.com/nhl/blog/puck_daddy/post/Video-Shaquille-O-Neal-New-Jersey-Devils-fan?urn=nhl,119458">"Video: Shaquille O'Neal, New Jersey Devils fan – Puck Daddy – NHL Blog – Yahoo! Sports"</a>. <i>Sports.yahoo.com</i><span class="reference-accessdate">. Retrieved <span class="nowrap">February 23,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Sports.yahoo.com&amp;rft.atitle=Video%3A+Shaquille+O%27Neal%2C+New+Jersey+Devils+fan+%E2%80%93+Puck+Daddy+%E2%80%93+NHL+Blog+%E2%80%93+Yahoo%21+Sports&amp;rft.date=2008-11-03&amp;rft.aulast=Wyshynski&amp;rft.aufirst=Greg&amp;rft_id=https%3A%2F%2Fsports.yahoo.com%2Fnhl%2Fblog%2Fpuck_daddy%2Fpost%2FVideo-Shaquille-O-Neal-New-Jersey-Devils-fan%3Furn%3Dnhl%2C119458&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-268"><span class="mw-cite-backlink"><b><a href="#cite_ref-268">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="https://www.youtube.com/watch?v=SXC5QKLHVUo">"Shaq drives the Zamboni in Newark"</a>. YouTube. January 11, 2014<span class="reference-accessdate">. Retrieved <span class="nowrap">February 23,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq+drives+the+Zamboni+in+Newark&amp;rft.pub=YouTube&amp;rft.date=2014-01-11&amp;rft_id=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DSXC5QKLHVUo&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-269"><span class="mw-cite-backlink"><b><a href="#cite_ref-269">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.espnfc.us/blog/the-toe-poke/65/post/2865209/nba-legend-shaquille-oneal-celebrates-northampton-promotion">"NBA legend Shaquille O'Neal celebrates Northampton's promotion"</a>. April 5, 2016.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=NBA+legend+Shaquille+O%27Neal+celebrates+Northampton%27s+promotion&amp;rft.date=2016-04-05&amp;rft_id=http%3A%2F%2Fwww.espnfc.us%2Fblog%2Fthe-toe-poke%2F65%2Fpost%2F2865209%2Fnba-legend-shaquille-oneal-celebrates-northampton-promotion&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-270"><span class="mw-cite-backlink"><b><a href="#cite_ref-270">^</a></b></span> <span class="reference-text"><cite class="citation web">Kennedy, Robert F. <a rel="nofollow" class="external text" href="http://www.politico.com/story/2014/01/shaq-backs-chris-christie-i-believe-him-102004">"Shaq backs Christie: 'I believe him<span style="padding-right:0.2em;">'</span>"</a>. Politico<span class="reference-accessdate">. Retrieved <span class="nowrap">February 23,</span> 2016</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Shaq+backs+Christie%3A+%27I+believe+him%27&amp;rft.pub=Politico&amp;rft.aulast=Kennedy&amp;rft.aufirst=Robert+F.&amp;rft_id=http%3A%2F%2Fwww.politico.com%2Fstory%2F2014%2F01%2Fshaq-backs-chris-christie-i-believe-him-102004&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
<li id="cite_note-271"><span class="mw-cite-backlink"><b><a href="#cite_ref-271">^</a></b></span> <span class="reference-text"><cite class="citation web"><a rel="nofollow" class="external text" href="http://www.nba.com/article/2017/10/31/shaquille-oneal-makes-debut-late-night-tv-host#/">"Shaquille O'Neal makes debut as late-night TV host"</a>. <i>nba.com</i>. 31 October 2017<span class="reference-accessdate">. Retrieved <span class="nowrap">1 November</span> 2017</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=nba.com&amp;rft.atitle=Shaquille+O%27Neal+makes+debut+as+late-night+TV+host&amp;rft.date=2017-10-31&amp;rft_id=http%3A%2F%2Fwww.nba.com%2Farticle%2F2017%2F10%2F31%2Fshaquille-oneal-makes-debut-late-night-tv-host%23%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AShaquille+O%27Neal" class="Z3988"><span style="display:none;">&#160;</span></span></span></li>
</ol>
</div>
<h2><span class="mw-headline" id="External_links">External links</span></h2>
<p><a href="/wiki/File:Commons-logo.svg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/12px-Commons-logo.svg.png" width="12" height="16" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/18px-Commons-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/24px-Commons-logo.svg.png 2x" data-file-width="1024" data-file-height="1376" /></a> Media related to <a href="https://commons.wikimedia.org/wiki/Category:Shaquille_O%27Neal" class="extiw" title="commons:Category:Shaquille O'Neal">Shaquille O'Neal</a> at Wikimedia Commons <a href="/wiki/File:Wikiquote-logo.svg" class="image"><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/13px-Wikiquote-logo.svg.png" width="13" height="16" class="noviewer" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/20px-Wikiquote-logo.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wikiquote-logo.svg/27px-Wikiquote-logo.svg.png 2x" data-file-width="300" data-file-height="355" /></a> Quotations related to <a href="https://en.wikiquote.org/wiki/Special:Search/Shaquille_O%27Neal" class="extiw" title="wikiquote:Special:Search/Shaquille O'Neal">Shaquille O'Neal</a> at Wikiquote</p>
<ul>
<li class="mw-empty-elt"></li>
<li>Career statistics and player information from <a rel="nofollow" class="external text" href="https://www.basketball-reference.com/players/o/onealsh01.html">Basketball-Reference.com</a></li>
<li><a rel="nofollow" class="external text" href="https://www.imdb.com/name/nm0641944/">Shaquille O'Neal</a> on <a href="/wiki/IMDb" title="IMDb">IMDb</a></li>
<li><a rel="nofollow" class="external text" href="http://www.lsusports.net/ViewArticle.dbml?DB_OEM_ID=5200&amp;ATCLID=174841">Shaquille O'Neal</a> at Louisiana State</li>
</ul>
<div role="navigation" class="navbox" aria-labelledby="Shaquille_O&amp;#039;Neal" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Shaquille_O%27Neal" title="Template:Shaquille O'Neal"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Shaquille_O%27Neal" title="Template talk:Shaquille O'Neal"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Shaquille_O%27Neal&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Shaquille_O&amp;#039;Neal" style="font-size:114%;margin:0 4em"><span class="vcard"><span class="fn"><a class="mw-selflink selflink">Shaquille O'Neal</a></span></span></div>
</th>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Family</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Shareef_O%27Neal" title="Shareef O'Neal">Shareef O'Neal</a> <i>(son)</i></li>
<li><a href="/wiki/Shaunie_O%27Neal" title="Shaunie O'Neal">Shaunie O'Neal</a> <i>(ex-wife)</i></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Music</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="row" class="navbox-group" style="width:1%">Studio albums</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><i><a href="/wiki/Shaq_Diesel" title="Shaq Diesel">Shaq Diesel</a></i></li>
<li><i><a href="/wiki/Shaq_Fu:_Da_Return" title="Shaq Fu: Da Return">Shaq Fu: Da Return</a></i></li>
<li><i><a href="/wiki/You_Can%27t_Stop_the_Reign" title="You Can't Stop the Reign">You Can't Stop the Reign</a></i></li>
<li><i><a href="/wiki/Respect_(Shaquille_O%27Neal_album)" title="Respect (Shaquille O'Neal album)">Respect</a></i></li>
<li><i><a href="/wiki/Shaquille_O%27Neal_Presents_His_Superfriends,_Vol._1" title="Shaquille O'Neal Presents His Superfriends, Vol. 1">Shaquille O'Neal Presents His Superfriends, Vol. 1</a></i></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Compilation albums</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><i><a href="/wiki/The_Best_of_Shaquille_O%27Neal" title="The Best of Shaquille O'Neal">The Best of Shaquille O'Neal</a></i></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Singles</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li>"<a href="/wiki/(I_Know_I_Got)_Skillz" title="(I Know I Got) Skillz">(I Know I Got) Skillz</a>"</li>
<li>"<a href="/wiki/I%27m_Outstanding" title="I'm Outstanding">I'm Outstanding</a>"</li>
<li>"<a href="/wiki/Shaq_Diesel" title="Shaq Diesel">Shoot Pass Slam</a>"</li>
<li>"<a href="/wiki/Biological_Didn%27t_Bother" title="Biological Didn't Bother">Biological Didn't Bother</a>"</li>
<li>"<a href="/wiki/No_Hook" title="No Hook">No Hook</a>"</li>
<li>"<a href="/wiki/You_Can%27t_Stop_the_Reign_(song)" title="You Can't Stop the Reign (song)">You Can't Stop the Reign</a>"</li>
<li>"<a href="/wiki/Strait_Playin%27" title="Strait Playin'">Strait Playin'</a>"</li>
<li>"<a href="/wiki/Men_of_Steel_(song)" title="Men of Steel (song)">Men of Steel</a>"</li>
<li>"<a href="/wiki/The_Way_It%27s_Goin%27_Down" title="The Way It's Goin' Down">The Way It's Goin' Down</a>"</li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">TV</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><i><a href="/wiki/Shaquille_(TV_series)" title="Shaquille (TV series)">Shaquille</a></i></li>
<li><i><a href="/wiki/Shaq%27s_Big_Challenge" title="Shaq's Big Challenge">Shaq's Big Challenge</a></i></li>
<li><i><a href="/wiki/Shaq_Vs." title="Shaq Vs.">Shaq Vs.</a></i></li>
<li><i><a href="/wiki/Shaqtin%27_a_Fool" title="Shaqtin' a Fool">Shaqtin' a Fool</a></i></li>
<li><i><a href="/wiki/Upload_with_Shaquille_O%27Neal" title="Upload with Shaquille O'Neal">Upload with Shaquille O'Neal</a></i></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Other</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Shaquille_O%27Neal_discography" title="Shaquille O'Neal discography">Discography</a></li>
<li><a href="/wiki/Hack-a-Shaq" title="Hack-a-Shaq">Hack-a-Shaq</a></li>
<li><i><a href="/wiki/Shaq_Fu" title="Shaq Fu">Shaq Fu</a></i></li>
<li><a href="/wiki/Shaq%E2%80%93Kobe_feud" title="Shaq–Kobe feud">Shaq–Kobe feud</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Links_to_related_articles" style="padding:3px">
<table class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background:#e8e8ff;">
<div id="Links_to_related_articles" style="font-size:114%;margin:0 4em">Links to related articles</div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px;font-size:114%;">
<div style="padding:0px;">
<div role="navigation" class="navbox" aria-labelledby="United_States_squad_–_1994_FIBA_World_Championship_–_Gold_medal" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background:#002B54; color:#FFFFFF; border: 1px solid #aaa;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:United_States_Squad_1994_FIBA_World_Championship" title="Template:United States Squad 1994 FIBA World Championship"><abbr title="View this template" style=";background:#002B54; color:#FFFFFF; border: 1px solid #aaa;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:United_States_Squad_1994_FIBA_World_Championship" title="Template talk:United States Squad 1994 FIBA World Championship"><abbr title="Discuss this template" style=";background:#002B54; color:#FFFFFF; border: 1px solid #aaa;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:United_States_Squad_1994_FIBA_World_Championship&amp;action=edit"><abbr title="Edit this template" style=";background:#002B54; color:#FFFFFF; border: 1px solid #aaa;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="United_States_squad_–_1994_FIBA_World_Championship_–_Gold_medal" style="font-size:114%;margin:0 4em"><a href="/wiki/United_States_men%27s_national_basketball_team" title="United States men's national basketball team"><span style="color:#FFFFFF;">United States squad</span></a> <span style="color:#FFFFFF;">–</span> <a href="/wiki/1994_FIBA_World_Championship" title="1994 FIBA World Championship"><span style="color:#FFFFFF;">1994 FIBA World Championship – Gold medal</span></a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><small>4</small>&#160;<a href="/wiki/Joe_Dumars" title="Joe Dumars">Dumars</a></li>
<li><small>5</small>&#160;<a href="/wiki/Mark_Price" title="Mark Price">Price</a></li>
<li><small>6</small>&#160;<a href="/wiki/Derrick_Coleman" title="Derrick Coleman">Coleman</a></li>
<li><small>7</small>&#160;<a href="/wiki/Shawn_Kemp" title="Shawn Kemp">Kemp</a></li>
<li><small>8</small>&#160;<a href="/wiki/Steve_Smith_(basketball)" title="Steve Smith (basketball)">Smith</a></li>
<li><small>9</small>&#160;<a href="/wiki/Dan_Majerle" title="Dan Majerle">Majerle</a></li>
<li><small>10</small>&#160;<a href="/wiki/Reggie_Miller" title="Reggie Miller">Miller</a></li>
<li><small>11</small>&#160;<a href="/wiki/Kevin_Johnson" title="Kevin Johnson">K. Johnson</a></li>
<li><small>12</small>&#160;<a href="/wiki/Dominique_Wilkins" title="Dominique Wilkins">Wilkins</a></li>
<li><small>13</small>&#160;<a class="mw-selflink selflink">O'Neal</a> (<a href="/wiki/FIBA_Basketball_World_Cup_records#Most_Valuable_Players" title="FIBA Basketball World Cup records">MVP</a>)</li>
<li><small>14</small>&#160;<a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">Mourning</a></li>
<li><small>15</small>&#160;<a href="/wiki/Larry_Johnson_(basketball,_born_1969)" title="Larry Johnson (basketball, born 1969)">L. Johnson</a></li>
<li><small>Coach:</small>&#160;<a href="/wiki/Don_Nelson" title="Don Nelson">Nelson</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="FIBA_World_Cup_Most_Valuable_Player_Award" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:FIBA_Basketball_World_Cup_MVP_Award" title="Template:FIBA Basketball World Cup MVP Award"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:FIBA_Basketball_World_Cup_MVP_Award" title="Template talk:FIBA Basketball World Cup MVP Award"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:FIBA_Basketball_World_Cup_MVP_Award&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="FIBA_World_Cup_Most_Valuable_Player_Award" style="font-size:114%;margin:0 4em"><a href="/wiki/FIBA_Basketball_World_Cup" title="FIBA Basketball World Cup">FIBA World Cup</a> <a href="/wiki/FIBA_Basketball_World_Cup_Most_Valuable_Player" title="FIBA Basketball World Cup Most Valuable Player">Most Valuable Player Award</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1950: <span class="flagicon"><a href="/wiki/Argentina" title="Argentina"><img alt="Argentina" src="//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/23px-Flag_of_Argentina.svg.png" width="23" height="14" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/35px-Flag_of_Argentina.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/46px-Flag_of_Argentina.svg.png 2x" data-file-width="800" data-file-height="500" /></a></span> <a href="/wiki/Oscar_Furlong" title="Oscar Furlong">Furlong</a></span></li>
<li><span class="nowrap">1954: <span class="flagicon"><a href="/wiki/United_States" title="United States"><img alt="United States" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/23px-Flag_of_the_United_States_%281912-1959%29.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/35px-Flag_of_the_United_States_%281912-1959%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/46px-Flag_of_the_United_States_%281912-1959%29.svg.png 2x" data-file-width="1900" data-file-height="1000" /></a></span> <a href="/wiki/Kirby_Minter" title="Kirby Minter">Minter</a></span></li>
<li><span class="nowrap">1959: <span class="flagicon"><a href="/wiki/Brazil" title="Brazil"><img alt="Brazil" src="//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Brazil_%281889%E2%80%931960%29.svg/22px-Flag_of_Brazil_%281889%E2%80%931960%29.svg.png" width="22" height="15" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Brazil_%281889%E2%80%931960%29.svg/33px-Flag_of_Brazil_%281889%E2%80%931960%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Brazil_%281889%E2%80%931960%29.svg/43px-Flag_of_Brazil_%281889%E2%80%931960%29.svg.png 2x" data-file-width="720" data-file-height="504" /></a></span> <a href="/wiki/Amaury_Pasos" title="Amaury Pasos">Pasos</a></span></li>
<li><span class="nowrap">1963: <span class="flagicon"><a href="/wiki/Brazil" title="Brazil"><img alt="Brazil" src="//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Brazil_%281960%E2%80%931968%29.svg/22px-Flag_of_Brazil_%281960%E2%80%931968%29.svg.png" width="22" height="15" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Brazil_%281960%E2%80%931968%29.svg/33px-Flag_of_Brazil_%281960%E2%80%931968%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Brazil_%281960%E2%80%931968%29.svg/43px-Flag_of_Brazil_%281960%E2%80%931968%29.svg.png 2x" data-file-width="720" data-file-height="504" /></a></span> <a href="/wiki/Wlamir_Marques" title="Wlamir Marques">Marques</a></span></li>
<li><span class="nowrap">1967: <span class="flagicon"><a href="/wiki/Socialist_Federal_Republic_of_Yugoslavia" title="Socialist Federal Republic of Yugoslavia"><img alt="Socialist Federal Republic of Yugoslavia" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/23px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/35px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/46px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 2x" data-file-width="600" data-file-height="300" /></a></span> <a href="/wiki/Ivo_Daneu" title="Ivo Daneu">Daneu</a></span></li>
<li><span class="nowrap">1970: <span class="flagicon"><a href="/wiki/Soviet_Union" title="Soviet Union"><img alt="Soviet Union" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Soviet_Union_%281955%E2%80%931980%29.svg/23px-Flag_of_the_Soviet_Union_%281955%E2%80%931980%29.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Soviet_Union_%281955%E2%80%931980%29.svg/35px-Flag_of_the_Soviet_Union_%281955%E2%80%931980%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Soviet_Union_%281955%E2%80%931980%29.svg/46px-Flag_of_the_Soviet_Union_%281955%E2%80%931980%29.svg.png 2x" data-file-width="1200" data-file-height="600" /></a></span> <a href="/wiki/Sergei_Belov" title="Sergei Belov">Belov</a></span></li>
<li><span class="nowrap">1974: <span class="flagicon"><a href="/wiki/Socialist_Federal_Republic_of_Yugoslavia" title="Socialist Federal Republic of Yugoslavia"><img alt="Socialist Federal Republic of Yugoslavia" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/23px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/35px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/46px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 2x" data-file-width="600" data-file-height="300" /></a></span> <a href="/wiki/Dragan_Ki%C4%87anovi%C4%87" title="Dragan Kićanović">Kićanović</a></span></li>
<li><span class="nowrap">1978: <span class="flagicon"><a href="/wiki/Socialist_Federal_Republic_of_Yugoslavia" title="Socialist Federal Republic of Yugoslavia"><img alt="Socialist Federal Republic of Yugoslavia" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/23px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/35px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/46px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 2x" data-file-width="600" data-file-height="300" /></a></span> <a href="/wiki/Dra%C5%BEen_Dalipagi%C4%87" title="Dražen Dalipagić">Dalipagić</a></span></li>
<li><span class="nowrap">1982: <span class="flagicon"><a href="/wiki/Panama" title="Panama"><img alt="Panama" src="//upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/23px-Flag_of_Panama.svg.png" width="23" height="15" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/35px-Flag_of_Panama.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/45px-Flag_of_Panama.svg.png 2x" data-file-width="450" data-file-height="300" /></a></span> <a href="/wiki/Rolando_Frazer" title="Rolando Frazer">Frazer</a></span></li>
<li><span class="nowrap">1986: <span class="flagicon"><a href="/wiki/Socialist_Federal_Republic_of_Yugoslavia" title="Socialist Federal Republic of Yugoslavia"><img alt="Socialist Federal Republic of Yugoslavia" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/23px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/35px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/46px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 2x" data-file-width="600" data-file-height="300" /></a></span> <a href="/wiki/Dra%C5%BEen_Petrovi%C4%87" title="Dražen Petrović">Petrović</a></span></li>
<li><span class="nowrap">1990: <span class="flagicon"><a href="/wiki/Socialist_Federal_Republic_of_Yugoslavia" title="Socialist Federal Republic of Yugoslavia"><img alt="Socialist Federal Republic of Yugoslavia" src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/23px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/35px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg/46px-Flag_of_Yugoslavia_%281943%E2%80%931992%29.svg.png 2x" data-file-width="600" data-file-height="300" /></a></span> <a href="/wiki/Toni_Kuko%C4%8D" title="Toni Kukoč">Kukoč</a></span></li>
<li><span class="nowrap">1994: <span class="flagicon"><a href="/wiki/United_States" title="United States"><img alt="United States" src="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x" data-file-width="1235" data-file-height="650" /></a></span> <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1998: <span class="flagicon"><a href="/wiki/Serbia_and_Montenegro" title="Serbia and Montenegro"><img alt="Serbia and Montenegro" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_Yugoslavia_%281992%E2%80%932003%29.svg/23px-Flag_of_Yugoslavia_%281992%E2%80%932003%29.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_Yugoslavia_%281992%E2%80%932003%29.svg/35px-Flag_of_Yugoslavia_%281992%E2%80%932003%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_Yugoslavia_%281992%E2%80%932003%29.svg/46px-Flag_of_Yugoslavia_%281992%E2%80%932003%29.svg.png 2x" data-file-width="600" data-file-height="300" /></a></span> <a href="/wiki/Dejan_Bodiroga" title="Dejan Bodiroga">Bodiroga</a></span></li>
<li><span class="nowrap">2002: <span class="flagicon"><a href="/wiki/Germany" title="Germany"><img alt="Germany" src="//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/23px-Flag_of_Germany.svg.png" width="23" height="14" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/35px-Flag_of_Germany.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/46px-Flag_of_Germany.svg.png 2x" data-file-width="1000" data-file-height="600" /></a></span> <a href="/wiki/Dirk_Nowitzki" title="Dirk Nowitzki">Nowitzki</a></span></li>
<li><span class="nowrap">2006: <span class="flagicon"><a href="/wiki/Spain" title="Spain"><img alt="Spain" src="//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/23px-Flag_of_Spain.svg.png" width="23" height="15" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/35px-Flag_of_Spain.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/45px-Flag_of_Spain.svg.png 2x" data-file-width="750" data-file-height="500" /></a></span> <a href="/wiki/Pau_Gasol" title="Pau Gasol">Gasol</a></span></li>
<li><span class="nowrap">2010: <span class="flagicon"><a href="/wiki/United_States" title="United States"><img alt="United States" src="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x" data-file-width="1235" data-file-height="650" /></a></span> <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2014: <span class="flagicon"><a href="/wiki/United_States" title="United States"><img alt="United States" src="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/23px-Flag_of_the_United_States.svg.png" width="23" height="12" class="thumbborder" srcset="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/46px-Flag_of_the_United_States.svg.png 2x" data-file-width="1235" data-file-height="650" /></a></span> <a href="/wiki/Kyrie_Irving" title="Kyrie Irving">Irving</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="United_States_men&amp;#039;s_basketball_squad_–_1996_Summer_Olympics_–_Gold_medal" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background:#002B54; color:#FFFFFF; border: 1px solid #aaa;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:United_States_Men_Basketball_Squad_1996_Summer_Olympics" title="Template:United States Men Basketball Squad 1996 Summer Olympics"><abbr title="View this template" style=";background:#002B54; color:#FFFFFF; border: 1px solid #aaa;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:United_States_Men_Basketball_Squad_1996_Summer_Olympics" title="Template talk:United States Men Basketball Squad 1996 Summer Olympics"><abbr title="Discuss this template" style=";background:#002B54; color:#FFFFFF; border: 1px solid #aaa;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:United_States_Men_Basketball_Squad_1996_Summer_Olympics&amp;action=edit"><abbr title="Edit this template" style=";background:#002B54; color:#FFFFFF; border: 1px solid #aaa;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="United_States_men&amp;#039;s_basketball_squad_–_1996_Summer_Olympics_–_Gold_medal" style="font-size:114%;margin:0 4em"><a href="/wiki/1996_United_States_men%27s_Olympic_basketball_team" title="1996 United States men's Olympic basketball team"><span style="color:#FFFFFF;">United States men's basketball squad</span></a> <span style="color:#FFFFFF;">–</span> <a href="/wiki/Basketball_at_the_1996_Summer_Olympics_%E2%80%93_Men%27s_tournament" title="Basketball at the 1996 Summer Olympics – Men's tournament"><span style="color:#FFFFFF;">1996 Summer Olympics – Gold medal</span></a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><small>4</small>&#160;<a href="/wiki/Charles_Barkley" title="Charles Barkley">Barkley</a></li>
<li><small>5</small>&#160;<a href="/wiki/Grant_Hill" title="Grant Hill">Hill</a></li>
<li><small>6</small>&#160;<a href="/wiki/Penny_Hardaway" title="Penny Hardaway">Hardaway</a></li>
<li><small>7</small>&#160;<a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></li>
<li><small>8</small>&#160;<a href="/wiki/Scottie_Pippen" title="Scottie Pippen">Pippen</a></li>
<li><small>9</small>&#160;<a href="/wiki/Mitch_Richmond" title="Mitch Richmond">Richmond</a></li>
<li><small>10</small>&#160;<a href="/wiki/Reggie_Miller" title="Reggie Miller">Miller</a></li>
<li><small>11</small>&#160;<a href="/wiki/Karl_Malone" title="Karl Malone">Malone</a></li>
<li><small>12</small>&#160;<a href="/wiki/John_Stockton" title="John Stockton">Stockton</a></li>
<li><small>13</small>&#160;<a class="mw-selflink selflink">O'Neal</a></li>
<li><small>14</small>&#160;<a href="/wiki/Gary_Payton" title="Gary Payton">Payton</a></li>
<li><small>15</small>&#160;<a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Olajuwon</a></li>
<li><small>Coach:</small>&#160;<a href="/wiki/Lenny_Wilkens" title="Lenny Wilkens">Wilkens</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="USA_Basketball_Male_Athlete_of_the_Year" style="padding:3px">
<table class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:USA_Basketball_Male_Athlete_of_the_Year" title="Template:USA Basketball Male Athlete of the Year"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:USA_Basketball_Male_Athlete_of_the_Year" title="Template talk:USA Basketball Male Athlete of the Year"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:USA_Basketball_Male_Athlete_of_the_Year&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="USA_Basketball_Male_Athlete_of_the_Year" style="font-size:114%;margin:0 4em"><a href="/wiki/USA_Basketball_Male_Athlete_of_the_Year" title="USA Basketball Male Athlete of the Year">USA Basketball Male Athlete of the Year</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1980: <a href="/wiki/Isiah_Thomas" title="Isiah Thomas">Thomas</a></span></li>
<li><span class="nowrap">1981: <a href="/w/index.php?title=Kevin_Boyle_(basketball)&amp;action=edit&amp;redlink=1" class="new" title="Kevin Boyle (basketball) (page does not exist)">Boyle</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Doc_Rivers" title="Doc Rivers">Rivers</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a> &amp; <a href="/wiki/Sam_Perkins" title="Sam Perkins">Perkins</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Chuck_Person" title="Chuck Person">Person</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Danny_Manning" title="Danny Manning">Manning</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Dan_Majerle" title="Dan Majerle">Majerle</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Larry_Johnson_(basketball,_born_1969)" title="Larry Johnson (basketball, born 1969)">Johnson</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">Mourning</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/Christian_Laettner" title="Christian Laettner">Laettner</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/1992_United_States_men%27s_Olympic_basketball_team" title="1992 United States men's Olympic basketball team">U.S. men's national team</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Michael_Finley" title="Michael Finley">Finley</a></span></li>
<li><span class="nowrap">1994: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Ray_Allen" title="Ray Allen">Allen</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Scottie_Pippen" title="Scottie Pippen">Pippen</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Earl_Boykins" title="Earl Boykins">Boykins</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Elton_Brand" title="Elton Brand">Brand</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Gary_Payton" title="Gary Payton">Payton</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">Mourning</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Chris_Duhon" title="Chris Duhon">Duhon</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Reggie_Miller" title="Reggie Miller">Miller</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Sean_May" title="Sean May">May</a> &amp; <a href="/wiki/Chris_Paul" title="Chris Paul">Paul</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Shelden_Williams" title="Shelden Williams">Williams</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Carmelo_Anthony" title="Carmelo Anthony">Anthony</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Jason_Kidd" title="Jason Kidd">Kidd</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/2008_United_States_men%27s_Olympic_basketball_team" title="2008 United States men's Olympic basketball team">U.S. men's national team</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/James_Michael_McAdoo" title="James Michael McAdoo">McAdoo</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Jabari_Parker" title="Jabari Parker">Parker</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Aaron_Gordon" title="Aaron Gordon">Gordon</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Kyrie_Irving" title="Kyrie Irving">Irving</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Jalen_Brunson" title="Jalen Brunson">Brunson</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Carmelo_Anthony" title="Carmelo Anthony">Anthony</a> &amp; <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Jameel_Warney" title="Jameel Warney">Warney</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="1992_NBA_draft" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:1992_NBA_Draft" title="Template:1992 NBA Draft"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:1992_NBA_Draft" title="Template talk:1992 NBA Draft"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:1992_NBA_Draft&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="1992_NBA_draft" style="font-size:114%;margin:0 4em"><a href="/wiki/1992_NBA_draft" title="1992 NBA draft">1992 NBA draft</a></div>
</th>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%;text-align: center;">First round</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a class="mw-selflink selflink">Shaquille O'Neal</a></li>
<li><a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">Alonzo Mourning</a></li>
<li><a href="/wiki/Christian_Laettner" title="Christian Laettner">Christian Laettner</a></li>
<li><a href="/wiki/Jim_Jackson_(basketball)" title="Jim Jackson (basketball)">Jim Jackson</a></li>
<li><a href="/wiki/LaPhonso_Ellis" title="LaPhonso Ellis">LaPhonso Ellis</a></li>
<li><a href="/wiki/Tom_Gugliotta" title="Tom Gugliotta">Tom Gugliotta</a></li>
<li><a href="/wiki/Walt_Williams" title="Walt Williams">Walt Williams</a></li>
<li><a href="/wiki/Todd_Day" title="Todd Day">Todd Day</a></li>
<li><a href="/wiki/Clarence_Weatherspoon" title="Clarence Weatherspoon">Clarence Weatherspoon</a></li>
<li><a href="/wiki/Adam_Keefe_(basketball)" title="Adam Keefe (basketball)">Adam Keefe</a></li>
<li><a href="/wiki/Robert_Horry" title="Robert Horry">Robert Horry</a></li>
<li><a href="/wiki/Harold_Miner" title="Harold Miner">Harold Miner</a></li>
<li><a href="/wiki/Bryant_Stith" title="Bryant Stith">Bryant Stith</a></li>
<li><a href="/wiki/Malik_Sealy" title="Malik Sealy">Malik Sealy</a></li>
<li><a href="/wiki/Anthony_Peeler" title="Anthony Peeler">Anthony Peeler</a></li>
<li><a href="/wiki/Randy_Woods" title="Randy Woods">Randy Woods</a></li>
<li><a href="/wiki/Doug_Christie_(basketball)" title="Doug Christie (basketball)">Doug Christie</a></li>
<li><a href="/wiki/Tracy_Murray" title="Tracy Murray">Tracy Murray</a></li>
<li><a href="/wiki/Don_MacLean_(basketball)" title="Don MacLean (basketball)">Don MacLean</a></li>
<li><a href="/wiki/Hubert_Davis" title="Hubert Davis">Hubert Davis</a></li>
<li><a href="/wiki/Jon_Barry" title="Jon Barry">Jon Barry</a></li>
<li><a href="/wiki/Oliver_Miller" title="Oliver Miller">Oliver Miller</a></li>
<li><a href="/wiki/Lee_Mayberry" title="Lee Mayberry">Lee Mayberry</a></li>
<li><a href="/wiki/Latrell_Sprewell" title="Latrell Sprewell">Latrell Sprewell</a></li>
<li><a href="/wiki/Elmore_Spencer" title="Elmore Spencer">Elmore Spencer</a></li>
<li><a href="/wiki/Dave_Johnson_(basketball)" title="Dave Johnson (basketball)">Dave Johnson</a></li>
<li><a href="/wiki/Byron_Houston" title="Byron Houston">Byron Houston</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%;text-align: center;">Second round</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Marlon_Maxey" title="Marlon Maxey">Marlon Maxey</a></li>
<li><a href="/wiki/P._J._Brown" title="P. J. Brown">P. J. Brown</a></li>
<li><a href="/wiki/Sean_Rooks" title="Sean Rooks">Sean Rooks</a></li>
<li><a href="/wiki/Reggie_Smith_(basketball)" title="Reggie Smith (basketball)">Reggie Smith</a></li>
<li><a href="/wiki/Brent_Price" title="Brent Price">Brent Price</a></li>
<li><a href="/wiki/Corey_Williams_(basketball,_born_1970)" title="Corey Williams (basketball, born 1970)">Corey Williams</a></li>
<li><a href="/wiki/Chris_Smith_(basketball,_born_1970)" title="Chris Smith (basketball, born 1970)">Chris Smith</a></li>
<li><a href="/wiki/Tony_Bennett_(basketball)" title="Tony Bennett (basketball)">Tony Bennett</a></li>
<li><a href="/wiki/Duane_Cooper" title="Duane Cooper">Duane Cooper</a></li>
<li><a href="/wiki/Isaiah_Morris" title="Isaiah Morris">Isaiah Morris</a></li>
<li><a href="/wiki/Elmer_Bennett" title="Elmer Bennett">Elmer Bennett</a></li>
<li><a href="/wiki/Litterial_Green" title="Litterial Green">Litterial Green</a></li>
<li><a href="/wiki/Steve_Rogers_(basketball)" title="Steve Rogers (basketball)">Steve Rogers</a></li>
<li><a href="/wiki/Popeye_Jones" title="Popeye Jones">Popeye Jones</a></li>
<li><a href="/wiki/Matt_Geiger" title="Matt Geiger">Matt Geiger</a></li>
<li><a href="/wiki/Predrag_Danilovi%C4%87" title="Predrag Danilović">Predrag Danilović</a></li>
<li><a href="/wiki/Henry_Williams_(basketball)" title="Henry Williams (basketball)">Henry Williams</a></li>
<li><a href="/wiki/Chris_King_(basketball)" title="Chris King (basketball)">Chris King</a></li>
<li><a href="/wiki/Robert_Werdann" title="Robert Werdann">Robert Werdann</a></li>
<li><a href="/wiki/Darren_Morningstar" title="Darren Morningstar">Darren Morningstar</a></li>
<li><a href="/wiki/Brian_Davis_(basketball)" title="Brian Davis (basketball)">Brian Davis</a></li>
<li><a href="/wiki/Ron_Ellis_(basketball)" title="Ron Ellis (basketball)">Ron Ellis</a></li>
<li><a href="/wiki/Matt_Fish" title="Matt Fish">Matt Fish</a></li>
<li><a href="/wiki/Tim_Burroughs" title="Tim Burroughs">Tim Burroughs</a></li>
<li><a href="/wiki/Matt_Steigenga" title="Matt Steigenga">Matt Steigenga</a></li>
<li><a href="/wiki/Curtis_Blair" title="Curtis Blair">Curtis Blair</a></li>
<li><a href="/wiki/Brett_Roberts" title="Brett Roberts">Brett Roberts</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="NBA_first_overall_draft_picks" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NBA_NumberOne_Draft_Picks" title="Template:NBA NumberOne Draft Picks"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NBA_NumberOne_Draft_Picks" title="Template talk:NBA NumberOne Draft Picks"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NBA_NumberOne_Draft_Picks&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="NBA_first_overall_draft_picks" style="font-size:114%;margin:0 4em"><a href="/wiki/List_of_first_overall_NBA_draft_picks" title="List of first overall NBA draft picks">NBA first overall draft picks</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap"><a href="/wiki/1947_BAA_draft" title="1947 BAA draft">1947</a>: <a href="/wiki/Clifton_McNeely" title="Clifton McNeely">McNeely</a></span></li>
<li><span class="nowrap"><a href="/wiki/1948_BAA_draft" title="1948 BAA draft">1948</a>: <a href="/wiki/Andy_Tonkovich" title="Andy Tonkovich">Tonkovich</a></span></li>
<li><span class="nowrap"><a href="/wiki/1949_BAA_draft" title="1949 BAA draft">1949</a>: <a href="/wiki/Howie_Shannon" title="Howie Shannon">Shannon</a></span></li>
<li><span class="nowrap"><a href="/wiki/1950_NBA_draft" title="1950 NBA draft">1950</a>: <a href="/wiki/Chuck_Share" title="Chuck Share">Share</a></span></li>
<li><span class="nowrap"><a href="/wiki/1951_NBA_draft" title="1951 NBA draft">1951</a>: <a href="/wiki/Gene_Melchiorre" title="Gene Melchiorre">Melchiorre</a></span></li>
<li><span class="nowrap"><a href="/wiki/1952_NBA_draft" title="1952 NBA draft">1952</a>: <a href="/wiki/Mark_Workman" title="Mark Workman">Workman</a></span></li>
<li><span class="nowrap"><a href="/wiki/1953_NBA_draft" title="1953 NBA draft">1953</a>: <a href="/wiki/Ray_Felix" title="Ray Felix">Felix</a></span></li>
<li><span class="nowrap"><a href="/wiki/1954_NBA_draft" title="1954 NBA draft">1954</a>: <a href="/wiki/Frank_Selvy" title="Frank Selvy">Selvy</a></span></li>
<li><span class="nowrap"><a href="/wiki/1955_NBA_draft" title="1955 NBA draft">1955</a>: <a href="/wiki/Dick_Ricketts" title="Dick Ricketts">Ricketts</a></span></li>
<li><span class="nowrap"><a href="/wiki/1956_NBA_draft" title="1956 NBA draft">1956</a>: <a href="/wiki/Sihugo_Green" title="Sihugo Green">Green</a></span></li>
<li><span class="nowrap"><a href="/wiki/1957_NBA_draft" title="1957 NBA draft">1957</a>: <a href="/wiki/Hot_Rod_Hundley" title="Hot Rod Hundley">Hundley</a></span></li>
<li><span class="nowrap"><a href="/wiki/1958_NBA_draft" title="1958 NBA draft">1958</a>: <a href="/wiki/Elgin_Baylor" title="Elgin Baylor">Baylor</a></span></li>
<li><span class="nowrap"><a href="/wiki/1959_NBA_draft" title="1959 NBA draft">1959</a>: <a href="/wiki/Bob_Boozer" title="Bob Boozer">Boozer</a></span></li>
<li><span class="nowrap"><a href="/wiki/1960_NBA_draft" title="1960 NBA draft">1960</a>: <a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1961_NBA_draft" title="1961 NBA draft">1961</a>: <a href="/wiki/Walt_Bellamy" title="Walt Bellamy">Bellamy</a></span></li>
<li><span class="nowrap"><a href="/wiki/1962_NBA_draft" title="1962 NBA draft">1962</a>: <a href="/wiki/Bill_McGill" title="Bill McGill">McGill</a></span></li>
<li><span class="nowrap"><a href="/wiki/1963_NBA_draft" title="1963 NBA draft">1963</a>: <a href="/wiki/Art_Heyman" title="Art Heyman">Heyman</a></span></li>
<li><span class="nowrap"><a href="/wiki/1964_NBA_draft" title="1964 NBA draft">1964</a>: <a href="/wiki/Jim_%22Bad_News%22_Barnes" title="Jim &quot;Bad News&quot; Barnes">Barnes</a></span></li>
<li><span class="nowrap"><a href="/wiki/1965_NBA_draft" title="1965 NBA draft">1965</a>: <a href="/wiki/Fred_Hetzel" title="Fred Hetzel">Hetzel</a></span></li>
<li><span class="nowrap"><a href="/wiki/1966_NBA_draft" title="1966 NBA draft">1966</a>: <a href="/wiki/Cazzie_Russell" title="Cazzie Russell">Russell</a></span></li>
<li><span class="nowrap"><a href="/wiki/1967_NBA_draft" title="1967 NBA draft">1967</a>: <a href="/wiki/Jimmy_Walker_(basketball,_born_1944)" title="Jimmy Walker (basketball, born 1944)">Walker</a></span></li>
<li><span class="nowrap"><a href="/wiki/1968_NBA_draft" title="1968 NBA draft">1968</a>: <a href="/wiki/Elvin_Hayes" title="Elvin Hayes">Hayes</a></span></li>
<li><span class="nowrap"><a href="/wiki/1969_NBA_draft" title="1969 NBA draft">1969</a>: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Alcindor</a></span></li>
<li><span class="nowrap"><a href="/wiki/1970_NBA_draft" title="1970 NBA draft">1970</a>: <a href="/wiki/Bob_Lanier_(basketball)" title="Bob Lanier (basketball)">Lanier</a></span></li>
<li><span class="nowrap"><a href="/wiki/1971_NBA_draft" title="1971 NBA draft">1971</a>: <a href="/wiki/Austin_Carr" title="Austin Carr">Carr</a></span></li>
<li><span class="nowrap"><a href="/wiki/1972_NBA_draft" title="1972 NBA draft">1972</a>: <a href="/wiki/LaRue_Martin" title="LaRue Martin">L. Martin</a></span></li>
<li><span class="nowrap"><a href="/wiki/1973_NBA_draft" title="1973 NBA draft">1973</a>: <a href="/wiki/Doug_Collins_(basketball)" title="Doug Collins (basketball)">Collins</a></span></li>
<li><span class="nowrap"><a href="/wiki/1974_NBA_draft" title="1974 NBA draft">1974</a>: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap"><a href="/wiki/1975_NBA_draft" title="1975 NBA draft">1975</a>: <a href="/wiki/David_Thompson_(basketball)" title="David Thompson (basketball)">D. Thompson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1976_NBA_draft" title="1976 NBA draft">1976</a>: <a href="/wiki/John_Lucas_II" title="John Lucas II">Lucas</a></span></li>
<li><span class="nowrap"><a href="/wiki/1977_NBA_draft" title="1977 NBA draft">1977</a>: <a href="/wiki/Kent_Benson" title="Kent Benson">Benson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1978_NBA_draft" title="1978 NBA draft">1978</a>: <a href="/wiki/Mychal_Thompson" title="Mychal Thompson">M. Thompson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1979_NBA_draft" title="1979 NBA draft">1979</a>: <a href="/wiki/Magic_Johnson" title="Magic Johnson">E. Johnson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1980_NBA_draft" title="1980 NBA draft">1980</a>: <a href="/wiki/Joe_Barry_Carroll" title="Joe Barry Carroll">Carroll</a></span></li>
<li><span class="nowrap"><a href="/wiki/1981_NBA_draft" title="1981 NBA draft">1981</a>: <a href="/wiki/Mark_Aguirre" title="Mark Aguirre">Aguirre</a></span></li>
<li><span class="nowrap"><a href="/wiki/1982_NBA_draft" title="1982 NBA draft">1982</a>: <a href="/wiki/James_Worthy" title="James Worthy">Worthy</a></span></li>
<li><span class="nowrap"><a href="/wiki/1983_NBA_draft" title="1983 NBA draft">1983</a>: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1984_NBA_draft" title="1984 NBA draft">1984</a>: <a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Olajuwon</a></span></li>
<li><span class="nowrap"><a href="/wiki/1985_NBA_draft" title="1985 NBA draft">1985</a>: <a href="/wiki/Patrick_Ewing" title="Patrick Ewing">Ewing</a></span></li>
<li><span class="nowrap"><a href="/wiki/1986_NBA_draft" title="1986 NBA draft">1986</a>: <a href="/wiki/Brad_Daugherty_(basketball)" title="Brad Daugherty (basketball)">Daugherty</a></span></li>
<li><span class="nowrap"><a href="/wiki/1987_NBA_draft" title="1987 NBA draft">1987</a>: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">D. Robinson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1988_NBA_draft" title="1988 NBA draft">1988</a>: <a href="/wiki/Danny_Manning" title="Danny Manning">Manning</a></span></li>
<li><span class="nowrap"><a href="/wiki/1989_NBA_draft" title="1989 NBA draft">1989</a>: <a href="/wiki/Pervis_Ellison" title="Pervis Ellison">Ellison</a></span></li>
<li><span class="nowrap"><a href="/wiki/1990_NBA_draft" title="1990 NBA draft">1990</a>: <a href="/wiki/Derrick_Coleman" title="Derrick Coleman">Coleman</a></span></li>
<li><span class="nowrap"><a href="/wiki/1991_NBA_draft" title="1991 NBA draft">1991</a>: <a href="/wiki/Larry_Johnson_(basketball,_born_1969)" title="Larry Johnson (basketball, born 1969)">L. Johnson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1992_NBA_draft" title="1992 NBA draft">1992</a>: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap"><a href="/wiki/1993_NBA_draft" title="1993 NBA draft">1993</a>: <a href="/wiki/Chris_Webber" title="Chris Webber">Webber</a></span></li>
<li><span class="nowrap"><a href="/wiki/1994_NBA_draft" title="1994 NBA draft">1994</a>: <a href="/wiki/Glenn_Robinson" title="Glenn Robinson">G. Robinson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1995_NBA_draft" title="1995 NBA draft">1995</a>: <a href="/wiki/Joe_Smith_(basketball)" title="Joe Smith (basketball)">Smith</a></span></li>
<li><span class="nowrap"><a href="/wiki/1996_NBA_draft" title="1996 NBA draft">1996</a>: <a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></span></li>
<li><span class="nowrap"><a href="/wiki/1997_NBA_draft" title="1997 NBA draft">1997</a>: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap"><a href="/wiki/1998_NBA_draft" title="1998 NBA draft">1998</a>: <a href="/wiki/Michael_Olowokandi" title="Michael Olowokandi">Olowokandi</a></span></li>
<li><span class="nowrap"><a href="/wiki/1999_NBA_draft" title="1999 NBA draft">1999</a>: <a href="/wiki/Elton_Brand" title="Elton Brand">Brand</a></span></li>
<li><span class="nowrap"><a href="/wiki/2000_NBA_draft" title="2000 NBA draft">2000</a>: <a href="/wiki/Kenyon_Martin" title="Kenyon Martin">K. Martin</a></span></li>
<li><span class="nowrap"><a href="/wiki/2001_NBA_draft" title="2001 NBA draft">2001</a>: <a href="/wiki/Kwame_Brown" title="Kwame Brown">Brown</a></span></li>
<li><span class="nowrap"><a href="/wiki/2002_NBA_draft" title="2002 NBA draft">2002</a>: <a href="/wiki/Yao_Ming" title="Yao Ming">Yao</a></span></li>
<li><span class="nowrap"><a href="/wiki/2003_NBA_draft" title="2003 NBA draft">2003</a>: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap"><a href="/wiki/2004_NBA_draft" title="2004 NBA draft">2004</a>: <a href="/wiki/Dwight_Howard" title="Dwight Howard">Howard</a></span></li>
<li><span class="nowrap"><a href="/wiki/2005_NBA_draft" title="2005 NBA draft">2005</a>: <a href="/wiki/Andrew_Bogut" title="Andrew Bogut">Bogut</a></span></li>
<li><span class="nowrap"><a href="/wiki/2006_NBA_draft" title="2006 NBA draft">2006</a>: <a href="/wiki/Andrea_Bargnani" title="Andrea Bargnani">Bargnani</a></span></li>
<li><span class="nowrap"><a href="/wiki/2007_NBA_draft" title="2007 NBA draft">2007</a>: <a href="/wiki/Greg_Oden" title="Greg Oden">Oden</a></span></li>
<li><span class="nowrap"><a href="/wiki/2008_NBA_draft" title="2008 NBA draft">2008</a>: <a href="/wiki/Derrick_Rose" title="Derrick Rose">Rose</a></span></li>
<li><span class="nowrap"><a href="/wiki/2009_NBA_draft" title="2009 NBA draft">2009</a>: <a href="/wiki/Blake_Griffin" title="Blake Griffin">Griffin</a></span></li>
<li><span class="nowrap"><a href="/wiki/2010_NBA_draft" title="2010 NBA draft">2010</a>: <a href="/wiki/John_Wall_(basketball)" title="John Wall (basketball)">Wall</a></span></li>
<li><span class="nowrap"><a href="/wiki/2011_NBA_draft" title="2011 NBA draft">2011</a>: <a href="/wiki/Kyrie_Irving" title="Kyrie Irving">Irving</a></span></li>
<li><span class="nowrap"><a href="/wiki/2012_NBA_draft" title="2012 NBA draft">2012</a>: <a href="/wiki/Anthony_Davis_(basketball)" title="Anthony Davis (basketball)">Davis</a></span></li>
<li><span class="nowrap"><a href="/wiki/2013_NBA_draft" title="2013 NBA draft">2013</a>: <a href="/wiki/Anthony_Bennett_(basketball)" title="Anthony Bennett (basketball)">Bennett</a></span></li>
<li><span class="nowrap"><a href="/wiki/2014_NBA_draft" title="2014 NBA draft">2014</a>: <a href="/wiki/Andrew_Wiggins" title="Andrew Wiggins">Wiggins</a></span></li>
<li><span class="nowrap"><a href="/wiki/2015_NBA_draft" title="2015 NBA draft">2015</a>: <a href="/wiki/Karl-Anthony_Towns" title="Karl-Anthony Towns">Towns</a></span></li>
<li><span class="nowrap"><a href="/wiki/2016_NBA_draft" title="2016 NBA draft">2016</a>: <a href="/wiki/Ben_Simmons" title="Ben Simmons">Simmons</a></span></li>
<li><span class="nowrap"><a href="/wiki/2017_NBA_draft" title="2017 NBA draft">2017</a>: <a href="/wiki/Markelle_Fultz" title="Markelle Fultz">Fultz</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Los_Angeles_Lakers_1999–2000_NBA_champions" style="padding:3px">
<table class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Los_Angeles_Lakers_1999%E2%80%932000_NBA_champions" title="Template:Los Angeles Lakers 1999–2000 NBA champions"><abbr title="View this template" style=";background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Los_Angeles_Lakers_1999%E2%80%932000_NBA_champions" title="Template talk:Los Angeles Lakers 1999–2000 NBA champions"><abbr title="Discuss this template" style=";background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Los_Angeles_Lakers_1999%E2%80%932000_NBA_champions&amp;action=edit"><abbr title="Edit this template" style=";background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Los_Angeles_Lakers_1999–2000_NBA_champions" style="font-size:114%;margin:0 4em"><a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers"><span style="color:#FFFFFF">Los Angeles Lakers</span></a> <a href="/wiki/2000_NBA_Finals" title="2000 NBA Finals"><span style="color:#FFFFFF">1999–2000 NBA champions</span></a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">2 <a href="/wiki/Derek_Fisher" title="Derek Fisher">Fisher</a></span></li>
<li><span class="nowrap">3 <a href="/wiki/Devean_George" title="Devean George">George</a></span></li>
<li><span class="nowrap">4 <a href="/wiki/Ron_Harper" title="Ron Harper">Harper</a></span></li>
<li><span class="nowrap">5 <a href="/wiki/Robert_Horry" title="Robert Horry">Horry</a></span></li>
<li><span class="nowrap">8 <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">10 <a href="/wiki/Tyronn_Lue" title="Tyronn Lue">Lue</a></span></li>
<li><span class="nowrap">11 <a href="/wiki/John_Celestand" title="John Celestand">Celestand</a></span></li>
<li><span class="nowrap">16 <a href="/wiki/John_Salley" title="John Salley">Salley</a></span></li>
<li><span class="nowrap">17 <a href="/wiki/Rick_Fox" title="Rick Fox">Fox</a></span></li>
<li><span class="nowrap">20 <a href="/wiki/Brian_Shaw" title="Brian Shaw">Shaw</a></span></li>
<li><span class="nowrap">34 <a class="mw-selflink selflink">O'Neal</a> (<a href="/wiki/Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award">Finals MVP</a>)</span></li>
<li><span class="nowrap">40 <a href="/wiki/Travis_Knight_(basketball)" title="Travis Knight (basketball)">Knight</a></span></li>
<li><span class="nowrap">41 <a href="/wiki/Glen_Rice" title="Glen Rice">Rice</a></span></li>
<li><span class="nowrap">45 <a href="/wiki/A._C._Green" title="A. C. Green">Green</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-even" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">Head coach <a href="/wiki/Phil_Jackson" title="Phil Jackson">Jackson</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">Assistant coaches <a href="/wiki/Tex_Winter" title="Tex Winter">Winter</a></span></li>
<li><span class="nowrap"><a href="/wiki/Frank_Hamblen" title="Frank Hamblen">Hamblen</a></span></li>
<li><span class="nowrap"><a href="/wiki/Jim_Cleamons" title="Jim Cleamons">Cleamons</a></span></li>
<li><span class="nowrap"><a href="/wiki/Bill_Bertka" title="Bill Bertka">Bertka</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td class="navbox-abovebelow" colspan="2" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;">
<div>
<ul>
<li><span class="nowrap"><a href="/wiki/1999%E2%80%932000_Los_Angeles_Lakers_season" title="1999–2000 Los Angeles Lakers season"><span style="color:#000000">Regular season</span></a></span></li>
<li><span class="nowrap"><a href="/wiki/2000_NBA_Playoffs" title="2000 NBA Playoffs"><span style="color:#000000">Playoffs</span></a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Los_Angeles_Lakers_2000–01_NBA_champions" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Los_Angeles_Lakers_2000%E2%80%9301_NBA_champions" title="Template:Los Angeles Lakers 2000–01 NBA champions"><abbr title="View this template" style=";background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Los_Angeles_Lakers_2000%E2%80%9301_NBA_champions" title="Template talk:Los Angeles Lakers 2000–01 NBA champions"><abbr title="Discuss this template" style=";background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Los_Angeles_Lakers_2000%E2%80%9301_NBA_champions&amp;action=edit"><abbr title="Edit this template" style=";background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Los_Angeles_Lakers_2000–01_NBA_champions" style="font-size:114%;margin:0 4em"><a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers"><span style="color:#FFFFFF">Los Angeles Lakers</span></a> <a href="/wiki/2001_NBA_Finals" title="2001 NBA Finals"><span style="color:#FFFFFF">2000–01 NBA champions</span></a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">2 <a href="/wiki/Derek_Fisher" title="Derek Fisher">Fisher</a></span></li>
<li><span class="nowrap">3 <a href="/wiki/Devean_George" title="Devean George">George</a></span></li>
<li><span class="nowrap">4 <a href="/wiki/Ron_Harper" title="Ron Harper">Harper</a></span></li>
<li><span class="nowrap">5 <a href="/wiki/Robert_Horry" title="Robert Horry">Horry</a></span></li>
<li><span class="nowrap">7 <a href="/wiki/Isaiah_Rider" title="Isaiah Rider">Rider</a></span></li>
<li><span class="nowrap">8 <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">10 <a href="/wiki/Tyronn_Lue" title="Tyronn Lue">Lue</a></span></li>
<li><span class="nowrap">12 <a href="/wiki/Mike_Penberthy" title="Mike Penberthy">Penberthy</a></span></li>
<li><span class="nowrap">14 <a href="/wiki/Slava_Medvedenko" title="Slava Medvedenko">Medvedenko</a></span></li>
<li><span class="nowrap">17 <a href="/wiki/Rick_Fox" title="Rick Fox">Fox</a></span></li>
<li><span class="nowrap">20 <a href="/wiki/Brian_Shaw" title="Brian Shaw">Shaw</a></span></li>
<li><span class="nowrap">34 <a class="mw-selflink selflink">O'Neal</a> (<a href="/wiki/Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award">Finals MVP</a>)</span></li>
<li><span class="nowrap">35 <a href="/wiki/Mark_Madsen" title="Mark Madsen">Madsen</a></span></li>
<li><span class="nowrap">40 <a href="/wiki/Greg_Foster_(basketball)" title="Greg Foster (basketball)">Foster</a></span></li>
<li><span class="nowrap">54 <a href="/wiki/Horace_Grant" title="Horace Grant">Grant</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-even hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">Head coach <a href="/wiki/Phil_Jackson" title="Phil Jackson">Jackson</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">Assistant coaches <a href="/wiki/Tex_Winter" title="Tex Winter">Winter</a></span></li>
<li><span class="nowrap"><a href="/wiki/Frank_Hamblen" title="Frank Hamblen">Hamblen</a></span></li>
<li><span class="nowrap"><a href="/wiki/Jim_Cleamons" title="Jim Cleamons">Cleamons</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td class="navbox-abovebelow hlist" colspan="2" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;">
<div>
<ul>
<li><span class="nowrap"><a href="/wiki/2000%E2%80%9301_Los_Angeles_Lakers_season" title="2000–01 Los Angeles Lakers season"><span style="color:#000000">Regular season</span></a></span></li>
<li><span class="nowrap"><a href="/wiki/2001_NBA_Playoffs" title="2001 NBA Playoffs"><span style="color:#000000">Playoffs</span></a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Los_Angeles_Lakers_2001–02_NBA_champions" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Los_Angeles_Lakers_2001%E2%80%9302_NBA_champions" title="Template:Los Angeles Lakers 2001–02 NBA champions"><abbr title="View this template" style=";background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Los_Angeles_Lakers_2001%E2%80%9302_NBA_champions" title="Template talk:Los Angeles Lakers 2001–02 NBA champions"><abbr title="Discuss this template" style=";background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Los_Angeles_Lakers_2001%E2%80%9302_NBA_champions&amp;action=edit"><abbr title="Edit this template" style=";background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Los_Angeles_Lakers_2001–02_NBA_champions" style="font-size:114%;margin:0 4em"><a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers"><span style="color:#FFFFFF">Los Angeles Lakers</span></a> <a href="/wiki/2002_NBA_Finals" title="2002 NBA Finals"><span style="color:#FFFFFF">2001–02 NBA champions</span></a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">2 <a href="/wiki/Derek_Fisher" title="Derek Fisher">Fisher</a></span></li>
<li><span class="nowrap">3 <a href="/wiki/Devean_George" title="Devean George">George</a></span></li>
<li><span class="nowrap">5 <a href="/wiki/Robert_Horry" title="Robert Horry">Horry</a></span></li>
<li><span class="nowrap">6 <a href="/wiki/Jelani_McCoy" title="Jelani McCoy">McCoy</a></span></li>
<li><span class="nowrap">8 <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">10 <a href="/wiki/Lindsey_Hunter" title="Lindsey Hunter">Hunter</a></span></li>
<li><span class="nowrap">14 <a href="/wiki/Slava_Medvedenko" title="Slava Medvedenko">Medvedenko</a></span></li>
<li><span class="nowrap">17 <a href="/wiki/Rick_Fox" title="Rick Fox">Fox</a></span></li>
<li><span class="nowrap">20 <a href="/wiki/Brian_Shaw" title="Brian Shaw">Shaw</a></span></li>
<li><span class="nowrap">23 <a href="/wiki/Mitch_Richmond" title="Mitch Richmond">Richmond</a></span></li>
<li><span class="nowrap">34 <a class="mw-selflink selflink">O'Neal</a> (<a href="/wiki/Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award">Finals MVP</a>)</span></li>
<li><span class="nowrap">35 <a href="/wiki/Mark_Madsen" title="Mark Madsen">Madsen</a></span></li>
<li><span class="nowrap">52 <a href="/wiki/Samaki_Walker" title="Samaki Walker">Walker</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-even hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">Head coach <a href="/wiki/Phil_Jackson" title="Phil Jackson">Jackson</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">Assistant coaches <a href="/wiki/Tex_Winter" title="Tex Winter">Winter</a></span></li>
<li><span class="nowrap"><a href="/wiki/Frank_Hamblen" title="Frank Hamblen">Hamblen</a></span></li>
<li><span class="nowrap"><a href="/wiki/Jim_Cleamons" title="Jim Cleamons">Cleamons</a></span></li>
<li><span class="nowrap"><a href="/wiki/Kurt_Rambis" title="Kurt Rambis">Rambis</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td class="navbox-abovebelow hlist" colspan="2" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;">
<div>
<ul>
<li><span class="nowrap"><a href="/wiki/2001%E2%80%9302_Los_Angeles_Lakers_season" title="2001–02 Los Angeles Lakers season"><span style="color:#000000">Regular season</span></a></span></li>
<li><span class="nowrap"><a href="/wiki/2002_NBA_Playoffs" title="2002 NBA Playoffs"><span style="color:#000000">Playoffs</span></a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Miami_Heat_2005–06_NBA_champions" style="padding:3px">
<table class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; -webkit-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Miami_Heat_2005%E2%80%9306_NBA_champions" title="Template:Miami Heat 2005–06 NBA champions"><abbr title="View this template" style=";background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; -webkit-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Miami_Heat_2005%E2%80%9306_NBA_champions" title="Template talk:Miami Heat 2005–06 NBA champions"><abbr title="Discuss this template" style=";background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; -webkit-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Miami_Heat_2005%E2%80%9306_NBA_champions&amp;action=edit"><abbr title="Edit this template" style=";background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; -webkit-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Miami_Heat_2005–06_NBA_champions" style="font-size:114%;margin:0 4em"><a href="/wiki/Miami_Heat" title="Miami Heat"><span style="color:#FFFFFF;">Miami Heat</span></a> <a href="/wiki/2006_NBA_Finals" title="2006 NBA Finals"><span style="color:#FFFFFF;">2005–06 NBA champions</span></a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">3 <a href="/wiki/Dwyane_Wade" title="Dwyane Wade">Wade</a> (<a href="/wiki/Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award">Finals MVP</a>)</span></li>
<li><span class="nowrap">5 <a href="/wiki/Derek_Anderson_(basketball)" title="Derek Anderson (basketball)">D. Anderson</a></span></li>
<li><span class="nowrap">8 <a href="/wiki/Antoine_Walker" title="Antoine Walker">Walker</a></span></li>
<li><span class="nowrap">20 <a href="/wiki/Gary_Payton" title="Gary Payton">Payton</a></span></li>
<li><span class="nowrap">24 <a href="/wiki/Jason_Kapono" title="Jason Kapono">Kapono</a></span></li>
<li><span class="nowrap">25 <a href="/wiki/Wayne_Simien" title="Wayne Simien">Simien</a></span></li>
<li><span class="nowrap">32 <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">33 <a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">Mourning</a></span></li>
<li><span class="nowrap">40 <a href="/wiki/Udonis_Haslem" title="Udonis Haslem">Haslem</a></span></li>
<li><span class="nowrap">42 <a href="/wiki/James_Posey" title="James Posey">Posey</a></span></li>
<li><span class="nowrap">49 <a href="/wiki/Shandon_Anderson" title="Shandon Anderson">S. Anderson</a></span></li>
<li><span class="nowrap">51 <a href="/wiki/Michael_Doleac" title="Michael Doleac">Doleac</a></span></li>
<li><span class="nowrap">55 <a href="/wiki/Jason_Williams_(basketball,_born_1975)" title="Jason Williams (basketball, born 1975)">Williams</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-even" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">Head coach <a href="/wiki/Pat_Riley" title="Pat Riley">Riley</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">Assistant coaches <a href="/wiki/Erik_Spoelstra" title="Erik Spoelstra">Spoelstra</a></span></li>
<li><span class="nowrap"><a href="/wiki/Bob_McAdoo" title="Bob McAdoo">McAdoo</a></span></li>
<li><span class="nowrap"><a href="/wiki/Ron_Rothstein" title="Ron Rothstein">Rothstein</a></span></li>
<li><span class="nowrap"><a href="/wiki/Keith_Askins" title="Keith Askins">Askins</a></span></li>
<li><span class="nowrap"><a href="/wiki/Bimbo_Coles" title="Bimbo Coles">Coles</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<td class="navbox-abovebelow" colspan="2" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;">
<div>
<ul>
<li><span class="nowrap"><a href="/wiki/2005%E2%80%9306_Miami_Heat_season" title="2005–06 Miami Heat season"><span style="color:#FFFFFF;">Regular season</span></a></span></li>
<li><span class="nowrap"><a href="/wiki/2006_NBA_Playoffs" title="2006 NBA Playoffs"><span style="color:#FFFFFF;">Playoffs</span></a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="National_Basketball_Association&amp;#039;s_50_Greatest_Players_in_NBA_History" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NBA50" title="Template:NBA50"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NBA50" title="Template talk:NBA50"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NBA50&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="National_Basketball_Association&amp;#039;s_50_Greatest_Players_in_NBA_History" style="font-size:114%;margin:0 4em"><a href="/wiki/50_Greatest_Players_in_NBA_History" title="50 Greatest Players in NBA History">National Basketball Association's 50 Greatest Players in NBA History</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Kareem Abdul-Jabbar</a></li>
<li><a href="/wiki/Nate_Archibald" title="Nate Archibald">Nate Archibald</a></li>
<li><a href="/wiki/Paul_Arizin" title="Paul Arizin">Paul Arizin</a></li>
<li><a href="/wiki/Charles_Barkley" title="Charles Barkley">Charles Barkley</a></li>
<li><a href="/wiki/Rick_Barry" title="Rick Barry">Rick Barry</a></li>
<li><a href="/wiki/Elgin_Baylor" title="Elgin Baylor">Elgin Baylor</a></li>
<li><a href="/wiki/Dave_Bing" title="Dave Bing">Dave Bing</a></li>
<li><a href="/wiki/Larry_Bird" title="Larry Bird">Larry Bird</a></li>
<li><a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Wilt Chamberlain</a></li>
<li><a href="/wiki/Bob_Cousy" title="Bob Cousy">Bob Cousy</a></li>
<li><a href="/wiki/Dave_Cowens" title="Dave Cowens">Dave Cowens</a></li>
<li><a href="/wiki/Billy_Cunningham" title="Billy Cunningham">Billy Cunningham</a></li>
<li><a href="/wiki/Dave_DeBusschere" title="Dave DeBusschere">Dave DeBusschere</a></li>
<li><a href="/wiki/Clyde_Drexler" title="Clyde Drexler">Clyde Drexler</a></li>
<li><a href="/wiki/Julius_Erving" title="Julius Erving">Julius Erving</a></li>
<li><a href="/wiki/Patrick_Ewing" title="Patrick Ewing">Patrick Ewing</a></li>
<li><a href="/wiki/Walt_Frazier" title="Walt Frazier">Walt Frazier</a></li>
<li><a href="/wiki/George_Gervin" title="George Gervin">George Gervin</a></li>
<li><a href="/wiki/Hal_Greer" title="Hal Greer">Hal Greer</a></li>
<li><a href="/wiki/John_Havlicek" title="John Havlicek">John Havlicek</a></li>
<li><a href="/wiki/Elvin_Hayes" title="Elvin Hayes">Elvin Hayes</a></li>
<li><a href="/wiki/Magic_Johnson" title="Magic Johnson">Magic Johnson</a></li>
<li><a href="/wiki/Sam_Jones_(basketball)" title="Sam Jones (basketball)">Sam Jones</a></li>
<li><a href="/wiki/Michael_Jordan" title="Michael Jordan">Michael Jordan</a></li>
<li><a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Jerry Lucas</a></li>
<li><a href="/wiki/Karl_Malone" title="Karl Malone">Karl Malone</a></li>
<li><a href="/wiki/Moses_Malone" title="Moses Malone">Moses Malone</a></li>
<li><a href="/wiki/Pete_Maravich" title="Pete Maravich">Pete Maravich</a></li>
<li><a href="/wiki/Kevin_McHale_(basketball)" title="Kevin McHale (basketball)">Kevin McHale</a></li>
<li><a href="/wiki/George_Mikan" title="George Mikan">George Mikan</a></li>
<li><a href="/wiki/Earl_Monroe" title="Earl Monroe">Earl Monroe</a></li>
<li><a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Hakeem Olajuwon</a></li>
<li><a class="mw-selflink selflink">Shaquille O'Neal</a></li>
<li><a href="/wiki/Robert_Parish" title="Robert Parish">Robert Parish</a></li>
<li><a href="/wiki/Bob_Pettit" title="Bob Pettit">Bob Pettit</a></li>
<li><a href="/wiki/Scottie_Pippen" title="Scottie Pippen">Scottie Pippen</a></li>
<li><a href="/wiki/Willis_Reed" title="Willis Reed">Willis Reed</a></li>
<li><a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Oscar Robertson</a></li>
<li><a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">David Robinson</a></li>
<li><a href="/wiki/Bill_Russell" title="Bill Russell">Bill Russell</a></li>
<li><a href="/wiki/Dolph_Schayes" title="Dolph Schayes">Dolph Schayes</a></li>
<li><a href="/wiki/Bill_Sharman" title="Bill Sharman">Bill Sharman</a></li>
<li><a href="/wiki/John_Stockton" title="John Stockton">John Stockton</a></li>
<li><a href="/wiki/Isiah_Thomas" title="Isiah Thomas">Isiah Thomas</a></li>
<li><a href="/wiki/Nate_Thurmond" title="Nate Thurmond">Nate Thurmond</a></li>
<li><a href="/wiki/Wes_Unseld" title="Wes Unseld">Wes Unseld</a></li>
<li><a href="/wiki/Bill_Walton" title="Bill Walton">Bill Walton</a></li>
<li><a href="/wiki/Jerry_West" title="Jerry West">Jerry West</a></li>
<li><a href="/wiki/Lenny_Wilkens" title="Lenny Wilkens">Lenny Wilkens</a></li>
<li><a href="/wiki/James_Worthy" title="James Worthy">James Worthy</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NBA_Finals_MVPs" title="Template:NBA Finals MVPs"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NBA_Finals_MVPs" title="Template talk:NBA Finals MVPs"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NBA_Finals_MVPs&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" style="font-size:114%;margin:0 4em"><a href="/wiki/Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award">Bill Russell NBA Finals Most Valuable Player Award</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1969: <a href="/wiki/Jerry_West" title="Jerry West">West</a></span></li>
<li><span class="nowrap">1970: <a href="/wiki/Willis_Reed" title="Willis Reed">Reed</a></span></li>
<li><span class="nowrap">1971: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Alcindor</a></span></li>
<li><span class="nowrap">1972: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Willis_Reed" title="Willis Reed">Reed</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/John_Havlicek" title="John Havlicek">Havlicek</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/Rick_Barry" title="Rick Barry">Barry</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Jo_Jo_White" title="Jo Jo White">White</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Wes_Unseld" title="Wes Unseld">Unseld</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/Dennis_Johnson" title="Dennis Johnson">D. Johnson</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Magic_Johnson" title="Magic Johnson">E. Johnson</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Cedric_Maxwell" title="Cedric Maxwell">Maxwell</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Magic_Johnson" title="Magic Johnson">E. Johnson</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Moses_Malone" title="Moses Malone">Malone</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Abdul-Jabbar</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Magic_Johnson" title="Magic Johnson">E. Johnson</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/James_Worthy" title="James Worthy">Worthy</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Joe_Dumars" title="Joe Dumars">Dumars</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Isiah_Thomas" title="Isiah Thomas">Thomas</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Olajuwon</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Olajuwon</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">2000: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">2001: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">2002: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Chauncey_Billups" title="Chauncey Billups">Billups</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Dwyane_Wade" title="Dwyane Wade">Wade</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Tony_Parker" title="Tony Parker">Parker</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Paul_Pierce" title="Paul Pierce">Pierce</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Dirk_Nowitzki" title="Dirk Nowitzki">Nowitzki</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Kawhi_Leonard" title="Kawhi Leonard">Leonard</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Andre_Iguodala" title="Andre Iguodala">Iguodala</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2018: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="NBA_Most_Valuable_Player_Award" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NBA_MVPs" title="Template:NBA MVPs"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NBA_MVPs" title="Template talk:NBA MVPs"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NBA_MVPs&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="NBA_Most_Valuable_Player_Award" style="font-size:114%;margin:0 4em"><a href="/wiki/NBA_Most_Valuable_Player_Award" title="NBA Most Valuable Player Award">NBA Most Valuable Player Award</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1956: <a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></span></li>
<li><span class="nowrap">1957: <a href="/wiki/Bob_Cousy" title="Bob Cousy">Cousy</a></span></li>
<li><span class="nowrap">1958: <a href="/wiki/Bill_Russell" title="Bill Russell">Russell</a></span></li>
<li><span class="nowrap">1959: <a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></span></li>
<li><span class="nowrap">1960: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1961: <a href="/wiki/Bill_Russell" title="Bill Russell">Russell</a></span></li>
<li><span class="nowrap">1962: <a href="/wiki/Bill_Russell" title="Bill Russell">Russell</a></span></li>
<li><span class="nowrap">1963: <a href="/wiki/Bill_Russell" title="Bill Russell">Russell</a></span></li>
<li><span class="nowrap">1964: <a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></span></li>
<li><span class="nowrap">1965: <a href="/wiki/Bill_Russell" title="Bill Russell">Russell</a></span></li>
<li><span class="nowrap">1966: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1967: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1968: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1969: <a href="/wiki/Wes_Unseld" title="Wes Unseld">Unseld</a></span></li>
<li><span class="nowrap">1970: <a href="/wiki/Willis_Reed" title="Willis Reed">Reed</a></span></li>
<li><span class="nowrap">1971: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Alcindor</a></span></li>
<li><span class="nowrap">1972: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Abdul-Jabbar</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Dave_Cowens" title="Dave Cowens">Cowens</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Abdul-Jabbar</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/Bob_McAdoo" title="Bob McAdoo">McAdoo</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Abdul-Jabbar</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Abdul-Jabbar</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/Moses_Malone" title="Moses Malone">M. Malone</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Abdul-Jabbar</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Julius_Erving" title="Julius Erving">Erving</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Moses_Malone" title="Moses Malone">M. Malone</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Moses_Malone" title="Moses Malone">M. Malone</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Magic_Johnson" title="Magic Johnson">Johnson</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Magic_Johnson" title="Magic Johnson">Johnson</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Magic_Johnson" title="Magic Johnson">Johnson</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Charles_Barkley" title="Charles Barkley">Barkley</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Olajuwon</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Karl_Malone" title="Karl Malone">K. Malone</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Karl_Malone" title="Karl Malone">K. Malone</a></span></li>
<li><span class="nowrap">2000: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Kevin_Garnett" title="Kevin Garnett">Garnett</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Steve_Nash" title="Steve Nash">Nash</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Steve_Nash" title="Steve Nash">Nash</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Dirk_Nowitzki" title="Dirk Nowitzki">Nowitzki</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Derrick_Rose" title="Derrick Rose">Rose</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Stephen_Curry" title="Stephen Curry">Curry</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Stephen_Curry" title="Stephen Curry">Curry</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Russell_Westbrook" title="Russell Westbrook">Westbrook</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="NBA_Rookie_of_the_Year_Award" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NBA_Rookies_of_the_Year" title="Template:NBA Rookies of the Year"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NBA_Rookies_of_the_Year" title="Template talk:NBA Rookies of the Year"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NBA_Rookies_of_the_Year&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="NBA_Rookie_of_the_Year_Award" style="font-size:114%;margin:0 4em"><a href="/wiki/NBA_Rookie_of_the_Year_Award" title="NBA Rookie of the Year Award">NBA Rookie of the Year Award</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1953: <a href="/wiki/Don_Meineke" title="Don Meineke">Meineke</a></span></li>
<li><span class="nowrap">1954: <a href="/wiki/Ray_Felix" title="Ray Felix">Felix</a></span></li>
<li><span class="nowrap">1955: <a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></span></li>
<li><span class="nowrap">1956: <a href="/wiki/Maurice_Stokes" title="Maurice Stokes">Stokes</a></span></li>
<li><span class="nowrap">1957: <a href="/wiki/Tom_Heinsohn" title="Tom Heinsohn">Heinsohn</a></span></li>
<li><span class="nowrap">1958: <a href="/wiki/Woody_Sauldsberry" title="Woody Sauldsberry">Sauldsberry</a></span></li>
<li><span class="nowrap">1959: <a href="/wiki/Elgin_Baylor" title="Elgin Baylor">Baylor</a></span></li>
<li><span class="nowrap">1960: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1961: <a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></span></li>
<li><span class="nowrap">1962: <a href="/wiki/Walt_Bellamy" title="Walt Bellamy">Bellamy</a></span></li>
<li><span class="nowrap">1963: <a href="/wiki/Terry_Dischinger" title="Terry Dischinger">Dischinger</a></span></li>
<li><span class="nowrap">1964: <a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Lucas</a></span></li>
<li><span class="nowrap">1965: <a href="/wiki/Willis_Reed" title="Willis Reed">Reed</a></span></li>
<li><span class="nowrap">1966: <a href="/wiki/Rick_Barry" title="Rick Barry">Barry</a></span></li>
<li><span class="nowrap">1967: <a href="/wiki/Dave_Bing" title="Dave Bing">Bing</a></span></li>
<li><span class="nowrap">1968: <a href="/wiki/Earl_Monroe" title="Earl Monroe">Monroe</a></span></li>
<li><span class="nowrap">1969: <a href="/wiki/Wes_Unseld" title="Wes Unseld">Unseld</a></span></li>
<li><span class="nowrap">1970: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Alcindor</a></span></li>
<li><span class="nowrap">1971: <a href="/wiki/Dave_Cowens" title="Dave Cowens">Cowens</a> &amp; <a href="/wiki/Geoff_Petrie" title="Geoff Petrie">Petrie</a></span></li>
<li><span class="nowrap">1972: <a href="/wiki/Sidney_Wicks" title="Sidney Wicks">Wicks</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Bob_McAdoo" title="Bob McAdoo">McAdoo</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/Ernie_DiGregorio" title="Ernie DiGregorio">DiGregorio</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/Jamaal_Wilkes" title="Jamaal Wilkes">Wilkes</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Alvan_Adams" title="Alvan Adams">Adams</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Adrian_Dantley" title="Adrian Dantley">Dantley</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Walter_Davis_(basketball)" title="Walter Davis (basketball)">Davis</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/Phil_Ford_(basketball)" title="Phil Ford (basketball)">Ford</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Darrell_Griffith" title="Darrell Griffith">Griffith</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Buck_Williams" title="Buck Williams">Williams</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Terry_Cummings" title="Terry Cummings">Cummings</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Patrick_Ewing" title="Patrick Ewing">Ewing</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Chuck_Person" title="Chuck Person">Person</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Mark_Jackson_(basketball)" title="Mark Jackson (basketball)">Jackson</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Mitch_Richmond" title="Mitch Richmond">Richmond</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/Derrick_Coleman" title="Derrick Coleman">Coleman</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Larry_Johnson_(basketball,_born_1969)" title="Larry Johnson (basketball, born 1969)">Johnson</a></span></li>
<li><span class="nowrap">1993: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Chris_Webber" title="Chris Webber">Webber</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Grant_Hill" title="Grant Hill">Hill</a> &amp; <a href="/wiki/Jason_Kidd" title="Jason Kidd">Kidd</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Damon_Stoudamire" title="Damon Stoudamire">Stoudamire</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Vince_Carter" title="Vince Carter">Carter</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Elton_Brand" title="Elton Brand">Brand</a> &amp; <a href="/wiki/Steve_Francis" title="Steve Francis">Francis</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Mike_Miller_(basketball_player)" title="Mike Miller (basketball player)">Miller</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Pau_Gasol" title="Pau Gasol">Gasol</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Amar%27e_Stoudemire" title="Amar'e Stoudemire">Stoudemire</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Emeka_Okafor" title="Emeka Okafor">Okafor</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Chris_Paul" title="Chris Paul">Paul</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Brandon_Roy" title="Brandon Roy">Roy</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Derrick_Rose" title="Derrick Rose">Rose</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Tyreke_Evans" title="Tyreke Evans">Evans</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Blake_Griffin" title="Blake Griffin">Griffin</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Kyrie_Irving" title="Kyrie Irving">Irving</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Damian_Lillard" title="Damian Lillard">Lillard</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Michael_Carter-Williams" title="Michael Carter-Williams">Carter-Williams</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Andrew_Wiggins" title="Andrew Wiggins">Wiggins</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Karl-Anthony_Towns" title="Karl-Anthony Towns">Towns</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Malcolm_Brogdon" title="Malcolm Brogdon">Brogdon</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="IBM_Award" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:IBM_Award" title="Template:IBM Award"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:IBM_Award" title="Template talk:IBM Award"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:IBM_Award&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="IBM_Award" style="font-size:114%;margin:0 4em"><a href="/wiki/IBM_Award" title="IBM Award">IBM Award</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1984: <a href="/wiki/Magic_Johnson" title="Magic Johnson">Johnson</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Charles_Barkley" title="Charles Barkley">Barkley</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Charles_Barkley" title="Charles Barkley">Barkley</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Charles_Barkley" title="Charles Barkley">Barkley</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Dennis_Rodman" title="Dennis Rodman">Rodman</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Olajuwon</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Grant_Hill" title="Grant Hill">Hill</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Karl_Malone" title="Karl Malone">K. Malone</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Dikembe_Mutombo" title="Dikembe Mutombo">Mutombo</a></span></li>
<li><span class="nowrap">2000: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">2001: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="NBA_season_scoring_leaders" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NBA_scoring_leaders" title="Template:NBA scoring leaders"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NBA_scoring_leaders" title="Template talk:NBA scoring leaders"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NBA_scoring_leaders&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="NBA_season_scoring_leaders" style="font-size:114%;margin:0 4em"><a href="/wiki/List_of_National_Basketball_Association_annual_scoring_leaders" title="List of National Basketball Association annual scoring leaders">NBA season scoring leaders</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1947: <a href="/wiki/Joe_Fulks" title="Joe Fulks">Fulks</a></span></li>
<li><span class="nowrap">1948: <a href="/wiki/Max_Zaslofsky" title="Max Zaslofsky">Zaslofsky</a></span></li>
<li><span class="nowrap">1949: <a href="/wiki/George_Mikan" title="George Mikan">Mikan</a></span></li>
<li><span class="nowrap">1950: <a href="/wiki/George_Mikan" title="George Mikan">Mikan</a></span></li>
<li><span class="nowrap">1951: <a href="/wiki/George_Mikan" title="George Mikan">Mikan</a></span></li>
<li><span class="nowrap">1952: <a href="/wiki/Paul_Arizin" title="Paul Arizin">Arizin</a></span></li>
<li><span class="nowrap">1953: <a href="/wiki/Neil_Johnston" title="Neil Johnston">Johnston</a></span></li>
<li><span class="nowrap">1954: <a href="/wiki/Neil_Johnston" title="Neil Johnston">Johnston</a></span></li>
<li><span class="nowrap">1955: <a href="/wiki/Neil_Johnston" title="Neil Johnston">Johnston</a></span></li>
<li><span class="nowrap">1956: <a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></span></li>
<li><span class="nowrap">1957: <a href="/wiki/Paul_Arizin" title="Paul Arizin">Arizin</a></span></li>
<li><span class="nowrap">1958: <a href="/wiki/George_Yardley" title="George Yardley">Yardley</a></span></li>
<li><span class="nowrap">1959: <a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></span></li>
<li><span class="nowrap">1960: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1961: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1962: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1963: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1964: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1965: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1966: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1967: <a href="/wiki/Rick_Barry" title="Rick Barry">Barry</a></span></li>
<li><span class="nowrap">1968: <a href="/wiki/Dave_Bing" title="Dave Bing">Bing</a></span></li>
<li><span class="nowrap">1969: <a href="/wiki/Elvin_Hayes" title="Elvin Hayes">Hayes</a></span></li>
<li><span class="nowrap">1970: <a href="/wiki/Jerry_West" title="Jerry West">West</a></span></li>
<li><span class="nowrap">1971: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Alcindor</a></span></li>
<li><span class="nowrap">1972: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Abdul-Jabbar</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Nate_Archibald" title="Nate Archibald">Archibald</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/Bob_McAdoo" title="Bob McAdoo">McAdoo</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/Bob_McAdoo" title="Bob McAdoo">McAdoo</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Bob_McAdoo" title="Bob McAdoo">McAdoo</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Pete_Maravich" title="Pete Maravich">Maravich</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/George_Gervin" title="George Gervin">Gervin</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/George_Gervin" title="George Gervin">Gervin</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/George_Gervin" title="George Gervin">Gervin</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Adrian_Dantley" title="Adrian Dantley">Dantley</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/George_Gervin" title="George Gervin">Gervin</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Alex_English" title="Alex English">English</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Adrian_Dantley" title="Adrian Dantley">Dantley</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Bernard_King" title="Bernard King">King</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Dominique_Wilkins" title="Dominique Wilkins">Wilkins</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1995: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></span></li>
<li><span class="nowrap">2000: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Tracy_McGrady" title="Tracy McGrady">McGrady</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Tracy_McGrady" title="Tracy McGrady">McGrady</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Dwyane_Wade" title="Dwyane Wade">Wade</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Carmelo_Anthony" title="Carmelo Anthony">Anthony</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Russell_Westbrook" title="Russell Westbrook">Westbrook</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Stephen_Curry" title="Stephen Curry">Curry</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Russell_Westbrook" title="Russell Westbrook">Westbrook</a></span></li>
<li><span class="nowrap">2018: <a href="/wiki/James_Harden" title="James Harden">Harden</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="NBA_All-Star_Game_Most_Valuable_Player_Award" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NBA_All-Star_Game_MVP_Award" title="Template:NBA All-Star Game MVP Award"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NBA_All-Star_Game_MVP_Award" title="Template talk:NBA All-Star Game MVP Award"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NBA_All-Star_Game_MVP_Award&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="NBA_All-Star_Game_Most_Valuable_Player_Award" style="font-size:114%;margin:0 4em"><a href="/wiki/NBA_All-Star_Game_Most_Valuable_Player_Award" title="NBA All-Star Game Most Valuable Player Award">NBA All-Star Game Most Valuable Player Award</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1951: <a href="/wiki/Ed_Macauley" title="Ed Macauley">Macauley</a></span></li>
<li><span class="nowrap">1952: <a href="/wiki/Paul_Arizin" title="Paul Arizin">Arizin</a></span></li>
<li><span class="nowrap">1953: <a href="/wiki/George_Mikan" title="George Mikan">Mikan</a></span></li>
<li><span class="nowrap">1954: <a href="/wiki/Bob_Cousy" title="Bob Cousy">Cousy</a></span></li>
<li><span class="nowrap">1955: <a href="/wiki/Bill_Sharman" title="Bill Sharman">Sharman</a></span></li>
<li><span class="nowrap">1956: <a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></span></li>
<li><span class="nowrap">1957: <a href="/wiki/Bob_Cousy" title="Bob Cousy">Cousy</a></span></li>
<li><span class="nowrap">1958: <a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></span></li>
<li><span class="nowrap">1959: <a href="/wiki/Elgin_Baylor" title="Elgin Baylor">Baylor</a> &amp; <a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></span></li>
<li><span class="nowrap">1960: <a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></span></li>
<li><span class="nowrap">1961: <a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></span></li>
<li><span class="nowrap">1962: <a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></span></li>
<li><span class="nowrap">1963: <a href="/wiki/Bill_Russell" title="Bill Russell">Russell</a></span></li>
<li><span class="nowrap">1964: <a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></span></li>
<li><span class="nowrap">1965: <a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Lucas</a></span></li>
<li><span class="nowrap">1966: <a href="/wiki/Adrian_Smith_(basketball)" title="Adrian Smith (basketball)">A. Smith</a></span></li>
<li><span class="nowrap">1967: <a href="/wiki/Rick_Barry" title="Rick Barry">Barry</a></span></li>
<li><span class="nowrap">1968: <a href="/wiki/Hal_Greer" title="Hal Greer">Greer</a></span></li>
<li><span class="nowrap">1969: <a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></span></li>
<li><span class="nowrap">1970: <a href="/wiki/Willis_Reed" title="Willis Reed">Reed</a></span></li>
<li><span class="nowrap">1971: <a href="/wiki/Lenny_Wilkens" title="Lenny Wilkens">Wilkens</a></span></li>
<li><span class="nowrap">1972: <a href="/wiki/Jerry_West" title="Jerry West">West</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Dave_Cowens" title="Dave Cowens">Cowens</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/Bob_Lanier_(basketball)" title="Bob Lanier (basketball)">Lanier</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/Walt_Frazier" title="Walt Frazier">Frazier</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Dave_Bing" title="Dave Bing">Bing</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Julius_Erving" title="Julius Erving">Erving</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Randy_Smith_(basketball)" title="Randy Smith (basketball)">R. Smith</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/David_Thompson_(basketball)" title="David Thompson (basketball)">Thompson</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/George_Gervin" title="George Gervin">Gervin</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Nate_Archibald" title="Nate Archibald">Archibald</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Julius_Erving" title="Julius Erving">Erving</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Isiah_Thomas" title="Isiah Thomas">Thomas</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Isiah_Thomas" title="Isiah Thomas">Thomas</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Tom_Chambers_(basketball)" title="Tom Chambers (basketball)">Chambers</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Karl_Malone" title="Karl Malone">Malone</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Magic_Johnson" title="Magic Johnson">Johnson</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/Charles_Barkley" title="Charles Barkley">Barkley</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Magic_Johnson" title="Magic Johnson">Johnson</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/John_Stockton" title="John Stockton">Stockton</a> &amp; <a href="/wiki/Karl_Malone" title="Karl Malone">Malone</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Scottie_Pippen" title="Scottie Pippen">Pippen</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Mitch_Richmond" title="Mitch Richmond">Richmond</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Glen_Rice" title="Glen Rice">Rice</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1999: <i><a href="/wiki/1998%E2%80%9399_NBA_lockout" title="1998–99 NBA lockout">No game played</a></i></span></li>
<li><span class="nowrap">2000: <a class="mw-selflink selflink">O'Neal</a> &amp; <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Kevin_Garnett" title="Kevin Garnett">Garnett</a></span></li>
<li><span class="nowrap">2004: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a> &amp; <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Dwyane_Wade" title="Dwyane Wade">Wade</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Kobe_Bryant" title="Kobe Bryant">Bryant</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Chris_Paul" title="Chris Paul">Paul</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Kyrie_Irving" title="Kyrie Irving">Irving</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Russell_Westbrook" title="Russell Westbrook">Westbrook</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Russell_Westbrook" title="Russell Westbrook">Westbrook</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Anthony_Davis_(basketball)" title="Anthony Davis (basketball)">Davis</a></span></li>
<li><span class="nowrap">2018: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Associated_Press_Men&amp;#039;s_College_Basketball_Player_of_the_Year" style="padding:3px">
<table class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Associated_Press_College_Basketball_Player_of_the_Year" title="Template:Associated Press College Basketball Player of the Year"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Associated_Press_College_Basketball_Player_of_the_Year" title="Template talk:Associated Press College Basketball Player of the Year"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Associated_Press_College_Basketball_Player_of_the_Year&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Associated_Press_Men&amp;#039;s_College_Basketball_Player_of_the_Year" style="font-size:114%;margin:0 4em"><a href="/wiki/Associated_Press_College_Basketball_Player_of_the_Year" title="Associated Press College Basketball Player of the Year">Associated Press Men's College Basketball Player of the Year</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1961: <a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Lucas</a></span></li>
<li><span class="nowrap">1962: <a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Lucas</a></span></li>
<li><span class="nowrap">1963: <a href="/wiki/Art_Heyman" title="Art Heyman">Heyman</a></span></li>
<li><span class="nowrap">1964: <a href="/wiki/Gary_Bradds" title="Gary Bradds">Bradds</a></span></li>
<li><span class="nowrap">1965: <a href="/wiki/Bill_Bradley" title="Bill Bradley">Bradley</a></span></li>
<li><span class="nowrap">1966: <a href="/wiki/Cazzie_Russell" title="Cazzie Russell">Russell</a></span></li>
<li><span class="nowrap">1967: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Alcindor</a></span></li>
<li><span class="nowrap">1968: <a href="/wiki/Elvin_Hayes" title="Elvin Hayes">Hayes</a></span></li>
<li><span class="nowrap">1969: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Alcindor</a></span></li>
<li><span class="nowrap">1970: <a href="/wiki/Pete_Maravich" title="Pete Maravich">Maravich</a></span></li>
<li><span class="nowrap">1971: <a href="/wiki/Austin_Carr" title="Austin Carr">Carr</a></span></li>
<li><span class="nowrap">1972: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/David_Thompson_(basketball)" title="David Thompson (basketball)">Thompson</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/David_Thompson_(basketball)" title="David Thompson (basketball)">Thompson</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Scott_May" title="Scott May">May</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Marques_Johnson" title="Marques Johnson">Johnson</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Butch_Lee" title="Butch Lee">Lee</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Mark_Aguirre" title="Mark Aguirre">Aguirre</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Patrick_Ewing" title="Patrick Ewing">Ewing</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Walter_Berry_(basketball)" title="Walter Berry (basketball)">Berry</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">D. Robinson</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Hersey_Hawkins" title="Hersey Hawkins">Hawkins</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Sean_Elliott" title="Sean Elliott">Elliott</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Lionel_Simmons" title="Lionel Simmons">Simmons</a></span></li>
<li><span class="nowrap">1991: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Christian_Laettner" title="Christian Laettner">Laettner</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Calbert_Cheaney" title="Calbert Cheaney">Cheaney</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Glenn_Robinson" title="Glenn Robinson">G. Robinson</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Joe_Smith_(basketball)" title="Joe Smith (basketball)">Smith</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Marcus_Camby" title="Marcus Camby">Camby</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Antawn_Jamison" title="Antawn Jamison">Jamison</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Elton_Brand" title="Elton Brand">Brand</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Kenyon_Martin" title="Kenyon Martin">Martin</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Shane_Battier" title="Shane Battier">Battier</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Jay_Williams_(basketball)" title="Jay Williams (basketball)">Williams</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/David_West_(basketball)" title="David West (basketball)">West</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Jameer_Nelson" title="Jameer Nelson">Nelson</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Andrew_Bogut" title="Andrew Bogut">Bogut</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/J._J._Redick" title="J. J. Redick">Redick</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Tyler_Hansbrough" title="Tyler Hansbrough">Hansbrough</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Blake_Griffin" title="Blake Griffin">Griffin</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Evan_Turner" title="Evan Turner">Turner</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Jimmer_Fredette" title="Jimmer Fredette">Fredette</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Anthony_Davis_(basketball)" title="Anthony Davis (basketball)">Davis</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Trey_Burke" title="Trey Burke">Burke</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Doug_McDermott" title="Doug McDermott">McDermott</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Frank_Kaminsky" title="Frank Kaminsky">Kaminsky</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Denzel_Valentine" title="Denzel Valentine">Valentine</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Frank_Mason_III" title="Frank Mason III">Mason III</a></span></li>
<li><span class="nowrap">2018: <a href="/wiki/Jalen_Brunson" title="Jalen Brunson">Brunson</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Adolph_Rupp_Trophy_winners" style="padding:3px">
<table class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Adolph_Rupp_Trophy" title="Template:Adolph Rupp Trophy"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Adolph_Rupp_Trophy" title="Template talk:Adolph Rupp Trophy"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Adolph_Rupp_Trophy&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Adolph_Rupp_Trophy_winners" style="font-size:114%;margin:0 4em"><a href="/wiki/Adolph_Rupp_Trophy" title="Adolph Rupp Trophy">Adolph Rupp Trophy</a> winners</div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1972: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/David_Thompson_(basketball)" title="David Thompson (basketball)">Thompson</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Scott_May" title="Scott May">May</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Marques_Johnson" title="Marques Johnson">Johnson</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Butch_Lee" title="Butch Lee">Lee</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Mark_Aguirre" title="Mark Aguirre">Aguirre</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Patrick_Ewing" title="Patrick Ewing">Ewing</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Walter_Berry_(basketball)" title="Walter Berry (basketball)">Berry</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">D. Robinson</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Hersey_Hawkins" title="Hersey Hawkins">Hawkins</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Sean_Elliott" title="Sean Elliott">Elliott</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Lionel_Simmons" title="Lionel Simmons">Simmons</a></span></li>
<li><span class="nowrap">1991: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Christian_Laettner" title="Christian Laettner">Laettner</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Calbert_Cheaney" title="Calbert Cheaney">Cheaney</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Glenn_Robinson" title="Glenn Robinson">G. Robinson</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Joe_Smith_(basketball)" title="Joe Smith (basketball)">Smith</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Marcus_Camby" title="Marcus Camby">Camby</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Antawn_Jamison" title="Antawn Jamison">Jamison</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Elton_Brand" title="Elton Brand">Brand</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Kenyon_Martin" title="Kenyon Martin">Martin</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Shane_Battier" title="Shane Battier">Battier</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Jay_Williams_(basketball)" title="Jay Williams (basketball)">Williams</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/David_West_(basketball)" title="David West (basketball)">West</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Jameer_Nelson" title="Jameer Nelson">Nelson</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/J._J._Redick" title="J. J. Redick">Redick</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/J._J._Redick" title="J. J. Redick">Redick</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Tyler_Hansbrough" title="Tyler Hansbrough">Hansbrough</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Blake_Griffin" title="Blake Griffin">Griffin</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/John_Wall_(basketball)" title="John Wall (basketball)">Wall</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Jimmer_Fredette" title="Jimmer Fredette">Fredette</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Anthony_Davis_(basketball)" title="Anthony Davis (basketball)">Davis</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Victor_Oladipo" title="Victor Oladipo">Oladipo</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Doug_McDermott" title="Doug McDermott">McDermott</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Frank_Kaminsky" title="Frank Kaminsky">Kaminsky</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="UPI_College_Basketball_Player_of_the_Year_Award_winners" style="padding:3px">
<table class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:UPI_College_Basketball_Player_of_the_Year" title="Template:UPI College Basketball Player of the Year"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:UPI_College_Basketball_Player_of_the_Year" title="Template talk:UPI College Basketball Player of the Year"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:UPI_College_Basketball_Player_of_the_Year&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="UPI_College_Basketball_Player_of_the_Year_Award_winners" style="font-size:114%;margin:0 4em"><a href="/wiki/UPI_College_Basketball_Player_of_the_Year" title="UPI College Basketball Player of the Year">UPI College Basketball Player of the Year Award</a> winners</div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1955: <a href="/wiki/Tom_Gola" title="Tom Gola">Gola</a></span></li>
<li><span class="nowrap">1956: <a href="/wiki/Bill_Russell" title="Bill Russell">B. Russell</a></span></li>
<li><span class="nowrap">1957: <a href="/wiki/Chet_Forte" title="Chet Forte">Forte</a></span></li>
<li><span class="nowrap">1958: <a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></span></li>
<li><span class="nowrap">1959: <a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></span></li>
<li><span class="nowrap">1960: <a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></span></li>
<li><span class="nowrap">1961: <a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Lucas</a></span></li>
<li><span class="nowrap">1962: <a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Lucas</a></span></li>
<li><span class="nowrap">1963: <a href="/wiki/Art_Heyman" title="Art Heyman">Heyman</a></span></li>
<li><span class="nowrap">1964: <a href="/wiki/Gary_Bradds" title="Gary Bradds">Bradds</a></span></li>
<li><span class="nowrap">1965: <a href="/wiki/Bill_Bradley" title="Bill Bradley">Bradley</a></span></li>
<li><span class="nowrap">1966: <a href="/wiki/Cazzie_Russell" title="Cazzie Russell">C. Russell</a></span></li>
<li><span class="nowrap">1967: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Alcindor</a></span></li>
<li><span class="nowrap">1968: <a href="/wiki/Elvin_Hayes" title="Elvin Hayes">Hayes</a></span></li>
<li><span class="nowrap">1969: <a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Alcindor</a></span></li>
<li><span class="nowrap">1970: <a href="/wiki/Pete_Maravich" title="Pete Maravich">Maravich</a></span></li>
<li><span class="nowrap">1971: <a href="/wiki/Austin_Carr" title="Austin Carr">Carr</a></span></li>
<li><span class="nowrap">1972: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/David_Thompson_(basketball)" title="David Thompson (basketball)">Thompson</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Scott_May" title="Scott May">May</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Marques_Johnson" title="Marques Johnson">Johnson</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Butch_Lee" title="Butch Lee">Lee</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Mark_Aguirre" title="Mark Aguirre">Aguirre</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Chris_Mullin_(basketball)" title="Chris Mullin (basketball)">Mullin</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Walter_Berry_(basketball)" title="Walter Berry (basketball)">Berry</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">D. Robinson</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Hersey_Hawkins" title="Hersey Hawkins">Hawkins</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Danny_Ferry" title="Danny Ferry">Ferry</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Lionel_Simmons" title="Lionel Simmons">Simmons</a></span></li>
<li><span class="nowrap">1991: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Jim_Jackson_(basketball)" title="Jim Jackson (basketball)">Jackson</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Calbert_Cheaney" title="Calbert Cheaney">Cheaney</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Glenn_Robinson" title="Glenn Robinson">G. Robinson</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Joe_Smith_(basketball)" title="Joe Smith (basketball)">Smith</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Ray_Allen" title="Ray Allen">Allen</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="1991_NCAA_Men&amp;#039;s_Basketball_Consensus_All-Americans" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:1991_NCAA_Men%27s_Basketball_Consensus_All-Americans" title="Template:1991 NCAA Men's Basketball Consensus All-Americans"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:1991_NCAA_Men%27s_Basketball_Consensus_All-Americans" title="Template talk:1991 NCAA Men's Basketball Consensus All-Americans"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:1991_NCAA_Men%27s_Basketball_Consensus_All-Americans&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="1991_NCAA_Men&amp;#039;s_Basketball_Consensus_All-Americans" style="font-size:114%;margin:0 4em"><a href="/wiki/1991_NCAA_Men%27s_Basketball_All-Americans" title="1991 NCAA Men's Basketball All-Americans">1991 NCAA Men's Basketball Consensus All-Americans</a></div>
</th>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">First Team</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Kenny_Anderson_(basketball)" title="Kenny Anderson (basketball)">Kenny Anderson</a></li>
<li><a href="/wiki/Jim_Jackson_(basketball)" title="Jim Jackson (basketball)">Jim Jackson</a></li>
<li><a href="/wiki/Larry_Johnson_(basketball,_born_1969)" title="Larry Johnson (basketball, born 1969)">Larry Johnson</a></li>
<li><a class="mw-selflink selflink">Shaquille O'Neal</a></li>
<li><a href="/wiki/Billy_Owens" title="Billy Owens">Billy Owens</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Second Team</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Stacey_Augmon" title="Stacey Augmon">Stacey Augmon</a></li>
<li><a href="/wiki/Keith_Jennings_(basketball)" title="Keith Jennings (basketball)">Keith Jennings</a></li>
<li><a href="/wiki/Christian_Laettner" title="Christian Laettner">Christian Laettner</a></li>
<li><a href="/wiki/Eric_Murdock" title="Eric Murdock">Eric Murdock</a></li>
<li><a href="/wiki/Steve_Smith_(basketball)" title="Steve Smith (basketball)">Steve Smith</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="1992_NCAA_Men&amp;#039;s_Basketball_Consensus_All-Americans" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:1992_NCAA_Men%27s_Basketball_Consensus_All-Americans" title="Template:1992 NCAA Men's Basketball Consensus All-Americans"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:1992_NCAA_Men%27s_Basketball_Consensus_All-Americans" title="Template talk:1992 NCAA Men's Basketball Consensus All-Americans"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:1992_NCAA_Men%27s_Basketball_Consensus_All-Americans&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="1992_NCAA_Men&amp;#039;s_Basketball_Consensus_All-Americans" style="font-size:114%;margin:0 4em"><a href="/wiki/1992_NCAA_Men%27s_Basketball_All-Americans" title="1992 NCAA Men's Basketball All-Americans">1992 NCAA Men's Basketball Consensus All-Americans</a></div>
</th>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">First Team</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Jim_Jackson_(basketball)" title="Jim Jackson (basketball)">Jim Jackson</a></li>
<li><a href="/wiki/Christian_Laettner" title="Christian Laettner">Christian Laettner</a></li>
<li><a href="/wiki/Harold_Miner" title="Harold Miner">Harold Miner</a></li>
<li><a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">Alonzo Mourning</a></li>
<li><a class="mw-selflink selflink">Shaquille O'Neal</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Second Team</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Byron_Houston" title="Byron Houston">Byron Houston</a></li>
<li><a href="/wiki/Don_MacLean_(basketball)" title="Don MacLean (basketball)">Don MacLean</a></li>
<li><a href="/wiki/Anthony_Peeler" title="Anthony Peeler">Anthony Peeler</a></li>
<li><a href="/wiki/Malik_Sealy" title="Malik Sealy">Malik Sealy</a></li>
<li><a href="/wiki/Walt_Williams" title="Walt Williams">Walt Williams</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="NCAA_Division_I_men&amp;#039;s_basketball_season_blocks_leaders" style="padding:3px">
<table class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NCAA_Division_I_men%27s_basketball_blocks_champion" title="Template:NCAA Division I men's basketball blocks champion"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NCAA_Division_I_men%27s_basketball_blocks_champion" title="Template talk:NCAA Division I men's basketball blocks champion"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NCAA_Division_I_men%27s_basketball_blocks_champion&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="NCAA_Division_I_men&amp;#039;s_basketball_season_blocks_leaders" style="font-size:114%;margin:0 4em"><a href="/wiki/List_of_NCAA_Division_I_men%27s_basketball_season_blocks_leaders" title="List of NCAA Division I men's basketball season blocks leaders">NCAA Division I men's basketball season blocks leaders</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1986: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Rodney_Blake_(basketball)" title="Rodney Blake (basketball)">Blake</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">Mourning</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Kenny_Green_(basketball,_born_1967)" title="Kenny Green (basketball, born 1967)">Green</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/Shawn_Bradley" title="Shawn Bradley">Bradley</a></span></li>
<li><span class="nowrap">1992: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Theo_Ratliff" title="Theo Ratliff">Ratliff</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Grady_Livingston" title="Grady Livingston">Livingston</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Keith_Closs" title="Keith Closs">Closs</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Keith_Closs" title="Keith Closs">Closs</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Adonal_Foyle" title="Adonal Foyle">Foyle</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Jerome_James" title="Jerome James">J. James</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Tarvis_Williams" title="Tarvis Williams">Williams</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Ken_Johnson_(basketball,_born_1978)" title="Ken Johnson (basketball, born 1978)">Johnson</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Tarvis_Williams" title="Tarvis Williams">Williams</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Wojciech_Myrda" title="Wojciech Myrda">Myrda</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Emeka_Okafor" title="Emeka Okafor">Okafor</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Anwar_Ferguson" title="Anwar Ferguson">Ferguson</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Deng_Gai" title="Deng Gai">Gai</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Shawn_James" title="Shawn James">S. James</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Mickell_Gladness" title="Mickell Gladness">Gladness</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Jarvis_Varnado" title="Jarvis Varnado">Varnado</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Jarvis_Varnado" title="Jarvis Varnado">Varnado</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Hassan_Whiteside" title="Hassan Whiteside">Whiteside</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/William_Mosley" title="William Mosley">Mosley</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Anthony_Davis_(basketball)" title="Anthony Davis (basketball)">Davis</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Chris_Obekpa" title="Chris Obekpa">Obekpa</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Jordan_Bachynski" title="Jordan Bachynski">Bachynski</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Jordan_Mickey" title="Jordan Mickey">Mickey</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Vashil_Fernandez" title="Vashil Fernandez">Fernandez</a></span></li>
<li><span class="nowrap">2017: <a href="/w/index.php?title=Liam_Thomas&amp;action=edit&amp;redlink=1" class="new" title="Liam Thomas (page does not exist)">Thomas</a></span></li>
<li><span class="nowrap">2018: <a href="/wiki/Ajdin_Penava" title="Ajdin Penava">Penava</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="NCAA_Division_I_men&amp;#039;s_basketball_season_rebounding_leaders" style="padding:3px">
<table class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NCAA_Division_I_men%27s_basketball_rebounding_champion" title="Template:NCAA Division I men's basketball rebounding champion"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NCAA_Division_I_men%27s_basketball_rebounding_champion" title="Template talk:NCAA Division I men's basketball rebounding champion"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NCAA_Division_I_men%27s_basketball_rebounding_champion&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="NCAA_Division_I_men&amp;#039;s_basketball_season_rebounding_leaders" style="font-size:114%;margin:0 4em"><a href="/wiki/List_of_NCAA_Division_I_men%27s_basketball_season_rebounding_leaders" title="List of NCAA Division I men's basketball season rebounding leaders">NCAA Division I men's basketball season rebounding leaders</a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1951: <a href="/wiki/Ernie_Beck" title="Ernie Beck">Beck</a></span></li>
<li><span class="nowrap">1952: <a href="/wiki/Bill_Hannon" title="Bill Hannon">Hannon</a></span></li>
<li><span class="nowrap">1953: <a href="/wiki/Ed_Conlin" title="Ed Conlin">Conlin</a></span></li>
<li><span class="nowrap">1954: <a href="/wiki/Art_Quimby" title="Art Quimby">Quimby</a></span></li>
<li><span class="nowrap">1955: <a href="/wiki/Charlie_Slack" title="Charlie Slack">Slack</a></span></li>
<li><span class="nowrap">1956: <a href="/wiki/Joe_Holup" title="Joe Holup">Holup</a></span></li>
<li><span class="nowrap">1957: <a href="/wiki/Elgin_Baylor" title="Elgin Baylor">Baylor</a></span></li>
<li><span class="nowrap">1958: <a href="/wiki/Boo_Ellis" title="Boo Ellis">Ellis</a></span></li>
<li><span class="nowrap">1959: <a href="/wiki/Leroy_Wright" title="Leroy Wright">Wright</a></span></li>
<li><span class="nowrap">1960: <a href="/wiki/Leroy_Wright" title="Leroy Wright">Wright</a></span></li>
<li><span class="nowrap">1961: <a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Lucas</a></span></li>
<li><span class="nowrap">1962: <a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Lucas</a></span></li>
<li><span class="nowrap">1963: <a href="/wiki/Paul_Silas" title="Paul Silas">Silas</a></span></li>
<li><span class="nowrap">1964: <a href="/wiki/Bob_Pelkington" title="Bob Pelkington">Pelkington</a></span></li>
<li><span class="nowrap">1965: <a href="/wiki/Toby_Kimball" title="Toby Kimball">Kimball</a></span></li>
<li><span class="nowrap">1966: <a href="/wiki/Jim_Ware_(basketball)" title="Jim Ware (basketball)">Ware</a></span></li>
<li><span class="nowrap">1967: <a href="/wiki/Dick_Cunningham" title="Dick Cunningham">Cunningham</a></span></li>
<li><span class="nowrap">1968: <a href="/wiki/Neal_Walk" title="Neal Walk">Walk</a></span></li>
<li><span class="nowrap">1969: <a href="/wiki/Spencer_Haywood" title="Spencer Haywood">Haywood</a></span></li>
<li><span class="nowrap">1970: <a href="/wiki/Artis_Gilmore" title="Artis Gilmore">Gilmore</a></span></li>
<li><span class="nowrap">1971: <a href="/wiki/Artis_Gilmore" title="Artis Gilmore">Gilmore</a></span></li>
<li><span class="nowrap">1972: <a href="/wiki/Kermit_Washington" title="Kermit Washington">Washington</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Kermit_Washington" title="Kermit Washington">Washington</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/Marvin_Barnes" title="Marvin Barnes">Barnes</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/John_Irving_(basketball)" title="John Irving (basketball)">Irving</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Sam_Pellom" title="Sam Pellom">Pellom</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Glenn_Mosley_(basketball)" title="Glenn Mosley (basketball)">Mosley</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Ken_Williams_(basketball)" title="Ken Williams (basketball)">K. Williams</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/Monti_Davis" title="Monti Davis">Davis</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Larry_Smith_(basketball)" title="Larry Smith (basketball)">Smith</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Darryl_Watson" title="Darryl Watson">Watson</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/LaSalle_Thompson" title="LaSalle Thompson">Thompson</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Xavier_McDaniel" title="Xavier McDaniel">McDaniel</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Olajuwon</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Xavier_McDaniel" title="Xavier McDaniel">McDaniel</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Jerome_Lane" title="Jerome Lane">Lane</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Kenny_Miller_(basketball)" title="Kenny Miller (basketball)">Miller</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Hank_Gathers" title="Hank Gathers">Gathers</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Anthony_Bonner" title="Anthony Bonner">Bonner</a></span></li>
<li><span class="nowrap">1991: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Popeye_Jones" title="Popeye Jones">Jones</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Warren_Kidd" title="Warren Kidd">Kidd</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Jerome_Lambert" title="Jerome Lambert">Lambert</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Kurt_Thomas_(basketball)" title="Kurt Thomas (basketball)">Thomas</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Marcus_Mann_(basketball)" title="Marcus Mann (basketball)">Mann</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Tim_Duncan" title="Tim Duncan">Duncan</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Ryan_Perryman" title="Ryan Perryman">Perryman</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Ian_McGinnis" title="Ian McGinnis">McGinnis</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Darren_Phillip" title="Darren Phillip">Phillip</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Chris_Marcus" title="Chris Marcus">Marcus</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Jeremy_Bishop" title="Jeremy Bishop">Bishop</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Brandon_Hunter" title="Brandon Hunter">Hunter</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Paul_Millsap" title="Paul Millsap">Millsap</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Paul_Millsap" title="Paul Millsap">Millsap</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Paul_Millsap" title="Paul Millsap">Millsap</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Rashad_Jones-Jennings" title="Rashad Jones-Jennings">Jones-Jennings</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Michael_Beasley" title="Michael Beasley">Beasley</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Blake_Griffin" title="Blake Griffin">Griffin</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Artsiom_Parakhouski" title="Artsiom Parakhouski">Parakhouski</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Kenneth_Faried" title="Kenneth Faried">Faried</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/O._D._Anosike" title="O. D. Anosike">Anosike</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/O._D._Anosike" title="O. D. Anosike">Anosike</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Alan_Williams_(basketball)" title="Alan Williams (basketball)">A. Williams</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Alan_Williams_(basketball)" title="Alan Williams (basketball)">A. Williams</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Egidijus_Mockevi%C4%8Dius" title="Egidijus Mockevičius">Mockevičius</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/%C3%81ngel_Delgado" title="Ángel Delgado">Delgado</a></span></li>
<li><span class="nowrap">2018: <a href="/wiki/Devontae_Cacok" title="Devontae Cacok">Cacok</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Southeastern_Conference_Men&amp;#039;s_Basketball_Player_of_the_Year" style="padding:3px">
<table class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Southeastern_Conference_Men%27s_Basketball_Player_of_the_Year_navbox" title="Template:Southeastern Conference Men's Basketball Player of the Year navbox"><abbr title="View this template" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Southeastern_Conference_Men%27s_Basketball_Player_of_the_Year_navbox" title="Template talk:Southeastern Conference Men's Basketball Player of the Year navbox"><abbr title="Discuss this template" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Southeastern_Conference_Men%27s_Basketball_Player_of_the_Year_navbox&amp;action=edit"><abbr title="Edit this template" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Southeastern_Conference_Men&amp;#039;s_Basketball_Player_of_the_Year" style="font-size:114%;margin:0 4em"><a href="/wiki/Southeastern_Conference_Men%27s_Basketball_Player_of_the_Year" title="Southeastern Conference Men's Basketball Player of the Year"><span style="color:white;">Southeastern Conference Men's Basketball Player of the Year</span></a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1965: <a href="/wiki/Clyde_Lee" title="Clyde Lee">Lee</a></span></li>
<li><span class="nowrap">1966: <a href="/wiki/Clyde_Lee" title="Clyde Lee">Lee</a> &amp; <a href="/wiki/Pat_Riley" title="Pat Riley">Riley</a></span></li>
<li><span class="nowrap">1967: <a href="/wiki/Ron_Widby" title="Ron Widby">Widby</a></span></li>
<li><span class="nowrap">1968: <a href="/wiki/Pete_Maravich" title="Pete Maravich">Maravich</a></span></li>
<li><span class="nowrap">1969: <a href="/wiki/Pete_Maravich" title="Pete Maravich">Maravich</a></span></li>
<li><span class="nowrap">1970: <a href="/wiki/Pete_Maravich" title="Pete Maravich">Maravich</a></span></li>
<li><span class="nowrap">1971: <a href="/wiki/Johnny_Neumann" title="Johnny Neumann">Neumann</a></span></li>
<li><span class="nowrap">1972: <a href="/wiki/Mike_Edwards_(basketball)" title="Mike Edwards (basketball)">Edwards</a> &amp; <a href="/wiki/Tom_Parker_(basketball)" title="Tom Parker (basketball)">Parker</a></span></li>
<li><span class="nowrap">1973: <a href="/wiki/Kevin_Grevey" title="Kevin Grevey">Grevey</a> &amp; <a href="/wiki/Wendell_Hudson" title="Wendell Hudson">Hudson</a></span></li>
<li><span class="nowrap">1974: <a href="/wiki/Jan_van_Breda_Kolff" title="Jan van Breda Kolff">van Breda Kolff</a></span></li>
<li><span class="nowrap">1975: <a href="/wiki/Kevin_Grevey" title="Kevin Grevey">Grevey</a> &amp; <a href="/wiki/Bernard_King" title="Bernard King">B. King</a></span></li>
<li><span class="nowrap">1976: <a href="/wiki/Bernard_King" title="Bernard King">B. King</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Ernie_Grunfeld" title="Ernie Grunfeld">Grunfeld</a> &amp; <a href="/wiki/Bernard_King" title="Bernard King">B. King</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Reggie_King" title="Reggie King">R. King</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/Reggie_King" title="Reggie King">R. King</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Kyle_Macy" title="Kyle Macy">Macy</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Dominique_Wilkins" title="Dominique Wilkins">Wilkins</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Dale_Ellis" title="Dale Ellis">Ellis</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Dale_Ellis" title="Dale Ellis">Ellis</a> &amp; <a href="/wiki/Jeff_Malone" title="Jeff Malone">Malone</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Charles_Barkley" title="Charles Barkley">Barkley</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Kenny_Walker" title="Kenny Walker">Walker</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Kenny_Walker" title="Kenny Walker">Walker</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Derrick_McKey" title="Derrick McKey">McKey</a> &amp; <a href="/wiki/Tony_White_(basketball)" title="Tony White (basketball)">White</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Will_Perdue" title="Will Perdue">Perdue</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Mahmoud_Abdul-Rauf" title="Mahmoud Abdul-Rauf">Jackson</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Mahmoud_Abdul-Rauf" title="Mahmoud Abdul-Rauf">Jackson</a></span></li>
<li><span class="nowrap">1991: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1992: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Jamal_Mashburn" title="Jamal Mashburn">Mashburn</a> &amp; <a href="/wiki/Billy_McCaffrey" title="Billy McCaffrey">McCaffrey</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Corliss_Williamson" title="Corliss Williamson">Williamson</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Corliss_Williamson" title="Corliss Williamson">Williamson</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Tony_Delk" title="Tony Delk">Delk</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Ron_Mercer" title="Ron Mercer">Mercer</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Ansu_Sesay" title="Ansu Sesay">Sesay</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Chris_Porter_(basketball)" title="Chris Porter (basketball)">Porter</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Dan_Langhi" title="Dan Langhi">Langhi</a> &amp; <a href="/wiki/Stromile_Swift" title="Stromile Swift">Swift</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Tayshaun_Prince" title="Tayshaun Prince">Prince</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Erwin_Dudley" title="Erwin Dudley">Dudley</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Keith_Bogans" title="Keith Bogans">Bogans</a> &amp; <a href="/wiki/Ron_Slay" title="Ron Slay">Slay</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Lawrence_Roberts_(basketball)" title="Lawrence Roberts (basketball)">Roberts</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Brandon_Bass" title="Brandon Bass">Bass</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Glen_Davis_(basketball)" title="Glen Davis (basketball)">G. Davis</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Derrick_Byars" title="Derrick Byars">Byars</a> &amp; <a href="/wiki/Chris_Lofton" title="Chris Lofton">Lofton</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Shan_Foster" title="Shan Foster">Foster</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Marcus_Thornton_(basketball,_born_1987)" title="Marcus Thornton (basketball, born 1987)">Thornton</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/John_Wall_(basketball)" title="John Wall (basketball)">Wall</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Chandler_Parsons" title="Chandler Parsons">Parsons</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Anthony_Davis_(basketball)" title="Anthony Davis (basketball)">A. Davis</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Kentavious_Caldwell-Pope" title="Kentavious Caldwell-Pope">Caldwell-Pope</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Scottie_Wilbekin" title="Scottie Wilbekin">Wilbekin</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Bobby_Portis" title="Bobby Portis">Portis</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Tyler_Ulis" title="Tyler Ulis">Ulis</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Malik_Monk" title="Malik Monk">Monk</a> &amp; <a href="/wiki/Sindarius_Thornwell" title="Sindarius Thornwell">Thornwell</a></span></li>
<li><span class="nowrap">2018: <a href="/wiki/Yante_Maten" title="Yante Maten">Maten</a> &amp; <a href="/wiki/Grant_Williams_(basketball)" title="Grant Williams (basketball)">Williams</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Southeastern_Conference_Athlete_of_the_Year" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Southeastern_Conference_Athlete_of_the_Year_navbox" title="Template:Southeastern Conference Athlete of the Year navbox"><abbr title="View this template" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Southeastern_Conference_Athlete_of_the_Year_navbox" title="Template talk:Southeastern Conference Athlete of the Year navbox"><abbr title="Discuss this template" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Southeastern_Conference_Athlete_of_the_Year_navbox&amp;action=edit"><abbr title="Edit this template" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Southeastern_Conference_Athlete_of_the_Year" style="font-size:114%;margin:0 4em"><a href="/wiki/Southeastern_Conference" title="Southeastern Conference"><span style="color:#FFFFFF">Southeastern Conference Athlete of the Year</span></a></div>
</th>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;;width:1%">Male</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1976: <a href="/wiki/Harvey_Glance" title="Harvey Glance">Glance</a></span></li>
<li><span class="nowrap">1977: <a href="/wiki/Larry_Seivers" title="Larry Seivers">Seivers</a></span></li>
<li><span class="nowrap">1978: <a href="/wiki/Jack_Givens" title="Jack Givens">Givens</a></span></li>
<li><span class="nowrap">1979: <a href="/wiki/Reggie_King" title="Reggie King">King</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Kyle_Macy" title="Kyle Macy">Macy</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Rowdy_Gaines" title="Rowdy Gaines">Gaines</a></span></li>
<li><span class="nowrap">1982: <a href="/wiki/Buck_Belue" title="Buck Belue">Belue</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Herschel_Walker" title="Herschel Walker">Walker</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/Terry_Hoage" title="Terry Hoage">Hoage</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Will_Clark" title="Will Clark">Clark</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Bo_Jackson" title="Bo Jackson">B. Jackson</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Cornelius_Bennett" title="Cornelius Bennett">Bennett</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Will_Perdue" title="Will Perdue">Perdue</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Derrick_Thomas" title="Derrick Thomas">D. Thomas</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Alec_Kessler" title="Alec Kessler">Kessler</a></span></li>
<li><span class="nowrap">1991: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1992: <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Jamal_Mashburn" title="Jamal Mashburn">Mashburn</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Corliss_Williamson" title="Corliss Williamson">Williamson</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Todd_Helton" title="Todd Helton">Helton</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Danny_Wuerffel" title="Danny Wuerffel">Wuerffel</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Danny_Wuerffel" title="Danny Wuerffel">Wuerffel</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Peyton_Manning" title="Peyton Manning">Manning</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Tim_Couch" title="Tim Couch">Couch</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Kip_Bouknight" title="Kip Bouknight">Bouknight</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Mat%C3%ADas_Boeker" title="Matías Boeker">Boeker</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/Walter_Davis_(triple_jumper)" title="Walter Davis (triple jumper)">W. Davis</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/Alistair_Cragg" title="Alistair Cragg">Cragg</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Alistair_Cragg" title="Alistair Cragg">Cragg</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Ryan_Lochte" title="Ryan Lochte">Lochte</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Xavier_Carter" title="Xavier Carter">Carter</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/David_Price_(baseball)" title="David Price (baseball)">Price</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Tim_Tebow" title="Tim Tebow">Tebow</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Tim_Tebow" title="Tim Tebow">Tebow</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Mark_Ingram_Jr." title="Mark Ingram Jr.">Ingram</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/John-Patrick_Smith" title="John-Patrick Smith">Smith</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Anthony_Davis_(basketball)" title="Anthony Davis (basketball)">A. Davis</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Johnny_Manziel" title="Johnny Manziel">Manziel</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/A._J._Reed" title="A. J. Reed">Reed</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Andrew_Benintendi" title="Andrew Benintendi">Benintendi</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Jarrion_Lawson" title="Jarrion Lawson">Lawson</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Brent_Rooker" title="Brent Rooker">Rooker</a></span></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#004B8D;color:white;-moz-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; -webkit-box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046; box-shadow: inset 2px 2px 0 #FFD046, inset -2px -2px 0 #FFD046;;width:1%">Female</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1984: <a href="/wiki/Tracy_Caulkins" title="Tracy Caulkins">Caulkins</a></span></li>
<li><span class="nowrap">1985: <a href="/w/index.php?title=Penney_Hauschild&amp;action=edit&amp;redlink=1" class="new" title="Penney Hauschild (page does not exist)">Hauschild</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/Jennifer_Gillom" title="Jennifer Gillom">Gillom</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Lillie_Leatherwood" title="Lillie Leatherwood">Leatherwood</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Dara_Torres" title="Dara Torres">Torres</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Bridgette_Gordon" title="Bridgette Gordon">Gordon</a></span></li>
<li><span class="nowrap">1990: <a href="/w/index.php?title=Dee_Foster&amp;action=edit&amp;redlink=1" class="new" title="Dee Foster (page does not exist)">Foster</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/Daedra_Charles" title="Daedra Charles">Charles</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Vicki_Goetze" title="Vicki Goetze">Goetze</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Nicole_Haislett" title="Nicole Haislett">Haislett</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Nicole_Haislett" title="Nicole Haislett">Haislett</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Jenny_Hansen" title="Jenny Hansen">Hansen</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Saudia_Roundtree" title="Saudia Roundtree">Roundtree</a></span></li>
<li><span class="nowrap">1997: <a href="/w/index.php?title=Trinity_Johnson&amp;action=edit&amp;redlink=1" class="new" title="Trinity Johnson (page does not exist)">Johnson</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Chamique_Holdsclaw" title="Chamique Holdsclaw">Holdsclaw</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Chamique_Holdsclaw" title="Chamique Holdsclaw">Holdsclaw</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Kristy_Kowal" title="Kristy Kowal">Kowal</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Amy_Yoder_Begley" title="Amy Yoder Begley">Yoder</a></span></li>
<li><span class="nowrap">2002: <a href="/w/index.php?title=Andree_Pickens&amp;action=edit&amp;redlink=1" class="new" title="Andree Pickens (page does not exist)">Pickens</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/LaToya_Thomas" title="LaToya Thomas">L. Thomas</a></span></li>
<li><span class="nowrap">2004: <a href="/w/index.php?title=Jeana_Rice&amp;action=edit&amp;redlink=1" class="new" title="Jeana Rice (page does not exist)">Rice</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Kirsty_Coventry" title="Kirsty Coventry">Coventry</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Seimone_Augustus" title="Seimone Augustus">Augustus</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Monica_Abbott" title="Monica Abbott">Abbott</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Candace_Parker" title="Candace Parker">Parker</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Courtney_Kupets" title="Courtney Kupets">Kupets</a></span></li>
<li><span class="nowrap">2010: <a href="/w/index.php?title=Susan_Jackson_(gymnast)&amp;action=edit&amp;redlink=1" class="new" title="Susan Jackson (gymnast) (page does not exist)">S. Jackson</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Kayla_Hoffman" title="Kayla Hoffman">Hoffman</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Brooke_Pancake" title="Brooke Pancake">Pancake</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Allison_Schmitt" title="Allison Schmitt">Schmitt</a></span></li>
<li><span class="nowrap">2014: <a href="/w/index.php?title=Hannah_Rogers&amp;action=edit&amp;redlink=1" class="new" title="Hannah Rogers (page does not exist)">Rogers</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Lauren_Haeger" title="Lauren Haeger">Haeger</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Bridget_Sloan" title="Bridget Sloan">Sloan</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Kendell_Williams" title="Kendell Williams">Williams</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Orlando_Magic" style="padding:3px">
<table class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;background-color:#0077C0;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Orlando_Magic" title="Template:Orlando Magic"><abbr title="View this template" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;background-color:#0077C0;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Orlando_Magic" title="Template talk:Orlando Magic"><abbr title="Discuss this template" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;background-color:#0077C0;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Orlando_Magic&amp;action=edit"><abbr title="Edit this template" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;background-color:#0077C0;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Orlando_Magic" style="font-size:114%;margin:0 4em"><a href="/wiki/Orlando_Magic" title="Orlando Magic"><span style="color:#FFFFFF">Orlando Magic</span></a></div>
</th>
</tr>
<tr>
<td class="navbox-abovebelow" colspan="2" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;">
<div id="*_Founded_in_1989&amp;#10;*_Based_in_Orlando,_Florida">
<ul>
<li>Founded in 1989</li>
<li>Based in <b><a href="/wiki/Orlando,_Florida" title="Orlando, Florida"><span style="color:#FFFFFF">Orlando, Florida</span></a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">Franchise</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Orlando_Magic" title="Orlando Magic">Franchise</a></li>
<li><a href="/wiki/NBA_Summer_League#Orlando_Pro_Summer_League" title="NBA Summer League">Summer League</a></li>
<li><a href="/wiki/1989_NBA_Expansion_Draft" title="1989 NBA Expansion Draft">Expansion Draft</a></li>
<li><a href="/wiki/Orlando_Magic_all-time_roster" title="Orlando Magic all-time roster">All-time roster</a></li>
<li><a href="/wiki/Orlando_Magic_draft_history" title="Orlando Magic draft history">Draft history</a></li>
<li><a href="/wiki/Orlando_Magic#Leaders" title="Orlando Magic">Records</a></li>
<li><a href="/wiki/List_of_Orlando_Magic_seasons" title="List of Orlando Magic seasons">Seasons</a></li>
<li><b><a href="/wiki/2018%E2%80%9319_Orlando_Magic_season" title="2018–19 Orlando Magic season">Current season</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">Arenas</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Amway_Arena" title="Amway Arena">Amway Arena</a></li>
<li><b><a href="/wiki/Amway_Center" title="Amway Center">Amway Center</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">General managers</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Pat_Williams_(basketball)" title="Pat Williams (basketball)">Williams</a></li>
<li><a href="/wiki/John_Gabriel_(basketball)" title="John Gabriel (basketball)">Gabriel</a></li>
<li><a href="/wiki/John_Weisbrod" title="John Weisbrod">Weisbrod</a></li>
<li><a href="/wiki/Otis_Smith_(basketball)" title="Otis Smith (basketball)">Smith</a></li>
<li><a href="/wiki/Rob_Hennigan" title="Rob Hennigan">Hennigan</a></li>
<li><b><a href="/wiki/John_Hammond_(basketball)" title="John Hammond (basketball)">Hammond</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">G League affiliate</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Lakeland_Magic" title="Lakeland Magic">Lakeland Magic</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">Personnel</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<dl>
<dt>Owners</dt>
<dd><a href="/wiki/RDV_Sports,_Inc." title="RDV Sports, Inc.">RDV Sports, Inc.</a> (<a href="/wiki/Richard_DeVos" title="Richard DeVos">Rich DeVos</a>, owner &amp; chairman)</dd>
<dt>CEO</dt>
<dd><a href="/wiki/Alex_Martins" title="Alex Martins">Alex Martins</a></dd>
<dt>President</dt>
<dd>Jeff Weltman</dd>
<dt>General manager</dt>
<dd><a href="/wiki/John_Hammond_(basketball)" title="John Hammond (basketball)">John Hammond</a></dd>
<dt>Head coach</dt>
<dd><a href="/wiki/Steve_Clifford" title="Steve Clifford">Steve Clifford</a></dd>
<dt><a href="/wiki/Template:Orlando_Magic_roster" title="Template:Orlando Magic roster">Current roster</a></dt>
</dl>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">Retired numbers</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><b><a href="/wiki/Sixth_man_(fans)" title="Sixth man (fans)">6</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">Hall of Famers</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Chuck_Daly" title="Chuck Daly">Chuck Daly</a></li>
<li><a href="/wiki/Patrick_Ewing" title="Patrick Ewing">Patrick Ewing</a></li>
<li><a class="mw-selflink selflink">Shaquille O'Neal</a></li>
<li><a href="/wiki/Dominique_Wilkins" title="Dominique Wilkins">Dominique Wilkins</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">Conference Championships (2)</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/1995_NBA_Finals" title="1995 NBA Finals">1995</a></li>
<li><a href="/wiki/2009_NBA_Finals" title="2009 NBA Finals">2009</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">Division Championships (5)</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/1994%E2%80%9395_Orlando_Magic_season" title="1994–95 Orlando Magic season">1995</a></li>
<li><a href="/wiki/1995%E2%80%9396_Orlando_Magic_season" title="1995–96 Orlando Magic season">1996</a></li>
<li><a href="/wiki/2007%E2%80%9308_Orlando_Magic_season" title="2007–08 Orlando Magic season">2008</a></li>
<li><a href="/wiki/2008%E2%80%9309_Orlando_Magic_season" title="2008–09 Orlando Magic season">2009</a></li>
<li><a href="/wiki/2009%E2%80%9310_Orlando_Magic_season" title="2009–10 Orlando Magic season">2010</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">Culture and lore</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Get_Ready_for_This" title="Get Ready for This">"Get Ready for This" (2 Unlimited song)</a></li>
<li><a href="/wiki/Paul_Porter" title="Paul Porter">Paul Porter</a></li>
<li><a href="/wiki/Stuff_the_Magic_Dragon" title="Stuff the Magic Dragon">Stuff the Magic Dragon</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; -webkit-box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0; box-shadow: inset 2px 2px 0 #0077C0, inset -2px -2px 0 #0077C0;;;width:1%">Media</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<dl>
<dt>TV</dt>
<dd><a href="/wiki/Fox_Sports_Florida" title="Fox Sports Florida">Fox Sports Florida</a></dd>
<dt>Radio</dt>
<dd><a href="/wiki/WDBO_(AM)" title="WDBO (AM)">WDBO</a></dd>
<dt><a href="/wiki/List_of_Orlando_Magic_broadcasters" title="List of Orlando Magic broadcasters">Announcers</a></dt>
<dd><a href="/wiki/David_Steele_(sports_announcer)" title="David Steele (sports announcer)">David Steele</a></dd>
<dd><a href="/wiki/Jeff_Turner" title="Jeff Turner">Jeff Turner</a></dd>
<dd><a href="/wiki/Dennis_Neumann" class="mw-redirect" title="Dennis Neumann">Dennis Neumann</a></dd>
<dd><a href="/wiki/Richie_Adubato" title="Richie Adubato">Richie Adubato</a></dd>
</dl>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Los_Angeles_Lakers" style="padding:3px">
<table class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Los_Angeles_Lakers" title="Template:Los Angeles Lakers"><abbr title="View this template" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Los_Angeles_Lakers" title="Template talk:Los Angeles Lakers"><abbr title="Discuss this template" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Los_Angeles_Lakers&amp;action=edit"><abbr title="Edit this template" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;background-color:#552583;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; -webkit-box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927; box-shadow: inset 2px 2px 0 #FDB927, inset -2px -2px 0 #FDB927;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Los_Angeles_Lakers" style="font-size:114%;margin:0 4em"><a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers"><span style="color:#FFFFFF">Los Angeles Lakers</span></a></div>
</th>
</tr>
<tr>
<td class="navbox-abovebelow" colspan="2" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;">
<div id="*_Founded_in_1947&amp;#10;*_Played_in_Minneapolis_(1947–1960)&amp;#10;*_Based_in_Los_Angeles,_California">
<ul>
<li>Founded in 1947</li>
<li>Played in <b>Minneapolis</b> (1947–1960)</li>
<li>Based in <b><a href="/wiki/Los_Angeles" title="Los Angeles"><span style="color:#000000">Los Angeles, California</span></a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">Franchise</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Los_Angeles_Lakers" title="Los Angeles Lakers">Franchise</a></li>
<li><a href="/wiki/History_of_the_Los_Angeles_Lakers" title="History of the Los Angeles Lakers">Team history</a></li>
<li><a href="/wiki/Los_Angeles_Lakers_all-time_roster" title="Los Angeles Lakers all-time roster">All-time roster</a></li>
<li><a href="/wiki/List_of_Los_Angeles_Lakers_first_and_second_round_draft_picks" title="List of Los Angeles Lakers first and second round draft picks">Draft history</a></li>
<li><a href="/wiki/Los_Angeles_Lakers_accomplishments_and_records" title="Los Angeles Lakers accomplishments and records">Records</a></li>
<li><a href="/wiki/List_of_Los_Angeles_Lakers_head_coaches" title="List of Los Angeles Lakers head coaches">Head coaches</a></li>
<li><a href="/wiki/List_of_Los_Angeles_Lakers_seasons" title="List of Los Angeles Lakers seasons">Seasons</a></li>
<li><b><a href="/wiki/2018%E2%80%9319_Los_Angeles_Lakers_season" title="2018–19 Los Angeles Lakers season">Current season</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">Arenas</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Minneapolis_Auditorium" title="Minneapolis Auditorium">Minneapolis Auditorium</a></li>
<li><a href="/wiki/Minneapolis_Armory" title="Minneapolis Armory">Minneapolis Armory</a></li>
<li><a href="/wiki/Los_Angeles_Memorial_Sports_Arena" title="Los Angeles Memorial Sports Arena">Los Angeles Memorial Sports Arena</a></li>
<li><a href="/wiki/The_Forum_(Inglewood,_California)" title="The Forum (Inglewood, California)">The Forum</a></li>
<li><b><a href="/wiki/Staples_Center" title="Staples Center">Staples Center</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">G League affiliate</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/South_Bay_Lakers" title="South Bay Lakers">South Bay Lakers</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">Administration</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Jeanie_Buss" title="Jeanie Buss">Jeanie</a>, <a href="/wiki/Jim_Buss" title="Jim Buss">Jim</a>, and <a href="/wiki/Johnny_Buss" title="Johnny Buss">Johnny Buss</a> (majority owners)</li>
<li><a href="/wiki/Anschutz_Entertainment_Group" title="Anschutz Entertainment Group">Anschutz Entertainment Group</a> (minority owner)</li>
<li><a href="/wiki/Ed_Roski_Jr." title="Ed Roski Jr.">Ed Roski Jr.</a> (minority owner)</li>
<li><a href="/wiki/Patrick_Soon-Shiong" title="Patrick Soon-Shiong">Patrick Soon-Shiong</a> (minority owner)</li>
<li><a href="/wiki/Magic_Johnson" title="Magic Johnson">Magic Johnson</a> (President of Basketball Operations)</li>
<li><a href="/wiki/Rob_Pelinka" title="Rob Pelinka">Rob Pelinka</a> (General manager)</li>
<li><a href="/wiki/Luke_Walton" title="Luke Walton">Luke Walton</a> (Head coach)</li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">Retired numbers</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><b><a href="/wiki/Kobe_Bryant" title="Kobe Bryant">8</a></b></li>
<li><b><a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">13</a></b></li>
<li><b><a href="/wiki/Elgin_Baylor" title="Elgin Baylor">22</a></b></li>
<li><b><a href="/wiki/Kobe_Bryant" title="Kobe Bryant">24</a></b></li>
<li><b><a href="/wiki/Gail_Goodrich" title="Gail Goodrich">25</a></b></li>
<li><b><a href="/wiki/Magic_Johnson" title="Magic Johnson">32</a></b></li>
<li><b><a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">33</a></b></li>
<li><b><a class="mw-selflink selflink">34</a></b></li>
<li><b><a href="/wiki/James_Worthy" title="James Worthy">42</a></b></li>
<li><b><a href="/wiki/Jerry_West" title="Jerry West">44</a></b></li>
<li><b><a href="/wiki/Jamaal_Wilkes" title="Jamaal Wilkes">52</a></b></li>
<li><b><a href="/wiki/Chick_Hearn" title="Chick Hearn">Chick Hearn (Microphone)</a></b></li>
</ul>
<dl>
<dt>Minneapolis Lakers <a href="/wiki/Naismith_Memorial_Basketball_Hall_of_Fame" title="Naismith Memorial Basketball Hall of Fame">Hall of Famers</a></dt>
<dd><a href="/wiki/George_Mikan" title="George Mikan">Mikan</a></dd>
<dd><a href="/wiki/Vern_Mikkelsen" title="Vern Mikkelsen">Mikkelsen</a></dd>
<dd><a href="/wiki/Slater_Martin" title="Slater Martin">Martin</a></dd>
<dd><a href="/wiki/Clyde_Lovellette" title="Clyde Lovellette">Lovellette</a></dd>
<dd><a href="/wiki/Jim_Pollard" title="Jim Pollard">Pollard</a></dd>
<dd><a href="/wiki/John_Kundla" title="John Kundla">Coach Kundla</a></dd>
</dl>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">NBA Championships (16)</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/1949_BAA_Finals" title="1949 BAA Finals">1949</a></li>
<li><a href="/wiki/1950_NBA_Finals" title="1950 NBA Finals">1950</a></li>
<li><a href="/wiki/1952_NBA_Finals" title="1952 NBA Finals">1952</a></li>
<li><a href="/wiki/1953_NBA_Finals" title="1953 NBA Finals">1953</a></li>
<li><a href="/wiki/1954_NBA_Finals" title="1954 NBA Finals">1954</a></li>
<li><a href="/wiki/1972_NBA_Finals" title="1972 NBA Finals">1972</a></li>
<li><a href="/wiki/1980_NBA_Finals" title="1980 NBA Finals">1980</a></li>
<li><a href="/wiki/1982_NBA_Finals" title="1982 NBA Finals">1982</a></li>
<li><a href="/wiki/1985_NBA_Finals" title="1985 NBA Finals">1985</a></li>
<li><a href="/wiki/1987_NBA_Finals" title="1987 NBA Finals">1987</a></li>
<li><a href="/wiki/1988_NBA_Finals" title="1988 NBA Finals">1988</a></li>
<li><a href="/wiki/2000_NBA_Finals" title="2000 NBA Finals">2000</a></li>
<li><a href="/wiki/2001_NBA_Finals" title="2001 NBA Finals">2001</a></li>
<li><a href="/wiki/2002_NBA_Finals" title="2002 NBA Finals">2002</a></li>
<li><a href="/wiki/2009_NBA_Finals" title="2009 NBA Finals">2009</a></li>
<li><a href="/wiki/2010_NBA_Finals" title="2010 NBA Finals">2010</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">Western Conference<br />
Championships (31)</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/1949_BAA_Finals" title="1949 BAA Finals">1949</a></li>
<li><a href="/wiki/1950_NBA_Finals" title="1950 NBA Finals">1950</a></li>
<li><a href="/wiki/1952_NBA_Finals" title="1952 NBA Finals">1952</a></li>
<li><a href="/wiki/1953_NBA_Finals" title="1953 NBA Finals">1953</a></li>
<li><a href="/wiki/1954_NBA_Finals" title="1954 NBA Finals">1954</a></li>
<li><a href="/wiki/1959_NBA_Finals" title="1959 NBA Finals">1959</a></li>
<li><a href="/wiki/1962_NBA_Finals" title="1962 NBA Finals">1962</a></li>
<li><a href="/wiki/1963_NBA_Finals" title="1963 NBA Finals">1963</a></li>
<li><a href="/wiki/1965_NBA_Finals" title="1965 NBA Finals">1965</a></li>
<li><a href="/wiki/1966_NBA_Finals" title="1966 NBA Finals">1966</a></li>
<li><a href="/wiki/1968_NBA_Finals" title="1968 NBA Finals">1968</a></li>
<li><a href="/wiki/1969_NBA_Finals" title="1969 NBA Finals">1969</a></li>
<li><a href="/wiki/1970_NBA_Finals" title="1970 NBA Finals">1970</a></li>
<li><a href="/wiki/1972_NBA_Finals" title="1972 NBA Finals">1972</a></li>
<li><a href="/wiki/1973_NBA_Finals" title="1973 NBA Finals">1973</a></li>
<li><a href="/wiki/1980_NBA_Finals" title="1980 NBA Finals">1980</a></li>
<li><a href="/wiki/1982_NBA_Finals" title="1982 NBA Finals">1982</a></li>
<li><a href="/wiki/1983_NBA_Finals" title="1983 NBA Finals">1983</a></li>
<li><a href="/wiki/1984_NBA_Finals" title="1984 NBA Finals">1984</a></li>
<li><a href="/wiki/1985_NBA_Finals" title="1985 NBA Finals">1985</a></li>
<li><a href="/wiki/1987_NBA_Finals" title="1987 NBA Finals">1987</a></li>
<li><a href="/wiki/1988_NBA_Finals" title="1988 NBA Finals">1988</a></li>
<li><a href="/wiki/1989_NBA_Finals" title="1989 NBA Finals">1989</a></li>
<li><a href="/wiki/1991_NBA_Finals" title="1991 NBA Finals">1991</a></li>
<li><a href="/wiki/2000_NBA_Finals" title="2000 NBA Finals">2000</a></li>
<li><a href="/wiki/2001_NBA_Finals" title="2001 NBA Finals">2001</a></li>
<li><a href="/wiki/2002_NBA_Finals" title="2002 NBA Finals">2002</a></li>
<li><a href="/wiki/2004_NBA_Finals" title="2004 NBA Finals">2004</a></li>
<li><a href="/wiki/2008_NBA_Finals" title="2008 NBA Finals">2008</a></li>
<li><a href="/wiki/2009_NBA_Finals" title="2009 NBA Finals">2009</a></li>
<li><a href="/wiki/2010_NBA_Finals" title="2010 NBA Finals">2010</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">Rivalries</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Celtics%E2%80%93Lakers_rivalry" title="Celtics–Lakers rivalry">Boston Celtics</a></li>
<li><a href="/wiki/Lakers%E2%80%93Pistons_rivalry" title="Lakers–Pistons rivalry">Detroit Pistons</a></li>
<li><a href="/wiki/Lakers%E2%80%93Clippers_rivalry" title="Lakers–Clippers rivalry">Los Angeles Clippers</a></li>
<li><a href="/wiki/Lakers%E2%80%93Spurs_rivalry" title="Lakers–Spurs rivalry">San Antonio Spurs</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">Culture and lore</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Jack_Kent_Cooke" title="Jack Kent Cooke">Jack Kent Cooke</a></li>
<li><a href="/wiki/Jerry_Buss" title="Jerry Buss">Jerry Buss</a></li>
<li><a href="/wiki/Showtime_(basketball)" title="Showtime (basketball)">Showtime</a></li>
<li><a href="/wiki/Chick_Hearn" title="Chick Hearn">Chick Hearn</a></li>
<li><a href="/wiki/Shaq%E2%80%93Kobe_feud" title="Shaq–Kobe feud">Shaq–Kobe feud</a></li>
<li><a href="/wiki/Lawrence_Tanter" title="Lawrence Tanter">Lawrence Tanter</a></li>
<li><a href="/wiki/Jack_Nicholson" title="Jack Nicholson">Jack Nicholson</a></li>
<li>"<a href="/wiki/I_Love_L.A." title="I Love L.A.">I Love L.A.</a>"</li>
<li><a href="/wiki/Laker_Girls" title="Laker Girls">Laker Girls</a></li>
<li><a href="/wiki/Laker_Band" title="Laker Band">Laker Band</a></li>
<li><a href="/wiki/Dancing_Barry" title="Dancing Barry">Dancing Barry</a></li>
<li><i><a href="/wiki/Celtics/Lakers:_Best_of_Enemies" title="Celtics/Lakers: Best of Enemies">Celtics/Lakers: Best of Enemies</a></i></li>
<li><i><a href="/wiki/The_Last_Season:_A_Team_in_Search_of_Its_Soul" title="The Last Season: A Team in Search of Its Soul">The Last Season: A Team in Search of Its Soul</a></i></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#FDB927;color:#000000;-moz-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; -webkit-box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583; box-shadow: inset 2px 2px 0 #552583, inset -2px -2px 0 #552583;;;width:1%">Media</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<dl>
<dt>TV</dt>
<dd><a href="/wiki/Spectrum_SportsNet_(Los_Angeles)" title="Spectrum SportsNet (Los Angeles)">Spectrum SportsNet (Los Angeles)</a></dd>
<dt><a href="/wiki/Los_Angeles_Lakers_radio_networks" title="Los Angeles Lakers radio networks">Radio</a></dt>
<dd><a href="/wiki/KSPN_(AM)" title="KSPN (AM)">710 ESPN Radio</a></dd>
<dd><a href="/wiki/KWKW" title="KWKW">1330 ESPN Deportes</a></dd>
<dt><a href="/wiki/List_of_Los_Angeles_Lakers_broadcasters" title="List of Los Angeles Lakers broadcasters">Announcers</a></dt>
<dd><a href="/wiki/Bill_Macdonald" title="Bill Macdonald">Bill Macdonald</a></dd>
<dd><a href="/wiki/Stu_Lantz" title="Stu Lantz">Stu Lantz</a></dd>
<dd><a href="/wiki/John_Ireland_(sportscaster)" title="John Ireland (sportscaster)">John Ireland</a></dd>
<dd><a href="/wiki/Mychal_Thompson" title="Mychal Thompson">Mychal Thompson</a></dd>
</dl>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Miami_Heat" style="padding:3px">
<table class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; -webkit-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E;;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Miami_Heat" title="Template:Miami Heat"><abbr title="View this template" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; -webkit-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Miami_Heat" title="Template talk:Miami Heat"><abbr title="Discuss this template" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; -webkit-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Miami_Heat&amp;action=edit"><abbr title="Edit this template" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;background-color:#000000;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; -webkit-box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E; box-shadow: inset 2px 2px 0 #98002E, inset -2px -2px 0 #98002E;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Miami_Heat" style="font-size:114%;margin:0 4em"><a href="/wiki/Miami_Heat" title="Miami Heat"><span style="color:#FFFFFF">Miami Heat</span></a></div>
</th>
</tr>
<tr>
<td class="navbox-abovebelow" colspan="2" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;">
<div id="*_Founded_in_1988&amp;#10;*_Based_in_Miami,_Florida">
<ul>
<li>Founded in 1988</li>
<li>Based in <b><a href="/wiki/Miami" title="Miami"><span style="color:#FFFFFF">Miami, Florida</span></a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">Franchise</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Miami_Heat" title="Miami Heat">Franchise</a></li>
<li><a href="/wiki/History_of_the_Miami_Heat" title="History of the Miami Heat">Team history</a></li>
<li><a href="/wiki/1988_NBA_Expansion_Draft" title="1988 NBA Expansion Draft">Expansion Draft</a></li>
<li><a href="/wiki/Miami_Heat_all-time_roster" title="Miami Heat all-time roster">All-time roster</a></li>
<li><a href="/wiki/Miami_Heat_draft_history" title="Miami Heat draft history">Draft history</a></li>
<li><a href="/wiki/List_of_Miami_Heat_seasons" title="List of Miami Heat seasons">Seasons</a></li>
<li><a href="/wiki/Miami_Heat_accomplishments_and_records" title="Miami Heat accomplishments and records">Records</a></li>
<li><a href="/wiki/List_of_Miami_Heat_broadcasters" title="List of Miami Heat broadcasters">Broadcasters</a></li>
<li><a href="/wiki/List_of_Miami_Heat_head_coaches" title="List of Miami Heat head coaches">Head coaches</a></li>
<li><b><a href="/wiki/2018%E2%80%9319_Miami_Heat_season" title="2018–19 Miami Heat season">Current season</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">Arenas</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Miami_Arena" title="Miami Arena">Miami Arena</a></li>
<li><b><a href="/wiki/American_Airlines_Arena" title="American Airlines Arena">American Airlines Arena</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">G League affiliates</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Florida_Flame" title="Florida Flame">Florida Flame</a></li>
<li><a href="/wiki/Arkansas_RimRockers" title="Arkansas RimRockers">Arkansas RimRockers</a></li>
<li><a href="/wiki/Albuquerque_Thunderbirds" class="mw-redirect" title="Albuquerque Thunderbirds">Albuquerque Thunderbirds</a></li>
<li><b><a href="/wiki/Sioux_Falls_Skyforce" title="Sioux Falls Skyforce">Sioux Falls Skyforce</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">General managers</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/w/index.php?title=Lewis_Schaffel&amp;action=edit&amp;redlink=1" class="new" title="Lewis Schaffel (page does not exist)">Schaffel</a></li>
<li><a href="/wiki/Dave_Wohl" title="Dave Wohl">Wohl</a></li>
<li><a href="/wiki/Randy_Pfund" title="Randy Pfund">Pfund</a></li>
<li><a href="/wiki/Pat_Riley" title="Pat Riley">Riley</a></li>
<li><b><a href="/w/index.php?title=Andy_Elisburg&amp;action=edit&amp;redlink=1" class="new" title="Andy Elisburg (page does not exist)">Elisburg</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">NBA Championships (3)</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/2006_NBA_Finals" title="2006 NBA Finals">2006</a></li>
<li><a href="/wiki/2012_NBA_Finals" title="2012 NBA Finals">2012</a></li>
<li><a href="/wiki/2013_NBA_Finals" title="2013 NBA Finals">2013</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">Eastern Conference<br />
Championships (5)</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/2006_NBA_Finals" title="2006 NBA Finals">2006</a></li>
<li><a href="/wiki/2011_NBA_Finals" title="2011 NBA Finals">2011</a></li>
<li><a href="/wiki/2012_NBA_Finals" title="2012 NBA Finals">2012</a></li>
<li><a href="/wiki/2013_NBA_Finals" title="2013 NBA Finals">2013</a></li>
<li><a href="/wiki/2014_NBA_Finals" title="2014 NBA Finals">2014</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">Culture and lore</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Micky_Arison" title="Micky Arison">Micky Arison</a></li>
<li><a href="/wiki/Pat_Riley" title="Pat Riley">Pat Riley</a></li>
<li><a href="/wiki/Michael_Baiamonte" title="Michael Baiamonte">Michael Baiamonte</a></li>
<li><a href="/wiki/Burnie_(mascot)" title="Burnie (mascot)">Burnie</a></li>
<li><a href="/wiki/The_Heat_Is_On_(Glenn_Frey_song)" title="The Heat Is On (Glenn Frey song)">"The Heat Is On" (Glenn Frey song)</a></li>
<li><a class="mw-selflink selflink">Shaq</a></li>
<li><i><a href="/wiki/The_Decision_(TV_special)" title="The Decision (TV special)">The Decision</a></i></li>
<li><a href="/wiki/Big_Three_(Miami_Heat)" title="Big Three (Miami Heat)">The Big Three</a></li>
<li><a href="/wiki/2012%E2%80%9313_Miami_Heat_season" title="2012–13 Miami Heat season">27 in a row</a></li>
<li><a href="/wiki/2013_NBA_Finals" title="2013 NBA Finals">The Shot</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">Retired numbers</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Tim_Hardaway" title="Tim Hardaway">10</a></li>
<li><a href="/wiki/Michael_Jordan" title="Michael Jordan">23</a></li>
<li><a class="mw-selflink selflink">32</a></li>
<li><a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">33</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">Rivals</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Bulls%E2%80%93Heat_rivalry" title="Bulls–Heat rivalry">Chicago Bulls</a></li>
<li><a href="/wiki/Heat%E2%80%93Knicks_rivalry" title="Heat–Knicks rivalry">New York Knicks</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#98002E;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; -webkit-box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000; box-shadow: inset 2px 2px 0 #000000, inset -2px -2px 0 #000000;;;width:1%">Media</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<dl>
<dt>TV</dt>
<dd><a href="/wiki/Fox_Sports_Sun" title="Fox Sports Sun">Fox Sports Sun</a></dd>
<dt>Radio</dt>
<dd><a href="/wiki/WAXY_(AM)" title="WAXY (AM)">790 The Ticket</a></dd>
<dt><a href="/wiki/List_of_Miami_Heat_broadcasters" title="List of Miami Heat broadcasters">Announcers</a></dt>
<dd><a href="/wiki/Eric_Reid_(sportscaster)" title="Eric Reid (sportscaster)">Eric Reid</a></dd>
<dd><a href="/wiki/Tony_Fiorentino" title="Tony Fiorentino">Tony Fiorentino</a></dd>
<dd><a href="/wiki/Jason_Jackson" title="Jason Jackson">Jason Jackson</a></dd>
<dd><a href="/wiki/Mike_Inglis" title="Mike Inglis">Mike Inglis</a></dd>
</dl>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Phoenix_Suns" style="padding:3px">
<table class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;background-color:#1D1160;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020; -webkit-box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020; box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020;;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Phoenix_Suns" title="Template:Phoenix Suns"><abbr title="View this template" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;background-color:#1D1160;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020; -webkit-box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020; box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Phoenix_Suns" title="Template talk:Phoenix Suns"><abbr title="Discuss this template" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;background-color:#1D1160;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020; -webkit-box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020; box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Phoenix_Suns&amp;action=edit"><abbr title="Edit this template" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;background-color:#1D1160;color:#FFFFFF;-moz-box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020; -webkit-box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020; box-shadow: inset 2px 2px 0 #E56020, inset -2px -2px 0 #E56020;;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Phoenix_Suns" style="font-size:114%;margin:0 4em"><a href="/wiki/Phoenix_Suns" title="Phoenix Suns"><span style="color:#FFFFFF">Phoenix Suns</span></a></div>
</th>
</tr>
<tr>
<td class="navbox-abovebelow" colspan="2" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;">
<div id="*_Founded_in_1968&amp;#10;*_Based_in_Phoenix,_Arizona">
<ul>
<li>Founded in 1968</li>
<li>Based in <b><a href="/wiki/Phoenix,_Arizona" title="Phoenix, Arizona"><span style="color:#000000">Phoenix, Arizona</span></a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%">Franchise</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Phoenix_Suns" title="Phoenix Suns">Franchise</a></li>
<li><a href="/wiki/1968_NBA_Expansion_Draft" title="1968 NBA Expansion Draft">Expansion Draft</a></li>
<li><a href="/wiki/Phoenix_Suns#Franchise_history" title="Phoenix Suns">History</a></li>
<li><a href="/wiki/Phoenix_Suns_draft_history" title="Phoenix Suns draft history">Draft history</a></li>
<li><a href="/wiki/Phoenix_Suns_all-time_roster" title="Phoenix Suns all-time roster">All-time roster</a>
<ul>
<li><a href="/wiki/List_of_Phoenix_Suns_players_by_number" title="List of Phoenix Suns players by number">Players sorted by number</a></li>
</ul>
</li>
<li><a href="/wiki/List_of_Phoenix_Suns_head_coaches" title="List of Phoenix Suns head coaches">Head coaches</a></li>
<li><a href="/wiki/List_of_Phoenix_Suns_seasons" title="List of Phoenix Suns seasons">Seasons</a></li>
<li><a href="/wiki/Phoenix_Suns_accomplishments_and_records" title="Phoenix Suns accomplishments and records">Records</a></li>
<li><b><a href="/wiki/2018%E2%80%9319_Phoenix_Suns_season" title="2018–19 Phoenix Suns season">Current season</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%">Arenas</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Arizona_Veterans_Memorial_Coliseum" title="Arizona Veterans Memorial Coliseum">Arizona Veterans Memorial Coliseum</a></li>
<li><a href="/wiki/Talking_Stick_Resort_Arena" title="Talking Stick Resort Arena">Talking Stick Resort Arena</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%">General managers</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Jerry_Colangelo" title="Jerry Colangelo">J. Colangelo</a></li>
<li><a href="/wiki/Bryan_Colangelo" title="Bryan Colangelo">B. Colangelo</a></li>
<li><a href="/wiki/Mike_D%27Antoni" title="Mike D'Antoni">D'Antoni</a></li>
<li><a href="/wiki/Steve_Kerr" title="Steve Kerr">Kerr</a></li>
<li><a href="/wiki/Lance_Blanks" title="Lance Blanks">Blanks</a></li>
<li><b><a href="/wiki/Ryan_McDonough_(NBA_executive)" title="Ryan McDonough (NBA executive)">McDonough</a></b></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%">G League affiliate</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Northern_Arizona_Suns" title="Northern Arizona Suns">Northern Arizona Suns</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%">Culture &amp; lore</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Phoenix_Suns#The_Suns_Gorilla" title="Phoenix Suns">The Suns Gorilla</a></li>
<li><a href="/wiki/Gar_Heard" title="Gar Heard">The Shot 'Heard' Round the World</a></li>
<li><i><a href="/wiki/07_Seconds_or_Less" title="07 Seconds or Less">07 Seconds or Less</a></i></li>
<li><a href="/wiki/Amar%27e_Stoudemire" title="Amar'e Stoudemire">STAT</a></li>
<li><a href="/wiki/Shawn_Marion" title="Shawn Marion">The Matrix</a></li>
<li><a href="/wiki/Charles_Barkley" title="Charles Barkley">Sir Charles</a></li>
<li><a href="/wiki/Steve_Nash" title="Steve Nash">Nashty</a></li>
<li><a href="/wiki/Walter_Davis_(basketball)" title="Walter Davis (basketball)">The Greyhound</a></li>
<li><a href="/wiki/Dan_Majerle" title="Dan Majerle">Thunder Dan</a></li>
<li><a href="/wiki/Al_McCoy_(announcer)" title="Al McCoy (announcer)">Shazam</a></li>
<li><a href="/wiki/Alvan_Adams" title="Alvan Adams">Oklahoma Kid</a></li>
<li><a href="/wiki/Dick_Van_Arsdale" title="Dick Van Arsdale">Original Sun</a></li>
<li><a href="/wiki/Connie_Hawkins" title="Connie Hawkins">Hawk</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%">Rivals</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Spurs%E2%80%93Suns_rivalry" title="Spurs–Suns rivalry">San Antonio Spurs</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%"><a href="/wiki/Phoenix_Suns_Ring_of_Honor" title="Phoenix Suns Ring of Honor"><span style="color:#000000">Ring of Honor</span></a> &amp;<br />
Retired numbers</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Dick_Van_Arsdale" title="Dick Van Arsdale">5</a></li>
<li><a href="/wiki/Walter_Davis_(basketball)" title="Walter Davis (basketball)">6</a></li>
<li><a href="/wiki/Kevin_Johnson" title="Kevin Johnson">7</a></li>
<li><a href="/wiki/Dan_Majerle" title="Dan Majerle">9</a></li>
<li><a href="/wiki/Steve_Nash" title="Steve Nash">13</a></li>
<li><a href="/wiki/Tom_Chambers_(basketball)" title="Tom Chambers (basketball)">24</a></li>
<li><a href="/wiki/Alvan_Adams" title="Alvan Adams">33</a></li>
<li><a href="/wiki/Charles_Barkley" title="Charles Barkley">34</a></li>
<li><a href="/wiki/Connie_Hawkins" title="Connie Hawkins">42</a></li>
<li><a href="/wiki/Paul_Westphal" title="Paul Westphal">44</a></li>
<li><a href="/wiki/Jerry_Colangelo" title="Jerry Colangelo">Jerry Colangelo</a></li>
<li><a href="/wiki/Cotton_Fitzsimmons" title="Cotton Fitzsimmons">Cotton Fitzsimmons</a></li>
<li><a href="/wiki/John_MacLeod_(basketball)" title="John MacLeod (basketball)">John MacLeod</a></li>
<li><a href="/wiki/Al_McCoy_(announcer)" title="Al McCoy (announcer)">Al McCoy</a></li>
<li><a href="/wiki/Joe_Proski" title="Joe Proski">Joe Proski</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%">Hall of Famers</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Charles_Barkley" title="Charles Barkley">Charles Barkley</a></li>
<li><a href="/wiki/Jerry_Colangelo" title="Jerry Colangelo">Jerry Colangelo</a></li>
<li><a href="/wiki/Gail_Goodrich" title="Gail Goodrich">Gail Goodrich</a></li>
<li><a href="/wiki/Connie_Hawkins" title="Connie Hawkins">Connie Hawkins</a></li>
<li><a href="/wiki/Grant_Hill" title="Grant Hill">Grant Hill</a> (To be inducted in September 2018)</li>
<li><a href="/wiki/Dennis_Johnson" title="Dennis Johnson">Dennis Johnson</a></li>
<li><a href="/wiki/Gus_Johnson_(basketball)" title="Gus Johnson (basketball)">Gus Johnson</a></li>
<li><a href="/wiki/Jason_Kidd" title="Jason Kidd">Jason Kidd</a> (To be inducted in September 2018)</li>
<li><a href="/wiki/Ann_Meyers" title="Ann Meyers">Ann Meyers</a></li>
<li><a href="/wiki/Steve_Nash" title="Steve Nash">Steve Nash</a> (To be inducted in September 2018)</li>
<li><a class="mw-selflink selflink">Shaquille O'Neal</a></li>
<li><a href="/wiki/Pat_Riley" title="Pat Riley">Pat Riley</a></li>
<li><a href="/wiki/Charlie_Scott" title="Charlie Scott">Charlie Scott</a> (To be inducted in September 2018)</li>
<li><a href="/wiki/Rick_Welts" title="Rick Welts">Rick Welts</a> (To be inducted in September 2018)</li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%">Key personnel</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<dl>
<dt>Owner</dt>
<dd><a href="/wiki/Robert_Sarver" title="Robert Sarver">Robert Sarver</a></dd>
<dt>President</dt>
<dd><a href="/w/index.php?title=Jason_Rowley&amp;action=edit&amp;redlink=1" class="new" title="Jason Rowley (page does not exist)">Jason Rowley</a></dd>
<dt>General manager</dt>
<dd><a href="/wiki/Ryan_McDonough_(NBA_executive)" title="Ryan McDonough (NBA executive)">Ryan McDonough</a></dd>
<dt>Head coach</dt>
<dd><a href="/wiki/Igor_Koko%C5%A1kov" title="Igor Kokoškov">Igor Kokoškov</a></dd>
</dl>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%"><a href="/wiki/Western_Conference_(NBA)" title="Western Conference (NBA)"><span style="color:#000000">Western Conference</span></a><br />
Championships (2)</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/1976_NBA_Finals" title="1976 NBA Finals">1976</a></li>
<li><a href="/wiki/1993_NBA_Finals" title="1993 NBA Finals">1993</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%"><a href="/wiki/Pacific_Division_(NBA)" title="Pacific Division (NBA)"><span style="color:#000000">Pacific Division</span></a><br />
Championships (6)</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/1980%E2%80%9381_NBA_season" title="1980–81 NBA season">1981</a></li>
<li><a href="/wiki/1992%E2%80%9393_NBA_season" title="1992–93 NBA season">1993</a></li>
<li><a href="/wiki/1994%E2%80%9395_NBA_season" title="1994–95 NBA season">1995</a></li>
<li><a href="/wiki/2004%E2%80%9305_NBA_season" title="2004–05 NBA season">2005</a></li>
<li><a href="/wiki/2005%E2%80%9306_NBA_season" title="2005–06 NBA season">2006</a></li>
<li><a href="/wiki/2006%E2%80%9307_NBA_season" title="2006–07 NBA season">2007</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="background-color:#E56020;color:#000000;-moz-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; -webkit-box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160; box-shadow: inset 2px 2px 0 #1D1160, inset -2px -2px 0 #1D1160;;;width:1%">Media</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<dl>
<dt>TV</dt>
<dd><a href="/wiki/Fox_Sports_Arizona" title="Fox Sports Arizona">FS Arizona</a></dd>
<dt>Radio</dt>
<dd><a href="/wiki/KTAR_(AM)" title="KTAR (AM)">Arizona Sports</a></dd>
<dt>Announcers</dt>
<dd><a href="/w/index.php?title=Tom_Leander&amp;action=edit&amp;redlink=1" class="new" title="Tom Leander (page does not exist)">Tom Leander</a></dd>
<dd><a href="/wiki/Tom_Chambers_(basketball)" title="Tom Chambers (basketball)">Tom Chambers</a></dd>
<dd><a href="/w/index.php?title=Kevin_Ray_(announcer)&amp;action=edit&amp;redlink=1" class="new" title="Kevin Ray (announcer) (page does not exist)">Kevin Ray</a></dd>
<dd><a href="/wiki/Eddie_Johnson_(basketball,_born_1959)" title="Eddie Johnson (basketball, born 1959)">Eddie Johnson</a></dd>
<dd><a href="/wiki/Al_McCoy_(announcer)" title="Al McCoy (announcer)">Al McCoy</a></dd>
<dd><a href="/wiki/Tim_Kempton" title="Tim Kempton">Tim Kempton</a></dd>
<dd><a href="/wiki/Ann_Meyers" title="Ann Meyers">Ann Meyers</a></dd>
<dd><a href="/wiki/Casey_Jacobsen" title="Casey Jacobsen">Casey Jacobsen</a></dd>
<dd><a href="/w/index.php?title=Jon_Bloom&amp;action=edit&amp;redlink=1" class="new" title="Jon Bloom (page does not exist)">Jon Bloom</a></dd>
</dl>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="McDonald&amp;#039;s_All-American_Game_–_Boys&amp;#039;_MVPs" style="padding:3px">
<table class="nowraplinks collapsible collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2" style="background:#CC0000; color:#FFCC00;">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:McDonald%27s_All-American_Game_Boys_MVP" title="Template:McDonald's All-American Game Boys MVP"><abbr title="View this template" style=";background:#CC0000; color:#FFCC00;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:McDonald%27s_All-American_Game_Boys_MVP" title="Template talk:McDonald's All-American Game Boys MVP"><abbr title="Discuss this template" style=";background:#CC0000; color:#FFCC00;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:McDonald%27s_All-American_Game_Boys_MVP&amp;action=edit"><abbr title="Edit this template" style=";background:#CC0000; color:#FFCC00;;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="McDonald&amp;#039;s_All-American_Game_–_Boys&amp;#039;_MVPs" style="font-size:114%;margin:0 4em"><a href="/wiki/McDonald%27s_All-American_Game" title="McDonald's All-American Game"><span style="color:#FFCC00">McDonald's All-American Game – Boys' MVPs</span></a></div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><span class="nowrap">1979: <a href="/wiki/Darren_Daye" title="Darren Daye">Daye</a></span></li>
<li><span class="nowrap">1980: <a href="/wiki/Russell_Cross" title="Russell Cross">Cross</a></span></li>
<li><span class="nowrap">1981: <a href="/wiki/Adrian_Branch" title="Adrian Branch">Branch</a> &amp; <a href="/w/index.php?title=Aubrey_Sherrod&amp;action=edit&amp;redlink=1" class="new" title="Aubrey Sherrod (page does not exist)">Sherrod</a></span></li>
<li><span class="nowrap">1982: <a href="/w/index.php?title=Efrem_Winters&amp;action=edit&amp;redlink=1" class="new" title="Efrem Winters (page does not exist)">Winters</a></span></li>
<li><span class="nowrap">1983: <a href="/wiki/Winston_Bennett" title="Winston Bennett">Bennett</a></span></li>
<li><span class="nowrap">1984: <a href="/wiki/John_Williams_(basketball,_born_1966)" title="John Williams (basketball, born 1966)">Williams</a></span></li>
<li><span class="nowrap">1985: <a href="/wiki/Walker_Lambiotte" title="Walker Lambiotte">Lambiotte</a></span></li>
<li><span class="nowrap">1986: <a href="/wiki/J._R._Reid" title="J. R. Reid">Reid</a></span></li>
<li><span class="nowrap">1987: <a href="/wiki/Mark_Macon" title="Mark Macon">Macon</a></span></li>
<li><span class="nowrap">1988: <a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">Mourning</a> &amp; <a href="/wiki/Billy_Owens" title="Billy Owens">Owens</a></span></li>
<li><span class="nowrap">1989: <a href="/wiki/Bobby_Hurley" title="Bobby Hurley">Hurley</a> &amp; <a class="mw-selflink selflink">O'Neal</a></span></li>
<li><span class="nowrap">1990: <a href="/wiki/Shawn_Bradley" title="Shawn Bradley">Bradley</a></span></li>
<li><span class="nowrap">1991: <a href="/wiki/Chris_Webber" title="Chris Webber">Webber</a> &amp; <a href="/wiki/Rick_Brunson" title="Rick Brunson">Brunson</a></span></li>
<li><span class="nowrap">1992: <a href="/wiki/Othella_Harrington" title="Othella Harrington">Harrington</a></span></li>
<li><span class="nowrap">1993: <a href="/wiki/Jacque_Vaughn" title="Jacque Vaughn">Vaughn</a> &amp; <a href="/wiki/Jerry_Stackhouse" title="Jerry Stackhouse">Stackhouse</a></span></li>
<li><span class="nowrap">1994: <a href="/wiki/Felipe_L%C3%B3pez_(basketball)" title="Felipe López (basketball)">López</a></span></li>
<li><span class="nowrap">1995: <a href="/wiki/Kevin_Garnett" title="Kevin Garnett">Garnett</a></span></li>
<li><span class="nowrap">1996: <a href="/wiki/Shaheen_Holloway" title="Shaheen Holloway">Holloway</a></span></li>
<li><span class="nowrap">1997: <a href="/wiki/Kenny_Gregory" title="Kenny Gregory">Gregory</a></span></li>
<li><span class="nowrap">1998: <a href="/wiki/Ronald_Curry" title="Ronald Curry">R. Curry</a></span></li>
<li><span class="nowrap">1999: <a href="/wiki/Jonathan_Bender" title="Jonathan Bender">Bender</a></span></li>
<li><span class="nowrap">2000: <a href="/wiki/Zach_Randolph" title="Zach Randolph">Randolph</a></span></li>
<li><span class="nowrap">2001: <a href="/wiki/Eddy_Curry" title="Eddy Curry">E. Curry</a></span></li>
<li><span class="nowrap">2002: <a href="/wiki/J._J._Redick" title="J. J. Redick">Redick</a></span></li>
<li><span class="nowrap">2003: <a href="/wiki/LeBron_James" title="LeBron James">James</a></span></li>
<li><span class="nowrap">2004: <a href="/wiki/Dwight_Howard" title="Dwight Howard">Howard</a> &amp; <a href="/wiki/J._R._Smith" title="J. R. Smith">Smith</a></span></li>
<li><span class="nowrap">2005: <a href="/wiki/Josh_McRoberts" title="Josh McRoberts">McRoberts</a></span></li>
<li><span class="nowrap">2006: <a href="/wiki/Chase_Budinger" title="Chase Budinger">Budinger</a> &amp; <a href="/wiki/Kevin_Durant" title="Kevin Durant">Durant</a></span></li>
<li><span class="nowrap">2007: <a href="/wiki/Michael_Beasley" title="Michael Beasley">Beasley</a></span></li>
<li><span class="nowrap">2008: <a href="/wiki/Tyreke_Evans" title="Tyreke Evans">Evans</a></span></li>
<li><span class="nowrap">2009: <a href="/wiki/Derrick_Favors" title="Derrick Favors">Favors</a></span></li>
<li><span class="nowrap">2010: <a href="/wiki/Harrison_Barnes" title="Harrison Barnes">Barnes</a> &amp; <a href="/wiki/Jared_Sullinger" title="Jared Sullinger">Sullinger</a></span></li>
<li><span class="nowrap">2011: <a href="/wiki/Michael_Kidd-Gilchrist" title="Michael Kidd-Gilchrist">Gilchrist</a> &amp; <a href="/wiki/James_Michael_McAdoo" title="James Michael McAdoo">McAdoo</a></span></li>
<li><span class="nowrap">2012: <a href="/wiki/Shabazz_Muhammad" title="Shabazz Muhammad">Muhammad</a></span></li>
<li><span class="nowrap">2013: <a href="/wiki/Aaron_Gordon" title="Aaron Gordon">Gordon</a></span></li>
<li><span class="nowrap">2014: <a href="/wiki/Justin_Jackson_(basketball,_born_1995)" title="Justin Jackson (basketball, born 1995)">Ju. Jackson</a> &amp; <a href="/wiki/Jahlil_Okafor" title="Jahlil Okafor">Okafor</a></span></li>
<li><span class="nowrap">2015: <a href="/wiki/Cheick_Diallo" title="Cheick Diallo">Diallo</a></span></li>
<li><span class="nowrap">2016: <a href="/wiki/Frank_Jackson_(basketball)" title="Frank Jackson (basketball)">F. Jackson</a> &amp; <a href="/wiki/Josh_Jackson_(basketball)" title="Josh Jackson (basketball)">Jo. Jackson</a></span></li>
<li><span class="nowrap">2017: <a href="/wiki/Michael_Porter_Jr." title="Michael Porter Jr.">Porter</a></span></li>
<li><span class="nowrap">2018: <a href="/wiki/Nassir_Little" title="Nassir Little">Little</a></span></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="NBA_on_TNT" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:NBA_on_TNT" title="Template:NBA on TNT"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:NBA_on_TNT" title="Template talk:NBA on TNT"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:NBA_on_TNT&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="NBA_on_TNT" style="font-size:114%;margin:0 4em"><i><a href="/wiki/NBA_on_TNT" title="NBA on TNT">NBA on TNT</a></i></div>
</th>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Related programs</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><i><a href="/wiki/Inside_the_NBA" title="Inside the NBA">Inside the NBA</a></i>
<ul>
<li><i><a href="/wiki/Shaqtin%27_a_Fool" title="Shaqtin' a Fool">Shaqtin' a Fool</a></i></li>
</ul>
</li>
<li><i><a href="/wiki/NBA_on_TBS" title="NBA on TBS">NBA on TBS</a></i></li>
<li><a href="/wiki/NBA_All-Star_Weekend" title="NBA All-Star Weekend">NBA All-Star Weekend</a></li>
<li><a href="/wiki/NCAA_March_Madness_(CBS/Turner)" title="NCAA March Madness (CBS/Turner)">NCAA Men's Division I Basketball Championship</a>
<ul>
<li><a href="/wiki/List_of_NCAA_March_Madness_commentary_crews_for_CBS/Turner" title="List of NCAA March Madness commentary crews for CBS/Turner">commentators</a></li>
</ul>
</li>
<li><a href="/wiki/NBA_Awards" title="NBA Awards">NBA Awards</a>
<ul>
<li><a href="/wiki/2017_NBA_Awards" title="2017 NBA Awards">2017</a></li>
<li><a href="/wiki/2018_NBA_Awards" title="2018 NBA Awards">2018</a></li>
</ul>
</li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Related articles</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/National_Basketball_Association_Nielsen_ratings" class="mw-redirect" title="National Basketball Association Nielsen ratings">Ratings</a></li>
<li><a href="/wiki/NBA_TV" title="NBA TV">NBA TV</a></li>
<li><i><a href="/wiki/NBA_07" class="mw-redirect" title="NBA 07">NBA 07</a></i></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/List_of_NBA_on_TNT_broadcasters" class="mw-redirect" title="List of NBA on TNT broadcasters">Commentators</a></th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="row" class="navbox-group" style="width:1%">Play-by-play</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Marv_Albert" title="Marv Albert">Marv Albert</a></li>
<li><a href="/wiki/Brian_Anderson_(sportscaster)" title="Brian Anderson (sportscaster)">Brian Anderson</a></li>
<li><a href="/wiki/Gary_Bender" title="Gary Bender">Gary Bender</a></li>
<li><a href="/wiki/Tim_Brando" title="Tim Brando">Tim Brando</a></li>
<li><a href="/wiki/Mike_Breen" title="Mike Breen">Mike Breen</a></li>
<li><a href="/wiki/Kevin_Calabro" title="Kevin Calabro">Kevin Calabro</a></li>
<li><a href="/wiki/Skip_Caray" title="Skip Caray">Skip Caray</a></li>
<li><a href="/wiki/Matt_Devlin_(sportscaster)" title="Matt Devlin (sportscaster)">Matt Devlin</a></li>
<li><a href="/wiki/Jim_Durham" title="Jim Durham">Jim Durham</a></li>
<li><a href="/wiki/Kevin_Harlan" title="Kevin Harlan">Kevin Harlan</a></li>
<li><a href="/wiki/Jim_Huber" title="Jim Huber">Jim Huber</a></li>
<li><a href="/wiki/Verne_Lundquist" title="Verne Lundquist">Verne Lundquist</a></li>
<li><a href="/wiki/Bob_Neal_(Atlanta_sportscaster)" title="Bob Neal (Atlanta sportscaster)">Bob Neal</a></li>
<li><a href="/wiki/Mel_Proctor" title="Mel Proctor">Mel Proctor</a></li>
<li><a href="/wiki/Dick_Stockton" title="Dick Stockton">Dick Stockton</a></li>
<li><a href="/wiki/Pete_Van_Wieren" title="Pete Van Wieren">Pete Van Wieren</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Color commentators</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Danny_Ainge" title="Danny Ainge">Danny Ainge</a></li>
<li><a href="/wiki/Brent_Barry" title="Brent Barry">Brent Barry</a></li>
<li><a href="/wiki/Rick_Barry" title="Rick Barry">Rick Barry</a></li>
<li><a href="/wiki/Hubie_Brown" title="Hubie Brown">Hubie Brown</a></li>
<li><a href="/wiki/P._J._Carlesimo" title="P. J. Carlesimo">P. J. Carlesimo</a></li>
<li><a href="/wiki/Rex_Chapman" title="Rex Chapman">Rex Chapman</a></li>
<li><a href="/wiki/Doug_Collins_(basketball)" title="Doug Collins (basketball)">Doug Collins</a></li>
<li><a href="/wiki/Chuck_Daly" title="Chuck Daly">Chuck Daly</a></li>
<li><a href="/wiki/Mike_Dunleavy_Sr." title="Mike Dunleavy Sr.">Mike Dunleavy Sr.</a></li>
<li><a href="/wiki/Mike_Fratello" title="Mike Fratello">Mike Fratello</a></li>
<li><a href="/wiki/Jack_Givens" title="Jack Givens">Jack Givens</a></li>
<li><a href="/wiki/Grant_Hill" title="Grant Hill">Grant Hill</a></li>
<li><a href="/wiki/Steve_Kerr" title="Steve Kerr">Steve Kerr</a></li>
<li><a href="/wiki/Kevin_McHale_(basketball)" title="Kevin McHale (basketball)">Kevin McHale</a></li>
<li><a href="/wiki/Reggie_Miller" title="Reggie Miller">Reggie Miller</a></li>
<li><a href="/wiki/Doc_Rivers" title="Doc Rivers">Doc Rivers</a></li>
<li><a href="/wiki/Steve_Smith_(basketball)" title="Steve Smith (basketball)">Steve Smith</a></li>
<li><a href="/wiki/John_Thompson_(basketball)" title="John Thompson (basketball)">John Thompson</a></li>
<li><a href="/wiki/Jeff_Van_Gundy" title="Jeff Van Gundy">Jeff Van Gundy</a></li>
<li><a href="/wiki/Dick_Versace" title="Dick Versace">Dick Versace</a></li>
<li><a href="/wiki/Chris_Webber" title="Chris Webber">Chris Webber</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Sideline reporters</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/David_Aldridge" title="David Aldridge">David Aldridge</a></li>
<li><a href="/wiki/Rosalyn_Gold-Onwude" title="Rosalyn Gold-Onwude">Rosalyn Gold-Onwude</a></li>
<li><a href="/wiki/Lewis_Johnson" title="Lewis Johnson">Lewis Johnson</a></li>
<li><a href="/wiki/Allie_LaForce" title="Allie LaForce">Allie LaForce</a></li>
<li><a href="/wiki/Kristen_Ledlow" title="Kristen Ledlow">Kristen Ledlow</a></li>
<li><a href="/wiki/Cheryl_Miller" title="Cheryl Miller">Cheryl Miller</a></li>
<li><a href="/wiki/Pam_Oliver" title="Pam Oliver">Pam Oliver</a></li>
<li><a href="/wiki/Craig_Sager" title="Craig Sager">Craig Sager</a></li>
<li><a href="/wiki/Marty_Snider" title="Marty Snider">Marty Snider</a></li>
<li><a href="/wiki/Tracy_Wolfson" title="Tracy Wolfson">Tracy Wolfson</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Studio hosts</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Vince_Cellini" title="Vince Cellini">Vince Cellini</a></li>
<li><a href="/wiki/Marc_Fein" title="Marc Fein">Marc Fein</a></li>
<li><a href="/wiki/Ernie_Johnson_Jr." title="Ernie Johnson Jr.">Ernie Johnson Jr.</a></li>
<li><a href="/wiki/Bob_Lorenz" title="Bob Lorenz">Bob Lorenz</a></li>
<li><a href="/wiki/Casey_Stern" title="Casey Stern">Casey Stern</a></li>
<li><a href="/wiki/Matt_Winer" title="Matt Winer">Matt Winer</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Studio analysts</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Charles_Barkley" title="Charles Barkley">Charles Barkley</a></li>
<li><a href="/wiki/Magic_Johnson" title="Magic Johnson">Magic Johnson</a></li>
<li><a href="/wiki/Lisa_Leslie" title="Lisa Leslie">Lisa Leslie</a></li>
<li><a href="/wiki/Kevin_McHale_(basketball)" title="Kevin McHale (basketball)">Kevin McHale</a></li>
<li><a class="mw-selflink selflink">Shaquille O'Neal</a></li>
<li><a href="/wiki/Gary_Payton" title="Gary Payton">Gary Payton</a></li>
<li><a href="/wiki/Kenny_Smith" title="Kenny Smith">Kenny Smith</a></li>
<li><a href="/wiki/Reggie_Theus" title="Reggie Theus">Reggie Theus</a></li>
<li><a href="/wiki/Isiah_Thomas" title="Isiah Thomas">Isiah Thomas</a></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">NBA Drafts</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/1990_NBA_draft" title="1990 NBA draft">1990</a></li>
<li><a href="/wiki/1991_NBA_draft" title="1991 NBA draft">1991</a></li>
<li><a href="/wiki/1992_NBA_draft" title="1992 NBA draft">1992</a></li>
<li><a href="/wiki/1993_NBA_draft" title="1993 NBA draft">1993</a></li>
<li><a href="/wiki/1994_NBA_draft" title="1994 NBA draft">1994</a></li>
<li><a href="/wiki/1995_NBA_draft" title="1995 NBA draft">1995</a></li>
<li><a href="/wiki/1996_NBA_draft" title="1996 NBA draft">1996</a></li>
<li><a href="/wiki/1997_NBA_draft" title="1997 NBA draft">1997</a></li>
<li><a href="/wiki/1998_NBA_draft" title="1998 NBA draft">1998</a></li>
<li><a href="/wiki/1999_NBA_draft" title="1999 NBA draft">1999</a></li>
<li><a href="/wiki/2000_NBA_draft" title="2000 NBA draft">2000</a></li>
<li><a href="/wiki/2001_NBA_draft" title="2001 NBA draft">2001</a></li>
<li><a href="/wiki/2002_NBA_draft" title="2002 NBA draft">2002</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">All-Star Game</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/2003_NBA_All-Star_Game" title="2003 NBA All-Star Game">2003</a></li>
<li><a href="/wiki/2004_NBA_All-Star_Game" title="2004 NBA All-Star Game">2004</a></li>
<li><a href="/wiki/2005_NBA_All-Star_Game" title="2005 NBA All-Star Game">2005</a></li>
<li><a href="/wiki/2006_NBA_All-Star_Game" title="2006 NBA All-Star Game">2006</a></li>
<li><a href="/wiki/2007_NBA_All-Star_Game" title="2007 NBA All-Star Game">2007</a></li>
<li><a href="/wiki/2008_NBA_All-Star_Game" title="2008 NBA All-Star Game">2008</a></li>
<li><a href="/wiki/2009_NBA_All-Star_Game" title="2009 NBA All-Star Game">2009</a></li>
<li><a href="/wiki/2010_NBA_All-Star_Game" title="2010 NBA All-Star Game">2010</a></li>
<li><a href="/wiki/2011_NBA_All-Star_Game" title="2011 NBA All-Star Game">2011</a></li>
<li><a href="/wiki/2012_NBA_All-Star_Game" title="2012 NBA All-Star Game">2012</a></li>
<li><a href="/wiki/2013_NBA_All-Star_Game" title="2013 NBA All-Star Game">2013</a></li>
<li><a href="/wiki/2014_NBA_All-Star_Game" title="2014 NBA All-Star Game">2014</a></li>
<li><a href="/wiki/2015_NBA_All-Star_Game" title="2015 NBA All-Star Game">2015</a></li>
<li><a href="/wiki/2016_NBA_All-Star_Game" title="2016 NBA All-Star Game">2016</a></li>
<li><a href="/wiki/2017_NBA_All-Star_Game" title="2017 NBA All-Star Game">2017</a></li>
<li><a href="/wiki/2018_NBA_All-Star_Game" title="2018 NBA All-Star Game">2018</a></li>
<li><a href="/wiki/2019_NBA_All-Star_Game" title="2019 NBA All-Star Game">2019</a></li>
<li><a href="/wiki/2020_NBA_All-Star_Game" title="2020 NBA All-Star Game">2020</a></li>
<li><a href="/wiki/2021_NBA_All-Star_Game" title="2021 NBA All-Star Game">2021</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Lore</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/National_Basketball_Association_music" title="National Basketball Association music">Music</a></li>
<li><a href="/wiki/National_Basketball_Association_Christmas_games" title="National Basketball Association Christmas games">Christmas Day</a></li>
<li><a href="/wiki/NBA_outdoor_games" title="NBA outdoor games">NBA outdoor games</a></li>
<li><a href="/wiki/Hue_Hollins#1994_NBA_Playoffs" title="Hue Hollins">Disputed foul against Scottie Pippen</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Members_of_the_Naismith_Memorial_Basketball_Hall_of_Fame" style="padding:3px">
<table class="nowraplinks hlist collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:Naismith_Memorial_Basketball_Hall_of_Fame" title="Template:Naismith Memorial Basketball Hall of Fame"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:Naismith_Memorial_Basketball_Hall_of_Fame" title="Template talk:Naismith Memorial Basketball Hall of Fame"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:Naismith_Memorial_Basketball_Hall_of_Fame&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Members_of_the_Naismith_Memorial_Basketball_Hall_of_Fame" style="font-size:114%;margin:0 4em"><a href="/wiki/List_of_members_of_the_Naismith_Memorial_Basketball_Hall_of_Fame" title="List of members of the Naismith Memorial Basketball Hall of Fame">Members</a> of the <a href="/wiki/Naismith_Memorial_Basketball_Hall_of_Fame" title="Naismith Memorial Basketball Hall of Fame">Naismith Memorial Basketball Hall of Fame</a></div>
</th>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/List_of_players_in_the_Naismith_Memorial_Basketball_Hall_of_Fame" title="List of players in the Naismith Memorial Basketball Hall of Fame">Players</a></th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="row" class="navbox-group" style="width:1%">Guards</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Ray_Allen" title="Ray Allen">R. Allen</a></li>
<li><a href="/wiki/Nate_Archibald" title="Nate Archibald">Archibald</a></li>
<li><a href="/wiki/John_Beckman" title="John Beckman">Beckman</a></li>
<li><a href="/wiki/Sergei_Belov" title="Sergei Belov">Belov</a></li>
<li><a href="/wiki/Dave_Bing" title="Dave Bing">Bing</a></li>
<li><a href="/wiki/Carol_Blazejowski" title="Carol Blazejowski">Blazejowski</a></li>
<li><a href="/wiki/Bennie_Borgmann" title="Bennie Borgmann">Borgmann</a></li>
<li><a href="/wiki/Joseph_Brennan_(basketball)" title="Joseph Brennan (basketball)">Brennan</a></li>
<li><a href="/wiki/Al_Cervi" title="Al Cervi">Cervi</a></li>
<li><a href="/wiki/Maurice_Cheeks" title="Maurice Cheeks">Cheeks</a></li>
<li><a href="/wiki/Zack_Clayton" title="Zack Clayton">Clayton</a></li>
<li><a href="/wiki/Cynthia_Cooper-Dyke" title="Cynthia Cooper-Dyke">Cooper-Dyke</a></li>
<li><a href="/wiki/Bob_Cousy" title="Bob Cousy">Cousy</a></li>
<li><a href="/wiki/Louie_Dampier" title="Louie Dampier">Dampier</a></li>
<li><a href="/wiki/Bob_Davies" title="Bob Davies">Davies</a></li>
<li><a href="/wiki/Clyde_Drexler" title="Clyde Drexler">Drexler</a></li>
<li><a href="/wiki/Joe_Dumars" title="Joe Dumars">Dumars</a></li>
<li><a href="/wiki/Teresa_Edwards" title="Teresa Edwards">Edwards</a></li>
<li><a href="/wiki/Walt_Frazier" title="Walt Frazier">Frazier</a></li>
<li><a href="/wiki/Marty_Friedman_(basketball)" title="Marty Friedman (basketball)">Friedman</a></li>
<li><a href="/wiki/Nikos_Galis" title="Nikos Galis">Galis</a></li>
<li><a href="/wiki/George_Gervin" title="George Gervin">Gervin</a></li>
<li><a href="/wiki/Gail_Goodrich" title="Gail Goodrich">Goodrich</a></li>
<li><a href="/wiki/Hal_Greer" title="Hal Greer">Greer</a></li>
<li><a href="/wiki/Richie_Guerin" title="Richie Guerin">Guerin</a></li>
<li><a href="/wiki/Vic_Hanson" title="Vic Hanson">Hanson</a></li>
<li><a href="/wiki/Marques_Haynes" title="Marques Haynes">Haynes</a></li>
<li><a href="/wiki/Nat_Holman" title="Nat Holman">Holman</a></li>
<li><a href="/wiki/Charley_Hyatt" title="Charley Hyatt">Hyatt</a></li>
<li><a href="/wiki/John_Isaacs" title="John Isaacs">Isaacs</a></li>
<li><a href="/wiki/Allen_Iverson" title="Allen Iverson">Iverson</a></li>
<li><a href="/wiki/Buddy_Jeannette" title="Buddy Jeannette">Jeannette</a></li>
<li><a href="/wiki/Dennis_Johnson" title="Dennis Johnson">D. Johnson</a></li>
<li><a href="/wiki/Magic_Johnson" title="Magic Johnson">E. Johnson</a></li>
<li><a href="/wiki/K._C._Jones" title="K. C. Jones">K. Jones</a></li>
<li><a href="/wiki/Sam_Jones_(basketball)" title="Sam Jones (basketball)">S. Jones</a></li>
<li><a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></li>
<li><a href="/wiki/Jason_Kidd" title="Jason Kidd">Kidd</a></li>
<li><a href="/wiki/Nancy_Lieberman" title="Nancy Lieberman">Lieberman</a></li>
<li><a href="/wiki/Pete_Maravich" title="Pete Maravich">Maravich</a></li>
<li><a href="/wiki/Hort%C3%AAncia_Marcari" title="Hortência Marcari">Marcari</a></li>
<li><a href="/wiki/%C5%A0ar%C5%ABnas_Mar%C4%8Diulionis" title="Šarūnas Marčiulionis">Marčiulionis</a></li>
<li><a href="/wiki/Slater_Martin" title="Slater Martin">Martin</a></li>
<li><a href="/wiki/Bobby_McDermott" title="Bobby McDermott">McDermott</a></li>
<li><a href="/wiki/Tracy_McGrady" title="Tracy McGrady">McGrady</a></li>
<li><a href="/wiki/Dick_McGuire" title="Dick McGuire">D. McGuire</a></li>
<li><a href="/wiki/Ann_Meyers" title="Ann Meyers">Meyers</a></li>
<li><a href="/wiki/Reggie_Miller" title="Reggie Miller">R. Miller</a></li>
<li><a href="/wiki/Earl_Monroe" title="Earl Monroe">Monroe</a></li>
<li><a href="/wiki/Calvin_Murphy" title="Calvin Murphy">C. Murphy</a></li>
<li><a href="/wiki/Steve_Nash" title="Steve Nash">Nash</a></li>
<li><a href="/wiki/Harlan_Page" title="Harlan Page">Page</a></li>
<li><a href="/wiki/Gary_Payton" title="Gary Payton">Payton</a></li>
<li><a href="/wiki/Dra%C5%BEen_Petrovi%C4%87" title="Dražen Petrović">Petrović</a></li>
<li><a href="/wiki/Andy_Phillip" title="Andy Phillip">Phillip</a></li>
<li><a href="/wiki/Cumberland_Posey" title="Cumberland Posey">Posey</a></li>
<li><a href="/wiki/Mitch_Richmond" title="Mitch Richmond">Richmond</a></li>
<li><a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></li>
<li><a href="/wiki/Guy_Rodgers" title="Guy Rodgers">Rodgers</a></li>
<li><a href="/wiki/John_Roosma" title="John Roosma">Roosma</a></li>
<li><a href="/wiki/John_Russell_(basketball)" title="John Russell (basketball)">J. Russell</a></li>
<li><a href="/wiki/John_Schommer" title="John Schommer">Schommer</a></li>
<li><a href="/wiki/Charlie_Scott" title="Charlie Scott">Scott</a></li>
<li><a href="/wiki/Barney_Sedran" title="Barney Sedran">Sedran</a></li>
<li><a href="/wiki/Bill_Sharman" title="Bill Sharman">Sharman</a></li>
<li><a href="/wiki/Katie_Smith" title="Katie Smith">K. Smith</a></li>
<li><a href="/wiki/Dawn_Staley" title="Dawn Staley">Staley</a></li>
<li><a href="/wiki/Christian_Steinmetz" title="Christian Steinmetz">Steinmetz</a></li>
<li><a href="/wiki/John_Stockton" title="John Stockton">Stockton</a></li>
<li><a href="/wiki/Sheryl_Swoopes" title="Sheryl Swoopes">Swoopes</a></li>
<li><a href="/wiki/Isiah_Thomas" title="Isiah Thomas">Thomas</a></li>
<li><a href="/wiki/David_Thompson_(basketball)" title="David Thompson (basketball)">Thompson</a></li>
<li><a href="/wiki/Fuzzy_Vandivier" title="Fuzzy Vandivier">Vandivier</a></li>
<li><a href="/wiki/Bobby_Wanzer" title="Bobby Wanzer">Wanzer</a></li>
<li><a href="/wiki/Jerry_West" title="Jerry West">West</a></li>
<li><a href="/wiki/Jo_Jo_White" title="Jo Jo White">J. White</a></li>
<li><a href="/wiki/Lenny_Wilkens" title="Lenny Wilkens">Wilkens</a></li>
<li><a href="/wiki/Lynette_Woodard" title="Lynette Woodard">Woodard</a></li>
<li><a href="/wiki/John_Wooden" title="John Wooden">Wooden</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Forwards</th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Paul_Arizin" title="Paul Arizin">Arizin</a></li>
<li><a href="/wiki/Charles_Barkley" title="Charles Barkley">Barkley</a></li>
<li><a href="/wiki/Rick_Barry" title="Rick Barry">Barry</a></li>
<li><a href="/wiki/Elgin_Baylor" title="Elgin Baylor">Baylor</a></li>
<li><a href="/wiki/Larry_Bird" title="Larry Bird">Bird</a></li>
<li><a href="/wiki/Bill_Bradley" title="Bill Bradley">Bradley</a></li>
<li><a href="/wiki/Roger_Brown_(basketball,_born_1942)" title="Roger Brown (basketball, born 1942)">R. Brown</a></li>
<li><a href="/wiki/Billy_Cunningham" title="Billy Cunningham">Cunningham</a></li>
<li><a href="/wiki/Denise_Curry" title="Denise Curry">Curry</a></li>
<li><a href="/wiki/Dra%C5%BEen_Dalipagi%C4%87" title="Dražen Dalipagić">Dalipagić</a></li>
<li><a href="/wiki/Adrian_Dantley" title="Adrian Dantley">Dantley</a></li>
<li><a href="/wiki/Dave_DeBusschere" title="Dave DeBusschere">DeBusschere</a></li>
<li><a href="/wiki/Dutch_Dehnert" title="Dutch Dehnert">Dehnert</a></li>
<li><a href="/wiki/Paul_Endacott" title="Paul Endacott">Endacott</a></li>
<li><a href="/wiki/Alex_English" title="Alex English">English</a></li>
<li><a href="/wiki/Julius_Erving" title="Julius Erving">Erving</a></li>
<li><a href="/wiki/Harold_E._Foster" title="Harold E. Foster">Foster</a></li>
<li><a href="/wiki/Joe_Fulks" title="Joe Fulks">Fulks</a></li>
<li><a href="/wiki/Laddie_Gale" title="Laddie Gale">Gale</a></li>
<li><a href="/wiki/Pop_Gates" title="Pop Gates">Gates</a></li>
<li><a href="/wiki/Tom_Gola" title="Tom Gola">Gola</a></li>
<li><a href="/wiki/Cliff_Hagan" title="Cliff Hagan">Hagan</a></li>
<li><a href="/wiki/John_Havlicek" title="John Havlicek">Havlicek</a></li>
<li><a href="/wiki/Connie_Hawkins" title="Connie Hawkins">Hawkins</a></li>
<li><a href="/wiki/Elvin_Hayes" title="Elvin Hayes">Hayes</a></li>
<li><a href="/wiki/Spencer_Haywood" title="Spencer Haywood">Haywood</a></li>
<li><a href="/wiki/Tom_Heinsohn" title="Tom Heinsohn">Heinsohn</a></li>
<li><a href="/wiki/Grant_Hill" title="Grant Hill">Hill</a></li>
<li><a href="/wiki/Bailey_Howell" title="Bailey Howell">Howell</a></li>
<li><a href="/wiki/Gus_Johnson_(basketball)" title="Gus Johnson (basketball)">G. Johnson</a></li>
<li><a href="/wiki/Bernard_King" title="Bernard King">King</a></li>
<li><a href="/wiki/Jerry_Lucas" title="Jerry Lucas">Lucas</a></li>
<li><a href="/wiki/Hank_Luisetti" title="Hank Luisetti">Luisetti</a></li>
<li><a href="/wiki/Karl_Malone" title="Karl Malone">K. Malone</a></li>
<li><a href="/wiki/Katrina_McClain_Johnson" title="Katrina McClain Johnson">McClain</a></li>
<li><a href="/wiki/Branch_McCracken" title="Branch McCracken">B. McCracken</a></li>
<li><a href="/wiki/Jack_McCracken" title="Jack McCracken">J. McCracken</a></li>
<li><a href="/wiki/George_McGinnis" title="George McGinnis">McGinnis</a></li>
<li><a href="/wiki/Kevin_McHale_(basketball)" title="Kevin McHale (basketball)">McHale</a></li>
<li><a href="/wiki/Vern_Mikkelsen" title="Vern Mikkelsen">Mikkelsen</a></li>
<li><a href="/wiki/Cheryl_Miller" title="Cheryl Miller">C. Miller</a></li>
<li><a href="/wiki/Chris_Mullin_(basketball)" title="Chris Mullin (basketball)">Mullin</a></li>
<li><a href="/wiki/Bob_Pettit" title="Bob Pettit">Pettit</a></li>
<li><a href="/wiki/Scottie_Pippen" title="Scottie Pippen">Pippen</a></li>
<li><a href="/wiki/Jim_Pollard" title="Jim Pollard">Pollard</a></li>
<li><a href="/wiki/Dino_Ra%C4%91a" title="Dino Rađa">Radja</a></li>
<li><a href="/wiki/Frank_Ramsey_(basketball)" title="Frank Ramsey (basketball)">Ramsey</a></li>
<li><a href="/wiki/Dennis_Rodman" title="Dennis Rodman">Rodman</a></li>
<li><a href="/wiki/Dolph_Schayes" title="Dolph Schayes">Schayes</a></li>
<li><a href="/wiki/Ernest_Schmidt" title="Ernest Schmidt">E. Schmidt</a></li>
<li><a href="/wiki/Oscar_Schmidt" title="Oscar Schmidt">O. Schmidt</a></li>
<li><a href="/wiki/Maurice_Stokes" title="Maurice Stokes">Stokes</a></li>
<li><a href="/wiki/Cat_Thompson" title="Cat Thompson">C. Thompson</a></li>
<li><a href="/wiki/Tina_Thompson" title="Tina Thompson">T. Thompson</a></li>
<li><a href="/wiki/Jack_Twyman" title="Jack Twyman">Twyman</a></li>
<li><a href="/wiki/Chet_Walker" title="Chet Walker">Walker</a></li>
<li><a href="/wiki/Ora_Washington" title="Ora Washington">Washington</a></li>
<li><a href="/wiki/Nera_White" title="Nera White">N. White</a></li>
<li><a href="/wiki/Jamaal_Wilkes" title="Jamaal Wilkes">Wilkes</a></li>
<li><a href="/wiki/Dominique_Wilkins" title="Dominique Wilkins">Wilkins</a></li>
<li><a href="/wiki/James_Worthy" title="James Worthy">Worthy</a></li>
<li><a href="/wiki/George_Yardley" title="George Yardley">Yardley</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Centers</th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Kareem_Abdul-Jabbar" title="Kareem Abdul-Jabbar">Abdul-Jabbar</a></li>
<li><a href="/wiki/Thomas_Barlow_(basketball)" title="Thomas Barlow (basketball)">Barlow</a></li>
<li><a href="/wiki/Zelmo_Beaty" title="Zelmo Beaty">Beaty</a></li>
<li><a href="/wiki/Walt_Bellamy" title="Walt Bellamy">Bellamy</a></li>
<li><a href="/wiki/Wilt_Chamberlain" title="Wilt Chamberlain">Chamberlain</a></li>
<li><a href="/wiki/Kre%C5%A1imir_%C4%86osi%C4%87" title="Krešimir Ćosić">Ćosić</a></li>
<li><a href="/wiki/Dave_Cowens" title="Dave Cowens">Cowens</a></li>
<li><a href="/wiki/Joan_Crawford_(basketball)" title="Joan Crawford (basketball)">Crawford</a></li>
<li><a href="/wiki/Mel_Daniels" title="Mel Daniels">Daniels</a></li>
<li><a href="/wiki/Forrest_DeBernardi" title="Forrest DeBernardi">DeBernardi</a></li>
<li><a href="/wiki/Anne_Donovan" title="Anne Donovan">Donovan</a></li>
<li><a href="/wiki/Patrick_Ewing" title="Patrick Ewing">Ewing</a></li>
<li><a href="/wiki/Harry_Gallatin" title="Harry Gallatin">Gallatin</a></li>
<li><a href="/wiki/Artis_Gilmore" title="Artis Gilmore">Gilmore</a></li>
<li><a href="/wiki/Ace_Gruenig" title="Ace Gruenig">Gruenig</a></li>
<li><a href="/wiki/Lusia_Harris" title="Lusia Harris">Harris-Stewart</a></li>
<li><a href="/wiki/Bob_Houbregs" title="Bob Houbregs">Houbregs</a></li>
<li><a href="/wiki/Dan_Issel" title="Dan Issel">Issel</a></li>
<li><a href="/wiki/Skinny_Johnson" title="Skinny Johnson">W. Johnson</a></li>
<li><a href="/wiki/Neil_Johnston" title="Neil Johnston">Johnston</a></li>
<li><a href="/wiki/Moose_Krause" title="Moose Krause">M. Krause</a></li>
<li><a href="/wiki/Bob_Kurland" title="Bob Kurland">Kurland</a></li>
<li><a href="/wiki/Bob_Lanier_(basketball)" title="Bob Lanier (basketball)">Lanier</a></li>
<li><a href="/wiki/Lisa_Leslie" title="Lisa Leslie">Leslie</a></li>
<li><a href="/wiki/Clyde_Lovellette" title="Clyde Lovellette">Lovellette</a></li>
<li><a href="/wiki/Joe_Lapchick" title="Joe Lapchick">Lapchick</a></li>
<li><a href="/wiki/Ed_Macauley" title="Ed Macauley">Macauley</a></li>
<li><a href="/wiki/Moses_Malone" title="Moses Malone">M. Malone</a></li>
<li><a href="/wiki/Bob_McAdoo" title="Bob McAdoo">McAdoo</a></li>
<li><a href="/wiki/Dino_Meneghin" title="Dino Meneghin">Meneghin</a></li>
<li><a href="/wiki/George_Mikan" title="George Mikan">Mikan</a></li>
<li><a href="/wiki/Alonzo_Mourning" title="Alonzo Mourning">Mourning</a></li>
<li><a href="/wiki/Stretch_Murphy" title="Stretch Murphy">S. Murphy</a></li>
<li><a href="/wiki/Dikembe_Mutombo" title="Dikembe Mutombo">Mutombo</a></li>
<li><a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Olajuwon</a></li>
<li><a class="mw-selflink selflink">O'Neal</a></li>
<li><a href="/wiki/Robert_Parish" title="Robert Parish">Parish</a></li>
<li><a href="/wiki/Ubiratan_Pereira_Maciel" title="Ubiratan Pereira Maciel">Pereira</a></li>
<li><a href="/wiki/Willis_Reed" title="Willis Reed">Reed</a></li>
<li><a href="/wiki/Arnie_Risen" title="Arnie Risen">Risen</a></li>
<li><a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></li>
<li><a href="/wiki/Bill_Russell" title="Bill Russell">B. Russell</a></li>
<li><a href="/wiki/Arvydas_Sabonis" title="Arvydas Sabonis">Sabonis</a></li>
<li><a href="/wiki/Ralph_Sampson" title="Ralph Sampson">Sampson</a></li>
<li><a href="/wiki/Uljana_Semjonova" title="Uljana Semjonova">Semjonova</a></li>
<li><a href="/wiki/Nate_Thurmond" title="Nate Thurmond">Thurmond</a></li>
<li><a href="/wiki/Wes_Unseld" title="Wes Unseld">Unseld</a></li>
<li><a href="/wiki/Ed_Wachter" title="Ed Wachter">Wachter</a></li>
<li><a href="/wiki/Bill_Walton" title="Bill Walton">Walton</a></li>
<li><a href="/wiki/Yao_Ming" title="Yao Ming">Yao</a></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/List_of_coaches_in_the_Naismith_Memorial_Basketball_Hall_of_Fame" title="List of coaches in the Naismith Memorial Basketball Hall of Fame">Coaches</a></th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Lidiya_Alekseyeva" title="Lidiya Alekseyeva">Alexeeva</a></li>
<li><a href="/wiki/Phog_Allen" title="Phog Allen">P. Allen</a></li>
<li><a href="/wiki/Harold_Anderson_(basketball)" title="Harold Anderson (basketball)">Anderson</a></li>
<li><a href="/wiki/Red_Auerbach" title="Red Auerbach">Auerbach</a></li>
<li><a href="/wiki/Geno_Auriemma" title="Geno Auriemma">Auriemma</a></li>
<li><a href="/wiki/Leon_Barmore" title="Leon Barmore">Barmore</a></li>
<li><a href="/wiki/Sam_Barry" title="Sam Barry">Barry</a></li>
<li><a href="/wiki/Ernest_Blood" title="Ernest Blood">Blood</a></li>
<li><a href="/wiki/Jim_Boeheim" title="Jim Boeheim">Boeheim</a></li>
<li><a href="/wiki/Larry_Brown_(basketball)" title="Larry Brown (basketball)">L. Brown</a></li>
<li><a href="/wiki/Jim_Calhoun" title="Jim Calhoun">Calhoun</a></li>
<li><a href="/wiki/John_Calipari" title="John Calipari">Calipari</a></li>
<li><a href="/wiki/Howard_Cann" title="Howard Cann">Cann</a></li>
<li><a href="/wiki/Doc_Carlson" title="Doc Carlson">Carlson</a></li>
<li><a href="/wiki/Lou_Carnesecca" title="Lou Carnesecca">Carnesecca</a></li>
<li><a href="/wiki/Ben_Carnevale" title="Ben Carnevale">Carnevale</a></li>
<li><a href="/wiki/Pete_Carril" title="Pete Carril">Carril</a></li>
<li><a href="/wiki/Everett_Case" title="Everett Case">Case</a></li>
<li><a href="/wiki/Van_Chancellor" title="Van Chancellor">Chancellor</a></li>
<li><a href="/wiki/John_Chaney_(basketball,_born_1932)" title="John Chaney (basketball, born 1932)">Chaney</a></li>
<li><a href="/wiki/Jody_Conradt" title="Jody Conradt">Conradt</a></li>
<li><a href="/wiki/Denny_Crum" title="Denny Crum">Crum</a></li>
<li><a href="/wiki/Chuck_Daly" title="Chuck Daly">Daly</a></li>
<li><a href="/wiki/Everett_Dean" title="Everett Dean">Dean</a></li>
<li><a href="/wiki/Antonio_D%C3%ADaz-Miguel" title="Antonio Díaz-Miguel">Díaz-Miguel</a></li>
<li><a href="/wiki/Edgar_Diddle" title="Edgar Diddle">Diddle</a></li>
<li><a href="/wiki/Bruce_Drake" title="Bruce Drake">Drake</a></li>
<li><a href="/wiki/Lefty_Driesell" title="Lefty Driesell">Driesell</a></li>
<li><a href="/wiki/Pedro_Ferr%C3%A1ndiz" title="Pedro Ferrándiz">Ferrándiz</a></li>
<li><a href="/wiki/Clarence_Gaines" title="Clarence Gaines">Gaines</a></li>
<li><a href="/wiki/Sandro_Gamba" title="Sandro Gamba">Gamba</a></li>
<li><a href="/wiki/Jack_Gardner_(basketball)" title="Jack Gardner (basketball)">Gardner</a></li>
<li><a href="/wiki/Lindsay_Gaze" title="Lindsay Gaze">Gaze</a></li>
<li><a href="/wiki/Slats_Gill" title="Slats Gill">Gill</a></li>
<li><a href="/wiki/Alexander_Gomelsky" title="Alexander Gomelsky">Gomelsky</a></li>
<li><a href="/wiki/Sue_Gunter" title="Sue Gunter">Gunter</a></li>
<li><a href="/wiki/Alex_Hannum" title="Alex Hannum">Hannum</a></li>
<li><a href="/wiki/Marv_Harshman" title="Marv Harshman">Harshman</a></li>
<li><a href="/wiki/Don_Haskins" title="Don Haskins">Haskins</a></li>
<li><a href="/wiki/Sylvia_Hatchell" title="Sylvia Hatchell">Hatchell</a></li>
<li><a href="/wiki/Tom_Heinsohn" title="Tom Heinsohn">Heinsohn</a></li>
<li><a href="/wiki/Eddie_Hickey" title="Eddie Hickey">Hickey</a></li>
<li><a href="/wiki/Howard_Hobson" title="Howard Hobson">Hobson</a></li>
<li><a href="/wiki/Red_Holzman" title="Red Holzman">Holzman</a></li>
<li><a href="/wiki/Robert_Hughes_(basketball)" title="Robert Hughes (basketball)">Hughes</a></li>
<li><a href="/wiki/Bob_Hurley" title="Bob Hurley">Hurley</a></li>
<li><a href="/wiki/Henry_Iba" title="Henry Iba">Iba</a></li>
<li><a href="/wiki/Tom_Izzo" title="Tom Izzo">Izzo</a></li>
<li><a href="/wiki/Phil_Jackson" title="Phil Jackson">P. Jackson</a></li>
<li><a href="/wiki/Doggie_Julian" title="Doggie Julian">Julian</a></li>
<li><a href="/wiki/Frank_Keaney" title="Frank Keaney">Keaney</a></li>
<li><a href="/wiki/George_Keogan" title="George Keogan">Keogan</a></li>
<li><a href="/wiki/Bob_Knight" title="Bob Knight">Knight</a></li>
<li><a href="/wiki/Mike_Krzyzewski" title="Mike Krzyzewski">Krzyzewski</a></li>
<li><a href="/wiki/John_Kundla" title="John Kundla">Kundla</a></li>
<li><a href="/wiki/Ward_Lambert" title="Ward Lambert">Lambert</a></li>
<li><a href="/wiki/Bobby_Leonard" title="Bobby Leonard">Leonard</a></li>
<li><a href="/wiki/Guy_Lewis" title="Guy Lewis">Lewis</a></li>
<li><a href="/wiki/Harry_Litwack" title="Harry Litwack">Litwack</a></li>
<li><a href="/wiki/Ken_Loeffler" title="Ken Loeffler">Loeffler</a></li>
<li><a href="/wiki/Dutch_Lonborg" title="Dutch Lonborg">Lonborg</a></li>
<li><a href="/wiki/Herb_Magee" title="Herb Magee">Magee</a></li>
<li><a href="/wiki/Arad_McCutchan" title="Arad McCutchan">McCutchan</a></li>
<li><a href="/wiki/Muffet_McGraw" title="Muffet McGraw">McGraw</a></li>
<li><a href="/wiki/Al_McGuire" title="Al McGuire">A. McGuire</a></li>
<li><a href="/wiki/Frank_McGuire" title="Frank McGuire">F. McGuire</a></li>
<li><i><a href="/wiki/John_McLendon" title="John McLendon">McLendon</a></i></li>
<li><a href="/wiki/Walter_Meanwell" title="Walter Meanwell">Meanwell</a></li>
<li><a href="/wiki/Ray_Meyer" title="Ray Meyer">Meyer</a></li>
<li><a href="/wiki/Ralph_Miller" title="Ralph Miller">Miller</a></li>
<li><a href="/wiki/Billie_Moore" title="Billie Moore">Moore</a></li>
<li><a href="/wiki/Don_Nelson" title="Don Nelson">Nelson</a></li>
<li><a href="/wiki/Aleksandar_Nikoli%C4%87" title="Aleksandar Nikolić">Nikolić</a></li>
<li><a href="/wiki/Mirko_Novosel" title="Mirko Novosel">Novosel</a></li>
<li><a href="/wiki/Lute_Olson" title="Lute Olson">Olson</a></li>
<li><a href="/wiki/Rick_Pitino" title="Rick Pitino">Pitino</a></li>
<li><a href="/wiki/Jack_Ramsay" title="Jack Ramsay">Ramsay</a></li>
<li><a href="/wiki/Nolan_Richardson" title="Nolan Richardson">Richardson</a></li>
<li><a href="/wiki/Pat_Riley" title="Pat Riley">Riley</a></li>
<li><a href="/wiki/Cesare_Rubini" title="Cesare Rubini">Rubini</a></li>
<li><a href="/wiki/Adolph_Rupp" title="Adolph Rupp">Rupp</a></li>
<li><a href="/wiki/Cathy_Rush" title="Cathy Rush">Rush</a></li>
<li><a href="/wiki/Lenny_Sachs" title="Lenny Sachs">Sachs</a></li>
<li><a href="/wiki/Bill_Self" title="Bill Self">Self</a></li>
<li><a href="/wiki/Bill_Sharman" title="Bill Sharman">Sharman</a></li>
<li><a href="/wiki/Everett_Shelton" title="Everett Shelton">Shelton</a></li>
<li><a href="/wiki/Jerry_Sloan" title="Jerry Sloan">Sloan</a></li>
<li><a href="/wiki/Dean_Smith" title="Dean Smith">D. Smith</a></li>
<li><a href="/wiki/C._Vivian_Stringer" title="C. Vivian Stringer">Stringer</a></li>
<li><a href="/wiki/Pat_Summitt" title="Pat Summitt">Summitt</a></li>
<li><a href="/wiki/Jerry_Tarkanian" title="Jerry Tarkanian">Tarkanian</a></li>
<li><a href="/wiki/Fred_Taylor_(basketball,_born_1924)" title="Fred Taylor (basketball, born 1924)">Taylor</a></li>
<li><a href="/wiki/Bertha_Teague" title="Bertha Teague">Teague</a></li>
<li><a href="/wiki/John_Thompson_(basketball)" title="John Thompson (basketball)">J. Thompson</a></li>
<li><a href="/wiki/Tara_VanDerveer" title="Tara VanDerveer">VanDerveer</a></li>
<li><a href="/wiki/Margaret_Wade_(basketball)" title="Margaret Wade (basketball)">Wade</a></li>
<li><a href="/wiki/Stan_Watts" title="Stan Watts">Watts</a></li>
<li><a href="/wiki/Lenny_Wilkens" title="Lenny Wilkens">Wilkens</a></li>
<li><a href="/wiki/Gary_Williams" title="Gary Williams">G. Williams</a></li>
<li><a href="/wiki/Roy_Williams_(coach)" title="Roy Williams (coach)">R. Williams</a></li>
<li><a href="/wiki/John_Wooden" title="John Wooden">Wooden</a></li>
<li><a href="/wiki/Phil_Woolpert" title="Phil Woolpert">Woolpert</a></li>
<li><a href="/wiki/Morgan_Wootten" title="Morgan Wootten">Wootten</a></li>
<li><a href="/wiki/Kay_Yow" title="Kay Yow">Yow</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/List_of_members_of_the_Naismith_Memorial_Basketball_Hall_of_Fame#Contributors" title="List of members of the Naismith Memorial Basketball Hall of Fame">Contributors</a></th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Senda_Berenson_Abbott" title="Senda Berenson Abbott">Abbott</a></li>
<li><a href="/wiki/Don_Barksdale" title="Don Barksdale">Barksdale</a></li>
<li><a href="/wiki/Clair_Bee" title="Clair Bee">Bee</a></li>
<li><a href="/wiki/Daniel_Biasone" title="Daniel Biasone">Biasone</a></li>
<li><a href="/wiki/Hubie_Brown" title="Hubie Brown">H. Brown</a></li>
<li><a href="/wiki/Walter_A._Brown" title="Walter A. Brown">W. Brown</a></li>
<li><a href="/wiki/John_Bunn" title="John Bunn">Bunn</a></li>
<li><a href="/wiki/Jerry_Buss" title="Jerry Buss">Buss</a></li>
<li><a href="/wiki/Nathaniel_Clifton" title="Nathaniel Clifton">Clifton</a></li>
<li><a href="/wiki/Jerry_Colangelo" title="Jerry Colangelo">Colangelo</a></li>
<li><a href="/wiki/Tarzan_Cooper" title="Tarzan Cooper">Cooper</a></li>
<li><a href="/wiki/Bill_Davidson_(businessman)" title="Bill Davidson (businessman)">Davidson</a></li>
<li><a href="/wiki/Bob_Douglas" title="Bob Douglas">Douglas</a></li>
<li><a href="/wiki/Alva_Duer" title="Alva Duer">Duer</a></li>
<li><a href="/wiki/Wayne_Embry" title="Wayne Embry">Embry</a></li>
<li><a href="/wiki/Clifford_Fagan" title="Clifford Fagan">Fagan</a></li>
<li><a href="/wiki/Harry_A._Fisher" title="Harry A. Fisher">Fisher</a></li>
<li><a href="/wiki/Lawrence_Fleisher" class="mw-redirect" title="Lawrence Fleisher">Fleisher</a></li>
<li><a href="/wiki/Dave_Gavitt" title="Dave Gavitt">Gavitt</a></li>
<li><a href="/wiki/Eddie_Gottlieb" title="Eddie Gottlieb">Gottlieb</a></li>
<li><a href="/wiki/Russ_Granik" title="Russ Granik">Granik</a></li>
<li><a href="/wiki/Luther_Gulick_(physician)" title="Luther Gulick (physician)">Gulick</a></li>
<li><a href="/wiki/Les_Harrison_(basketball)" title="Les Harrison (basketball)">Harrison</a></li>
<li><a href="/wiki/Chick_Hearn" title="Chick Hearn">Hearn</a></li>
<li><a href="/wiki/Edwin_Henderson" title="Edwin Henderson">Henderson</a></li>
<li><a href="/wiki/Ferenc_Hepp" title="Ferenc Hepp">Hepp</a></li>
<li><a href="/wiki/Edward_J._Hickox" title="Edward J. Hickox">Hickox</a></li>
<li><a href="/wiki/Tony_Hinkle" title="Tony Hinkle">Hinkle</a></li>
<li><a href="/wiki/Ned_Irish" title="Ned Irish">Irish</a></li>
<li><a href="/wiki/Mannie_Jackson" title="Mannie Jackson">M. Jackson</a></li>
<li><a href="/wiki/Tom_Jernstedt" title="Tom Jernstedt">Jernstedt</a></li>
<li><a href="/wiki/Renato_William_Jones" title="Renato William Jones">Jones</a></li>
<li><a href="/wiki/J._Walter_Kennedy" title="J. Walter Kennedy">Kennedy</a></li>
<li><a href="/wiki/Phil_Knight" title="Phil Knight">Knight</a></li>
<li><a href="/wiki/Jerry_Krause" title="Jerry Krause">J. Krause</a></li>
<li><a href="/wiki/Meadowlark_Lemon" title="Meadowlark Lemon">Lemon</a></li>
<li><a href="/wiki/Emil_Liston" title="Emil Liston">Liston</a></li>
<li><a href="/wiki/Earl_Lloyd" title="Earl Lloyd">Lloyd</a></li>
<li><a href="/wiki/John_McLendon" title="John McLendon">McLendon</a></li>
<li><a href="/wiki/Rebecca_Lobo" title="Rebecca Lobo">Lobo</a></li>
<li><a href="/wiki/Bill_Mokray" title="Bill Mokray">Mokray</a></li>
<li><a href="/wiki/Ralph_Morgan_(basketball)" title="Ralph Morgan (basketball)">Morgan</a></li>
<li><a href="/wiki/Frank_Morgenweck" title="Frank Morgenweck">Morgenweck</a></li>
<li><a href="/wiki/James_Naismith" title="James Naismith">Naismith</a></li>
<li><a href="/wiki/Pete_Newell" title="Pete Newell">Newell</a></li>
<li><a href="/wiki/C._M._Newton" title="C. M. Newton">Newton</a></li>
<li><a href="/wiki/John_O%27Brien_(basketball,_born_1888)" title="John O'Brien (basketball, born 1888)">J. O'Brien</a></li>
<li><a href="/wiki/Larry_O%27Brien" title="Larry O'Brien">L. O'Brien</a></li>
<li><a href="/wiki/Harold_Olsen" title="Harold Olsen">Olsen</a></li>
<li><a href="/wiki/Maurice_Podoloff" title="Maurice Podoloff">Podoloff</a></li>
<li><a href="/wiki/H._V._Porter" title="H. V. Porter">Porter</a></li>
<li><a href="/wiki/George_Raveling" title="George Raveling">Raveling</a></li>
<li><a href="/wiki/William_Reid_(basketball)" title="William Reid (basketball)">Reid</a></li>
<li><a href="/wiki/Jerry_Reinsdorf" title="Jerry Reinsdorf">Reinsdorf</a></li>
<li><a href="/wiki/Elmer_Ripley" title="Elmer Ripley">Ripley</a></li>
<li><a href="/wiki/Satch_Sanders" title="Satch Sanders">Sanders</a></li>
<li><a href="/wiki/Abe_Saperstein" title="Abe Saperstein">Saperstein</a></li>
<li><a href="/wiki/Arthur_Schabinger" title="Arthur Schabinger">Schabinger</a></li>
<li><a href="/wiki/Lynn_St._John" title="Lynn St. John">St. John</a></li>
<li><a href="/wiki/Amos_Alonzo_Stagg" title="Amos Alonzo Stagg">Stagg</a></li>
<li><a href="/wiki/Borislav_Stankovi%C4%87" title="Borislav Stanković">Stanković</a></li>
<li><a href="/wiki/Ed_Steitz" title="Ed Steitz">Steitz</a></li>
<li><a href="/wiki/David_Stern" title="David Stern">Stern</a></li>
<li><a href="/wiki/Chuck_Taylor_(salesman)" title="Chuck Taylor (salesman)">Taylor</a></li>
<li><a href="/wiki/Rod_Thorn" title="Rod Thorn">Thorn</a></li>
<li><a href="/wiki/Oswald_Tower" title="Oswald Tower">Tower</a></li>
<li><a href="/wiki/Arthur_Trester" title="Arthur Trester">Trester</a></li>
<li><a href="/wiki/Dick_Vitale" title="Dick Vitale">Vitale</a></li>
<li><a href="/wiki/Clifford_Wells" title="Clifford Wells">Wells</a></li>
<li><a href="/wiki/Rick_Welts" title="Rick Welts">Welts</a></li>
<li><a href="/wiki/Louis_Wilke" title="Louis Wilke">Wilke</a></li>
<li><a href="/wiki/Tex_Winter" title="Tex Winter">Winter</a></li>
<li><a href="/wiki/Fred_Zollner" title="Fred Zollner">Zollner</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/List_of_members_of_the_Naismith_Memorial_Basketball_Hall_of_Fame#Referees" title="List of members of the Naismith Memorial Basketball Hall of Fame">Referees</a></th>
<td class="navbox-list navbox-even" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Dick_Bavetta" title="Dick Bavetta">Bavetta</a></li>
<li><a href="/wiki/James_Enright" title="James Enright">Enright</a></li>
<li><a href="/wiki/Darell_Garretson" title="Darell Garretson">Garretson</a></li>
<li><a href="/wiki/George_Hepbron" title="George Hepbron">Hepbron</a></li>
<li><a href="/wiki/George_Hoyt" title="George Hoyt">Hoyt</a></li>
<li><a href="/wiki/Matthew_P._Kennedy" title="Matthew P. Kennedy">Kennedy</a></li>
<li><a href="/wiki/Lloyd_Leith" title="Lloyd Leith">Leith</a></li>
<li><a href="/wiki/Red_Mihalik" title="Red Mihalik">Mihalik</a></li>
<li><a href="/wiki/Hank_Nichols" title="Hank Nichols">Nichols</a></li>
<li><a href="/wiki/John_Nucatola" title="John Nucatola">Nucatola</a></li>
<li><a href="/wiki/Ernest_C._Quigley" title="Ernest C. Quigley">Quigley</a></li>
<li><a href="/wiki/Mendy_Rudolph" title="Mendy Rudolph">Rudolph</a></li>
<li><a href="/wiki/Dallas_Shirley" title="Dallas Shirley">Shirley</a></li>
<li><a href="/wiki/Earl_Strom" title="Earl Strom">Strom</a></li>
<li><a href="/wiki/David_Tobey" title="David Tobey">Tobey</a></li>
<li><a href="/wiki/David_Walsh_(referee)" title="David Walsh (referee)">Walsh</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/List_of_members_of_the_Naismith_Memorial_Basketball_Hall_of_Fame#Teams" title="List of members of the Naismith Memorial Basketball Hall of Fame">Teams</a></th>
<td class="navbox-list navbox-odd" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/1960_United_States_men%27s_Olympic_basketball_team" title="1960 United States men's Olympic basketball team">1960 United States Olympic Team</a></li>
<li><a href="/wiki/1992_United_States_men%27s_Olympic_basketball_team" title="1992 United States men's Olympic basketball team">1992 United States Olympic Team</a></li>
<li><a href="/wiki/All-American_Red_Heads" title="All-American Red Heads">All-American Red Heads</a></li>
<li><a href="/wiki/Buffalo_Germans" title="Buffalo Germans">Buffalo Germans</a></li>
<li><a href="/wiki/The_First_Team" title="The First Team">The First Team</a></li>
<li><a href="/wiki/Harlem_Globetrotters" title="Harlem Globetrotters">Harlem Globetrotters</a></li>
<li><a href="/wiki/Immaculata_University#Women's_basketball" title="Immaculata University">Immaculata College</a></li>
<li><a href="/wiki/New_York_Renaissance" title="New York Renaissance">New York Renaissance</a></li>
<li><a href="/wiki/Original_Celtics" title="Original Celtics">Original Celtics</a></li>
<li><a href="/wiki/1965%E2%80%9366_Texas_Western_Miners_basketball_team" title="1965–66 Texas Western Miners basketball team">Texas Western</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="Naismith_Memorial_Basketball_Hall_of_Fame_Class_of_2016" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:2016_Basketball_HOF" title="Template:2016 Basketball HOF"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:2016_Basketball_HOF" title="Template talk:2016 Basketball HOF"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:2016_Basketball_HOF&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="Naismith_Memorial_Basketball_Hall_of_Fame_Class_of_2016" style="font-size:114%;margin:0 4em"><a href="/wiki/Naismith_Memorial_Basketball_Hall_of_Fame" title="Naismith Memorial Basketball Hall of Fame">Naismith Memorial Basketball Hall of Fame</a> Class of 2016</div>
</th>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Players</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Zelmo_Beaty" title="Zelmo Beaty">Zelmo Beaty</a></li>
<li><a href="/wiki/Allen_Iverson" title="Allen Iverson">Allen Iverson</a></li>
<li><a class="mw-selflink selflink">Shaquille O'Neal</a></li>
<li><a href="/wiki/Cumberland_Posey" title="Cumberland Posey">Cumberland Posey</a></li>
<li><a href="/wiki/Sheryl_Swoopes" title="Sheryl Swoopes">Sheryl Swoopes</a></li>
<li><a href="/wiki/Yao_Ming" title="Yao Ming">Yao Ming</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Coaches</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Tom_Izzo" title="Tom Izzo">Tom Izzo</a></li>
<li><a href="/wiki/John_McLendon" title="John McLendon">John McLendon</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Referees</th>
<td class="navbox-list navbox-odd hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Darell_Garretson" title="Darell Garretson">Darell Garretson</a></li>
</ul>
</div>
</td>
</tr>
<tr>
<th scope="row" class="navbox-group" style="width:1%">Contributors</th>
<td class="navbox-list navbox-even hlist" style="text-align:left;border-left-width:2px;border-left-style:solid;width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Jerry_Reinsdorf" title="Jerry Reinsdorf">Jerry Reinsdorf</a></li>
</ul>
</div>
</td>
</tr>
</table>
</div>
<div role="navigation" class="navbox" aria-labelledby="FIBA_Hall_of_Fame_inductees" style="padding:3px">
<table class="nowraplinks collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit">
<tr>
<th scope="col" class="navbox-title" colspan="2">
<div class="plainlinks hlist navbar mini">
<ul>
<li class="nv-view"><a href="/wiki/Template:FIBA_Hall_of_Fame" title="Template:FIBA Hall of Fame"><abbr title="View this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">v</abbr></a></li>
<li class="nv-talk"><a href="/wiki/Template_talk:FIBA_Hall_of_Fame" title="Template talk:FIBA Hall of Fame"><abbr title="Discuss this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">t</abbr></a></li>
<li class="nv-edit"><a class="external text" href="//en.wikipedia.org/w/index.php?title=Template:FIBA_Hall_of_Fame&amp;action=edit"><abbr title="Edit this template" style=";;background:none transparent;border:none;-moz-box-shadow:none;-webkit-box-shadow:none;box-shadow:none;">e</abbr></a></li>
</ul>
</div>
<div id="FIBA_Hall_of_Fame_inductees" style="font-size:114%;margin:0 4em"><a href="/wiki/FIBA_Hall_of_Fame" title="FIBA Hall of Fame">FIBA Hall of Fame</a> inductees</div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks collapsible collapsed navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="col" class="navbox-title" colspan="2" style=";">
<div id="Coaches_(22)" style="font-size:114%;margin:0 4em">Coaches (22)</div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Lidia_Alexeyeva" class="mw-redirect" title="Lidia Alexeyeva">Alexeyeva</a></li>
<li><a href="/w/index.php?title=Jorge_Hugo_Canavesi&amp;action=edit&amp;redlink=1" class="new" title="Jorge Hugo Canavesi (page does not exist)">Canavesi</a></li>
<li><a href="/wiki/Antonio_D%C3%ADaz-Miguel" title="Antonio Díaz-Miguel">Díaz-Miguel</a></li>
<li><a href="/wiki/Jack_Donohue_(basketball)" title="Jack Donohue (basketball)">Donohue</a></li>
<li><a href="/wiki/Pedro_Ferr%C3%A1ndiz" title="Pedro Ferrándiz">Ferrándiz</a></li>
<li><a href="/wiki/Alexander_Gomelsky" title="Alexander Gomelsky">A. Gomelsky</a></li>
<li><a href="/w/index.php?title=Evgeniy_Gomelsky&amp;action=edit&amp;redlink=1" class="new" title="Evgeniy Gomelsky (page does not exist)">E. Gomelsky</a></li>
<li><a href="/wiki/Lindsay_Gaze" title="Lindsay Gaze">Gaze</a></li>
<li><a href="/wiki/Henry_Iba" title="Henry Iba">Iba</a></li>
<li><a href="/wiki/Du%C5%A1an_Ivkovi%C4%87" title="Dušan Ivković">Ivković</a></li>
<li><a href="/wiki/Vladimir_Kondrashin" title="Vladimir Kondrashin">Kondrashin</a></li>
<li><a href="/wiki/Pete_Newell" title="Pete Newell">Newell</a></li>
<li><a href="/wiki/Aleksandar_Nikoli%C4%87" title="Aleksandar Nikolić">Nikolić</a></li>
<li><a href="/wiki/Mirko_Novosel" title="Mirko Novosel">Novosel</a></li>
<li><a href="/wiki/Giancarlo_Primo" title="Giancarlo Primo">Primo</a></li>
<li><a href="/wiki/Cesare_Rubini" title="Cesare Rubini">Rubini</a></li>
<li><a href="/wiki/Dean_Smith" title="Dean Smith">Smith</a></li>
<li><a href="/wiki/Togo_Renan_Soares" title="Togo Renan Soares">Soares</a></li>
<li><a href="/wiki/Jan_Stirling" title="Jan Stirling">Stirling</a></li>
<li><a href="/wiki/Pat_Summitt" title="Pat Summitt">Summitt</a></li>
<li><a href="/wiki/Kay_Yow" title="Kay Yow">Yow</a></li>
<li><a href="/wiki/Ranko_%C5%BDeravica" title="Ranko Žeravica">Žeravica</a></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks collapsible collapsed navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="col" class="navbox-title" colspan="2" style=";">
<div id="Contributors_(35)" style="font-size:114%;margin:0 4em">Contributors (35)</div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Eduardo_Airaldi_Rivarola" title="Eduardo Airaldi Rivarola">Airaldi Rivarola</a></li>
<li><a href="/wiki/Abdel_Azim_Ashry" title="Abdel Azim Ashry">Ashry</a></li>
<li><a href="/wiki/Turgut_Atakol" title="Turgut Atakol">Atakol</a></li>
<li><a href="/wiki/L%C3%A9on_Bouffard" title="Léon Bouffard">Bouffard</a></li>
<li><a href="/wiki/Robert_Busnel" title="Robert Busnel">Busnel</a></li>
<li><a href="/wiki/Dionisio_Calvo" title="Dionisio Calvo">Calvo</a></li>
<li><a href="/wiki/Antonio_dos_Reis_Carneiro" title="Antonio dos Reis Carneiro">Carneiro</a></li>
<li><a href="/wiki/Jos%C3%A9_Claudio_Dos_Reis" class="mw-redirect" title="José Claudio Dos Reis">Dos Reis</a></li>
<li><a href="/wiki/Willard_N._Greim" title="Willard N. Greim">Greim</a></li>
<li><a href="/wiki/Ferenc_Hepp" title="Ferenc Hepp">Hepp</a></li>
<li><a href="/wiki/Renato_William_Jones" title="Renato William Jones">Jones</a></li>
<li><a href="/wiki/George_E._Killian" title="George E. Killian">Killian</a></li>
<li><a href="/wiki/Noah_Klieger" title="Noah Klieger">Klieger</a></li>
<li><a href="/wiki/Marian_Kozlowski" title="Marian Kozlowski">Kozlowski</a></li>
<li><a href="/wiki/Anselmo_L%C3%B3pez_(basketball)" title="Anselmo López (basketball)">López</a></li>
<li><a href="/w/index.php?title=Luis_Mart%C3%ADn_(basketball)&amp;action=edit&amp;redlink=1" class="new" title="Luis Martín (basketball) (page does not exist)">Martín</a></li>
<li><a href="/wiki/James_Naismith" title="James Naismith">Naismith</a></li>
<li><a href="/w/index.php?title=Hans-Joachim_Otto&amp;action=edit&amp;redlink=1" class="new" title="Hans-Joachim Otto (page does not exist)">Otto</a></li>
<li><a href="/wiki/August_Pitzl" title="August Pitzl">Pitzl</a></li>
<li><a href="/wiki/Neboj%C5%A1a_Popovi%C4%87" title="Nebojša Popović">Popović</a></li>
<li><a href="/w/index.php?title=Al_Ramsay&amp;action=edit&amp;redlink=1" class="new" title="Al Ramsay (page does not exist)">Ramsay</a></li>
<li><a href="/wiki/Juan_Antonio_Samaranch" class="mw-redirect" title="Juan Antonio Samaranch">Samaranch</a></li>
<li><a href="/wiki/Radomir_%C5%A0aper" title="Radomir Šaper">Šaper</a></li>
<li><a href="/wiki/Raimundo_Saporta" title="Raimundo Saporta">Saporta</a></li>
<li><a href="/wiki/Decio_Scuri" title="Decio Scuri">Scuri</a></li>
<li><a href="/w/index.php?title=Ernesto_Seguro_de_Luna&amp;action=edit&amp;redlink=1" class="new" title="Ernesto Seguro de Luna (page does not exist)">Seguro de Luna</a></li>
<li><a href="/wiki/Nikolai_Semashko_(basketball)" title="Nikolai Semashko (basketball)">Semashko</a></li>
<li><a href="/wiki/Abdoulaye_Seye" title="Abdoulaye Seye">Seye Moreau</a></li>
<li><a href="/wiki/Borislav_Stankovi%C4%87" title="Borislav Stanković">Stanković</a></li>
<li><a href="/wiki/Ed_Steitz" title="Ed Steitz">Steitz</a></li>
<li><a href="/wiki/David_Stern" title="David Stern">Stern</a></li>
<li><a href="/wiki/Yoshimi_Ueda" title="Yoshimi Ueda">Ueda</a></li>
<li><a href="/w/index.php?title=Aldo_Vitale&amp;action=edit&amp;redlink=1" class="new" title="Aldo Vitale (page does not exist)">Vitale</a></li>
<li><a href="/wiki/Abdel_Moneim_Wahby" title="Abdel Moneim Wahby">Wahby</a></li>
<li><a href="/wiki/Yoon_Duk-joo" title="Yoon Duk-joo">Yoon</a></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks collapsible collapsed navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="col" class="navbox-title" colspan="2" style=";">
<div id="Players_(55)" style="font-size:114%;margin:0 4em">Players (55)</div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/Alexander_Belov" title="Alexander Belov">A. Belov</a></li>
<li><a href="/wiki/Sergei_Belov" title="Sergei Belov">S. Belov</a></li>
<li><a href="/wiki/Miki_Berkovich" title="Miki Berkovich">Berkovich</a></li>
<li><a href="/wiki/Pero_Cameron" title="Pero Cameron">Cameron</a></li>
<li><a href="/wiki/Jacky_Chazalon" title="Jacky Chazalon">Chazalon</a></li>
<li><a href="/wiki/Kre%C5%A1imir_%C4%86osi%C4%87" title="Krešimir Ćosić">Ćosić</a></li>
<li><a href="/wiki/Te%C3%B3filo_Cruz" title="Teófilo Cruz">Cruz</a></li>
<li><a href="/wiki/Dra%C5%BEen_Dalipagi%C4%87" title="Dražen Dalipagić">Dalipagić</a></li>
<li><a href="/wiki/Ivo_Daneu" title="Ivo Daneu">Daneu</a></li>
<li><a href="/wiki/Mirza_Deliba%C5%A1i%C4%87" title="Mirza Delibašić">Delibašić</a></li>
<li><a href="/wiki/Vlade_Divac" title="Vlade Divac">Divac</a></li>
<li><a href="/wiki/Anne_Donovan" title="Anne Donovan">Donovan</a></li>
<li><a href="/wiki/Teresa_Edwards" title="Teresa Edwards">Edwards</a></li>
<li><a href="/wiki/Juan_Antonio_San_Epifanio" title="Juan Antonio San Epifanio">Epi</a></li>
<li><a href="/wiki/Panagiotis_Fasoulas" title="Panagiotis Fasoulas">Fasoulas</a></li>
<li><a href="/wiki/Oscar_Furlong" title="Oscar Furlong">Furlong</a></li>
<li><a href="/wiki/Nikos_Galis" title="Nikos Galis">Galis</a></li>
<li><a href="/wiki/Andrew_Gaze" title="Andrew Gaze">Gaze</a></li>
<li><a href="/wiki/Maria_Paula_Silva" title="Maria Paula Silva">Gonçalves</a></li>
<li><a href="/wiki/Ricardo_Primitivo_Gonz%C3%A1lez" title="Ricardo Primitivo González">González</a></li>
<li><a href="/wiki/Ruperto_Herrera_Tabio" title="Ruperto Herrera Tabio">Herrera</a></li>
<li><a href="/wiki/Jean-Jacques_Concei%C3%A7%C3%A3o" title="Jean-Jacques Conceição">Jean-Jacques</a></li>
<li><a href="/wiki/Michael_Jordan" title="Michael Jordan">Jordan</a></li>
<li><a href="/wiki/Dragan_Ki%C4%87anovi%C4%87" title="Dragan Kićanović">Kićanović</a></li>
<li><a href="/wiki/Radivoj_Kora%C4%87" title="Radivoj Korać">Korać</a></li>
<li><a href="/wiki/Toni_Kuko%C4%8D" title="Toni Kukoč">Kukoč</a></li>
<li><a href="/wiki/Ubiratan_Pereira_Maciel" title="Ubiratan Pereira Maciel">Maciel</a></li>
<li><a href="/wiki/Hort%C3%AAncia_Marcari" title="Hortência Marcari">Marcari</a></li>
<li><a href="/wiki/%C5%A0ar%C5%ABnas_Mar%C4%8Diulionis" title="Šarūnas Marčiulionis">Marčiulionis</a></li>
<li><a href="/wiki/Fernando_Mart%C3%ADn_Espina" title="Fernando Martín Espina">Martín</a></li>
<li><a href="/wiki/Pierluigi_Marzorati" title="Pierluigi Marzorati">Marzorati</a></li>
<li><a href="/wiki/Dino_Meneghin" title="Dino Meneghin">Meneghin</a></li>
<li><a href="/wiki/Ann_Meyers" title="Ann Meyers">Meyers</a></li>
<li><a href="/wiki/Cheryl_Miller" title="Cheryl Miller">Miller</a></li>
<li><a href="/wiki/Razija_Mujanovi%C4%87" title="Razija Mujanović">Mujanović</a></li>
<li><a href="/wiki/Hakeem_Olajuwon" title="Hakeem Olajuwon">Olajuwon</a></li>
<li><a class="mw-selflink selflink">O'Neal</a></li>
<li><a href="/wiki/Amaury_Pasos" title="Amaury Pasos">Pasos</a></li>
<li><a href="/wiki/Dra%C5%BEen_Petrovi%C4%87" title="Dražen Petrović">Petrović</a></li>
<li><a href="/wiki/Manuel_Raga" title="Manuel Raga">Raga</a></li>
<li><a href="/wiki/Antoine_Rigaudeau" title="Antoine Rigaudeau">Rigaudeau</a></li>
<li><a href="/wiki/Oscar_Robertson" title="Oscar Robertson">Robertson</a></li>
<li><a href="/wiki/David_Robinson_(basketball)" title="David Robinson (basketball)">Robinson</a></li>
<li><a href="/wiki/Emiliano_Rodr%C3%ADguez" title="Emiliano Rodríguez">Rodríguez</a></li>
<li><a href="/wiki/Liliana_Ronchetti" title="Liliana Ronchetti">Ronchetti</a></li>
<li><a href="/wiki/Bill_Russell" title="Bill Russell">Russell</a></li>
<li><a href="/wiki/Arvydas_Sabonis" title="Arvydas Sabonis">Sabonis</a></li>
<li><a href="/wiki/Oscar_Schmidt" title="Oscar Schmidt">Schmidt</a></li>
<li><a href="/wiki/Uljana_Semjonova" title="Uljana Semjonova">Semjonova</a></li>
<li><a href="/wiki/Zoran_Slavni%C4%87" title="Zoran Slavnić">Slavnić</a></li>
<li><a href="/wiki/Michele_Timms" title="Michele Timms">Timms</a></li>
<li><a href="/wiki/Vladimir_Tkachenko" title="Vladimir Tkachenko">Tkachenko</a></li>
<li><a href="/wiki/Valdis_Valters" title="Valdis Valters">Valters</a></li>
<li><a href="/wiki/Vanya_Voynova" title="Vanya Voynova">Voynova</a></li>
<li><a href="/wiki/Natalya_Zasulskaya" title="Natalya Zasulskaya">Zasulskaya</a></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks collapsible collapsed navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="col" class="navbox-title" colspan="2" style=";">
<div id="Teams_(1)" style="font-size:114%;margin:0 4em">Teams (1)</div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/wiki/1992_United_States_men%27s_Olympic_basketball_team" title="1992 United States men's Olympic basketball team">1992 United States Olympic Team <i>("The Dream Team")</i></a></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd hlist" style="width:100%;padding:0px">
<div style="padding:0em 0.25em"></div>
<table class="nowraplinks collapsible collapsed navbox-subgroup" style="border-spacing:0">
<tr>
<th scope="col" class="navbox-title" colspan="2" style=";">
<div id="Technical_officials_(14)" style="font-size:114%;margin:0 4em">Technical officials (14)</div>
</th>
</tr>
<tr>
<td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0px">
<div style="padding:0em 0.25em">
<ul>
<li><a href="/w/index.php?title=Artenik_Arabadjian&amp;action=edit&amp;redlink=1" class="new" title="Artenik Arabadjian (page does not exist)">Arabadjian</a></li>
<li><a href="/w/index.php?title=Jim_Bain_(basketball)&amp;action=edit&amp;redlink=1" class="new" title="Jim Bain (basketball) (page does not exist)">Bain</a></li>
<li><a href="/wiki/Obrad_Belo%C5%A1evi%C4%87" title="Obrad Belošević">Belošević</a></li>
<li><a href="/w/index.php?title=Robert_Blanchard&amp;action=edit&amp;redlink=1" class="new" title="Robert Blanchard (page does not exist)">Blanchard</a></li>
<li><a href="/w/index.php?title=Konstantinos_Dimou&amp;action=edit&amp;redlink=1" class="new" title="Konstantinos Dimou (page does not exist)">Dimou</a></li>
<li><a href="/wiki/Mario_Hopenhaym" title="Mario Hopenhaym">Hopenhaym</a></li>
<li><a href="/wiki/Ervin_Kassai" title="Ervin Kassai">Kassai</a></li>
<li><a href="/wiki/Vladimir_Kostin" title="Vladimir Kostin">Kostin</a></li>
<li><a href="/wiki/Valentin_Lazarov" title="Valentin Lazarov">Lazarov</a></li>
<li><a href="/w/index.php?title=Marcel_Pfeuti&amp;action=edit&amp;redlink=1" class="new" title="Marcel Pfeuti (page does not exist)">Pfeuti</a></li>
<li><a href="/wiki/Allen_Rae" title="Allen Rae">Rae</a></li>
<li><a href="/wiki/Pietro_Reverberi" title="Pietro Reverberi">Reverberi</a></li>
<li><a href="/wiki/Costas_Rigas" title="Costas Rigas">Rigas</a></li>
<li><a href="/wiki/Renato_Righetto" title="Renato Righetto">Righetto</a></li>
</ul>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
</div>
</td>
</tr>
</table>
</div>


<!-- 
NewPP limit report
Parsed by mw1337
Cached time: 20180619112757
Cache expiry: 1900800
Dynamic content: false
CPU time usage: 2.908 seconds
Real time usage: 3.270 seconds
Preprocessor visited node count: 21131/1000000
Preprocessor generated node count: 0/1500000
Post‐expand include size: 1501218/2097152 bytes
Template argument size: 426836/2097152 bytes
Highest expansion depth: 15/40
Expensive parser function count: 12/500
Unstrip recursion depth: 0/20
Unstrip post‐expand size: 267875/5000000 bytes
Number of Wikibase entities loaded: 1/400
Lua time usage: 1.330/10.000 seconds
Lua memory usage: 11.56 MB/50 MB
-->
<!--
Transclusion expansion time report (%,ms,calls,template)
100.00% 2553.247      1 -total
 50.61% 1292.081      1 Template:Reflist
 19.22%  490.827    116 Template:Cite_web
 18.33%  468.070      1 Template:Navboxes
 16.79%  428.649     93 Template:Cite_news
 10.80%  275.822      6 Template:Infobox
  9.36%  239.061      1 Template:Infobox_basketball_biography
  8.58%  219.089     31 Template:Navbox
  4.10%  104.806      7 Template:Team_roster_navbox
  2.29%   58.360      1 Template:FIBA_World_Championship_MVP_Award
-->
</div>
<!-- Saved in parser cache with key enwiki:pcache:idhash:147726-0!canonical and timestamp 20180619112754 and revision id 845700100
 -->
<noscript><img src="//en.wikipedia.org/wiki/Special:CentralAutoLogin/start?type=1x1" alt="" title="" width="1" height="1" style="border: none; position: absolute;" /></noscript></div>					<div class="printfooter">
						Retrieved from "<a dir="ltr" href="https://en.wikipedia.org/w/index.php?title=Shaquille_O%27Neal&amp;oldid=845700100">https://en.wikipedia.org/w/index.php?title=Shaquille_O%27Neal&amp;oldid=845700100</a>"					</div>
				<div id="catlinks" class="catlinks" data-mw="interface"><div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="/wiki/Help:Category" title="Help:Category">Categories</a>: <ul><li><a href="/wiki/Category:Shaquille_O%27Neal" title="Category:Shaquille O&#039;Neal">Shaquille O'Neal</a></li><li><a href="/wiki/Category:1972_births" title="Category:1972 births">1972 births</a></li><li><a href="/wiki/Category:Living_people" title="Category:Living people">Living people</a></li><li><a href="/wiki/Category:20th-century_American_businesspeople" title="Category:20th-century American businesspeople">20th-century American businesspeople</a></li><li><a href="/wiki/Category:20th-century_American_male_actors" title="Category:20th-century American male actors">20th-century American male actors</a></li><li><a href="/wiki/Category:20th-century_American_musicians" title="Category:20th-century American musicians">20th-century American musicians</a></li><li><a href="/wiki/Category:21st-century_American_businesspeople" title="Category:21st-century American businesspeople">21st-century American businesspeople</a></li><li><a href="/wiki/Category:21st-century_American_male_actors" title="Category:21st-century American male actors">21st-century American male actors</a></li><li><a href="/wiki/Category:21st-century_American_musicians" title="Category:21st-century American musicians">21st-century American musicians</a></li><li><a href="/wiki/Category:A%26M_Records_artists" title="Category:A&amp;M Records artists">A&amp;M Records artists</a></li><li><a href="/wiki/Category:African-American_basketball_players" title="Category:African-American basketball players">African-American basketball players</a></li><li><a href="/wiki/Category:African-American_investors" title="Category:African-American investors">African-American investors</a></li><li><a href="/wiki/Category:American_investors" title="Category:American investors">American investors</a></li><li><a href="/wiki/Category:African-American_male_actors" title="Category:African-American male actors">African-American male actors</a></li><li><a href="/wiki/Category:African-American_male_rappers" title="Category:African-American male rappers">African-American male rappers</a></li><li><a href="/wiki/Category:African-American_mixed_martial_artists" title="Category:African-American mixed martial artists">African-American mixed martial artists</a></li><li><a href="/wiki/Category:African-American_television_personalities" title="Category:African-American television personalities">African-American television personalities</a></li><li><a href="/wiki/Category:All-American_college_men%27s_basketball_players" title="Category:All-American college men&#039;s basketball players">All-American college men's basketball players</a></li><li><a href="/wiki/Category:American_jujutsuka" title="Category:American jujutsuka">American jujutsuka</a></li><li><a href="/wiki/Category:American_male_film_actors" title="Category:American male film actors">American male film actors</a></li><li><a href="/wiki/Category:American_Muay_Thai_practitioners" title="Category:American Muay Thai practitioners">American Muay Thai practitioners</a></li><li><a href="/wiki/Category:American_municipal_police_officers" title="Category:American municipal police officers">American municipal police officers</a></li><li><a href="/wiki/Category:American_podcasters" title="Category:American podcasters">American podcasters</a></li><li><a href="/wiki/Category:American_real_estate_businesspeople" title="Category:American real estate businesspeople">American real estate businesspeople</a></li><li><a href="/wiki/Category:American_stock_traders" title="Category:American stock traders">American stock traders</a></li><li><a href="/wiki/Category:Barry_University_alumni" title="Category:Barry University alumni">Barry University alumni</a></li><li><a href="/wiki/Category:Basketball_players_at_the_1996_Summer_Olympics" title="Category:Basketball players at the 1996 Summer Olympics">Basketball players at the 1996 Summer Olympics</a></li><li><a href="/wiki/Category:Basketball_players_from_New_Jersey" title="Category:Basketball players from New Jersey">Basketball players from New Jersey</a></li><li><a href="/wiki/Category:Basketball_players_from_Texas" title="Category:Basketball players from Texas">Basketball players from Texas</a></li><li><a href="/wiki/Category:Boston_Celtics_players" title="Category:Boston Celtics players">Boston Celtics players</a></li><li><a href="/wiki/Category:Businesspeople_from_New_Jersey" title="Category:Businesspeople from New Jersey">Businesspeople from New Jersey</a></li><li><a href="/wiki/Category:Businesspeople_from_Texas" title="Category:Businesspeople from Texas">Businesspeople from Texas</a></li><li><a href="/wiki/Category:Businesspeople_in_technology" title="Category:Businesspeople in technology">Businesspeople in technology</a></li><li><a href="/wiki/Category:Centers_(basketball)" title="Category:Centers (basketball)">Centers (basketball)</a></li><li><a href="/wiki/Category:Cleveland_Cavaliers_players" title="Category:Cleveland Cavaliers players">Cleveland Cavaliers players</a></li><li><a href="/wiki/Category:East_Coast_hip_hop_musicians" title="Category:East Coast hip hop musicians">East Coast hip hop musicians</a></li><li><a href="/wiki/Category:ESports_people" title="Category:ESports people">ESports people</a></li><li><a href="/wiki/Category:FIBA_Hall_of_Fame_inductees" title="Category:FIBA Hall of Fame inductees">FIBA Hall of Fame inductees</a></li><li><a href="/wiki/Category:Interscope_Records_artists" title="Category:Interscope Records artists">Interscope Records artists</a></li><li><a href="/wiki/Category:Los_Angeles_Lakers_players" title="Category:Los Angeles Lakers players">Los Angeles Lakers players</a></li><li><a href="/wiki/Category:LSU_Tigers_basketball_players" title="Category:LSU Tigers basketball players">LSU Tigers basketball players</a></li><li><a href="/wiki/Category:Male_actors_from_Newark,_New_Jersey" title="Category:Male actors from Newark, New Jersey">Male actors from Newark, New Jersey</a></li><li><a href="/wiki/Category:Male_actors_from_Texas" title="Category:Male actors from Texas">Male actors from Texas</a></li><li><a href="/wiki/Category:McDonald%27s_High_School_All-Americans" title="Category:McDonald&#039;s High School All-Americans">McDonald's High School All-Americans</a></li><li><a href="/wiki/Category:Medalists_at_the_1996_Summer_Olympics" title="Category:Medalists at the 1996 Summer Olympics">Medalists at the 1996 Summer Olympics</a></li><li><a href="/wiki/Category:Miami_Heat_players" title="Category:Miami Heat players">Miami Heat players</a></li><li><a href="/wiki/Category:Military_brats" title="Category:Military brats">Military brats</a></li><li><a href="/wiki/Category:National_Basketball_Association_All-Stars" title="Category:National Basketball Association All-Stars">National Basketball Association All-Stars</a></li><li><a href="/wiki/Category:National_Basketball_Association_broadcasters" title="Category:National Basketball Association broadcasters">National Basketball Association broadcasters</a></li><li><a href="/wiki/Category:National_Basketball_Association_players_with_retired_numbers" title="Category:National Basketball Association players with retired numbers">National Basketball Association players with retired numbers</a></li><li><a href="/wiki/Category:National_Collegiate_Basketball_Hall_of_Fame_inductees" title="Category:National Collegiate Basketball Hall of Fame inductees">National Collegiate Basketball Hall of Fame inductees</a></li><li><a href="/wiki/Category:New_York_Film_Academy_alumni" title="Category:New York Film Academy alumni">New York Film Academy alumni</a></li><li><a href="/wiki/Category:Olympic_gold_medalists_for_the_United_States_in_basketball" title="Category:Olympic gold medalists for the United States in basketball">Olympic gold medalists for the United States in basketball</a></li><li><a href="/wiki/Category:Orlando_Magic_draft_picks" title="Category:Orlando Magic draft picks">Orlando Magic draft picks</a></li><li><a href="/wiki/Category:Orlando_Magic_players" title="Category:Orlando Magic players">Orlando Magic players</a></li><li><a href="/wiki/Category:Parade_High_School_All-Americans_(boys%27_basketball)" title="Category:Parade High School All-Americans (boys&#039; basketball)">Parade High School All-Americans (boys' basketball)</a></li><li><a href="/wiki/Category:Participants_in_American_reality_television_series" title="Category:Participants in American reality television series">Participants in American reality television series</a></li><li><a href="/wiki/Category:Phoenix_Suns_players" title="Category:Phoenix Suns players">Phoenix Suns players</a></li><li><a href="/wiki/Category:Rappers_from_New_Jersey" title="Category:Rappers from New Jersey">Rappers from New Jersey</a></li><li><a href="/wiki/Category:Rappers_from_Texas" title="Category:Rappers from Texas">Rappers from Texas</a></li><li><a href="/wiki/Category:Sacramento_Kings_owners" title="Category:Sacramento Kings owners">Sacramento Kings owners</a></li><li><a href="/wiki/Category:Sportspeople_from_Newark,_New_Jersey" title="Category:Sportspeople from Newark, New Jersey">Sportspeople from Newark, New Jersey</a></li><li><a href="/wiki/Category:Sportspeople_from_San_Antonio" title="Category:Sportspeople from San Antonio">Sportspeople from San Antonio</a></li><li><a href="/wiki/Category:United_States_men%27s_national_basketball_team_players" title="Category:United States men&#039;s national basketball team players">United States men's national basketball team players</a></li><li><a href="/wiki/Category:University_of_Phoenix_alumni" title="Category:University of Phoenix alumni">University of Phoenix alumni</a></li></ul></div><div id="mw-hidden-catlinks" class="mw-hidden-catlinks mw-hidden-cats-hidden">Hidden categories: <ul><li><a href="/wiki/Category:Webarchive_template_wayback_links" title="Category:Webarchive template wayback links">Webarchive template wayback links</a></li><li><a href="/wiki/Category:All_articles_with_dead_external_links" title="Category:All articles with dead external links">All articles with dead external links</a></li><li><a href="/wiki/Category:Articles_with_dead_external_links_from_September_2016" title="Category:Articles with dead external links from September 2016">Articles with dead external links from September 2016</a></li><li><a href="/wiki/Category:Articles_with_permanently_dead_external_links" title="Category:Articles with permanently dead external links">Articles with permanently dead external links</a></li><li><a href="/wiki/Category:CS1_maint:_Uses_authors_parameter" title="Category:CS1 maint: Uses authors parameter">CS1 maint: Uses authors parameter</a></li><li><a href="/wiki/Category:Articles_with_dead_external_links_from_January_2012" title="Category:Articles with dead external links from January 2012">Articles with dead external links from January 2012</a></li><li><a href="/wiki/Category:Articles_with_dead_external_links_from_March_2018" title="Category:Articles with dead external links from March 2018">Articles with dead external links from March 2018</a></li><li><a href="/wiki/Category:Articles_with_dead_external_links_from_August_2017" title="Category:Articles with dead external links from August 2017">Articles with dead external links from August 2017</a></li><li><a href="/wiki/Category:Wikipedia_indefinitely_move-protected_pages" title="Category:Wikipedia indefinitely move-protected pages">Wikipedia indefinitely move-protected pages</a></li><li><a href="/wiki/Category:Wikipedia_indefinitely_semi-protected_biographies_of_living_people" title="Category:Wikipedia indefinitely semi-protected biographies of living people">Wikipedia indefinitely semi-protected biographies of living people</a></li><li><a href="/wiki/Category:Articles_to_be_expanded_from_November_2017" title="Category:Articles to be expanded from November 2017">Articles to be expanded from November 2017</a></li><li><a href="/wiki/Category:All_articles_with_unsourced_statements" title="Category:All articles with unsourced statements">All articles with unsourced statements</a></li><li><a href="/wiki/Category:Articles_with_unsourced_statements_from_June_2010" title="Category:Articles with unsourced statements from June 2010">Articles with unsourced statements from June 2010</a></li><li><a href="/wiki/Category:Articles_with_hCards" title="Category:Articles with hCards">Articles with hCards</a></li><li><a href="/wiki/Category:Articles_with_unsourced_statements_from_June_2011" title="Category:Articles with unsourced statements from June 2011">Articles with unsourced statements from June 2011</a></li><li><a href="/wiki/Category:Use_mdy_dates_from_May_2017" title="Category:Use mdy dates from May 2017">Use mdy dates from May 2017</a></li></ul></div></div>				<div class="visualClear"></div>
							</div>
		</div>
		<div id="mw-navigation">
			<h2>Navigation menu</h2>
			<div id="mw-head">
									<div id="p-personal" role="navigation" class="" aria-labelledby="p-personal-label">
						<h3 id="p-personal-label">Personal tools</h3>
						<ul>
							<li id="pt-anonuserpage">Not logged in</li><li id="pt-anontalk"><a href="/wiki/Special:MyTalk" title="Discussion about edits from this IP address [n]" accesskey="n">Talk</a></li><li id="pt-anoncontribs"><a href="/wiki/Special:MyContributions" title="A list of edits made from this IP address [y]" accesskey="y">Contributions</a></li><li id="pt-createaccount"><a href="/w/index.php?title=Special:CreateAccount&amp;returnto=Shaquille+O%27Neal" title="You are encouraged to create an account and log in; however, it is not mandatory">Create account</a></li><li id="pt-login"><a href="/w/index.php?title=Special:UserLogin&amp;returnto=Shaquille+O%27Neal" title="You&#039;re encouraged to log in; however, it&#039;s not mandatory. [o]" accesskey="o">Log in</a></li>						</ul>
					</div>
									<div id="left-navigation">
										<div id="p-namespaces" role="navigation" class="vectorTabs" aria-labelledby="p-namespaces-label">
						<h3 id="p-namespaces-label">Namespaces</h3>
						<ul>
							<li id="ca-nstab-main" class="selected"><span><a href="/wiki/Shaquille_O%27Neal" title="View the content page [c]" accesskey="c">Article</a></span></li><li id="ca-talk"><span><a href="/wiki/Talk:Shaquille_O%27Neal" rel="discussion" title="Discussion about the content page [t]" accesskey="t">Talk</a></span></li>						</ul>
					</div>
										<div id="p-variants" role="navigation" class="vectorMenu emptyPortlet" aria-labelledby="p-variants-label">
												<input type="checkbox" class="vectorMenuCheckbox" aria-labelledby="p-variants-label" />
						<h3 id="p-variants-label">
							<span>Variants</span>
						</h3>
						<div class="menu">
							<ul>
															</ul>
						</div>
					</div>
									</div>
				<div id="right-navigation">
										<div id="p-views" role="navigation" class="vectorTabs" aria-labelledby="p-views-label">
						<h3 id="p-views-label">Views</h3>
						<ul>
							<li id="ca-view" class="collapsible selected"><span><a href="/wiki/Shaquille_O%27Neal">Read</a></span></li><li id="ca-viewsource" class="collapsible"><span><a href="/w/index.php?title=Shaquille_O%27Neal&amp;action=edit" title="This page is protected.&#10;You can view its source [e]" accesskey="e">View source</a></span></li><li id="ca-history" class="collapsible"><span><a href="/w/index.php?title=Shaquille_O%27Neal&amp;action=history" title="Past revisions of this page [h]" accesskey="h">View history</a></span></li>						</ul>
					</div>
										<div id="p-cactions" role="navigation" class="vectorMenu emptyPortlet" aria-labelledby="p-cactions-label">
						<input type="checkbox" class="vectorMenuCheckbox" aria-labelledby="p-cactions-label" />
						<h3 id="p-cactions-label"><span>More</span></h3>
						<div class="menu">
							<ul>
															</ul>
						</div>
					</div>
										<div id="p-search" role="search">
						<h3>
							<label for="searchInput">Search</label>
						</h3>
						<form action="/w/index.php" id="searchform">
							<div id="simpleSearch">
								<input type="search" name="search" placeholder="Search Wikipedia" title="Search Wikipedia [f]" accesskey="f" id="searchInput"/><input type="hidden" value="Special:Search" name="title"/><input type="submit" name="fulltext" value="Search" title="Search Wikipedia for this text" id="mw-searchButton" class="searchButton mw-fallbackSearchButton"/><input type="submit" name="go" value="Go" title="Go to a page with this exact name if it exists" id="searchButton" class="searchButton"/>							</div>
						</form>
					</div>
									</div>
			</div>
			<div id="mw-panel">
				<div id="p-logo" role="banner"><a class="mw-wiki-logo" href="/wiki/Main_Page"  title="Visit the main page"></a></div>
						<div class="portal" role="navigation" id="p-navigation" aria-labelledby="p-navigation-label">
			<h3 id="p-navigation-label">Navigation</h3>
			<div class="body">
								<ul>
					<li id="n-mainpage-description"><a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z">Main page</a></li><li id="n-contents"><a href="/wiki/Portal:Contents" title="Guides to browsing Wikipedia">Contents</a></li><li id="n-featuredcontent"><a href="/wiki/Portal:Featured_content" title="Featured content – the best of Wikipedia">Featured content</a></li><li id="n-currentevents"><a href="/wiki/Portal:Current_events" title="Find background information on current events">Current events</a></li><li id="n-randompage"><a href="/wiki/Special:Random" title="Load a random article [x]" accesskey="x">Random article</a></li><li id="n-sitesupport"><a href="https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en" title="Support us">Donate to Wikipedia</a></li><li id="n-shoplink"><a href="//shop.wikimedia.org" title="Visit the Wikipedia store">Wikipedia store</a></li>				</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id="p-interaction" aria-labelledby="p-interaction-label">
			<h3 id="p-interaction-label">Interaction</h3>
			<div class="body">
								<ul>
					<li id="n-help"><a href="/wiki/Help:Contents" title="Guidance on how to use and edit Wikipedia">Help</a></li><li id="n-aboutsite"><a href="/wiki/Wikipedia:About" title="Find out about Wikipedia">About Wikipedia</a></li><li id="n-portal"><a href="/wiki/Wikipedia:Community_portal" title="About the project, what you can do, where to find things">Community portal</a></li><li id="n-recentchanges"><a href="/wiki/Special:RecentChanges" title="A list of recent changes in the wiki [r]" accesskey="r">Recent changes</a></li><li id="n-contactpage"><a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us" title="How to contact Wikipedia">Contact page</a></li>				</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id="p-tb" aria-labelledby="p-tb-label">
			<h3 id="p-tb-label">Tools</h3>
			<div class="body">
								<ul>
					<li id="t-whatlinkshere"><a href="/wiki/Special:WhatLinksHere/Shaquille_O%27Neal" title="List of all English Wikipedia pages containing links to this page [j]" accesskey="j">What links here</a></li><li id="t-recentchangeslinked"><a href="/wiki/Special:RecentChangesLinked/Shaquille_O%27Neal" rel="nofollow" title="Recent changes in pages linked from this page [k]" accesskey="k">Related changes</a></li><li id="t-upload"><a href="/wiki/Wikipedia:File_Upload_Wizard" title="Upload files [u]" accesskey="u">Upload file</a></li><li id="t-specialpages"><a href="/wiki/Special:SpecialPages" title="A list of all special pages [q]" accesskey="q">Special pages</a></li><li id="t-permalink"><a href="/w/index.php?title=Shaquille_O%27Neal&amp;oldid=845700100" title="Permanent link to this revision of the page">Permanent link</a></li><li id="t-info"><a href="/w/index.php?title=Shaquille_O%27Neal&amp;action=info" title="More information about this page">Page information</a></li><li id="t-wikibase"><a href="https://www.wikidata.org/wiki/Special:EntityPage/Q169452" title="Link to connected data repository item [g]" accesskey="g">Wikidata item</a></li><li id="t-cite"><a href="/w/index.php?title=Special:CiteThisPage&amp;page=Shaquille_O%27Neal&amp;id=845700100" title="Information on how to cite this page">Cite this page</a></li>				</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id="p-coll-print_export" aria-labelledby="p-coll-print_export-label">
			<h3 id="p-coll-print_export-label">Print/export</h3>
			<div class="body">
								<ul>
					<li id="coll-create_a_book"><a href="/w/index.php?title=Special:Book&amp;bookcmd=book_creator&amp;referer=Shaquille+O%27Neal">Create a book</a></li><li id="coll-download-as-rdf2latex"><a href="/w/index.php?title=Special:ElectronPdf&amp;page=Shaquille+O%27Neal&amp;action=show-download-screen">Download as PDF</a></li><li id="t-print"><a href="/w/index.php?title=Shaquille_O%27Neal&amp;printable=yes" title="Printable version of this page [p]" accesskey="p">Printable version</a></li>				</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id="p-wikibase-otherprojects" aria-labelledby="p-wikibase-otherprojects-label">
			<h3 id="p-wikibase-otherprojects-label">In other projects</h3>
			<div class="body">
								<ul>
					<li class="wb-otherproject-link wb-otherproject-commons"><a href="https://commons.wikimedia.org/wiki/Category:Shaquille_O%27Neal" hreflang="en">Wikimedia Commons</a></li><li class="wb-otherproject-link wb-otherproject-wikiquote"><a href="https://en.wikiquote.org/wiki/Shaquille_O%27Neal" hreflang="en">Wikiquote</a></li>				</ul>
							</div>
		</div>
			<div class="portal" role="navigation" id="p-lang" aria-labelledby="p-lang-label">
			<h3 id="p-lang-label">Languages</h3>
			<div class="body">
								<ul>
					<li class="interlanguage-link interwiki-ar"><a href="https://ar.wikipedia.org/wiki/%D8%B4%D8%A7%D9%83%D9%8A%D9%84_%D8%A3%D9%88%D9%86%D9%8A%D9%84" title="شاكيل أونيل – Arabic" lang="ar" hreflang="ar" class="interlanguage-link-target">العربية</a></li><li class="interlanguage-link interwiki-azb"><a href="https://azb.wikipedia.org/wiki/%D8%B4%DA%A9%DB%8C%D9%84_%D8%A7%D9%88%D9%86%DB%8C%D9%84" title="شکیل اونیل – South Azerbaijani" lang="azb" hreflang="azb" class="interlanguage-link-target">تۆرکجه</a></li><li class="interlanguage-link interwiki-bn"><a href="https://bn.wikipedia.org/wiki/%E0%A6%B6%E0%A6%BE%E0%A6%95%E0%A6%BF%E0%A6%B2_%E0%A6%93%27%E0%A6%A8%E0%A6%BF%E0%A6%B2" title="শাকিল ও&#039;নিল – Bangla" lang="bn" hreflang="bn" class="interlanguage-link-target">বাংলা</a></li><li class="interlanguage-link interwiki-zh-min-nan"><a href="https://zh-min-nan.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Chinese (Min Nan)" lang="zh-min-nan" hreflang="zh-min-nan" class="interlanguage-link-target">Bân-lâm-gú</a></li><li class="interlanguage-link interwiki-be"><a href="https://be.wikipedia.org/wiki/%D0%A8%D0%B0%D0%BA%D1%96%D0%BB_%D0%9E%E2%80%99%D0%9D%D1%96%D0%BB" title="Шакіл О’Ніл – Belarusian" lang="be" hreflang="be" class="interlanguage-link-target">Беларуская</a></li><li class="interlanguage-link interwiki-bg"><a href="https://bg.wikipedia.org/wiki/%D0%A8%D0%B0%D0%BA%D0%B8%D0%BB_%D0%9E%27%D0%9D%D0%B8%D0%B9%D0%BB" title="Шакил О&#039;Нийл – Bulgarian" lang="bg" hreflang="bg" class="interlanguage-link-target">Български</a></li><li class="interlanguage-link interwiki-bs"><a href="https://bs.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Bosnian" lang="bs" hreflang="bs" class="interlanguage-link-target">Bosanski</a></li><li class="interlanguage-link interwiki-ca"><a href="https://ca.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Catalan" lang="ca" hreflang="ca" class="interlanguage-link-target">Català</a></li><li class="interlanguage-link interwiki-cs"><a href="https://cs.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Czech" lang="cs" hreflang="cs" class="interlanguage-link-target">Čeština</a></li><li class="interlanguage-link interwiki-da"><a href="https://da.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Danish" lang="da" hreflang="da" class="interlanguage-link-target">Dansk</a></li><li class="interlanguage-link interwiki-de"><a href="https://de.wikipedia.org/wiki/Shaquille_O%E2%80%99Neal" title="Shaquille O’Neal – German" lang="de" hreflang="de" class="interlanguage-link-target">Deutsch</a></li><li class="interlanguage-link interwiki-et"><a href="https://et.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Estonian" lang="et" hreflang="et" class="interlanguage-link-target">Eesti</a></li><li class="interlanguage-link interwiki-el"><a href="https://el.wikipedia.org/wiki/%CE%A3%CE%B1%CE%BA%CE%AF%CE%BB_%CE%9F%27%CE%9D%CE%B9%CE%BB" title="Σακίλ Ο&#039;Νιλ – Greek" lang="el" hreflang="el" class="interlanguage-link-target">Ελληνικά</a></li><li class="interlanguage-link interwiki-es"><a href="https://es.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Spanish" lang="es" hreflang="es" class="interlanguage-link-target">Español</a></li><li class="interlanguage-link interwiki-eu"><a href="https://eu.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Basque" lang="eu" hreflang="eu" class="interlanguage-link-target">Euskara</a></li><li class="interlanguage-link interwiki-fa"><a href="https://fa.wikipedia.org/wiki/%D8%B4%DA%A9%DB%8C%D9%84_%D8%A7%D9%88%D9%86%DB%8C%D9%84" title="شکیل اونیل – Persian" lang="fa" hreflang="fa" class="interlanguage-link-target">فارسی</a></li><li class="interlanguage-link interwiki-fr"><a href="https://fr.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – French" lang="fr" hreflang="fr" class="interlanguage-link-target">Français</a></li><li class="interlanguage-link interwiki-gl"><a href="https://gl.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Galician" lang="gl" hreflang="gl" class="interlanguage-link-target">Galego</a></li><li class="interlanguage-link interwiki-ko"><a href="https://ko.wikipedia.org/wiki/%EC%83%A4%ED%82%AC_%EC%98%A4%EB%8B%90" title="샤킬 오닐 – Korean" lang="ko" hreflang="ko" class="interlanguage-link-target">한국어</a></li><li class="interlanguage-link interwiki-hy"><a href="https://hy.wikipedia.org/wiki/%D5%87%D5%A1%D6%84%D5%AB%D5%AC_%D5%95%27%D5%86%D5%AB%D5%AC" title="Շաքիլ Օ&#039;Նիլ – Armenian" lang="hy" hreflang="hy" class="interlanguage-link-target">Հայերեն</a></li><li class="interlanguage-link interwiki-hr"><a href="https://hr.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Croatian" lang="hr" hreflang="hr" class="interlanguage-link-target">Hrvatski</a></li><li class="interlanguage-link interwiki-io"><a href="https://io.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Ido" lang="io" hreflang="io" class="interlanguage-link-target">Ido</a></li><li class="interlanguage-link interwiki-id"><a href="https://id.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Indonesian" lang="id" hreflang="id" class="interlanguage-link-target">Bahasa Indonesia</a></li><li class="interlanguage-link interwiki-is"><a href="https://is.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Icelandic" lang="is" hreflang="is" class="interlanguage-link-target">Íslenska</a></li><li class="interlanguage-link interwiki-it"><a href="https://it.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Italian" lang="it" hreflang="it" class="interlanguage-link-target">Italiano</a></li><li class="interlanguage-link interwiki-he"><a href="https://he.wikipedia.org/wiki/%D7%A9%D7%90%D7%A7%D7%99%D7%9C_%D7%90%D7%95%D7%A0%D7%99%D7%9C" title="שאקיל אוניל – Hebrew" lang="he" hreflang="he" class="interlanguage-link-target">עברית</a></li><li class="interlanguage-link interwiki-ka"><a href="https://ka.wikipedia.org/wiki/%E1%83%A8%E1%83%90%E1%83%99%E1%83%98%E1%83%9A_%E1%83%9D%E2%80%99%E1%83%9C%E1%83%98%E1%83%9A%E1%83%98" title="შაკილ ო’ნილი – Georgian" lang="ka" hreflang="ka" class="interlanguage-link-target">ქართული</a></li><li class="interlanguage-link interwiki-lv"><a href="https://lv.wikipedia.org/wiki/%C5%A0akils_O%27N%C4%ABls" title="Šakils O&#039;Nīls – Latvian" lang="lv" hreflang="lv" class="interlanguage-link-target">Latviešu</a></li><li class="interlanguage-link interwiki-lb"><a href="https://lb.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Luxembourgish" lang="lb" hreflang="lb" class="interlanguage-link-target">Lëtzebuergesch</a></li><li class="interlanguage-link interwiki-lt"><a href="https://lt.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Lithuanian" lang="lt" hreflang="lt" class="interlanguage-link-target">Lietuvių</a></li><li class="interlanguage-link interwiki-hu"><a href="https://hu.wikipedia.org/wiki/Shaquille_O%E2%80%99Neal" title="Shaquille O’Neal – Hungarian" lang="hu" hreflang="hu" class="interlanguage-link-target">Magyar</a></li><li class="interlanguage-link interwiki-mk"><a href="https://mk.wikipedia.org/wiki/%D0%A8%D0%B5%D0%BA%D0%B8%D0%BB_%D0%9E%E2%80%99%D0%9D%D0%B8%D0%BB" title="Шекил О’Нил – Macedonian" lang="mk" hreflang="mk" class="interlanguage-link-target">Македонски</a></li><li class="interlanguage-link interwiki-mg"><a href="https://mg.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Malagasy" lang="mg" hreflang="mg" class="interlanguage-link-target">Malagasy</a></li><li class="interlanguage-link interwiki-mn"><a href="https://mn.wikipedia.org/wiki/%D0%A8%D0%B0%D0%BA%D0%B8%D0%BB_%D0%9E%27%D0%9D%D0%B8%D0%BB" title="Шакил О&#039;Нил – Mongolian" lang="mn" hreflang="mn" class="interlanguage-link-target">Монгол</a></li><li class="interlanguage-link interwiki-nl"><a href="https://nl.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Dutch" lang="nl" hreflang="nl" class="interlanguage-link-target">Nederlands</a></li><li class="interlanguage-link interwiki-ja"><a href="https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%A3%E3%82%AD%E3%83%BC%E3%83%AB%E3%83%BB%E3%82%AA%E3%83%8B%E3%83%BC%E3%83%AB" title="シャキール・オニール – Japanese" lang="ja" hreflang="ja" class="interlanguage-link-target">日本語</a></li><li class="interlanguage-link interwiki-no"><a href="https://no.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Norwegian" lang="no" hreflang="no" class="interlanguage-link-target">Norsk</a></li><li class="interlanguage-link interwiki-pl"><a href="https://pl.wikipedia.org/wiki/Shaquille_O%E2%80%99Neal" title="Shaquille O’Neal – Polish" lang="pl" hreflang="pl" class="interlanguage-link-target">Polski</a></li><li class="interlanguage-link interwiki-pt badge-Q17437798 badge-goodarticle" title="good article"><a href="https://pt.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Portuguese" lang="pt" hreflang="pt" class="interlanguage-link-target">Português</a></li><li class="interlanguage-link interwiki-ro"><a href="https://ro.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Romanian" lang="ro" hreflang="ro" class="interlanguage-link-target">Română</a></li><li class="interlanguage-link interwiki-qu"><a href="https://qu.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Quechua" lang="qu" hreflang="qu" class="interlanguage-link-target">Runa Simi</a></li><li class="interlanguage-link interwiki-ru"><a href="https://ru.wikipedia.org/wiki/%D0%9E%E2%80%99%D0%9D%D0%B8%D0%BB,_%D0%A8%D0%B0%D0%BA%D0%B8%D0%BB" title="О’Нил, Шакил – Russian" lang="ru" hreflang="ru" class="interlanguage-link-target">Русский</a></li><li class="interlanguage-link interwiki-sco"><a href="https://sco.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Scots" lang="sco" hreflang="sco" class="interlanguage-link-target">Scots</a></li><li class="interlanguage-link interwiki-simple"><a href="https://simple.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Simple English" lang="simple" hreflang="simple" class="interlanguage-link-target">Simple English</a></li><li class="interlanguage-link interwiki-sk"><a href="https://sk.wikipedia.org/wiki/Shaquille_O%E2%80%99Neal" title="Shaquille O’Neal – Slovak" lang="sk" hreflang="sk" class="interlanguage-link-target">Slovenčina</a></li><li class="interlanguage-link interwiki-sl"><a href="https://sl.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Slovenian" lang="sl" hreflang="sl" class="interlanguage-link-target">Slovenščina</a></li><li class="interlanguage-link interwiki-sr"><a href="https://sr.wikipedia.org/wiki/%D0%A8%D0%B0%D0%BA%D0%B8%D0%BB_%D0%9E%27%D0%9D%D0%B8%D0%BB" title="Шакил О&#039;Нил – Serbian" lang="sr" hreflang="sr" class="interlanguage-link-target">Српски / srpski</a></li><li class="interlanguage-link interwiki-sh"><a href="https://sh.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Serbo-Croatian" lang="sh" hreflang="sh" class="interlanguage-link-target">Srpskohrvatski / српскохрватски</a></li><li class="interlanguage-link interwiki-fi"><a href="https://fi.wikipedia.org/wiki/Shaquille_O%E2%80%99Neal" title="Shaquille O’Neal – Finnish" lang="fi" hreflang="fi" class="interlanguage-link-target">Suomi</a></li><li class="interlanguage-link interwiki-sv"><a href="https://sv.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Swedish" lang="sv" hreflang="sv" class="interlanguage-link-target">Svenska</a></li><li class="interlanguage-link interwiki-ta"><a href="https://ta.wikipedia.org/wiki/%E0%AE%9A%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AF%80%E0%AE%B2%E0%AF%8D_%E0%AE%93%E0%AE%A9%E0%AF%80%E0%AE%B2%E0%AF%8D" title="சக்கீல் ஓனீல் – Tamil" lang="ta" hreflang="ta" class="interlanguage-link-target">தமிழ்</a></li><li class="interlanguage-link interwiki-th"><a href="https://th.wikipedia.org/wiki/%E0%B9%81%E0%B8%8A%E0%B8%84%E0%B8%B4%E0%B8%A5_%E0%B9%82%E0%B8%AD%E0%B8%99%E0%B8%B5%E0%B8%A5" title="แชคิล โอนีล – Thai" lang="th" hreflang="th" class="interlanguage-link-target">ไทย</a></li><li class="interlanguage-link interwiki-tr"><a href="https://tr.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Turkish" lang="tr" hreflang="tr" class="interlanguage-link-target">Türkçe</a></li><li class="interlanguage-link interwiki-uk"><a href="https://uk.wikipedia.org/wiki/%D0%A8%D0%B0%D0%BA%D1%96%D0%BB_%D0%9E%27%D0%9D%D1%96%D0%BB" title="Шакіл О&#039;Ніл – Ukrainian" lang="uk" hreflang="uk" class="interlanguage-link-target">Українська</a></li><li class="interlanguage-link interwiki-vi"><a href="https://vi.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Vietnamese" lang="vi" hreflang="vi" class="interlanguage-link-target">Tiếng Việt</a></li><li class="interlanguage-link interwiki-vo"><a href="https://vo.wikipedia.org/wiki/Shaquille_O%27Neal" title="Shaquille O&#039;Neal – Volapük" lang="vo" hreflang="vo" class="interlanguage-link-target">Volapük</a></li><li class="interlanguage-link interwiki-zh"><a href="https://zh.wikipedia.org/wiki/%E6%B2%99%E5%A5%8E%E5%B0%94%C2%B7%E5%A5%A5%E5%B0%BC%E5%B0%94" title="沙奎尔·奥尼尔 – Chinese" lang="zh" hreflang="zh" class="interlanguage-link-target">中文</a></li>				</ul>
				<div class="after-portlet after-portlet-lang"><span class="wb-langlinks-edit wb-langlinks-link"><a href="https://www.wikidata.org/wiki/Special:EntityPage/Q169452#sitelinks-wikipedia" title="Edit interlanguage links" class="wbc-editpage">Edit links</a></span></div>			</div>
		</div>
				</div>
		</div>
				<div id="footer" role="contentinfo">
						<ul id="footer-info">
								<li id="footer-info-lastmod"> This page was last edited on 13 June 2018, at 15:12<span class="anonymous-show"> (UTC)</span>.</li>
								<li id="footer-info-copyright">Text is available under the <a rel="license" href="//en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License">Creative Commons Attribution-ShareAlike License</a><a rel="license" href="//creativecommons.org/licenses/by-sa/3.0/" style="display:none;"></a>;
additional terms may apply.  By using this site, you agree to the <a href="//wikimediafoundation.org/wiki/Terms_of_Use">Terms of Use</a> and <a href="//wikimediafoundation.org/wiki/Privacy_policy">Privacy Policy</a>. Wikipedia® is a registered trademark of the <a href="//www.wikimediafoundation.org/">Wikimedia Foundation, Inc.</a>, a non-profit organization.</li>
							</ul>
						<ul id="footer-places">
								<li id="footer-places-privacy"><a href="https://wikimediafoundation.org/wiki/Privacy_policy" class="extiw" title="wmf:Privacy policy">Privacy policy</a></li>
								<li id="footer-places-about"><a href="/wiki/Wikipedia:About" title="Wikipedia:About">About Wikipedia</a></li>
								<li id="footer-places-disclaimer"><a href="/wiki/Wikipedia:General_disclaimer" title="Wikipedia:General disclaimer">Disclaimers</a></li>
								<li id="footer-places-contact"><a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us">Contact Wikipedia</a></li>
								<li id="footer-places-developers"><a href="https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute">Developers</a></li>
								<li id="footer-places-cookiestatement"><a href="https://wikimediafoundation.org/wiki/Cookie_statement">Cookie statement</a></li>
								<li id="footer-places-mobileview"><a href="//en.m.wikipedia.org/w/index.php?title=Shaquille_O%27Neal&amp;mobileaction=toggle_view_mobile" class="noprint stopMobileRedirectToggle">Mobile view</a></li>
							</ul>
										<ul id="footer-icons" class="noprint">
										<li id="footer-copyrightico">
						<a href="https://wikimediafoundation.org/"><img src="/static/images/wikimedia-button.png" srcset="/static/images/wikimedia-button-1.5x.png 1.5x, /static/images/wikimedia-button-2x.png 2x" width="88" height="31" alt="Wikimedia Foundation"/></a>					</li>
										<li id="footer-poweredbyico">
						<a href="//www.mediawiki.org/"><img src="/static/images/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" srcset="/static/images/poweredby_mediawiki_132x47.png 1.5x, /static/images/poweredby_mediawiki_176x62.png 2x" width="88" height="31"/></a>					</li>
									</ul>
						<div style="clear: both;"></div>
		</div>
		
<script>(window.RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgPageParseReport":{"limitreport":{"cputime":"2.908","walltime":"3.270","ppvisitednodes":{"value":21131,"limit":1000000},"ppgeneratednodes":{"value":0,"limit":1500000},"postexpandincludesize":{"value":1501218,"limit":2097152},"templateargumentsize":{"value":426836,"limit":2097152},"expansiondepth":{"value":15,"limit":40},"expensivefunctioncount":{"value":12,"limit":500},"unstrip-depth":{"value":0,"limit":20},"unstrip-size":{"value":267875,"limit":5000000},"entityaccesscount":{"value":1,"limit":400},"timingprofile":["100.00% 2553.247      1 -total"," 50.61% 1292.081      1 Template:Reflist"," 19.22%  490.827    116 Template:Cite_web"," 18.33%  468.070      1 Template:Navboxes"," 16.79%  428.649     93 Template:Cite_news"," 10.80%  275.822      6 Template:Infobox","  9.36%  239.061      1 Template:Infobox_basketball_biography","  8.58%  219.089     31 Template:Navbox","  4.10%  104.806      7 Template:Team_roster_navbox","  2.29%   58.360      1 Template:FIBA_World_Championship_MVP_Award"]},"scribunto":{"limitreport-timeusage":{"value":"1.330","limit":"10.000"},"limitreport-memusage":{"value":12116414,"limit":52428800}},"cachereport":{"origin":"mw1337","timestamp":"20180619112757","ttl":1900800,"transientcontent":false}}});mw.config.set({"wgBackendResponseTime":105,"wgHostname":"mw1262"});});</script>
	</body>
</html>

`;


function findInWikiRu(value) {
    var options = {
          method: 'GET',
          uri: 'https://ru.wikipedia.org/wiki/' + encodeURIComponent(value)
        };
    request(options, (err, response, body) => {
      if (err) throw err;
	  	  
	  console.log(Ru(body));
	  // найти когда и где родился и умер и вывести на экран
	  
    });
}

function findInWikiEn(value) {
    var options = {
          method: 'GET',
          uri: 'https://en.wikipedia.org/wiki/' + encodeURIComponent(value)
        };
    request(options, (err, response, body) => {
      if (err) throw err;
	  	  
	  console.log(En(body));
	  // найти когда и где родился и умер и вывести на экран
	  
    });
}

function Ru(body) {
	  var born = 'Родившиеся ';
	  var dayBornStart = body.indexOf(born) + born.length;
	  var dayBornFin = body.indexOf('"', dayBornStart + 1);
	  var yearBornStart = body.indexOf(born, dayBornFin + 1) + born.length - 1;
	  var yearBornFin = body.indexOf('"', yearBornStart + 1);
	  var cityBornStart = body.indexOf(born, yearBornFin + 1) + born.length - 1;
	  var cityBornFin = body.indexOf('"', cityBornStart + 1);
	  
	  
	  var dayBorn = body.substring(dayBornStart, dayBornFin);
	  var yearBorn = body.substring(yearBornStart, yearBornFin);
	  var cityBorn = body. substring(cityBornStart, cityBornFin);
	  var die = 'Умершие ';
	  
	  if (body.indexOf(die) === -1) {
		return result1 = 'Родился ' + dayBorn + yearBorn + cityBorn + '. Жив по сей день.';
	  } else {
		  var dayDieStart = body.indexOf(die) + die.length;
		  var dayDieFin = body.indexOf('"', dayDieStart + 1);
		  var yearDieStart = body.indexOf(die, dayDieFin + 1) + die.length - 1;
		  var yearDieFin = body.indexOf('"', yearDieStart + 1);
		  var cityDieStart = body.indexOf(die, yearDieFin + 1) + die.length - 1;
		  var cityDieFin = body.indexOf('"', cityDieStart + 1);
		  
		  var dayDie = body.substring(dayDieStart, dayDieFin);
		  var yearDie = body.substring(yearDieStart, yearDieFin);
		  var cityDie = body.substring(cityDieStart, cityDieFin);
		  return result2 = 'Родился ' + dayBorn + yearBorn + cityBorn + '. Умер ' + dayDie + yearDie + cityDie + '.';
	  }	  
}

function En(body) {
	  var born = '</span>)</span>';
	  var dayBornStart = body.indexOf(born) + born.length;
	  var dayBornFin = body.indexOf('<', dayBornStart + 1);
	  
	  var city = 'title="'
	  var cityBornStart = body.indexOf(city, dayBornFin + 1) + city.length; 		
	  var cityBornFin = body.indexOf('"', cityBornStart + 1);

	  var dayBorn = body.substring(dayBornStart, dayBornFin);
	  dayBorn.trim();
	  var cityBorn = body. substring(cityBornStart, cityBornFin);
	  cityBorn.trim();
	  var die = '"row">Died</th>';	  
	  if (body.indexOf(die) === -1) {
		return result1 = 'Was born ' + dayBorn + cityBorn + '. Alive.';
	  } else {
		  var dayDieStart = body.indexOf(die) + die.length + 5;
		  var dayDieFin = body.indexOf('<', dayDieStart + 1);
		  
		  var cityDieStart = body.indexOf(city, dayDieFin + 1) + die.length - 1;
		  var cityDieFin = body.indexOf('"', cityDieStart + 1);
		  
		  var dayDie = body.substring(dayDieStart, dayDieFin);
		  dayDie.trim();
		  var cityDie = body.substring(cityDieStart, cityDieFin);
		  cityDie.trim();
		  return result2 = 'Was born ' + dayBorn + ', '+ cityBorn + '. Died ' + dayDie + ', '+ cityDie + '.';
	  }	  
}
function findInWiki(lang, name) {
	if (lang === 'En'){
		findInWikiEn(name);
	} else if (lang === 'Ru'){
		findInWikiRu(name);
	} else {"I don't know this language."}
}

findInWikiEn('Jimi_Hendrix');
findInWikiEn('Albert_Einstein');
findInWikiEn('Bob_Marley');
findInWikiEn('Takeshi_Kitano');
//console.log(En(source));

findInWiki('Ru', 'Щуко,_Владимир_Алексеевич');
findInWiki('En', 'Peter_the_Great');
//findInWiki('Колли,_Николай_Джемсович');
//findInWiki('Кернес,_Геннадий_Адольфович');