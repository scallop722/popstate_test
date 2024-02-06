document.getElementById("alertModal").addEventListener("click", () => {
  alert("アラート");
})

document.getElementById("confirmModal").addEventListener("click", () => {
  confirm("確認");
})

document.getElementById("iframeModal").addEventListener("click", () => {
  var inlineStyle = `#modal{z-index:1000000;position:fixed}.modal{width:100%;height:100%;position:fixed;top:0;left:0;z-index:1000000}.modal__overlay{width:100%;height:100%;position:fixed;top:0;left:0;z-index:10000;background:rgba(102,102,102,.9);transition:all .3s}.modal-body{overflow:visible;width:320px;height:480px;position:absolute;top:50%;left:50%;z-index:10001;text-align:center;transform:translate(-50%,-50%)}@media screen and (max-width:480px){.modal-body{overflow:visible;width:85%;height:0;padding-top:132.8125%;box-sizing:border-box}}#modal__close{width:40px;height:40px;position:absolute;z-index:1000000;top:-15px;left:-15px;background:#fff;border-radius:50%;box-shadow:0 0 7px #141414}.modal .icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:inline-block;width:20px;height:20px;stroke-width:0;stroke:currentColor;fill:currentColor}#modal-content{position:relative}.modal__btn--line{width:100%;text-align:center;padding:0!important;margin:20px 0 15px!important}.modal__btn--line a{display:inline-block;font-size:20px!important;line-height:40px!important;color:#fff!important;text-decoration:none!important;background-color:#52b448!important;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 511.99'%3E%3Cpath d='M443.2 233.29c0-84.14-84.35-152.6-188-152.6s-188 68.46-188 152.6c0 75.43 66.9 138.61 157.26 150.55 6.13 1.32 14.46 4 16.57 9.27 1.89 4.76 1.24 12.2.61 17 0 0-2.21 13.26-2.69 16.09-.82 4.75-3.78 18.6 16.29 10.14s108.21-63.76 147.66-109.16c27.25-29.89 40.3-60.18 40.3-93.89zm-254.38 44.92a3.67 3.67 0 01-3.66 3.67h-52.69a3.6 3.6 0 01-2.53-1l-.06-.05v-.05a3.65 3.65 0 01-1-2.53v-81.96a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66v65.07h35.84a3.66 3.66 0 013.66 3.66zm31.8 0a3.65 3.65 0 01-3.66 3.65h-13.2a3.65 3.65 0 01-3.66-3.65v-81.92a3.66 3.66 0 013.66-3.66H217a3.66 3.66 0 013.66 3.66zm90.78 0a3.65 3.65 0 01-3.66 3.65h-13.19a3.67 3.67 0 01-.94-.12h-.05l-.25-.08h-.11l-.18-.08-.17-.08-.11-.06-.22-.14a3.45 3.45 0 01-.93-.9L254 229.56v48.66a3.66 3.66 0 01-3.67 3.65H237.1a3.65 3.65 0 01-3.66-3.65v-81.93a3.66 3.66 0 013.66-3.66h13.86l.21.05h.13l.21.07h.12a1.31 1.31 0 01.21.08l.12.06.19.11a.41.41 0 01.11.07l.19.13.1.07.19.16.07.07a2.28 2.28 0 01.22.22 3.58 3.58 0 01.28.37L290.89 245v-48.71a3.66 3.66 0 013.66-3.66h13.19a3.66 3.66 0 013.66 3.66zm72.83-68.74a3.66 3.66 0 01-3.65 3.67h-35.84V227h35.84a3.66 3.66 0 013.65 3.67v13.19a3.65 3.65 0 01-3.65 3.66h-35.84v13.85h35.84a3.65 3.65 0 013.65 3.66v13.19a3.66 3.66 0 01-3.65 3.67h-52.7a3.66 3.66 0 01-2.53-1l-.05-.05a.12.12 0 01-.05-.05 3.65 3.65 0 01-1-2.53V196.3a3.6 3.6 0 011-2.52l.06-.07a3.63 3.63 0 012.54-1h52.7a3.66 3.66 0 013.65 3.67z' fill='%23fff' data-name='レイヤー 1'/%3E%3C/svg%3E")!important;-webkit-background-size:50px auto!important;background-size:50px auto!important;background-position:5px 5px!important;border-radius:7px!important;padding:10px 15px 10px 60px!important}a.modal__btn--line:hover{color:#fff}#modal-content{width:320px;height:480px;border:none!important;margin:0!important}@media screen and (max-width:480px){#modal-content{width:100%;height:100%;position:absolute;top:0;left:0}}.modal__banner{line-height:0!important;padding:0!important;margin:0!important}`;
  var insStyleTag = document.createElement('style');
  insStyleTag.innerHTML = inlineStyle;
  document.head.insertAdjacentElement('beforeend', insStyleTag);

  var inlineContainerWrap = `<svg> <defs> <symbol id="icon-cross" viewBox="0 0 32 32"> <title>cross</title> <path d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"/> </symbol> </defs></svg><div id="modal"> <div class="modal"> <div class="modal__overlay"></div><div class="modal-body" id="modal__content"> <div id="modal__close"> <svg class="icon icon-cross"> <use xlink:href="#icon-cross"></use> </svg> </div></div></div></div>`;
  var pgModalTag = document.createElement('div');
  pgModalTag.id = 'modal';
  pgModalTag.innerHTML = inlineContainerWrap;
  document.getElementsByTagName('body')[0].insertAdjacentElement('beforeend', pgModalTag);

  let pgModalInnerTag = document.createElement('iframe');
  pgModalInnerTag = document.createElement('div');
  pgModalInnerTag.id = 'modal-content';
  pgModalInnerTag.innerHTML = `
    <div class="p-banner">
      <img src="./sample.png" width="320" height="480" />
    </div>`;
  document.getElementById('modal__content').insertAdjacentElement('beforeend', pgModalInnerTag);
  
  function pgModalClose() {
    var pgCloseEle = document.getElementById('modal__close');
    pgCloseEle.addEventListener('click', function () {
        var pgRemEle = document.getElementById('modal');
        pgRemEle.remove();
    }, false);
  }
  pgModalClose();
});