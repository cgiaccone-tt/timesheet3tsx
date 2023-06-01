import React from 'react';
import { useQuery } from 'react-query';
import { IRedditUseQuery } from '../interfaces';

export default function RedditUseQuery(): React.JSX.Element {
    // const {
    //   data: posts,
    //   isLoading,
    //   errorMessage,
    // } = useFetch('https://www.reddit.com/r/aww.json');

    const {
        data: posts,
        isLoading,
        isError,
        error,
        isSuccess,
    } = useQuery<IRedditUseQuery>('posts', fetchPosts, {
        retry: false,
    });

  function fetchPosts(): Promise<IRedditUseQuery> {
    return fetch('https://www.reddit.com/r/aww.json').then((response: any) =>
      response.json()
    );
  }

    return (
        <div>
            <h2>Reddit API</h2>
            {isLoading && <div>Loading...</div>}
      {isSuccess && null != posts.data && (
                <ul>
                    {posts.data.children.map((post: {
                        data: {
                          id: React.Key | null | undefined; permalink: any; title: string | number | boolean | React.ReactElement<any, string | React // const {
                            .
                            //   data: posts,
                            //   isLoading,
                            //   errorMessage,
                            // } = useFetch('https://www.reddit.com/r/aww.json');
                            JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
                        };
                      }) => (
                        <li key={post.data.id}>
                            <a href={`https://reddit.com${post.data.permalink}`}>
                                {post.data.title}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
      {isError && <div>{error.message}</div>}
        </div>
    );
}
