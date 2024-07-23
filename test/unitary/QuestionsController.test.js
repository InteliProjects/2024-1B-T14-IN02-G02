const assert = require("assert");
const controller = require('../../api/controllers/questions/QuestionsController');
const { mockAsync, RESPONSE, question } = require("../util/index");
describe("Forms Controller", () => {
  it("Create forms", async () => {
    const createStub = mockAsync(controller, "create", question);
    const result = await controller.create({}, RESPONSE);
    assert.strictEqual(createStub.calledOnce, true);
    assert.deepStrictEqual(result, question);
    createStub.restore();
  });

  it("Find forms", async () => {
    const findStub = mockAsync(controller, "find", question);
    const result = await controller.find({}, RESPONSE);
    assert.strictEqual(findStub.calledOnce, true);
    assert.deepStrictEqual(result, question);
    findStub.restore();
  });

  it("findOne forms", async () => {
    const findOneStub = mockAsync(controller, "findOne", question);
    const result = await controller.findOne({}, RESPONSE);
    assert.strictEqual(findOneStub.calledOnce, true);
    assert.deepStrictEqual(result, question);
    findOneStub.restore();
  });

  it("findFormFields forms", async () => {
    const findFormFieldsStub = mockAsync(controller, "findFormFields", question);
    const result = await controller.findFormFields({}, RESPONSE);
    assert.strictEqual(findFormFieldsStub.calledOnce, true);
    assert.deepStrictEqual(result, question );
    findFormFieldsStub.restore();
  });
});