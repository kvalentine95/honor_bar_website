import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8 chef">
            <img src="http://cdn.playbuzz.com/cdn/76d5533e-7e04-48ca-973e-8e05c34428ca/61a58a6a-7780-41d5-ac94-77891e70c103.jpg"/>
          </div>
          <div class="col-md-4">
            <h5 class="comp-title">Reviews</h5>
            <h2>The Food Network</h2>
            <h4>"Best restaurant in the LA area"</h4>
            <p>Honor Bar is a nice and chill bar. Gets a good deal of traffic based on where it is and since I live in the neighborhood it's easy to say because there really aren't very many bars at all in the Beverly Hills area that makes sense. The Ambiance is really cool. They are usually showing a game of some sort so it gives you that sports bar feel a little bit on the upscale side. Decently priced food and drinks. As well as the fact the food itself is pretty good. I find myself here all the time. If you're in the area it is definitely recommended.</p>
            <div class="author"></div>
            <div class="arrows">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
              <i class="fa fa-arrow-right ready" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
