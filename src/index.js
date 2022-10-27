import _, { drop } from 'lodash';
import './style.css';

const menuEls = document.querySelectorAll('.dropDownMenu>li');
const dropDownSubmenu = document.querySelector('.dropDownSubmenu')
const dropDownSection = document.getElementById('dropDownMenuSection')
const dropDownContainer = document.getElementById('dropDownMenuContainer')
const dropDownSubmenuEl = document.querySelectorAll('.dropDownSubmenu>li');

function showSubMenu(el){
    dropDownSubmenuEl.forEach(i=>{
      if(el.classList.contains(i.getAttribute('class'))){
        i.style.cssText=`
          display: default;
        `
        dropDownContainer.style.cssText=`
        background-color:honeydew;
      `
        dropDownContainer.append(i)
      }else{
        i.style.cssText=`
          display: none;
        `            
      }
    })
  
}


function toggleActiveClass(){
  menuEls.forEach(el=>{
    el.onclick = function(){
        for(let item of menuEls){
          item.classList.remove('active')
        }
        this.classList.add('active')
        showSubMenu(this)
    }
  })
}

toggleActiveClass()

