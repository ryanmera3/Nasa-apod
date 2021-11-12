<template>
  <form @submit.prevent="search" class="bg-white rounded elevation-1">
    <div class="form-group d-flex align-items-center">
      <label for="search" class="sr-only"></label>
      <input
        v-model="query"
        type="text"
        name="search"
        required
        class="form-control bg-white border-0"
        placeholder="search"
      />
      <button class="btn px-2 py-0" type="submit">
        <i class="mdi mdi-movie-search f-18"></i>
      </button>
    </div>
  </form>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { AppState } from "../AppState";
import { apodSearchService } from "../services/ApodSearchService";
export default {
  setup(){
    const query = ref('')
    return {
      query,
      apod: computed(()=> appstate.results),
      currentApod:computed(()=> appstate.currentApod),

      async search(){
        try {
          await apodSearchService.findApodByQuery(query.value)
        } catch {
           Pop.toast(error.message, 'error')
        }
      }

    }
  }}
</script>


<style lang="scss" scoped>

</style>