//configuring enzyme for our project
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

//configure enzyme for test
Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
});