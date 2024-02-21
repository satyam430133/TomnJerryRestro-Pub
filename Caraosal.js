
const Caraosal = () => {
  return (
    <>
    <div id="carouselExampleDark" class="carousel carousel-white slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img id="carausalimg" src="https://images.pexels.com/photos/6062040/pexels-photo-6062040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{marginTop:"-240px"}}> Tom N Jerry Restro </h1>
        <h3> Where every bite tells a story, and every moment becomes a memory. </h3>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img id="carausalimg" src="https://images.pexels.com/photos/10548499/pexels-photo-10548499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{marginTop:"-240px"}}> Tom N Jerry Bar </h1>
        <h3> Sip, socialize, and savor - where every glass holds a tale and every moment is steeped in conviviality. </h3>
      </div>
    </div>
    <div class="carousel-item">
      <img id="carausalimg" src="https://images.pexels.com/photos/3328312/pexels-photo-3328312.jpeg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{marginTop:"-240px"}}> Tom N Jerry Pub </h1>
        <h3> Raise a glass to good times - where laughter echoes and memories are brewed. </h3>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> <br />
    </>
  )
}

export default Caraosal