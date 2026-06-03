(function(){
function itemDate(item){
 const value=item?.createdAt||item?.savedAt||item?.date||"";
 const time=Date.parse(value);
 return Number.isFinite(time)?time:0;
}
function newestFirst(list){
 return Array.isArray(list)?[...list].sort((a,b)=>itemDate(b)-itemDate(a)):list;
}
function syncSavedOrder(){
 journal=newestFirst(journal);
 favorites=newestFirst(favorites);
 letters=newestFirst(letters);
 prayerFavorites=newestFirst(prayerFavorites);
 if(typeof freePrayers!=="undefined")freePrayers=newestFirst(freePrayers);
 writeLocal(storageKeys.journal,journal);
 writeLocal(storageKeys.favorites,favorites);
 writeLocal(storageKeys.letters,letters);
 writeLocal(storageKeys.prayerFavorites,prayerFavorites);
 if(typeof freePrayers!=="undefined")writeLocal(storageKeys.freePrayers,freePrayers);
}
const oldRenderSavedVersesJ1=renderSavedVerses;
renderSavedVerses=function(){
 favorites=newestFirst(favorites);
 writeLocal(storageKeys.favorites,favorites);
 return oldRenderSavedVersesJ1();
};
const oldRenderSavedPrayersJ1=renderSavedPrayers;
renderSavedPrayers=function(){
 prayerFavorites=newestFirst(prayerFavorites);
 writeLocal(storageKeys.prayerFavorites,prayerFavorites);
 return oldRenderSavedPrayersJ1();
};
const oldRenderFreePrayersJ1=renderFreePrayers;
renderFreePrayers=function(){
 if(typeof freePrayers!=="undefined"){
  freePrayers=newestFirst(freePrayers);
  writeLocal(storageKeys.freePrayers,freePrayers);
 }
 return oldRenderFreePrayersJ1();
};
renderJournal=function(){
 if(!journalList)return;
 journal=newestFirst(journal);
 writeLocal(storageKeys.journal,journal);
 renderSpiritualHistory();
 if(!journal.length){
  journalList.innerHTML=`<p class="empty-state">Todavía no hay entradas. Cuando escribas y lleves algo a Dios, aparecerá aquí.</p>`;
  return;
 }
 journalList.innerHTML=journal.map(entry=>`
  <article class="journal-entry">
   <div class="entry-head">
    <div>
     <span class="entry-date">${escapeHtml(formatDate(entry.createdAt))}</span>
     <h3>${escapeHtml(entry.response.topic)}</h3>
    </div>
    <button class="entry-button" type="button" data-journal-id="${escapeHtml(entry.id)}">Eliminar</button>
   </div>
   <p class="entry-query">${escapeHtml(entry.query)}</p>
   <div class="entry-verses">
    ${(entry.response.verses||[]).map(verse=>`
     <div class="entry-verse">
      <strong>${escapeHtml(verse.reference)}</strong>
      <p>${escapeHtml(verse.text)}</p>
     </div>`).join("")}
   </div>
   <p class="entry-prayer">“${escapeHtml(entry.response.prayer)}”</p>
  </article>`).join("");
};
renderLetters=function(){
 if(!lettersList)return;
 letters=newestFirst(letters);
 writeLocal(storageKeys.letters,letters);
 if(!letters.length){
  lettersList.innerHTML=`<p class="empty-state">Todavía no has guardado cartas. Este espacio puede quedarse en silencio hasta que lo necesites.</p>`;
  return;
 }
 lettersList.innerHTML=letters.map(letter=>`
  <article class="journal-entry letter-entry">
   <div class="entry-head">
    <div>
     <span class="entry-date">${escapeHtml(formatDate(letter.createdAt))}</span>
     <h3>Carta para Dios</h3>
    </div>
    <button class="entry-button" type="button" data-letter-id="${escapeHtml(letter.id)}">Eliminar</button>
   </div>
   <p class="entry-query letter-body">${escapeHtml(letter.text)}</p>
  </article>`).join("");
};
syncSavedOrder();
document.head.insertAdjacentHTML("beforeend",`<style>
.search-panel{max-width:700px}
.search-box{width:min(100%,660px);min-height:74px;grid-template-columns:24px minmax(0,1fr) auto;gap:12px;padding:10px 12px 10px 16px}
.search-box svg{width:22px;height:22px}
#feelingInput{height:46px;min-height:42px;max-height:112px;line-height:1.35;font-size:.98rem}
.search-box button{min-height:48px;min-width:104px;padding:0 16px}
.quick-topics{width:min(100%,660px)}
@media(max-width:620px){.search-box{grid-template-columns:22px minmax(0,1fr);min-height:0;padding:12px}.search-box button{grid-column:1/-1;width:100%;min-height:46px}#feelingInput{height:44px;min-height:40px;max-height:104px}}
</style>`);
renderJournal();
renderSavedVerses();
renderLetters();
renderGuidedPrayers();
})();
