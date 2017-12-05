import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
    <section id="ContactUs" class="texture">
      <div class="container">
        <h2 class="comp-title">Contact Us</h2>
        <div class="box">
          <div class="row">
            <div class="col-md-6">
              <div class="title">
                {state.companyInfo.location}
              </div>
              <p class="address">122 South Beverly Drive<br/>
                Beverly Hills, California 90212</p>
              <p><strong>email: </strong><a href="#">honor_bar@gmail.com</a></p>
            </div>
            <div class="col-md-6">
              <h5>Call directly</h5>
              <div class="title">
                + {state.companyInfo.phone}
              </div>
              <p>
                <strong>Sun – Thurs:</strong>	11:30am – 11pm
              </p>
              <p>
                <strong>Fri – Sat:</strong>	11:30am – 12am
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
