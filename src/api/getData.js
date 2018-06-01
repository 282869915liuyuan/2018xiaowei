import fetch from '../config/fetch'
// 页面中使用的接口

// Manage
// 获取用户信息
export const getUserInfo = data => fetch('/login/web/login/getUserInfo', data, 'GET')
// 登出
export const doLogOut = data => fetch('/login/web/login/doLoginOut', data, 'POST')
// 获取项目列表
export const getProjectGuidList = data => fetch('/MessageProcess/microPlace/project/getProjectGuidList', data, 'GET')
// 获取项目名称
export const getProjectName = data => fetch('/MessageProcess/microPlace/project/getProjectName', data, 'GET')
//  获取项目统计信息
export const getStatisticsInfoByProject = data => fetch('/MessageProcess/microPlace/statistical/getStatisticsInfoByProject', data, 'GET')
// 获取树状列表
export const getPlaceAndAreaByProject = data => fetch('/MessageProcess/microPlace/statistical/getPlaceAndAreaByProject', data, 'GET')

// Home
// 获取项目统计信息 getStatisticsInfoByProject
// 获取项目名称 getProjectName
// 获取项目的火警统计信息
export const getAlarmStatisticsInfoByProject = data => fetch('/MessageProcess/microPlace/statistical/getAlarmStatisticsInfoByProject', data, 'GET')
// 获取项目故障统计信息
export const getFaultGroupStatisticInfo = data => fetch('/MessageProcess/statistic/getFaultGroupStatisticInfo', data, 'GET')
// 获取网关在线信息
export const getGatewayOnlineInfoByProject = data => fetch('/MessageProcess/microPlace/project/getGatewayOnlineInfoByProject', data, 'GET')
// 获取设备类型信息
export const getDeviceTypeInfoByProject = data => fetch('/MessageProcess/microPlace/project/getDeviceTypeInfoByProject', data, 'GET')
// 获取项目内场所坐标信息
export const getPlaceLocationInfoByProject = data => fetch('/MessageProcess/microPlace/project/getPlaceLocationInfoByProject', data, 'GET')

// FireMonitoring
// 获取项目中火灾报警列表
export const getAlarmListByProject = data => fetch('/MessageProcess/microPlace/fireAlert/getAlarmListByProject', data, 'GET')
// 获取设备运行状态信息
export const getDeviceStateInfoByScope = data => fetch('/MessageProcess/microPlace/runningState/getDeviceStateInfoByScope', data, 'GET')
// 获取场所信息
export const getPlaceInfo = data => fetch('/MessageProcess/microPlace/placeInfo/getPlaceInfo', data, 'GET')
// 提交火警处置结果
export const submitAlarmHandleResult = data => fetch('/MessageProcess/microPlace/fireAlert/submitAlarmHandleResult', data, 'POST')

// DeviceMonitoring
// 获取故障信息列表
export const getFaultListByScope = data => fetch('/MessageProcess/microPlace/runningState/getFaultListByScope', data, 'GET')

// DevicesInfo
// 获取设备信息列表
export const getDeviceInfoListByScope = data => fetch('/MessageProcess/microPlace/deviceInfo/getDeviceInfoListByScope', data, 'GET')
// 获取项目中指定设备类型列表
export const getDeviceTypeListByProject = data => fetch('/MessageProcess/microPlace/project/getDeviceTypeListByProject', data, 'GET')

// GatewayInfo
// 获取网关信息
export const getGatewayInfoListByScope = data => fetch('/MessageProcess/microPlace/project/getGatewayInfoListByScope', data, 'GET')
export const getGatewayList = data => fetch('/MessageProcess/v2/microPlace/project/getGatewayList', data, 'GET')

// PlacesInfo
// 获取场所信息 getPlaceInfo
// 获取场所的状态统计信息
export const getAlarmStatisticsInfoByPlace = data => fetch('/MessageProcess/microPlace/statistical/getAlarmStatisticsInfoByPlace', data, 'GET')
// 获取片区信息
export const getAreaInfos = data => fetch('/MessageProcess/microPlace/threeArea/getAreaInfo', data, 'GET')
// 获取片区下场所列表
export const getPlaceLocationInfoByAreas = data => fetch('/MessageProcess/v2/microPlace/threeArea/getPlaceLocationInfoByArea', data, 'GET')
// 获取片区信息(片区设备等)
export const getFaultAndFireStatisticInfoForPlaceArea = data => fetch('/MessageProcess/statistic/getFaultAndFireStatisticInfoForPlaceArea', data, 'GET')
// 获取设备运行状态信息 getDeviceStateInfoByScope

// DevicesFault
// 获取设备故障信息
export const getDeviceFaultListByScope = data => fetch('/MessageProcess/microPlace/runningState/getDeviceFaultListByScope', data, 'GET')
// 获取故障类型信息
export const getFaultTypeList = data => fetch('/MessageProcess/microPlace/systemConfig/getFaultTypeList', data, 'GET')

// FireDisposal
// 获取火灾报警处置信息
export const getAlarmHandleListByScope = data => fetch('/MessageProcess/microPlace/fireAlert/getAlarmHandleListByScope', data, 'GET')
// 获取火警处置信息
export const getAlarmHandleInfo = data => fetch('/MessageProcess/microPlace/fireAlert/getAlarmHandleInfo', data, 'GET')
// 提交火警处置结果 submitAlarmHandleResult

// RunningLogs
// 获取运行记录信息
export const getRunningLogListByScope = data => fetch('/MessageProcess/microPlace/runningLog/getRunningLogListByScope', data, 'GET')
// 获取状态分类信息
export const getLogType = data => fetch('/MessageProcess/microPlace/systemConfig/getLogType', data, 'GET')

// components ********************************************************************************************************************************
// TreeMenu
// 获取树状列表 getPlaceAndAreaByProject

// Footer
// 获取场所的火警和故障的历史统计
export const getHistoryRecordByPlace = data => fetch('/MessageProcess/microPlace/statistical/getHistoryRecordByPlace', data, 'GET')

// BMapPlace
// 获取场所信息 getPlaceInfo

// FireAndFaultStatistics
// 获取场所的火警和故障的历史统计 getHistoryRecordByPlace

// DeviceTypePlace
// 获取场所中的设备类型的信息
export const getDeviceTypeInfoByPlace = data => fetch('/MessageProcess/microPlace/placeInfo/getDeviceTypeInfoByPlace', data, 'GET')

// 获取项目中系统类型列表
export const getSystemTypeListByProject = data => fetch('/MessageProcess/microPlace/project/getSystemTypeListByProject', data, 'GET')

// 获取片区信息
export const getAreaInfo = data => fetch('/MessageProcess/microPlace/threeArea/getAreaInfo', data, 'GET')

// 获取片区内场所坐标信息
export const getPlaceLocationInfoByArea = data => fetch('/MessageProcess/microPlace/threeArea/getPlaceLocationInfoByArea', data, 'GET')

// 获取火警处置列表
export const getHandleResultList = data => fetch('/MessageProcess/microPlace/fireAlert/getHandleResultList', data, 'GET')

// 获取火警处置历史
export const getAlarmHandleHistoryListByScope = data => fetch('/MessageProcess/microPlace/fireAlert/getAlarmHandleHistoryListByScope', data, 'GET')

// 获取火警类型列表
export const getAlarmTypeList = data => fetch('/MessageProcess/microPlace/systemConfig/getAlarmTypeList', data, 'GET')

// 获取项目的历史记录统计信息
export const getHistoryRecordInfoByProject = data => fetch('/MessageProcess/microPlace/statistical/getHistoryRecordInfoByProject', data, 'GET')

// 获取片区的统计信息
export const getStatisticsInfoByArea = data => fetch('/MessageProcess/microPlace/statistical/getStatisticsInfoByArea', data, 'GET')
export const getVideoServerListOnlyNameAndGuid = data => fetch('/MessageProcess/video/getVideoServerListOnlyNameAndGuid', data, 'GET')
export const getCameraList = data => fetch('/MessageProcess/video/getCameraList', data, 'GET')
// 获取设备类型统计
export const getRunningStatusGroupInfoByProjectGuid = data => fetch('/MessageProcess//statistic/getRunningStatusGroupInfoByProjectGuid', data, 'GET')

// 首页
// 月报警&故障趋势图
// 参数：projectGuid
export const getMonthFaultAndFireStatisticInfo = data => fetch('/MessageProcess/statistic/getMonthFaultAndFireStatisticInfo', data, 'GET')

// 获取本月比上月，本季度比上季度，本年度比上一年度火警故障数量统计信息
// 获取制定时间段火警故障数量统计信息
// 参数：projectGuid: 项目id
// startTime: 开始时间
// endTime: 结束时间
export const getFaultAndFireStatisticInfo = data => fetch('/MessageProcess/statistic/getFaultAndFireStatisticInfo', data, 'GET')
export const getFaultAndFireStatisticInfoYear = data => fetch('/MessageProcess/statistic/getFaultAndFireStatisticInfo', data, 'GET')
export const getFaultAndFireStatisticInfoSeason = data => fetch('/MessageProcess/statistic/getFaultAndFireStatisticInfo', data, 'GET')
// 获取处置信息
// 参数：projectGuid: 项目id
export const getFireAlertStatisticInfoByProjectGuid = data => fetch('/MessageProcess/statistic/getFireAlertStatisticInfoByProjectGuid', data, 'GET')
// 获取月报警&故障趋势图每天的详情
// MessageProcess/v2/microPlace/project/getRunningLogByProjectGuid，
// 参数：String projectGuid,
//   long lStartTime, long lEndTime,
//   Integer pageSize, Integer pageNumber
export const getFireList = data => fetch('/MessageProcess/v2/microPlace/project/getFireList', data, 'GET')
export const getRunningLogByProjectGuid = data => fetch('/MessageProcess/v2/microPlace/project/getRunningLogByProjectGuid', data, 'GET')
export const searchFireAlertList = data => fetch('/MessageProcess/v2/microPlace/project/searchFireAlertList', data, 'GET')

// 获取用户下项目列表
export const getWithOrgProjectList = data => fetch('/permission/v2/project/withOrgProject/getList', data, 'GET')
// 项目个数
export const projectCount = data => fetch('/permission/v2/project/withOrgProject/count', data, 'GET')
// 项目权限
// 参数 id
export const projectRole = data => fetch('/permission/v2/project/withOrgProject/function/getIdList', data, 'GET')
export const homepagestatistics = data => fetch('/MessageProcess/statistic/getHeadStatistic', data, 'GET')
// 获取cookie
export const getToken = data => fetch('/sso/v2/public/getToken', data, 'GET')
