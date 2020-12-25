Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msgList:{
      type:JSON,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    placeholder:'',
    currentIndex:0,
    index:0,
    isFocus:false,
    msgList: [],
    content:'',
    confirmContent:''
  },

  ready(){
    this.setData({
      msgList:this.properties.msgList
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeIndex(e){
      this.setData({
        index:e.detail.current
      })
    },
    focusInput(){
      this.setData({
        isFocus:true,
        placeholder:this.data.msgList[this.data.index].title
      })
    },
    blurInput(){
      if (this.data.content == ""){
        this.setData({
          isFocus: false,
          currentIndex: this.data.index,
          placeholder: ''
        })
      }
    },
    confirm(e){
      var confirmContent = ''
      if(e.detail.value==''){
        confirmContent = this.data.placeholder
      }else{
        confirmContent = e.detail.value
      }

      this.triggerEvent('search', {confirmContent})
    },
    inputContent(e){
      this.setData({
        content: e.detail.value
      })
    }
  }
})
