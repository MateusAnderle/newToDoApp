import styled from 'styled-components/native';

export const ContainerWrapper = styled.View`
    width: 100%;
`;

export const Container = styled.View`
    margin: 0px 20px 10px;
    padding: 15px 10px;
    flex-direction: row;
    background-color: #333333;
    border-radius: 6px;
    justify-content: space-between;
    align-items: center;
`;
export const CheckboxContainer = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
`;

export const TaskDescription = styled.Text`
    flex: 1;
    text-align: left;
    margin: 0 15px 0 15px;

`;

export const Icon = styled.TouchableOpacity`
    height: 35px;
    width: 35px;
    justify-content: center;
    align-items: center;
`;
