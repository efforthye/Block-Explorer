// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
// import ApexChart from './components/Chart';
// import ChartComponent from './components/Chart';
import BlockContainer from './containers/Block';
import FooterContainer from './containers/Footer';
import HeaderContainer from './containers/Header';
import MainContainer from './containers/Main';
import MiningContainer from './containers/Mining';
import TestContainer from './containers/Test';
import TransactionContainer from './containers/Transaction';
import WalletContainer from './containers/Wallet';

function App() {

  return (
    <AllWrap className='allWrap'>

      {/* Header */}
      <HeaderContainer />

      <Wrap className="wrap">
        {/* linked component */}
        <Routes>
          {/* 메인 */}
          <Route path='/' element={<MainContainer />} />

          {/* 블록 */}
          {/* <Route path='/block' element={<AllBlockContainer />} /> */}
          <Route path='/block/:blockNumber' element={<BlockContainer />} />

          {/* 트랜잭션 */}
          {/* <Route path='/transaction' element={<AllTransactionContainer />} /> */}
          <Route path='/transaction/:transactionHash' element={<TransactionContainer />} />

          {/* 지갑 */}
          {/* 지갑 라우터는 없애기 */}
          <Route path='/wallet' element={<WalletContainer />} />
          <Route path='/wallet/:account' element={<WalletContainer />} />

          {/* 마이닝 */}
          <Route path='/mining' element={<MiningContainer />} />

          {/* 테스트 */}
          <Route path='/test' element={<TestContainer />} />
        </Routes>
      </Wrap>

      {/* footer */}
      <FooterContainer />

    </AllWrap>
  );
}

export default App;

const AllWrap = styled.div`
  /* background-color: rgb(245,245,245); */
  *::selection{
    /* background: #CDE6F3; */
    background: #0784c3;
    color: white;
  }
`;
const Wrap = styled.div`
  margin: 0 auto;
  background-color: white;
  border-top: 1px solid rgb(245,245,245);
  /* border-bottom: 1px solid rgb(245,245,245); */
  /* width: 80%; */

  /* height: 700px;  */
`;