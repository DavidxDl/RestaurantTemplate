export default function tab3Func(){
    
    const main_content = document.querySelector('.main');
    main_content.innerHTML = '';

    const timeTEXT = document.createElement('h2')
    timeTEXT.classList.add('timeTEXT')
    timeTEXT.innerHTML = 'Ubicacion'
    // horarios div 
    const horarios = document.createElement('table')
    horarios.classList.add('horarios')

    const days = document.createElement('th')
    days.classList.add('days')
    days.innerHTML = 'Telefono'


    const horarios_info = document.createElement('td')
    horarios_info.classList.add('horarios_info')
    horarios_info.innerHTML = '+569 4534623'


    horarios.append(days,horarios_info)
    main_content.append(horarios);


    
   


}