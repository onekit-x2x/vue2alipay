import TheKit, {fixurl} from "../../lib/TheKit"
Component({
  mixins: [],
  data: {},
  props: {    
     onekitClass:"",    
     onekitStyle:"",    
     onekitId:"", 
     width:"",
     height:"",
     src:"",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
     image_load(e){
      const that = this;
      const size = e.detail;
      const query = wx.createSelectorQuery().in(that);
query.select('.onekit-img').boundingClientRect();
query.exec(function(res){
var WIDTH = res[0].width;
var HEIGHT = res[0].height;
  
  var data2 = {};
  if(!that.properties.width && !that.properties.height){

    data2.weixin_width = size.width+"px";
    data2.weixin_height = size.height+"px";
  }else      if(!that.properties.width && that.properties.height){
    console.log(WIDTH,HEIGHT,size)
   // data2.weixin_width = size.width*this.properties.height/size.height+"px";
    data2.weixin_width = size.width*HEIGHT/size.height+"px";
  }else   if(that.properties.width && !that.properties.height){
   // data2.weixin_height = size.height*this.properties.width/size.width+"px";
    data2.weixin_height = size.height*WIDTH/size.width+"px";
    }
    that.setData(data2);
});
     

    }
  },
    lifetimes: {
    attached: function() {
      const weixin_width =this.properties.width?(this.properties.width.indexOf("%")?this.properties.width:(this.properties.width+"px")):"auto";
      const weixin_height =this.properties.height?(this.properties.height.indexOf("%")?this.properties.height:(this.properties.height+"px")):"auto";
      var weixin_src = this.properties.src; 
      
     
      if(!weixin_src.indexOf("://")){
        const currentUrl = TheKit.currentUrl();
        weixin_src =  "/"+fixurl(currentUrl,weixin_src);
    }
      this.setData({weixin_width,weixin_height,weixin_src});
    },
    detached: function() {
     
    },
  },
});
