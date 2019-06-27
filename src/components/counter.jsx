import React, { Component } from 'react';
import Counters from './counters';


class Counter extends Component {
    state = {
        count: 1,
        /*tags: ['tag1', 'tag2', 'tag3']*/
    };

    /*constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    handleIncrement = () => {
        this.setState({count: this.state.count + 1});
    }

    handleDelete = () => {
        this.setState((state) => ({
            count: state.count - 1
        }), () => {
            if (this.state.count <= 0) {
                this.props.handleCounterRemove(this.props.id);
            }
        });
    }


    /*renderTags() {
        if (this.state.tags.length == 0) {
            return <p>There are no tags!</p>;
        }

        return (
            <ul>
                {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
            </ul>
        )
    }*/

    render() { 

        let classes = 'badge m-2 badge-';
        classes += this.state.count === 1 ? 'primary' : 'primary';

        return ( 
            <div>
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement()} className='btn btn-primary m-2'>+</button>
                <button onClick={() => this.handleDelete()} className="btn btn-danger m-2">-</button>
        {/*this.renderTags()*/}
            </div>
         );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Reached' : count;
    }

}
 
export default Counter;