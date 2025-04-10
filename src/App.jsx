import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { networkAtom, jobsAtom, notificationAtom, messagingAtom , totalNotificationSelector   } from './atom'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkNotification = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  /// i can use usememo here to memoize the valuses

  //using selector
  // i defined the selector in atom.js check


  const totalNotification = useRecoilValue(totalNotificationSelector)

  return (
    <div style={{ padding: '30px', backgroundColor: '#f2f2f2' }}>
      <h1>LinkedIn Clone</h1>
      <button style={btnStyle}>Home</button>
      <button style={btnStyle}>
        My Network ({networkNotification >= 100 ? '99+' : networkNotification})
      </button>
      <button style={btnStyle}>Jobs ({jobsAtomCount})</button>
      <button style={btnStyle}>Messaging ({messagingAtomCount}) </button>
      <button style={btnStyle}>Notification ({notificationAtomCount})</button>
      <button style={btnStyle}>Me ({totalNotification})</button>
    </div>
  )
}

const btnStyle = {
  padding: '10px 20px',
  margin: '8px',
  fontSize: '16px',
  borderRadius: '8px',
  backgroundColor: '#0073b1',
  color: 'white',
  border: 'none'
}

export default App
