import React from 'react'

class AddProduct extends React.Component {
  constructor(props){
    super(props);
    this.state={
    name:"",
    price:""
    }
    
  }
  render() { 
    return ( <div className='container mt-4'>
    <form className="row" onSubmit={(e)=>{
      e.preventDefault();
      this.props.addProduct(this.state.name,Number(this.state.price));
    }}>
<div className="col-5">

<input
  type="text" 
  id="name"
  name="name"
  placeholder="name"
  onChange={(e)=>{
this.setState({name:e.currentTarget.value});
  }}
  value={this.state.name}
/>
</div>
<div className="col-5">

<input
  type="number"
  id="price"
  name="price"
  placeholder="price"
  onChange={(e)=>{
    this.setState({price:e.currentTarget.value});
      }}
      value={this.state.price}
/>
</div>
<div className="col-2">
<button type="submit" className="btn btn-primary mb-3">
  addProduct
</button>
</div>
</form>

</div>);
  }
}
 
export default AddProduct;
