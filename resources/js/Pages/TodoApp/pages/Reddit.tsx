import React from 'react';
import useFetch from '@/hooks/useFetch';
import { IReddit, IRedditPostWithData } from '../interfaces';

export default function Reddit(): React.JSX.Element {
    // const {
    //   data: posts,
    //   isLoading,
    //   errorMessage,
    // } = useFetch('https://www.reddit.com/r/aww.json');

    const {
        data: posts,
        isLoading,
        errorMessage,
    } = useFetch('https://www.reddit.com/r/aww.json');

    return (
        <div>
            <h2>Reddit API</h2>
            {isLoading && <div>Loading...</div>}
      {posts && (
                <ul>
                    {posts.data.children.map((post: IRedditPostWithData) => (
                        <li key={post.data.id}>
                            <a href={`https://reddit.com${post.data.permalink}`}>
                                {console.log(post.data) as unknown as string}
                                {post.data.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
      {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
}
