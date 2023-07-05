export default function tab1Func (){
    const content = document.getElementById('content')
    const main_content = document.querySelector('.main')
    main_content.innerHTML = ''

// title
    const main_title = document.createElement('h1')
    main_title.classList.add('main_title')
    main_title.innerHTML = 'La Gatita'
//  img
    const main_image = document.createElement('img')
    main_image.classList.add('main_image')
    main_image.src = '../src/restaurant.jpeg'
// info paragrafp
    const p = document.createElement('p')
    p.classList.add('main_info')
    p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur repellendus repudiandae maxime vel ipsam asperiores reiciendis molestias autem amet, quis ut doloribus cum et architecto eius numquam suscipit neque?'
//   starting reviews div
    const reviews = document.createElement('div')
    reviews.classList.add('reviews')

// reviews i found
    const reviewTEXT = document.createElement('h2')
    reviewTEXT.classList.add('REVIEWS_TEXT')
    reviewTEXT.innerHTML = 'REVIEWS'
// first review container
    const review1 = document.createElement('div')
    review1.classList.add('review1')

    const review1_title = document.createElement('h2')
    review1_title.classList.add('review1_title')
    review1_title.innerHTML = 'Por Carlos Reyes M.'

    const review1_info = document.createElement('i')
    review1_info.classList.add('review1_info')
    review1_info.innerHTML = 'Con mucho menos de aquel ingrediente, de seguro otro destino tendrían platos como el Chupe, un real pozo cremoso -se echó de menos hasta el pan rallado- donde por el contrario nadaba un respetable picadillo de locos y camarones.'

    review1.append(review1_title, review1_info)

    // horarios sec
    const timeTEXT = document.createElement('h2')
    timeTEXT.classList.add('timeTEXT')
    timeTEXT.innerHTML = 'Horarios'
// horarios div 
    const horarios = document.createElement('table')
    horarios.classList.add('horarios')

    const days = document.createElement('th')
    days.classList.add('days')
    days.innerHTML = 'Viernes a Domingo'


    const horarios_info = document.createElement('td')
    horarios_info.classList.add('horarios_info')
    horarios_info.innerHTML = '12:00 a 17:00 hrs'


    horarios.append(days,horarios_info)








    main_content.append(main_title, main_image, p, reviewTEXT, review1, timeTEXT,horarios)




    content.append(main_content)



}