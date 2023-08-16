import tab1Func from './tab1'
import tab2Func from './tab2'
import tab3Func from './tab3'
export function page_load (){
 const content = document.getElementById('content')
 const main_content = document.createElement('div')
    main_content.classList.add('main')

 const header = document.createElement('div')
 header.classList.add('header')

 const nav = document.createElement('div')
 nav.classList.add('nav_btns')

 const header_title = document.createElement('h2')
 header_title.classList.add('title-header')
 header_title.innerHTML = 'Restaurant Name'
 const tab1 = document.createElement('button')
 tab1.classList.add('tab1')
 tab1.innerHTML = 'Home'
 const tab2 = document.createElement('button')
 tab2.classList.add('tab2')
 tab2.innerHTML = 'Menu'
 const tab3 = document.createElement('button')
 tab3.classList.add('tab3')
 tab3.innerHTML = 'Contact'

 nav.append(tab1, tab2, tab3)
 header.append(header_title,nav,main_content )








 
 content.append(header)
 
 tab1.addEventListener('click', tab1Func)
 tab2.addEventListener('click', tab2Func)
 tab3.addEventListener('click', tab3Func)
}