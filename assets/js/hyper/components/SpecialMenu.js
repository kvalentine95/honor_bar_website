import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  return (
    <section id="SpecialMenu" class="texture">
      <div class="container">
        <h5 class="title">Special Menu</h5>
        <h2>Honorable Flavor of Winter</h2>
        <div class="row boxes">
          <div class="col-md-4">
            <div class="box">
              <div class="box-image1">
                <div class="price-circle">$15</div>
              </div>
              <span class="title">Honor Burger</span>
              <p class="details">Fresh ground chuck, cheddar & tomato, topped with coleslaw</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="box">
              <div class="box-image2">
                <div class="price-circle">$14</div>
              </div>
              <span class="title">Veggie Club</span>
              <p class="details">Persian cucumber, French feta, avocado, arugula & pickled onion</p>
            </div>
          </div>
          <div class="col-md-4">
          <div class="box">
            <div class="box-image3">
              <div class="price-circle">$5</div>
            </div>
            <span class="title">Hand-Cut French Fries</span>
            <p class="details">U.S.#1 Kennebec potatoes, served with dipping sauces</p>
          </div>
          </div>
        </div>
        <a href="#">View Full Menu</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
