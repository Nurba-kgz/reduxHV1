import { connect } from 'react-redux';
import Counter from './Counter';
import { increment, decrement, incrementByTen, decrementByTen, reset } from '../actions/actions';

const mapStateToProps = state => ({
    count: state.count,
});

const mapDispatchToProps = {
    onIncrement: increment,
    onDecrement: decrement,
    onIncrementByTen: incrementByTen,
    onDecrementByTen: decrementByTen,
    onReset: reset,
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;