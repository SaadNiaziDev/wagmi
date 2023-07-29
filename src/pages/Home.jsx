import { Table } from 'antd'
import React from 'react'
import { useFetchHook } from '../hooks/useFetchHook'
import DataTable from 'react-data-table-component';

const Home = () => {
    const { data, isLoading } = useFetchHook( 'https://jsonplaceholder.typicode.com/todos' )
    const columns = [
        {
            name: 'userId',
            selector: ( row ) => row?.userId
        }, {
            name: 'ID',
            selector: ( row ) => row?.id
        }, {
            name: 'Title',
            selector: ( row ) => row?.title
        }, {
            name: 'Completed',
            selector: ( row ) => row?.completed
        }
    ];
    console.log( data, isLoading )
    return (
        <DataTable theme={'dark'} title={'FakeData'} data={data} columns={columns} dense={true} highlightOnHover progressPending={isLoading} />
    )
}

export default Home