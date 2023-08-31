import React, { useEffect } from 'react';
import * as ccxt from 'ccxt';
import { Container } from '../../components/container';



const HomePage = () => {
    useEffect(() => {
        const fetchExchangeInfo = async () => {
          try {
            const exchange = new ccxt.binance(); // Use the desired exchange class (e.g., binance, coinbasepro)
            const markets = await exchange.loadMarkets();
            console.log(markets);
          } catch (error) {
            console.error('Error fetching exchange info:', error);
          }
        };
    
        fetchExchangeInfo();
      }, []);
  return (
    <Container>
        <div>HomePage</div>
    </Container>
  )
}

export default HomePage