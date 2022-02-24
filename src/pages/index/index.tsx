import { Component, useState } from 'react'
import { View, Text, Input, Button } from '@tarojs/components'
import './index.scss'

export default function Index() {
  const [focusState, setFocusState] = useState(false);
  return <View>
    <Input focus={focusState} placeholder='请输入手机号码'></Input>    
    <Button onClick={(e) => { setFocusState(true);  }}>点击获取聚焦</Button>
    <Button onClick={(e) => { setFocusState(false); }}>点击失去聚焦</Button>
  </View>
}