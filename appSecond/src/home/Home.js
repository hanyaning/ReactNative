import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, Image, TouchableOpacity, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { Carousel } from '@ant-design/react-native';


const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 640;
const styles = StyleSheet.create({
    boxPosition: { flexDirection: 'row', justifyContent: 'center', alignItems: "center" },
    boxPosition1: { flexDirection: 'row', alignItems: "center" },
    headerBox: { width: '100%', height: 75 * screenScale, backgroundColor: '#f23030' },
    header_textBox: { width: 520 * screenScale, height: 55 * screenScale, backgroundColor: '#fbb8b8', borderRadius: 20 },
    header_right: { width: 45 * screenScale, height: 55 * screenScale, marginLeft: 20 },
    header_Search: { flex: 0.15, height: 55 * screenScale, flexDirection: 'row', alignItems: 'center' },
    header_text: { flex: 0.85, height: 55 * screenScale, padding: 0, color: '#fff', paddingLeft: 5 },
    cal_box: { width: '100%', height: 274 * screenScale },
    cal_img: { width: '100%', height: 274 * screenScale },
    list_box: { width: '100%', height: 125 * screenScale, backgroundColor: '#ffffff', marginTop: 6 },
    btn_box: { width: '100%', height: 95 * screenScale },
    txt_box: { width: '100%', height: 30 * screenScale }
});
export default class Home extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5' }}>
                <StatusBar backgroundColor='#f23030' />
                {/* 头部搜索框 */}
                <View style={[styles.headerBox, styles.boxPosition]}>
                    <View style={[styles.header_textBox, styles.boxPosition]}>
                        <View style={styles.header_Search}>
                            <Icon style={{ paddingLeft: 22 }} size={22} color='#fff' name='search1' />
                        </View>
                        <TextInput style={styles.header_text} value="请输入您要搜索的关键字" />
                    </View>
                    <View style={[styles.header_right, styles.boxPosition]}>
                        <Icon size={27} color='#fff' name='shoppingcart' />
                    </View>
                </View>
                {/* 轮播图 */}
                <View style={styles.cal_box}>
                    <Carousel infinite selectedIndex={0} autoplay dotStyle={{ backgroundColor: '#fff' }} dotActiveStyle={{ backgroundColor: '#f23030' }}>
                        <View style={styles.boxPosition}>
                            <Image style={styles.cal_img} source={require('../../images/banner_02.jpg')} />
                        </View>
                        <View style={styles.boxPosition}>
                            <Image style={styles.cal_img} source={require('../../images/banner1_02.jpg')} />
                        </View>
                        <View style={styles.boxPosition}>
                            <Image style={styles.cal_img} source={require('../../images/banner_02.jpg')} />
                        </View>
                    </Carousel>
                </View>
                {/* 列表 */}
                <View style={[styles.list_box, styles.boxPosition]}>
                    {/* 图片部分 */}
                    <View style={[{ flex: 0.2, height: 110 * screenScale }, styles.boxPosition]}>
                        <View style={[{ width: 90 * screenScale, height: 90 * screenScale, backgroundColor: '#ffcccc', borderRadius: 50 }, styles.boxPosition]}>
                            <Image style={{ width: 35, height: 35 }} source={require('../../images/repair_03.jpg')} />
                        </View>
                    </View>
                    <View style={[{ flex: 0.6, height: 110 * screenScale }, styles.boxPosition1]}>
                        <Text style={{ paddingLeft: 30, color: '#4e4e4e' }}>居家维修保养</Text>
                    </View>
                    <View style={[{ flex: 0.2, height: 110 * screenScale }, styles.boxPosition1]}>
                        <Icon style={{ paddingLeft: 55 }} size={15} color='#cecece' name='right' />
                    </View>
                </View>
                <View style={[styles.list_box, styles.boxPosition]}>
                    {/* 图片部分 */}
                    <View style={[{ flex: 0.2, height: 110 * screenScale }, styles.boxPosition]}>
                        <View style={[{ width: 90 * screenScale, height: 90 * screenScale, backgroundColor: '#ffe1b1', borderRadius: 50 }, styles.boxPosition]}>
                            <Image style={{ width: 35, height: 35 }} source={require('../../images/flag_03.jpg')} />
                        </View>
                    </View>
                    <View style={[{ flex: 0.6, height: 110 * screenScale }, styles.boxPosition1]}>
                        <Text style={{ paddingLeft: 30, color: '#4e4e4e' }}>住宿优惠</Text>
                    </View>
                    <View style={[{ flex: 0.2, height: 110 * screenScale }, styles.boxPosition1]}>
                        <Icon style={{ paddingLeft: 55 }} size={15} color='#cecece' name='right' />
                    </View>
                </View>
                <View style={[styles.list_box, styles.boxPosition]}>
                    {/* 图片部分 */}
                    <View style={[{ flex: 0.2, height: 110 * screenScale }, styles.boxPosition]}>
                        <View style={[{ width: 90 * screenScale, height: 90 * screenScale, backgroundColor: '#bfe6a8', borderRadius: 50 }, styles.boxPosition]}>
                            <Image style={{ width: 35, height: 35 }} source={require('../../images/clock_03.jpg')} />
                        </View>
                    </View>
                    <View style={[{ flex: 0.6, height: 110 * screenScale }, styles.boxPosition1]}>
                        <Text style={{ paddingLeft: 30, color: '#4e4e4e' }}>出行接送</Text>
                    </View>
                    <View style={[{ flex: 0.2, height: 110 * screenScale }, styles.boxPosition1]}>
                        <Icon style={{ paddingLeft: 55 }} size={15} color='#cecece' name='right' />
                    </View>
                </View>
                <View style={[styles.list_box, styles.boxPosition]}>
                    {/* 图片部分 */}
                    <View style={[{ flex: 0.2, height: 110 * screenScale }, styles.boxPosition]}>
                        <View style={[{ width: 90 * screenScale, height: 90 * screenScale, backgroundColor: '#c3ddf2', borderRadius: 50 }, styles.boxPosition]}>
                            <Image style={{ width: 35, height: 35 }} source={require('../../images/gift_03.jpg')} />
                        </View>
                    </View>
                    <View style={[{ flex: 0.6, height: 110 * screenScale }, styles.boxPosition1]}>
                        <Text style={{ paddingLeft: 30, color: '#4e4e4e' }}>E族活动</Text>
                    </View>
                    <View style={[{ flex: 0.2, height: 110 * screenScale }, styles.boxPosition1]}>
                        <Icon style={{ paddingLeft: 55 }} size={15} color='#cecece' name='right' />
                    </View>
                </View>
                <View style={[styles.btn_box, styles.boxPosition]}>
                    <TouchableOpacity style={[{ width: 540 * screenScale, height: 60 * screenScale, backgroundColor: '#f23030' }, styles.boxPosition]}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>发布需求</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.txt_box, styles.boxPosition]}>
                    <Text style={{ color: '#8f8f8f', fontSize: 10 }}>©E族之家 版权所有</Text>
                </View>
            </View>
        )
    }
}
