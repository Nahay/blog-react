import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

const Playground = ({ children }) => {
    console.log(children);
    return (
        <LiveProvider code={children}>
            <LiveEditor />
            <LiveError />
            <LivePreview />
        </LiveProvider>
    );
};

export default Playground;
