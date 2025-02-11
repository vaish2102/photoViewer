import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import {ImageSelector} from './PhotoViewer/ImageSelector.tsx';
import renderer from 'react-test-renderer';


describe("App Component", () => {

    test('Check First Photo', () => {
        const {getByAltText} = render(<App />);
        const firstImgUrl = "https://picsum.photos/id/600/1600/900.jpg" ;
        const imgElem = getByAltText(firstImgUrl);
        expect(imgElem).toBeInTheDocument();
    });

    test('no broken images', () => {
        const {queryByAltText} = render(<App />);
        const BrokenUrl = "https://picsum.photos/id/601/1600/900.jpg" ;
        const imgElem = queryByAltText(BrokenUrl);
        expect(imgElem).toBe(null);
    });

    //Snapshot testing
    test("Should match snapshot", async () => {
        /*render(<App />);
        const {asFragment} = render(<App/>);
        console.log(asFragment);
        expect(asFragment()).toMatchSnapshot();*/
        const tree = renderer.create(<App/>).toJSON();
        console.log(tree);
        expect(tree).toMatchSnapshot()
    });
});

