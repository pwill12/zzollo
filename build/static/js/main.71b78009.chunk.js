(this.webpackJsonpzolo=this.webpackJsonpzolo||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),l=a.n(s),c=(a(14),a(2)),o=a(3),i=a(4),u=a(5),h=(a(15),a(1)),m=a.n(h),p=a(6),f=(a(17),a(18),function(e){return n.a.createElement("div",{className:"Item-Single"},n.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("b",{className:"Item-Title"},e.title.length>25?e.title.substring(0,25)+"...":e.title),"github"===e.source?n.a.createElement("svg",{style:{float:"right"},height:"24",viewBox:"0 0 16 16",version:"1.1",width:"24","aria-hidden":"true"},n.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})):null,"gitlab"===e.source?n.a.createElement("svg",{style:{float:"right"},width:"24",height:"24",viewBox:"0 0 36 36"},n.a.createElement("path",{fill:"#e24329",d:"M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"}),n.a.createElement("path",{fill:"#e24329",d:"M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"}),n.a.createElement("path",{fill:"#e24329",d:"M18,34.38 3,14 33,14 Z"}),n.a.createElement("path",{fill:"#fc6d26",d:"M18,34.38 11.38,14 2,14 6,25Z"}),n.a.createElement("path",{fill:"#fc6d26",d:"M18,34.38 24.62,14 34,14 30,25Z"}),n.a.createElement("path",{fill:"#fca326",d:"M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"}),n.a.createElement("path",{fill:"#fca326",d:"M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"})):null),n.a.createElement("hr",null),n.a.createElement("div",{className:"Item-Author"},n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("img",{src:e.author_avatar,className:"avatar",alt:""})),n.a.createElement("td",null,n.a.createElement("i",null,e.author)))))),n.a.createElement("p",{className:"Item-Description"},null!=e.description?e.description.length>67?e.description.substring(0,67)+"...":e.description:"No Description here"),n.a.createElement("div",{className:"details"},n.a.createElement("i",null,n.a.createElement("b",{style:{fontSize:"15px"}},e.language),", ",n.a.createElement("b",null,e.stars)," stars, ",n.a.createElement("b",null,e.forks)," forks || ",n.a.createElement("b",null,e.issues),"issues")))}),g=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).fetch_projects=function(t){t=t.toLowerCase();var a="github";fetch(e.state.links[a].link+t).then(function(){var r=Object(p.a)(m.a.mark((function r(n){var s,l,c;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.json();case 2:s=r.sent,l=[],c=e.state.links[a],s.items.map((function(e,t){var r=c.author.split("|"),n=c.author_avatar.split("|");return l.push({index:t,source:a,title:e[c.name],url:e[c.html_url],author:e[r[0]][r[1]],author_avatar:e[n[0]][n[1]],stars:parseInt(e[c.stars]),forks:e[c.forks],issues:e[c.issues],language:e[c.language],description:e[c.description]}),!0})),a="gitlab",fetch(e.state.links[a].link+t).then(function(){var t=Object(p.a)(m.a.mark((function t(r){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.json();case 2:s=t.sent,c=e.state.links[a],s.map((function(e,t){var r=c.author.split("|"),n=c.author_avatar.split("|"),s="";return"undefined"!=typeof e[n[0]][n[1]]&&null!=e[n[0]][n[1]]&&(s=-1===e[n[0]][n[1]].indexOf("http")?"https://gitlab.com"+e[n[0]][n[1]]:e[n[0]][n[1]]),l.push({index:t,source:a,title:e[c.name],url:e[c.html_url],author:e[r[0]][r[1]],author_avatar:s,stars:parseInt(e[c.stars]),forks:e[c.forks],issues:"-",language:"-",description:e[c.description]}),!0})),l.sort((function(e,t){return e.stars-t.stars})).reverse(),e.setState({load:!1,items:l,count:l.length});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.setState({errorMessage:t.toString()}),console.error("There was an error!",t)}));case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()).catch((function(t){e.setState({errorMessage:t.toString()}),console.error("There was an error!",t)}))},e.componentWillReceiveProps=function(t){!0===t.go_search&&(e.setState({items:[],load:!0}),console.log("Start-Fetching..."),e.fetch_projects(t.search))},e.state={links:{github:{link:"https://api.github.com/search/repositories?sort=stars&q=",count:"total_count",items:"items",author:"owner|login",author_avatar:"owner|avatar_url",name:"name",full_name:"full_name",stars:"stargazers_count",language:"language",forks:"forks",issues:"open_issues",html_url:"html_url",description:"description"},gitlab:{link:"https://gitlab.com/api/v4/projects?search=",count:"",items:"",author:"namespace|name",author_avatar:"namespace|avatar_url",name:"name",full_name:"name_with_namespace",stars:"star_count",language:"",forks:"forks_count",issues:"",html_url:"web_url",description:"description"},bitbucket:{link:"https://api.bitbucket.org/2.0/repositories",count:"",items:"",author:"owner|display_name",author_avatar:"owner|links|avatar|href",name:"name",full_name:"full_name",stars:"",language:"language",forks:"",issues:"",html_url:"project|links|html|href",description:"description"}},items:[],load:!1,count:0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({items:[]}),this.fetch_projects("reactjs")}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("center",null,n.a.createElement("div",{className:"Item-List"},n.a.createElement("div",{style:{width:"100%",textAlign:"left"}},n.a.createElement("span",null,"Showing bests ",this.state.count," results for ",0===this.props.search.length?"reactJs":this.props.search,".")),n.a.createElement("br",null),this.state.load?n.a.createElement("img",{src:"/loading.gif",alt:""}):n.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},this.state.items.map((function(e,t){return n.a.createElement(f,{key:t,source:e.source,url:e.url,title:e.title,author:e.author,author_avatar:e.author_avatar,language:e.language,stars:e.stars,issues:e.issues,forks:e.forks,description:e.description})}))))))}}]),a}(r.Component),d=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).search_query=function(e){},e.state={search:"",go_search:!1},e}return Object(o.a)(a,[{key:"handle_change",value:function(e){"Enter"===e.key?(console.log(">> Enter have been pressed !!!"),this.setState({go_search:!0})):this.setState({go_search:!1}),this.setState({search:e.target.value})}},{key:"go_search_change",value:function(){console.log("Rechange-go_search"),this.setState({go_search:!this.state.go_search})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("div",{className:"search-box"},n.a.createElement("p",{className:"head"},n.a.createElement("code",null,"Z0l0"),n.a.createElement("small",null," Search open-source projects on github, gitlab and bitbucket at the same time in one place...")),n.a.createElement("input",{type:"text",className:"search-zone",onKeyDown:function(t){return e.handle_change(t)},placeholder:"Search keyword(s) for open-source project(s)..."})),n.a.createElement(g,{search:this.state.search,go_search:this.state.go_search})))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.71b78009.chunk.js.map