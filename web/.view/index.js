 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (libLoader, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}





















































var assets = "assets"
var thumbnail = "thumbnail.png"
var favicon = "thumbnail.png"
pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E\u003Chead prefix=\"og: http:\u002F\u002Fogp.me\u002Fns#\"\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Ctitle\u003E0media\u003C\u002Ftitle\u003E\u003Clink rel=\"icon\" type=\"image\u002Fx-icon\" href=\"#{favicon}\"\u003E\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"#{assets}\u002Fbootstrap\u002F3.0.2\u002Fcss\u002Fbootstrap.min.css\"\u003E\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"css\u002Findex.css\"\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv id=\"content\"\u003E\u003Ch2\u003E 零傳媒\u003Csmall\u003E \u002F 0media.tw\u003C\u002Fsmall\u003E\u003C\u002Fh2\u003E\u003Cdiv class=\"panel panel-default thumbs\"\u003E\u003Cdiv class=\"panel-body\"\u003E\u003Ch4\u003E活動\u003C\u002Fh4\u003E\u003Ca class=\"thumb\" href=\"https:\u002F\u002Fg0v.hackpad.com\u002FMyKS5lDFtNu\" target=\"_blank\"\u003E\u003Cimg src=\"\u002Fimg\u002Fnote.png\"\u003E\u003Cdiv class=\"title\"\u003E視覺化分享會共筆\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"thumb\" href=\"http:\u002F\u002F0media.kktix.cc\u002Fevents\u002Fviz-seminar\" target=\"_blank\"\u003E\u003Cimg src=\"\u002Fimg\u002Fshare.jpg\"\u003E\u003Cdiv class=\"title\"\u003E視覺化分享會\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"panel panel-default thumbs\"\u003E\u003Cdiv class=\"panel-body\"\u003E\u003Ch4\u003E新聞專題\u003C\u002Fh4\u003E\u003Ca class=\"thumb\" href=\"\u002Fp\u002Fergame\u002F\"\u003E\u003Cimg src=\"\u002Fp\u002Fergame\u002Fimg\u002Fthumbnail.jpg\"\u003E\u003Cdiv class=\"title\"\u003E《急診人生》三分鐘的急診室醫師人生 \u002F 報導者\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"thumb\" href=\"\u002Fp\u002Fyslin\u002F\"\u003E\u003Cimg src=\"\u002Fp\u002Fyslin\u002Fthumbnail-lg.jpg\"\u003E\u003Cdiv class=\"title\"\u003E繫上歷史記憶的黃絲帶 - 林義雄數位專輯 \u002F 新聞 E 論壇\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"thumb\" href=\"\u002Fp\u002Fvchief\u002F\"\u003E\u003Cimg src=\"\u002Fp\u002Fvchief\u002Fthumbnail-lg.jpg\"\u003E\u003Cdiv class=\"title\"\u003E最熟悉的陌生人 - 村里長知多少 \u002F 新聞 E 論壇\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"thumb\" href=\"\u002Fp\u002F6bulbs\u002F\"\u003E\u003Cimg src=\"\u002Fp\u002F6bulbs\u002Fthumbnail-lg.jpg\"\u003E\u003Cdiv class=\"title\"\u003E五都市長連任秀 - 政見評審團你來當 \u002F 新聞 E 論壇\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"panel panel-default thumbs\"\u003E\u003Cdiv class=\"panel-body\"\u003E\u003Ch4\u003E報導樣版\u003C\u002Fh4\u003E\u003Ca class=\"thumb\" href=\"\u002Ft\u002Fgeoevent\u002F\"\u003E\u003Cimg src=\"\u002Ft\u002Fgeoevent\u002Fthumbnail-lg.jpg\"\u003E\u003Cdiv class=\"title\"\u003EMap Based Events Visualization\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003Ca class=\"thumb\" href=\"\u002Ft\u002Fqa\u002F\"\u003E\u003Cimg class=\"bordered\" src=\"\u002Ft\u002Fqa\u002Fthumbnail-lg.jpg\"\u003E\u003Cdiv class=\"title\"\u003EQA-Style Long Form Journalism\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sep\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"footer\"\u003E\u003Ch3\u003E相關連結\u003C\u002Fh3\u003E\u003Cul\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fwww.facebook.com\u002Fgroups\u002F284238305064510\u002F\"\u003E0media facebook group\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"https:\u002F\u002Fg0v.hackpad.com\u002F-0media-B3tCT7FmOVq\"\u003E0media 簡介文件\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"http:\u002F\u002Fhackfoldr.org\u002F0media\"\u003E0media hackfolder\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"http:\u002F\u002Fnewseforum.com\u002F\"\u003E新聞 E 論壇\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 