import React, { Component } from 'react'
import {View,Text,Dimensions,StyleSheet,TouchableOpacity,ToastAndroid,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import {Actions} from 'react-native-router-flux'
import SplashScreen from 'react-native-splash-screen'

console.disableYellowBox = true;
const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 640;
const styles = StyleSheet.create({
    box:{width:'100%',height:'100%',backgroundColor:'#eee'},
    headBox:{width:'100%',height:74*screenScale,backgroundColor:'#f23030'},
    boxPosition:{justifyContent:'center',flexDirection:'row',alignItems:'center'},
    headBtn:{height:74*screenScale,flex:0.15},
    headTitle:{height:74*screenScale,flex:0.7},
    listBox:{width:'100%',height:900*screenScale,backgroundColor:'#fff'},
    bottomBtn:{width:'100%',height:100*screenScale,backgroundColor:'#fff'},
    touchBtn:{width:110,height:35,backgroundColor:'#f23030',borderRadius:20},
})
export default class MyPublish extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1,
            flags:false,
            flag:['已回复','未回复','未回复','已回复','未回复','已回复','已回复','已回复','未回复','已回复','未回复','未回复','已回复','未回复','已回复'],
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&&limit=15').
        then(res=>res.json()).
        then(res=>this.setState({
            data:res.data,
            flags:true
        }))
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.page !== prevProps.page){
            fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&&limit=15').
            then(res=>res.json()).
            then(res=>this.setState({
                data:res.data,
            }))
        }
    }
    addPage = ()=>{
        console.log('++');
        this.setState({
            page:this.state.page +1
        })
    }
    deletePage = ()=>{
        console.log('--');
        if(this.state.page > 1){
            this.setState({
                page:this.state.page-1
            },()=>{
                console.log(this.state.page)
            })
        }else{
            ToastAndroid.showWithGravity('已经是第一页',ToastAndroid.SHORT,0,0,0)
        }
    }
    render() {
        if(!this.state.flags){
            console.log('1');
            return(
                <ActivityIndicator style={{justifyContent:'center',alignItems:'center'}} size="large" color="red" />
            )
        }else{
            return (
                <View style={styles.box}>
                    {/* 头部框 */}
                    <View style={[styles.headBox,styles.boxPosition]}>
                        <TouchableOpacity onPress={()=>Actions.pop()} style={[styles.headBtn,styles.boxPosition]}>
                            <Icon name='left' color='#fff' size={28}/>
                        </TouchableOpacity>
                        <View style={[styles.headTitle,styles.boxPosition]}>
                            <Text style={{color:'#fff',fontSize:18}}>
                                我的发布
                            </Text>
                        </View>
                        <TouchableOpacity style={[styles.headBtn,styles.boxPosition]}>
                            <Icon name='ellipsis1' color='#fff' size={28}/>
                        </TouchableOpacity>
                    </View>
                    {/* 列表部分 */}
                    <View style={styles.listBox}>
                        {
                            this.state.data.map((item,idx)=>{
                                return(
                                    <View key={idx} style={{height:40,flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderBottomColor:'#a1a1a1'}}>
                                        <Text style={{paddingLeft:10,color:'#333',flex:0.6}}>
                                             {item.title.length > 15 ? item.title.slice(0,15) + '...' : item.title}
                                        </Text>
                                        <Text style={{flex:0.35,color:'#333333',paddingLeft:20}}>
                                            {item.create_at.slice(0,10)}
                                        </Text>
                                        <Text style={this.state.flag[idx] === '已回复' ? {color:'#f23030',paddingLeft:10} :{color:'#333',paddingLeft:10}}>
                                            {this.state.flag[idx] === '已回复' ? '已回复' : '未回复'}
                                        </Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                    {/* 按钮部分 */}
                    <View style={[styles.bottomBtn,{flexDirection:'row',alignItems:'center'}]}>
                        <TouchableOpacity onPress={()=>this.deletePage()} style={[styles.touchBtn,styles.boxPosition,{marginLeft:20}]}>
                            <Text style={{color:'#fff'}}>上一页</Text>
                        </TouchableOpacity>
                        <Text style={{marginLeft:80}}>第 {this.state.page} 页</Text>
                        <TouchableOpacity onPress={()=>this.addPage()} style={[styles.touchBtn,styles.boxPosition,{marginLeft:65}]}>
                            <Text style={{color:'#fff'}} >下一页</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}
