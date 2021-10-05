let form = document.getElementById('form__search-js')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
let input = document.getElementById('input__search-js').value.replace(' ', '')
let err = document.getElementsByClassName('err')[0]
if(input == '@'){
    err.style.display = 'block'
}

fetch("https://api.github.com/users/" + input).
then((result)=>result.json()).
then((data)=>{
    console.log(data)

   function dateFormat(element, created_at) {
        var dateOptions = {
          year: "numeric",
          month: "short",
          day: "numeric",
        };     
        element.textContent = new Date(created_at)
        .toLocaleDateString("en-US", dateOptions)
        .split("")
        .filter((char) => char !== ",")
        .join("");
    }
    
    let name = document.getElementById('name')
    let date = document.getElementById('date')
    let bio = document.getElementById('bio')
    let avatar = document.getElementById('avatar')
    let url = document.getElementById('link')
    let repos = document.getElementById('repos')
    let followers = document.getElementById('followers')
    let following = document.getElementById('following')
    let location = document.getElementById('location')
    let web = document.getElementById('web')
    let twitter = document.getElementById('twitter')
    let company = document.getElementById('company')
    

    
    name.innerHTML= data.name
    dateFormat(date, data.created_at)
    bio.innerHTML= data.bio === null ? 'This profile has no bio' : data.bio
    avatar.setAttribute('src', data.avatar_url)
    url.innerHTML = `@${data.login}`
    repos.innerHTML= data.public_repos
    followers.innerHTML= data.followers
    following.innerHTML= data.following
    location.innerHTML= data.location == null ? 'Not available'  : data.location
    web.innerHTML = data.blog == null ? 'Not available' : data.blog
    twitter.innerHTML= data.twitter_username == null ? 'Not available' : data.twitter_username
    company.innerHTML= data.company== null ? 'Not available' : data.company

})


})
/* -----------------THEME TOGGLE-------------------------------------- */

let toggle = document.getElementById('dark-light-mode')


toggle.addEventListener('click', function(){

 let h2 = document.getElementsByTagName('h2')[0]
 let h4 = document.getElementsByTagName('h4')[0]
 let  main = document.getElementsByTagName('main')[0]
 let search = document.getElementById('form__search-js')
 let moon = document.getElementsByTagName('img')[0]
 let stats = document.getElementsByClassName('profile__stats')[0]
 let switchMode = document.getElementById('toggle-mode')
 
let body = document.getElementsByTagName('body')[0]
if(body.classList[0]=== 'light'){
    switchMode.innerText = 'LIGHT'
    moon.setAttribute('src', './assets/icon-sun.svg')
}else{
    body.classList.remove('light')
    switchMode.innerText = 'DARK'
    moon.setAttribute('src', './assets/icon-moon.svg')
}
    body.classList.toggle('light')
    h2.classList.toggle('light')
    h4.classList.toggle('light')
    main.classList.toggle('light')
    search.classList.toggle('light')
    stats.classList.toggle('light')
    
})
    
    
        
        
    



   

