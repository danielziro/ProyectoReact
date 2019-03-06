
import React from 'react';
import { connect } from 'react-redux';
import { filterText, startNota, endNota, sortBy } from '../actions/filters';
 
class BookFilters extends React.Component {
    constructor(props) {
        super(props);
        this.filterNota = this.filterNota.bind(this);
    }
 
    filterNota() {
        let start = (+this.startNota.value) !== 0 ? (+this.startNota.value) : undefined;
        let end = (+this.endNota.value) !== 0 ? (+this.endNota.value) : undefined;
        this.props.dispatch(startNota(start));
        this.props.dispatch(endNota(end));
    }
 
    render() {
        return (
            <div style={{ marginBottom: 15 }}>
                <input type='text' placeholder='search'
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(filterText(e.target.value));
                    }}></input>
 
                sorted By:
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        this.props.dispatch(sortBy(e.target.value));
                    }}>
                    <option value='none'>---</option>
                    <option value='title'>Title</option>
                    <option value='published'>Published</option>
                </select>
                <br /><br />
 
                <input type='number' placeholder='startNota' style={{ width: 80 }}
                    ref={el => this.startNota = el}></input>
                <input type='number' placeholder='endNota' style={{ width: 80 }}
                    ref={el => this.endNota = el}></input>
 
                <button onClick={this.filterNota}>-></button>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
 
export default connect(mapStateToProps)(BookFilters);