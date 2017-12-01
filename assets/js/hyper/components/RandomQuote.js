import {h, app} from 'hyperapp'

export default function RandomQuote({state, actions}) {
  return (
    <section id="RandomQuote">
      <div class="container">
        <h1>“Until I discovered cooking, I was never really interested in anything.”</h1>
        <span class="author">- Julia Child -</span>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
