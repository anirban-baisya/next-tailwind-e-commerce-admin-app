import { ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Badge, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Drawer, Grid, IconButton, Typography } from "@mui/material";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { productsInfo } from '../dummyData/Data';

const ItemsPage: NextPage = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [cartLists, setCartLists] = useState<any>([]);

  useEffect(() => {
    setPrice(cartLists.reduce((total: any, { salePrice }: any) => total + salePrice, 0));
  }, [cartLists]);

  const addToCart = (item: any) => { setCartLists([...cartLists, item]) };

  const removeFromCart = (index: any) => { setCartLists((cartList: any) => cartList.filter((_: any, i: any) => i !== index)) };

  const clearCart = () => setCartLists([]);

  return (
    <div className=" ">
      <div className="container h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">
            Welcome to User Product Page
          </h1>
        </div>

        <div className=" ">
          <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>

            <div className="w-50 text-left">
              <h3 className="text-4xl my-5 mx-5">Cart Lists: -</h3>
              {cartLists.map(({ image, salePrice, title }: any, index: any) => (
                <div
                  key={`${title}-${index}`}
                  // className="d-flex justify-content-between mb-3"
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', borderBottom: '1px solid lightblue', paddingBlock: '20px' }}
                >
                  <img alt={image} src={image} className=" h-12" />
                  <div className="d-flex mt-2 flex-column" style={{ width: '50%', alignItems: 'center' }}>
                    <h3>{title}</h3>
                    <h3 className="ml-auto price">₹{salePrice}</h3>
                  </div>
                  <IconButton onClick={() => removeFromCart(index)}>
                    <TrashIcon className="h-6 w-6 text-gray-500" />
                  </IconButton>

                </div>
              ))}


              {cartLists.length == 0 && <h2 className="text-3xl my-8 mx-5 text-red-600">No items in cart.  </h2>}

              <h3 className="text-3xl my-8 mx-5">
                Total ₹<span className="totalprice2">{price}</span>
              </h3>

              <div className="d-flex my-3 " >
                <Button onClick={clearCart} className="mx-5" size="small" variant="outlined" color="primary">
                  Clear Cart
                </Button>

                <Button size="small" variant="contained" sx={{ color: 'blueviolet' }}>
                  CheckOut
                </Button>
              </div>
            </div>

          </Drawer>

          <IconButton onClick={() => setCartOpen(true)} style={{
            position: 'fixed',
            zIndex: 100,
            right: '20px',
            top: '20px',
          }}>
            <Badge badgeContent={cartLists.length > 0 ? cartLists.length : null} color="error">
              <ShoppingCartIcon className="h-6 w-6 text-gray-500" />

            </Badge>
          </IconButton>


          <Grid container spacing={3} sx={{ overflowY: "scroll", maxHeight: "635px" }}>
            {productsInfo?.map((item) => (
              <Grid item key={item.id} xs={12} sm={4}>

                <Card raised
                  sx={{
                    maxWidth: 280,
                    // maxHeight: '90%',
                    margin: "0 auto",
                    padding: "0.1em",
                  }} >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="10"
                      image={item.image}
                      alt="card img"
                      sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}

                    />
                    <CardContent>
                      <Typography gutterBottom fontSize={25} component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{
                        display: 'block',
                        textOverflow: "ellipsis",
                        wordWrap: 'break-word',
                        overflow: 'hidden',
                        maxHeight: '9em',
                        lineHeight: '1.8em'

                      }}>
                        {item.description}
                      </Typography>


                      <Typography marginY={1.5} color='blue.600' variant="h6" fontWeight={'500'}>
                        ₹{item.salePrice}  <span style={{ color: 'red', fontWeight: '350' }}> + {item.tax}% Tax</span>
                      </Typography>

                      <Typography color='grey' fontSize={17}>
                        M.R.P: <span style={{ textDecoration: 'line-through' }}> ₹{item.price}</span>
                      </Typography>

                    </CardContent>
                  </CardActionArea>
                  <CardActions className="flex flex-col items-center gap-4" >
                    <Button size="small" variant="outlined" color="primary" onClick={() => addToCart(item)}>
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

        </div>

      </div>
    </div>
  );
};

export default ItemsPage;
