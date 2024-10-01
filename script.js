let users = [
    {
        profileimg: "./imgs/profile.avif",
        displayimg: "./imgs/main.jpg",
        pendingmsg: 4,
        name: "Rizwan",
        age: 22,
        location: "Karachi,Pakistan",
        interest: [
            {
                field: "Music",
                icon: "ri-music-2-line",
            },
            {
                field: "Painting",
                icon: "ri-pencil-fill",
            },
        ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam exercitationem deserunt est quibusdam corporis earum",
    },
    {
        profileimg: "./imgs/men-profile.jpg",
        displayimg: "./imgs/men-display.jpg",
        pendingmsg: 9,
        name: "Alex",
        age: 18,
        location: "Paris,France",
        interest: [
            {
                field: "Coding",
                icon: "ri-code-s-slash-fill",
            },
            {
                field: "Painting",
                icon: "ri-pencil-fill",
            },
        ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam exercitationem deserunt est quibusdam corporis earum",
    },
    {
        profileimg: "./imgs/women-profile.jpg",
        displayimg: "./imgs/women-display.jpg",
        pendingmsg: 2,
        name: "Victoria",
        age: 24,
        location: "London,UK",
        interest: [
            {
                field: "Music",
                icon: "ri-music-2-line",
            },
            {
                field: "Singing",
                icon: "ri-mic-fill",
            },
        ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam exercitationem deserunt est quibusdam corporis earum",
    },
    {
        profileimg: "./imgs/women-profile2.jpg",
        displayimg: "./imgs/women-dispaly2.jpg",
        pendingmsg: 0,
        name: "Maria",
        age: 27,
        location: "Berlin,Germany",
        interest: [
            {
                field: "Photo Shoting",
                icon: "ri-camera-3-fill",
            },
        ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam exercitationem deserunt est quibusdam corporis earum",
    },
    {
        profileimg: "./imgs/women-profile3.jpg",
        displayimg: "./imgs/women-display3.jpg",
        pendingmsg: 5,
        name: "Alexa",
        age: 20,
        location: "Washington,USA",
        interest: [
            {
                field: "Music",
                icon: "ri-music-2-line",
            },
            {
                field: "Painting",
                icon: "ri-pencil-fill",
            },
        ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam exercitationem deserunt est quibusdam corporis earum",
    },
];
function select(element) {
    return document.querySelector(element);
}

function setData(index) {
    select(".proflimg img").src = users[index].profileimg;
    select(".badge h1").textContent = users[index].pendingmsg;
    select(".location h1").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter = "";
    users[index].interest.forEach(function (elem) {
        clutter += ` <div class=" tag text-white  bg-white/50 px-3 py-1 rounded-full">
                    <i   class="text-sm font-semibold ${elem.icon}"></i>
                    <span class="text-sm font-normal">${elem.field}</span>
                </div> `;
    });

    select('.tags').innerHTML = clutter;
    select(".bio p").textContent = users[index].bio;

}

let curr = 0;
let isAnimated = false;

function setintial() {
    select(".maincard img").src = users[curr].displayimg;
    select(".incomingcard img").src = users[curr + 1].displayimg;

    setData(curr);
    curr = 2;
}

setintial();

function Animation(){
    if(!isAnimated){
        isAnimated = true
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimated = false
             let main = select('.maincard')
             let incoming = select('.incomingcard')
        
             incoming.classList.remove('z-[2]')
             incoming.classList.add('z-[3]')
             incoming.classList.remove('incomingcard')
        
             main.classList.remove('z-[3]')
             main.classList.add('z-[2]')
             gsap.set(main,{
                scale:1,
                opacity:1
             })
             if(curr === users.length) {
                curr = 0;
             }
             select('.maincard img').src = users[curr].displayimg;
             curr++
             main.classList.remove('maincard')
             incoming.classList.add('maincard')
             main.classList.add('incomingcard')
            }
        });
        
            tl.to('.maincard',{
                scale:1.1,
                opacity:0,
                duration:1,
                ease:Circ,
                
            },'a')
        
            tl.from('.incomingcard',{
                scale:.9,
                opacity:0,
                duration:1.1,
                ease:Circ,
                
            },'a')
    }

}

let friend = select('.friend')
let close = select('.close')



friend.addEventListener('click',function(){
    Animation()

    setData(curr - 1);

    gsap.from('.details .element',{
        y:'100%',
        stagger:.06,
        ease: Power4.easeInOut,
        duration:1.4
    })
})


close.addEventListener('click',function(){
    Animation()
    
    setData(curr - 1);

    gsap.from('.details .element',{
        y:'100%',
        stagger:.06,
        ease: Power4.easeInOut,
        duration:1.4
    })
})

function containerCreator(){
    document.querySelectorAll('.element').forEach(function(elem){
     let div = document.createElement('div')
     div.classList.add(`${elem.classList[1]}container`,'overflow-hidden')
     div.appendChild(elem)
     select('.details').appendChild(div)
    })
}
containerCreator()

