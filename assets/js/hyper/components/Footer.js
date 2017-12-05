import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer>
      <div class="container">
        <nav class="menu">
          <a href="#">Our Story</a>
          <a href="#">Special Menu</a>
          <a href="#">Reviews</a>
          <a href='#'>Reservations</a>
          <a href='#'>Contact Us</a>
        </nav>
        <ul class="social_media">
          <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
        <div class="copyright">
          © 2017 Copyright
        </div>
      </div>
    </footer>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
