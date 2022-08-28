import TestRenderer, {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status={'hello there'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("hello there");
    });
})