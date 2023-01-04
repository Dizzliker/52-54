const usersContainer = document.querySelector('.sidebar__users-container');
const userContainer = usersContainer.querySelector('.sidebar__user-container');

let last_scroll = 0;

const onScroll = (event) => {
    event.preventDefault();
    if(event.target.scrollTop > last_scroll) {
        usersContainer.scrollTop = last_scroll + userContainer.scrollHeight;
        console.log(usersContainer.scrollTop);
    } else {
        console.log(usersContainer.scrollTop);
    }
    last_scroll = event.target.scrollTop;
};

// usersContainer.addEventListener('scroll', (event) => {
//     onScroll(event);
// });

// usersContainer.addEventListener('wheel', function(event){
//     if (last_scroll === 0) {
//         usersContainer.scrollTop = last_scroll + userContainer.scrollHeight;
//     }
//     else if(event.target.scrollTop > last_scroll) {
//         usersContainer.scrollTop = last_scroll - userContainer.scrollHeight;
//         console.log(usersContainer.scrollTop);
//     } else {
//         usersContainer.scrollTop = last_scroll + userContainer.scrollHeight;
//         console.log(usersContainer.scrollTop);
//     }
//     last_scroll = event.target.scrollTop;
// });