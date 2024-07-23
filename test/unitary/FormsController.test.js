const assert = require("assert");
const controller = require('../../api/controllers/forms/FormsController');
const { mockAsync, RESPONSE, forms } = require("../util/index");
describe("Forms Controller", () => {
  it("Create forms", async () => {
    const createStub = mockAsync(controller, "create", forms);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, forms);
    createStub.restore();
  });

  it("Find forms", async () => {
    const findStub = mockAsync(controller, "find", forms);
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, forms);
    findStub.restore();
  });

  it("findOne forms", async () => {
    const findOneStub = mockAsync(controller, "findOne", forms);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, forms);
    findOneStub.restore();
  });
});