(function(){
function clearSearchHash(){if(location.hash)history.replaceState(null,"",location.pathname+location.search)}
function blankReloadedSearch(){
 if(location.hash){
  clearSearchHash();
  input.value="";
  hideResults();
  searchState={counters:{},history:[],activeIndex:-1};
  updateHistoryControls();
 }
}
blankReloadedSearch();
const previousRenderTopicG2=renderTopic;
renderTopic=function(topic,query="",variant=null){
 const out=previousRenderTopicG2(topic,query,variant);
 clearSearchHash();
 return out;
};
})();
