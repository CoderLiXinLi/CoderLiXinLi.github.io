(function (doc, win) {
  let docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        let clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        clientWidth = clientWidth > 800 ? 750 : clientWidth;
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        //css默认body隐藏，加载完适配后展现
        doc.body.style.display = "block";
      };
  if (!doc.addEventListener) return;
  //recalc();
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
