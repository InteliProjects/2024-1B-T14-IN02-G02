const assert = require("assert");
const sinon = require("sinon");
const controller = require("../../api/controllers/dashboard/export-data");
const { mockAsync, RESPONSE, submission } = require("../util/index");

describe("export-data", () => {
  it("Filter forms data", async () => {
    // Stub da função 'fn' do controlador
    const createStub = mockAsync(controller, "fn", {
      csvUrl: 'blob:http://localhost:1337/abc123',
      jsonUrl: 'blob:http://localhost:1337/def456'
    });

    // Chama a função 'fn' do controlador
    const result = await controller.fn({ inputData: { selectedData: { rows: [submission] } } }, RESPONSE);

    // Verifica se o stub foi chamado uma vez
    assert.strictEqual(createStub.calledOnce, true);

    // Verifica se o resultado é igual ao esperado
    assert.deepStrictEqual(result, {
      csvUrl: 'blob:http://localhost:1337/abc123',
      jsonUrl: 'blob:http://localhost:1337/def456'
    });

    // Restaura o stub
    createStub.restore();
  });
});
