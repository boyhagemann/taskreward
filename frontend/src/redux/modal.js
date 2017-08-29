const MODAL_OPEN = 'modal.open'
const MODAL_CLOSE = 'modal.close'

export const open = (modalType, properties) => ({
  type: MODAL_OPEN,
  modalType,
  properties
})

export const close = () => ({ type: MODAL_CLOSE })

export default (state = {}, action) => {

  switch(action.type) {

    case MODAL_OPEN:
      return {
        show: true,
        type: action.modalType,
        properties: action.properties
      }

    case MODAL_CLOSE:
      return { show: false }

    default:
      return state
  }
}
