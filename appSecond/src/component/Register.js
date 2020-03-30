import React, { Component } from 'react';
import { Text, View ,Image, TextInput, TouchableOpacity,AsyncStorage,ToastAndroid} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { myFetch } from '../utils/index';
import {Actions} from 'react-native-router-flux';


export default class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    register = ()=>{
        if(this.state.username !== '' && this.state.pwd !== ''){
            this.setState({
                isloading:true
            });
            myFetch.post('/login',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                if(res.data.token === '1'){
                    ToastAndroid.showWithGravity('账户已存在',ToastAndroid.SHORT,0,0,0);
                }else if(res.data.token === '2'){
                    ToastAndroid.showWithGravity('连接错误',ToastAndroid.SHORT,0,0,0);
                }else{
                    ToastAndroid.showWithGravity('正在登录',ToastAndroid.SHORT,0,0,0);
                    AsyncStorage.setItem('register',JSON.stringify(res.data)).
                    then(()=>{
                        this.setState({isloading:false});
                        Actions.login();
                    });
                }
    
            })
        }else{
            ToastAndroid.showWithGravity('信息不可为空',ToastAndroid.SHORT,0,0,0);
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
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
                        <Icon name="user" color="red" />
                        <TextInput onChangeText={this.userhandle}  placeholder="用户名" />
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
                        <Icon name="user" color="red" />
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
                        onPress={this.register}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
