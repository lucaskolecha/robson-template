import React, { useState } from 'react'
import {
    Container,
    Header,
    Title,
    ButtonSearch,
    Body,
    Chat,
    ChatImage,
    ChatName,
    ChatLastMessage,
    ChatPanel,
    ImputPanel,
    ImputText,
    BtnAdd,
    BtnRemove,
} from './styles'
import { ToastAndroid, FlatList, TouchableWithoutFeedback } from 'react-native'

import IconFontAwesome from 'react-native-vector-icons/FontAwesome5'

export const Home = ({ navigation }) => {
    const [inputValue, setImputValue] = useState('')
    const [chats, setChats] = useState([
        {
            id: 1,
            name: 'Mateus Miranda',
            lastMessage: 'Boa noite pessoal',
            picture: 'https://randomuser.me/api/portraits/men/92.jpg'
        },
        {
            id: 2,
            name: 'Gabi Miranda',
            lastMessage: 'Tá bão',
            picture: 'https://randomuser.me/api/portraits/women/52.jpg'
        },
        {
            id: 3,
            name: 'Cesar Spitfier',
            lastMessage: 'Acordeon com ispaiqui',
            picture: 'https://randomuser.me/api/portraits/men/82.jpg'
        }
    ])

    const onClick = (userName) => {
        ToastAndroid.show(userName, 3000)
        console.log(userName)
    }

    const setItem = () => {
        setChats([...chats, { id: chats.length + 1, name: inputValue }])
        setImputValue('')
    }

    const removeItem = (chat) => {
        const index = chats.findIndex((c) => c.id == chat.id)
        chats.splice(index, 1)
        setChats([...chats])
    }

    const openConfiguration = () => {
        navigation.navigate('Configuration')
    }

    return (
        <Container>
            <Header>
                <Title>WhatsApp</Title>
                <ButtonSearch onPress={openConfiguration}>
                    <IconFontAwesome name="ellipsis-v" size={22} color="#fff" />
                </ButtonSearch>
            </Header>
            <Body>
                <ImputPanel>
                    <ImputText
                        value={inputValue}
                        onChangeText={setImputValue}
                        placeholder='Escreva um nome aqui'
                        placeholderTextColor='#999' />
                    <BtnAdd onPress={setItem}>
                        <IconFontAwesome name="plus" size={22} color="#ffff" />
                    </BtnAdd>
                </ImputPanel>
                <FlatList
                    keyExtractor={(item) => String(item.id)}
                    data={chats}
                    renderItem={({ item }) => (
                        <Chat key={item.id} onPress={() => { onClick(item.name) }}>
                            <ChatImage source={{ uri: item.picture }} />
                            <ChatPanel>
                                <ChatName>{item.name}</ChatName>
                                <ChatLastMessage>{item.lastMessage}</ChatLastMessage>
                            </ChatPanel>
                            <TouchableWithoutFeedback>
                                <BtnRemove disableBackground={true} onPress={() => {removeItem(item)}}>
                                    <IconFontAwesome name="trash" size={22} color="red" />
                                </BtnRemove>
                            </TouchableWithoutFeedback>
                        </Chat>
                    )} />
            </Body>
        </Container>
    )
}