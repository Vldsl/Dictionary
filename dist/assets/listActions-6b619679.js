import{l as r,w as l,p as C,i as A,h as S,j as U,d as n,k as _,b as z,m as J,e as R,t as H,c as u,n as k,g as G,o as b,q as B,f as v,r as T,u as D,v as M,x as N,y as K,z as Q,A as X,B as Y}from"./style-30bb83a4.js";function p(){Z(),r.innerHTML="";let e=(A.value-1)*C,t=e+C;for(let a=e;a<t;a++){const s=l[a];if(!s)return;const d=s.category||s.part||s.level||s.type;let f;s.examples&&s.examples.length>0&&(f=`
    		<div class="examples">
    			${s.examples.map((h,L)=>`
							<p class="example-text">
								${L+1}. ${h}
								<button class="btn edit data-action="edit><i class="fas fa-pencil-alt"></i></button>
								<button class="btn delete" data-action="delete" style="color: red;"><i class="fas fa-times-circle"></i></button>
							</p>`).join("")}
    		</div>
    	`);const c=`
			<li 
				class="list-group-item ${s.check?"checked":""} ${Date.now()-s.id<=1*60*60*1e3?"new-word":""}"
				data-id="${s.id}"
				${d?`data-filter = "${(s.category+" "+s.part+" "+s.level+" "+s.type).trim()}"`:""}
			>
				<div class="d-flex justify-content-between align-items-center">
					<span class="">${a+1}</span>
					<div class="d-flex gap-3 align-items-center">
						<p class="word1-text">${s.isWord1Hidden?"😊":s.word1}</p>
						<button class=" btn hide hide-word1" data-action="hide hide-word1"><i class="fas ${s.isWord1Hidden?"fa-eye":"fa-eye-slash"}"></i>${s.isWord1Hidden?"Show":"Hide"}</button>
						<button class="btn edit edit-word1" data-action="edit edit-word1"><i class="fas fa-pencil-alt"></i>Edit</button>
					</div>
					<div class="d-flex gap-3 align-items-center">
						<p class="word2-text">${s.isWord2Hidden?"😊":s.word2}</p>
						<button class="btn hide hide-word2" data-action="hide hide-word2"><i class="fas ${s.isWord2Hidden?"fa-eye":"fa-eye-slash"}"></i>${s.isWord2Hidden?"Show":"Hide"}</button>
						<button class="btn edit edit-word2" data-action="edit edit-word2"><i class="fas fa-pencil-alt"></i>Edit</button>
					</div>
					<div>
						<i class="fas fa-star ${s.level==="easy"?"text-success":s.level==="medium"?"text-warning":s.level==="hard"?"text-danger":""}"></i>
						<i class="fas fa-star ${s.level==="medium"?"text-warning":s.level==="hard"?"text-danger":""}"></i>
						<i class="fas fa-star ${s.level==="hard"?"text-danger":""}"></i>
						<button class="btn btn-primary" data-action="check">Отметить</button>
						<button class="btn btn-danger" data-action="delete">Удалить</button>
					</div>
				</div>
				${f||""}
				<div class="word-info">
				<button class="more-link">More...</button>
				</div>
			</li>
	`;r.insertAdjacentHTML("beforeend",c)}}const o={saveToLS:(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},sortWords:()=>{l.sort((e,t)=>e.check-t.check)},showEmptyList:e=>e.innerHTML=`
				<div id="emptyList" class="alert alert-info empty-list">
					<img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
					<p class="empty-list__title">Список пуст</p>
				</div>
			`,clearCheckWords:e=>{localStorage.removeItem("checkWords")},updateDeletedWordCount:()=>U.textContent=n.length,updateWordCount:()=>_.textContent=l.length,updateRestoreBtn:()=>restoreBtn.disabled=!n.length,updateDelAllWordsBtn:()=>{z.disabled=!l.length},updateMarkUndoneBtn:()=>J.disabled=!l.length||!l.every(({check:e})=>e),updateDelDoneWordsBtn:()=>R.disabled=!l.length||!l.some(({check:e})=>e),updateToggleSelectAllBtn:()=>{H.textContent=u.length?"Вернуть исходное выделение":"Выделить все",H.disabled=!l.length||l.every(({check:e})=>e)&&!u.length},generatePageNumbers:()=>{k.innerHTML="";for(let e=1;e<=Math.ceil(l.length/10);e++)k.innerHTML+=`<span ${A.value===1&&e===1?"class='selected'":""} data-page="${e}">${e}</span>`},showActiveNumberOfPage:()=>{k.querySelectorAll("span").forEach(t=>{t.dataset.page==A.value?t.classList.add("selected"):t.classList.remove("selected")})},updatePageControl:e=>G.style.display=e.length?"block":"none"},i=o.saveToLS,Z=o.sortWords,E=o.showEmptyList,F=o.clearCheckWords,$=o.updateDeletedWordCount,y=o.updateWordCount,x=o.updateDelAllWordsBtn,g=o.updateMarkUndoneBtn,w=o.updateDelDoneWordsBtn,m=o.updateToggleSelectAllBtn,j=o.generatePageNumbers,O=o.showActiveNumberOfPage,W=o.updatePageControl,ee=e=>{const t=S.querySelectorAll(".example-input");t&&t.forEach(a=>{const s=a.value.trim();s.length&&e.examples.push(s)})},te=()=>{const e=S.querySelectorAll(".example-item");e&&e.forEach((t,a)=>{if(a===0){t.insertAdjacentHTML("beforeend",`<button type="button" class="btn btn-primary add-example-btn">
					Добавить пример
				</button>`);return}t.remove()})},oe=()=>{l.length?(p(),j()):(E(list),W(l)),y(),$(),x(),g(),w(),m()};function P(e){if(typeof e!="string")return!1;const t=parseFloat(e);return!isNaN(t)&&isFinite(t)}function I(e){const t=["!","@","#","$","%","^","&","*","(",")","_","+","-","=","[","]","{","}",";",":",",",".","/","<",">","?","|","\\"];for(let a=0;a<t.length;a++)if(e.indexOf(t[a])!==-1)return!0;return!1}const q=e=>(console.log({isFloat:P(e),hasSpecialCharacters:I(e),isNotEmpty:e.length<3,isExist:l.find(({word1:t})=>t.toLowerCase()===e.toLowerCase())}),{isFloat:P(e),hasSpecialCharacters:I(e),isNotEmpty:e.length<3,isExist:l.find(({word1:t})=>t.toLowerCase()===b.value.trim().toLowerCase())}),ne=()=>{S.insertAdjacentHTML("beforeend",`<div class="example-item d-flex gap-3">
		<input
			class="example-input form-control"
			type="text"
			name="input"
			placeholder="Добавить пример"
		/>
		<button type="button" class="btn btn-primary add-example-btn">
			Добавить пример
		</button>
	</div>`)},re=(e,t)=>{const{target:a}=e;a.matches("#prev")&&t.value>1?--t.value:a.matches("#next")&&t.value<Math.ceil(l.length/10)&&++t.value,p(),O()},ie=(e,t)=>{const{target:a}=e;if(!a.hasAttribute("data-page"))return;const s=+a.dataset.page;t.value=s,p(),O()};function de(e,t){e.querySelectorAll(".list-group-item").forEach(s=>{s.querySelector(".word1-text").textContent.toLowerCase().includes(t.value.trim().toLowerCase())?s.classList.remove("d-none"):s.classList.add("d-none")})}function ce(){const{value:e}=K,{value:t}=Q,{value:a}=X,{value:s}=Y,d=[e,t,a,s].filter(Boolean);r.querySelectorAll(".list-group-item").forEach(c=>{if(!d.length){c.classList.remove("d-none");return}const h=c.dataset.filter;if(!h){c.classList.add("d-none");return}const L=h.split(" ");d.every(V=>L.includes(V))?c.classList.remove("d-none"):c.classList.add("d-none")})}const se=(e,t)=>{t=[...e],i("checkWords",t);for(let a=0;a<e.length;a++)e[a].check=!0;r.querySelectorAll(".list-group-item").forEach(a=>a.classList.add("checked"))},ae=(e,t)=>{console.log(e),e.splice(0,e.length,...JSON.parse(localStorage.getItem("checkWords")??[])),console.log(e),p(),F(t)},ue=e=>{for(let t=0;t<e.length;t++)e[t].check=!1;console.log(e),r.querySelectorAll(".list-group-item").forEach(t=>t.classList.remove("checked")),g(),i("words",e),u.length&&F(u)},pe=()=>{l.every(({check:e})=>e)?(console.log("restore"),ae(l,u)):se(l,u),w(),g(),m(),console.log(l),i("words",l)},fe=e=>{console.log(e),n.push(...e),e=[],console.log(e),r.innerHTML="",E(r),i("words",e),i("delWords",n),m(),g(),x(),w(),y(e),$(n),W(e)},ge=e=>{e=e.filter(({check:t})=>!t),n.push(...e),i("delWords",n),e.length?p():E(r),m(),g(),x(),w(),i("words",e),y(e),$(n),W(e)};function me(e){e.preventDefault();const t=b.value.trim();if(!q(t)||!q(B.value.trim())){v.input.forEach(s=>s.classList.add("error")),v.reset(),b.focus();return}v.input.forEach(s=>s.classList.remove("error"));const a={id:Date.now(),check:!1,done:!1,word1:t,word2:B.value.trim(),isWord1Hidden:!1,isWord2Hidden:!1,wrdw:{text:"text",isHidden:!1},wrdw2:{text:"text",isHidden:!1},category:T.value.trim(),part:D.value.trim(),level:M.value.trim(),type:N.value.trim(),filter:{category:T.value.trim(),part:D.value.trim(),level:M.value.trim(),type:N.value.trim()},examples:[]};l.push(a),ee(a),te(),l.sort((s,d)=>s.word1.localeCompare(d.word1)),p(),i("words",l),v.reset(),b.focus(),y(l),l.length===1?(W(l),x(),m()):l.length===C+1&&j()}export{i as a,$ as b,F as c,W as d,m as e,x as f,j as g,w as h,g as i,me as j,de as k,oe as l,ce as m,ue as n,fe as o,ge as p,re as q,p as r,E as s,pe as t,y as u,ie as v,ne as w};
