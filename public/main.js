var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var star = document.getElementsByClassName("fa-star");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(star).forEach(function(element) {
  element.addEventListener('click', function(){
    const imageID = this.getAttribute("data-image")
    const starAmt = parseFloat(this.getAttribute("data-starAmount"))
    fetch('messages/star', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'imageID': imageID,
        'starAmt' : starAmt
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const imageID = this.getAttribute("data-image")
        const likeAmount = parseFloat(this.getAttribute("data-likeAmount"))
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'imageID': imageID,
            'likeAmount': likeAmount

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const imageID = this.getAttribute("data-image")
    const likeAmount = parseFloat(this.getAttribute("data-likeAmount"))
    fetch('messages/thumbDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'imageID': imageID,
        'likeAmount': likeAmount
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const imageID = this.getAttribute("data-image")
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'imageID': imageID
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
