window.addEventListener('load', function () {
  const allExcursionTicketsElement = document.querySelectorAll('.excursion__tickets');

  allExcursionTicketsElement.forEach(item => {
    let parentTicketsHeight = item.offsetHeight;
    const childrenTickets = item.querySelectorAll('.excursion__ticket:not(.excursion__ticket-more)');
    let ticketHeight = childrenTickets[0] ? childrenTickets[0].offsetHeight + parseInt(window.getComputedStyle(childrenTickets[0], null).getPropertyValue('margin-bottom')) : 0;
    const buttonShowMore = item.querySelector('.excursion__ticket.excursion__ticket-more');

    if(window.innerWidth > 991){
      ticketHeight = childrenTickets[0].offsetHeight
      if(parentTicketsHeight === ticketHeight) return;
      buttonShowMore.classList.remove('excursion__ticket-hide');
      for(let i = 1; i <= childrenTickets.length; i++){
        childrenTickets[childrenTickets.length - i].classList.add('excursion__ticket-hide');
        if(item.offsetHeight === ticketHeight){
          break;
        }
      }
    }else{
      if(parentTicketsHeight === ticketHeight) return;
      buttonShowMore.classList.remove('excursion__ticket-hide');
      for(let i = 1; i <= childrenTickets.length; i++){
        childrenTickets[childrenTickets.length - i].classList.add('excursion__ticket-hide');
        if(item.offsetHeight === ticketHeight){
          break;
        }
      }
    }
    buttonShowMore.addEventListener('click', ()=>{
      childrenTickets.forEach(item => {item.classList.remove('excursion__ticket-hide')});
      buttonShowMore.classList.add('excursion__ticket-hide');
    });
  })
});