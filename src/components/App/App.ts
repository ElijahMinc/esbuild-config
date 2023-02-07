import { MainPage } from "../../pages";
import { SettingsPage } from "../../pages/SettingsPage";
import { Page } from "../../templates/Page";
import { Header } from "../Header";

export enum PageIds {
   MAIN_PAGE = 'main-page',
   SETTINGS_PAGE = 'settings-page'

}

class App {
   private static container: HTMLElement = document.body
   private static currentPageId: string = 'current-page'
   
   private initialPage: MainPage
   private header: Header


   constructor(){
      this.initialPage = new MainPage(PageIds.MAIN_PAGE)
      this.header = new Header('header', 'header')
   }



   private static renderPage(hashId: string = PageIds.MAIN_PAGE){

      const currentPage = document.querySelector(`#${App.currentPageId}`)
      if(currentPage){
         currentPage.remove()
      }

      let page: Page | null = null

      console.log('hashId', hashId)
      if(hashId === PageIds.MAIN_PAGE){
         page = new MainPage(PageIds.MAIN_PAGE)
      }else if(hashId === PageIds.SETTINGS_PAGE){
         page = new SettingsPage(PageIds.SETTINGS_PAGE)
      }


      if(!page) return

     const pageHTML = page.render()

     pageHTML.id = App.currentPageId

     App.container.append(pageHTML)
      
   }

   private static getWindowHash(){
      return window.location.hash.slice(1)
   }

   private enableChangePageByHash(){
      window.addEventListener('hashchange', () => {
         const hash = App.getWindowHash()
         App.renderPage(hash)
      })
   }


   private enableSetPageByLoad(){
      window.addEventListener('load', () => {
         const hash = App.getWindowHash()
         App.renderPage(hash || PageIds.MAIN_PAGE)
      })
   }

   public run(): void {
      App.container.append(this.header.render())
      this.enableSetPageByLoad()
      this.enableChangePageByHash()
   }
}


export default App