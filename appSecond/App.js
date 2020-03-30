import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, BackHandler ,ToastAndroid, AsyncStorage} from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';
import Home from './src/home/Home';
import Shop from './src/good/Shop';
import Shopping from './src/shopcart/Shopping';
import My from './src/my/My';
import MyPublish from './src/component/MyPublish';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './src/component/SwiperPage';
import Register from './src/component/Register';
import Login from './src/component/Login';


console.disableYellowBox = true;
const screenWidth = Dimensions.get('window').width;
const screenScale = screenWidth / 640;
const styles = StyleSheet.create({
    tabBox: { width: "100%", height: 77 * screenScale, backgroundColor: '#ffffff' },
    tabTxt: { fontSize: 12 },
});
const App = () => {
    
    let now = 0;
    let [isRegister,setRegister] = useState(false);
    let [isInstall,setInstall] = useState(true);
    let [isLogin,setLogin] = useState(false);
    let init = ()=>{
        //AsyncStorage.clear();
        AsyncStorage.getItem('isInstall').
        then(res=>{
            console.log(111);
            //console.log(res,isInstall);
            if(res){     
                setInstall(false);
            }
        });
        AsyncStorage.getItem('register').
        then(res=>{
            console.log(222);
                let msg = JSON.parse(res);
                if(!msg){
                    console.log(1);
                    SplashScreen.hide();
                }
                if(msg && msg.token){
                    console.log(2);
                    setRegister(true);
                    SplashScreen.hide();
                }
        });
        AsyncStorage.getItem('login').
        then(res=>{
            console.log(333);
            let user = JSON.parse(res);
            if(!res){
                return;
            }
            if(user && user.token){
                setLogin(true);
            }
        })
    }
    useEffect(()=>{
       // console.log('lll');
        init();
    },[]);
    let afterInstall = ()=>{
        setInstall(false);
    }
    if(isInstall){
        return <View style={{flex:1}}>
            <SwiperPage afterInstall={afterInstall}/>
        </View>
    }

    return (
        <Router
            backAndroidHandler={() => {
                if(Actions.currentScene === 'login'){
                    return true;
                }else{
                    if (new Date().getTime() - now < 2000) {
                        BackHandler.exitApp();
                    } else {
                        ToastAndroid.show('确定要退出吗', 100);
                        now = new Date().getTime();
                        return true;
                    }
                }
            }}
        >
            <Scene key='root'>
                <Tabs key='taber' hideNavBar inactiveTintColor='#ababab' activeTintColor='#f23030' tabBarStyle={styles.tabBox} labelStyle={styles.tabTxt}>
                    <Scene key='home' hideNavBar title="首页" icon={({ focused }) => (<Icon size={27} color={focused ? '#f23030' : '#ababab'} name='home' />)} component={Home} />
                    <Scene key='classify' hideNavBar title="商品分类" icon={({ focused }) => (<Icon size={25} color={focused ? '#f23030' : '#ababab'} name='appstore-o' />)} component={Shop} />
                    <Scene key='shop' hideNavBar title="购物车" icon={({ focused }) => (<Icon size={30} color={focused ? '#f23030' : '#ababab'} name='shoppingcart' />)} component={Shopping} />
                    <Scene key='my' hideNavBar title="个人中心" icon={({ focused }) => (<Icon size={27} color={focused ? '#f23030' : '#ababab'} name='user' />)} >
                        <Scene key='my' component={My}></Scene>
                    </Scene>
                </Tabs>
                <Scene initial={!isRegister} hideNavBar key='register' component={Register}/>
                <Scene key='publish' hideNavBar hideTabBar component={MyPublish}></Scene>
                <Scene initial={!isLogin && isRegister} key='login' hideNavBar component={Login}/>
            </Scene>
        </Router>
    )
}
export default App;