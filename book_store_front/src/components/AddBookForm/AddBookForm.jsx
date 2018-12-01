import React, { Component } from 'react';

class AddBookForm extends Component {
    constructor(){
        super();
        this.state={
            title:'',
            genre:'',
            description:'',
            rating:''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const name = e.target.name;
        const val = e.target.value;

        this.setState({
            [name]: val 
        });
    }

    async addBook(e){
        e.preventDefault();
        
        await this.props.addBook(this.state);
        await this.props.getBooks();
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={(e) => this.addBook(e)}>
                    <input type="text" name="title" required={true} placholder='title' value={this.state.title} onChange={this.handleChange}/>
                    <input type="text" name="genre" required={true} placholder='genre' value={this.state.genre} onChange={this.handleChange}/>
                    <textarea type="text" name="description" placholder='description' value={this.state.description} onChange={this.handleChange}/>
                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}

export default AddBookForm;
