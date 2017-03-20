import React, { Component, PropTypes } from 'react';
import { View, Dimensions, StyleSheet, AppState, InteractionManager, Text, TouchableOpacity, Image, Animated } from 'react-native'

export default class FirstPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      fV: new Animated.Value(100),
      sV: new Animated.Value(100),
      tV: new Animated.Value(100),
      foV: new Animated.Value(100)
    }
    this._pressButton = this._pressButton.bind(this)

    this.animationT = 0;//定义一个全局变量来标示动画时间
    this.animationN = 50;//余弦函数的极值倍数，即最大偏移值范围为正负50
    this.animationM = 100;//余弦函数偏移值，使得极值在100-200之间
  }

  _pressButton() {
    const { navigator } = this.props;
    navigator.jump('Test')
  }


  componentDidMount() {
    this.animationT = 0;
    this._mounted = true
    // requestAnimationFrame(this.loopAnimation.bind(this));//组件加载之后就执行loopAnimation动画
    this.parallelAnimation()
  }

  componentWillUnmount() {
    this._mounted = false
  }

  //parallel animation
  parallelAnimation() {
    Animated.parallel([//最外层是一个并行动画，四个视图的动画以不同延迟并行运行
      Animated.sequence([//这里是一个顺序动画，针对每个视图有两个动画：缩小和还原，他们依次进行
        Animated.timing(//这里是缩小动画                         
          this.state.fV,
          {
            toValue: 50,
            duration: 500,
            delay: 0,
          }
        ),
        Animated.timing(//这里是还原动画                         
          this.state.fV,
          {
            toValue: 100,
            duration: 500,
            delay: 500,//注意这里的delay刚好等于duration，也就是缩小之后，就开始还原                
          }
        )
      ]),
      //后面三个数值的动画类似，依次加大delay就可以
      Animated.sequence([//这里是一个顺序动画，针对每个视图有两个动画：缩小和还原，他们依次进行
        Animated.timing(//这里是缩小动画                         
          this.state.sV,
          {
            toValue: 50,
            duration: 500,
            delay: 500,
          }
        ),
        Animated.timing(//这里是还原动画                         
          this.state.sV,
          {
            toValue: 100,
            duration: 500,
            delay: 1000,//注意这里的delay刚好等于duration，也就是缩小之后，就开始还原                
          }
        )
      ]),
      Animated.sequence([//这里是一个顺序动画，针对每个视图有两个动画：缩小和还原，他们依次进行
        Animated.timing(//这里是缩小动画                         
          this.state.tV,
          {
            toValue: 50,
            duration: 500,
            delay: 1000,
          }
        ),
        Animated.timing(//这里是还原动画                         
          this.state.tV,
          {
            toValue: 100,
            duration: 500,
            delay: 1500,//注意这里的delay刚好等于duration，也就是缩小之后，就开始还原                
          }
        )
      ]),
      Animated.sequence([//这里是一个顺序动画，针对每个视图有两个动画：缩小和还原，他们依次进行
        Animated.timing(//这里是缩小动画                         
          this.state.foV,
          {
            toValue: 50,
            duration: 500,
            delay: 1500,
          }
        ),
        Animated.timing(//这里是还原动画                         
          this.state.foV,
          {
            toValue: 100,
            duration: 500,
            delay: 2000,//注意这里的delay刚好等于duration，也就是缩小之后，就开始还原                
          }
        )
      ]),

    ]).start(this.parallelAnimation.bind(this));
  }


  loopAnimation() {
    if (!this._mounted)
      return
    let t0 = this.animationT, t1 = t0 + 0.5, t2 = t1 + 0.5, t3 = t2 + 0.5, t4 = t3 + 0.5;//这里分别是四个动画的当前时间，依次加上了0.5的延迟
    // 范围是 (-1 ~ +1) * this.animationN + this.animationM
    //一个frame是16ms
    var v1 = Number(Math.cos(t0).toFixed(2)) * this.animationN + this.animationM;//将cos函数的小数值只精确到小数点2位，提高运算效率
    var v2 = Number(Math.cos(t1).toFixed(2)) * this.animationN + this.animationM;
    var v3 = Number(Math.cos(t2).toFixed(2)) * this.animationN + this.animationM;
    var v4 = Number(Math.cos(t3).toFixed(2)) * this.animationN + this.animationM;
    this.setState({
      fV: v1,
      sV: v2,
      tV: v3,
      foV: v4
    });
    this.animationT += 0.35;//增加时间值，每次增值越大动画越快
    requestAnimationFrame(this.loopAnimation.bind(this));
  }

  //normal animation
  _normalAnimation() {
    Animated.timing(
      this.state.fV,
      {
        toValue: 100,
        duration: 500,
        delay: 500,
      }
    ).start();
    Animated.timing(
      this.state.sV,
      {
        toValue: 100,
        duration: 1000,
        delay: 1000,
      }
    ).start();
    Animated.timing(
      this.state.tV,
      {
        toValue: 100,
        duration: 1000,
        delay: 1500,
      }
    ).start();
    Animated.timing(
      this.state.foV,
      {
        toValue: 100,
        duration: 1000,
        delay: 2000,
      }
    ).start();
  }

  render() {

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <TouchableOpacity onPress={() => this._pressButton()}>
          <Text>======</Text>
        </TouchableOpacity>
        <View style={styles.square}>
          <Animated.View style={[styles.line, { height: this.state.fV }]} />
          <Animated.View style={[styles.line, { height: this.state.sV }]} />
          <Animated.View style={[styles.line, { height: this.state.tV }]} />
          <Animated.View style={[styles.line, { height: this.state.foV }]} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    height: 50,
    width: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10
  },
  square: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    backgroundColor: '#1f2230',
    borderRadius: 10

  }
})