<template>
  <div class="search-page container-fluid">
    <div class="row my-3 justify-content-center">
      <div class="col-8">
        <SearchApod />
        <Picture />
      </div>
    </div>
    <div class="row">
      <div class="col-12">

      </div>
      <div class="col-sm-6 col-md-4 col-lg-3" v-for="a in apod" :key="a.id">
        <Apod :apod="a" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from '@vue/reactivity'
import { AppState } from '../AppState'
import { logger } from "../utils/Logger"
export default {
   name: 'Search',
  setup() {
    return {
      apods: computed(()=>{
        const apods = AppState.results
        logger.log(apods)
  return apods
      })
  }
}
}
</script>


<style lang="scss" scoped>
</style>