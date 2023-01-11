import { MDXProvider } from '@mdx-js/react/lib';
import { marked } from 'marked';
import Button from './components/Button';
import { useEffect, useState } from 'react';
import { compile } from '@mdx-js/mdx';

const App = () => {
    const Mdx = `
    export const x = 10;
  ### titre
  ## autre titre
  {x}
  <Button/>
  `;

    const [jsx, setJsx] = useState('');

    useEffect(() => {
        const getData = async () => {
            // const html = marked.parse(content);
            const jsx = await compile(content);
            console.log(jsx);
            setJsx(String(jsx));
            // setJsx(html);
        };

        getData();
    }, []);

    const components = {
        Button: Button,
    };

    return (
        <MDXProvider components={components}>
            <Mdx />
        </MDXProvider>
    );
};

export default App;
