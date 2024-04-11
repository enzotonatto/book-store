import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer =  styled.div`
        width: 100vw;
        height: 100vh;
`

function Home() {
    return (
        <AppContainer>
            <UltimosLancamentos/>
            <Pesquisa/>
        </AppContainer>
  );
}

export default Home