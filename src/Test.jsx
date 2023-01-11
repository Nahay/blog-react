import { marked } from 'marked';
import { useEffect } from 'react';

const App = () => {
    const mdx = `
  ### titre
  ## autre titre
  `;

    useEffect(() => {
        const html = marked.parse(mdx);
        document.querySelector('#test').innerHTML = html;
    }, []);

    // return <div dangerouslySetInnerHTML={marked.parse(mdx)}></div>;
    return <div id='test'></div>;
};

export default App;
