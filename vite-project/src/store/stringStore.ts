import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStringStore = defineStore('string', () => {
  const string = ref<string>('You did it!')

  const changeString = (newString: string) => {
    string.value = newString
  }

  return { string, changeString }
})
