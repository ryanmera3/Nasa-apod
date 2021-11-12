<template>
  <div class = "apod card my-2 elevation-2">
    <img class="apod-img" :src="apod.url" :alt="apod.date" />
    <div class="card-body">
      <div class="">
        <h3 class="d-flex align-items-center justify-content-between">
          <span>{{ apod.explanation }}</span>
        </h3>
        <p class="clip-text">
        </p>

      </div>
    </div>
  </div>
  <Modal :id="'a-' + apod.id">
    <template #modal-title>
      {{ apod.date }}
    </template>
    <template #modal-body>
      <div class="text-center">
        <img :src="apod.Url" alt="" />
      </div>
      <div class="row py-3">
        <div class="col-md-6 d-flex align-items-center">
          <p>
            {{ apod.explanation }}
          </p>
        </div>
      </div>
    </template>
  </Modal>
</template>


<script>
import { computed } from '@vue/reactivity'
import { Apod } from '../models/Apod'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {

  props: {
    apod: {
      type: Apod,
      required: true
    }
  },
  setup(props){
    return {
      // onMyList: computed(() => AppState.results.find(a => a.id === props.apod.id)),
      apod: computed(()=> AppState.results),
      addToList() {
        logger.log('Adding', props.apod.title)
        watchlistService.addApod(props.apod)
      },
      removeFromList() {
        watchlistService.remove(props.apod)
      }
    }
    }
  }
</script>


<style lang="scss" scoped>

</style>