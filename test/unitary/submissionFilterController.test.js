  const assert = require("assert");
  const controller = require('../../api/controllers/dashboard/submission-filter');
  const { mockAsync, RESPONSE, submissionField } = require("../util/index");
  describe("submission-filter", () => {
    it("Get submission with filter", async () => {
      const createStub = mockAsync(controller, "fn", submissionField);
      const result = await controller.fn({}, RESPONSE);
      assert.strictEqual(createStub.calledOnce, true);
      assert.deepStrictEqual(result, submissionField);
      createStub.restore();
    });
  });