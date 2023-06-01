import { useEffect, useState } from 'react';
import { IReddit, IRedditPostWithData } from '../Pages/TodoApp/interfaces';

function useFetch(url: string):IReddit {
    const [data, setData] = useState<Array<IRedditPostWithData> | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect((): void => {
        fetch(url)
            .then(response => response.json())
            .then((results: Array<IRedditPostWithData> | null) => {
                setIsLoading(false);
                setData(results);
            })
            .catch((error: JSON) => {
                setIsLoading(false);
                setErrorMessage('There was an error');
            });
    }, [url]);

    return { data, isLoading, errorMessage };
}

export default useFetch;
