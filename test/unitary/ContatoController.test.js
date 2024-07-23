const assert = require("assert");
const controller = require('../../api/controllers/contato/ContatoController');
const { mockAsync, RESPONSE, contact } = require("../util/index");
describe("Contato Controller", () => {
  it("Create contato", async () => {
    const createStub = mockAsync(controller, "create", contact);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, contact);
    createStub.restore();
  });

  it("Find contato", async () => {
    const findStub = mockAsync(controller, "find", contact);
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, contact);
    findStub.restore();
  });

  it("findOne forms", async () => {
    const findOneStub = mockAsync(controller, "findOne", contact);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, contact);
    findOneStub.restore();
  });
});