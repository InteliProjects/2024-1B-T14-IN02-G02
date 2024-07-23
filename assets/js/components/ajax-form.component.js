parasails.registerComponent('ajaxForm', {
  props: [
    'syncing',
    'cloudError',
    'action',
    'formErrors',
    'formData',
    'formRules',
    'handleSubmitting',
    'handleParsing',
  ],
  data: function (){
    return {
      //…
    };
  },
  template: `
    <form class="ajax-form" @submit.prevent="submit()" @keydown.meta.enter="keydownMetaEnter()">
      <slot name="default"></slot>
    </form>
  `,
  beforeMount: function() {
    //…
  },
  mounted: async function (){
    if (this.action === undefined && this.handleSubmitting === undefined) {
      throw new Error('Neither `:action` nor `:handle-submitting` was passed in to <ajax-form>, but one or the other must be provided.');
    } else if (this.action !== undefined && this.handleSubmitting !== undefined) {
      throw new Error('Both `:action` AND `:handle-submitting` were passed in to <ajax-form>, but only one or the other should be provided.');
    } else if (this.action !== undefined && (!_.isString(this.action) || !_.isFunction(Cloud[_.camelCase(this.action)]))) {
      throw new Error('Invalid `action` in <ajax-form>.  `action` should be the name of a method on the `Cloud` global.  For example: `action="login"` would make this form communicate using `Cloud.login()`, which corresponds to the "login" action on the server.');
    } else if (this.action !== undefined && !_.isFunction(Cloud[this.action])) {
      throw new Error('Unrecognized `action` in <ajax-form>.  Did you mean to type `action="'+_.camelCase(this.action)+'"`?  (<ajax-form> expects `action` to be provided in camelCase format.  In other words, to reference the action at "api/controllers/foo/bar/do-something", use `action="doSomething"`.)');
    } else if (this.handleSubmitting !== undefined && !_.isFunction(this.handleSubmitting)) {
      throw new Error('Invalid `:handle-submitting` function passed to <ajax-form>.  (Any chance you forgot the ":" in front of the prop name?)  For example: `:handle-submitting="handleSubmittingSomeForm"`.  This function should be an `async function`, and it should either throw a special exit signal or return response data from the server.  (If this custom `handleSubmitting` will be doing something more complex than a single request to a server, feel free to return whatever amalgamation of data you wish.)');
    }

    if (this.handleParsing === undefined && this.formData === undefined) {
      throw new Error('Neither `:form-data` nor `:handle-parsing` was passed in to <ajax-form>, but one or the other must be provided.');
    } else if (this.handleParsing !== undefined && this.formData !== undefined) {
      throw new Error('Both `:form-data` AND `:handle-parsing` were passed in to <ajax-form>, but only one or the other should be provided.');
    } else if (this.handleParsing !== undefined && !_.isFunction(this.handleParsing)) {
      throw new Error('Invalid `:handle-parsing` function passed to <ajax-form>.  (Any chance you forgot the ":" in front of the prop name?)  For example: `:handle-parsing="handleParsingSomeForm"`.  This function should return a dictionary (plain JavaScript object like `{}`) of parsed form data, ready to be sent in a request to the server.');
    } else if (this.formData !== undefined && (!_.isObject(this.formData) || _.isFunction(this.formData) || _.isArray(this.formData))) {
      throw new Error('Invalid `:form-data` passed to <ajax-form>.  (Any chance you forgot the ":" in front of the prop name?)  For example: `:form-data="someFormData"`.  This should reference a dictionary (plain JavaScript object like `{}`).  Specifically, `:form-data` should only be used in the case where the raw data from the form in the user interface happens to correspond **EXACTLY** with the names and format of the argins that should be sent in a request to the server.  (For more nuanced behavior, use `handle-parsing` instead!)');
    }

    if (!this.formData && (this.formRules || this.formErrors)) {
      throw new Error('If `:form-rules` or `:form-errors.sync` are in use, then `:form-data` must also be passed in.  (If the AJAX request doesn\'t need form data, then use an empty dictionary, i.e. `:form-data="{}"`.)');
    } else if (this.formRules && !this.formErrors) {
      throw new Error('If `:form-rules` are provided, then `:form-errors.sync` must also be passed in.');
    }

    if (this.formRules) {
      var SUPPORTED_RULES = [
        'required', 'isEmail', 'isIn', 'is', 'minLength', 'maxLength',
        'sameAs', 'isHalfwayDecentPassword', 'custom'
      ];
      for (let fieldName in this.formRules) {
        for (let ruleName in this.formRules[fieldName]) {
          if (_.contains(SUPPORTED_RULES, ruleName)) {
            // OK.  Good enough.
            // - - - - - - - - - - - - - - - - - - - - -
            // FUTURE: move rule rhs checks out here
            // (so error messages from bad usage are
            // logged sooner)
            // - - - - - - - - - - - - - - - - - - - - -
          } else {
            let kebabRules = _.map(_.clone(SUPPORTED_RULES), (ruleName)=>_.kebabCase(ruleName));
            let lowerCaseRules = _.map(_.clone(SUPPORTED_RULES), (ruleName)=>ruleName.toLowerCase());
            let ruleIdx = (
              _.indexOf(kebabRules, ruleName) === -1 ?
              _.indexOf(lowerCaseRules, ruleName.toLowerCase()) === -1 ?
              -1
              : _.indexOf(lowerCaseRules, ruleName.toLowerCase())
              : _.indexOf(kebabRules, ruleName)
            );
            if (ruleIdx !== -1) {
              throw new Error('Did you mean `'+SUPPORTED_RULES[ruleIdx]+'`?  (note the capitalization)\nYou are seeing this error because <ajax-form> encountered an unsupported (but vaguely familiar-looking) client-side validation rule: `'+ruleName+'`.');
            } else {
              throw new Error('<ajax-form> does not support that client-side validation rule (`'+ruleName+'`).\n [?] If you\'re unsure, visit https://sailsjs.com/support');
            }
          }
        }
      }
    }
    if(typeof bowser !== 'undefined' && !bowser.mobile && this.$find('[focus-first]').length > 0) {
      this.$focus('[focus-first]');
    }
  },
  beforeDestroy: function() {
    //…
  },
  methods: {

    keydownMetaEnter: async function() {
      await this._submit();
    },

    submit: async function () {
      await this._submit();
    },
    _submit: async function () {
      if (this.syncing) {
        return;
      }
      this.$emit('update:cloudError', '');
      var argins;
      if (this.handleParsing) {
        argins = this.handleParsing();
        if (argins === undefined) {
          return;
        } else if (!_.isObject(argins) || _.isArray(argins) || _.isFunction(argins)) {
          throw new Error('Invalid data returned from custom form parsing logic.  (Should return a dictionary of argins, like `{}`.)');
        }
      } else if (this.formData) {
        argins = this.formData;

        let formData = this.formData;
        let formErrors = {};

        for (let fieldName in this.formRules) {
          let fieldValue = formData[fieldName];

          for (let ruleName in this.formRules[fieldName]) {
            let ruleRhs = this.formRules[fieldName][ruleName];
            let violation;

            let isFieldValuePresent = (
              fieldValue !== undefined &&
              fieldValue !== '' &&
              !_.isNull(fieldValue)
            );

            if (ruleName === 'required' && (ruleRhs === true || ruleRhs === false)) {
              if (ruleRhs === false) {
                violation = false;
              } else {
                violation = (
                  !isFieldValuePresent
                );
              }
            } else if (!isFieldValuePresent) {
              // Do nothing.
              // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              // Note:
              // In order to allow use with optional fields, all rules except for
              // `required: true` are only actually checked when the field value
              // is "present" -- i.e. some value other than `null`, `undefined`,
              // or `''` (empty string).
              //
              // > Trying to figure out how to handle a conditionally-requiured
              // > field that uses one of these validations?  For example, a
              // > "Confirm email" re-entry field for an optional email address?
              // > Just make `required` validation rule dynamic, and everything
              // > else will work as expected.
              // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            } else if (ruleName === 'isEmail' && (ruleRhs === true || ruleRhs === false)) {
              if (ruleRhs === false) {
                violation = false;
              } else {
                violation = (
                  !parasails.util.isValidEmailAddress(fieldValue)
                );
              }
            } else if (ruleName === 'isIn' && _.isArray(ruleRhs)) {
              violation = (
                !_.contains(ruleRhs, fieldValue)
              );
            } else if (ruleName === 'is') {
              violation = (
                ruleRhs !== fieldValue
              );
            } else if (ruleName === 'minLength' && _.isNumber(ruleRhs)) {
              violation = (
                !_.isString(fieldValue) ||
                fieldValue.length < ruleRhs
              );
            } else if (ruleName === 'maxLength' && _.isNumber(ruleRhs)) {
              violation = (
                !_.isString(fieldValue) ||
                fieldValue.length > ruleRhs
              );
            } else if (ruleName === 'sameAs' && ruleRhs !== '' && _.isString(ruleRhs)) {
              let otherFieldName = ruleRhs;
              let otherFieldValue = formData[otherFieldName];
              violation = (
                otherFieldValue !== fieldValue
              );
            } else if (ruleName === 'isHalfwayDecentPassword' && (ruleRhs === true || ruleRhs === false)) {
              if (ruleRhs === false) {
                violation = false;
              } else {
                violation = (
                  (!_.isString(fieldValue) && !_.isNumber(fieldValue)) ||
                  fieldValue.length < 6
                );
              }
            } else if (ruleName === 'custom' && _.isFunction(ruleRhs)) {
              try {
                violation = (
                  !ruleRhs(fieldValue)
                );
              } catch (err) {
                console.warn(err);
                violation = true;
              }
            } else {
              throw new Error('Cannot interpret client-side validation rule (`'+ruleName+'`) because the configuration provided for it is not recognized by <ajax-form>.\n [?] If you\'re unsure, visit https://sailsjs.com/support');
            }
            if (violation) {
              formErrors[fieldName] = ruleName;
              break;
            }

          }
        }
        this.$emit('update:formErrors', formErrors);
        if (Object.keys(formErrors).length > 0) {
          if (this._environment !== 'production') {
            console.warn(`<ajax-form> encountered ${Object.keys(formErrors).length} form error${Object.keys(formErrors).length !== 1 ? 's' : ''} when performing client-side validation of "form-data" versus "form-rules".  (Note: This warning is only here to assist with debugging-- it will not be displayed in production.  If you're unsure, check out https://sailsjs.com/support for more resources.)`, _.cloneDeep(formErrors));
          }
          return;
        }
      }
      this.$emit('update:syncing', true);


      // Submit the form
      var failedWithCloudExit;
      var rawErrorFromCloudSDK;
      var result;
      if (this.handleSubmitting) {
        try {
          result = await this.handleSubmitting(argins);
        } catch (err) {
          rawErrorFromCloudSDK = err;
          if (_.isString(err) && err !== '') {
            failedWithCloudExit = err;
          } else if (_.isError(err) && err.exit) {
            failedWithCloudExit = err.exit;
          } else if (_.isObject(err) && !_.isError(err) && !_.isArray(err) && !_.isFunction(err) && Object.keys(err)[0] && _.isString(Object.keys(err)[0])) {
            failedWithCloudExit = Object.keys(err)[0];
          } else {
            throw err;
          }
        }
      } else {
        result = await Cloud[this.action].with(argins)
        .tolerate((err)=>{
          rawErrorFromCloudSDK = err;
          failedWithCloudExit = err.exit || 'error';
        });
      }
      if (failedWithCloudExit) {
        this.$emit('update:cloudError', failedWithCloudExit);
      }
      this.$emit('update:syncing', false);
      if (!failedWithCloudExit) {
        this.$emit('submitted', result);
      } else {
        this.$emit('rejected', rawErrorFromCloudSDK);
      }

    },

  }
});
