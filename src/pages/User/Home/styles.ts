import styled from 'styled-components';

export const HomeBackground = styled.main`
  width: 100%;
  
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.backgroundLight};
`

export const BodyContainer = styled.main`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 255px;
  > div {
    flex: 1;
    & > div {
      margin-bottom: 20px;
    }
    &:nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }
`

export const Greetings = styled.div`
  margin: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
`

export const Wallet = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  justify-content: center;
`

export const InlineTitle = styled.div`
  display: flex;
  width: 100%;
`

export const InlineContainer = styled.div`
  display: flex;
  width: 100%;
  div {
    flex: 4;
    margin-right: 20px;
  }
  button {
    flex: 1;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 12%;
  
  display: flex;
  align-items: center;
  flex-direction: row;
  Button {
    width: 1000px;
    height: 300px;
    padding: 4px 5px;
  }
`