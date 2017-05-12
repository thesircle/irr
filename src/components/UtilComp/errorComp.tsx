// import CloseButton from 'react-icons/lib/fa/close'
import '../../stylesheets/ShowErrors.scss'

export const ShowErrors = ({ errors=[]}) =>
  <div className="show-errors">
    {(errors.length) ?
    errors.map((message, i) =>
                <div key={i} className="error">
                  <p>{message}</p>
                </div>)
    : null
    }
  </div>
