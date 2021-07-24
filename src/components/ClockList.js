import Clock from './Clock';

function ClockList({ quantities = [] }) {
    console.log('ClockList Component');
    return (
        <div>
            {quantities.map((key) => (
                <Clock key={key} />
            ))}
        </div>
    );
}

export default ClockList;
