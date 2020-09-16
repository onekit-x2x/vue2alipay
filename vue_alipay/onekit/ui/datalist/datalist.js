Component({
  mixins: [],
  data: {
    show:false
  },
  props: {     
    onekitClass:"",    
     onekitStyle:"",     
     onekitId:"", 
     text:"",
  },
  methods: {
    
    select_click(){
     this.setData({show:true});
    },
    option_change(e){
      //console.log("B",e);
   
      const newValue = e.detail.value;
      const text = e.detail.text;
      this.triggerEvent('change', {newValue}) 
      this.setData({show:false,text});
    }
  }
  },
});