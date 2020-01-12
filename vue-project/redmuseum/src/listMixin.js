export default {
  data() {
    return {
      names: ['Alexandr', 'Maria', 'Matvei', 'Sophia'],
      searchName: '',
    };
  },
  computed: {
    filteredNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1;
      });
    },
  },
}
