abstract class Page{
   protected container: HTMLElement

   constructor(id: string) {
      this.container = document.createElement('div')
      this.container.id = id
   }

   protected createTitle(text: string): HTMLElement{
      const title = document.createElement('h1');
      title.innerText = text

      return title
   } 

   abstract render(): HTMLElement
}


export { Page }