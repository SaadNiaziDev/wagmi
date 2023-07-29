import React, { useEffect, useState } from 'react'

export const useFetchHook = ( url ) => {
    const [ data, setData ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( false );
    const getData = async () => {
        setIsLoading( true );
        const response = await fetch( url );
        const data = await response.json();
        setData( data );
        setIsLoading( false );
    }
    useEffect( () => {
        getData()
    }, [] )

    return { data, isLoading }

}
