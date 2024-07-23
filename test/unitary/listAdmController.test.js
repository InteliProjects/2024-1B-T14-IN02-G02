const assert = require("assert");
const controller = require('../../api/controllers/adm/list-adm');
const { mockAsync, RESPONSE, USER } = require("../util/index");
describe("list-adm", () => {
  it("List users adm", async () => {
    const createStub = mockAsync(controller, "fn", USER);
    const result = await controller.fn({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, USER);
    createStub.restore();
  });
});