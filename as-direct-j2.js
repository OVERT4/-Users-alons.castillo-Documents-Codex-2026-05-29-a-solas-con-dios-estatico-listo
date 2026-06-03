(function(){
document.head.insertAdjacentHTML("beforeend",`<style id="as-writing-compact-override">
.search-panel{max-width:700px!important}
.search-box{width:min(100%,660px)!important;min-height:74px!important;grid-template-columns:24px minmax(0,1fr) auto!important;gap:12px!important;padding:10px 12px 10px 16px!important}
.search-box svg{width:22px!important;height:22px!important}
#feelingInput{height:46px!important;min-height:42px!important;max-height:112px!important;line-height:1.35!important;font-size:.98rem!important}
.search-box button{min-height:48px!important;min-width:104px!important;padding:0 16px!important}
.quick-topics{width:min(100%,660px)!important}
@media(max-width:620px){.search-box{grid-template-columns:22px minmax(0,1fr)!important;min-height:0!important;padding:12px!important}.search-box button{grid-column:1/-1!important;width:100%!important;min-height:46px!important}#feelingInput{height:44px!important;min-height:40px!important;max-height:104px!important}}
</style>`);
})();
