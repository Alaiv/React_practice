import TestRenderer, {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status={'hello there'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("hello there");
    });
    test("component should have span at start", () => {
        const component = create(<ProfileStatus status={'hello there'}/>);
        const root = component.root;
        const span = root.findByType('span')
        expect(span).not.toBeNull();
    });
    test("component shouldn't have input at start", () => {
        const component = create(<ProfileStatus status={'hello there'}/>);
        const root = component.root;
        expect(() => root.findByType('input')).toThrowError();
    });
    test("span text should be from props", () => {
        const component = create(<ProfileStatus status={'hello there'}/>);
        const root = component.root;
        const span = root.findByType('span')
        expect(span.props.children).toBe('hello there');
    });
    test("input should be in edit mode", () => {
        const component = create(<ProfileStatus status={'hello there'}/>);
        const root = component.root;
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input).not.toBeNull();
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'hello there'} updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.editModeDeActivate()
        expect(mockCallback).toBeCalled();
    });
})