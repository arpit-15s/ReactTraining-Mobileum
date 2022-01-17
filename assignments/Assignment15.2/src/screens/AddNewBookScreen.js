import React from 'react';

class AddBook extends React.Component {
    
    state = {
        isbn: "",
        title: "",
        author: "",
        price: 0,
        cover: "",
        description: ""
    }

    handleISBN = (e) => {
        this.setState({isbn: e.target.value});
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value});
    }

    handleAuthor = (e) => {
        this.setState({author: e.target.value});
    }

    handlePrice = (e) => {
        this.setState({price: e.target.value});
    }

    handleCover = (e) => {
        this.setState({cover: e.target.value});
    }

    handleDescription = (e) => {
        this.setState({description: e.target.value});
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    render(){
        return(
            <div className="add-book ">
                <h1>Add New Book</h1>
                <div className="input-group mb-3">
                    <form>
                        
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="ISBN" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.handleISBN(e)}/>
                        </div>
    
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.handleTitle(e)}/>
                        </div>
    
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Author" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.handleAuthor(e)}/>
                        </div>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.handlePrice(e)}/>
                        </div>
    
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Cover" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.handleCover(e)}/>
                        </div>
    
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.handleDescription(e)}/>
                        </div>
    
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button> 
    
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBook;
