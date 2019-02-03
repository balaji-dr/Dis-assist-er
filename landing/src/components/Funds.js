import React, { Component } from 'react';




class Funds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            file: '',
            description:'',
            link:''
        };

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated' + name + ' = ' + value);
    }

    handleSubmit(event) {

        var data = new FormData();
        var imagedata = document.querySelector('input[type="file"]').files[0];
        data.append("image", imagedata);
        data.append("title", this.state.title);
        data.append("description", this.state.description);
        data.append("link", this.state.link);

        fetch("https://dis-assist-er.centralus.cloudapp.azure.com/surviva/Fund/addFund", {
            mode: 'no-cors',
            method: "POST",
            body: data
        }).then(function (res) {
           alert("Successfully added funds.");
            this.props.history.push("/");
            // if (res.ok) {
            //     alert("Fund added successfully");
            //     this.props.history.push("/");
            // } else if (res.status == 401) {
            //     alert("Request failed. ");
            // }
        }).catch((error) => console.log(error));

        event.preventDefault();
    }

    onChange(e) {
        this.setState({file:e.target.files[0]})
    }



    render() {
        return (
            <div style={{
                width: 500,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: 'center',
                marginLeft: 450,
                marginTop: 120
            }}>
                <a href="#top" className="smooth"><img src={require("../assets/img/namelogo.png")} alt=""
                                                       style={{width: 150, height: 170, marginLeft: 200}}/></a>



                <form onSubmit={this.handleSubmit} encType="multipart/form-data" >

                    <center>
                        <label htmlFor="dashboard"  style={{marginLeft: 50, fontWeight: "600"}}>Funds Dashboard</label>
                    </center>



                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}
                               className="form-control" id="nameImput" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input name="description" type="text" value={this.state.description} onChange={this.handleChange}
                               className="form-control" id="description" placeholder="Description"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="file">Image</label>
                        <input name="file" type="file" onChange={this.onChange}
                               className="form-control" id="file" placeholder="Image"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="link">Link</label>
                        <input name="link" type="text" value={this.state.link} onChange={this.handleChange}
                               className="form-control" id="link" placeholder="Link for donation"/>
                    </div>

                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}

export default Funds;
