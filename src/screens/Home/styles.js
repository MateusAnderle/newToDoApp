import styled from 'styled-components/native';

export const Header = styled.View`
    flex: 1;
    background-color: #0D0D0D;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 120px;
    height: 35px;
    margin-top: 70px;
`;

export const HeaderWrapper = styled.View`
    flex-direction: row;
    flex: 1;
    position: absolute;
    margin: 130px 15px 0;
`;

export const TextInput = styled.TextInput`
    height: 60px;
    flex: 1;
    background-color: #333333;
    margin-right: 5px;
    border-radius: 8px;
    padding-left: 15px;
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

`;
