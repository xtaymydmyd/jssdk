import Vue from 'vue'

import constGlobal from 'assets/js/constGlobal'
import http from 'assets/js/http'

import { AlertPlugin, ToastPlugin, LoadingPlugin, ConfirmPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)

const updateCommon = {
    checkVersion(version) {
        var _this = this
        var platform = constGlobal.isAndroid() ? 'Android' : constGlobal.isIOS() ? 'ios' : ''
        var param = {
            'platform': platform,
            'universityCode': 'lxApp'
        }
        var url = constGlobal.HostVersion + 'getAppVersion'
        http.methods.apiPost(url, param).then(res => {
            if (res.status == 0 && res.data) {
                sessionStorage.removeItem('app_update')
                if (constGlobal.isAndroid() || constGlobal.isIOS()) {
                    cordova.getAppVersion.getVersionNumber().then(function (version) {
                        _this.compareVersion(res.data, version)
                    })
                } else {
                    this.compareVersion(res.data, version)
                }
            }
        })
    },
    /**
     * 比较安卓版本号，如果有新版本，提示更新
    */
    compareVersion(versionInfo, version) {
        var _this = this
        var updateLevel = 0 // 不用更新
        let versionArr = versionInfo.version.split('.')
        let currentArr = version.split('.')
        if (versionArr[0] > currentArr[0]) {
            updateLevel = 3 // 强制更新app
        } else if (versionArr[0] == currentArr[0] && versionArr[1] > currentArr[1]) {
            updateLevel = 2 // 强制更新app
        } else if (versionArr[0] == currentArr[0] && versionArr[1] == currentArr[1] && versionArr[2] > currentArr[2]) {
            updateLevel = 1 // 根据isForceUpdating 判断是否强制更新
        }
        if (updateLevel > 0 && !constGlobal.isWeChat()) {
            if (updateLevel >= 2) {
                bus.$vux.alert.show({
                    title: '发现新版本，是否更新？',
                    content: versionInfo.description,
                    onHide () {
                        window.open(versionInfo.downloadUrl, '_system')
                    }
                })
            } else {
                if (versionInfo.isForceUpdating == 0) { // app非强制更新
                    let firstFlag = window.common.sessionGet('firstFlag')
                    sessionStorage.setItem('app_update', 1)
                    if (!firstFlag) {
                        window.common.sessionSet('firstFlag', true)
                        bus.$vux.confirm.show({
                            title: '发现新版本，是否更新？',
                            content: versionInfo.description,
                            onConfirm () {
                                window.open(versionInfo.downloadUrl, '_system')
                            }
                        })
                    }
                } else if (versionInfo.isForceUpdating == 1) { // app强制更新
                    bus.$vux.alert.show({
                        title: '发现新版本，是否更新？',
                        content: versionInfo.description,
                        onHide () {
                            window.open(versionInfo.downloadUrl, '_system')
                        }
                    })
                } else if (versionInfo.isForceUpdating == 2) { // 非强制热更新
                    let firstFlag = window.common.sessionGet('firstFlag')
                    sessionStorage.setItem('app_update', 2)
                    if (!firstFlag) {
                        window.common.sessionSet('firstFlag', true)
                        bus.$vux.confirm.show({
                            title: '发现新版本，是否更新？',
                            content: versionInfo.description,
                            onConfirm () {
                                _this.$vux.loading.show({
                                    text: '更新中...'
                                })
                                sessionStorage.removeItem('app_update')
                                chcp.fetchUpdate(_this.fetchUpdateCallback)
                            }
                        })
                    }
                } else if (versionInfo.isForceUpdating == 3) { // 强制热更新
                    bus.$vux.alert.show({
                        title: '发现新版本，是否更新？',
                        content: _this.versionInfo.description + '</br>更新完成后将会自动刷新',
                        onHide () {
                            _this.$vux.loading.show({
                                text: '更新中...'
                            })
                            chcp.fetchUpdate(_this.fetchUpdateCallback)
                        }
                    })
                }
            }
        }
    },
    /**
     * 热更新回调
    */
    fetchUpdateCallback: function(error, data) {
        this.$vux.loading.hide()
        if (error) {
            this.$vux.toast.show({
                text: '更新失败',
                type: 'cancel'
            })
        } else {
            this.hotPush.currentVersion = 0
            this.hotPush.previousWebVersion = 0

            this.$vux.toast.show({
                text: '更新完成',
                onShow () {
                    console.log('Plugin: I\'m showing')
                },
                onHide () {
                    sessionStorage.removeItem('dataBaseNum')
                    chcp.installUpdate(this.installationCallback)
                }
            })
        }
    },
    updateInstalled: function() {
        common.clearDataBaseFlagSession()
        this.$vux.toast.show({
            text: '下载完成',
            onShow () {
                console.log('Plugin: I\'m showing')
            },
            onHide () {
                chcp.installUpdate(this.installationCallback)
            }
        })
    }
}
export default updateCommon

