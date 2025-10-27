import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
function initState() {
  return {
    isCollapse: true,
  }
}
export const useAllDataStore = defineStore('allData', () => {
  //ref state
  //computed getter
  //function action
  const state = ref(initState())
  return {
    state,
  }
})
