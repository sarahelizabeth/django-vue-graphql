import { createApp } from 'vue'
import { createApolloProvider } from '@vue/apollo-option'

import App from './App.vue'
import router from '@/router'

// Vue.config?.productionTip = false

const apolloProvider = createApolloProvider({
  httpEndpoint: 'http://localhost:8000/graphql',
  wsEndpoint: null,
})

const app = createApp(App)

app.use(apolloProvider)

app.use(router)

app.mount('#app')
