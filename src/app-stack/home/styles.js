import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background: #f5f5f5;
`
export const Header = styled.View`
    background: #2B9689;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 14px 24px 14px 24px;
`
export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`
export const ButtonSearch = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    color: #ffffff;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`
export const Body = styled.View`
    flex: 1;
    background: #fff;
`
export const Chat = styled.TouchableOpacity`
    background: #ededed;
    align-items: center;
    flex-direction: row;
    padding: 10px 24px 10px 24px;
    border-bottom-color: #aaaba2;
    border-bottom-width: 0.5px;
`
export const ChatImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 14px;
`
export const ChatName = styled.Text`
    font-size: 18px;
`
export const ChatLastMessage = styled.Text`
    color: #999999;
    font-size: 12px;
`
export const ChatPanel = styled.View`
    flex: 1;
    flex-direction: column;
`
export const ImputPanel = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0px 12px;
`
export const ImputText = styled.TextInput`
    flex: 1;
`
export const BtnAdd = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background: #666;
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`
export const BtnRemove = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background: ${props => props.disableBackground ? 'transparent' : '#666'};
    border-radius: 50px;
    align-items: center;
    justify-content: center;
`