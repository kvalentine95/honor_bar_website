import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5 class="title">Our Story</h5>
            <h2>Cooking is the Art of Adjustment</h2>
            <p>Escape the hustle and bustle by ducking into the cool, dark atmosphere
              of The Honor Bar in Beverly Hills, a cozy little nook tucked next to the South
              Beverly Grill. Relax with a crisp martini and one of our delectable sandwiches.
              The highlight here is surely the French fries, served piping hot in a silver julep
              cup. Walk-ins only.</p>
            <div class="quote">
            <i>  "Nobody knows how to make a more crowd-pleasing sandwich better than these guys" - <strong>Marisa Dunn</strong></i>
            </div>
            <a href="#" class="reserve-btn">Reserve</a>
          </div>
          <div class="col-md-6">
            <div class="video-img">
              <img src="https://s3.amazonaws.com/siteninja/multitenant/images/61863/images/original/Screen_Shot_2016-06-29_at_4.53.14_PM.png?1467244440"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
