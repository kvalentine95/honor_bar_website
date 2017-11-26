import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
    <section class="TopImg">
      <div class="title">
        <h5>Welcome</h5>
        <h1>Be Honored</h1>
      </div>
      <div class="contact-info">
        <div>Book Table Directly</div>
        <h2>(408) 768 9986</h2>
        <div class="hours">
          Opening hours: <strong>MON-FRI:</strong> 09:00-21:00/<strong>WEEKEND: </strong>09:00-22:00
        </div>
      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
