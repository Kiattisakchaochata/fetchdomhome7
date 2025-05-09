const userList = document.querySelector('.user-list')
const postInfo = document.querySelector('.post-info')
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
  console.log(users)
  for(let user of users){
  const newLi = document.createElement('li')
  newLi.textContent =`${user.name}/ ${user.email}`
  console.log(newLi)
  userList.append(newLi)

  newLi.addEventListener('click', () => {
    fetchUserPosts(user.id, user.name, user.email)
  })
  console.log(fetchUserPosts)
}
})

function fetchUserPosts(id, name, email) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then( res => res.json())
  .then( posts => {
    postInfo.innerHTML = '';
    const h1 = document.createElement('h1');
    const h1_email = document.createElement('h3');
    const h1_id = document.createElement('h3');
    h1.textContent = `Name: ${name}`;
    h1_email.textContent = `Email: ${email}`;
    // h1_id.textContent = `ID: ${id}`;
    postInfo.append(h1, h1_email);

    posts.forEach(post => {
      const postTitle = document.createElement('h4');
      const postBody = document.createElement('p');
      const postID = document.createElement('p');
      postTitle.textContent = post.title;
      postBody.textContent = post.body;
      // postID.textContent = post.id;
      postInfo.append(postTitle, postBody);
    });
      console.log(posts);
  });
}
