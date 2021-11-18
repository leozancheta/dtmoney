 import logoImg from '../../assets/Logo.svg'
 import {Container, Content} from './stylers'

 interface HeaderProps {
     onOpenNewTransactionModal: () => void;
 }
 
 export function Header ({onOpenNewTransactionModal}: HeaderProps){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                 <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transção
                 </button>

            </Content>
        </Container>
    )
}