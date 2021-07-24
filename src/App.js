import Clock from './components/ClockList';

function App() {
    console.log('App Component');
    const quantities = [1, 2, 3];
    return (
        <div>
            <Clock quantities={quantities} />
        </div>
    );
}

export default App;
