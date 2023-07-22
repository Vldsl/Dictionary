import{l as r,w as n,p as $,j as T,h as w,k as P,d as m,o as j,b as O,m as V,e as F,t as M,c as h,n as E,g as J,q as W,r as k,f as y,u as U,x as z,y as R,z as _,A as G,B as K,C as Q,D as X}from"./all.min-c3a0fafa.js";const f=()=>{Y(),r.innerHTML="";let e=(T.value-1)*$,a=e+$;const l=JSON.parse(localStorage.getItem("view"))??"";for(let s=e;s<a;s++){const t=n[s];if(!t)return;const u=t.filter.category||t.filter.part||t.filter.level||t.filter.type;let d;t.examples&&t.examples.length>0&&(d=`
    		${t.examples&&t.examples.length>0?t.examples.map((c,o)=>`
					<li class="example-list-item" data-index="${o}" style="list-style-type: decimal;">
						<p class="example-text"> ${c} </p>
						<button class="btn" data-action="edit-example" data-example-index="${o}"><i class="fas fa-pencil-alt"></i>Edit</button>
						<button class="btn" data-action="delete-example" data-example-index="${o}" style="color: red;"><i class="fas fa-times-circle"></i>Delete</button>
					</li>
				`).join(""):"No examples available."}
    	`);const g=`
			<li 
				class="list-group-item ${t.check?"checked":""} ${Date.now()-t.id<=1*60*60*1e3?"new-word":""}"
				data-id="${t.id}"
				${u?`data-filter = "${(t.filter.category+" "+t.filter.part+" "+t.filter.level+" "+t.filter.type).trim()}"`:""}
			>
				<div class="d-flex justify-content-between align-items-center">
					<span class="">${s+1}</span>
					<div class="d-flex gap-3 align-items-center">
						<p class="word1-text">${t.word1.isHidden?"😊":t.word1.text}</p>
						<button class=" btn hide hide-word1" data-action="hide" data-hide-element="word1"><i class="fas ${t.word1.isHidden?"fa-eye":"fa-eye-slash"}"></i>${t.word1.isHidden?"Show":"Hide"}</button>
						<button class="btn edit edit-word1" data-action="edit"  data-edit-element="word1"><i class="fas fa-pencil-alt"></i>Edit</button>
					</div>
					<div class="d-flex gap-3 align-items-center">
						<p class="word2-text">${t.word2.isHidden?"😊":t.word2.text}</p>
						<button class="btn hide hide-word2" data-action="hide" data-hide-element="word2"><i class="fas ${t.word2.isHidden?"fa-eye":"fa-eye-slash"}"></i>${t.word2.isHidden?"Show":"Hide"}</button>
						<button class="btn edit edit-word2" data-action="edit" data-edit-element="word2"><i class="fas fa-pencil-alt"></i>Edit</button>
					</div>
					<div>
						<i class="fas fa-star ${t.filter.level==="easy"?"text-success":t.filter.level==="medium"?"text-warning":t.filter.level==="hard"?"text-danger":""}"></i>
						<i class="fas fa-star ${t.filter.level==="medium"?"text-warning":t.filter.level==="hard"?"text-danger":""}"></i>
						<i class="fas fa-star ${t.filter.level==="hard"?"text-danger":""}"></i>
						<button class="btn btn-primary" data-action="check">Отметить</button>
						<button class="btn btn-danger" data-action="delete">Удалить</button>
						${l&&l==="detailed"?'<button class="btn btn-primary" data-action="write-example">Записать пример</button>':""}
					</div>
				</div>
				${l&&l==="detailed"?`					<div class="word-info">
						<div class="accordion" id="accordion-${t.id}">
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-${t.id}-1">
									<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${t.id}-1" aria-expanded="true" aria-controls="collapse-${t.id}-1">
										Определения
									</button>
								</h2>
								<div id="collapse-${t.id}-1" class="accordion-collapse collapse show" aria-labelledby="heading-${t.id}-1" data-bs-parent="#accordion-${t.id}">
									<div class="accordion-body">
										${t.definitions&&t.definitions.length>0?t.definitions.map((c,o)=>`
												<div class="definition-item" data-index="${o+1}">
													<h3 class="definition-title">Definition ${o+1}</h3>
													<p class="definition-text">${c}</p>
													<button class="btn" data-action="edit-definition" data-definition-index="${o}"><i class="fas fa-pencil-alt"></i>Edit</button>
													<button class="btn" data-action="delete-definition" data-definition-index="${o}" style="color: red;"><i class="fas fa-times-circle"></i>Delete</button>
												</div>
											`).join(""):"No definitions available."}
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-${t.id}-2">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${t.id}-2" aria-expanded="false" aria-controls="collapse-${t.id}-2">
										Примеры использования
									</button>
								</h2>
								<div id="collapse-${t.id}-2" class="accordion-collapse collapse" aria-labelledby="heading-${t.id}-2" data-bs-parent="#accordion-${t.id}">
									<div class="accordion-body">
										<ol class="examples-wrapper" style="background-color: silver; list-style-type: decimal;">
											${d||""}
										</ol>
									</div>
								</div>
							</div>
							<div class="accordion-item">
								<h2 class="accordion-header" id="heading-${t.id}-3">
									<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${t.id}-3" aria-expanded="false" aria-controls="collapse-${t.id}-3">
										Синонимы
									</button>
								</h2>
								<div id="collapse-${t.id}-3" class="accordion-collapse collapse" aria-labelledby="heading-${t.id}-3" data-bs-parent="#accordion-${t.id}">
									<div class="accordion-body">
										${t.synonyms&&t.synonyms.length>0?t.synonyms.map((c,o)=>`
												<div class="synonym-item" data-index="${o+1}">
													<h3 class="synonym-title">Synonym ${o+1}</h3>
													<p class="synonym-text">${c}</p>
													<button class="btn" data-action="edit-synonym" data-synonym-index="${o}"><i class="fas fa-pencil-alt"></i>Edit</button>
													<button class="btn" data-action="delete-synonym" data-synonym-index="${o}" style="color: red;"><i class="fas fa-times-circle"></i>Delete</button>
												</div>
											`).join(""):"No synonyms available."}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="word-details mb-3">
						<div class='d-flex align-items-center gap-5'>
            	<span><strong>Category:</strong> ${t.filter.category}</span>
            	<span><strong>Part:</strong> ${t.filter.part}</span>
            	<span><strong>Level:</strong> ${t.filter.level}</span>
            	<span><strong>Type:</strong> ${t.filter.type}</span>
            	<!-- Здесь может быть дополнительная информация, если есть -->
						</div>
          </div>`:""}
				<button class="btn more-link">More...</button>
			</li>
	`;r.insertAdjacentHTML("beforeend",g)}},i={saveToLS:(e,a)=>{localStorage.setItem(e,JSON.stringify(a))},sortWords:()=>{n.sort((e,a)=>e.check-a.check)},showEmptyList:e=>e.innerHTML=`
				<div id="emptyList" class="alert alert-info empty-list">
					<img src="./img/leaf.svg" alt="Empty" width="48" class="mt-3">
					<p class="empty-list__title">Список пуст</p>
				</div>
			`,clearCheckWords:e=>{localStorage.removeItem("checkWords")},updateDeletedWordCount:()=>P.textContent=m.length,updateWordCount:()=>j.textContent=n.length,updateRestoreBtn:()=>restoreBtn.disabled=!m.length,updateDelAllWordsBtn:()=>{O.disabled=!n.length},updateMarkUndoneBtn:()=>V.disabled=!n.length||!n.every(({check:e})=>e),updateDelDoneWordsBtn:()=>F.disabled=!n.length||!n.some(({check:e})=>e),updateToggleSelectAllBtn:()=>{M.textContent=h.length?"Вернуть исходное выделение":"Выделить все",M.disabled=!n.length||n.every(({check:e})=>e)&&!h.length},generatePageNumbers:()=>{E.innerHTML="";for(let e=1;e<=Math.ceil(n.length/$);e++)E.innerHTML+=`<span ${T.value===1&&e===1?"class='selected'":""} data-page="${e}">${e}</span>`},showActiveNumberOfPage:()=>{E.querySelectorAll("span").forEach(a=>{a.dataset.page==T.value?a.classList.add("selected"):a.classList.remove("selected")})},updatePageControl:e=>J.style.display=e.length?"block":"none",updateHideAll:e=>{n.every(a=>a[e].isHidden)?(document.querySelector(`.hide-all-words[data-hide-element="${e}"]`).innerHTML='<i class="fas fa-eye"></i> Show All',document.querySelectorAll(`.hide-${e}[data-hide-element="${e}"]`).forEach(a=>a.innerHTML='<i class="fas fa-eye"></i> Show')):(document.querySelector(`.hide-all-words[data-hide-element="${e}"]`).innerHTML='<i class="fas fa-eye-slash"></i> Hide All',document.querySelectorAll(`.hide-${e}[data-hide-element="${e}"]`).forEach(a=>a.innerHTML='<i class="fas fa-eye-slash"></i> Hide'))}},p=i.saveToLS,Y=i.sortWords,B=i.showEmptyList,q=i.clearCheckWords,D=i.updateDeletedWordCount,A=i.updateWordCount,S=i.updateDelAllWordsBtn,b=i.updateMarkUndoneBtn,L=i.updateDelDoneWordsBtn,v=i.updateToggleSelectAllBtn,I=i.generatePageNumbers,N=i.showActiveNumberOfPage,H=i.updatePageControl,C=i.updateHideAll,Z=()=>{const e=w.querySelectorAll(".example-box-input");e&&e.forEach((a,l)=>{if(l===0){if(a.querySelector(".add-example-btn"))return;a.insertAdjacentHTML("beforeend",`<button type="button" class="btn btn-primary add-example-btn">
					Добавить пример
				</button>`);return}a.remove()})},oe=()=>{n.length?(f(),I(),C("word1"),C("word2")):(B(list),H(n)),A(),D(),S(),b(),L(),v()};function ee(e){return/\d/.test(e)}function te(e){return/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(e)}const x=e=>ee(e)||te(e)||e.length<=1,ie=e=>{const{target:a}=e;console.log(a.value),localStorage.setItem("view",JSON.stringify(a.value)),f()},ae=e=>{const a=w.querySelectorAll(".example-input");console.log(a),!(!a||!a.length)&&a.forEach(l=>{l.value.trim().length&&e.examples.push(l.value.trim())})},de=(e,a)=>{const{currentTarget:l}=e;if(!l.matches(".hide-all-words"))return;const s=r.querySelectorAll(".list-group-item"),t=l.dataset.hideElement,u=a.every(d=>d[t].isHidden);s.forEach((d,g)=>{let c=d.querySelector(`.${t}-text`);u?(c.innerText=a[g][t].text,a.map(o=>{o[t].isHidden=!1})):(c.innerText="😊",a.map(o=>{o[t].isHidden=!0}))}),C(t),p("words",a)},ce=()=>{w.insertAdjacentHTML("beforeend",`<div class="example-box-input d-flex gap-3">
		<input
			class="example-input form-control"
			type="text"
			name="input"
			placeholder="Добавить пример"
		/>
		<button class="btn btn-danger cancel-example-btn">Отменить пример</button>
		<button class="btn btn-primary add-example-btn">Добавить пример</button>
	</div>`)},re=e=>{const{target:a}=e;if(a.matches(".cancel-example-btn")){a.closest(".example-box-input").remove();const s=w.querySelectorAll(".example-box-input");if(s.length===1)console.log(s),s[0].insertAdjacentHTML("beforeend",'<button class="btn btn-primary add-example-btn">Добавить пример</button>');else{const t=s[s.length-1].querySelector(".cancel-example-btn"),u=s[s.length-1].querySelector(".add-example-btn");console.log(t,u),u||s[s.length-1].insertAdjacentHTML("beforeend",`
					<button class="btn btn-primary add-example-btn">Добавить пример</button>`)}}},pe=(e,a)=>{const{target:l}=e;l.matches("#prev")&&a.value>1?--a.value:l.matches("#next")&&a.value<Math.ceil(n.length/10)&&++a.value,f(),N()},ue=(e,a)=>{const{target:l}=e;if(!l.hasAttribute("data-page"))return;const s=+l.dataset.page;a.value=s,f(),N()},me=(e,a)=>{e.querySelectorAll(".list-group-item").forEach(s=>{s.querySelector(".word1-text").textContent.toLowerCase().includes(a.value.trim().toLowerCase())?s.classList.remove("d-none"):s.classList.add("d-none")})},fe=()=>{console.log("filterWords");const{value:e}=G,{value:a}=K,{value:l}=Q,{value:s}=X,t=[e,a,l,s].filter(Boolean);r.querySelectorAll(".list-group-item").forEach(d=>{if(!t.length){d.classList.remove("d-none");return}const g=d.dataset.filter;if(!g){d.classList.add("d-none");return}const c=g.split(" ");t.every(o=>c.includes(o))?d.classList.remove("d-none"):d.classList.add("d-none")})},se=(e,a)=>{a=[...e],p("checkWords",a);for(let l=0;l<e.length;l++)e[l].check=!0;r.querySelectorAll(".list-group-item").forEach(l=>l.classList.add("checked"))},le=(e,a)=>{e.splice(0,e.length,...JSON.parse(localStorage.getItem("checkWords")??[])),f(),q(a)},ge=e=>{for(let a=0;a<e.length;a++)e[a].check=!1;r.querySelectorAll(".list-group-item").forEach(a=>a.classList.remove("checked")),b(),p("words",e),h.length&&q(h)},he=()=>{n.every(({check:e})=>e)?le(n,h):se(n,h),L(),b(),v(),p("words",n)},be=e=>{m.push(...e),e=[],r.innerHTML="",B(r),p("words",e),p("delWords",m),v(),b(),S(),L(),A(e),D(m),H(e)},ve=e=>{e=e.filter(({check:a})=>!a),m.push(...e),p("delWords",m),e.length?f():B(r),v(),b(),S(),L(),p("words",e),A(e),D(m),H(e)},ye=e=>{e.preventDefault();const a=W.value.trim();if(console.log(a,x(a)),console.log(x(k.value.trim())),x(a)||x(k.value.trim())||n.find(s=>s.word1.text.toLowerCase()===a.toLowerCase())){y.input.forEach(s=>s.classList.add("error")),y.reset(),W.focus();return}y.input.forEach(s=>s.classList.remove("error"));const l={id:Date.now(),check:!1,done:!1,word1:{text:a,isHidden:!1},word2:{text:k.value.trim(),isHidden:!1},filter:{category:U.value.trim(),part:z.value.trim(),level:R.value.trim(),type:_.value.trim()},examples:[]};n.push(l),ae(l),Z(),n.sort((s,t)=>s.word1.text.localeCompare(t.word1.text)),f(),p("words",n),y.reset(),W.focus(),A(n),n.length===1?(H(n),S(),v()):n.length===$+1&&I()};export{re as A,ie as B,p as a,D as b,q as c,H as d,v as e,S as f,I as g,L as h,b as i,C as j,x as k,oe as l,ye as m,me as n,fe as o,ge as p,be as q,f as r,B as s,he as t,A as u,ve as v,pe as w,ue as x,ce as y,de as z};
