var Item = React.createClass({
    getInitialState() {
        return {editable: false}
    },
    handleEdit() {
        this.setState({ editable: !this.state.editable })
    },

    render() {
        var name = this.state.editable ? <input type='text' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
        var description = this.state.editable ? <input type='text' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;
        return (
            <div>
                {name}
                {description}
                <button onClick={this.props.handleDelete} >Delete</button>
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
            </div>
        )
    }
});