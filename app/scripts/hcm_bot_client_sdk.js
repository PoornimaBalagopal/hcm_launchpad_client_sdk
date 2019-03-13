    !function(e,t,n,r){
        function s(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var n=t.getElementsByTagName("script")[0],r=t.createElement("script");r.async=!0,r.src=e.url,n.parentNode.insertBefore(r,n)}}catch(e){}}var o,p,a,i=[],c=[];e[n]={init:function(){o=arguments;var e={then:function(t){return c.push({type:"t",next:t}),e},catch:function(t){return c.push({type:"c",next:t}),e}};return e},on:function(){i.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},e.__onWebMessengerHostReady__=function(t){if(delete e.__onWebMessengerHostReady__,e[n]=t,o)for(var r=t.init.apply(t,o),s=0;s<c.length;s++){var u=c[s];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&t.render.apply(t,p),a&&t.destroy.apply(t,a);for(s=0;s<i.length;s++)t.on.apply(t,i[s])};var u=new XMLHttpRequest;u.addEventListener("load",s),u.open("GET",r+"/loader.json",!0),u.responseType="json",u.send()
    }(window,document,"Bots", "http://localhost:8011/bots-client-sdk-js");
	Bots.on("ready", changeAllTags);
 	Bots.on("message:received", changeLastMessage);
 	Bots.on("message:received", deleteTagsInCarouselPreview);
// to clear the client whenever the page is reloaded including page navigation 
 var keys = Object.keys(localStorage);
  for(var i = 0; i < keys.length; i++){
    localStorage.removeItem(keys[i]);
  }
  Bots.destroy();
    Bots.on("ready", changeAllTags);
  Bots.on("message:received", changeLastMessage);
  Bots.on("message:received", deleteTagsInCarouselPreview);
  
// to clear the client whenever the page is reloaded including page navigation 
          Bots.init({appId: '5c889db0effbf700110a5f80'})
       .then(function addCustomTagStyling() {        
         const chatFrame = document.getElementById("web-messenger-container").contentDocument;
        const cssLink = document.createElement("link");
        cssLink.href = "http://localhost:38011styles/custom_tag_styling.css";
        cssLink.rel = "stylesheet";
        cssLink.type = "text/css";        
        chatFrame.head.appendChild(cssLink);    
      });