/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react'
import {
    Alert, BackHandler,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native'

import WebViewComponent from "./components/WebView.component"

const App = () => {
    const isDarkMode = useColorScheme() === 'dark'

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <SafeAreaView style={styles.root}>
                <WebViewComponent
                    handleClose={() => {
                        Alert.alert('종료', '앱을 종료할까요?', [
                            {
                                text: "취소",
                                onPress: () => null,
                            },
                            {
                                test: "종료",
                                onPress: () => BackHandler.exitApp()
                            }])
                    }}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default App
