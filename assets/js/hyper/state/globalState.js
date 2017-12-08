
var companyInfo = {
  title: 'Be Honored',
  phone: '(408)-768-9986',
  location: 'Los Angeles, California'
}
var specialMenuData = [
  {
    title: 'Honor Burger',
    description: 'Fresh ground chuck, cheddar & tomato, topped with coleslaw',
    price: 15,
    classTitle: 'box-image1'
  },
  {
    title: 'Veggie Club',
    description: 'Persian cucumber, French feta, avocado, arugula & pickled onion',
    price: 14,
    classTitle: 'box-image2'
  },
  {
    title: 'Hand-Cut French Fries',
    description: 'U.S.#1 Kennebec potatoes, served with dipping sauces',
    price: 5,
    classTitle: 'box-image3'
  }
]

var reviews = [
  {
      review: 'I\'ve heard only good things about Honor Bar and I finally got to try it for myself this past weekend. Everyone says you have to try the chucked sandwich, you must! 100% one of the best chicken sandwiches I\'ve ever had. Enjoyed it with a nice glass of rosé, it was lovely. The restaurant is on the smaller side so If you go on a busy day like the weekends there\'s likely to be a wait. Highly recommend waiting for a table outside if it\'s a nice day out. All in all the staff was great, food was delicious, and the experience lived up to the hype. Don\'t miss out on this place!',
      highlight: 'Best restaurant in the LA area',
      company: 'The Food Network'
  },
  {
      review: 'I\'ve heard only good things about Honor Bar and I finally got to try it for myself this past weekend. Everyone says you have to try the chucked sandwich, you must! 100% one of the best chicken sandwiches I\'ve ever had. Enjoyed it with a nice glass of rosé, it was lovely. The restaurant is on the smaller side so If you go on a busy day like the weekends there\'s likely to be a wait. Highly recommend waiting for a table outside if it\'s a nice day out. All in all the staff was great, food was delicious, and the experience lived up to the hype. Don\'t miss out on this place!',
      highlight: 'Best restaurant. Period.',
      company: 'HBO'
  },
  {
      review: 'I\'ve heard only good things about Honor Bar and I finally got to try it for myself this past weekend. Everyone says you have to try the chucked sandwich, you must! 100% one of the best chicken sandwiches I\'ve ever had. Enjoyed it with a nice glass of rosé, it was lovely. The restaurant is on the smaller side so If you go on a busy day like the weekends there\'s likely to be a wait. Highly recommend waiting for a table outside if it\'s a nice day out. All in all the staff was great, food was delicious, and the experience lived up to the hype. Don\'t miss out on this place!',
      highlight: 'Fast and modern',
      company: 'LA Times'
  }
]

var randomQuote = [
  {
    author: 'Jacques Pepin',
    quote: 'Great cooking favors the prepared hands'
  }
]

export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviews,
  reviewStatus: {
    currentReview: 0,
  }

}
