import Component from "../../templates/Component";
import { PageIds } from "../App/App"

const headerData = [
   {
      id: PageIds.MAIN_PAGE,
      text: 'Main Page'
   },
   {
      id: PageIds.SETTINGS_PAGE,
      text: 'Settings Page'
   }
]
class Header extends Component {
   constructor(tagName: string, className: string){
      super(tagName, className)
   }

   renderPageBtns(){
      const pageButtons = document.createElement('div');
      headerData.forEach((button) => {
         const buttonHTML = document.createElement('a')
         buttonHTML.href = `#${button.id}`
         buttonHTML.innerText = button.text
         pageButtons.append(buttonHTML)
      })
      
      this.container.append(pageButtons)
   }

   render(){
      this.renderPageBtns()
      return this.container
   }
}


export default Header