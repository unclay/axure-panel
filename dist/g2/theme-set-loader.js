$(function() {
  // 异步加载脚本，全部加载后完成回调
  function loadScript (files, queueIndex, callback) {
    queueIndex = queueIndex || 0;
    if (files[queueIndex]) {
      var script = document.createElement('script');
      script.src = files[queueIndex];
      document.body.appendChild(script);
      script.onload = function () {
        loadScript(files, queueIndex + 1, callback);
      };
    } else if (callback) {
      callback();
    }
  }
  var rootDoamin = location.hostname.split('.').slice(-2).join('.');
  var domain = location.hostname.match(/(local|office)\./) ? 'static.' + rootDoamin : location.hostname;

  // custom minimap
  var basename = '//' + domain;
  loadScript([
    basename + '/plugins/g2/theme-set.dll.js',
    basename + '/plugins/g2/theme-set.js',
  ]);
});