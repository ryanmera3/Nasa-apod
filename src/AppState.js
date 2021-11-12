import { reactive } from 'vue'
import { Apod } from "./models/Apod"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},

  /**@type {Apod[]} */
  results: [],

  currentRes: []
})
