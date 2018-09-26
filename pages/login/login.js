// pages/login/login.js
import {iconLogo} from '../../utils/imageBase64.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: '',
    password: ''
  },
  loginSubmit: function(e){
    wx.showToast({
      title: '登录',
      icon: 'none',
      duration: 1500
    })
    console.log(this.data);
  },
  inputHandler: function(e){
    console.log(e.detail)
    let type = e.currentTarget.dataset.type;
    if (type == 'account') {
      this.data.account = e.detail.value;
    }
    if (type == 'password') {
      this.data.password = e.detail.value;
    }
  },
  register: function(){
    wx.navigateTo({
      url: '../register/register',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iconLogo: iconLogo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})