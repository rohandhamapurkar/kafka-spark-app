fetch(
	"https://twitter.com/i/api/2/notifications/all.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&include_can_media_tag=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_quote_count=true&include_reply_count=1&tweet_mode=extended&include_entities=true&include_user_entities=true&include_ext_media_color=true&include_ext_media_availability=true&send_error_codes=true&simple_quoted_tweet=true&count=40&cursor=DAABDAABCgABD8B_k4LVsAAIAAIAAAABCAADiJONcggABJnlm8wACwACAAAAC0FYdVpTV0Y3NjJzCAADw0elYwAA&ext=mediaStats%2ChighlightedLabel%2CsignalsReactionMetadata%2CsignalsReactionPerspective%2CvoiceInfo",
	{
		headers: {
			accept: "*/*",
			"accept-language": "en-US,en;q=0.9",
			authorization:
				"Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
			"sec-ch-ua": '"Chromium";v="92", " Not A;Brand";v="99", "Google Chrome";v="92"',
			"sec-ch-ua-mobile": "?0",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"x-csrf-token":
				"23d0cb9b0ac45005088644d0b302c8ed50bf3d9b9254a5bb50e1ff9415b7c152f6d600f1a91825fee986b8f6aa25888b046de945501ac49b7006d9cac0756bb7f56a6507267062a9fd37ade70504c6c0",
			"x-twitter-active-user": "yes",
			"x-twitter-auth-type": "OAuth2Session",
			"x-twitter-client-language": "en",
			"x-twitter-polling": "true",
			cookie: '_ga=GA1.2.97058138.1629170514; kdt=7SYlnaph1daRwH9nQ2VJVT2x9hzwD2SVUcz2Uhi1; G_ENABLED_IDPS=google; dnt=1; des_opt_in=N; _gid=GA1.2.1311261624.1630322999; at_check=true; lang=en; mbox=PC#373d338a205040c790b0980008dde646.31_0#1693649147|session#f6f9ff6fe8bf42c0b523004e4c07d255#1630405181; ads_prefs="HBESAAA="; auth_multi="1020967969571201024:a703fe8975c5c3eb7828679d596f191ceb6a2131"; auth_token=ba58d95de24be8326c63aa0b0a5bed4a0e7dbdce; personalization_id="v1_hQiI+oGi3/mmohv4lz/wqQ=="; guest_id=v1%3A163040459145401085; twid=u%3D1135047377629327360; ct0=23d0cb9b0ac45005088644d0b302c8ed50bf3d9b9254a5bb50e1ff9415b7c152f6d600f1a91825fee986b8f6aa25888b046de945501ac49b7006d9cac0756bb7f56a6507267062a9fd37ade70504c6c0',
		},
		referrer: "https://twitter.com/search?q=%23CoronavirusUpdates%20(from%3Amybmc)&src=typed_query",
		referrerPolicy: "strict-origin-when-cross-origin",
		body: null,
		method: "GET",
		mode: "cors",
	}
)
