export const FormFieldMixin = {
  inheritAttrs:  false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String,Number]
  },
  methods: {
    updateValue(event:any){
      this.$emit('input',event.target.value)
    }
  },
  computed:{
    /*destructuring the listeners because you receive it twice, ence you need to handle it separately*/
    filteredListeners() {
      const { input, change, ...filteredListeners } = this.$listeners;
      return filteredListeners
    }
  }
};
