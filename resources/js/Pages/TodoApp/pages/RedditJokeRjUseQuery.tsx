import Reddit from './RedditUseQuery';
import Joke from './JokeUseQuery';
import { useState } from 'react';
import RedditUseQuery from "./RedditUseQuery";
import JokeUseQuery from "./JokeUseQuery";

function RedditJokeUseQuery(): React.JSX.Element {
    const [redditVisible, setRedditVisible] = useState<boolean>(false);
    const [jokeVisible, setJokeVisible] = useState<boolean>(false);

    return (
        <div>
            <div className="buttons">
                <button
                    onClick={() => setRedditVisible(() => !redditVisible)}
                >
                    Toggle Reddit
                </button>
                <button onClick={() => setJokeVisible(() => !jokeVisible)}>
                    Toggle Joke
                </button>
            </div>
            {redditVisible && <RedditUseQuery />}
            {jokeVisible && <JokeUseQuery />}
        </div>
    );
}

export default RedditJokeUseQuery;
