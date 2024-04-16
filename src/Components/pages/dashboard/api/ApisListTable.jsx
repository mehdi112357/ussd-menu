import React from 'react';
import {Table} from 'antd';
import {LiaUserEditSolid} from "react-icons/lia";
import {AiOutlineDelete} from "react-icons/ai";



const ApiListTable = () => {

    const columns = [
        {
            title: '',
            dataIndex: 'icon',
            key: 'icon',
            render: (item) => (
                <div className='bg-green-500 w-9 h-9 rounded-full flex
            items-center justify-center text-white font-semibold'>{item.substring(0, 1)}</div>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email address',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '',
            key: 'action',
            render: (item) => (
                <div className='flex justify-end'>
                    <LiaUserEditSolid
                        className='text-[22px] text-gray-600 cursor-pointer hover:text-green-600
                        duration-300 mx-3'
                        onClick={() => {
                            // setDialog({...dialog, edit: true});
                            // setSelectedItem(item)
                        }}/>
                    <AiOutlineDelete className='text-[20px] text-gray-600 cursor-pointer
                    hover:text-red-600 duration-300'
                        // onClick={() => setDialog({...dialog, delete: true})}
                    />
                </div>
            ),
        },
    ];
    const data = [
        {
            key: 1,
            icon: 'John Brown',
            name: 'John Brown',
            email: 'john_brown@gmail.com',
            role: 'Super admin',
            action: 0
        },
        {
            key: 2,
            icon: 'Tommy Green',
            name: 'Tommy Green',
            email: 'tommygreen2023@hotmail.com',
            role: 'User',
            action: 1
        },
        {
            key: 3,
            icon: 'Edward Black',
            name: 'Edward Black',
            email: 'edwardBlack_wooden@yahoo.com',
            role: 'Admin',
            action: 2
        },
    ];

    return (
        <Table
            className='w-full'
            columns={columns} dataSource={data}/>
    )
}

export default ApiListTable;