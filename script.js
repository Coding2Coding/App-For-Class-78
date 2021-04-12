var images=["https://images.unsplash.com/photo-1580056537949-cd1f00d3e1d5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
            "https://images.unsplash.com/photo-1554261234-b85596409a16?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
            "https://images.unsplash.com/photo-1611156799158-7ba80b2c06b7?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85",
            "https://images.unsplash.com/photo-1610910648669-d8b1c79a4496?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=85"
];

var index=0;

function nextImage() {
    document.getElementById("image").src=images[index];

    index++
}