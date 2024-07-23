parasails.registerPage('change-password', {
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
    submittedForm: async function(result) {
      this.syncing = true;

      parasails.util.showToast(result.success.message, {
        title: 'WatchDogs',
        delay: 5000
      });

      setTimeout(() => {
        window.location = '/login';
      }, 5000);
      return {};
    },
    rejectedForm: async function(rejected) {
      this.syncing = false;

      parasails.util.showToast(rejected.responseInfo.body.message, {
        title: 'WatchDogs',
        delay: 10000
      });
    }
  }
});
