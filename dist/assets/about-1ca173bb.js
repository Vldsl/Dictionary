import{s as R,w as c,a as r,b as a,d as t}from"./index-695ebc9f.js";(function(){const s=document.querySelector("#deletedWordsList"),A=document.querySelector(".deleted-word-amount"),i=document.querySelector("#trash-search-input");document.querySelector("#emptyTrashList");const u=document.querySelector("#restoreAllBtn"),p=document.querySelector("#clearAllBtn"),k=document.querySelector("#restoreAllCheckWordsBtn"),B=document.querySelector("#clearAllCheckWordsBtn"),l={updateDeletedWordsAmount:()=>A.textContent=t.length,updateRestoreAllCheckWordsBtn:()=>k.disabled=!t.length||!t.some(({done:e})=>e),updateClearAllCheckWordsBtn:()=>B.disabled=!t.length||!t.some(({done:e})=>e),updateRestoreAllBtn:()=>u.disabled=!t.length,updateClearAllBtn:()=>p.disabled=!t.length},W=l.updateDeletedWordsAmount,C=l.updateRestoreAllCheckWordsBtn,b=l.updateClearAllCheckWordsBtn,f=l.updateRestoreAllBtn,y=l.updateClearAllBtn,g=()=>{s.innerHTML=t.map((e,n)=>(e.check&&(e.check=!1),`
				<li class="deleted-item list-group-item d-flex justify-content-between align-items-center ${e.done?"checked":""}" data-id="${e.id}">
					<div class="form-check">
						<input class="form-check-input" type="checkbox" ${e.done?"checked":""}>
					</div>
					<span>${n+1}</span>
					<p class="original-text">${e.word1}</p>
					<p>${e.word2}</p>
					<div>
						<button class="btn btn-primary" data-action="restore">Восстановить</button>
						<button class="btn btn-danger" data-action="delete-permanently">Удалить окончательно</button>
					</div>
				</li>
		`)).join("")},L=(e,n)=>{e.remove(),t.splice(n,1),r("delWords",t)},v=e=>{s.innerHTML="",e=[],c.push(...e),r("words",c),r("delWords",e),a(s)},S=(e,n,o)=>{e.remove(),console.log(n),c.push(n),t.splice(o,1),r("delWords",t),r("words",c),t.length||a(s)},q=e=>{const{target:n}=e;if(!n.matches(".btn"))return;const o=n.closest(".deleted-item"),h=+o.dataset.id,d=t.findIndex(({id:E})=>E===h),m=t[d];!o||!h||d===-1||!m||(n.dataset.action==="delete-permanently"&&L(o,d),n.dataset.action==="restore"&&S(o,m,d))},x=e=>{s.innerHTML="",e=[],localStorage.setItem("delWords",JSON.stringify(e)),a(s)},D=()=>{t.length?(g(),W()):a(s),f(),y(),b(),C()};document.addEventListener("DOMContentLoaded",()=>D()),i.addEventListener("input",()=>R(s,i)),s.addEventListener("click",q),p.addEventListener("click",e=>x(e)),u.addEventListener("click",()=>v(t))})();
