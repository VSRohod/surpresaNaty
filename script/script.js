const linkSelo = $("#linkSelo")
const selo = $("#selo")

linkSelo.on("mouseenter", () => {
    selo.html(
        `
            <i class="bi bi-envelope-open-heart-fill d-flex justify-content-center align-items-center"></i>
        `
    )
})

linkSelo.on("mouseout", () => {
    selo.html(
        `
            <i class="bi bi-envelope-heart-fill d-flex justify-content-center align-items-center"></i>   
        `
    )
})

