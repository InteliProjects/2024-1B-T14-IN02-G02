parasails.registerPage('form', {
  data: {
    progress: {
      style: "width: 0%; border-radius: 0px;"
    },
    loading: true,
    finished: false,
  },
  beforeMount: async function() {
    //…
    this.submission = await this.getSubmission();
    if(this.submission) await this.injectFieldAnswer(); 
    this.loading = false;
  },
  mounted: async function() {
    //…
  },
  methods: {
    injectFieldAnswer: async function () {
      return this.fields = await this.fields.map(field => {
        const submissionField = this.submission.fields.find(submissionField => submissionField.idQuestion === field.id);
        if(submissionField) field.answer = submissionField.value.value;
        return field;
      });
    },

    getSubmission: async function () {
      return new Promise(async (resolve, reject) => {
        await Cloud
          .getValidSubmission
          .with({ idForm: this.form.id })
          .then((response) => resolve(response.data))
          .catch((error) => resolve(null))
      });
    },

    setProgress: function (percentage) {
      this.progress.style = `width: ${percentage}%; border-radius: 0px;`;
    },

    onFinish: async function (values) {
      await Cloud
        .finishSubmission
        .with({ idForm: this.form.id })
        .then((response) => {
          console.log(response.data.status);
          if(response.data.status === 'finished') {
            this.finished = true;
            this.submission = null;
            this.loading = false;
          }
        })
        .catch((error) => console.error(error));
    },

    startSubmission: async function () {
      await Cloud
        .createSubmission
        .with({ 
          idForm: this.form.id
        })
        .then((response) => {
          this.submission = response.data;
        });
    }
  }
});
