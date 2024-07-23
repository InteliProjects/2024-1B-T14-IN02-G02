const assert = require("assert");
const controller = require('../../api/controllers/adm/delete-adm');
const { mockAsync, RESPONSE, USER } = require("../util/index");
describe("delete-adm", () => {
  it("Delete user adm", async () => {
    const createStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    createStub.restore();
  });
});