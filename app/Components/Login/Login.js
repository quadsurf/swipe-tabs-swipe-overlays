


import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Left,Right,Button,Body,Title ,Text} from 'native-base';

import styles from './style';

export default class Login extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Sheprd</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <Form style={styles.form}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Button block success style={{marginTop:20}} onPress={this.loginSubmit.bind(this)}>
                            <Text>Success</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
    loginSubmit(){
        this.props.navigator.push({
            name: 'Home',
            title: 'Home',
        });
    }
}