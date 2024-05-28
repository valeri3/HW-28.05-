import './App.css';
import {Card} from './components/cards';

function App() {
    return (
        <div className='pricing-container'>
            <Card tarif="Basic" information="Basic support and limited features." price="$0.99"></Card>
            <Card tarif="Standard" information="Standard support and additional features." price="$2.99"></Card>
            <Card tarif="Premium" information="Premium support and all features included." price="$5.99"></Card>
        </div>
    );
}

export default App;
