import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer =  styled.div`
        width: 100vw;
        height: 100vh;
`

function App() {
    return (
        <AppContainer>
            <Header/>
            <UltimosLancamentos/>
            <Pesquisa/>
        </AppContainer>
  );
}

export default App