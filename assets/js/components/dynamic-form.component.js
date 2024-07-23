parasails.registerComponent("dynamic-form", {
  props: [
    'fields',
    'submission',
    'setprogress',
    'onfinish'
  ],
  data: function () {
    return {
      fieldIndex: 0,
      fieldList: [],
      dynamicFields: [],
      validForm: true,
      currentValue: null,
      dlqFields: [],
      contador: 0
    };
  },
  template: `
    <div class="col-12">
      <div 
        class="row justify-content-center flex-grow-0 mb-4" 
        v-for="(field, index) in dynamicFields" 
        :key="field.id">
        <field.component 
          :index="index"
          :fieldParams="field.params"
          :rejection="rejection"
          :getValidation="getValidation"
          :is="field.component"></field.component>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-12 col-sm-8 d-flex flex-row justify-content-between">
          <button
            class="btn btn-primary d-flex justify-content-center align-center"
            id="previousButton"
            @click="previousQuestion"
          >
            <span class="material-symbols-outlined"> keyboard_arrow_left </span>
          </button>
          <div>
            <button
              class="btn btn-primary d-flex justify-content-center items-center position-absolute"
              id="nextButton"
              @click="nextQuestion"
            >
              <div
                class="mx-1 d-flex flex-column align-center justify-content-center"
              >
                <span class="fw-lighter">Próximo</span>
              </div>
              <div
                class="ms-5 mx-1 d-flex flex-column align-center justify-content-center"
              >
                <span class="fw-lighter" style="font-size: 8px">Enter</span>
                <span
                  class="material-symbols-outlined fw-lighter"
                  style="font-size: 18px"
                >
                  keyboard_return
                </span>
              </div>
            </button>
            <button
              class="btn btn-primary d-flex justify-content-center items-center"
              id="finishButton"
              @click="finishForm"
            >
              <div
                class="mx-1 d-flex flex-column align-center justify-content-center"
              >
                <span class="fw-lighter">Finalizar</span>
              </div>
              <div
                class="ms-5 mx-1 d-flex flex-column align-center justify-content-center"
              >
                <span class="fw-lighter" style="font-size: 8px">Enter</span>
                <span
                  class="material-symbols-outlined fw-lighter"
                  style="font-size: 18px"
                >
                  keyboard_return
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  methods: {
    finishForm: async function () {
      const finishButton = document.querySelector('#finishButton');
      finishButton.setAttribute('disabled', true);

      const { isValid, value } = this.validateCurrentField();
      if( !isValid || !this.validForm ) return finishButton.removeAttribute('disabled');
      this.submitfield(value);

      this.dlqFields.forEach(async (field) => {
        await Cloud
          .submitField
          .with(field)
          .then((response) => {
          })
          .catch((error) => {
            console.error(error);
          });
      });

      const fieldValues = this.fieldList.map(field => ({ id: field.id, value: field.params.answer }));
      this.onfinish(fieldValues);
    },

    nextQuestion: async function (fn = this) {
      const { isValid, value, generatedSubQuestions } = await this.validateCurrentField();
      if( !isValid ) return;
      const conditionatedFields = this.fieldList.filter(field => !!field.conditionated);
      const totalOfConditionatedFields = conditionatedFields.length;

      if(!this.fieldList[this.fieldIndex].conditionated) {
        let cont = 0;
        this.fieldList = this.fieldList.filter(field => {
          return cont++ < this.fieldIndex || !field.conditionated
        })
      }

      if(!!generatedSubQuestions && generatedSubQuestions.length > 0) {
        let cont = 1;
        generatedSubQuestions.forEach(subQuestion => {
          const builder = DynamicFieldBuilder[subQuestion.typeQuestion];
          if(!builder) return;
          this.fieldList.splice(
            this.fieldIndex + cont, 
            0, 
            { ...builder(subQuestion), conditionated: true });
          cont++;
        });
      }
      const response = this.submitfield(value);

      if( !this.validForm || 
          (this.fieldList.length - 1 <= this.fieldIndex)) return;

      this.fieldIndex++;
      this.setprogress(((this.fieldIndex + 1) * 100 / this.fieldList.length) - 1);
      this.validateButtons();

      this.renderField();
    },

    previousQuestion: function () {
      if( !this.validForm ) return;
      this.fieldIndex--;      
      this.setprogress((this.fieldIndex + 1) * 100 / this.fieldList.length);
      this.renderField();
      this.validateButtons();
    },

    toggleButtonEnabled: function (buttonId, isEnabled) {
      const button = document.querySelector(buttonId);
      button.style.pointerEvents = isEnabled ? 'auto' : 'none';
      button.style.opacity = isEnabled ? 1 : 0;
    },

    renderField: function () {
      if( !this.validForm ) return;
      this.dynamicFields = [];
      const currentField = this.fieldList[this.fieldIndex];
      if( !currentField || !currentField.component ) {
        this.nextQuestion();
        // Log o erro para identificação
        return;
      }
      
      this.dynamicFields.push(currentField);
      // document.querySelector('#answer').focus();
    },

    submitfield: async function (value) {
      this.fieldList[this.fieldIndex].params.answer = value;
      const currentField = this.fieldList[this.fieldIndex].params;
      
      const response = await Cloud
        .submitField
        .with({ 
          submissionId: this.submission.id, 
          questionId: currentField.id, 
          answer: { value } 
        })
        .then((response) => {
          // parasails.util.showToast(response.description, {
          //   title: 'WatchDogs',
          //   delay: 2000
          // });
        })
        .catch((error) => {
          this.dlqFields.push({ 
            submissionId: this.submission.id, 
            questionId: currentField.id, 
            answer: { value } 
          });
        });

      return {
        wasSubmitted: true,
      };
    },

    validateButtons: function () {
      if (this.fieldIndex === 0) {
        this.toggleButtonEnabled("#previousButton", false);
      } else {
        this.toggleButtonEnabled("#previousButton", true);
      }

      if (this.fieldIndex >= this.fieldList.length - 1) {
        this.toggleButtonEnabled("#nextButton", false);
        this.toggleButtonEnabled("#finishButton", true);
      } else {
        this.toggleButtonEnabled("#nextButton", true);
        this.toggleButtonEnabled("#finishButton", false);
      }
    },

    // Callback responsável por capturar a valiação do campo
    getValidation: function (validation) {
      this.validateCurrentField = validation;
    },

    rejection: function () {
      this.validForm = false;
      parasails.util.showToast("Desculpe-nos! Mas esse formulário não está mais disponível.\nTente novamente mais tarde!", {
        title: 'WatchDogs',
        delay: 3000
      });
      setTimeout(() => {
        location.href = '/';
      }, 3000);
    }
  },

  beforeMount: function () {
    this.fieldList = this.fields.reduce((acc, field) => {
      const builder = DynamicFieldBuilder[field.typeQuestion];
      if(!builder) return acc;
      
      const mappedField = builder(field);
      if (!mappedField) return acc;
      acc.push({
        // ...field,
        ...mappedField
      });
      return acc;
    }, []);
  },

  mounted: function () {
    this.validateButtons();
    this.setprogress((this.fieldIndex + 1) * 100 / this.fieldList.length);
    // Renderiza o primeiro campo
    this.renderField();
  },
});

const DynamicFieldBuilder = {
  'text': (params) => {
    return {
      ...params,
      component: 'dynamic-input',
      params: {
        ...params,
        answer: params.answer || null
      }
    };
  },
  'select': (params) => {
    return {
      ...params,
      component: 'dynamic-select',
      params: {
        ...params,
        options: [
          { value: '', label: 'Selecione uma opção' },
          ...params
              .options
              .map(option => ({ value: option.id, label: option.option }))
        ],
        answer: params.answer || null
      }
    };
  }
};