import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { customersTableInfo } from 'dummyData/Data';
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

export default function CustomersListPage() {

    const [customersTableData, setCustomersTableData] = useState<any>(customersTableInfo);
    const [customerModalInputInfo, setCustomerModalInputInfo] = useState<any>({});
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {setOpen(false), setCustomerModalInputInfo({})};

    const addCustomerToList = () => {
        const dataSet = {
            "id": customersTableData.length + 1,
            "name": customerModalInputInfo.name,
        "profileImg": customerModalInputInfo.profileImg,
            "email": customerModalInputInfo.email,
            "joinedDate": customerModalInputInfo.joinedDate,
            "role": customerModalInputInfo.role,
        };
        setCustomersTableData([...customersTableData, dataSet])
        setCustomerModalInputInfo({})
        setOpen(false)
    };


    return (
        <>
            {/* <!-- component --> */}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingInline: '10px' }}>
                <div>

                    <h6 className="text-4xl my-8">
                        Customers List :-
                    </h6>
                </div>
                <button onClick={handleOpen} className="bg-indigo-500 h-12 mt-7 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                    Add Customer
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
                                <span className="text-gray-300">Name</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Email</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Joined Date</span>
                            </th>

                            <th className="px-16 py-2">
                                <span className="text-gray-300">Role</span>
                            </th>

                            <th className="px-16 py-2">
                                <span className="text-gray-300">Status</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {customersTableData?.map((item:any) => (
                            <tr key={item.id} className="bg-white border-4 border-gray-200">
                                <td className="px-16 py-2 flex flex-row items-center">
                                    <img
                                        className="h-12 w-12 rounded-full object-cover "
                                        src={item.profileImg}
                                        alt=""
                                    />
                                </td>
                                <td>
                                    <span className="text-center ml-2 font-semibold">{item.name}</span>
                                </td>
                                <td className="px-16 py-2">
                                    <span>{item.email}</span>
                                </td>
                                <td className="px-16 py-2">
                                    <span>{item.joinedDate}</span>
                                </td>
                                <td className="px-16 py-2">
                                    <span>{item.role}</span>
                                </td>

                                <td className="px-16 py-2">
                                    <span className="text-green-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h5 "
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="#2c3e50"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </span>
                                </td>
                            </tr>
                        ))}
                        
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
                        Add Customer
                    </Typography>
                    <form>
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="text"
                            label="Name"
                            variant="outlined"
                            value={customerModalInputInfo.name}
                            onChange={(e) => setCustomerModalInputInfo((prev: any) => { return { ...prev, name: e.target.value } })}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="text"
                            label="Enter Profile Img Link"
                            variant="outlined"
                            value={customerModalInputInfo.profileImg}
                            onChange={(e) => setCustomerModalInputInfo((prev: any) => { return { ...prev, profileImg: e.target.value } })}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="text"
                            label="Email"
                            variant="outlined"
                            value={customerModalInputInfo.email}
                            onChange={(e) => setCustomerModalInputInfo((prev: any) => { return { ...prev, email: e.target.value } })}
                        />
                        <br />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="text"
                            label="Joined Date"
                            variant="outlined"
                            value={customerModalInputInfo.joinedDate}
                            onChange={(e) => setCustomerModalInputInfo((prev: any) => { return { ...prev, joinedDate: e.target.value } })}
                        />
                        <br />

                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="text"
                            label="Role"
                            variant="outlined"
                            value={customerModalInputInfo.role}
                            onChange={(e) => setCustomerModalInputInfo((prev: any) => { return { ...prev, role: e.target.value } })}
                        />

                        {/* <br />
                        <Button variant="contained" color="primary">
                            save
                        </Button> */}
                    </form>

                    <Button variant="contained" sx={{ color: 'red', marginTop: '10px' }} onClick={() => addCustomerToList()}>
                        save
                    </Button>
                </Box>
            </Modal>
        </>
    )
}
