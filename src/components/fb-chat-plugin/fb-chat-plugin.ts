export {};

declare global {
	interface Window {
		fbAsyncInit: any;
		FB: any;
	}
}

const thisScriptTag = document.getElementById("fb-chat-plugin");

const page_id = thisScriptTag?.dataset?.pageId ?? false;
if (page_id) {
	console.log({ page_id });
	var chatbox = document.getElementById("fb-customer-chat");
	if (chatbox) {
		chatbox.setAttribute("page_id", page_id);
		chatbox.setAttribute("attribution", "biz_inbox");
	}

	window.fbAsyncInit = function () {
		FB.init({
			xfbml: true,
			version: "v16.0",
		});
	};

	(function (d, s, id) {
		var js,
			fjs = d.getElementsByTagName(s)[0] as any;
		if (d.getElementById(id)) return;
		js = d.createElement(s) as any;
		js.id = id;
		js.src = "https://connect.facebook.net/en_GB/sdk/xfbml.customerchat.js";
		fjs.parentNode.insertBefore(js, fjs);
	})(document, "script", "facebook-jssdk");
}
