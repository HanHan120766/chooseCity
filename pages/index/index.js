var cityfunc = require('../../utils/cityData.js');
const app = getApp()
var cityData = cityfunc.getData()
Page({
  data: {
    address: '请选择地址',
    cityData: [],
    pickerValue: [0, 0, 0],
    provinceList: [],
    isShowCityList: false
  },

  onLoad: function () {
    this.setData({
      cityData: cityData
    })
    console.log(cityData);
    this.initCityData()
  },
  onShow: function () {
  },
  onclickCell: function() {
    this.setData({
      isShowCityList: true
    })
  },
  initCityData: function() {
    var provinceList = []
    cityData.forEach((v, k) => {
      provinceList.push(v.name)
    })
  },
  cancelPicker: function () {
    this.setData({
      isShowCityList: false
    })
  },
  confirmPicker: function () {
    var pickerValue = this.data.pickerValue
    var p = cityData[pickerValue[0]].name
    var c = cityData[pickerValue[0]].children[pickerValue[1]].name
    var t = cityData[pickerValue[0]].children[pickerValue[1]].children[pickerValue[2]].name
    this.setData({
      isShowCityList: false,
      address: `${p} ${c} ${t}`
    })
  },
  bindChange: function (e) {
    var p = e.detail.value[0]
    var c = e.detail.value[1]
    var t = e.detail.value[2]

    if (p != this.data.pickerValue[0]) {
      c = 0,
      t = 0
    }
    if (c != this.data.pickerValue[1]) {
      t = 0
    }
    this.setData({
      pickerValue: [p, c, t]
    })
  }

})
