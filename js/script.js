const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'The School Academy',
    position: 'Pre-cadet Army & Police Training Centre, Akola',
    photo:
      'img/sponcers/the school academy.jpeg',
    text:
      "Is a competitive examination hub for competitive examination aspirants providing both Physical and Academic classes for defence oriented examination with many success stories.",
  },
  {
    name: 'Ram Aastha',
    position: 'सिद्धीर्भवतिकर्मजा',
    photo: 'img/sponcers/ram astha.jpeg',
    text:
      'Personality development and Counselling centre, for helping aspirant develop their personality and enter into new dynamics of this changing world of Competitions. ',
  },
  {
    name: 'Educator AkkA',
    position: 'Bachho ke padai Se Bujurgo ke tajurbe tak…',
    photo: 'img/sponcers/eduacator akka.jpeg',
    text:
      "Educator AkkA is a child development centre, working on providing Education and Academics to Children with focus on overall child development, making them play and grow mature…",
  },
  {
    name: 'Ourz',
    position: 'Smart Technologies & Computer Training Institutes',
    photo: 'img/sponcers/ourz.png',
    text:
      "Ourz Information Technology and Computer Training Center is an institute located in Akola.Ourz delivering excellence in the coaching of computer programming and English speaking courses.",
  },
  {
    name: 'Learn Alwayss',
    position: 'Digital Creator',
    photo: 'img/sponcers/learn alwayss.png',
    text:
      "Learn Alwayss is a platform where you can get seminar projects for engineering students.Interesting information on current topics through Instagram. Provides free courses for students who want to learn web development",
  },
  

]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
