import { Page } from "../../templates/Page"

class SettingsPage extends Page {
   texts: {[key: string]: string} = {
      mainText: 'Settings Page'
   }

   constructor(id: string){
      super(id)
   }

   render(): HTMLElement {
      const title = this.createTitle(this.texts.mainText)
      this.container.append(title)

      return this.container
   }
}


export default SettingsPage