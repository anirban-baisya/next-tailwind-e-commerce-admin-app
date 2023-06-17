import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { productsInfo } from 'dummyData/Data';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ProductListPage() {

    const [productTableData, setProductTableData] = useState<any>(productsInfo);
    const [productModalInputInfo, setProductModalInputInfo] = useState<any>({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false) ,setProductModalInputInfo({})};

    const addProductToList = () => {
        const dataSet = {
            "id": productTableData.length + 1,
            "title": productModalInputInfo.title,
            "salePrice": productModalInputInfo.salePrice,
            "tax": productModalInputInfo.tax,
            "price": productModalInputInfo.price,
            "description": productModalInputInfo.description,
            "category": "electronics",
            "image": productModalInputInfo.image,

        };
        setProductTableData([...productTableData, dataSet])
        setProductModalInputInfo({})
        setOpen(false)
    };


    return (
        <>
            {/* <!-- component --> */}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingInline: '10px' }}>
                <div>

                    <h6 className="text-4xl my-8">
                        Product List :-
                    </h6>
                </div>
                <button onClick={handleOpen} className="bg-indigo-500 h-12 mt-7 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                    Add Product
                </button>
               
            </div>
            <div>

                <table className="min-w-full table-auto mt-8">
                    <thead className="justify-between">
                        <tr className="bg-gray-800">
                            <th className="px-16 py-2">
                                <span className="text-gray-300"></span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Title</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Sale Price</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Price</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Tax</span>
                            </th>

                            <th className="px-16 py-2">
                                <span className="text-gray-300">Description</span>
                            </th>

                            <th className="px-16 py-2">
                                <span className="text-gray-300">Category</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {productTableData?.map((item: any) => (
                            <tr key={item.id} className="bg-white border-4 border-gray-200">
                                <td className="px-4 ">
                                    <img
                                        className="m:h-[100px] m:w-[160px] object-fit "
                                        src={item.image}
                                        alt=""
                                    />
                                </td>
                                <td>
                                    <span className="text-center ml-2 font-semibold">{item.title}</span>
                                </td>
                                <td className="px-16 py-2">
                                    <span>{item.salePrice}</span>
                                </td>
                                <td className="px-16 py-2">
                                    <span>{item.tax}</span>
                                </td>
                                <td className="px-16 py-2">
                                    <span>{item.price}</span>
                                </td>
                                <td className="px-16 py-2">
                                    <span>{item.description}</span>
                                </td>
                                <td className="px-16 py-2">
                                    <span>{item.category}</span>
                                </td>


                            </tr>
                        ))}
                        {/* <tr className="bg-white border-4 border-gray-200">
                            <td className="px-16 py-2 flex flex-row items-center">
                                <img
                                    className="h-8 w-8 rounded-full object-cover "
                                    src="https://randomuser.me/api/portraits/men/76.jpg"
                                    alt=""
                                />
                            </td>
                            <td>
                                <span className="text-center ml-2 font-semibold">Ralph Barnes</span>
                            </td>
                            <td className="px-16 py-2">
                                <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                                    Open Link
                                </button>
                            </td>
                            <td className="px-16 py-2">
                                <span>05/06/2020</span>
                            </td>
                            <td className="px-16 py-2">
                                <span>12:15</span>
                            </td>

                            <td className="px-16 py-2">
                                <span className="text-yellow-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx="12" cy="12" r="9" />
                                        <polyline points="12 7 12 12 15 15" />
                                    </svg>
                                </span>
                            </td>
                        </tr> */}
                        
                    </tbody>
                </table>
            </div>



            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Product
                    </Typography>
                    <form>
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="text"
                            label="Product Title"
                            variant="outlined"
                            value={productModalInputInfo.title}
                            onChange={(e) => setProductModalInputInfo((prev: any) => { return { ...prev, title: e.target.value } })}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="text"
                            label="Enter Product Img Link"
                            variant="outlined"
                            value={productModalInputInfo.image}
                            onChange={(e) => setProductModalInputInfo((prev: any) => { return { ...prev, image: e.target.value } })}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="number"
                            label="Sale Price"
                            variant="outlined"
                            value={productModalInputInfo.salePrice}
                            onChange={(e) => setProductModalInputInfo((prev: any) => { return { ...prev, salePrice: e.target.value } })}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="number"
                            label="Tax"
                            variant="outlined"
                            value={productModalInputInfo.tax}
                            onChange={(e) => setProductModalInputInfo((prev: any) => { return { ...prev, tax: e.target.value } })}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="number"
                            label="Product M.R.P"
                            variant="outlined"
                            value={productModalInputInfo.price}
                            onChange={(e) => setProductModalInputInfo((prev: any) => { return { ...prev, price: e.target.value } })}
                        />
                        <br />

                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="text"
                            label="Description"
                            variant="outlined"
                            value={productModalInputInfo.description}
                            onChange={(e) => setProductModalInputInfo((prev: any) => { return { ...prev, description: e.target.value } })}
                        />

                        {/* <br />
                        <Button variant="contained" color="primary">
                            save
                        </Button> */}
                    </form>

                    <Button variant="contained" sx={{ color: 'red', marginTop: '10px' }} onClick={() => addProductToList()}>
                        save
                    </Button>
                </Box>
            </Modal>
        </>
    )
}
