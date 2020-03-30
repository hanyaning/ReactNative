import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Icon } from '@ant-design/react-native'
import ListImage from '../component/ListImage'

const styles = StyleSheet.create({
    boxPosition: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    txtPosition: { alignItems: 'center', flexDirection: 'row', paddingLeft: 12 },
    txtPosition1: { alignItems: 'center', flexDirection: 'row', paddingLeft: 18 },
    searchBox: { width: "100%", height: 47, backgroundColor: '#ffffff', borderBottomWidth: 0.5, borderBottomColor: "#a6a6a6" },
    searchBox1: { flex: 0.85, height: '80%', backgroundColor: '#eeeeee', flexDirection: 'row' },
    textBox: { flex: 0.89, height: '100%', backgroundColor: '#eeeeee' },
    textStyle: { paddingLeft: 5, fontSize: 13 },
    imgBox: { flex: 0.11, height: '100%', backgroundColor: '#eeeeee' },
    navBox: { width: '100%', height: 47, backgroundColor: '#ffffff' },
    navTextBox: { flex: 0.85, height: 47, flexDirection: 'row' },
    txt: { flex: 0.2, height: 47, fontSize: 10 },
})
export default class Shop extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    {/* 搜索框 */}
                    <View style={[styles.searchBox, styles.boxPosition]}>
                        <View style={styles.searchBox1}>
                            <TextInput style={[styles.textBox, styles.textStyle]} placeholder='请输入商品名称' />
                            <View style={[styles.imgBox, styles.boxPosition]}><Icon name="search" color='#a6a6a6' /></View>
                        </View>
                    </View>
                    {/* 导航栏 */}
                    <View style={[styles.navBox, styles.boxPosition]}>
                        <View style={styles.navTextBox}>
                            <View style={[styles.txt, styles.txtPosition]}><Text style={{ color: '#f23030' }}>综合</Text></View>
                            <View style={[styles.txt, styles.txtPosition1]}><Text style={{ color: '#666666' }}>销量</Text></View>
                            <View style={[styles.txt, styles.txtPosition1]}><Text style={{ color: '#666666' }}>新品</Text></View>
                            <View style={[styles.txt, styles.txtPosition1]}><Text style={{ color: '#666666' }}>价格</Text></View>
                            <View style={[styles.txt, styles.txtPosition1]}><Text style={{ color: '#666666' }}>信用</Text></View>
                        </View>
                    </View>
                    {/* 图片列表 */}
                    <ListImage />
                    <ListImage />
                    <ListImage />
                </View>
            </ScrollView>
        )
    }
}
