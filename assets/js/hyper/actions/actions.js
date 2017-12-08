export const actions = {
  reviewRightClick,
  reviewLeftClick,
  intro,
  showMenu
}

function reviewRightClick (state,actions) {
  return (
    {reviewStatus: {currentReview: state.reviewStatus.currentReview+1}}
  )
}

function reviewLeftClick (state,actions) {
  return (
    {reviewStatus: {currentReview: state.reviewStatus.currentReview-1}}
  )
}

function showMenu(){
}

function intro(state, actions){
  console.log('Just ran my first action' )
  return (
    {count: state.count + 1}
  )
}
