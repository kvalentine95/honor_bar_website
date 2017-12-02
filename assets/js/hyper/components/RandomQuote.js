import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote">
      <div class="container">
        <h1>“Great cooking favors the prepared hands”</h1>
        <span class="author">- Jacques Pepin -</span>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
