// >>>>>>>>>>> Input Text Component <<<<<<<<<<
parasails.registerComponent("dynamic-input", {
  props: [
    'fieldParams',
    'rejection',
    'index',
    'getValidation'
  ],
  data: function () {
    return {
      expectedBind: {
        question: this.fieldParams.question, 
        label: this.fieldParams.label,
        placeholder: this.fieldParams.placeholder
      },
      answer: null
    };
  },
  template: `
    <div class="col-12 col-sm-8">
      <h2 class="text-start">{{expectedBind.question}}</h2>
      <br />
      <div class="mx-auto">
        <div class="row">
          <label for="answer" class="text-start">{{expectedBind.label}}</label>
          <div class="wd-input-background">
            <input
              class="form-control wd-form-control"
              id="answer"
              name="answer"
              type="text"
              :value="answer"
              :placeholder="expectedBind.placeholder"
              autocomplete="off"
              @input="oninput"
            />
            <div class="wd-input-underline"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  methods: {
    validate: function () {
      const input = document.getElementById('answer');
      if (!input.value) {
        input.parentElement.classList.add('is-invalid');
        return {
          isValid: false,
          value: input.value
        };
      }

      return {
        isValid: true,
        value: input.value
      };
    },
    oninput: function () {
      const input = document.getElementById('answer');
      input.parentElement.classList.remove('is-invalid');
    }
  },
  beforeMount: function () {
    // expetedBind should be populated with the fieldParams else throw error
    Object.keys(this.expectedBind).forEach(key => {
      if (!this.expectedBind[key]) {
        console.error(`Field parameter '${key}' is required`);
        this.rejection();
      }
    }); 

    if(this.fieldParams.answer) this.answer = this.fieldParams.answer;

    this.getValidation(this.validate);
  },
  mounted: function () {
    document.querySelector('#answer').focus();
  },
});

// >>>>>>>>>>>>>>>>> SELECT COMPONENT <<<<<<<<<<<<<<<<<<<<
parasails.registerComponent("dynamic-select", {
  props: [
    'fieldParams',
    'rejection',
    'index',
    'getValidation'
  ],
  data: function () {
    return {
      expectedBind: {
        question: this.fieldParams.question, 
        label: this.fieldParams.label,
        placeholder: this.fieldParams.placeholder,
        options: this.fieldParams.options
      },
      answer: null,
      concatenatedSubQuestions: []
    };
  },
  template: `
    <div class="col-12 col-sm-8">
      <h2 class="text-start">{{expectedBind.question}}</h2>
      <br />
      <div class="mx-auto">
          <div class="row"> 
            <label for="answer" class="text-start">{{expectedBind.label}}</label>
            <div class="wd-input-background">
            <select
              class="form-control wd-form-control"
              id="answer"
              name="answer"
              type="text"
              :placeholder="expectedBind.placeholder"
              autocomplete="off"
              @input="oninput"
            >
              <option v-for="option in expectedBind.options" :selected="option.selected" :value="option.value">{{option.label}}</option>
            </select>
            <div class="wd-input-underline"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  methods: {
    validate: function () {
      const input = document.getElementById('answer');
      let newSubQuestions = [];
      if (!input.value) {
        input.parentElement.classList.add('is-invalid');
        return {
          isValid: false,
          value: input.value
        };
      }

      if(this.concatenatedSubQuestions && this.concatenatedSubQuestions.length > 0) {
        newSubQuestions = this.concatenatedSubQuestions.reduce((acc, current) => {
          if(current.condition && current.condition.value == input.value) acc.push(current)
          return acc;
        }, []);
      }

      return {
        isValid: true,
        value: input.value,
        generatedSubQuestions: newSubQuestions
      };
    },
    oninput: function () {
      const input = document.getElementById('answer');
      input.parentElement.classList.remove('is-invalid');
    }
  },
  beforeMount: function () {
    // expetedBind should be populated with the fieldParams else throw error
    Object.keys(this.expectedBind).forEach(async key => {
      if (!this.expectedBind[key]) {
        console.error(`Field parameter '${key}' is required`);
        await this.rejection();
      }
    });

    this.expectedBind.options = this.expectedBind.options.reduce((acc, option) => {
      option['selected'] = (
        this.fieldParams.answer && 
        option.value == this.fieldParams.answer
      );

      acc.push(option);
      return acc;
    }, []);

    this.concatenatedSubQuestions = this.fieldParams['concatenatedsubquestions'];

    console.log("Resposta anterior: ", this.fieldParams.answer);
       
    this.getValidation(this.validate);
  },
  mounted: function () { 
    document.querySelector('#answer').focus();
  },
});