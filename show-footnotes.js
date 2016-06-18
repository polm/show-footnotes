// Generated by LiveScript 1.4.0
(function(){
  var showTooltip, divOver, removeTooltips, main;
  showTooltip = function(el){
    return function(){
      var tip, container, elnum;
      tip = document.createElement('div');
      tip.className = "tooltip";
      tip.style.top = (el.offsetTop + el.offsetHeight + 10) + 'px';
      container = el.closest('div').getBoundingClientRect();
      tip.style.left = container.left + 'px';
      tip.style.width = container.width + 'px';
      elnum = el.querySelector('a').id.slice(5);
      tip.innerHTML = document.body.querySelector("#fn" + elnum).innerHTML;
      this.onmouseout = function(){
        tip.hider = setTimeout(removeTooltips, 200);
        return tip.onmouseover = divOver;
      };
      return document.body.appendChild(tip);
    };
  };
  divOver = function(){
    clearTimeout(this.hider);
    return this.onmouseout = function(){
      return this.hider = setTimeout(removeTooltips, 200);
    };
  };
  removeTooltips = function(){
    var i$, ref$, len$, tip, results$ = [];
    for (i$ = 0, len$ = (ref$ = document.body.querySelectorAll(".tooltip")).length; i$ < len$; ++i$) {
      tip = ref$[i$];
      results$.push(tip.remove());
    }
    return results$;
  };
  main = function(){
    var refs, i$, len$, ref, results$ = [];
    refs = document.body.querySelectorAll('.footnote-ref');
    for (i$ = 0, len$ = refs.length; i$ < len$; ++i$) {
      ref = refs[i$];
      results$.push(ref.onmouseover = showTooltip(ref));
    }
    return results$;
  };
  main();
}).call(this);
