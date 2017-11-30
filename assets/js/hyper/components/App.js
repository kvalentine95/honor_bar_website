import {h, app} from 'hyperapp'
import Header from './Header.js'
import TopImg from './TopImg.js'
export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <div>
        <Header state={state} actions={actions}/>
        <TopImg state={state} actions={actions}/>
      </div>
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>