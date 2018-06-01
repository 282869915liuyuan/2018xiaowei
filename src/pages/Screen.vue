<template>
  <div class="screenBg">
    <!-- 标题 -->
    <div style="height: 70px;">
      <div style="height: 65px;line-height: 65px;text-align: center;vertical-align: middle;">
      <img src="../assets/title-left.png" style="line-height: 65px;text-align: center;vertical-align: middle;"/>
        <span class="title">中消云物联网大数据应用平台</span>
      <img src="../assets/title-right.png" style="line-height: 65px;text-align: center;vertical-align: middle;"/>
      </div>
      <div style="margin-top: -12px;">
        <img src="../assets/title-bottom.png"/>
      </div>
    </div>
    <!-- 中 -->
    <div style="margin-top: 30px;height: 805px;clear: both;">
      <div class="center-float">
        <!-- 今日统计 -->
        <div style="padding-bottom: 20px">
          <div class="box-title box-title-text">
            今日统计
          </div>
          <div class="box-body">
            <!-- 今日统计 -->
            <div id="todayStatistics" style="height: 220px;"></div>
          </div>
        </div>
        <!-- 警情高发时间图 -->
        <div style="padding-bottom: 20px">
          <div class="box-title box-title-text">
            警情高发时间图
          </div>
          <div class="box-body">
            <!-- 警情高发时间图 -->
            <div style="height: 220px;"></div>
          </div>
        </div>
        <!-- 网关在线 -->
        <div style="padding-bottom: 20px">
          <div class="box-title box-title-text">
            网关在线
          </div>
          <div class="box-body">
            <!-- 网关在线 -->
            <div id="gatewayOnline" style="height: 220px;"></div>
          </div>
        </div>
      </div>
      <!-- 中侧(上中) -->
      <div style="width: 54%; float: left;">
        <!-- 上 -->
        <div>
          <!-- 当前火警总数 -->
          <div class="box-body" style="width: 23.5%;height: 80px;float: left;margin-right: 2%;">
            <div style="float: left;">
              <i class="icon-screen icon-screen-fire" style="margin-left: 14px;margin-top: 14px;"></i>
            </div>
            <div style="margin-left: 50px;">
            <p class="current-text">当前火警总数</p>
            <p class="current-num">47次</p>
            </div>
          </div>
          <!-- 当前故障总数 -->
          <div class="box-body" style="width: 23.5%;height: 80px;float: left;margin-right: 2%;">
            <div style="float: left;">
              <i class="icon-screen icon-screen-fault" style="margin-left: 14px;margin-top: 14px;"></i>
            </div>
            <div style="margin-left: 50px;">
              <p class="current-text">当前故障总数</p>
              <p class="current-num">145次</p>
            </div>
          </div>
          <!-- 项目接入总数 -->
          <div class="box-body" style="width: 23.5%;height: 80px;float: left;margin-right: 2%;">
            <div style="float: left;">
              <i class="icon-screen icon-screen-project" style="margin-left: 14px;margin-top: 14px;"></i>
            </div>
            <div style="margin-left: 50px;">
              <p class="current-text">项目接入总数</p>
              <p class="current-num">425家</p>
            </div>
          </div>
          <!-- 前端设备总数 -->
          <div class="box-body" style="width: 23.5%;height: 80px;float: left;">
            <div style="float: left;">
              <i class="icon-screen icon-screen-device" style="margin-left: 14px;margin-top: 14px;"></i>
            </div>
            <div style="margin-left: 50px;">
              <p class="current-text">前端设备总数</p>
              <p class="current-num">76589个</p>
            </div>
          </div>
        </div>
        <div style="clear: both"></div>
        <!-- 地图 -->
        <div id="allmap" style="margin-top: 20px;height: 697px;"></div>
      </div>
      <!-- 右侧 -->
      <div class="center-float">
        <!-- 运行分析 -->
        <div style="padding-bottom: 20px">
          <div class="box-title box-title-text">
            运行分析
          </div>
          <div class="box-body" style="height: 220px">
            <!-- 运行分析 -->
            <div id="radarDimension" style="width:60%;height: 220px;float: left"></div>
            <div id="" style="width:40%;height: 220px;float: left">
              <div class="lanren">
                <ul>
                  <li><img src="../assets/pic1.png"> </li>
                  <li><img src="../assets/pic2.png"> </li>
                  <li><img src="../assets/pic3.png"> </li>
                  <li style="margin-top: 79px;font-family: MicrosoftYaHeiLight;font-size: 18px;font-weight: normal;font-stretch: normal;line-height: 0px;letter-spacing: 1px;color: #03b0d5;">70 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- 设备类型统计 -->
        <div style="padding-bottom: 20px">
          <div class="box-title box-title-text">
            设备类型统计
          </div>
          <div class="box-body">
            <!-- 设备类型统计 -->
            <div style="height: 488px;">
              <table class="table table-striped" style="border-collapse: collapse;width: 100%;font-family: MicrosoftYaHei;font-size: 12px;font-weight: normal;font-stretch: normal;line-height: 0px;letter-spacing: 1px;color: #cccccc;">
                <thead>
                <tr style="height: 46px; line-height: 46px;cursor: pointer">
                  <td style="text-align: left;text-indent: 20px;">设备类型名称</td>
                  <td>火警总数(个)</td>
                  <td>故障总数(个)</td>
                </tr>
                </thead>
                <tbody>
                <!---->
                <tr v-for="(item, index) in this.runningStatus" v-bind:key="index" style="height: 46px; line-height: 46px;cursor: pointer;border: 1px solid rgba(85, 202, 255, 0.3)"  :id=item.deviceTypeID>
                  <td style="text-align: left;text-indent: 20px;">{{item.deviceTypeName}}</td>
                  <td>{{item.FireCount}} </td>
                  <td>{{item.FaultCount}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div>-->
    <!--</div>-->
    <!-- 设备类型统计 -->
    <!-- 处置 -->
    <!--<div id="handle" style="position: relative; height: 250px;width: 350px;"></div>-->
    <!-- 处置率 -->
    <!--<div id="disposalRate" style="position: relative; height: 250px;width: 350px;"></div>-->
    <!-- 故障统计 -->
    <!-- 维度图 -->
    <!-- 评分 -->
    <!-- 下 -->
    <!-- 月报警&故障趋势图 -->
    <!--<div id="trendMap" style="height: 479px;"></div>-->
    <!-- 下 -->
    <div style="clear: both"></div>
    <div style="width: 100%">
      <div class="box-body" style="width: 48%;float:left;height: 146px;padding-left: 1%;padding-right: 1%"></div>
      <div class="box-body" style="width: 48%;float:left;height: 146px;padding-right: 1%"></div>
    </div>
  </div>
</template>

<script>
import BMap from 'BMap'
import { baseImgPath, baseUrl } from '@/config/env'
export default {
  data () {
    return {
      projectGuid: 'all',
      baseUrl,
      // 地图宽和高
      sWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      sHeight: (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 80,
      runningStatus: [{
        FaultCount: '0',
        FireCount: '1',
        deviceTypeID: '66',
        deviceTypeName: '感温火灾探测器'}, {
        FaultCount: '134',
        FireCount: '12',
        deviceTypeID: '54',
        deviceTypeName: '测温式电气火灾监控探测器'}, {
        FaultCount: '0',
        FireCount: '1',
        deviceTypeID: '101',
        deviceTypeName: '手动火灾报警按钮'}, {
        FaultCount: '0',
        FireCount: '1',
        deviceTypeID: '102',
        deviceTypeName: '消火栓按钮'}, {
        FaultCount: '10',
        FireCount: '20',
        deviceTypeID: '127',
        deviceTypeName: '消防应急广播'}, {
        FaultCount: '0',
        FireCount: '1',
        deviceTypeID: '139',
        deviceTypeName: '复合式火灾探测器'}, {
        FaultCount: '0',
        FireCount: '15',
        deviceTypeID: '26',
        deviceTypeName: '输出模块'}, {
        FaultCount: '0',
        FireCount: '10',
        deviceTypeID: '25',
        deviceTypeName: '输入模块'}, {
        FaultCount: '0',
        FireCount: '3',
        deviceTypeID: '69',
        deviceTypeName: '单向地埋标志灯'}
      ],
      markPoints: [
        {
          'projectGuid': '1',
          'projectName': '751D.PARK',
          'lng': 116.343134,
          'lat': 39.931379,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300001',
          'isThreePlace': false
        },
        {
          'projectGuid': '2',
          'projectName': 'SOHO现代城',
          'lng': 116.367855,
          'lat': 39.968991,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300002',
          'isThreePlace': false
        },
        {
          'projectGuid': '3',
          'projectName': '百度大厦',
          'lng': 116.517908,
          'lat': 39.98005,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300003',
          'isThreePlace': false
        },
        {
          'projectGuid': '4',
          'projectName': '北方明珠大厦',
          'lng': 116.489162,
          'lat': 39.950409,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300004',
          'isThreePlace': false
        },
        {
          'projectGuid': '5',
          'projectName': '北京国际会议中心',
          'lng': 116.416148,
          'lat': 39.999508,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300005',
          'isThreePlace': false
        },
        {
          'projectGuid': '6',
          'projectName': '奔驰大厦',
          'lng': 116.417873,
          'lat': 39.966337,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300006',
          'isThreePlace': false
        },
        {
          'projectGuid': '7',
          'projectName': '博瑞大厦',
          'lng': 116.464441,
          'lat': 39.940673,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300007',
          'isThreePlace': false
        },
        {
          'projectGuid': '8',
          'projectName': '丹棱SOHO',
          'lng': 116.422472,
          'lat': 39.949966,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300008',
          'isThreePlace': false
        },
        {
          'projectGuid': '9',
          'projectName': '得实大厦',
          'lng': 116.394301,
          'lat': 39.949966,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300009',
          'isThreePlace': false
        },
        {
          'projectGuid': '10',
          'projectName': '方恒国际中心',
          'lng': 116.423047,
          'lat': 39.924739,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300010',
          'isThreePlace': false
        },
        {
          'projectGuid': '11',
          'projectName': '丰融国际',
          'lng': 116.4012,
          'lat': 39.899503,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300011',
          'isThreePlace': false
        },
        {
          'projectGuid': '12',
          'projectName': '富凯大厦',
          'lng': 116.362106,
          'lat': 39.902603,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300012',
          'isThreePlace': false
        },
        {
          'projectGuid': '13',
          'projectName': '光耀东方广场',
          'lng': 116.33796,
          'lat': 39.924297,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300013',
          'isThreePlace': false
        },
        {
          'projectGuid': '14',
          'projectName': '硅谷亮城',
          'lng': 116.325886,
          'lat': 39.935805,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300014',
          'isThreePlace': false
        },
        {
          'projectGuid': '15',
          'projectName': '国贸写字楼',
          'lng': 116.33681,
          'lat': 39.956604,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300015',
          'isThreePlace': false
        },
        {
          'projectGuid': '16',
          'projectName': '海龙大厦',
          'lng': 116.313238,
          'lat': 39.953506,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300016',
          'isThreePlace': false
        },
        {
          'projectGuid': '17',
          'projectName': '恒基中心写字楼',
          'lng': 116.290817,
          'lat': 39.954391,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300017',
          'isThreePlace': false
        },
        {
          'projectGuid': '18',
          'projectName': '恒通商务园',
          'lng': 116.293691,
          'lat': 39.938903,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300018',
          'isThreePlace': false
        },
        {
          'projectGuid': '19',
          'projectName': '华腾北搪商务大厦',
          'lng': 116.271844,
          'lat': 39.950409,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300019',
          'isThreePlace': false
        },
        {
          'projectGuid': '20',
          'projectName': '加州水郡',
          'lng': 116.317263,
          'lat': 39.914557,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300020',
          'isThreePlace': false
        },
        {
          'projectGuid': '21',
          'projectName': '佳程广场',
          'lng': 116.296566,
          'lat': 39.913672,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300021',
          'isThreePlace': false
        },
        {
          'projectGuid': '22',
          'projectName': '嘉铭中心',
          'lng': 116.378204,
          'lat': 39.883559,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300022',
          'isThreePlace': false
        },
        {
          'projectGuid': '23',
          'projectName': '金澳国际',
          'lng': 116.347733,
          'lat': 39.890203,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300023',
          'isThreePlace': false
        },
        {
          'projectGuid': '24',
          'projectName': '金成建国5号',
          'lng': 116.459267,
          'lat': 39.906588,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300024',
          'isThreePlace': false
        },
        {
          'projectGuid': '25',
          'projectName': '金码大厦',
          'lng': 116.431096,
          'lat': 39.915886,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300025',
          'isThreePlace': false
        },
        {
          'projectGuid': '26',
          'projectName': '金融街中心',
          'lng': 116.492037,
          'lat': 39.931379,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300026',
          'isThreePlace': false
        },
        {
          'projectGuid': '27',
          'projectName': '金泰大厦',
          'lng': 116.540905,
          'lat': 39.920755,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300027',
          'isThreePlace': false
        },
        {
          'projectGuid': '28',
          'projectName': '金隅大成国际中心',
          'lng': 116.511584,
          'lat': 39.886217,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300028',
          'isThreePlace': false
        },
        {
          'projectGuid': '29',
          'projectName': '金长安大厦',
          'lng': 116.439145,
          'lat': 39.873814,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300029',
          'isThreePlace': false
        },
        {
          'projectGuid': '30',
          'projectName': '京汇大厦',
          'lng': 116.483988,
          'lat': 39.862738,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300030',
          'isThreePlace': false
        },
        {
          'projectGuid': '31',
          'projectName': '久凌大厦',
          'lng': 116.33451,
          'lat': 39.860966,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300031',
          'isThreePlace': false
        },
        {
          'projectGuid': '32',
          'projectName': '君泰中央公园',
          'lng': 116.29944,
          'lat': 39.878244,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300032',
          'isThreePlace': false
        },
        {
          'projectGuid': '33',
          'projectName': '凯晨世贸中心',
          'lng': 116.30404,
          'lat': 39.896846,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300033',
          'isThreePlace': false
        },
        {
          'projectGuid': '34',
          'projectName': '联合大厦',
          'lng': 116.340259,
          'lat': 39.885331,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300034',
          'isThreePlace': false
        },
        {
          'projectGuid': '35',
          'projectName': '洛克时代中心',
          'lng': 116.346008,
          'lat': 39.907916,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300035',
          'isThreePlace': false
        },
        {
          'projectGuid': '36',
          'projectName': '民生金融中心',
          'lng': 116.347158,
          'lat': 39.923854,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300036',
          'isThreePlace': false
        },
        {
          'projectGuid': '37',
          'projectName': '平安国际金融中心',
          'lng': 116.358082,
          'lat': 39.953506,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300037',
          'isThreePlace': false
        },
        {
          'projectGuid': '38',
          'projectName': '锐创国际中心',
          'lng': 116.347158,
          'lat': 39.949081,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300038',
          'isThreePlace': false
        },
        {
          'projectGuid': '39',
          'projectName': '瑞达大厦',
          'lng': 116.377054,
          'lat': 39.950851,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300039',
          'isThreePlace': false
        },
        {
          'projectGuid': '40',
          'projectName': '上奥世纪中心',
          'lng': 116.390277,
          'lat': 39.97828,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300040',
          'isThreePlace': false
        },
        {
          'projectGuid': '41',
          'projectName': '时代财富天地',
          'lng': 116.402925,
          'lat': 39.970318,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300041',
          'isThreePlace': false
        },
        {
          'projectGuid': '42',
          'projectName': '时代风帆写字楼',
          'lng': 116.43742,
          'lat': 39.959701,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300042',
          'isThreePlace': false
        },
        {
          'projectGuid': '43',
          'projectName': '天创科技大厦',
          'lng': 116.453518,
          'lat': 39.941558,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300043',
          'isThreePlace': false
        },
        {
          'projectGuid': '44',
          'projectName': '天行建商务大厦',
          'lng': 116.44087,
          'lat': 39.917656,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300044',
          'isThreePlace': false
        },
        {
          'projectGuid': '45',
          'projectName': '温特莱中心',
          'lng': 116.437995,
          'lat': 39.933149,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300045',
          'isThreePlace': false
        },
        {
          'projectGuid': '46',
          'projectName': '银网中心',
          'lng': 116.432821,
          'lat': 39.934477,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300046',
          'isThreePlace': false
        },
        {
          'projectGuid': '47',
          'projectName': '悠乐汇',
          'lng': 116.420747,
          'lat': 39.918985,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300047',
          'isThreePlace': false
        },
        {
          'projectGuid': '48',
          'projectName': '中国技术交易大厦',
          'lng': 117.143416,
          'lat': 39.213686,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300048',
          'isThreePlace': false
        },
        {
          'projectGuid': '49',
          'projectName': '中坤大厦',
          'lng': 117.069827,
          'lat': 39.142087,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300049',
          'isThreePlace': false
        },
        {
          'projectGuid': '50',
          'projectName': '中粮福临门大厦',
          'lng': 117.290595,
          'lat': 39.10626,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300050',
          'isThreePlace': false
        },
        {
          'projectGuid': '51',
          'projectName': '21世纪大厦',
          'lng': 117.010036,
          'lat': 39.113427,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300051',
          'isThreePlace': false
        },
        {
          'projectGuid': '52',
          'projectName': '7080中心广场',
          'lng': 117.18481,
          'lat': 39.195793,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300052',
          'isThreePlace': false
        },
        {
          'projectGuid': '53',
          'projectName': '751D.PARK',
          'lng': 117.148016,
          'lat': 39.041725,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300053',
          'isThreePlace': false
        },
        {
          'projectGuid': '54',
          'projectName': 'A时代广场',
          'lng': 117.129618,
          'lat': 39.119249,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300054',
          'isThreePlace': false
        },
        {
          'projectGuid': '55',
          'projectName': 'CEPA大厦',
          'lng': 117.058904,
          'lat': 39.115218,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300055',
          'isThreePlace': false
        },
        {
          'projectGuid': '56',
          'projectName': 'EOD总部港',
          'lng': 117.069827,
          'lat': 39.065933,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300056',
          'isThreePlace': false
        },
        {
          'projectGuid': '57',
          'projectName': 'icc国际商业中心',
          'lng': 116.976116,
          'lat': 39.042622,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300057',
          'isThreePlace': false
        },
        {
          'projectGuid': '58',
          'projectName': 'ICON大源国际中心',
          'lng': 117.246901,
          'lat': 39.138953,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300058',
          'isThreePlace': false
        },
        {
          'projectGuid': '59',
          'projectName': 'MIG金融大厦',
          'lng': 117.189984,
          'lat': 39.114323,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300059',
          'isThreePlace': false
        },
        {
          'projectGuid': '60',
          'projectName': 'MSD-C2',
          'lng': 117.327964,
          'lat': 39.147012,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300060',
          'isThreePlace': false
        },
        {
          'projectGuid': '61',
          'projectName': 'MSD-C3',
          'lng': 117.270473,
          'lat': 39.095508,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300061',
          'isThreePlace': false
        },
        {
          'projectGuid': '62',
          'projectName': 'SOHO现代城',
          'lng': 117.220455,
          'lat': 39.109396,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300062',
          'isThreePlace': false
        },
        {
          'projectGuid': '63',
          'projectName': '安徽大厦创展中心',
          'lng': 117.216431,
          'lat': 39.159546,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300063',
          'isThreePlace': false
        },
        {
          'projectGuid': '64',
          'projectName': '奥克斯广场',
          'lng': 114.532725,
          'lat': 38.131549,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300064',
          'isThreePlace': false
        },
        {
          'projectGuid': '65',
          'projectName': '奥体名座',
          'lng': 114.403944,
          'lat': 38.178764,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300065',
          'isThreePlace': false
        },
        {
          'projectGuid': '66',
          'projectName': '奥园大厦',
          'lng': 114.515477,
          'lat': 38.083395,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300066',
          'isThreePlace': false
        },
        {
          'projectGuid': '67',
          'projectName': '白沙晶城',
          'lng': 114.511453,
          'lat': 38.061125,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300067',
          'isThreePlace': false
        },
        {
          'projectGuid': '68',
          'projectName': '白下路99号写字楼',
          'lng': 114.429815,
          'lat': 38.052942,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300068',
          'isThreePlace': false
        },
        {
          'projectGuid': '69',
          'projectName': '白云大厦',
          'lng': 114.439014,
          'lat': 38.085667,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300069',
          'isThreePlace': false
        },
        {
          'projectGuid': '70',
          'projectName': '百度大厦',
          'lng': 114.523526,
          'lat': 38.037028,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300070',
          'isThreePlace': false
        },
        {
          'projectGuid': '71',
          'projectName': '百汇大厦',
          'lng': 114.518352,
          'lat': 38.030662,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300071',
          'isThreePlace': false
        },
        {
          'projectGuid': '72',
          'projectName': '百货广场大厦',
          'lng': 114.541924,
          'lat': 38.064306,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300072',
          'isThreePlace': false
        },
        {
          'projectGuid': '73',
          'projectName': '百乐广场',
          'lng': 114.550547,
          'lat': 38.035209,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300073',
          'isThreePlace': false
        },
        {
          'projectGuid': '74',
          'projectName': '百仕达大厦',
          'lng': 114.525826,
          'lat': 38.050896,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300074',
          'isThreePlace': false
        },
        {
          'projectGuid': '75',
          'projectName': '百扬大厦',
          'lng': 114.532869,
          'lat': 38.059079,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300075',
          'isThreePlace': false
        },
        {
          'projectGuid': '76',
          'projectName': '半岛国际大厦',
          'lng': 114.528126,
          'lat': 38.06817,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300076',
          'isThreePlace': false
        },
        {
          'projectGuid': '77',
          'projectName': '邦兴·北都',
          'lng': 115.687443,
          'lat': 37.766077,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300077',
          'isThreePlace': false
        },
        {
          'projectGuid': '78',
          'projectName': '宝安广场',
          'lng': 115.671345,
          'lat': 37.703978,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300078',
          'isThreePlace': false
        },
        {
          'projectGuid': '79',
          'projectName': '宝锡大厦',
          'lng': 115.747234,
          'lat': 37.74234,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300079',
          'isThreePlace': false
        },
        {
          'projectGuid': '80',
          'projectName': '保利·中达广场',
          'lng': 115.478748,
          'lat': 38.874398,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300080',
          'isThreePlace': false
        },
        {
          'projectGuid': '81',
          'projectName': '保利大厦',
          'lng': 115.458626,
          'lat': 38.876195,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300081',
          'isThreePlace': false
        },
        {
          'projectGuid': '82',
          'projectName': '保利克洛维',
          'lng': 115.463226,
          'lat': 38.863386,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300082',
          'isThreePlace': false
        },
        {
          'projectGuid': '83',
          'projectName': '保利世界贸易中心',
          'lng': 115.479611,
          'lat': 38.87215,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300083',
          'isThreePlace': false
        },
        {
          'projectGuid': '84',
          'projectName': '保利中心',
          'lng': 115.468975,
          'lat': 38.899561,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300084',
          'isThreePlace': false
        },
        {
          'projectGuid': '85',
          'projectName': '报业大厦',
          'lng': 115.477599,
          'lat': 38.889452,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300085',
          'isThreePlace': false
        },
        {
          'projectGuid': '86',
          'projectName': '北仓门生活艺术中心',
          'lng': 115.470125,
          'lat': 38.867881,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300086',
          'isThreePlace': false
        },
        {
          'projectGuid': '87',
          'projectName': '北辰名都',
          'lng': 115.480761,
          'lat': 38.857767,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300087',
          'isThreePlace': false
        },
        {
          'projectGuid': '88',
          'projectName': '北方明珠大厦',
          'lng': 115.498296,
          'lat': 38.863835,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300088',
          'isThreePlace': false
        },
        {
          'projectGuid': '89',
          'projectName': '北京国际会议中心',
          'lng': 115.509506,
          'lat': 38.879566,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300089',
          'isThreePlace': false
        },
        {
          'projectGuid': '90',
          'projectName': '奔驰大厦',
          'lng': 115.399985,
          'lat': 38.851698,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300090',
          'isThreePlace': false
        },
        {
          'projectGuid': '91',
          'projectName': '碧云天',
          'lng': 114.986046,
          'lat': 38.50377,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300091',
          'isThreePlace': false
        },
        {
          'projectGuid': '92',
          'projectName': '标志商务楼',
          'lng': 115.02284,
          'lat': 38.543516,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300092',
          'isThreePlace': false
        },
        {
          'projectGuid': '93',
          'projectName': '滨海国泰大厦',
          'lng': 114.675591,
          'lat': 38.357241,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300093',
          'isThreePlace': false
        },
        {
          'projectGuid': '94',
          'projectName': '滨海华贸中心',
          'lng': 115.340194,
          'lat': 38.42602,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300094',
          'isThreePlace': false
        },
        {
          'projectGuid': '95',
          'projectName': '滨海建投大厦',
          'lng': 115.471274,
          'lat': 38.46581,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300095',
          'isThreePlace': false
        },
        {
          'projectGuid': '96',
          'projectName': '伯苓大厦',
          'lng': 115.820823,
          'lat': 38.433256,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300096',
          'isThreePlace': false
        },
        {
          'projectGuid': '97',
          'projectName': '泊富国际广场',
          'lng': 116.411836,
          'lat': 37.491946,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300097',
          'isThreePlace': false
        },
        {
          'projectGuid': '98',
          'projectName': '博瑞大厦',
          'lng': 116.358944,
          'lat': 37.480033,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300098',
          'isThreePlace': false
        },
        {
          'projectGuid': '99',
          'projectName': '渤海石油管理局大厦-A座',
          'lng': 116.380791,
          'lat': 37.461245,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300099',
          'isThreePlace': false
        },
        {
          'projectGuid': '100',
          'projectName': '财富大厦',
          'lng': 116.355495,
          'lat': 37.461245,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300100',
          'isThreePlace': false
        },
        {
          'projectGuid': '105',
          'projectName': '财富国际大厦',
          'lng': 117.045681,
          'lat': 36.68348,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300102',
          'isThreePlace': false
        },
        {
          'projectGuid': '108',
          'projectName': '成都中环广场',
          'lng': 117.022684,
          'lat': 36.667155,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300105',
          'isThreePlace': false
        },
        {
          'projectGuid': '109',
          'projectName': '诚基中心',
          'lng': 117.000981,
          'lat': 36.666229,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300106',
          'isThreePlace': false
        },
        {
          'projectGuid': '110',
          'projectName': '城市之星大厦',
          'lng': 117.005437,
          'lat': 36.697371,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300107',
          'isThreePlace': false
        },
        {
          'projectGuid': '111',
          'projectName': '崇文大厦',
          'lng': 117.015354,
          'lat': 36.692278,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300108',
          'isThreePlace': false
        },
        {
          'projectGuid': '112',
          'projectName': '川核地质大厦',
          'lng': 117.013773,
          'lat': 36.686606,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300109',
          'isThreePlace': false
        },
        {
          'projectGuid': '113',
          'projectName': '创举商务大厦',
          'lng': 116.965192,
          'lat': 36.691699,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300110',
          'isThreePlace': false
        },
        {
          'projectGuid': '114',
          'projectName': '创世纪广场',
          'lng': 113.673514,
          'lat': 34.753455,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300111',
          'isThreePlace': false
        },
        {
          'projectGuid': '115',
          'projectName': '创业大厦',
          'lng': 113.66992,
          'lat': 34.745387,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300112',
          'isThreePlace': false
        },
        {
          'projectGuid': '116',
          'projectName': '创源大厦',
          'lng': 113.661872,
          'lat': 34.747879,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300113',
          'isThreePlace': false
        },
        {
          'projectGuid': '117',
          'projectName': '创智大厦',
          'lng': 113.697229,
          'lat': 34.749658,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300114',
          'isThreePlace': false
        },
        {
          'projectGuid': '118',
          'projectName': '达美中心写字楼',
          'lng': 113.685443,
          'lat': 34.748472,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300115',
          'isThreePlace': false
        },
        {
          'projectGuid': '119',
          'projectName': '大合仓',
          'lng': 113.677969,
          'lat': 34.754641,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300116',
          'isThreePlace': false
        },
        {
          'projectGuid': '120',
          'projectName': '大和昌业',
          'lng': 113.667477,
          'lat': 34.769113,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300117',
          'isThreePlace': false
        },
        {
          'projectGuid': '121',
          'projectName': '大荣中心',
          'lng': 113.641318,
          'lat': 34.759386,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300118',
          'isThreePlace': false
        },
        {
          'projectGuid': '122',
          'projectName': '大西洋国际',
          'lng': 113.644624,
          'lat': 34.765198,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300119',
          'isThreePlace': false
        },
        {
          'projectGuid': '123',
          'projectName': '大中华国际金融中心',
          'lng': 113.654685,
          'lat': 34.776822,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300120',
          'isThreePlace': false
        },
        {
          'projectGuid': '124',
          'projectName': '丹棱SOHO',
          'lng': 113.651523,
          'lat': 34.740167,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300121',
          'isThreePlace': false
        },
        {
          'projectGuid': '125',
          'projectName': '得实大厦',
          'lng': 113.665896,
          'lat': 34.740997,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300122',
          'isThreePlace': false
        },
        {
          'projectGuid': '126',
          'projectName': '德兰大厦',
          'lng': 113.645199,
          'lat': 34.740048,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300123',
          'isThreePlace': false
        },
        {
          'projectGuid': '127',
          'projectName': '德润大厦',
          'lng': 121.49064,
          'lat': 31.226247,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300124',
          'isThreePlace': false
        },
        {
          'projectGuid': '128',
          'projectName': '德盈国际广场',
          'lng': 121.49064,
          'lat': 31.15804,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300125',
          'isThreePlace': false
        },
        {
          'projectGuid': '129',
          'projectName': '帝都广场',
          'lng': 121.433148,
          'lat': 31.278604,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300126',
          'isThreePlace': false
        },
        {
          'projectGuid': '130',
          'projectName': '帝景卡士',
          'lng': 121.461894,
          'lat': 31.3181,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300127',
          'isThreePlace': false
        },
        {
          'projectGuid': '131',
          'projectName': '第一世界广场',
          'lng': 121.461894,
          'lat': 31.275642,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300128',
          'isThreePlace': false
        },
        {
          'projectGuid': '132',
          'projectName': '鼎丰大厦',
          'lng': 121.465344,
          'lat': 31.233164,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300129',
          'isThreePlace': false
        },
        {
          'projectGuid': '133',
          'projectName': '鼎泰大厦',
          'lng': 121.400953,
          'lat': 31.2302,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300130',
          'isThreePlace': false
        },
        {
          'projectGuid': '134',
          'projectName': '定王大厦',
          'lng': 121.345761,
          'lat': 31.301316,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300131',
          'isThreePlace': false
        },
        {
          'projectGuid': '135',
          'projectName': '东宝大厦',
          'lng': 121.410152,
          'lat': 31.291442,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300132',
          'isThreePlace': false
        },
        {
          'projectGuid': '136',
          'projectName': '东成大厦',
          'lng': 121.392904,
          'lat': 31.352645,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300133',
          'isThreePlace': false
        },
        {
          'projectGuid': '137',
          'projectName': '东方广场',
          'lng': 121.372207,
          'lat': 31.266753,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300134',
          'isThreePlace': false
        },
        {
          'projectGuid': '138',
          'projectName': '东方希望',
          'lng': 121.605623,
          'lat': 31.154084,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300135',
          'isThreePlace': false
        },
        {
          'projectGuid': '139',
          'projectName': '东方希望中心',
          'lng': 121.716007,
          'lat': 31.003649,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300136',
          'isThreePlace': false
        },
        {
          'projectGuid': '140',
          'projectName': '东峻广场写字楼',
          'lng': 121.575728,
          'lat': 31.013554,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300137',
          'isThreePlace': false
        },
        {
          'projectGuid': '141',
          'projectName': '东立国际广场',
          'lng': 121.55848,
          'lat': 30.937263,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300138',
          'isThreePlace': false
        },
        {
          'projectGuid': '142',
          'projectName': '东龙大厦',
          'lng': 121.426249,
          'lat': 30.971948,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300139',
          'isThreePlace': false
        },
        {
          'projectGuid': '143',
          'projectName': '东盛大厦',
          'lng': 121.348061,
          'lat': 31.056131,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300140',
          'isThreePlace': false
        },
        {
          'projectGuid': '144',
          'projectName': '东原ARC中央广场',
          'lng': 121.343462,
          'lat': 31.135293,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300141',
          'isThreePlace': false
        },
        {
          'projectGuid': '145',
          'projectName': '都市总部大楼',
          'lng': 121.28942,
          'lat': 31.101657,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300142',
          'isThreePlace': false
        },
        {
          'projectGuid': '146',
          'projectName': '发展大厦',
          'lng': 121.237677,
          'lat': 31.132326,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300143',
          'isThreePlace': false
        },
        {
          'projectGuid': '147',
          'projectName': '发展国际',
          'lng': 121.246876,
          'lat': 30.961048,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300144',
          'isThreePlace': false
        },
        {
          'projectGuid': '148',
          'projectName': '泛华国际大厦',
          'lng': 121.188234,
          'lat': 30.90554,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300145',
          'isThreePlace': false
        },
        {
          'projectGuid': '149',
          'projectName': '方恒国际中心',
          'lng': 121.114645,
          'lat': 31.309215,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300146',
          'isThreePlace': false
        },
        {
          'projectGuid': '150',
          'projectName': '飞雕国际大厦',
          'lng': 120.627117,
          'lat': 31.617719,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300147',
          'isThreePlace': false
        },
        {
          'projectGuid': '151',
          'projectName': '丰湖大厦',
          'lng': 120.437395,
          'lat': 31.542905,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300148',
          'isThreePlace': false
        },
        {
          'projectGuid': '152',
          'projectName': '丰融国际',
          'lng': 120.562726,
          'lat': 31.549798,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300149',
          'isThreePlace': false
        },
        {
          'projectGuid': '153',
          'projectName': '峰汇中心',
          'lng': 121.054854,
          'lat': 31.313164,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300150',
          'isThreePlace': false
        },
        {
          'projectGuid': '154',
          'projectName': '凤凰广场',
          'lng': 120.665061,
          'lat': 31.337842,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300151',
          'isThreePlace': false
        },
        {
          'projectGuid': '155',
          'projectName': '凤凰文化广场',
          'lng': 119.986661,
          'lat': 31.791721,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300152',
          'isThreePlace': false
        },
        {
          'projectGuid': '156',
          'projectName': '佛山万科广场',
          'lng': 119.908473,
          'lat': 31.836888,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300153',
          'isThreePlace': false
        },
        {
          'projectGuid': '157',
          'projectName': '福华中心(福华大厦)',
          'lng': 114.354789,
          'lat': 30.6633,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300154',
          'isThreePlace': false
        },
        {
          'projectGuid': '158',
          'projectName': '福建大厦',
          'lng': 114.249004,
          'lat': 30.613584,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300155',
          'isThreePlace': false
        },
        {
          'projectGuid': '159',
          'projectName': '福林大厦',
          'lng': 114.173115,
          'lat': 30.65137,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300156',
          'isThreePlace': false
        },
        {
          'projectGuid': '160',
          'projectName': '福年广场-T2写字楼',
          'lng': 114.214509,
          'lat': 30.567824,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300157',
          'isThreePlace': false
        },
        {
          'projectGuid': '161',
          'projectName': '福泰广场',
          'lng': 114.458273,
          'lat': 30.528014,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300158',
          'isThreePlace': false
        },
        {
          'projectGuid': '162',
          'projectName': '福鑫国际大厦',
          'lng': 114.297297,
          'lat': 30.500137,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300159',
          'isThreePlace': false
        },
        {
          'projectGuid': '163',
          'projectName': '福星惠誉·国际城-1期',
          'lng': 114.290398,
          'lat': 30.657335,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300160',
          'isThreePlace': false
        },
        {
          'projectGuid': '164',
          'projectName': '妇儿大厦',
          'lng': 114.308795,
          'lat': 30.631485,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300161',
          'isThreePlace': false
        },
        {
          'projectGuid': '165',
          'projectName': '阜华大厦',
          'lng': 117.220168,
          'lat': 31.801542,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300162',
          'isThreePlace': false
        },
        {
          'projectGuid': '166',
          'projectName': '复地复城国际',
          'lng': 117.40414,
          'lat': 31.872221,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300163',
          'isThreePlace': false
        },
        {
          'projectGuid': '167',
          'projectName': '富安大厦',
          'lng': 115.877165,
          'lat': 32.894762,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300164',
          'isThreePlace': false
        },
        {
          'projectGuid': '168',
          'projectName': '富凯大厦',
          'lng': 117.182223,
          'lat': 34.275761,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300165',
          'isThreePlace': false
        },
        {
          'projectGuid': '169',
          'projectName': '富力·海洋广场-3幢',
          'lng': 117.242589,
          'lat': 34.291033,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300166',
          'isThreePlace': false
        },
        {
          'projectGuid': '170',
          'projectName': '富力国际金融中心',
          'lng': 117.20407,
          'lat': 34.270033,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300167',
          'isThreePlace': false
        },
        {
          'projectGuid': '171',
          'projectName': '富力天河商务大厦',
          'lng': 117.216718,
          'lat': 34.291033,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300168',
          'isThreePlace': false
        },
        {
          'projectGuid': '172',
          'projectName': '富力中心',
          'lng': 117.20062,
          'lat': 34.299145,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300169',
          'isThreePlace': false
        },
        {
          'projectGuid': '174',
          'projectName': '富昇大厦',
          'lng': 117.309279,
          'lat': 34.277193,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300170',
          'isThreePlace': false
        },
        {
          'projectGuid': '175',
          'projectName': '富兴世界金融中心',
          'lng': 119.100141,
          'lat': 33.65491,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300171',
          'isThreePlace': false
        },
        {
          'projectGuid': '176',
          'projectName': '甘家口大厦',
          'lng': 119.077145,
          'lat': 33.574095,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300172',
          'isThreePlace': false
        },
        {
          'projectGuid': '180',
          'projectName': '港泰广场',
          'lng': 106.494543,
          'lat': 29.611885,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300174',
          'isThreePlace': false
        },
        {
          'projectGuid': '181',
          'projectName': '港五大厦',
          'lng': 106.560371,
          'lat': 29.565025,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300175',
          'isThreePlace': false
        },
        {
          'projectGuid': '182',
          'projectName': '高德置地广场',
          'lng': 106.559653,
          'lat': 29.569423,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300176',
          'isThreePlace': false
        },
        {
          'projectGuid': '184',
          'projectName': '高盛大厦',
          'lng': 106.550167,
          'lat': 29.581736,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300178',
          'isThreePlace': false
        },
        {
          'projectGuid': '186',
          'projectName': '高新国际',
          'lng': 106.524583,
          'lat': 29.577967,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300180',
          'isThreePlace': false
        },
        {
          'projectGuid': '187',
          'projectName': '高新国际广场',
          'lng': 106.515815,
          'lat': 29.579097,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300181',
          'isThreePlace': false
        },
        {
          'projectGuid': '188',
          'projectName': '格拉姆商务大厦',
          'lng': 106.550454,
          'lat': 29.551201,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300182',
          'isThreePlace': false
        },
        {
          'projectGuid': '189',
          'projectName': '供电所大厦',
          'lng': 106.541112,
          'lat': 29.550196,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300183',
          'isThreePlace': false
        },
        {
          'projectGuid': '190',
          'projectName': '古北国际财富中心',
          'lng': 106.518402,
          'lat': 29.548311,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300184',
          'isThreePlace': false
        },
        {
          'projectGuid': '191',
          'projectName': '古北楼',
          'lng': 106.51524,
          'lat': 29.515125,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300185',
          'isThreePlace': false
        },
        {
          'projectGuid': '192',
          'projectName': '观城中华路壹号',
          'lng': 106.465798,
          'lat': 29.509593,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300186',
          'isThreePlace': false
        },
        {
          'projectGuid': '193',
          'projectName': '冠福大厦',
          'lng': 106.48362,
          'lat': 29.567412,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300187',
          'isThreePlace': false
        },
        {
          'projectGuid': '194',
          'projectName': '光大金融中心大厦',
          'lng': 106.489369,
          'lat': 29.591033,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300188',
          'isThreePlace': false
        },
        {
          'projectGuid': '195',
          'projectName': '光谷世界城',
          'lng': 107.408659,
          'lat': 29.735148,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300189',
          'isThreePlace': false
        },
        {
          'projectGuid': '196',
          'projectName': '光华大厦',
          'lng': 107.084407,
          'lat': 29.847483,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300190',
          'isThreePlace': false
        },
        {
          'projectGuid': '197',
          'projectName': '光耀东方广场',
          'lng': 113.009199,
          'lat': 28.217242,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300191',
          'isThreePlace': false
        },
        {
          'projectGuid': '198',
          'projectName': '广博现代之窗大厦',
          'lng': 112.998563,
          'lat': 28.199162,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300192',
          'isThreePlace': false
        },
        {
          'projectGuid': '199',
          'projectName': '广电大厦',
          'lng': 113.006037,
          'lat': 28.20782,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300193',
          'isThreePlace': false
        },
        {
          'projectGuid': '200',
          'projectName': '广东华信中心',
          'lng': 113.014086,
          'lat': 28.188464,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300194',
          'isThreePlace': false
        },
        {
          'projectGuid': '201',
          'projectName': '广东农信大厦',
          'lng': 112.993676,
          'lat': 28.191011,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300195',
          'isThreePlace': false
        },
        {
          'projectGuid': '202',
          'projectName': '广发金融大厦',
          'lng': 113.007187,
          'lat': 28.168595,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300196',
          'isThreePlace': false
        },
        {
          'projectGuid': '203',
          'projectName': '广华大厦',
          'lng': 113.038232,
          'lat': 28.182097,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300197',
          'isThreePlace': false
        },
        {
          'projectGuid': '204',
          'projectName': '广欣大楼',
          'lng': 113.083075,
          'lat': 28.264849,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300198',
          'isThreePlace': false
        },
        {
          'projectGuid': '205',
          'projectName': '广益哥伦布',
          'lng': 112.935322,
          'lat': 28.235575,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300199',
          'isThreePlace': false
        },
        {
          'projectGuid': '206',
          'projectName': '广银大厦',
          'lng': 112.994251,
          'lat': 28.213677,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300200',
          'isThreePlace': false
        },
        {
          'projectGuid': '207',
          'projectName': '广泽大厦',
          'lng': 112.900827,
          'lat': 28.208839,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300201',
          'isThreePlace': false
        },
        {
          'projectGuid': '208',
          'projectName': '广州国际电子大厦',
          'lng': 112.876393,
          'lat': 28.220298,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300202',
          'isThreePlace': false
        },
        {
          'projectGuid': '209',
          'projectName': '广州国际金融中心',
          'lng': 113.059216,
          'lat': 28.159933,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300203',
          'isThreePlace': false
        },
        {
          'projectGuid': '210',
          'projectName': '广州国际科贸中心',
          'lng': 113.121882,
          'lat': 27.821565,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300204',
          'isThreePlace': false
        },
        {
          'projectGuid': '211',
          'projectName': '广州国际贸易中心',
          'lng': 113.106359,
          'lat': 27.835876,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300205',
          'isThreePlace': false
        },
        {
          'projectGuid': '212',
          'projectName': '硅谷亮城',
          'lng': 112.922961,
          'lat': 27.831276,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300206',
          'isThreePlace': false
        },
        {
          'projectGuid': '213',
          'projectName': '国电大厦',
          'lng': 112.987352,
          'lat': 27.841498,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300207',
          'isThreePlace': false
        },
        {
          'projectGuid': '214',
          'projectName': '国航世纪中心',
          'lng': 111.690917,
          'lat': 29.07464,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300208',
          'isThreePlace': false
        },
        {
          'projectGuid': '215',
          'projectName': '国华大厦',
          'lng': 112.349771,
          'lat': 28.562218,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300209',
          'isThreePlace': false
        },
        {
          'projectGuid': '216',
          'projectName': '国际航运金融大厦',
          'lng': 112.625155,
          'lat': 26.90322,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300210',
          'isThreePlace': false
        },
        {
          'projectGuid': '217',
          'projectName': '国际能源中心',
          'lng': 114.071786,
          'lat': 22.544263,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300211',
          'isThreePlace': false
        },
        {
          'projectGuid': '218',
          'projectName': '国贸360四号楼',
          'lng': 114.099095,
          'lat': 22.55174,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300212',
          'isThreePlace': false
        },
        {
          'projectGuid': '219',
          'projectName': '国贸大厦',
          'lng': 114.090759,
          'lat': 22.544931,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300213',
          'isThreePlace': false
        },
        {
          'projectGuid': '220',
          'projectName': '国贸写字楼',
          'lng': 114.049221,
          'lat': 22.554543,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300214',
          'isThreePlace': false
        },
        {
          'projectGuid': '221',
          'projectName': '国瑞大厦',
          'lng': 114.051377,
          'lat': 22.549604,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300215',
          'isThreePlace': false
        },
        {
          'projectGuid': '222',
          'projectName': '国投大厦',
          'lng': 114.058994,
          'lat': 22.548936,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300216',
          'isThreePlace': false
        },
        {
          'projectGuid': '223',
          'projectName': '国讯大厦',
          'lng': 114.058132,
          'lat': 22.568294,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300217',
          'isThreePlace': false
        },
        {
          'projectGuid': '224',
          'projectName': '国药大厦',
          'lng': 114.039735,
          'lat': 22.56202,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300218',
          'isThreePlace': false
        },
        {
          'projectGuid': '225',
          'projectName': '国银大厦',
          'lng': 114.053102,
          'lat': 22.531311,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300219',
          'isThreePlace': false
        },
        {
          'projectGuid': '226',
          'projectName': '国资大厦',
          'lng': 114.08271,
          'lat': 22.529442,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300220',
          'isThreePlace': false
        },
        {
          'projectGuid': '227',
          'projectName': '哈伯大厦',
          'lng': 114.118642,
          'lat': 22.544663,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300221',
          'isThreePlace': false
        },
        {
          'projectGuid': '228',
          'projectName': '海昌滨海大厦',
          'lng': 114.119504,
          'lat': 22.556012,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300222',
          'isThreePlace': false
        },
        {
          'projectGuid': '229',
          'projectName': '海尔云街',
          'lng': 114.116342,
          'lat': 22.564957,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300223',
          'isThreePlace': false
        },
        {
          'projectGuid': '230',
          'projectName': '海关大厦',
          'lng': 114.123098,
          'lat': 22.576704,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300224',
          'isThreePlace': false
        },
        {
          'projectGuid': '231',
          'projectName': '海航大厦',
          'lng': 114.138045,
          'lat': 22.594189,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300225',
          'isThreePlace': false
        },
        {
          'projectGuid': '232',
          'projectName': '海景大厦',
          'lng': 113.955222,
          'lat': 22.57657,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300226',
          'isThreePlace': false
        },
        {
          'projectGuid': '233',
          'projectName': '海景广场写字楼',
          'lng': 113.946024,
          'lat': 22.564289,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300227',
          'isThreePlace': false
        },
        {
          'projectGuid': '234',
          'projectName': '海联大厦',
          'lng': 113.931363,
          'lat': 22.566158,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300228',
          'isThreePlace': false
        },
        {
          'projectGuid': '235',
          'projectName': '海龙大厦',
          'lng': 113.922739,
          'lat': 22.556279,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300229',
          'isThreePlace': false
        },
        {
          'projectGuid': '237',
          'projectName': '海马海汇中心',
          'lng': 113.900749,
          'lat': 22.570563,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300230',
          'isThreePlace': false
        },
        {
          'projectGuid': '238',
          'projectName': '海信创智谷',
          'lng': 113.909229,
          'lat': 22.563355,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300231',
          'isThreePlace': false
        },
        {
          'projectGuid': '239',
          'projectName': '海信大厦',
          'lng': 113.904055,
          'lat': 22.585914,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300232',
          'isThreePlace': false
        },
        {
          'projectGuid': '240',
          'projectName': '海信环湾大厦',
          'lng': 113.891407,
          'lat': 22.577104,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300233',
          'isThreePlace': false
        },
        {
          'projectGuid': '241',
          'projectName': '海洋大厦',
          'lng': 113.890832,
          'lat': 22.569896,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300234',
          'isThreePlace': false
        },
        {
          'projectGuid': '242',
          'projectName': '海洋建设大厦',
          'lng': 113.939412,
          'lat': 22.546399,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300235',
          'isThreePlace': false
        },
        {
          'projectGuid': '244',
          'projectName': '海印桂闲城',
          'lng': 113.898449,
          'lat': 22.525169,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300237',
          'isThreePlace': false
        },
        {
          'projectGuid': '245',
          'projectName': '海鹰大厦',
          'lng': 113.906211,
          'lat': 22.52143,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300238',
          'isThreePlace': false
        },
        {
          'projectGuid': '246',
          'projectName': '瀚海璞丽',
          'lng': 113.108803,
          'lat': 23.042034,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300239',
          'isThreePlace': false
        },
        {
          'projectGuid': '247',
          'projectName': '瀚天科技城A区5号楼',
          'lng': 112.825944,
          'lat': 23.181371,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300240',
          'isThreePlace': false
        },
        {
          'projectGuid': '248',
          'projectName': '瀚天科技城A区6号楼',
          'lng': 113.088681,
          'lat': 23.005846,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300241',
          'isThreePlace': false
        },
        {
          'projectGuid': '249',
          'projectName': '瀚天科技城A区7号楼',
          'lng': 113.136974,
          'lat': 23.000523,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300242',
          'isThreePlace': false
        },
        {
          'projectGuid': '250',
          'projectName': '杭钢富春商务大厦',
          'lng': 113.186991,
          'lat': 23.057464,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300243',
          'isThreePlace': false
        },
        {
          'projectGuid': '251',
          'projectName': '豪源大厦',
          'lng': 113.186416,
          'lat': 22.839682,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300244',
          'isThreePlace': false
        },
        {
          'projectGuid': '252',
          'projectName': '好望角商业文化广场',
          'lng': 113.292201,
          'lat': 22.779983,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300245',
          'isThreePlace': false
        },
        {
          'projectGuid': '253',
          'projectName': '合景国际金融广场',
          'lng': 113.241608,
          'lat': 23.18456,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300246',
          'isThreePlace': false
        },
        {
          'projectGuid': '254',
          'projectName': '和信摩尔',
          'lng': 113.358891,
          'lat': 23.171803,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300247',
          'isThreePlace': false
        },
        {
          'projectGuid': '255',
          'projectName': '和信商座',
          'lng': 113.252244,
          'lat': 23.14017,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300248',
          'isThreePlace': false
        },
        {
          'projectGuid': '256',
          'projectName': '河北新闻大厦',
          'lng': 113.280415,
          'lat': 23.123952,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300249',
          'isThreePlace': false
        },
        {
          'projectGuid': '257',
          'projectName': '河南农信大厦',
          'lng': 113.285589,
          'lat': 23.119166,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300250',
          'isThreePlace': false
        },
        {
          'projectGuid': '258',
          'projectName': '河南商会大厦',
          'lng': 113.258568,
          'lat': 23.128472,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300251',
          'isThreePlace': false
        },
        {
          'projectGuid': '259',
          'projectName': '河西王府井商业广场',
          'lng': 113.336469,
          'lat': 23.142297,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300252',
          'isThreePlace': false
        },
        {
          'projectGuid': '260',
          'projectName': '恒地大厦',
          'lng': 113.341644,
          'lat': 23.148943,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300253',
          'isThreePlace': false
        },
        {
          'projectGuid': '261',
          'projectName': '恒基中心写字楼',
          'lng': 113.438804,
          'lat': 23.113316,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300254',
          'isThreePlace': false
        },
        {
          'projectGuid': '262',
          'projectName': '恒力卡瑞尔中心',
          'lng': 113.423857,
          'lat': 23.115443,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300255',
          'isThreePlace': false
        },
        {
          'projectGuid': '263',
          'projectName': '恒利国际大厦',
          'lng': 113.243046,
          'lat': 23.210602,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300256',
          'isThreePlace': false
        },
        {
          'projectGuid': '264',
          'projectName': '恒生银行大厦',
          'lng': 113.361478,
          'lat': 22.552407,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300257',
          'isThreePlace': false
        },
        {
          'projectGuid': '265',
          'projectName': '恒通商务园',
          'lng': 113.405172,
          'lat': 22.535851,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300258',
          'isThreePlace': false
        },
        {
          'projectGuid': '266',
          'projectName': '弘阳大厦',
          'lng': 113.375276,
          'lat': 22.507007,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300259',
          'isThreePlace': false
        },
        {
          'projectGuid': '267',
          'projectName': '红鼎国际名苑-A座',
          'lng': 113.335607,
          'lat': 22.507541,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300260',
          'isThreePlace': false
        },
        {
          'projectGuid': '268',
          'projectName': '红豆·国际广场',
          'lng': 113.412071,
          'lat': 22.526237,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300261',
          'isThreePlace': false
        },
        {
          'projectGuid': '269',
          'projectName': '宏安世纪大厦',
          'lng': 113.3862,
          'lat': 22.540124,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300262',
          'isThreePlace': false
        },
        {
          'projectGuid': '270',
          'projectName': '宏达写字楼',
          'lng': 113.362053,
          'lat': 22.53959,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300263',
          'isThreePlace': false
        },
        {
          'projectGuid': '271',
          'projectName': '宏发大厦',
          'lng': 113.466113,
          'lat': 22.526237,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300264',
          'isThreePlace': false
        },
        {
          'projectGuid': '272',
          'projectName': '宏汇国际广场',
          'lng': 113.443116,
          'lat': 22.526771,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300265',
          'isThreePlace': false
        },
        {
          'projectGuid': '273',
          'projectName': '宏普捷座写字楼',
          'lng': 113.569023,
          'lat': 22.261047,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300266',
          'isThreePlace': false
        },
        {
          'projectGuid': '274',
          'projectName': '宏泰科技大厦',
          'lng': 113.558099,
          'lat': 22.281918,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300267',
          'isThreePlace': false
        },
        {
          'projectGuid': '275',
          'projectName': '泓科楼',
          'lng': 113.539127,
          'lat': 22.256231,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300268',
          'isThreePlace': false
        },
        {
          'projectGuid': '276',
          'projectName': '虹能大厦',
          'lng': 113.573047,
          'lat': 22.284058,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300269',
          'isThreePlace': false
        },
        {
          'projectGuid': '277',
          'projectName': '虹桥盛世莲花广场',
          'lng': 113.571897,
          'lat': 22.246597,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300270',
          'isThreePlace': false
        },
        {
          'projectGuid': '278',
          'projectName': '鸿发大厦',
          'lng': 113.555225,
          'lat': 22.236427,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300271',
          'isThreePlace': false
        },
        {
          'projectGuid': '279',
          'projectName': '鸿丰工业楼',
          'lng': 110.231063,
          'lat': 19.975997,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300272',
          'isThreePlace': false
        },
        {
          'projectGuid': '280',
          'projectName': '鸿辉都市产业新城-2号楼',
          'lng': 110.248311,
          'lat': 20.01676,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300273',
          'isThreePlace': false
        },
        {
          'projectGuid': '281',
          'projectName': '鸿辉都市产业新城-4号楼',
          'lng': 110.283955,
          'lat': 19.999912,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300274',
          'isThreePlace': false
        },
        {
          'projectGuid': '282',
          'projectName': '鸿隆世纪广场',
          'lng': 110.343747,
          'lat': 19.989586,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300275',
          'isThreePlace': false
        },
        {
          'projectGuid': '283',
          'projectName': '湖北商务大楼',
          'lng': 110.337997,
          'lat': 20.026541,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300276',
          'isThreePlace': false
        },
        {
          'projectGuid': '284',
          'projectName': '湖北商业广场',
          'lng': 110.300628,
          'lat': 19.98415,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300277',
          'isThreePlace': false
        },
        {
          'projectGuid': '285',
          'projectName': '湖南新闻大厦',
          'lng': 110.264408,
          'lat': 19.971104,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300278',
          'isThreePlace': false
        },
        {
          'projectGuid': '286',
          'projectName': '花旗集团大厦',
          'lng': 110.335123,
          'lat': 19.968386,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300279',
          'isThreePlace': false
        },
        {
          'projectGuid': '287',
          'projectName': '花样年美年广场',
          'lng': 110.449531,
          'lat': 19.98415,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300280',
          'isThreePlace': false
        },
        {
          'projectGuid': '288',
          'projectName': '花样年喜年中心',
          'lng': 110.485751,
          'lat': 20.007521,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300281',
          'isThreePlace': false
        },
        {
          'projectGuid': '289',
          'projectName': '华城国际中心',
          'lng': 110.208641,
          'lat': 20.01676,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300282',
          'isThreePlace': false
        },
        {
          'projectGuid': '290',
          'projectName': '华创大厦',
          'lng': 106.701082,
          'lat': 26.54698,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300283',
          'isThreePlace': false
        },
        {
          'projectGuid': '291',
          'projectName': '华邸国际大厦',
          'lng': 106.77927,
          'lat': 26.491119,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300284',
          'isThreePlace': false
        },
        {
          'projectGuid': '292',
          'projectName': '华鼎智地',
          'lng': 106.661988,
          'lat': 26.635887,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300285',
          'isThreePlace': false
        },
        {
          'projectGuid': '293',
          'projectName': '华东大厦',
          'lng': 108.989246,
          'lat': 34.349469,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300286',
          'isThreePlace': false
        },
        {
          'projectGuid': '294',
          'projectName': '华都大厦',
          'lng': 108.96165,
          'lat': 34.297952,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300287',
          'isThreePlace': false
        },
        {
          'projectGuid': '295',
          'projectName': '华宫大厦',
          'lng': 108.883461,
          'lat': 34.313219,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300288',
          'isThreePlace': false
        },
        {
          'projectGuid': '296',
          'projectName': '华佳广场(兴湖路)',
          'lng': 109.074333,
          'lat': 34.313219,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300289',
          'isThreePlace': false
        },
        {
          'projectGuid': '297',
          'projectName': '华凯大厦',
          'lng': 109.02604,
          'lat': 34.313219,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300290',
          'isThreePlace': false
        },
        {
          'projectGuid': '298',
          'projectName': '华乐大厦',
          'lng': 108.940953,
          'lat': 34.255951,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300291',
          'isThreePlace': false
        },
        {
          'projectGuid': '299',
          'projectName': '华菱大厦',
          'lng': 108.876562,
          'lat': 34.276954,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300292',
          'isThreePlace': false
        },
        {
          'projectGuid': '300',
          'projectName': '华美大厦',
          'lng': 119.608223,
          'lat': 39.949524,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300293',
          'isThreePlace': false
        },
        {
          'projectGuid': '301',
          'projectName': '华美欧大厦',
          'lng': 119.596437,
          'lat': 39.943992,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300294',
          'isThreePlace': false
        },
        {
          'projectGuid': '302',
          'projectName': '华敏·翰尊国际',
          'lng': 118.168922,
          'lat': 39.648401,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300295',
          'isThreePlace': false
        },
        {
          'projectGuid': '303',
          'projectName': '华侨广场',
          'lng': 118.200255,
          'lat': 39.661067,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300296',
          'isThreePlace': false
        },
        {
          'projectGuid': '304',
          'projectName': '华侨国际',
          'lng': 118.171222,
          'lat': 39.677951,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300297',
          'isThreePlace': false
        },
        {
          'projectGuid': '305',
          'projectName': '华仁凤凰国际大厦',
          'lng': 118.177258,
          'lat': 39.631065,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300298',
          'isThreePlace': false
        },
        {
          'projectGuid': '306',
          'projectName': '华仁国际大厦',
          'lng': 118.169209,
          'lat': 39.613724,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300299',
          'isThreePlace': false
        },
        {
          'projectGuid': '307',
          'projectName': '华瑞大厦-商务楼',
          'lng': 118.152537,
          'lat': 39.648845,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300300',
          'isThreePlace': false
        },
        {
          'projectGuid': '308',
          'projectName': '华润大厦',
          'lng': 118.151962,
          'lat': 39.677062,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300301',
          'isThreePlace': false
        },
        {
          'projectGuid': '309',
          'projectName': '华泰证券大厦',
          'lng': 120.837392,
          'lat': 40.740689,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300302',
          'isThreePlace': false
        },
        {
          'projectGuid': '310',
          'projectName': '华腾北搪商务大厦',
          'lng': 123.459295,
          'lat': 41.79799,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300303',
          'isThreePlace': false
        },
        {
          'projectGuid': '311',
          'projectName': '华通大厦',
          'lng': 123.45642,
          'lat': 41.80982,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300304',
          'isThreePlace': false
        },
        {
          'projectGuid': '312',
          'projectName': '华熙528艺术村',
          'lng': 123.448515,
          'lat': 41.804981,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300305',
          'isThreePlace': false
        },
        {
          'projectGuid': '313',
          'projectName': '华宜大厦',
          'lng': 123.429974,
          'lat': 41.802292,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300306',
          'isThreePlace': false
        },
        {
          'projectGuid': '314',
          'projectName': '华银大厦',
          'lng': 123.404821,
          'lat': 41.823905,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300307',
          'isThreePlace': false
        },
        {
          'projectGuid': '315',
          'projectName': '华盈大厦',
          'lng': 123.421206,
          'lat': 41.837021,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300308',
          'isThreePlace': false
        },
        {
          'projectGuid': '316',
          'projectName': '华宇国际-A座',
          'lng': 123.388724,
          'lat': 41.812938,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300309',
          'isThreePlace': false
        },
        {
          'projectGuid': '317',
          'projectName': '华远国际中心',
          'lng': 123.417038,
          'lat': 41.786696,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300310',
          'isThreePlace': false
        },
        {
          'projectGuid': '318',
          'projectName': '淮海国际广场',
          'lng': 123.411864,
          'lat': 41.781962,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300311',
          'isThreePlace': false
        },
        {
          'projectGuid': '319',
          'projectName': '环境保护大厦',
          'lng': 123.374494,
          'lat': 41.791429,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300312',
          'isThreePlace': false
        },
        {
          'projectGuid': '320',
          'projectName': '环球广场',
          'lng': 123.463606,
          'lat': 41.791644,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300313',
          'isThreePlace': false
        },
        {
          'projectGuid': '321',
          'projectName': '黄金广场',
          'lng': 123.94826,
          'lat': 41.889024,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300314',
          'isThreePlace': false
        },
        {
          'projectGuid': '322',
          'projectName': '煌华新纪元',
          'lng': 123.939493,
          'lat': 41.886339,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300315',
          'isThreePlace': false
        },
        {
          'projectGuid': '323',
          'projectName': '汇富中心',
          'lng': 123.928282,
          'lat': 41.884406,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300316',
          'isThreePlace': false
        },
        {
          'projectGuid': '324',
          'projectName': '汇美大厦',
          'lng': 123.927419,
          'lat': 41.889669,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300317',
          'isThreePlace': false
        },
        {
          'projectGuid': '325',
          'projectName': '汇日央扩国际广场',
          'lng': 123.912328,
          'lat': 41.865929,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300318',
          'isThreePlace': false
        },
        {
          'projectGuid': '326',
          'projectName': '汇智大厦',
          'lng': 123.899967,
          'lat': 41.876564,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300319',
          'isThreePlace': false
        },
        {
          'projectGuid': '327',
          'projectName': '会德丰国际广场',
          'lng': 126.600202,
          'lat': 43.8953,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300320',
          'isThreePlace': false
        },
        {
          'projectGuid': '328',
          'projectName': '会计大厦',
          'lng': 126.559958,
          'lat': 43.873677,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300321',
          'isThreePlace': false
        },
        {
          'projectGuid': '329',
          'projectName': '惠谷时空写字楼',
          'lng': 125.353785,
          'lat': 43.916084,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300322',
          'isThreePlace': false
        },
        {
          'projectGuid': '330',
          'projectName': '慧谷大厦',
          'lng': 125.275596,
          'lat': 43.890311,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300323',
          'isThreePlace': false
        },
        {
          'projectGuid': '331',
          'projectName': '火炬创业大厦',
          'lng': 125.334238,
          'lat': 43.863694,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300324',
          'isThreePlace': false
        },
        {
          'projectGuid': '332',
          'projectName': '机场大厦',
          'lng': 125.295144,
          'lat': 43.941016,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300325',
          'isThreePlace': false
        },
        {
          'projectGuid': '333',
          'projectName': '佳程广场',
          'lng': 126.671204,
          'lat': 45.755714,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300326',
          'isThreePlace': false
        },
        {
          'projectGuid': '334',
          'projectName': '佳都商务大厦',
          'lng': 126.655681,
          'lat': 45.765171,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300327',
          'isThreePlace': false
        },
        {
          'projectGuid': '335',
          'projectName': '佳福大厦',
          'lng': 126.651369,
          'lat': 45.75672,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300328',
          'isThreePlace': false
        },
        {
          'projectGuid': '336',
          'projectName': '佳天国际新城',
          'lng': 126.625211,
          'lat': 45.754909,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300329',
          'isThreePlace': false
        },
        {
          'projectGuid': '337',
          'projectName': '嘉华中心',
          'lng': 126.668904,
          'lat': 45.743237,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300330',
          'isThreePlace': false
        },
        {
          'projectGuid': '338',
          'projectName': '嘉铭中心',
          'lng': 126.639009,
          'lat': 45.73599,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300331',
          'isThreePlace': false
        },
        {
          'projectGuid': '339',
          'projectName': '嘉亿东方大厦',
          'lng': 126.59589,
          'lat': 45.744042,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300332',
          'isThreePlace': false
        },
        {
          'projectGuid': '340',
          'projectName': '甲壳虫',
          'lng': 126.629235,
          'lat': 45.707197,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300333',
          'isThreePlace': false
        },
        {
          'projectGuid': '341',
          'projectName': '简村大厦',
          'lng': 126.601639,
          'lat': 45.72089,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300334',
          'isThreePlace': false
        },
        {
          'projectGuid': '342',
          'projectName': '建汇大厦',
          'lng': 126.713173,
          'lat': 45.777845,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300335',
          'isThreePlace': false
        },
        {
          'projectGuid': '343',
          'projectName': '建业总部港',
          'lng': 126.707424,
          'lat': 45.746256,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300336',
          'isThreePlace': false
        },
        {
          'projectGuid': '344',
          'projectName': '建正东方中心',
          'lng': 123.970394,
          'lat': 47.362815,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300337',
          'isThreePlace': false
        },
        {
          'projectGuid': '345',
          'projectName': '健博通大厦',
          'lng': 123.968813,
          'lat': 47.35002,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300338',
          'isThreePlace': false
        },
        {
          'projectGuid': '346',
          'projectName': '健豪工业大楼',
          'lng': 118.980415,
          'lat': 42.274277,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300339',
          'isThreePlace': false
        },
        {
          'projectGuid': '347',
          'projectName': '江北嘴金融城',
          'lng': 123.607335,
          'lat': 43.545453,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300340',
          'isThreePlace': false
        },
        {
          'projectGuid': '348',
          'projectName': '江苏广电城-二期',
          'lng': 124.426015,
          'lat': 43.156099,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300341',
          'isThreePlace': false
        },
        {
          'projectGuid': '349',
          'projectName': '江苏科技大厦',
          'lng': 106.244886,
          'lat': 38.480499,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300342',
          'isThreePlace': false
        },
        {
          'projectGuid': '350',
          'projectName': '江苏冶金大厦',
          'lng': 106.210391,
          'lat': 38.005304,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300343',
          'isThreePlace': false
        },
        {
          'projectGuid': '351',
          'projectName': '交警大楼',
          'lng': 103.818743,
          'lat': 36.080864,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300344',
          'isThreePlace': false
        },
        {
          'projectGuid': '352',
          'projectName': '捷泰广场',
          'lng': 103.844183,
          'lat': 36.057058,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300345',
          'isThreePlace': false
        },
        {
          'projectGuid': '353',
          'projectName': '金澳国际',
          'lng': 103.851082,
          'lat': 36.065578,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300346',
          'isThreePlace': false
        },
        {
          'projectGuid': '354',
          'projectName': '金成国际广场',
          'lng': 103.83599,
          'lat': 36.052506,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300347',
          'isThreePlace': false
        },
        {
          'projectGuid': '355',
          'projectName': '金成建国5号',
          'lng': 103.861862,
          'lat': 36.050522,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300348',
          'isThreePlace': false
        },
        {
          'projectGuid': '356',
          'projectName': '金城大厦',
          'lng': 103.887014,
          'lat': 36.061026,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300349',
          'isThreePlace': false
        },
        {
          'projectGuid': '357',
          'projectName': '金地国际广场',
          'lng': 103.895063,
          'lat': 36.051689,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300350',
          'isThreePlace': false
        },
        {
          'projectGuid': '358',
          'projectName': '金帆大厦',
          'lng': 106.747794,
          'lat': 35.546065,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300351',
          'isThreePlace': false
        },
        {
          'projectGuid': '359',
          'projectName': '金港商城(营门口路店)',
          'lng': 112.524545,
          'lat': 37.843627,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300352',
          'isThreePlace': false
        },
        {
          'projectGuid': '360',
          'projectName': '金湖文化中心',
          'lng': 112.591235,
          'lat': 37.829492,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300353',
          'isThreePlace': false
        },
        {
          'projectGuid': '361',
          'projectName': '金皇大厦',
          'lng': 112.575712,
          'lat': 37.803494,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300354',
          'isThreePlace': false
        },
        {
          'projectGuid': '362',
          'projectName': '金汇大厦',
          'lng': 112.569388,
          'lat': 37.843171,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300355',
          'isThreePlace': false
        },
        {
          'projectGuid': '363',
          'projectName': '金龙公馆-写字楼',
          'lng': 114.516627,
          'lat': 36.605528,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300356',
          'isThreePlace': false
        },
        {
          'projectGuid': '364',
          'projectName': '金轮大厦',
          'lng': 114.475233,
          'lat': 36.602747,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300357',
          'isThreePlace': false
        },
        {
          'projectGuid': '365',
          'projectName': '金轮国际广场',
          'lng': 114.515477,
          'lat': 36.870217,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300358',
          'isThreePlace': false
        },
        {
          'projectGuid': '366',
          'projectName': '金码大厦',
          'lng': 114.510878,
          'lat': 36.642603,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300359',
          'isThreePlace': false
        },
        {
          'projectGuid': '367',
          'projectName': '金茂国际数码中心',
          'lng': 114.475233,
          'lat': 37.126617,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300360',
          'isThreePlace': false
        },
        {
          'projectGuid': '368',
          'projectName': '金贸大厦',
          'lng': 114.518927,
          'lat': 37.078724,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300361',
          'isThreePlace': false
        },
        {
          'projectGuid': '369',
          'projectName': '金融城-2号T2',
          'lng': 114.479833,
          'lat': 37.058452,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300362',
          'isThreePlace': false
        },
        {
          'projectGuid': '370',
          'projectName': '金融大厦',
          'lng': 115.073145,
          'lat': 35.768481,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300363',
          'isThreePlace': false
        },
        {
          'projectGuid': '371',
          'projectName': '金融街写字楼',
          'lng': 115.68658,
          'lat': 34.427518,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300364',
          'isThreePlace': false
        },
        {
          'projectGuid': '372',
          'projectName': '金融街中心',
          'lng': 115.660134,
          'lat': 34.427994,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300365',
          'isThreePlace': false
        },
        {
          'projectGuid': '373',
          'projectName': '金沙万瑞中心',
          'lng': 115.638862,
          'lat': 34.448478,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300366',
          'isThreePlace': false
        },
        {
          'projectGuid': '374',
          'projectName': '金山大厦',
          'lng': 116.696994,
          'lat': 39.520277,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300367',
          'isThreePlace': false
        },
        {
          'projectGuid': '375',
          'projectName': '金泰大厦',
          'lng': 116.694767,
          'lat': 39.521001,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300368',
          'isThreePlace': false
        },
        {
          'projectGuid': '376',
          'projectName': '金桃大厦',
          'lng': 116.687436,
          'lat': 39.520333,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300369',
          'isThreePlace': false
        },
        {
          'projectGuid': '377',
          'projectName': '金兴科技大厦',
          'lng': 116.681903,
          'lat': 39.521335,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300370',
          'isThreePlace': false
        },
        {
          'projectGuid': '378',
          'projectName': '金鹰大厦',
          'lng': 116.678022,
          'lat': 39.519999,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300371',
          'isThreePlace': false
        },
        {
          'projectGuid': '379',
          'projectName': '金隅大成国际中心',
          'lng': 116.682406,
          'lat': 39.518273,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300372',
          'isThreePlace': false
        },
        {
          'projectGuid': '380',
          'projectName': '金源国际大厦',
          'lng': 116.698432,
          'lat': 39.513375,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300373',
          'isThreePlace': false
        },
        {
          'projectGuid': '381',
          'projectName': '金泽大厦',
          'lng': 116.701163,
          'lat': 39.515323,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300374',
          'isThreePlace': false
        },
        {
          'projectGuid': '382',
          'projectName': '金长安大厦',
          'lng': 116.689305,
          'lat': 39.52768,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300375',
          'isThreePlace': false
        },
        {
          'projectGuid': '383',
          'projectName': '锦绣联合商务大厦',
          'lng': 116.686718,
          'lat': 39.525509,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300376',
          'isThreePlace': false
        },
        {
          'projectGuid': '384',
          'projectName': '京汇大厦',
          'lng': 116.677088,
          'lat': 39.527958,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300377',
          'isThreePlace': false
        },
        {
          'projectGuid': '385',
          'projectName': '京莎广场',
          'lng': 116.686358,
          'lat': 39.52985,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300378',
          'isThreePlace': false
        },
        {
          'projectGuid': '386',
          'projectName': '晶采大厦',
          'lng': 116.683412,
          'lat': 39.531909,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300379',
          'isThreePlace': false
        },
        {
          'projectGuid': '387',
          'projectName': '景峰国际',
          'lng': 116.695701,
          'lat': 39.524173,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300380',
          'isThreePlace': false
        },
        {
          'projectGuid': '388',
          'projectName': '景天楼',
          'lng': 116.709139,
          'lat': 39.524674,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300381',
          'isThreePlace': false
        },
        {
          'projectGuid': '389',
          'projectName': '九鼎·国际城公寓-5座',
          'lng': 116.716038,
          'lat': 39.52434,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300382',
          'isThreePlace': false
        },
        {
          'projectGuid': '390',
          'projectName': '九街高屋',
          'lng': 116.716398,
          'lat': 39.527735,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300383',
          'isThreePlace': false
        },
        {
          'projectGuid': '391',
          'projectName': '九坤大厦',
          'lng': 116.706337,
          'lat': 39.530685,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300384',
          'isThreePlace': false
        },
        {
          'projectGuid': '392',
          'projectName': '久凌大厦',
          'lng': 116.700085,
          'lat': 39.532522,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300385',
          'isThreePlace': false
        },
        {
          'projectGuid': '393',
          'projectName': '聚宝大厦',
          'lng': 115.870481,
          'lat': 39.336407,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300386',
          'isThreePlace': false
        },
        {
          'projectGuid': '394',
          'projectName': '聚信广场',
          'lng': 115.875656,
          'lat': 39.330826,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300387',
          'isThreePlace': false
        },
        {
          'projectGuid': '395',
          'projectName': '君临大厦',
          'lng': 116.155927,
          'lat': 39.738622,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300388',
          'isThreePlace': false
        },
        {
          'projectGuid': '396',
          'projectName': '君隆广场',
          'lng': 116.145291,
          'lat': 39.735071,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300389',
          'isThreePlace': false
        },
        {
          'projectGuid': '397',
          'projectName': '君威财富中心',
          'lng': 116.145938,
          'lat': 39.740897,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300390',
          'isThreePlace': false
        },
        {
          'projectGuid': '398',
          'projectName': '峻岭广场',
          'lng': 116.13868,
          'lat': 39.737235,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300391',
          'isThreePlace': false
        },
        {
          'projectGuid': '399',
          'projectName': '骏业财富中心',
          'lng': 114.900599,
          'lat': 40.773697,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300392',
          'isThreePlace': false
        },
        {
          'projectGuid': '400',
          'projectName': '开利大厦',
          'lng': 114.889101,
          'lat': 40.775446,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300393',
          'isThreePlace': false
        },
        {
          'projectGuid': '401',
          'projectName': '凯比特大厦',
          'lng': 114.91181,
          'lat': 40.768889,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300394',
          'isThreePlace': false
        },
        {
          'projectGuid': '402',
          'projectName': '凯晨世贸中心',
          'lng': 114.898874,
          'lat': 40.762332,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300395',
          'isThreePlace': false
        },
        {
          'projectGuid': '403',
          'projectName': '凯迪克大厦',
          'lng': 114.885364,
          'lat': 40.759272,
          'projectState': 90,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300396',
          'isThreePlace': false
        },
        {
          'projectGuid': '404',
          'projectName': '凯利国际中心',
          'lng': 114.850869,
          'lat': 40.776538,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300397',
          'isThreePlace': false
        },
        {
          'projectGuid': '405',
          'projectName': '凯泰中心',
          'lng': 111.696307,
          'lat': 40.780035,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300398',
          'isThreePlace': false
        },
        {
          'projectGuid': '406',
          'projectName': '凯通大厦',
          'lng': 111.682509,
          'lat': 40.82023,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300399',
          'isThreePlace': false
        },
        {
          'projectGuid': '407',
          'projectName': '凯旋门',
          'lng': 111.769896,
          'lat': 40.828965,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300400',
          'isThreePlace': false
        },
        {
          'projectGuid': '408',
          'projectName': '凯燕环球中心',
          'lng': 91.118068,
          'lat': 29.664874,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300401',
          'isThreePlace': false
        },
        {
          'projectGuid': '409',
          'projectName': '凯悦中心',
          'lng': 91.144514,
          'lat': 29.665627,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300402',
          'isThreePlace': false
        },
        {
          'projectGuid': '410',
          'projectName': '楷林',
          'lng': 91.135891,
          'lat': 29.660103,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300403',
          'isThreePlace': false
        },
        {
          'projectGuid': '411',
          'projectName': '楷林IFC',
          'lng': 91.15975,
          'lat': 29.678431,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300404',
          'isThreePlace': false
        },
        {
          'projectGuid': '412',
          'projectName': '楷林国际',
          'lng': 102.834847,
          'lat': 24.936718,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300405',
          'isThreePlace': false
        },
        {
          'projectGuid': '413',
          'projectName': '楷林中心-9座',
          'lng': 102.836284,
          'lat': 24.880349,
          'projectState': 2,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300406',
          'isThreePlace': false
        },
        {
          'projectGuid': '414',
          'projectName': '康田凯旋国际',
          'lng': 102.855544,
          'lat': 24.901589,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300407',
          'isThreePlace': false
        },
        {
          'projectGuid': '415',
          'projectName': '科汇金谷',
          'lng': 102.820186,
          'lat': 24.971837,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300408',
          'isThreePlace': false
        },
        {
          'projectGuid': '416',
          'projectName': '科技财智名座',
          'lng': 102.781667,
          'lat': 25.00354,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300409',
          'isThreePlace': false
        },
        {
          'projectGuid': '417',
          'projectName': '宽寓大厦',
          'lng': 102.807251,
          'lat': 24.996729,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300410',
          'isThreePlace': false
        },
        {
          'projectGuid': '418',
          'projectName': '旷世国际',
          'lng': 102.674445,
          'lat': 25.050163,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300411',
          'isThreePlace': false
        },
        {
          'projectGuid': '419',
          'projectName': '旷世国际大厦-A座',
          'lng': 102.690543,
          'lat': 25.046497,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300412',
          'isThreePlace': false
        },
        {
          'projectGuid': '420',
          'projectName': '旷世国际大厦-B座',
          'lng': 102.687381,
          'lat': 25.035235,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300413',
          'isThreePlace': false
        },
        {
          'projectGuid': '421',
          'projectName': '魁星楼',
          'lng': 102.711527,
          'lat': 25.058543,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300414',
          'isThreePlace': false
        },
        {
          'projectGuid': '422',
          'projectName': '拉德方斯大厦',
          'lng': 102.734524,
          'lat': 25.049639,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300415',
          'isThreePlace': false
        },
        {
          'projectGuid': '423',
          'projectName': '蓝洋金融中心',
          'lng': 104.819743,
          'lat': 26.603589,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300416',
          'isThreePlace': false
        },
        {
          'projectGuid': '424',
          'projectName': '浪高凯悦国际商务大厦',
          'lng': 104.779774,
          'lat': 26.620024,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300417',
          'isThreePlace': false
        },
        {
          'projectGuid': '425',
          'projectName': '蠡湖·科技大厦',
          'lng': 110.066697,
          'lat': 27.645221,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300418',
          'isThreePlace': false
        },
        {
          'projectGuid': '426',
          'projectName': '蠡湖大厦',
          'lng': 108.999654,
          'lat': 32.709664,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300419',
          'isThreePlace': false
        },
        {
          'projectGuid': '427',
          'projectName': '力帆红星国际广场',
          'lng': 104.097942,
          'lat': 30.639145,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300420',
          'isThreePlace': false
        },
        {
          'projectGuid': '428',
          'projectName': '力帆中心LFC',
          'lng': 104.096792,
          'lat': 30.693567,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300421',
          'isThreePlace': false
        },
        {
          'projectGuid': '429',
          'projectName': '力帆中心LFC-1号楼',
          'lng': 104.082994,
          'lat': 30.677915,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300422',
          'isThreePlace': false
        },
        {
          'projectGuid': '430',
          'projectName': '丽都新贵',
          'lng': 104.114615,
          'lat': 30.675927,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300423',
          'isThreePlace': false
        },
        {
          'projectGuid': '431',
          'projectName': '荔湖大厦',
          'lng': 104.137611,
          'lat': 30.665242,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300424',
          'isThreePlace': false
        },
        {
          'projectGuid': '432',
          'projectName': '联达商务中心',
          'lng': 104.056261,
          'lat': 30.671206,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300425',
          'isThreePlace': false
        },
        {
          'projectGuid': '433',
          'projectName': '联峰时代大厦',
          'lng': 104.057698,
          'lat': 30.658035,
          'projectState': 1,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300426',
          'isThreePlace': false
        },
        {
          'projectGuid': '434',
          'projectName': '联合大厦',
          'lng': 104.039013,
          'lat': 30.668969,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300427',
          'isThreePlace': false
        },
        {
          'projectGuid': '436',
          'projectName': '联通大厦',
          'lng': 104.032689,
          'lat': 30.706236,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300428',
          'isThreePlace': false
        },
        {
          'projectGuid': '438',
          'projectName': '两江国际',
          'lng': 104.066897,
          'lat': 30.717414,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300429',
          'isThreePlace': false
        },
        {
          'projectGuid': '439',
          'projectName': '两江天地',
          'lng': 101.804316,
          'lat': 36.755411,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300430',
          'isThreePlace': false
        },
        {
          'projectGuid': '440',
          'projectName': '列胜大厦',
          'lng': 107.029149,
          'lat': 33.089494,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300431',
          'isThreePlace': false
        },
        {
          'projectGuid': '441',
          'projectName': '六合大厦',
          'lng': 107.096405,
          'lat': 33.069685,
          'projectState': 91,
          'projectType': '高层建筑',
          'projectBelongArea': '',
          'managerName': '张三',
          'managerPhone': '13112300432',
          'isThreePlace': false
        }
      ]
    }
  },
  watch: {
    sWidth (val) {
      if (!this.timer) {
        this.sWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          console.log(that.sWidth)
          that.timer = false
        }, 400)
      }
    },
    sHeight (val) {
      if (!this.timer) {
        this.sHeight = val
        this.timer = true
        let that = this
        setTimeout(function () {
          console.log(that.sHeight)
          that.timer = false
        }, 400)
      }
    }
  },
  mounted () {
    // 今日统计
    this.myChartTodayStatistice = this.$echarts.init(document.getElementById('todayStatistics'))
    // 网关在线
    this.myChartGatewayOnline = this.$echarts.init(document.getElementById('gatewayOnline'))
    // 雷达图(8个维度)
    this.myChartRadarDimension = this.$echarts.init(document.getElementById('radarDimension'))
    // 月报警&故障趋势图
    // this.myChartTodayTrendMap = this.$echarts.init(document.getElementById('trendMap'))
    // this.myChartHandle = this.$echarts.init(document.getElementById('handle'))
    // this.myChartDisposalRate = this.$echarts.init(document.getElementById('disposalRate'))
    // 屏幕宽高 动态改变
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
        that.sWidth = window.screenWidth
        window.screenHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - 80
        that.sHeight = window.screenHeight
      })()
    }
    this.initDataTodayStatistice()
    this.initDataGatewayOnline()
    this.initRadarDimension()
    this.feathData()
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    // 今日统计图表
    initDataTodayStatistice () {
      const option = {
        tooltip: {
          show: false,
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['今日火警', '今日误报', '今日故障'],
          axisLabel: {
            // inside: true,
            padding: [3, 0, 0, 0],
            textStyle: {
              color: '#03b0d5'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#03b0d5'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(80,224,255,0.3)',
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            // inside: true,
            padding: [0, 15, 0, 0],
            textStyle: {
              color: '#03b0d5'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#03b0d5'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#03b0d5'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(80,224,255,0.3)',
              type: 'dashed'
            },
            show: false
          }
        },
        series: [{
          data: [10, 5, 4],
          type: 'bar',
          // 配置样式
          itemStyle: {
            // 通常情况下：
            normal: {
              // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
              color: function (params) {
                var colorList = ['rgba(239, 13, 13, 0.60)', 'rgba(204, 204, 204, 0.60)', 'rgba(255, 112, 6, 0.60)']
                return colorList[params.dataIndex]
              }
            }
          }
          // 设置柱子的宽度
          // barWidth : 120,
        }]
      }
      this.myChartTodayStatistice.setOption(option)
    },
    // 月报警&故障趋势图
    initDatatrendMap () {
      const option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#333'
            }
          }
        },
        legend: {
          data: ['火警', '故障'],
          left: 'left'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.monthDay
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              show: false
              // formatter: function (value) {
              // return value + 1
              // }
            },

            splitLine: {
              show: true
            },
            axisLine: {
              show: true
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '火警',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {color: '#dd4b39'}},
            data: this.monthFire,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#dd4b39'
                }
              }}
          },
          {
            name: '故障',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {color: '#ffa685'}},
            data: this.monthFault,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#ffa685'
                }
              }}
          }
        ]
      }
      this.myChartTodayTrendMap.setOption(option)
    },
    // 网关在线图表
    initDataGatewayOnline () {
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/> {b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['离线', '在线'],
          textStyle: {
            color: '#03b0d5'
          }
        },
        series: [
          {
            name: '网关在线情况',
            type: 'pie',
            radius: ['40%', '55%'],
            center: ['50%', '50%'],
            label: {
              normal: {
                formatter: '{b}: {c} ({d}%)',
                rich: {}
              }
            },
            data: [
              {
                value: '50',
                name: '离线',
                itemStyle: {
                  normal: {
                    color: 'rgba(204, 204, 204)'
                  }
                }
              },
              {
                value: '110',
                name: '在线',
                itemStyle: {
                  normal: {
                    color: 'rgb(64, 164, 43)'
                  }
                }
              }
            ]
          }
        ]
      }
      this.myChartGatewayOnline.setOption(option)
    },
    feathData () {
      var map = new BMap.Map('allmap')
      // map.centerAndZoom(new BMap.Point(this.lng, this.lat), 13)
      // map.centerAndZoom(this.districtName, 13)
      // map.centerAndZoom(new BMap.Point('北京市'), 5)
      if (this.markPoints.length > 1) {
        map.setViewport(this.markPoints)
      } else {
        map.centerAndZoom(new BMap.Point(this.markPoints[0].lng, this.markPoints[0].lat), 13)
      }
      // 设置地图风格
      map.setMapStyle({
        styleJson: [
          {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#0c1e35ff"
            }
          },
          {
            "featureType": "land",
            "elementType": "geometry.fill",
            "stylers": {
              "color": "#1f4858ff"
            }
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": {
              "color": "#206061ff",
              "weight": "0.8"
            }
          },
          {
            "featureType": "manmade",
            "elementType": "labels",
            "stylers": {
              "visibility": "off"
            }
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": {
              "visibility": "off"
            }
          },
          {
            "featureType": "building",
            "elementType": "geometry",
            "stylers": {
              "visibility": "off"
            }
          },
          {
            "featureType": "poilabel",
            "elementType": "labels",
            "stylers": {
              "visibility": "off"
            }
          },
          {
            "featureType": "districtlabel",
            "elementType": "labels.text.fill",
            "stylers": {
              "color": "#336465ff"
            }
          },
          {
            "featureType": "district",
            "elementType": "labels.text.stroke",
            "stylers": {
              "color": "#ffffffff"
            }
          }]
      })
      map.enableScrollWheelZoom(true)
      var myIcon1 = new BMap.Icon(baseImgPath + '/public/img/normal.png', new BMap.Size(30, 60))
      var myIcon2 = new BMap.Icon(baseImgPath + '/public/img/fault.png', new BMap.Size(30, 60))
      var myIcon3 = new BMap.Icon(baseImgPath + '/public/img/fire.png', new BMap.Size(30, 60))
      var opts = {
        enableMessage: true
      }
      var s = this
      window.sd = function (id) {
        console.log(id)
        s.onb(id)
      }

      for (var i = 0; i < this.markPoints.length; i++) {
        var marker
        if (this.markPoints[i].projectState === 90) { // 正常
          marker = new BMap.Marker(new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat), {icon: myIcon1}) // 创建标注
        } else if (this.markPoints[i].projectState === 1) { // 故障
          marker = new BMap.Marker(new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat), {icon: myIcon2}) // 创建标注
        } else if (this.markPoints[i].projectState === 2) { // 火警
          marker = new BMap.Marker(new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat), {icon: myIcon3}) // 创建标注
        } else if (this.markPoints[i].projectState === 91) {
          marker = new BMap.Marker(new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat), {icon: myIcon3}) // 创建标注
        }
        let content = '<table style="color: #666666">' +
          '<tr><td>名称：</td><td><a id="' + this.markPoints[i].projectGuid + '" onclick="sd(id)">' + this.markPoints[i].projectName + '</a></td></tr>' +
          '<tr><td>联系人：</td><td>' + this.markPoints[i].managerName + '/' + this.markPoints[i].managerPhone + '</td></tr>' +
          '<tr><td>单位类型：</td><td>' + this.markPoints[i].projectType + '</td></tr>'
        if (this.markPoints[i].projectState === 1) {
          content += '<tr><td>状态：</td><td>故障</td></tr>' + '</table>'
        } else if (this.markPoints[i].projectState === 2) {
          content += '<tr><td>状态：</td><td>火警</td></tr>' + '</table>'
        } else if (this.markPoints[i].projectState === 90) {
          content += '<tr><td>状态：</td><td>正常</td></tr>' + '</table>'
        } else if (this.markPoints[i].projectState === 91) {
          content += '<tr><td>状态：</td><td>离线</td></tr>' + '</table>'
        }
        //            this.markPoints[i].placeName
        //        marker.setAnimation(BMAP_ANIMATION_BOUNCE);//动画效果
        if (this.projectName === this.markPoints[i].projectGuid) {
          map.centerAndZoom(new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat), 13)
          marker = new BMap.Marker(new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat), {icon: myIcon1}) // 创建标注
          let point = new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat)
          var infoWindow = new BMap.InfoWindow(content, opts)
          map.openInfoWindow(infoWindow, point)
        } else {
          if (this.markPoints[i].projectState === 90) { // 正常
            marker = new BMap.Marker(new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat), {icon: myIcon1}) // 创建标注
          } else if (this.markPoints[i].projectState === 1) { // 故障
            marker = new BMap.Marker(new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat), {icon: myIcon2}) // 创建标注
          } else if (this.markPoints[i].projectState === 2) { // 火警
            marker = new BMap.Marker(new BMap.Point(this.markPoints[i].lng, this.markPoints[i].lat), {icon: myIcon3}) // 创建标注
          }
        }
        map.addOverlay(marker)
        addClickHandler(content, marker)
      }
      function addClickHandler (content, marker) {
        marker.addEventListener('click', function (e) {
          openInfo(content, e)
        })
      }
      function openInfo (content, e) {
        let p = e.target
        let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat)
        var infoWindow = new BMap.InfoWindow(content, opts)
        map.openInfoWindow(infoWindow, point)
      }
    },
    // 雷达图(8个维度)
    initRadarDimension () {
      const option = {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          top: 20,
          itemWidth: 12,
          itemHeight: 12,
          data: [],
          textStyle: {
            color: '#fff'
          }
        },
        radar: {
          radius: '50%',
          center: ['50%', '50%'],
          splitNumber: 3,
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.2
            }
          },
          splitLine: {
            lineStyle: {
              color: '#fff',
              opacity: 0.2
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)'
            }
          },
          indicator: [{
            name: '告警处置率',
            max: 100
          }, {
            name: '告警数字',
            max: 100
          }, {
            name: '离线率',
            max: 100
          }, {
            name: '处置周期',
            max: 100
          }, {
            name: '故障处置率',
            max: 100
          }, {
            name: '巡检情况',
            max: 100
          }, {
            name: '故障数',
            max: 100
          }, {
            name: '离线频繁率',
            max: 100
          }]
        },
        series: [{
          name: '运行分析',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 5,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 7,
              opacity: 1
            }
          },
          data: [{
            value: [20, 30, 41, 50, 24, 52, 36, 80],
            name: '预算分配（Allocated Budget）'
          }]
        }],
        color: ['#03b0d5']
      }
      this.myChartRadarDimension.setOption(option)
    },
    // 处置
    initDataHandle () {
      const option = {
        title: {
          text: '',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        //        legend: {
        //          left: 'left',
        //          data: ['未处理', '已处理']
        //        },
        series: [
          {
            name: '处理',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              {value: this.Management, name: '未处理'},
              {value: this.Already, name: '已处理'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        color: ['#ccc', '#ff851b', '#ff0000', '#686868', '#123456']
      }
      this.myChartHandle.setOption(option)
    },
    // 处理率
    initDataDisposalrate () {
      const option = {
        title: {
          text: '',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        //        legend: {
        //          left: 'left',
        //          data: ['未处理', '已处理']
        //        },
        series: [
          {
            name: '处理',
            type: 'pie',
            radius: '90%',
            center: ['50%', '50%'],
            data: [
              {value: this.getprocessMinute, name: '10分钟'},
              {value: this.process1Hour, name: '1小时'},
              {value: this.processAfter1Day, name: '一天内'},
              {value: this.process1Day, name: '一天后'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
        color: ['#ccc', '#ff851b', '#ff0000', '#686868', '#123456']
      }
      this.myChartDisposalRate.setOption(option)
    }
  }
}
</script>
<style scoped>
</style>
