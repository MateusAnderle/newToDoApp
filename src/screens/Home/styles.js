import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    flex: 1;
    background-color: #0D0D0D;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 120px;
    height: 35px;
    margin-top: 80px;
`;

export const HeaderWrapper = styled.View`
    flex-direction: row;
    flex: 1;
    position: absolute;
    margin: -30px 15px 0;
`;

export const TextInput = styled.TextInput`
    height: 60px;
    flex: 1;
    background-color: #333333;
    margin-right: 5px;
    border-radius: 8px;
    padding-left: 15px;
    color: #F2F2F2;
`;

export const Button = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    background-color: #1E6F9F;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const Body = styled.View`
    flex: 3;
    background-color: #1A1A1A;
    align-items: center;
`;

export const BodyHeader = styled.View`
    margin-top: 30px;
    width: 90%;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-color: #333333;
`;

export const Content = styled.View`
    width: 100%;
    margin: 20px 20px 0;
    justify-content: center;
    align-items: center;
`;

export const WrapperOpen = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const WrapperFinished = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Number = styled.View`
    background-color: #333333;
    padding: 1px 11px;
    border-radius: 15px;
    font-size: 14px;
    margin-left: 8px;
`;

export const OpenTasks = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #4EA8DE;
`;

export const FinishedTasks = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #8284FA;
`;

export const TaskList = styled.FlatList`
    width: 100%;
    height: 470px;
`;

export const Text = styled.Text`
    color: #D9D9D9;
    font-weight: bold;
`;