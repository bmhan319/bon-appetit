(function() { function bxBootstrap() {
	if (!(window.bouncex&&bouncex.website)) {
		var pushedData = [];
		if(window.bouncex && bouncex.push && bouncex.length){
			pushedData = bouncex;
		}
		window.bouncex = {};
		bouncex.pushedData = pushedData;
		bouncex.website = {"id":2809,"cookie_name":"bounceClientVisit2809","domain":"bonappetit.com","ct":"bind_to_domain","uwc":1,"ally":1,"ei":0,"tcjs":"","cjs":"(function () {\n\twindow.bouncex = window.bouncex || {};\n\n\twindow.bouncex.addAllyFeatures = function (params) {\n\t\tif (!params || !params.campaignId ) { return false; }\n\n\t\tvar $campaign = window.bouncex.campaigns[params.campaignId].obj1;\n\n         /* focus on first actionable element*/\n        if((!bouncex.browser.android && !bouncex.browser.iphone && !bouncex.browser.ipad) || !params.eCap) {\n            $campaign.find('form').addClass('bx-ally-no-focus');\n        }\n        \n        $campaign.find('.bx-close').attr('role','button');\n\n\t\tparams.steps.forEach(function (step, i) {\n            var $step = $campaign.find('.bx-step-'+step.step_number);\n\n            /* Associate microcopy with input */\n            if(step.hasMicroCopy){\n                var $inputRow = $step.find('.bx-row-input'),\n                    $emailInput = params.eCap ? $inputRow.find('input[type=\"email\"]') : $inputRow.find('input'),\n                    $micro = $step.find('.bx-group-micro'),\n                    privacyPolicyIds = '';\n                \n                if($emailInput.length > 0 && $micro.length > 0){\n                    $micro.find('.bx-row-text >*:first-child p').each(function(x,y){\n                        var privacyPolicyId = 'bx-micro-'+params.campaignId+'-'+(x+1)+'-step-' + (i+1);\n                        y.setAttribute('id', privacyPolicyId);\n                        y.setAttribute('tabindex', '-1');\n                        privacyPolicyIds +=  privacyPolicyId + ' ';\n                    });\n                    var validationID = $inputRow.find('.bx-vtext').attr('tabindex', '-1').text('').attr('id');\n                    $emailInput.attr('aria-describedby', privacyPolicyIds + validationID);\n                }\n            }\n\n            /* If there's a next step ... */\n            if(params.steps[i+1]){\n                var $nextStep = $campaign.find('.bx-step-'+(step.step_number+1));\n                bouncex.on($step.find('.bx-row-submit:not(.bx-row-submit-no) .bx-button:eq(0)'), 'click.bx-'+params.campaignId, function(){\n                    bouncex.document.bind('bxValidateFormComplete', function(e){\n                        if(!e.response || !e.response.errors || e.response.errors.length === 0){\n                            $campaign.removeAttr('role');\n                            var step2labelID = $nextStep.find('.bx-row-image-logo h2').attr('id'),\n                                step2descrID = $nextStep.find('.bx-group-primary').attr('id');\n                            $campaign.attr({'aria-labelledby' : step2labelID, 'aria-describedby': step2descrID});\n                            $campaign.attr('role', 'dialog');\n                        } \n                    });\n                    bouncex.submitCampaignStep(params.campaignId);\n                });\n            }\n\t\t});\n\n\t};\n\n})();\n\n// PD: https://www.wrike.com/open.htm?id=322595888\nbouncex.report_ga = function(action, label, bypass) {\n    var parsedAction = action.replace(/[a-z]/, function(letter) { return letter.toUpperCase(); });\n    if (window.dataLayer) {\n        window.dataLayer.push({'event': 'BounceX '+parsedAction, 'bouncex-action':label});\n    }\n};\n\n","force_https":false,"waypoints":false,"content_width":900,"gai":"","swids":"","sd":0,"ljq":"auto","campaign_id":0,"is_preview":false,"aco":{"first_party_limit":"3500","local_storage":"1"},"cmp":{"gdpr":1,"gmp":0,"whitelist_check":0},"burls":[{"prop":"contains","val":"video.bonappetit"}],"ple":false,"fbe":true,"mas":2,"map":1,"gar":true,"ete":1,"ettm":true,"etjs":"","dge":false,"bxidLoadFirst":false,"gbi_enabled":1,"gbi":{"rblocks":[4651084201,4651084216,4651317293,4651317332,4651317824,4735153655,4735153664,4735153670,4817429412,4817996357,4831675828,4831684552,4831764369,4831778346,4832483174,4877265733,4915241953,4915532791,4915538131,4966409508,4988665102,5019324219,5019334009,5021654286,5021787358,5021826417,5021940928,5022036455,5022046964,5022047213,5025824861,5026690027,5030275855,5030284702,5030285236,5030285275,5030285488,5030285755,5030285899,5030285938,5030285959,5030286142,5030286208,5030286232,5030652929,5030658470,5030659346,5030659601,5032891389,5032891824,5032917045,5032917111,5032917753,5032917837,5032918029,5032918047,5033061498,5033167651,5033323322,5033325254,5033325266,5033325542,5033962257,5034056575,5039033727,5039462123,5045281361,5045324834,5052829387,5052830113]},"bpush":false,"pt":null,"els":null,"acts":null,"vars":[{"name":"page_type","polling":"none","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function(){\n    var page_type;\n    var current_href = window.location.pathname;\n    var category_pages = current_href === '/recipes' || current_href === '/culture' || current_href === '/restaurants' || current_href === '/basically' || current_href === '/healthyish' || current_href === '/story/bon-appetit-foodcast';\n\n    if (category_pages){\n        page_type = 'category';\n    } else if (current_href.indexOf('/story/') > -1 || current_href.indexOf('/recipe/') > -1 || current_href.indexOf('/slideshow/') > -1){\n        page_type = 'article';\n    } else if (current_href.indexOf('/gallery/') > -1){\n        page_type = 'gallery';\n    } else if (current_href.indexOf('https://account.bonappetit.com/?brandSlug=bon-appetit&redirectUrl=https://www.bonappetit.com/') > -1){\n        page_type = 'login';\n    } else if (current_href.indexOf('https://subscribe.bonappetit.com/') > -1){\n        page_type = 'subscription';\n    } else if (current_href === 'https://www.bonappetit.com/') {\n      page_type = 'home';\n    }\n\n    return page_type;\n})();\n","trigger":""},{"name":"logged_in","polling":"all","persist":"visit","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    var login = jQuery('span.LogInOutLink span:eq(0)').text() === 'Log Out';\n    var logout = jQuery('span.LogInOutLink span:eq(0)').text() === 'Login' ? false : null;\n    return login || logout;\n})();","trigger":""},{"name":"video_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('figure.cne-interlude-container').length > 0 ? true : null;","trigger":""},{"name":"article_name","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n  if (bouncex.vars.page_type === 'article' || bouncex.vars.page_type === 'gallery') {\n    var recipePage = jQuery('h1[itemprop=\"name\"] a').text().trim() || null;\n    return recipePage ? recipePage : jQuery('div[class*=\"-article__header\"] h1, h1[class*=\"__header__hed\"').text().trim();\n  }\n})();","trigger":""},{"name":"article_category","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n  if (bouncex.vars.page_type === 'article' || bouncex.vars.page_type === 'gallery') {\n    var recipePage = jQuery('a.post__header__rubric:eq(0)').text().trim() || null;\n    return recipePage ? recipePage : jQuery('a[class*=\"__logo-link\"]').text().trim();\n  }\n})();","trigger":""},{"name":"submitted_onsite","polling":"all","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"jQuery('.enter-email-success, .newsletter-form-success').is(':visible') || null;\n  ","trigger":""},{"name":"ever_logged_in","polling":"all","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"bouncex.vars.logged_in || null;","trigger":""},{"name":"subscription_visible","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"jQuery('div[id*=\"google_ads_iframe_3379/bonapp.cm\"] iframe:visible').first().contents().find('span[class*=\"btn-close\"]').length === 1 || jQuery('div[id*=\"google_ads_iframe_3379/bonapp.cm\"] iframe:visible').first().contents().find('.btn-close').length === 1","trigger":""},{"name":"dfp_rblock","polling":"all","persist":"no","page_types":[],"testmode":false,"default":"false","code":"(function() {\n    if (!bouncex.dfpRan) {\n        bouncex.dfpRan = true;\n        return 'not_ready';\n    }\n    function check() {\n        bouncex.dfp_loaded = false || bouncex.dfp_loaded;\n        var slots = window.googletag && typeof googletag.pubads == 'function' && typeof googletag.pubads().getSlots == 'function'? googletag.pubads().getSlots() : [];\n        var numSlots = slots.length;\n        for (var i = 0; i < numSlots; i++) {\n            var slotInfo = slots[i] && typeof slots[i].getResponseInformation == 'function'? slots[i].getResponseInformation() : false;\n            if (slotInfo && slotInfo.lineItemId) {\n                bouncex.dfp_loaded = true;\n                if (bouncex.website.gbi.rblocks && bouncex.website.gbi.rblocks.indexOf(slotInfo.lineItemId) > -1) {\n                    return 'sponsor';\n                }\n            }\n        }\n        if (bouncex.dfp_loaded) {\n            return 'allow';\n        }\n        return 'not_ready';\n    }\n    if (bouncex.website.gbi.rblocks) {\n        if (!bouncex.website.gbi_enabled) {\n            return 'disabled';\n        } else if (bouncex.dfp_loaded) {\n            return null;\n        } else if (window.googletag && googletag.apiReady && googletag.pubadsReady) {\n            return check();\n        } else if (typeof window.googletag === 'undefined') {\n            return 'no_googletag';\n        }\n        return 'fallback';\n    } else {\n        return 'not_ready';\n    }\n})()","trigger":"pageload"},{"name":"submitted_email_basically","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_email_healthyish","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"},{"name":"submitted_email_daily","polling":"none","persist":"permanent","page_types":[],"testmode":false,"default":"false","code":"null;","trigger":"pageload"}],"dgu":"pixel.cdnwidget.com","dgp":false,"ba":{"enabled":0,"fbte":0},"biu":"assets.bounceexchange.com","bau":"api.bounceexchange.com","beu":"events.bouncex.net","ibx":{"tjs":"","cjs":"","miw":0,"mibcx":0,"te":0,"cart_rep":{"get":"","set":""},"ulpj":null,"cus":"","miw_exclude":""},"etjson":null,"osre":true,"osru":"osr.bouncex.net/v1/osr/items","checkDfp":true,"spa":0,"spatm":1,"preinit_cjs":"","cpnu":"cpn.bouncex.net"}
;
		bouncex.tag = 'tag3';
		bouncex.$ = window.jQuery;
		bouncex.env = 'production';
		bouncex.restrictedTlds = {"casl":{"ca":1},"gdpr":{"ad":1,"al":1,"at":1,"ax":1,"ba":1,"be":1,"bg":1,"by":1,"xn--90ais":1,"ch":1,"cy":1,"cz":1,"de":1,"dk":1,"ee":1,"es":1,"eu":1,"fi":1,"fo":1,"fr":1,"uk":1,"gb":1,"gg":1,"gi":1,"gr":1,"hr":1,"hu":1,"ie":1,"im":1,"is":1,"it":1,"je":1,"li":1,"lt":1,"lu":1,"lv":1,"mc":1,"md":1,"me":1,"mk":1,"xn--d1al":1,"mt":1,"nl":1,"no":1,"pl":1,"pt":1,"ro":1,"rs":1,"xn--90a3ac":1,"ru":1,"su":1,"xn--p1ai":1,"se":1,"si":1,"sj":1,"sk":1,"sm":1,"ua":1,"xn--j1amh":1,"va":1,"tr":1}};
		bouncex.push = function(pushData) {
			bouncex.pushedData.push(pushData);
		}
		var script = document.createElement('script');
		script.setAttribute('src', '//assets.bounceexchange.com/assets/smart-tags/versioned/ijs_all_modules_ea79b8cbc7bf7fd08b065689be583813.js');

		document.body.appendChild(script);
	}
}
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", bxBootstrap);
} else {
	bxBootstrap();
}})();