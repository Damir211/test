"use strict";

window.addEventListener('load', function () {
  var allExcursionTicketsElement = document.querySelectorAll('.excursion__tickets');
  allExcursionTicketsElement.forEach(function (item) {
    var parentTicketsHeight = item.offsetHeight;
    var childrenTickets = item.querySelectorAll('.excursion__ticket:not(.excursion__ticket-more)');
    var ticketHeight = childrenTickets[0] ? childrenTickets[0].offsetHeight + parseInt(window.getComputedStyle(childrenTickets[0], null).getPropertyValue('margin-bottom')) : 0;
    var buttonShowMore = item.querySelector('.excursion__ticket.excursion__ticket-more');

    if (window.innerWidth > 991) {
      ticketHeight = childrenTickets[0].offsetHeight;
      if (parentTicketsHeight === ticketHeight) return;
      buttonShowMore.classList.remove('excursion__ticket-hide');

      for (var i = 1; i <= childrenTickets.length; i++) {
        childrenTickets[childrenTickets.length - i].classList.add('excursion__ticket-hide');

        if (item.offsetHeight === ticketHeight) {
          break;
        }
      }
    } else {
      if (parentTicketsHeight === ticketHeight) return;
      buttonShowMore.classList.remove('excursion__ticket-hide');

      for (var _i = 1; _i <= childrenTickets.length; _i++) {
        childrenTickets[childrenTickets.length - _i].classList.add('excursion__ticket-hide');

        if (item.offsetHeight === ticketHeight) {
          break;
        }
      }
    }

    buttonShowMore.addEventListener('click', function () {
      childrenTickets.forEach(function (item) {
        item.classList.remove('excursion__ticket-hide');
      });
      buttonShowMore.classList.add('excursion__ticket-hide');
    });
  });
});