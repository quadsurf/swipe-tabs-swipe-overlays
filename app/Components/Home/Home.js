import React, { Component } from 'react';
import {TouchableHighlight, View,StyleSheet,Image } from 'react-native';

import Modal from 'react-native-modalbox';
import Swiper from 'react-native-swiper';

import { Container, Content, Footer, FooterTab, Button, Icon, Text, Header, Left, Right, Body, Title ,Segment,CheckBox,ListItem,Switch} from 'native-base';

import styles from './style';
import * as Animatable from 'react-native-animatable';
var width = require('Dimensions').get('window').width;
var height = require('Dimensions').get('window').height;
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3,
            repeatRide: false,
            swiperIndex:0,
            footerHeight:56,
        };
    }
    componentDidMount(){

    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        {
                            this.state.isOpen?<Button transparent onPress={this.backPressed.bind(this)}>
                                <Icon name="ios-arrow-back-outline"></Icon>
                            </Button>:null
                        }
                    </Left>
                    <Body>
                        <Title>Sheprd</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <Image resizeMode='cover' style={css.background} defaultSource={require('../../images/dummyMap.png')} source={require('../../images/dummyMap.png')}/>
                    {/*<Modal isOpen={this.state.isOpen} style={[css.modal]} position={"bottom"} ref={"modal"} swipeToClose={false} backdropOpacity={0} backdropPressToClose={false} onOpened={this.modalOpened.bind(this)}>
                        
                    </Modal>*/}

                    {/*{
                        this.state.isOpen?
                        <View>
                            <Swiper height={350} loop={false} autoplay={false} automaticallyAdjustContentInset={true} showsButtons={false} showsPagination={false}
                                ref={'swiperComponent'}
                                index={this.state.swiperIndex}
                                onIndexChange={(idx) => this.setState({swiperIndex: idx})}>
                                <View style={css.swiper}>
                                    <ListItem style={{margin:0,padding:0}}>
                                        <Text>Ride Scheduler</Text>                                    
                                        <Right style={{margin:0,padding:0}}>
                                            <Button transparent>
                                                <Text>Repeat Ride </Text>
                                                <Switch value={this.state.repeatRide} onValueChange={this.onRepeatChange.bind(this)}/>
                                            </Button>
                                        </Right>
                                    </ListItem>
                                    <Segment>
                                        <Button first><Text>Set Pick up Time</Text></Button>
                                        <Button last><Text>Set Drop Off Time</Text></Button>
                                    </Segment>
                                    <Text note>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                                </View>
                                <View style={css.swiper}>
                                    <Text>Set Scheduler</Text>
                                    <Text note>Starting Wed, Sept 17 at 03:00PM</Text>
                                    <Button dark block style={styles.btnBottom} onPress={this.changeSlide.bind(this)}>
                                        <Text>ADD REPEATER TO SCHEDULE</Text>
                                    </Button>
                                </View>
                                <View style={css.swiper}>
                                <Text>And simple</Text>
                                </View>
                            </Swiper>
                        </View>:null}*/}
                </Content>
                <Footer height={this.state.footerHeight}>
                    {
                        !this.state.isOpen?
                        <FooterTab>
                        <Button active={this.state.selectedTab == 0} onPress={this.selectedTabHandler.bind(this,0)}>
                            <Icon name="md-people" />
                            <Text numberOfLines={1} style={styles.tabText}>Kids</Text>
                        </Button>
                        <Button active={this.state.selectedTab == 1} onPress={this.selectedTabHandler.bind(this,1)}>
                            <Icon name="ios-arrow-round-forward-outline" />
                            <Text numberOfLines={1} style={styles.tabText}>Rides</Text>
                        </Button>
                        <Button active={this.state.selectedTab == 2} onPress={this.selectedTabHandler.bind(this,2)}>
                            <Icon active name="ios-car-outline" />
                            <Text numberOfLines={1} style={styles.tabText}>Book Ride</Text>
                        </Button>
                        <Button active={this.state.selectedTab == 3} onPress={this.selectedTabHandler.bind(this,3)}> 
                            <Icon name="ios-call-outline" />
                            <Text numberOfLines={1} style={styles.tabText}>Help</Text>
                        </Button>
                        <Button active={this.state.selectedTab == 4} onPress={this.selectedTabHandler.bind(this,4)}>
                            <Icon name="ios-menu-outline" />
                            <Text numberOfLines={1} style={styles.tabText}>Settings</Text>
                        </Button>
                    </FooterTab>:
                    <Animatable.View animation="slideInUp" easing="ease-in-out-sine" direction="alternate" duration={100}>
                        <Swiper height={this.state.footerHeight} loop={false} autoplay={false} automaticallyAdjustContentInset={true} showsButtons={false} showsPagination={false} scrollEnabled={false}
                            ref={'swiperComponent'}
                            index={this.state.swiperIndex}
                            onIndexChange={(idx) => this.setState({swiperIndex: idx})}>
                            <View style={css.swiper}>
                                <ListItem style={{margin:0,padding:0}}>
                                    <Text>Ride Scheduler</Text>                                    
                                    <Right style={{margin:0,padding:0}}>
                                        <Button transparent>
                                            <Text>Repeat Ride </Text>
                                            <Switch value={this.state.repeatRide} onValueChange={this.onRepeatChange.bind(this)}/>
                                        </Button>
                                    </Right>
                                </ListItem>
                                <Segment>
                                    <Button first active><Text>Set Pick up Time</Text></Button>
                                    <Button last><Text>Set Drop Off Time</Text></Button>
                                </Segment>
                                <Text note>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                            </View>
                            <View style={css.swiper}>
                                <Text>Set Scheduler</Text>
                                <Text note>Starting Wed, Sept 17 at 03:00PM</Text>
                                <Button dark block style={styles.btnBottom} onPress={this.changeSlide.bind(this,2)}>
                                    <Text>ADD REPEATER TO SCHEDULE</Text>
                                </Button>
                            </View>
                            <View style={css.swiper}>
                                <ListItem style={{margin:0,padding:0}}>
                                    <Text>Ride Scheduler</Text>                                    
                                    <Right style={{margin:0,padding:0}}>
                                        <Button transparent>
                                            <Text>Repeat Ride </Text>
                                            <Switch value={this.state.repeatRide} onValueChange={this.onRepeatChange.bind(this)}/>
                                        </Button>
                                    </Right>
                                </ListItem>
                                <Segment>
                                    <Button first><Text>Set Pick up Time</Text></Button>
                                    <Button last><Text>Set Drop Off Time</Text></Button>
                                </Segment>
                                <Button dark block style={styles.btnBottom}>
                                    <Text>Accept</Text>
                                </Button>
                            </View>
                        </Swiper>
                    </Animatable.View>}
                </Footer>
            </Container>
        );
    }
    backPressed(){
        this.setState({isOpen:false,footerHeight:56});
    }
    selectedTabHandler(index){
        if(index == 2){
            this.setState({isOpen:true,footerHeight:height/2});
        }
        this.setState({selectedTab:index})
    }
    changeSlide(val){
        this.refs.swiperComponent.scrollBy(1);
    }
    onRepeatChange(){
        this.setState({repeatRide:!this.state.repeatRide});
        if(this.state.repeatRide != true){
            this.refs.swiperComponent.scrollBy(1);
        }
    }
    modalOpened(){

    }
}

const css = StyleSheet.create({
  modal: {
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor:'gray',
    borderColor:'red',
    height: 400,
  },
  swiper:{
    flex:1,
    padding:10
  },
  overlay:{
    height:50,
    position:'absolute',
    top:0,
    left:0,
    right:0,
    backgroundColor:'#fff'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  background: {
    width:width,
    height:(height-120),
  }
});