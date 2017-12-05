import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  var loopMenu = function() {
    return state.specialMenuData.map(function(item){
      return(
        <div class="col-md-4">
          <div class="box">
            <div class={item.classTitle}>
              <div class="price-circle">${item.price}</div>
            </div>
            <span class="title">{item.title}</span>
            <p class="details">{item.description}</p>
          </div>
        </div>
      )
    })
  }
  return (
    <section id="SpecialMenu" class="texture">
      <div class="container">
        <h5 class="title">Special Menu</h5>
        <h2>Honorable Flavor of Winter</h2>
        <div class="row boxes">
          {loopMenu()}
        </div>
        <a href="#">View Full Menu</a>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
