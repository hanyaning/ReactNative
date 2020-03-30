import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, FlatList, StatusBar, TouchableOpacity, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';


const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 640;
const styles = StyleSheet.create({
    head_box: { width: '100%', height: 280 * screenScale, backgroundColor: '#f23030' },
    boxPosition: { flexDirection: 'row', justifyContent: 'center', alignItems: "center" },
    boxPosition1: { flexDirection: 'row', justifyContent: 'center' },
    nav_box: { width: '100%', height: 60 * screenScale, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e1e1e1' },
    box: { height: 100 * screenScale, flex: 1 / 3 }
})

export default class My extends Component {
    constructor() {
        super();
        this.state = {
            data: [{ name: 'setting', msg: '账户管理' }, { name: 'enviromento', msg: '收货地址' },
            { name: 'idcard', msg: '我的信息' }, { name: 'profile', msg: '我的订单' },
            { name: 'qrcode', msg: '我的二维码' }, { name: 'bank', msg: '我的积分' }, { name: 'staro', msg: '我的收藏' }],
            data1: [{ name: 'tool', msg: '居家维修保养' }, { name: 'car', msg: '出行接送' }, { name: 'user', msg: '我的受赠人' },
            { name: 'isv', msg: '我的住宿优惠' }, { name: 'flag', msg: '我的活动' }, { name: 'form', msg: '我的发布' }
            ],
            avatarSource: ''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('imgPath').then((value)=>{
            this.setState({
                avatarSource:{uri:JSON.parse(value)}
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.avatarSource !== prevProps.avatarSource){
            AsyncStorage.getItem('imgPath').then((value)=>{
                this.setState({
                    avatarSource:{uri:JSON.parse(value)}
                })
            })
        }
    }
    //照相机拍照功能
    takePhoto = () => {
        const options = {
            title: '请选择',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    avatarSource: source.uri,
                }, () => {
                    AsyncStorage.setItem('imgPath', JSON.stringify(response.uri), () => {
                        console.log('存储成功!');
                    })
                });
            }
        });
    }
    exit = ()=>{
        Actions.login();
        AsyncStorage.removeItem('login');
    }
    render() {
        return (
            <View style={{ width: '100%', height: "100%", backgroundColor: '#eeeeee' }}>
                <StatusBar backgroundColor='#f23030' />
                {/* 头部 */}
                <View style={styles.head_box}>
                    <View style={[{ width: '100%', height: 200 * screenScale }, styles.boxPosition1]}>
                        <TouchableOpacity onPress={() => this.takePhoto()}>
                            <View style={{ width: 120 * screenScale, height: 120 * screenScale, paddingTop: 50, borderRadius: 50 }}>
                                <Image style={{ width: 120 * screenScale, height: 120 * screenScale, borderRadius: 50 }} source={this.state.avatarSource} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[{ width: '100%', height: 50 * screenScale }, styles.boxPosition]}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>BINNU DHILLON</Text>
                    </View>
                </View>
                {/* 列表 */}
                <View style={{ width: '100%', height: 360 * screenScale, backgroundColor: '#fff' }}>
                    <FlatList
                        ListHeaderComponent={
                            <View style={[styles.boxPosition, styles.nav_box]}>
                                <View style={[{ flex: 0.1, height: 60 * screenScale }, styles.boxPosition]}>
                                    <Icon size={25} color='#b5b5b5' name='bulb1' />
                                </View>
                                <View style={{ flex: 0.9, height: 60 * screenScale, flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                    <Text style={{ color: '#a1a1a1' }}>我的个人中心</Text>
                                </View>
                            </View>
                        }
                        numColumns={3}
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <View key={item} style={styles.box}>
                                <View style={[{ width: '100%', height: 70 * screenScale }, styles.boxPosition]}>
                                    <Icon size={25} color='#b5b5b5' name={item.name} />
                                </View>
                                <View style={[{ width: '100%', height: 30 * screenScale }, styles.boxPosition]}>
                                    <Text style={{ color: '#7e7d7d', fontSize: 12 }}>{item.msg}</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
                <View style={{ width: '100%', height: 260 * screenScale, backgroundColor: '#fff', marginTop: 5 }}>
                    <FlatList
                        ListHeaderComponent={
                            <View style={[styles.boxPosition, styles.nav_box]}>
                                <View style={[{ flex: 0.1, height: 60 * screenScale }, styles.boxPosition]}>
                                    <Icon size={25} color='#b5b5b5' name='tago' />
                                </View>
                                <View style={{ flex: 0.9, height: 60 * screenScale, flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                                    <Text style={{ color: '#a1a1a1' }}>E族活动</Text>
                                </View>
                            </View>
                        }
                        numColumns={3}
                        data={this.state.data1}
                        renderItem={({ item }) =>
                            <View key={item} style={styles.box}>
                                <TouchableOpacity onPress={()=>Actions.publish()}>
                                    <View style={[{ width: '100%', height: 70 * screenScale }, styles.boxPosition]}>
                                        <Icon size={25} color='#b5b5b5' name={item.name} />
                                    </View>
                                </TouchableOpacity>
                                <View style={[{ width: '100%', height: 30 * screenScale }, styles.boxPosition]}>
                                    <Text style={{ color: '#7e7d7d', fontSize: 12 }}>{item.msg}</Text>
                                </View>
                            </View>
                        }
                    />
                </View>
                <View style={[{width:'100%',height:50*screenScale,marginTop:20*screenScale},styles.boxPosition]}>
                    <TouchableOpacity onPress={this.exit} style={[{ width: 430 * screenScale, height: 50 * screenScale, backgroundColor: '#f23030',borderRadius:20 }, styles.boxPosition]}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>退出</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ width: '100%', height: 30 * screenScale }, styles.boxPosition]}>
                    <Text style={{ color: '#767676', fontSize: 12 }}>BINNU DHILLON|退出</Text>
                </View>
            </View>

        )
    }
}
