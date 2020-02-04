var app = new Framework7({
  root: '#app',
  name: 'lilix',
  id: 'com.lilix',
  routes: [
    {
      path: '/logo/',
      url: 'index.html',
    },
    {
      path: '/start/',
      url: 'start.html',
    },
    {
      path: '/home/',
      url: 'home.html',
    }
  ]
});
var mainView = app.views.create('.view-main',{
  mdSwipeBack: true,
});
var $$ = Dom7;
function start(){
  if(localStorage.getItem('started')=='on'){
    var a = '/home/';
  }
  if(localStorage.getItem('started')!=='on'){
    var a = '/start/'
  }
  mainView.router.navigate(a);    
  function cl(){
    mainView.router.clearPreviousHistory();
    mainView.router.updateCurrentUrl('start');
  }
  setTimeout(cl,600);
}
function started(){
  mainView.router.navigate('/home/');
  localStorage.setItem('started','on');  
  function cl(){
    mainView.router.clearPreviousHistory();
  }
  setTimeout(cl,600);
}
setTimeout(start, 1000);
$$(document).on('click', '#started', function(){
  started();
})
$$('#app').addClass('theme-dark');