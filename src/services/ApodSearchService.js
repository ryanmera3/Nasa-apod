import { AppState } from "../AppState"
import { Apod } from "../models/Apod"
import { logger } from "../utils/Logger"
import { nasaApi } from "./AxiosService"



const apiKey = 'FcetT3mjdROEkuMHgCXb1npLYhhIdjAHOocmF1Qo'

class ApodSearchService {
  async findApodByQuery(date) {
    const res = await nasaApi.get(`?date=${date}&api_key=${apiKey}`)
    const results = new Apod(res.data)
    AppState.results = results
    logger.log(AppState.results , results)
  }
}

export const apodSearchService = new ApodSearchService()