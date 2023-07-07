import { Link } from 'react-router-dom'

export default function Modal({
  modalId,
  header,
  message,
  footer
}) {
  return (
    <div className="modal fade" id={modalId} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header" style={{border:"none"}}>
            {header}
          </div>
          <div className="modal-body justify-content-center">
            {message}
          </div>
          <div className="modal-footer justify-content-center" style={{border:"none", marginBottom:"30px"}}>
            {footer}
          </div>
        </div>
      </div>
    </div>
    
    
  )
} 