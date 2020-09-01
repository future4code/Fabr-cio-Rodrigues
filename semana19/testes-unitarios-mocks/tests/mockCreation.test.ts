
describe("Testing my mock creation capabilities", () => {
    test("Mock in case of success", () => {
        const validatorMock = jest.fn(() => {
                return true
            });
    });

    test("Mock in case of failure", () => {
        const validatorMock = jest.fn(() => {
                return false
            });
    });

})