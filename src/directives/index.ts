import { App } from 'vue'
import pointer from "@/directives/pointer";

export default (app: App) => {
  app.use(pointer)
}