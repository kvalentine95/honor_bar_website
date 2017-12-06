import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
  var currentReview = function() {
    return (
      <div>
        <h2>{state.reviews[state.reviewStatus.currentReview].company}</h2>
        <h4>"{state.reviews[state.reviewStatus.currentReview].highlight}"</h4>
        <p>{state.reviews[state.reviewStatus.currentReview].review}</p>
        <div class="author"></div>
      </div>
    )
  }
  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <div class="col-md-8 chef">
            <img src="http://cdn.playbuzz.com/cdn/76d5533e-7e04-48ca-973e-8e05c34428ca/61a58a6a-7780-41d5-ac94-77891e70c103.jpg"/>
          </div>
          <div class="col-md-4">
            <h5 class="comp-title">Reviews</h5>
            {currentReview()}
            <div class="arrows">
              <i class={`fa fa-arrow-left ${(state.reviewStatus.currentReview > 0) ? 'ready' : ''}`}aria-hidden="true"></i>
              <i class={`fa fa-arrow-right ${(state.reviewStatus.currentReview == state.reviews.length-1) ? '': 'ready'}`}aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
