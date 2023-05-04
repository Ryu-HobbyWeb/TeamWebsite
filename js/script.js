// メニューアイコン、ナビゲーションリスト取得
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// メニューアイコンをクリック時の、トグルイベントハンドラー追加
menu.onclick = () => 
{
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
}

// Scroll Reveal ライブラリ初期化
const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

// 順次現れるように設定
sr.reveal('.team-text', {delay:200, origin:'top'});
sr.reveal('.team-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:500, origin:'right'});