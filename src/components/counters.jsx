import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 1 },
            { id: 3, value: 1 },
            { id: 4, value: 1 }
        ]
    }
    handleCounterRemove = (counterId) => {
        const { counters } = this.state;
        this.setState((state) => ({
            counters: state.counters.filter(counter => counter.id !== counterId)
        }));
    }

    render() { 
        return ( 
        <div>
            {this.state.counters.map(
                counter => (
                    <Counter key={counter.id} value={counter.value} id={counter.id} handleCounterRemove={this.handleCounterRemove} />
            ))}
        </div> 
        );
    }
}
 
export default Counters;