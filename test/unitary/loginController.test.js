const assert = require("assert");
const controller = require('../../api/controllers/auth/login');
const { mockAsync, RESPONSE, USER } = require("../util/index");
describe("login", () => {
  it("Login", async () => {
    const loginStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(loginStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    loginStub.restore();
  });
});