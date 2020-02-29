import React from 'react'
import {
    Container,
    Header,
    Title,
    ButtonReturn,
    Body,
    Configs,
    Identifica,
    IdentificaImage,
    IdentificaPanel,
    IdentificaName,
    IdentificaMessage,
    ConfigName,
    ConfigMessage,
    ConfigPanel,
    ConfigInfo,
    From,
    FromText,
    FromCopy,
    Convidar,
    ConvidarPanel,
    ConvidarName,
    Risquinho
} from './styles'

import IconFontAwesome from 'react-native-vector-icons/FontAwesome5'
import IconFontMaterial from 'react-native-vector-icons/MaterialIcons'

export const Configuration = ({ navigation }) => {

    const goHome = () => {
        navigation.goBack()
    }    

    const configs = [
        {
            id: 1,
            name: 'Conta',
            Message: 'Privacidade, segurança, mudar número',
            icon: (<IconFontAwesome name="key" size={22} color="#2B9689" />)
        },
        {
            id: 2,
            name: 'Conversas',
            Message: 'Tema, papéis de parede, histórico de conversas',
            icon: (<IconFontMaterial name="message" size={22} color="#2B9689" />)
        },
        {
            id: 3,
            name: 'Notificações',
            Message: 'Mensagem, toques de grupo e chamada',
            icon: (<IconFontMaterial name="notifications" size={22} color="#2B9689" />)
        },
        {
            id: 4,
            name: 'Uso de dados e armazenamento',
            Message: 'Uso de rede, download automático',
            icon: (<IconFontMaterial name="cached" size={22} color="#2B9689" />)
        },
        {
            id: 5,
            name: 'Ajuda',
            Message: 'FAQ, fale conosco, política de privacidade',
            icon: (<IconFontMaterial name="help" size={22} color="#2B9689" />)
        }
    ]

    return (
        <Container>
            <Header>
                <ButtonReturn onPress={goHome}>
                    <IconFontMaterial name="arrow-back" size={22} color="#fff" />
                </ButtonReturn>
                <Title>Configurações</Title>
            </Header>
            <Body>
                <Identifica>
                    <IdentificaImage source={{ uri: 'https://randomuser.me/api/portraits/men/43.jpg' }} />
                    <IdentificaPanel>
                        <IdentificaName>Mateus</IdentificaName>
                        <IdentificaMessage>O que tiver que ser seu.</IdentificaMessage>
                    </IdentificaPanel>
                </Identifica>
                <Configs>
                    {configs.map((item) => (
                        <ConfigPanel key={item.id}>
                            {item.icon}
                            <ConfigInfo>
                                <ConfigName>{item.name}</ConfigName>
                                <ConfigMessage>{item.Message}</ConfigMessage>
                            </ConfigInfo>
                        </ConfigPanel>
                    ))}
                </Configs>
                <Risquinho></Risquinho>
                <Convidar>
                    <IconFontAwesome name="user-friends" size={22} color="#2B9689" />
                    <ConvidarPanel>
                        <ConvidarName>Convidar um Amigo</ConvidarName>
                    </ConvidarPanel>
                </Convidar>                
                <From>
                    <FromText>from</FromText>
                    <FromCopy>FACEBOOK</FromCopy>
                </From>
            </Body>
        </Container>
    )
}