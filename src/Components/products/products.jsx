import React, {useState, useEffect}from 'react';
import {Grid, Paper, Avatar, Typography, TextField, Button} from '@material-ui/core'
import axios from 'axios';
import Swal from 'sweetalert2'
import {urlNewProduct, urlUpdateProduct, urlDeleteProduct} from '../../service/url'
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';




const ProductsComponent = (props) => {
const paperStyle={padding:'30px 50px', width:1000, margin:"30px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'blue'}
const buttonStyle={display:"flex", width:"100%", margin: "20px Auto" }

//const [detal, setDetal] = useState([])
let [_id, setId] = useState('')
const [productBarCode, setProductBarCode] = useState('')
const [productName, setProductName] = useState('')
const [productDescription, setProductDescription] = useState('')
const [price, setPrice] = useState('')
const [storage, setStorage] = useState('')
let [shopName, setShop] = useState('')
const [data, setData] = useState();




shopName = localStorage.getItem("shopName")


const createProduct = () =>{
    if(!productBarCode || !productName || !productDescription || !price || !storage){
        Swal.fire({
            title: 'Warning!',
            text: 'Please fill in all the fields ',
            icon: 'warning',
            confirmButtonText: 'Cool'
        })
    }else{
        let body = {
            productBarCode: productBarCode,
            productName: productName,
            productDescription: productDescription, 
            price: price,
            storage: storage,
            shopName: shopName,
        }
        axios.post(urlNewProduct + 'newproduct', body)
    
        .then(res => {
            // eslint-disable-next-line no-lone-blocks
            { Object.entries(res.data).length !== 0 && done(res.data) }
            window.location.reload(true);
        }).catch(
            function(error) {
                Swal.fire({
                    title: 'error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Fine'
                  })
            }
        )
    }


    const done = (message) => {
        Swal.fire({
            title: 'Mensaje!',
            text: message,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
}

useEffect(() => {
    setProductBarCode(props.item.productBarCode)
    setProductName(props.item.productName)
    setProductDescription(props.item.productDescription)
    setPrice(props.item.price)
    setStorage(props.item.storage)
    console.log(props);
}, [props.item])

const updateProduct = () => {
    _id = (props.item._id)
    let body = 
    {
        productBarCode: productBarCode,
        productName: productName,
        productDescription: productDescription, 
        price: price,
        storage: storage,
        shopName: shopName,
    }
    try {
        axios.put(`${urlUpdateProduct}/updateproduct/${_id}`, body)
        .then((res) => {
            setData(res.data);
            console.log(res.data)
            console.log(data)
            window.location.reload(true);
        }).catch((error) => {
            console.error(error)
            Swal.fire({
                title: 'Mensaje!',
                text: error.message,
                icon: error.icon,
                confirmButtonText: 'Fine'
              })
        })
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'Mensaje!',
            text: error.message,
            icon: error.icon,
            confirmButtonText: 'Fine'
          })
    }

}

const deleteProduct = () => {
debugger
    try {
        axios.delete(`${urlDeleteProduct}deleteproduct/${props.item._id}`).then((res) => {
            console.log(res.data)
            window.location.reload(true);
        }).catch((error) => {
            console.error(error)
        })
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'Mensaje!',
            text: error.message,
            icon: error.icon,
            confirmButtonText: 'Fine'
          })
    }

}


    return (
        <div className = "container-fluid">
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                        </Avatar>
                        <h2 style={headerStyle}>Products</h2>
                        <Typography variant='caption' gutterBottom>create or update your products!</Typography>
                    </Grid>
                    <form>
                        <TextField fullWidth label = 'Bar Code' onChange={(e)=>setProductBarCode(e.target.value)} value={productBarCode}/>
                        <TextField fullWidth label = 'Product Name' onChange={(e)=>setProductName(e.target.value)} value={productName} />
                        <TextField fullWidth label = 'Description' onChange={(e)=>setProductDescription(e.target.value)} value={productDescription} />
                        <TextField fullWidth label = 'Price' onChange={(e)=>setPrice(e.target.value)} value={price} />
                        <TextField fullWidth label = 'storage' onChange={(e)=>setStorage(e.target.value)} value={storage} />
                        <>
                        <Button type = 'button' style={buttonStyle} variant='outlined' onClick={()=>createProduct()} color = 'primary' >Create
                        <SaveIcon/>
                        </Button>
                        <Button type = 'button' style={buttonStyle} variant='contained' onClick={()=>updateProduct()} color = 'primary' >Update
                        <ThreeSixtyIcon/>
                        </Button>
                        
                        </>
                        <>
                        <Button type = 'button'  style={buttonStyle} variant="contained" color="secondary" onClick={()=>deleteProduct()} >Delete
                            <DeleteIcon  />
                        </Button>
                        </>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}

export default ProductsComponent
