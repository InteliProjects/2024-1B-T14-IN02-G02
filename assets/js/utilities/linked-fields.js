parasails.registerUtility('generateDynamicFields', function generateLinkedFields(fields) {
  return fields.reduce((acc, field) => {
    const template = mappedFields[field.typeQuestion];
    if (!template) return acc;
    field['template'] = fillTemplate(template, field);
    acc.push(field);
    return acc;
  }, []);
});

function fillTemplate(template, field) {
  return template.replace(/{{(\w+)}}/g, (match, p1) => {
    if (p1 === 'options' && Array.isArray(field.options)) {
      return field.options.map(option => `<option value="${option.id}">${option.option}</option>`).join('');
    }
    return field[p1] || '';
  });
}

const mappedFields = {
  text: `
    <div class="col-12 col-sm-8">
      <h2 class="text-center">{{question}}</h2>
      <br />
      <div class="mx-auto">
        <div class="row">
          <div class="form-group">
            <label for="answer" class="form-label">{{label}}</label>
            <input
              class="form-control wd-form-control"
              id="answer"
              name="answer"
              type="text"
              placeholder="{{placeholder}}"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="row">
          <p class="text-end">
            <small>{{char}}</small>
          </p>
        </div>
      </div>
    </div>`,
  textArea: `
    <div class="col-12 col-sm-8">
      <h2 class="text-center">{{question}}</h2>
      <br />
      <div class="mx-auto">
        <div class="row">
          <div class="form-group">
            <textarea
              class="form-control wd-form-control"
              id="answer"
              name="answer"
              type="text"
              placeholder+="{{placeholder}}"
              autocomplete="off"
              rows="8"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <p class="text-end">
            <small>{{char}}</small>
          </p>
        </div>
      </div>
    </div>`,
  select: `
    <div class="col-12 col-sm-8">
      <h2 class="text-center">{{question}}</h2>
      <br />
      <div class="mx-auto">
        <div class="row">
          <div class="form-group">
            <select
              class="form-select wd-form-control"
              id="answer"
              name="answer"
              type="text"
              placeholder="{{placeholder}}"
              autocomplete="off"
            >
              <option value="0">Selecione uma opção</option>
              {{options}}
            </select>
          </div>
        </div>
      </div>
    </div>`,
};