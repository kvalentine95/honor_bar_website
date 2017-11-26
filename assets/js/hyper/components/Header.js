import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
      <div class="logo">
        Logo
      </div>
      <nav>
        <a href="#">Menu</a>
        <a href="#">Locations</a>
        <a href="#">Catering</a>
        <a href="#">Reservations</a>
      </nav>

    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
