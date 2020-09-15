if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../onekit/ui/a/a?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/address/address?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/br/br?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/b/b?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/command/command?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/div/div?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/dl/dl?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/dt/dt?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/dd/dd?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../onekit/ui/em/em?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/fieldset/fieldset?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/h1/h1?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/h2/h2?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/h3/h3?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/h4/h4?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/h5/h5?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/h6/h6?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/figure/figure?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/figcaption/figcaption?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/font/font?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/footer/footer?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/head/head?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/header/header?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/hr/hr?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/i/i?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/hgroup/hgroup?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/del/del?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/dialog/dialog?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/embed/embed?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/audio/audio?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/area/area?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/button/button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/body/body?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/abbr/abbr?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/article/article?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/aside/aside?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/base/base?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/bdi/bdi?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/bdo/bdo?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/blockquote/blockquote?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/canvas/canvas?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/caption/caption?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/center/center?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/cite/cite?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/code/code?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/col/col?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/colgroup/colgroup?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/data/data?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/details/details?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/dfn/dfn?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/html/html?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/iframe/iframe?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/img/img?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/input/input?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/ins/ins?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/kbd/kbd?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/label/label?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/legend/legend?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/li/li?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/link/link?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/main/main?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/map/map?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/mark/mark?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/menu/menu?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/menuitem/menuitem?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/meta/meta?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/meter/meter?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/nav/nav?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/noscript/noscript?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/object/object?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/ol/ol?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../onekit/ui/optgroup/optgroup?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/option/option?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/output/output?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/p/p?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/param/param?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/picture/picture?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/pre/pre?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/progress/progress?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/q/q?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/rb/rb?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/rp/rp?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/rt/rt?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/rtc/rtc?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/ruby/ruby?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/s/s?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/samp/samp?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/script/script?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/section/section?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/select/select?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/slot/slot?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/small/small?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/source/source?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/span/span?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/strike/strike?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/strong/strong?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/style/style?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/sub/sub?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/summary/summary?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/sup/sup?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/table/table?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/tbody/tbody?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/td/td?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/template/template?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/textarea/textarea?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/tfoot/tfoot?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/th/th?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/thead/thead?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/time/time?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/title/title?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/tr/tr?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/track/track?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/tt/tt?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/u/u?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/ul/ul?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/var/var?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/video/video?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../onekit/ui/wbr/wbr?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../gong/gong?hash=fe7202f96bee0dbffbceeb634c4ea7856e6eb36e');
require('../../pages/index/index?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}