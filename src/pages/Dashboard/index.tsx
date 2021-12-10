import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {DashboardBackground,BodyContainer, InLineTitle,InLineContainer} from './styles'
import Statement from '../../components/Statement';

const Dashboard = ()=>{
    const wallet = 5000;
    return(
        <DashboardBackground>
           <Header/>
           <BodyContainer>
               <div>
                   <Card noShadow width="90%">
                        <InLineTitle>
                            <h3 >Saldo Atual</h3>
                        </InLineTitle>
                        <InLineContainer>
                        <h2 className="wallet">
                                {wallet.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}
                            </h2>
                        </InLineContainer>
                            
                      
                   </Card>


                   <Card noShadow width="90%">
                        <InLineTitle>
                            <h3 >Receber PIX</h3>
                        </InLineTitle>
                        <InLineContainer>
                            <Input style={{flex:1}} placeholder="Valor"/>
                            <Button>Gerar Código</Button>
                        </InLineContainer>
                            <p>PIX copia e cola</p>
                            <p>5853JLGJSLIIEOD0M3MDM</p>
                      
                   </Card>



                   <Card noShadow width="90%">
                        <InLineTitle>
                            <h3 >Pagar PIX</h3>
                        </InLineTitle>
                        <InLineContainer>
                            <Input style={{flex:1}} placeholder="Insira a chave"/>
                            <Button>Pagar PIX</Button>
                        </InLineContainer>
                            
                      
                   </Card>
               </div>


               <div>
                   <Card noShadow width="90%">
                       <InLineTitle>
                           <h3>Extrato da Conta</h3>
                       </InLineTitle>
                       <Statement/>
                   </Card>
               </div>
           </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard;