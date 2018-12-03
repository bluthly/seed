const config_ = {
  "list": [
    {
      "groupType": "compGroup",
      "groupTitle": "报表插件",
      "groupList": [
        {
          "name": "折线图",
          "icon": "./../../assets/images/zxt.jpg",
          "type": "line"
        },
        {
          "name": "对比图",
          "icon": "./../../assets/images/zzt.jpg",
          "type": "bar_cross"
        },
        {
          "name": "饼状图",
          "icon": "./../../assets/images/zzt.jpg",
          "type": "pie"
        },
        {
          "name": "对比趋势图",
          "icon": "./../../assets/images/zzt.jpg",
          "type": "linestack"
        }
        // {
        //   "name": "横型柱状图",
        //   "icon": "./../../assets/images/zzt.jpg",
        //   "type": "bar_cross"
        // }
      ]
    },
    {
      "groupType": "compGroup",
      "groupTitle": "全局过滤插件",
      "groupList": [
        {
          "name": "单日期",
          "icon": "./../../assets/images/zxt.jpg",
          "type": "flatpickr_single",
          "cascades": {}
        },
        {
          "name": "双日期",
          "icon": "./../../assets/images/zxt.jpg",
          "type": "flatpickr_range",
          "cascades": {}
        },
        {
          "name": "下拉单选",
          "icon": "./../../assets/images/zxt.jpg",
          "type": "singleSelect",
          "list": [],
          "value": "",
          "ename":"",
          "cname":"",
          "db":"",
          "sql":"",
          "sourceType":"dict",
          "cascades": {}
        },
        {
          "name": "下拉多选",
          "icon": "./../../assets/images/zxt.jpg",
          "type": "multiSelect",
          "list": [],
          "value": "",
          "ename":"",
          "cname":"",
          "db":"",
          "sql":"",
          "sourceType":"dict",
          "cascades": {}
        }
      ]
    }
  ]
}

export {config_};
