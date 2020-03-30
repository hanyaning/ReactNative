import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity ,TextInput, AsyncStorage,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import { myFetch } from '../utils/index';


const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 640;
const styles = StyleSheet.create({
    headBox: { width: '100%', height: 74 * screenScale, backgroundColor: '#f23030' },
    boxPosition: { justifyContent: 'center', flexDirection: 'row', alignItems: 'center' },
    headBtn: { height: 74 * screenScale, flex: 0.15 },
    headTitle: { height: 74 * screenScale, flex: 0.7 },
})
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            islogin:false,
            username1:'',
            pwd1:'',
        }
    }
    login =()=>{
        AsyncStorage.getItem('register').
        then(res=>{
            let userMsg = JSON.parse(res);
            console.log(userMsg);
            this.setState({
                username1:userMsg.username,
                pwd1:userMsg.pwd
            },()=>{
                //console.log(this.state.username1,this.state.pwd1);
                //console.log(this.state.username,this.state.pwd);
                if(this.state.username === '' && this.state.pwd === ''){
                    ToastAndroid.showWithGravity('用户名和密码不可为空',ToastAndroid.SHORT,0,0,0);
                }else if(this.state.username !== this.state.username1 || this.state.pwd !== this.state.pwd1){
                    //console.log(1);
                    ToastAndroid.showWithGravity('用户名和密码不正确',ToastAndroid.SHORT,0,0,0);
                }else if(this.state.islogin){
                    ToastAndroid.showWithGravity('正在登录',ToastAndroid.SHORT,0,0,0);
                    Actions.home();
                }
            })
        });
        this.setState({
            islogin:true
        });
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
        }).then(res=>{
            AsyncStorage.setItem('login',JSON.stringify(res.data)).
                then(()=>{
                    this.setState({islogin:false});
                });
        })
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    render() {
        return (
            <View>
                <View style={[styles.headBox, styles.boxPosition]}>
                    <TouchableOpacity  style={[styles.headBtn, styles.boxPosition]}>
                        <Icon name='questioncircleo' color='#fff' size={28} />
                    </TouchableOpacity>
                    <View style={[styles.headTitle, styles.boxPosition]}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>
                            登录
                        </Text>
                    </View>
                    <TouchableOpacity onPress={Actions.register} style={[styles.headBtn, styles.boxPosition]}>
                        <Text style={{ color: '#fff', fontSize: 18 }}>注册</Text>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center' }}>
                    <View
                        style={{ alignItems: 'center' }}>
                        <View
                            style={{
                                width: '80%',
                                marginRight: 10,
                                borderBottomColor: '#ccc',
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: 20,
                            }}>
                            <Icon size={25} name="user" color="red" />
                            <TextInput onChangeText={this.userhandle} placeholder="用户名" />
                        </View>
                        <View
                            style={{
                                width: '80%',
                                marginRight: 10,
                                borderBottomColor: '#ccc',
                                borderBottomWidth: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingLeft: 20,
                            }}>
                            <Icon size={25} name="user" color="red" />
                            <TextInput onChangeText={this.pwdhandle} secureTextEntry={true} placeholder="密码" />
                        </View>
                        <TouchableOpacity
                            style={{
                                width: '80%',
                                height: 40,
                                backgroundColor: '#ccc',
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onPress={this.login}>
                            <Text>登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
