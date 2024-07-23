const assert = require("assert");
const controller = require('../../api/controllers/auth/change-password');
const { mockAsync, RESPONSE, USER } = require("../util/index");
describe("Change password", () => {
  it("Change password", async () => {
    const loginStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(loginStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    loginStub.restore();
  });
});