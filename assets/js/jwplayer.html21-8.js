!function(e){if(e&&parseInt(e.version,10)>=8){var r=function(r){var o=e(r),a=Object.create(o);if(!a.trigger||a.compatibility)return a;a.dispatchEvent=o.trigger,a.getItem=o.getPlaylistIndex,a.getMeta=o.getItemMeta,a.getRenderingMode=function(){return"html5"},a.on=a.on.bind(o),a.off=a.off.bind(o),a.removeEventListener=a.off;var E={onBuffer:"buffer",onPause:"pause",onPlay:"play",onIdle:"idle",onBufferChange:"bufferChange",onBufferFull:"bufferFull",onError:"error",onSetupError:"setupError",onFullscreen:"fullscreen",onMeta:"meta",onMute:"mute",onPlaylist:"playlist",onPlaylistItem:"playlistItem",onPlaylistComplete:"playlistComplete",onReady:"ready",onResize:"resize",onComplete:"complete",onSeek:"seek",onTime:"time",onVolume:"volume",onBeforePlay:"beforePlay",onBeforeComplete:"beforeComplete",onDisplayClick:"displayClick",onControls:"controls",onQualityLevels:"levels",onQualityChange:"levelsChanged",onCaptionsList:"captionsList",onCaptionsChange:"captionsChanged",onAdError:"adError",onAdClick:"adClick",onAdImpression:"adImpression",onAdTime:"adTime",onAdComplete:"adComplete",onAdCompanions:"adCompanions",onAdSkipped:"adSkipped",onAdPlay:"adPlay",onAdPause:"adPause",onAdMeta:"adMeta",onCast:"cast",onAudioTrackChange:"audioTrackChanged",onAudioTracks:"audioTracks"};Object.keys(E).forEach(function(e){a[e]=function(r){return a.on(E[e],r)}});var n=o.setup;a.setup=function(e){var r=e.events;return r&&Object.keys(r).forEach(function(e){var o=E[e];o&&(r[o]=r[e],delete r[e])}),n.call(o,e)};var i=o.play,t=o.pause;return a.play=function(e,r){if(e&&e.reason&&(r=e),r||(r={reason:"external"}),!0===e)return i(r),a;if(!1===e)return t(r),a;switch(e=a.getState()){case"playing":case"buffering":t(r);break;default:i(r)}return a},a.pause=function(e,r){return"boolean"==typeof e?a.play(!e,r):a.play(e,r),a},a.compatibility=!0,a},o=e(document.createElement("div")),a=o.getEnvironment();o.remove();var E=e.utils,n=function(e){return function(){return e}};E.isAndroidNative=n(a.Browser.androidNative),E.isAndroid=function(e,r){return(!r||!a.Browser.androidNative)&&((!e||0===a.OS.version.indexOf(e))&&a.OS.android)},E.isChrome=n(a.Browser.chrome),E.isEdge=function(e){return(!e||0===a.Browser.version.indexOf(e))&&a.Browser.edge},E.isFF=n(a.Browser.firefox),E.isFacebook=n(a.Browser.facebook),E.isFlashSupported=n(a.Features.flash),E.isIE=n(a.Browser.ie),E.isIETrident=function(){return a.Browser.ie&&a.Browser.version.major>=11},E.isIOS=function(e){return(!e||0===a.OS.version.indexOf(e))&&a.OS.iOS},E.isIPad=n(a.OS.iPad),E.isIPod=n(a.OS.iPhone),E.isMSIE=n(a.Browser.msie),E.isMobile=n(a.OS.mobile),E.isOSX=n(a.OS.mac),E.isSafari=n(a.Browser.safari),r._=e._,r.api=e.api,r.utils=E,r.version=e.version,r.vid=e.vid,r.defaults=e.defaults;var i={COMPLETE:"complete",ERROR:"error",JWPLAYER_AD_CLICK:"adClick",JWPLAYER_AD_COMPANIONS:"adCompanions",JWPLAYER_AD_COMPLETE:"adComplete",JWPLAYER_AD_ERROR:"adError",JWPLAYER_AD_IMPRESSION:"adImpression",JWPLAYER_AD_META:"adMeta",JWPLAYER_AD_PAUSE:"adPause",JWPLAYER_AD_PLAY:"adPlay",JWPLAYER_AD_SKIPPED:"adSkipped",JWPLAYER_AD_TIME:"adTime",JWPLAYER_CAST_AD_CHANGED:"castAdChanged",JWPLAYER_MEDIA_COMPLETE:"complete",JWPLAYER_READY:"ready",JWPLAYER_MEDIA_SEEK:"seek",JWPLAYER_MEDIA_BEFOREPLAY:"beforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"beforeComplete",JWPLAYER_MEDIA_BUFFER_FULL:"bufferFull",JWPLAYER_DISPLAY_CLICK:"displayClick",JWPLAYER_PLAYLIST_COMPLETE:"playlistComplete",JWPLAYER_CAST_SESSION:"cast",JWPLAYER_MEDIA_ERROR:"mediaError",JWPLAYER_MEDIA_FIRST_FRAME:"firstFrame",JWPLAYER_MEDIA_PLAY_ATTEMPT:"playAttempt",JWPLAYER_MEDIA_LOADED:"loaded",JWPLAYER_MEDIA_SEEKED:"seeked",JWPLAYER_SETUP_ERROR:"setupError",JWPLAYER_ERROR:"error",JWPLAYER_PLAYER_STATE:"state",JWPLAYER_CAST_AVAILABLE:"castAvailable",JWPLAYER_MEDIA_BUFFER:"bufferChange",JWPLAYER_MEDIA_TIME:"time",JWPLAYER_MEDIA_TYPE:"mediaType",JWPLAYER_MEDIA_VOLUME:"volume",JWPLAYER_MEDIA_MUTE:"mute",JWPLAYER_MEDIA_META:"meta",JWPLAYER_MEDIA_LEVELS:"levels",JWPLAYER_MEDIA_LEVEL_CHANGED:"levelsChanged",JWPLAYER_CONTROLS:"controls",JWPLAYER_FULLSCREEN:"fullscreen",JWPLAYER_RESIZE:"resize",JWPLAYER_PLAYLIST_ITEM:"playlistItem",JWPLAYER_PLAYLIST_LOADED:"playlist",JWPLAYER_AUDIO_TRACKS:"audioTracks",JWPLAYER_AUDIO_TRACK_CHANGED:"audioTrackChanged",JWPLAYER_PLAYBACK_RATE_CHANGED:"playbackRateChanged",JWPLAYER_LOGO_CLICK:"logoClick",JWPLAYER_CAPTIONS_LIST:"captionsList",JWPLAYER_CAPTIONS_CHANGED:"captionsChanged",JWPLAYER_PROVIDER_CHANGED:"providerChanged",JWPLAYER_PROVIDER_FIRST_FRAME:"providerFirstFrame",JWPLAYER_USER_ACTION:"userAction",JWPLAYER_PROVIDER_CLICK:"providerClick",JWPLAYER_VIEW_TAB_FOCUS:"tabFocus",JWPLAYER_CONTROLBAR_DRAGGING:"scrubbing",JWPLAYER_INSTREAM_CLICK:"instreamClick",JWPLAYER_BREAKPOINT:"breakpoint",touchEvents:{DRAG:"drag",DRAG_START:"dragStart",DRAG_END:"dragEnd",CLICK:"click",DOUBLE_CLICK:"doubleClick",TAP:"tap",DOUBLE_TAP:"doubleTap",OVER:"over",MOVE:"move",OUT:"out"},state:{BUFFERING:"buffering",IDLE:"idle",COMPLETE:"complete",PAUSED:"paused",PLAYING:"playing",ERROR:"error",LOADING:"loading",STALLED:"stalled"}};r.events=i,window.jwplayer=r}}(window.jwplayer);
var jwDefaults = {
  "autostart": false,
  "aspectratio": "21:8.3",
  "stretching": "exactfit",
  "width": "100%",
  "height":"100%",
  "cast": {"appid": "00000000"},
  "controls": true,
  "displaydescription": false,
  "displaytitle": false,
  "mute": false,
  "playbackRateControls": true,
  "preload": "metadata",
  "repeat": false,
  "sharing": {"sites": ["facebook","twitter","email","reddit"]},
    
};
jwplayer.defaults = jwDefaults;