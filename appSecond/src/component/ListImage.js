import React from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'

const styles = StyleSheet.create({
    boxPosition:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
    boxPosition1:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
    imagePosition:{flexDirection:'row',alignItems:'center',paddingLeft:40},
    listBox:{width:"100%",height:270},
    smallBox:{flex:0.9,height:270},
    box:{flex:0.49,height:250,backgroundColor:'#ffffff',flexDirection:'column'},
    imageBox:{height:180},
    txtBox:{height:35,flexDirection:'row',alignItems:'center'}
}) 

const ListImage = ()=>{
    return(
        <View style={[styles.boxPosition,styles.listBox]}>
            <View style={[styles.smallBox,styles.boxPosition1]}>
                <View style={styles.box}>
                    {/* 图片区域 */}
                    <View style={[styles.imageBox,styles.boxPosition]}>
                        <Image style={{width:120,height:120}} source={require('../../images/shupian_03.jpg')}/>
                    </View>
                    {/* 文字区域 */}
                    <View style={styles.txtBox}>
                        <Text style={{fontSize:12,paddingLeft:10,color:'#a6a6a6'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    </View>
                    <View style={styles.txtBox}>
                        <Text style={{fontSize:12,paddingLeft:12,color:'#f23030'}}>36.00</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={[styles.imageBox,styles.imagePosition]}>
                        <Image style={{width:132,height:132}} source={require('../../images/shupian1_05.jpg')}/>
                    </View>
                    <View style={styles.txtBox}>
                        <Text style={{fontSize:12,paddingLeft:10,color:'#a6a6a6'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    </View>
                    <View style={styles.txtBox}>
                        <Text style={{fontSize:12,paddingLeft:12,color:'#f23030'}}>36.00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ListImage