export default function tab2Func(){
    const content = document.getElementById('content');
    const main_content = document.querySelector('.main');
    main_content.innerHTML = '';

    // Menu
    const menuTEXT = document.createElement('h2');
    menuTEXT.classList.add('menuTEXT');
    menuTEXT.innerHTML = 'MENU';
    //starting table
    const menu = document.createElement('table');
    menu.classList.add('Menu');
    // Creating THead
    const tHead = document.createElement('thead');
    tHead.classList.add('menuHead');
    //header rows
    const headingRow = document.createElement('tr');
    headingRow.classList.add('headingRow');
    //headers th
    const th1 = document.createElement('th');
    th1.classList.add('firstTh');
    th1.innerHTML = 'Nombre';

    const th2 = document.createElement('th');
    th2.classList.add('secondTh');
    th2.innerHTML = 'Ingredientes';

    const th3 = document.createElement('th');
    th3.classList.add('thirdTh');
    th3.innerHTML = 'Precio';
    //Tbody
    const tBody = document.createElement('tbody');
    tBody.classList.add('menuBody');
    //menu rows trs
    const tr1 = document.createElement('tr');
    tr1.classList.add('menuRows');
    const tr2 = document.createElement('tr');
    tr1.classList.add('menuRows');
    const tr3 = document.createElement('tr');
    tr1.classList.add('menuRows');
    //menu data td
    const td1 = document.createElement('td');
    td1.classList.add('menuData');
    td1.innerHTML = 'Congrio a la Plancha o Frito';
    const td2 = document.createElement('td');
    td2.classList.add('menuData');
    td2.innerHTML = 'Congrio';
    const td3 = document.createElement('td');
    td3.classList.add('menuData');
    td3.innerHTML = '7,900$';
    //second row
    const td4 = document.createElement('td');
    td4.classList.add('menuData');
    td4.innerHTML = 'Reineta a la Plancha o Frita';
    const td5 = document.createElement('td');
    td5.classList.add('menuData');
    td5.innerHTML = 'Reineta';
    const td6 = document.createElement('td');
    td6.classList.add('menuData');
    td6.innerHTML = '7,900$';
    // third row
    const td7 = document.createElement('td');
    td7.classList.add('menuData');
    td7.innerHTML = 'Corvina a la Plancha o Frita';
    const td8 = document.createElement('td');
    td8.classList.add('menuData');
    td8.innerHTML = 'Corvina';
    const td9 = document.createElement('td');
    td9.classList.add('menuData');
    td9.innerHTML = '7,900$';


    tr1.append(td1,td2,td3)
    tr2.append(td4,td5,td6)
    tr3.append(td7,td8,td9)
    tBody.append(tr1,tr2,tr3)
    headingRow.append(th1,th2,th3)
    tHead.append(headingRow);
    menu.append(tHead,tBody);
    main_content.append(menuTEXT,menu);



}