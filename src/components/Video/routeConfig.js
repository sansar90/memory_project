import PlayMedia from './media/PlayMedia'
import { read } from './media/api-media.js'

const routes = [
  {
    path: '/video/:videoId',
    component: PlayMedia,
    loadData: (params) => read(params)
  }

]
export default routes