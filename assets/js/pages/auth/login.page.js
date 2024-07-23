parasails.registerPage('login', {
  data: {
    //…
  },
  beforeMount: function() {
    //…
  },
  mounted: async function() {
    //…
  },
  methods: {
    submittedForm: async function() {
      this.syncing = true;
      window.location = '/dashboard';
    },
    rejectedForm: async function(rejected) {
      this.syncing = false;
      console.log(rejected.responseInfo.body.message)

      parasails.util.showToast(rejected.responseInfo.body.message, {
        title: 'Erro no login',
        delay: 10000
      });
    }
  }
});
